import { useEffect, useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { translate } from "../i18n/messages";
import "../styles/home.css";
import type { Locale } from "../types/theme";
import { getInitialTheme, saveTheme } from "../utils/theme";

function HomePage() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [locale, setLocale] = useState<Locale>("fr");
  const t = (key: Parameters<typeof translate>[1]) => translate(locale, key);

  useEffect(() => {
    document.documentElement.lang = locale;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#f8f7ff" : "#15141f");
  }, [locale, theme]);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    saveTheme(nextTheme);
  }

  return (
    <div className="site-shell" data-theme={theme}>
      <a className="skip-link" href="#main-content">
        {t("skipLink")}
      </a>

      <header className="site-header">
        <a aria-label="TalkChat — accueil" className="brand" href="#home">
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
        </a>

        <nav aria-label={t("home")} className="main-nav">
          <a className="nav-link active" href="#home">
            {t("home")}
          </a>
          <a className="nav-link" href="#features">
            {t("features")}
          </a>
          <a className="nav-link" href="#about">
            {t("about")}
          </a>
        </nav>

        <div className="header-actions">
          <label className="visually-hidden" htmlFor="language-select">
            {t("language")}
          </label>
          <select
            className="language-select"
            id="language-select"
            onChange={(event) => setLocale(event.target.value as Locale)}
            value={locale}
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
          <ThemeToggle
            label={theme === "light" ? t("themeDark") : t("themeLight")}
            onToggle={toggleTheme}
            theme={theme}
          />
        </div>
      </header>

      <main id="main-content">
        <section aria-labelledby="hero-title" className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span aria-hidden="true" className="eyebrow-dot" />
              {t("eyebrow")}
            </p>
            <h1 id="hero-title">
              {t("headlineStart")}
              <br />
              <span>{t("headlineAccent")}</span>
            </h1>
            <p className="hero-description">{t("intro")}</p>
            <div className="hero-actions">
              <button className="button button-primary" disabled type="button">
                {t("primaryAction")}
                <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M4.2 10h11.6m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.7"
                  />
                </svg>
              </button>
              <a className="button button-secondary" href="#about">
                {t("secondaryAction")}
              </a>
            </div>
            <p className="launch-note">
              <span aria-hidden="true" className="launch-note-icon">
                ✦
              </span>
              {t("footer")}
            </p>
          </div>

          <div aria-label={t("previewLabel")} className="preview-wrap">
            <div aria-hidden="true" className="decor decor-one" />
            <div aria-hidden="true" className="decor decor-two" />
            <div className="chat-preview">
              <div className="preview-topline">
                <span className="preview-window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="preview-lock">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
                    <rect
                      height="7"
                      rx="1.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      width="10"
                      x="3"
                      y="7"
                    />
                    <path
                      d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.3"
                    />
                  </svg>
                  TalkChat
                </span>
                <span aria-hidden="true" className="preview-menu">
                  ···
                </span>
              </div>

              <div className="conversation-header">
                <div aria-hidden="true" className="avatar avatar-sun">
                  <span>J</span>
                  <i />
                </div>
                <div>
                  <p className="conversation-name">{t("previewGreeting")}</p>
                  <p className="conversation-status">
                    <span aria-hidden="true" />
                    {t("online")}
                  </p>
                </div>
                <button
                  aria-label={t("previewLabel")}
                  className="conversation-more"
                  type="button"
                >
                  ···
                </button>
              </div>

              <div aria-live="off" className="message-area">
                <p className="message-day">
                  <span />
                  TalkChat
                  <span />
                </p>
                <div className="message-row">
                  <div aria-hidden="true" className="avatar avatar-lilac">
                    M
                  </div>
                  <div className="message-content">
                    <div className="message-bubble">
                      <p>{t("previewMessage")}</p>
                    </div>
                    <span className="message-time">{t("previewTime")}</span>
                  </div>
                </div>
                <div aria-hidden="true" className="typing-indicator">
                  <i />
                  <i />
                  <i />
                </div>
              </div>

              <div className="preview-composer">
                <span>{t("previewLabel")}</span>
                <button aria-label={t("primaryAction")} type="button">
                  <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                    <path
                      d="m4 10 11.5-5-3.7 11-2.3-4-5.5-2Z"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="m9.5 12 3.4-3.6"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div aria-hidden="true" className="floating-badge">
              <span className="badge-sparkle">✦</span>
              <span>Un petit mot, beaucoup de lien.</span>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="features-title"
          className="features-section"
          id="features"
        >
          <div className="section-heading">
            <span className="section-kicker">01 / {t("features")}</span>
            <h2 id="features-title">{t("featureTitle")}</h2>
            <p>{t("featureBody")}</p>
          </div>
          <ul className="feature-list">
            <li>
              <span
                aria-hidden="true"
                className="feature-icon feature-icon-lock"
              >
                <svg fill="none" viewBox="0 0 24 24">
                  <rect
                    height="10"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    width="15"
                    x="4.5"
                    y="10"
                  />
                  <path
                    d="M8 10V7a4 4 0 0 1 8 0v3"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <span>{t("featurePrivacy")}</span>
            </li>
            <li>
              <span
                aria-hidden="true"
                className="feature-icon feature-icon-screen"
              >
                <svg fill="none" viewBox="0 0 24 24">
                  <rect
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    width="20"
                    x="2"
                    y="3"
                  />
                  <path
                    d="M8 21h8m-4-4v4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.6"
                  />
                </svg>
              </span>
              <span>{t("featureResponsive")}</span>
            </li>
            <li>
              <span
                aria-hidden="true"
                className="feature-icon feature-icon-spark"
              >
                ✦
              </span>
              <span>{t("featureOpen")}</span>
            </li>
          </ul>
        </section>

        <section aria-label={t("about")} className="about-note" id="about">
          <span aria-hidden="true" className="about-orbit">
            ✳
          </span>
          <p>{t("footerStatus")}</p>
          <span aria-hidden="true" className="about-orbit">
            ✳
          </span>
        </section>
      </main>

      <footer className="site-footer">
        <a
          aria-label="TalkChat — accueil"
          className="brand footer-brand"
          href="#home"
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
        </a>
        <p>{t("footer")}</p>
        <span className="footer-status">
          <i />
          {t("footerStatus")}
        </span>
      </footer>
    </div>
  );
}

export default HomePage;
