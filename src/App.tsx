import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import LoginPage from "./pages/LoginPage";
import ProblemPage from "./pages/ProblemPage";
import RecoveryPage from "./pages/RecoveryPage";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import VerificationPage from "./pages/VerificationPage";
import { RouterProvider } from "./routing/Router";
import { useRouter } from "./routing/useRouter";
import { loadMessageCatalog, translate } from "./i18n/messages";
import { loadLegalCatalog } from "./i18n/legal";
import type { MessageKey } from "./i18n/messages";
import type { Locale, Theme } from "./types/theme";
import { getInitialTheme, saveTheme } from "./utils/theme";
import { AuthProvider } from "./auth/AuthProvider";
import {
  applyLocaleToDocument,
  getInitialLocale,
  saveLocale,
} from "./i18n/locales";

function RoutedApp() {
  const { pathname } = useRouter();
  const [theme, setTheme] = useState(getInitialTheme);
  const [locale, setLocale] = useState<Locale>(() => {
    try {
      return getInitialLocale(window.localStorage, navigator.languages);
    } catch {
      return getInitialLocale(null, navigator.languages);
    }
  });
  const [readyLocale, setReadyLocale] = useState<Locale | null>(null);
  const [catalogLoadError, setCatalogLoadError] = useState(false);
  const t = (key: MessageKey) => translate(locale, key);

  useEffect(() => {
    let active = true;
    void Promise.all([loadMessageCatalog(locale), loadLegalCatalog(locale)])
      .then(() => {
        if (active) setReadyLocale(locale);
      })
      .catch(() => {
        if (active) setCatalogLoadError(true);
      });

    return () => {
      active = false;
    };
  }, [locale]);

  useEffect(() => {
    if (readyLocale !== locale) return;
    applyLocaleToDocument(locale, document.documentElement);
    document.title = translate(locale, "pageTitle");
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", translate(locale, "pageDescription"));
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#f8f7ff" : "#15141f");
  }, [locale, readyLocale, theme]);

  useEffect(() => {
    requestAnimationFrame(() => {
      document.querySelector<HTMLElement>("main h1")?.focus();
    });
  }, [pathname]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    saveTheme(nextTheme);
  }

  function changeLocale(nextLocale: Locale) {
    setCatalogLoadError(false);
    setLocale(nextLocale);
    try {
      saveLocale(nextLocale, window.localStorage);
    } catch {
      saveLocale(nextLocale, null);
    }
  }

  const pageProps = {
    locale,
    theme,
    t,
    onLocaleChange: changeLocale,
    onThemeToggle: toggleTheme,
  };

  if (catalogLoadError) {
    return <main role="alert">{translate("en", "catalogLoadError")}</main>;
  }
  if (readyLocale !== locale) {
    return <main aria-busy="true">TalkChat</main>;
  }

  switch (pathname) {
    case "/":
      return <HomePage {...pageProps} />;
    case "/login":
      return <LoginPage {...pageProps} />;
    case "/register":
      return <RegisterPage {...pageProps} />;
    case "/forgot-password":
      return <RecoveryPage {...pageProps} />;
    case "/reset-password":
      return <ResetPasswordPage {...pageProps} />;
    case "/verify-email":
      return <VerificationPage {...pageProps} />;
    case "/legal/terms":
      return <LegalPage {...pageProps} documentId="terms" />;
    case "/legal/privacy":
      return <LegalPage {...pageProps} documentId="privacy" />;
    case "/legal/community":
      return <LegalPage {...pageProps} documentId="community" />;
    case "/legal/report":
      return <LegalPage {...pageProps} documentId="report" />;
    case "/legal/security":
      return <LegalPage {...pageProps} documentId="security" />;
    case "/error":
      return <ProblemPage {...pageProps} kind="error" pathname={pathname} />;
    case "/access-denied":
      return <ProblemPage {...pageProps} kind="access" pathname={pathname} />;
    case "/unavailable":
      return (
        <ProblemPage {...pageProps} kind="unavailable" pathname={pathname} />
      );
    case "/not-found":
      return (
        <ProblemPage {...pageProps} kind="not-found" pathname={pathname} />
      );
    default:
      return (
        <ProblemPage {...pageProps} kind="not-found" pathname={pathname} />
      );
  }
}

function App() {
  return (
    <AuthProvider>
      <RouterProvider>
        <RoutedApp />
      </RouterProvider>
    </AuthProvider>
  );
}

export default App;
