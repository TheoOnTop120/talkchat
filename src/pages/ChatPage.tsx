import { useEffect, useRef, useState } from "react";
import type { FormEvent, KeyboardEvent } from "react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { useAuth } from "../auth/AuthContext";
import RequireAuth from "../components/RequireAuth";
import ProfileAvatar from "../components/ProfileAvatar";
import SiteHeader from "../components/SiteHeader";
import { chatCopy } from "../i18n/chat";
import { useRouter } from "../routing/routerContext";
import {
  getChatClient,
  getConversationDetails,
  getConversationMessages,
  insertMessage,
} from "../services/chat";
import type { ConversationDetails } from "../services/chat";
import type { AppPageProps } from "../types/app";
import type { Message } from "../types/database";
import "../styles/chat.css";

type DisplayMessage = Message & { sendStatus?: "sending" | "failed" };

type ChatPageProps = AppPageProps & { conversationId: string };

function mergeMessages(
  current: DisplayMessage[],
  incoming: DisplayMessage[],
): DisplayMessage[] {
  const messagesById = new Map(current.map((message) => [message.id, message]));
  for (const message of incoming) messagesById.set(message.id, message);
  return [...messagesById.values()].sort(
    (left, right) => Date.parse(left.created_at) - Date.parse(right.created_at),
  );
}

