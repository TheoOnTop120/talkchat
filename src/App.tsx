import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProblemPage from "./pages/ProblemPage";
import RecoveryPage from "./pages/RecoveryPage";
import RegisterPage from "./pages/RegisterPage";
import VerificationPage from "./pages/VerificationPage";
import { RouterProvider } from "./routing/Router";
import { useRouter } from "./routing/useRouter";
import { translate } from "./i18n/messages";
import type { MessageKey } from "./i18n/messages";
import type { Locale, Theme } from "./types/theme";
import { getInitialTheme, saveTheme } from "./utils/theme";

function RoutedApp() {
  const { pathname } = useRouter();
  const [theme, setTheme] = useState(getInitialTheme);
  const [locale, setLocale] = useState<Locale>("fr");
  const t = (key: MessageKey) => translate(locale, key);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = translate(locale, "pageTitle");
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "light" ? "#f8f7ff" : "#15141f");
  }, [locale, theme]);

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

  const pageProps = {
    locale,
    theme,
    t,
    onLocaleChange: setLocale,
    onThemeToggle: toggleTheme,
  };

  switch (pathname) {
    case "/":
      return <HomePage {...pageProps} />;
    case "/login":
      return <LoginPage {...pageProps} />;
    case "/register":
      return <RegisterPage {...pageProps} />;
    case "/forgot-password":
      return <RecoveryPage {...pageProps} />;
    case "/verify-email":
      return <VerificationPage {...pageProps} />;
    case "/error":
      return <ProblemPage {...pageProps} kind="error" pathname={pathname} />;
    case "/access-denied":
      return <ProblemPage {...pageProps} kind="access" pathname={pathname} />;
    case "/unavailable":
    case "/legal/terms":
    case "/legal/privacy":
      return (
        <ProblemPage
          {...pageProps}
          kind="unavailable"
          pathname={pathname}
        />
      );
    case "/not-found":
      return (
        <ProblemPage {...pageProps} kind="not-found" pathname={pathname} />
      );
    default:
      return (
        <ProblemPage
          {...pageProps}
          kind="not-found"
          pathname={pathname}
        />
      );
  }
}

function App() {
  return (
    <RouterProvider>
      <RoutedApp />
    </RouterProvider>
  );
}

export default App;
