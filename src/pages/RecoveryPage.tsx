import { useState } from "react";
import type { FormEvent } from "react";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";
import { AppLink } from "../routing/Router";
import type { AppPageProps } from "../types/app";
import type { MessageKey } from "../i18n/messages";
import { fieldDescriptionIds } from "../utils/forms";
import { validateEmail } from "../utils/validation";

function RecoveryPage(props: AppPageProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<MessageKey>();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextError = validateEmail(email);
    setError(nextError);

    if (nextError) {
      document.getElementById("email")?.focus();
      return;
    }

    setLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    setLoading(false);
    setEmail("");
    setSubmitted(true);
  }

  return (
    <AuthLayout
      {...props}
      intro={props.t(submitted ? "resetConfirmBody" : "forgotIntro")}
      title={props.t(submitted ? "resetConfirmTitle" : "forgotTitle")}
    >
      {submitted ? (
        <div className="confirmation-panel">
          <span aria-hidden="true" className="confirmation-icon">
            ✓
          </span>
          <p className="form-status" role="status">
            {props.t("resetNoSend")}
          </p>
          <AppLink className="form-submit form-submit-link" to="/login">
            {props.t("returnLogin")}
          </AppLink>
        </div>
      ) : (
        <form className="auth-form" noValidate onSubmit={handleSubmit}>
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
          <p className="form-status form-status-subtle" role="status">
            {props.t("resetNoSend")}
          </p>
        </form>
      )}
      <p className="auth-switch">
        <AppLink to="/login">{props.t("returnLogin")}</AppLink>
      </p>
    </AuthLayout>
  );
}

export default RecoveryPage;
