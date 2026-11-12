import type { SupabaseClient } from "@supabase/supabase-js";
import type { Conversation, Database, Message, Profile } from "../types/database";
import { getSupabaseClient } from "../utils/supabase";

export type ConversationPreview = {
  conversation: Conversation;
  otherUser: Pick<Profile, "id" | "username" | "display_name" | "avatar_url">;
  lastMessage: Message | null;
  activityAt: string;
};

export type ConversationDetails = {
  conversation: Conversation;
  otherUser: Pick<Profile, "id" | "username" | "display_name" | "avatar_url">;
};

export async function getChatClient(): Promise<SupabaseClient<Database>> {
  const client = await getSupabaseClient();
  if (!client) {
    throw new Error("Supabase is not configured.");
  }
  return client as SupabaseClient<Database>;
}

export async function getConversationPreviews(
  userId: string,
): Promise<ConversationPreview[]> {
  const client = await getChatClient();
  const participantResult = await client
    .from("conversation_participants")
    .select("conversation_id")
    .eq("user_id", userId);
  if (participantResult.error) throw participantResult.error;

  const conversationIds = participantResult.data.map(
    ({ conversation_id }) => conversation_id,
  );
  if (!conversationIds.length) return [];

  const [conversationResult, participantListResult] = await Promise.all([
      client
        .from("conversations")
        .select("id, created_at")
        .in("id", conversationIds),
      client
        .from("conversation_participants")
        .select("conversation_id, user_id")
        .in("conversation_id", conversationIds),
    ]);
  if (conversationResult.error) throw conversationResult.error;
  if (participantListResult.error) throw participantListResult.error;

  const latestMessageResults = await Promise.all(
    conversationIds.map((conversationId) =>
      client
        .from("messages")
        .select("id, conversation_id, sender_id, content, created_at")
        .eq("conversation_id", conversationId)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle(),
    ),
  );
  const latestMessages = latestMessageResults.flatMap((result) => {
    if (result.error) throw result.error;
    return result.data ? [result.data] : [];
  });

  const otherParticipantIds = [
    ...new Set(
      participantListResult.data
        .filter(({ user_id }) => user_id !== userId)
        .map(({ user_id }) => user_id),
    ),
  ];
  const profileResult = otherParticipantIds.length
    ? await client
        .from("profiles")
        .select("id, username, display_name, avatar_url")
        .in("id", otherParticipantIds)
    : { data: [], error: null };
  if (profileResult.error) throw profileResult.error;

  const profileById = new Map(
    profileResult.data.map((profile) => [profile.id, profile]),
  );
  const otherUserByConversation = new Map<string, Profile["id"]>();
  for (const participant of participantListResult.data) {
    if (participant.user_id !== userId) {
      otherUserByConversation.set(
        participant.conversation_id,
        participant.user_id,
      );
    }
  }

  const latestMessageByConversation = new Map<string, Message>();
  for (const message of latestMessages) {
    latestMessageByConversation.set(message.conversation_id, message);
  }

  return conversationResult.data
    .flatMap((conversation) => {
      const otherUserId = otherUserByConversation.get(conversation.id);
      const otherUser = otherUserId ? profileById.get(otherUserId) : undefined;
      if (!otherUser) return [];
      const lastMessage =
        latestMessageByConversation.get(conversation.id) ?? null;
      return [
        {
          conversation,
          otherUser,
          lastMessage,
          activityAt: lastMessage?.created_at ?? conversation.created_at,
        },
      ];
    })
    .sort(
      (left, right) =>
        Date.parse(right.activityAt) - Date.parse(left.activityAt),
    );
}

export async function getConversationDetails(
  conversationId: string,
  userId: string,
): Promise<ConversationDetails> {
  const client = await getChatClient();
  const [conversationResult, participantResult] = await Promise.all([
    client
      .from("conversations")
      .select("id, created_at")
      .eq("id", conversationId)
      .maybeSingle(),
    client
      .from("conversation_participants")
      .select("user_id")
      .eq("conversation_id", conversationId),
  ]);
  if (conversationResult.error) throw conversationResult.error;
  if (participantResult.error) throw participantResult.error;
  if (!conversationResult.data) throw new Error("Conversation not found.");

  const otherUserId = participantResult.data.find(
    ({ user_id }) => user_id !== userId,
  )?.user_id;
  if (!otherUserId) throw new Error("Conversation participant not found.");

  const profileResult = await client
    .from("profiles")
    .select("id, username, display_name, avatar_url")
    .eq("id", otherUserId)
    .single();
  if (profileResult.error) throw profileResult.error;

  return {
    conversation: conversationResult.data,
    otherUser: profileResult.data,
  };
}

export async function getConversationMessages(
  conversationId: string,
): Promise<Message[]> {
  const client = await getChatClient();
  const result = await client
    .from("messages")
    .select("id, conversation_id, sender_id, content, created_at")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true })
    .limit(1000);
  if (result.error) throw result.error;
  return result.data;
}

export async function findProfileByUsername(
  username: string,
  currentUserId: string,
): Promise<Pick<Profile, "id" | "username" | "display_name" | "avatar_url"> | null> {
  const client = await getChatClient();
  const result = await client
    .from("profiles")
    .select("id, username, display_name, avatar_url")
    .eq("username", username.trim().toLowerCase())
    .neq("id", currentUserId)
    .maybeSingle();
  if (result.error) throw result.error;
  return result.data;
}

export async function getOrCreateDirectConversation(
  otherUserId: string,
): Promise<string> {
  const client = await getChatClient();
  const result = await client.rpc("get_or_create_direct_conversation", {
    other_user_id: otherUserId,
  });
  if (result.error) throw result.error;
  return result.data;
}

export async function insertMessage(
  conversationId: string,
  senderId: string,
  content: string,
): Promise<Message> {
  const client = await getChatClient();
  const result = await client
    .from("messages")
    .insert({
      conversation_id: conversationId,
      sender_id: senderId,
      content,
    })
    .select("id, conversation_id, sender_id, content, created_at")
    .single();
  if (result.error) throw result.error;
  return result.data;
}
