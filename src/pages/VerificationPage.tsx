import { useState } from "react";
import type { FormEvent } from "react";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";
import { AppLink } from "../routing/Router";
import type { MessageKey } from "../i18n/messages";
import type { AppPageProps } from "../types/app";
import { useAuth } from "../auth/useAuth";
import { getAuthErrorKey } from "../services/auth";
import { fieldDescriptionIds } from "../utils/forms";
import { validateEmail } from "../utils/validation";

function VerificationPage(props: AppPageProps) {
  const { status, session, resendSignupConfirmation } = useAuth();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<MessageKey>();
  const [authError, setAuthError] = useState<MessageKey | null>(null);
  const [loading, setLoading] = useState(false);
  const [requested, setRequested] = useState(false);
  const callbackError =
    new URLSearchParams(window.location.search).has("error") ||
    new URLSearchParams(window.location.search).has("error_code");
  const emailConfirmed = Boolean(session?.user.email_confirmed_at);
  const accountReady = status === "signed-in" && !callbackError;

  async function handleResend(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAuthError(null);
    const nextError = validateEmail(email);
    setEmailError(nextError);

    if (nextError) {
      document.getElementById("verification-email")?.focus();
      return;
    }

    setLoading(true);
    try {
      await resendSignupConfirmation(email);
      setRequested(true);
    } catch (error) {
      setAuthError(getAuthErrorKey(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      {...props}
      intro={props.t("verifyIntro")}
      title={props.t("verifyTitle")}
    >
      {emailConfirmed ? (
        <div className="confirmation-panel">
          <span aria-hidden="true" className="confirmation-icon">
            ✓
          </span>
          <p className="form-status" role="status">
            {props.t("authEmailVerified")}
          </p>
          <AppLink className="form-submit form-submit-link" to="/">
            {props.t("goHome")}
          </AppLink>
        </div>
      ) : accountReady ? (
        <div className="confirmation-panel">
          <p className="form-status" role="status">
            {props.t("authAccountReady")}
          </p>
          <AppLink className="form-submit form-submit-link" to="/">
            {props.t("goHome")}
          </AppLink>
        </div>
      ) : (
        <>
          <p className="form-status" role={callbackError ? "alert" : "status"}>
            {props.t(
              callbackError
                ? "authInvalidCallback"
                : requested
                  ? "authEmailLinkRequested"
                  : "authVerifyPending",
            )}
          </p>
          <form className="auth-form" noValidate onSubmit={handleResend}>
            {authError && (
              <p className="form-error-summary" role="alert">
                {props.t(authError)}
              </p>
            )}
            <FormField
              error={emailError ? props.t(emailError) : undefined}
              id="verification-email"
              label={props.t("authResendEmail")}
            >
              <input
                aria-describedby={fieldDescriptionIds("verification-email", {
                  error: Boolean(emailError),
                })}
                aria-invalid={Boolean(emailError)}
                autoComplete="email"
                className="text-input"
                dir="ltr"
                id="verification-email"
                onChange={(event) => {
                  setEmail(event.target.value);
                  setEmailError(undefined);
                  setRequested(false);
                }}
                placeholder={props.t("emailPlaceholder")}
                type="email"
                value={email}
              />
            </FormField>
            <button
              aria-busy={loading}
              className="form-submit"
              disabled={loading}
              type="submit"
            >
              {loading
                ? props.t("authResendLoading")
                : props.t("authResendConfirmation")}
            </button>
          </form>
        </>
      )}
      <p className="auth-switch">
        <AppLink to="/register">{props.t("verifyBack")}</AppLink>
      </p>
    </AuthLayout>
  );
}

export default VerificationPage;
