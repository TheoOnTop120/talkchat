import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import type { AppPageProps } from "../types/app";
import LegalFooterLinks from "./LegalFooterLinks";
import "../styles/auth.css";

type AuthLayoutProps = AppPageProps & {
  title: string;
  intro: string;
  children: ReactNode;
  wide?: boolean;
  legal?: boolean;
};

function AuthLayout({
  title,
  intro,
  children,
  wide = false,
  legal = false,
  ...pageProps
}: AuthLayoutProps) {
  return (
    <div className="site-shell auth-shell" data-theme={pageProps.theme}>
      <a className="skip-link" href="#main-content">
        {pageProps.t("skipLink")}
      </a>
      <SiteHeader {...pageProps} />
      <main
        className={`auth-main${legal ? " auth-main-legal" : ""}`}
        id="main-content"
      >
        <section
          aria-labelledby="auth-title"
          className={`auth-card${wide ? " auth-card-wide" : ""}${legal ? " legal-card" : ""}`}
        >
          <p className="auth-eyebrow">TalkChat</p>
          <h1 id="auth-title" tabIndex={-1}>
            {title}
          </h1>
          <p className="auth-intro">{intro}</p>
          {children}
        </section>
      </main>
      <footer className="auth-footer">
        <p>{pageProps.t("footer")}</p>
        <LegalFooterLinks t={pageProps.t} />
      </footer>
    </div>
  );
}

export default AuthLayout;
