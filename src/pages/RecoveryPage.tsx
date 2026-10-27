import { useState } from "react";
import type { FormEvent } from "react";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";
import { AppLink } from "../routing/Router";
import type { AppPageProps } from "../types/app";
import type { MessageKey } from "../i18n/messages";
import { fieldDescriptionIds } from "../utils/forms";
import { validateEmail } from "../utils/validation";
import { useAuth } from "../auth/useAuth";
import { getAuthErrorKey } from "../services/auth";

function RecoveryPage(props: AppPageProps) {
  const { requestPasswordReset } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<MessageKey>();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [authError, setAuthError] = useState<MessageKey | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAuthError(null);
    const nextError = validateEmail(email);
    setError(nextError);

    if (nextError) {
      document.getElementById("email")?.focus();
      return;
    }

    setLoading(true);
    try {
      await requestPasswordReset(email);
      setEmail("");
      setSubmitted(true);
    } catch (requestError) {
      setAuthError(getAuthErrorKey(requestError));
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      {...props}
      intro={props.t(submitted ? "authRecoveryAccepted" : "forgotIntro")}
      title={props.t("forgotTitle")}
    >
      {submitted ? (
        <div className="confirmation-panel">
          <span aria-hidden="true" className="confirmation-icon">
            ✓
          </span>
          <AppLink className="form-submit form-submit-link" to="/login">
            {props.t("returnLogin")}
          </AppLink>
        </div>
      ) : (
        <form className="auth-form" noValidate onSubmit={handleSubmit}>
          {authError && (
            <p className="form-error-summary" role="alert">
              {props.t(authError)}
            </p>
          )}
          <FormField
            error={error ? props.t(error) : undefined}
            id="email"
            label={props.t("emailLabel")}
          >
            <input
              aria-describedby={fieldDescriptionIds("email", {
                error: Boolean(error),
              })}
              aria-invalid={Boolean(error)}
              autoComplete="email"
              className="text-input"
              dir="ltr"
              id="email"
              onChange={(event) => {
                setEmail(event.target.value);
                setError(undefined);
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
            {loading ? props.t("resetLoading") : props.t("resetSubmit")}
          </button>
        </form>
      )}
      <p className="auth-switch">
        <AppLink to="/login">{props.t("returnLogin")}</AppLink>
      </p>
    </AuthLayout>
  );
}

export default RecoveryPage;
