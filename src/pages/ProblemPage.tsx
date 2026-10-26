import AuthLayout from "../components/AuthLayout";
import { AppLink } from "../routing/Router";
import type { AppPageProps } from "../types/app";
import type { MessageKey } from "../i18n/messages";

type ProblemPageProps = AppPageProps & {
  kind: "error" | "access" | "not-found" | "unavailable";
  pathname: string;
};

const problemContent: Record<
  ProblemPageProps["kind"],
  { title: MessageKey; body: MessageKey; code: MessageKey }
> = {
  error: {
    title: "errorTitle",
    body: "errorBody",
    code: "errorCode",
  },
  access: {
    title: "accessDeniedTitle",
    body: "accessDeniedBody",
    code: "errorCode",
  },
  "not-found": {
    title: "notFoundTitle",
    body: "notFoundBody",
    code: "notFoundCode",
  },
  unavailable: {
    title: "unavailableTitle",
    body: "unavailableBody",
    code: "unavailableCode",
  },
};

function ProblemPage({ kind, pathname, ...props }: ProblemPageProps) {
  const content = problemContent[kind];
  const body =
    pathname === "/legal/terms"
      ? props.t("legalTermsUnavailable")
      : pathname === "/legal/privacy"
        ? props.t("legalPrivacyUnavailable")
        : props.t(content.body);

  return (
    <AuthLayout {...props} intro={body} title={props.t(content.title)}>
      <div className="problem-panel">
        <span aria-hidden="true" className="problem-code">
          {kind === "not-found" ? "404" : kind === "access" ? "403" : "!"}
        </span>
        <p className="problem-caption">{props.t(content.code)}</p>
        <div className="problem-actions">
          <AppLink className="form-submit form-submit-link" to="/">
            {props.t("goHome")}
          </AppLink>
          <AppLink className="button-secondary" to="/login">
            {props.t("tryLogin")}
          </AppLink>
        </div>
      </div>
    </AuthLayout>
  );
}

export default ProblemPage;
