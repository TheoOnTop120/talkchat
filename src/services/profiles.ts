import type { Profile } from "../types/database";
import { getChatClient } from "./chat";

export type EditableProfile = Pick<
  Profile,
  "id" | "username" | "display_name" | "avatar_url"
>;

export class ProfileServiceError extends Error {
  readonly code: string;

  constructor(code: string) {
    super(code);
    this.name = "ProfileServiceError";
    this.code = code;
  }
}

export async function getOwnProfile(userId: string): Promise<EditableProfile> {
  const client = await getChatClient();
  const result = await client
    .from("profiles")
    .select("id, username, display_name, avatar_url")
    .eq("id", userId)
    .single();
  if (result.error) throw new ProfileServiceError(result.error.code);
  return result.data;
}

export async function updateOwnProfile(
  userId: string,
  profile: Pick<EditableProfile, "username" | "display_name" | "avatar_url">,
): Promise<EditableProfile> {
  const client = await getChatClient();
  const result = await client
    .from("profiles")
    .update(profile)
    .eq("id", userId)
    .select("id, username, display_name, avatar_url")
    .single();
  if (result.error) throw new ProfileServiceError(result.error.code);
  return result.data;
}