function ChatPageContent({
  locale,
  theme,
  t,
  conversationId,
  ...pageProps
}: ChatPageProps) {
  const { session } = useAuth();
  const { navigate } = useRouter();
  const userId = session?.user.id;
  const [details, setDetails] = useState<ConversationDetails | null>(null);
  const [messages, setMessages] = useState<DisplayMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
  });

  useEffect(() => {
    if (!userId) return;
    const activeUserId = userId;

    let active = true;
    let channel: RealtimeChannel | undefined;
    let client: Awaited<ReturnType<typeof getChatClient>> | undefined;

    async function openConversation() {
      setLoading(true);
      setLoadError(false);
      try {
        const supabase = await getChatClient();
        if (!active) return;
        client = supabase;
        channel = supabase
          .channel(`conversation:${conversationId}`)
          .on(
            "postgres_changes",
            {
              event: "INSERT",
              schema: "public",
              table: "messages",
              filter: `conversation_id=eq.${conversationId}`,
            },
            (payload) => {
              const incoming = payload.new as Message;
              setMessages((current) => mergeMessages(current, [incoming]));
            },
          )
          .subscribe();

        const [conversationDetails, history] = await Promise.all([
          getConversationDetails(conversationId, activeUserId),
          getConversationMessages(conversationId),
        ]);
        if (active) {
          setDetails(conversationDetails);
          setMessages((current) => mergeMessages(history, current));
        }
      } catch {
        if (active) setLoadError(true);
      } finally {
        if (active) setLoading(false);
      }
    }

    void openConversation();
    return () => {
      active = false;
      if (client && channel) void client.removeChannel(channel);
    };
  }, [conversationId, userId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  async function send(content: string, retryId?: string) {
    if (!userId || !content.trim()) return;
    const normalizedContent = content.trim();
    const optimisticId = retryId ?? `pending-${crypto.randomUUID()}`;
    const optimisticMessage: DisplayMessage = {
      id: optimisticId,
      conversation_id: conversationId,
      sender_id: userId,
      content: normalizedContent,
      created_at: new Date().toISOString(),
      sendStatus: "sending",
    };

    setMessages((current) =>
      mergeMessages(
        current.filter((message) => message.id !== optimisticId),
        [optimisticMessage],
      ),
    );
    setSending(true);
    try {
      const savedMessage = await insertMessage(
        conversationId,
        userId,
        normalizedContent,
      );
      setMessages((current) =>
        mergeMessages(
          current.filter(
            (message) =>
              message.id !== optimisticId && message.id !== savedMessage.id,
          ),
          [savedMessage],
        ),
      );
    } catch {
      setMessages((current) =>
        current.map((message) =>
          message.id === optimisticId
            ? { ...message, sendStatus: "failed" }
            : message,
        ),
      );
    } finally {
      setSending(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const content = draft;
    if (!content.trim()) return;
    setDraft("");
    void send(content);
  }

  function handleComposerKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      event.currentTarget.form?.requestSubmit();
    }
  }

  return (
    <div className="site-shell" data-theme={theme}>
      <a className="skip-link" href="#main-content">
        {t("skipLink")}
      </a>
      <SiteHeader {...pageProps} locale={locale} theme={theme} t={t} />
      <main className="messaging-main chat-main" id="main-content">
        <section aria-label={details?.otherUser.display_name ?? details?.otherUser.username ?? "TalkChat"} className="chat-panel">
          <header className="chat-toolbar">
            <button
              aria-label={chatCopy(locale, "chatBack")}
              className="chat-back-button"
              onClick={() => navigate("/")}
              type="button"
            >
              <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path
                  d="m12.5 4.5-6 5.5 6 5.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.7"
                />
              </svg>
              <span>{chatCopy(locale, "chatBack")}</span>
            </button>
            {details && (
              <div className="chat-contact">
                <ProfileAvatar
                  className="contact-avatar"
                  name={details.otherUser.display_name || details.otherUser.username}
                  url={details.otherUser.avatar_url}
                />
                <strong>
                  {details.otherUser.display_name || `@${details.otherUser.username}`}
                </strong>
              </div>
            )}
          </header>

          {loading ? (
            <p className="chat-state" role="status">
              {chatCopy(locale, "chatLoading")}
            </p>
          ) : loadError || !details ? (
            <p className="chat-state chat-inline-error" role="alert">
              {chatCopy(locale, "chatError")}
            </p>
          ) : (
            <>
              <div aria-live="polite" className="chat-history" role="log">
                {messages.length === 0 && (
                  <p className="chat-empty">{chatCopy(locale, "chatEmpty")}</p>
                )}
                {messages.map((message) => {
                  const ownMessage = message.sender_id === userId;
                  return (
                    <article
                      className={`chat-message ${ownMessage ? "is-own" : ""}`}
                      key={message.id}
                    >
                      <div className="chat-message-bubble">
                        <p>{message.content}</p>
                      </div>
                      <div className="chat-message-meta">
                        <time dateTime={message.created_at}>
                          {timeFormatter.format(new Date(message.created_at))}
                        </time>
                        {message.sendStatus === "sending" && (
                          <span>{chatCopy(locale, "messageSending")}</span>
                        )}
                        {message.sendStatus === "failed" && (
                          <>
                            <span role="alert">
                              {chatCopy(locale, "messageFailed")}
                            </span>
                            <button
                              aria-label={chatCopy(locale, "retryMessage")}
                              className="message-retry"
                              onClick={() => void send(message.content, message.id)}
                              type="button"
                            >
                              {chatCopy(locale, "retryMessage")}
                            </button>
                          </>
                        )}
                      </div>
                    </article>
                  );
                })}
                <div ref={bottomRef} />
              </div>
              <form className="message-composer" onSubmit={handleSubmit}>
                <label className="visually-hidden" htmlFor="message-draft">
                  {chatCopy(locale, "messagePlaceholder")}
                </label>
                <textarea
                  id="message-draft"
                  maxLength={4000}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={handleComposerKeyDown}
                  placeholder={chatCopy(locale, "messagePlaceholder")}
                  rows={1}
                  value={draft}
                />
                <button
                  aria-label={chatCopy(locale, "sendMessage")}
                  disabled={!draft.trim() || sending}
                  title={chatCopy(locale, "sendMessage")}
                  type="submit"
                >
                  <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                    <path
                      d="m3.5 9.5 12-5-3.8 11-2.4-4.1-5.8-1.9Z"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="m9.3 11.4 3.4-3.5"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </form>
            </>
          )}
        </section>
      </main>
    </div>
  );
}

function ChatPage(props: ChatPageProps) {
  return (
    <RequireAuth t={props.t}>
      <ChatPageContent {...props} />
    </RequireAuth>
  );
}

export default ChatPage;
