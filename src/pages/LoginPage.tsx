import { useState } from "react";
import type { FormEvent } from "react";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";
import PasswordField from "../components/PasswordField";
import { AppLink } from "../routing/Router";
import type { AppPageProps } from "../types/app";
import type { MessageKey } from "../i18n/messages";
import { fieldDescriptionIds } from "../utils/forms";
import { validateEmail } from "../utils/validation";

function LoginPage(props: AppPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Partial<Record<"email" | "password", MessageKey>>>({});
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(false);
    const nextErrors: Partial<Record<"email" | "password", MessageKey>> = {};
    const emailError = validateEmail(email);

    if (emailError) {
      nextErrors.email = emailError;
    }

    if (!password) {
      nextErrors.password = "errorRequired";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    setLoading(true);
    await new Promise((resolve) => window.setTimeout(resolve, 650));
    setLoading(false);
    setPassword("");
    setNotice(true);
  }

  return (
    <AuthLayout
      {...props}
      intro={props.t("loginIntro")}
      title={props.t("loginTitle")}
    >
      <form className="auth-form" noValidate onSubmit={handleSubmit}>
        {Object.values(errors).some(Boolean) && (
          <p className="form-error-summary" role="alert">
            {props.t("formErrorSummary")}
          </p>
        )}
        <FormField
          error={errors.email ? props.t(errors.email) : undefined}
          id="email"
          label={props.t("emailLabel")}
        >
          <input
            aria-describedby={fieldDescriptionIds("email", {
              error: Boolean(errors.email),
            })}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            className="text-input"
            id="email"
            onChange={(event) => {
              setEmail(event.target.value);
              setErrors((current) => ({ ...current, email: undefined }));
            }}
            placeholder={props.t("emailPlaceholder")}
            type="email"
            value={email}
          />
        </FormField>
        <div className="password-field-stack">
          <PasswordField
            autoComplete="current-password"
            error={errors.password ? props.t(errors.password) : undefined}
            id="password"
            label={props.t("passwordLabel")}
            onChange={(value) => {
              setPassword(value);
              setErrors((current) => ({ ...current, password: undefined }));
            }}
            placeholder={props.t("passwordPlaceholder")}
            t={props.t}
            value={password}
          />
          <AppLink className="form-side-link" to="/forgot-password">
            {props.t("forgotLink")}
          </AppLink>
        </div>
        <button
          aria-busy={loading}
          className="form-submit"
          disabled={loading}
          type="submit"
        >
          {loading ? props.t("loginLoading") : props.t("loginSubmit")}
        </button>
        {notice && (
          <p className="form-status" role="status">
            {props.t("loginDemoNotice")}
          </p>
        )}
      </form>
      <p className="auth-switch">
        {props.t("noAccount")}{" "}
        <AppLink to="/register">{props.t("registerLink")}</AppLink>
      </p>
    </AuthLayout>
  );
}

export default LoginPage;
