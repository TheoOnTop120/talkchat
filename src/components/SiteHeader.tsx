import { AppLink } from "../routing/Router";
import type { MessageKey } from "../i18n/messages";
import type { Locale, Theme } from "../types/theme";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { getAuthErrorKey } from "../services/auth";

type SiteHeaderProps = {
  locale: Locale;
  theme: Theme;
  t: (key: MessageKey) => string;
  onLocaleChange: (locale: Locale) => void;
  onThemeToggle: () => void;
};

function SiteHeader({
  locale,
  theme,
  t,
  onLocaleChange,
  onThemeToggle,
}: SiteHeaderProps) {
  const { status, signOut } = useAuth();
  const [signOutError, setSignOutError] = useState<MessageKey | null>(null);

  async function handleSignOut() {
    setSignOutError(null);
    try {
      await signOut();
    } catch (error) {
      setSignOutError(getAuthErrorKey(error));
    }
  }

  return (
    <header className="site-header">
      <AppLink
        aria-label={t("brandHome")}
        className="brand"
        to="/"
      >
        <span aria-hidden="true" className="brand-mark">
          <svg fill="none" viewBox="0 0 28 28">
            <path
              d="M5 8.25A3.25 3.25 0 0 1 8.25 5h11.5A3.25 3.25 0 0 1 23 8.25v7.5A3.25 3.25 0 0 1 19.75 19H13l-5 4v-4h-.75A3.25 3.25 0 0 1 4 15.75v-7.5A3.25 3.25 0 0 1 7.25 5Z"
              fill="currentColor"
            />
            <circle cx="10" cy="12" r="1" fill="var(--bubble-dot)" />
            <circle cx="14" cy="12" r="1" fill="var(--bubble-dot)" />
            <circle cx="18" cy="12" r="1" fill="var(--bubble-dot)" />
          </svg>
        </span>
        <span className="brand-name">TalkChat</span>
      </AppLink>

      <nav aria-label={t("primaryNavigation")} className="main-nav">
        <AppLink className="nav-link" to="/">
          {t("home")}
        </AppLink>
        <AppLink className="nav-link" to="/#features">
          {t("features")}
        </AppLink>
        <AppLink className="nav-link" to="/#about">
          {t("about")}
        </AppLink>
      </nav>

      <div className="header-actions">
        {status === "signed-in" ? (
          <button
            className="header-signout-link"
            onClick={handleSignOut}
            type="button"
          >
            {t("signOut")}
          </button>
        ) : (
          <>
            <AppLink className="header-auth-link" to="/login">
              {t("navLogin")}
            </AppLink>
            <AppLink className="header-signup-link" to="/register">
              {t("navSignup")}
            </AppLink>
          </>
        )}
        <label className="visually-hidden" htmlFor="language-select">
          {t("language")}
        </label>
        <select
          className="language-select"
          id="language-select"
          onChange={(event) => {
            if (event.target.value === "fr" || event.target.value === "en") {
              onLocaleChange(event.target.value);
            }
          }}
          value={locale}
        >
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>
        <ThemeToggle
          label={t(theme === "light" ? "themeDark" : "themeLight")}
          onToggle={onThemeToggle}
          theme={theme}
        />
        {signOutError && (
          <span className="header-auth-error" role="alert">
            {t(signOutError)}
          </span>
        )}
      </div>
    </header>
  );
}

export default SiteHeader;
