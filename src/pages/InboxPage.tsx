import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import type { RealtimeChannel } from "@supabase/supabase-js";
import { useAuth } from "../auth/AuthContext";
import LegalFooterLinks from "../components/LegalFooterLinks";
import SiteHeader from "../components/SiteHeader";
import { chatCopy } from "../i18n/chat";
import { AppLink } from "../routing/Router";
import { useRouter } from "../routing/routerContext";
import {
  findProfileByUsername,
  getChatClient,
  getConversationPreviews,
  getOrCreateDirectConversation,
} from "../services/chat";
import type { ConversationPreview } from "../services/chat";
import type { AppPageProps } from "../types/app";
import type { Profile } from "../types/database";
import "../styles/chat.css";

function InboxPage({ locale, theme, t, ...pageProps }: AppPageProps) {
  const { session } = useAuth();
  const { navigate } = useRouter();
  const userId = session?.user.id;
  const [conversations, setConversations] = useState<ConversationPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [username, setUsername] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [searchResult, setSearchResult] = useState<
    Pick<Profile, "id" | "username" | "avatar_url"> | null
  >(null);

  useEffect(() => {
    if (!userId) return;
    const activeUserId = userId;

    let active = true;
    let channel: RealtimeChannel | undefined;
    let client: Awaited<ReturnType<typeof getChatClient>> | undefined;

    async function refresh(showLoading: boolean) {
      if (showLoading && active) setLoading(true);
      try {
        const previews = await getConversationPreviews(activeUserId);
        if (active) {
          setConversations(previews);
          setLoadError(false);
        }
      } catch {
        if (active) setLoadError(true);
      } finally {
        if (active) setLoading(false);
      }
    }

    void refresh(true);
    void getChatClient()
      .then((supabase) => {
        if (!active) return;
        client = supabase;
        channel = supabase
          .channel(`inbox:${activeUserId}`)
          .on(
            "postgres_changes",
            { event: "INSERT", schema: "public", table: "messages" },
            () => void refresh(false),
          )
          .subscribe();
      })
      .catch(() => {
        if (active) setLoadError(true);
      });

    return () => {
      active = false;
      if (client && channel) void client.removeChannel(channel);
    };
  }, [userId]);

  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!userId || !username.trim()) return;

    setSearching(true);
    setSearchError(false);
    setSearchResult(null);
    try {
      const profile = await findProfileByUsername(
        username.trim().replace(/^@/, ""),
        userId,
      );
      setSearchResult(profile);
      setSearchError(!profile);
    } catch {
      setSearchError(true);
    } finally {
      setSearching(false);
    }
  }

  async function handleStartConversation(otherUserId: string) {
    setSearching(true);
    setSearchError(false);
    try {
      const conversationId =
        await getOrCreateDirectConversation(otherUserId);
      navigate(`/chat/${conversationId}`);
    } catch {
      setSearchError(true);
    } finally {
      setSearching(false);
    }
  }

  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="site-shell" data-theme={theme}>
      <a className="skip-link" href="#main-content">
        {t("skipLink")}
      </a>
      <SiteHeader {...pageProps} locale={locale} theme={theme} t={t} />
      <main className="messaging-main" id="main-content">
        <section aria-labelledby="inbox-title" className="inbox-layout">
          <div className="inbox-heading">
            <div>
              <p className="chat-eyebrow">TalkChat / {t("home")}</p>
              <h1 id="inbox-title" tabIndex={-1}>
                {chatCopy(locale, "inboxTitle")}
              </h1>
              <p>{chatCopy(locale, "inboxIntro")}</p>
            </div>
          </div>

          <section aria-label={chatCopy(locale, "searchLabel")} className="contact-search">
            <form className="contact-search-form" onSubmit={handleSearch}>
              <label htmlFor="username-search">
                {chatCopy(locale, "searchLabel")}
              </label>
              <div className="contact-search-controls">
                <input
                  autoComplete="off"
                  id="username-search"
                  maxLength={30}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder={chatCopy(locale, "searchPlaceholder")}
                  value={username}
                />
                <button disabled={searching || !username.trim()} type="submit">
                  {searching
                    ? chatCopy(locale, "messageSending")
                    : chatCopy(locale, "searchSubmit")}
                </button>
              </div>
            </form>
            {searchError && (
              <p className="chat-inline-error" role="alert">
                {chatCopy(locale, "searchNoResult")}
              </p>
            )}
            {searchResult && (
              <div className="contact-result">
                <span aria-hidden="true" className="contact-avatar">
                  {searchResult.username.slice(0, 1).toUpperCase()}
                </span>
                <span className="contact-result-name">@{searchResult.username}</span>
                <button
                  disabled={searching}
                  onClick={() => void handleStartConversation(searchResult.id)}
                  type="button"
                >
                  {chatCopy(locale, "startConversation")}
                </button>
              </div>
            )}
          </section>

          <section aria-label={chatCopy(locale, "inboxTitle")} className="conversation-list">
            {loading ? (
              <p className="chat-state" role="status">
                {chatCopy(locale, "inboxLoading")}
              </p>
            ) : loadError ? (
              <p className="chat-state chat-inline-error" role="alert">
                {chatCopy(locale, "inboxError")}
              </p>
            ) : conversations.length === 0 ? (
              <p className="chat-state">{chatCopy(locale, "inboxEmpty")}</p>
            ) : (
              conversations.map((preview) => (
                <AppLink
                  className="conversation-item"
                  key={preview.conversation.id}
                  to={`/chat/${preview.conversation.id}`}
                >
                  <span aria-hidden="true" className="contact-avatar">
                    {preview.otherUser.username.slice(0, 1).toUpperCase()}
                  </span>
                  <span className="conversation-item-copy">
                    <span className="conversation-item-topline">
                      <strong>@{preview.otherUser.username}</strong>
                      <time dateTime={preview.activityAt}>
                        {timeFormatter.format(new Date(preview.activityAt))}
                      </time>
                    </span>
                    <span className="conversation-item-preview">
                      {preview.lastMessage
                        ? preview.lastMessage.sender_id === userId
                          ? `${chatCopy(locale, "ownMessage")}: ${preview.lastMessage.content}`
                          : preview.lastMessage.content
                        : chatCopy(locale, "chatEmpty")}
                    </span>
                  </span>
                </AppLink>
              ))
            )}
          </section>
        </section>
      </main>
      <footer className="messaging-footer">
        <LegalFooterLinks t={t} />
      </footer>
    </div>
  );
}

export default InboxPage;
