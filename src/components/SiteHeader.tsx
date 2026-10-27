import { AppLink } from "../routing/Router";
import type { MessageKey } from "../i18n/messages";
import type { Locale, Theme } from "../types/theme";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useId, useRef, useState } from "react";
import type {
  CSSProperties,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { useAuth } from "../auth/useAuth";
import { getAuthErrorKey } from "../services/auth";
import { locales } from "../i18n/locales";

const englishLanguageNames = new Intl.DisplayNames(["en"], {
  type: "language",
});

function normalizeLanguageSearch(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase();
}

const searchableLocales = locales.map((entry) => ({
  ...entry,
  englishName: englishLanguageNames.of(entry.code) ?? entry.name,
}));

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
  const [languagePickerOpen, setLanguagePickerOpen] = useState(false);
  const [languageQuery, setLanguageQuery] = useState("");
  const [languagePickerTop, setLanguagePickerTop] = useState(0);
  const pickerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const pickerId = useId();
  const selectedLocale = locales.find((entry) => entry.code === locale);
  const normalizedQuery = normalizeLanguageSearch(languageQuery.trim());
  const filteredLocales = searchableLocales.filter(({ code, name, englishName }) =>
    [name, englishName, code].some((value) =>
      normalizeLanguageSearch(value).includes(normalizedQuery),
    ),
  );

  useEffect(() => {
    if (!languagePickerOpen) return;

    searchRef.current?.focus();

    function repositionPicker() {
      setLanguagePickerTop(
        (triggerRef.current?.getBoundingClientRect().bottom ?? 0) + 10,
      );
    }
    repositionPicker();

    function handlePointerDown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !pickerRef.current?.contains(event.target)
      ) {
        setLanguagePickerOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setLanguagePickerOpen(false);
        triggerRef.current?.focus();
      }
    }

    window.addEventListener("resize", repositionPicker);
    window.addEventListener("scroll", repositionPicker, true);
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", repositionPicker);
      window.removeEventListener("scroll", repositionPicker, true);
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [languagePickerOpen]);

  function focusOption(index: number) {
    optionRefs.current[index]?.focus();
  }

  function handleOptionKeyDown(
    event: ReactKeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number | undefined;
    if (event.key === "ArrowDown") nextIndex = index + 1;
    if (event.key === "ArrowUp") nextIndex = index - 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = filteredLocales.length - 1;

    if (nextIndex !== undefined) {
      event.preventDefault();
      focusOption(Math.max(0, Math.min(nextIndex, filteredLocales.length - 1)));
    }
  }

  function selectLocale(nextLocale: Locale) {
    onLocaleChange(nextLocale);
    setLanguagePickerOpen(false);
    setLanguageQuery("");
    triggerRef.current?.focus();
  }

  function toggleLanguagePicker() {
    if (!languagePickerOpen) {
      setLanguagePickerTop(
        (triggerRef.current?.getBoundingClientRect().bottom ?? 0) + 10,
      );
    }
    setLanguagePickerOpen((open) => !open);
  }

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
      <AppLink aria-label={t("brandHome")} className="brand" to="/">
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
        <div className="language-picker" ref={pickerRef}>
          <button
            aria-controls={languagePickerOpen ? pickerId : undefined}
            aria-expanded={languagePickerOpen}
            aria-haspopup="dialog"
            aria-label={`${t("language")}: ${selectedLocale?.name ?? locale}`}
            className="language-picker-trigger"
            onClick={toggleLanguagePicker}
            ref={triggerRef}
            type="button"
          >
            <span lang={locale}>{selectedLocale?.name ?? locale}</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 16 16">
              <path
                d="m4 6 4 4 4-4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>
          {languagePickerOpen && (
            <section
              aria-label={t("language")}
              className="language-picker-panel"
              id={pickerId}
              role="dialog"
              style={
                {
                  "--language-picker-top": `${languagePickerTop}px`,
                } as CSSProperties
              }
            >
              <label className="visually-hidden" htmlFor={`${pickerId}-search`}>
                {t("searchLanguages")}
              </label>
              <div className="language-picker-search">
                <svg aria-hidden="true" fill="none" viewBox="0 0 20 20">
                  <circle
                    cx="8.75"
                    cy="8.75"
                    r="5.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="m13 13 4 4"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                </svg>
                <input
                  autoComplete="off"
                  className="language-picker-input"
                  id={`${pickerId}-search`}
                  onChange={(event) => setLanguageQuery(event.target.value)}
                  placeholder={t("searchLanguages")}
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown" && filteredLocales.length) {
                      event.preventDefault();
                      focusOption(0);
                    }
                    if (event.key === "Enter" && filteredLocales.length) {
                      event.preventDefault();
                      selectLocale(filteredLocales[0].code);
                    }
                  }}
                  ref={searchRef}
                  type="search"
                  value={languageQuery}
                />
              </div>
              {filteredLocales.length ? (
                <div
                  aria-label={t("language")}
                  className="language-picker-options"
                  role="listbox"
                >
                  {filteredLocales.map(({ code, direction, englishName, name }, index) => (
                    <button
                      aria-selected={locale === code}
                      className={`language-picker-option${locale === code ? " is-selected" : ""}`}
                      key={code}
                      lang={code}
                      onClick={() => selectLocale(code)}
                      onKeyDown={(event) => handleOptionKeyDown(event, index)}
                      ref={(element) => {
                        optionRefs.current[index] = element;
                      }}
                      role="option"
                      type="button"
                    >
                      <span className="language-picker-option-names">
                        <span dir={direction}>{name}</span>
                        {normalizeLanguageSearch(name) !==
                          normalizeLanguageSearch(englishName) && (
                          <span className="language-picker-option-secondary" dir="ltr">
                            {englishName}
                          </span>
                        )}
                      </span>
                      {locale === code && (
                        <svg
                          aria-hidden="true"
                          className="language-picker-check"
                          fill="none"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="m3.5 8.5 3 3 6-7"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.7"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="language-picker-empty" role="status">
                  {t("noLanguagesFound")}
                </p>
              )}
            </section>
          )}
        </div>
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
