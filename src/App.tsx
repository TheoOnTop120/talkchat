import { lazy, Suspense, useEffect, useState } from "react";
import type { ReactNode } from "react";
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

const HomePage = lazy(() => import("./pages/HomePage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const ProblemPage = lazy(() => import("./pages/ProblemPage"));
const RecoveryPage = lazy(() => import("./pages/RecoveryPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const ResetPasswordPage = lazy(() => import("./pages/ResetPasswordPage"));
const VerificationPage = lazy(() => import("./pages/VerificationPage"));

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

  let page: ReactNode;
  if (catalogLoadError) {
    return <main role="alert">{translate("en", "catalogLoadError")}</main>;
  }
  if (readyLocale !== locale) {
    return <main aria-busy="true">TalkChat</main>;
  }

  switch (pathname) {
    case "/":
      page = <HomePage {...pageProps} />;
      break;
    case "/login":
      page = <LoginPage {...pageProps} />;
      break;
    case "/register":
      page = <RegisterPage {...pageProps} />;
      break;
    case "/forgot-password":
      page = <RecoveryPage {...pageProps} />;
      break;
    case "/reset-password":
      page = <ResetPasswordPage {...pageProps} />;
      break;
    case "/verify-email":
      page = <VerificationPage {...pageProps} />;
      break;
    case "/legal/terms":
      page = <LegalPage {...pageProps} documentId="terms" />;
      break;
    case "/legal/privacy":
      page = <LegalPage {...pageProps} documentId="privacy" />;
      break;
    case "/legal/community":
      page = <LegalPage {...pageProps} documentId="community" />;
      break;
    case "/legal/report":
      page = <LegalPage {...pageProps} documentId="report" />;
      break;
    case "/legal/security":
      page = <LegalPage {...pageProps} documentId="security" />;
      break;
    case "/error":
      page = <ProblemPage {...pageProps} kind="error" pathname={pathname} />;
      break;
    case "/access-denied":
      page = <ProblemPage {...pageProps} kind="access" pathname={pathname} />;
      break;
    case "/unavailable":
      page = (
        <ProblemPage {...pageProps} kind="unavailable" pathname={pathname} />
      );
      break;
    case "/not-found":
      page = (
        <ProblemPage {...pageProps} kind="not-found" pathname={pathname} />
      );
      break;
    default:
      page = (
        <ProblemPage {...pageProps} kind="not-found" pathname={pathname} />
      );
      break;
  }

  return (
    <Suspense fallback={<main aria-busy="true">TalkChat</main>}>
      {page}
    </Suspense>
  );
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
