import { useState } from "react";
import type { FormEvent } from "react";
import AuthLayout from "../components/AuthLayout";
import PasswordField from "../components/PasswordField";
import { AppLink } from "../routing/Router";
import type { MessageKey } from "../i18n/messages";
import type { AppPageProps } from "../types/app";
import { useAuth } from "../auth/useAuth";
import { getAuthErrorKey } from "../services/auth";
import { passwordRules } from "../utils/validation";

function ResetPasswordPage(props: AppPageProps) {
  const { status, error, updatePassword } = useAuth();
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<"password" | "confirmation", MessageKey>>
  >({});
  const [authError, setAuthError] = useState<MessageKey | null>(null);
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const callbackError =
    new URLSearchParams(window.location.search).has("error") ||
    new URLSearchParams(window.location.search).has("error_code");
  const rules = passwordRules(password);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAuthError(null);
    const nextErrors: typeof errors = {};

    if (!Object.values(rules).every(Boolean)) {
      nextErrors.password = password ? "errorPasswordRules" : "errorRequired";
    }
    if (!confirmation || confirmation !== password) {
      nextErrors.confirmation = confirmation
        ? "errorPasswordMismatch"
        : "errorRequired";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    setLoading(true);
    try {
      await updatePassword(password);
      setPassword("");
      setConfirmation("");
      setUpdated(true);
    } catch (error) {
      setAuthError(getAuthErrorKey(error));
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      {...props}
      intro={props.t("authResetPasswordIntro")}
      title={props.t("authResetPasswordTitle")}
    >
      {updated ? (
        <div className="confirmation-panel">
          <p className="form-status" role="status">
            {props.t("authPasswordUpdated")}
          </p>
          <AppLink className="form-submit form-submit-link" to="/">
            {props.t("goHome")}
          </AppLink>
        </div>
      ) : status === "loading" ? (
        <p className="form-status" role="status">
          {props.t("authCheckingSession")}
        </p>
      ) : status !== "signed-in" || callbackError ? (
        <div className="confirmation-panel">
          <p className="form-error-summary" role="alert">
            {props.t(
              status === "error"
                ? (error ?? "authOperationError")
                : "authResetLinkRequired",
            )}
          </p>
          <AppLink
            className="form-submit form-submit-link"
            to="/forgot-password"
          >
            {props.t("forgotLink")}
          </AppLink>
        </div>
      ) : (
        <form className="auth-form" noValidate onSubmit={handleSubmit}>
          {Object.values(errors).some(Boolean) && (
            <p className="form-error-summary" role="alert">
              {props.t("formErrorSummary")}
            </p>
          )}
          {authError && (
            <p className="form-error-summary" role="alert">
              {props.t(authError)}
            </p>
          )}
          <PasswordField
            autoComplete="new-password"
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
          <PasswordField
            autoComplete="new-password"
            error={
              errors.confirmation ? props.t(errors.confirmation) : undefined
            }
            id="confirmation"
            label={props.t("passwordConfirmLabel")}
            onChange={(value) => {
              setConfirmation(value);
              setErrors((current) => ({
                ...current,
                confirmation: undefined,
              }));
            }}
            placeholder={props.t("passwordConfirmPlaceholder")}
            t={props.t}
            value={confirmation}
          />
          <button
            aria-busy={loading}
            className="form-submit"
            disabled={loading}
            type="submit"
          >
            {loading
              ? props.t("authResetPasswordLoading")
              : props.t("authResetPasswordSubmit")}
          </button>
        </form>
      )}
    </AuthLayout>
  );
}

export default ResetPasswordPage;
