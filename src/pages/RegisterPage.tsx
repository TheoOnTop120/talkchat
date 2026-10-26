import { useState } from "react";
import type { FormEvent } from "react";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";
import PasswordField from "../components/PasswordField";
import { AppLink } from "../routing/Router";
import { useRouter } from "../routing/useRouter";
import type { MessageKey } from "../i18n/messages";
import type { AppPageProps } from "../types/app";
import { fieldDescriptionIds } from "../utils/forms";
import {
  isAtLeastThirteen,
  isValidBirthDate,
  passwordRules,
  validateEmail,
} from "../utils/validation";

function RegisterPage(props: AppPageProps) {
  const { navigate } = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<"displayName" | "email" | "birthDate" | "password" | "confirmation" | "accepted", MessageKey>>
  >({});
  const [loading, setLoading] = useState(false);
  const rules = passwordRules(password);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: typeof errors = {};

    if (displayName.trim().length < 2 || displayName.trim().length > 40) {
      nextErrors.displayName = "errorDisplayName";
    }

    const emailError = validateEmail(email);
    if (emailError) {
      nextErrors.email = emailError;
    }

    if (!birthDate) {
      nextErrors.birthDate = "errorBirthRequired";
    } else if (!isValidBirthDate(birthDate)) {
      nextErrors.birthDate = "errorBirthInvalid";
    } else if (birthDate > new Date().toISOString().slice(0, 10)) {
      nextErrors.birthDate = "errorBirthInvalid";
    } else if (!isAtLeastThirteen(birthDate)) {
      nextErrors.birthDate = "errorUnderage";
    }

    if (!Object.values(rules).every(Boolean)) {
      nextErrors.password = password ? "errorPasswordRules" : "errorRequired";
    }

    if (confirmation !== password || !confirmation) {
      nextErrors.confirmation = confirmation
        ? "errorPasswordMismatch"
        : "errorRequired";
    }

    if (!accepted) {
      nextErrors.accepted = "errorTerms";
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
    setConfirmation("");
    navigate("/verify-email");
  }

  const passwordChecklist: Array<[keyof typeof rules, MessageKey]> = [
    ["length", "passwordRuleLength"],
    ["uppercase", "passwordRuleUppercase"],
    ["lowercase", "passwordRuleLowercase"],
    ["number", "passwordRuleNumber"],
    ["symbol", "passwordRuleSymbol"],
  ];

  return (
    <AuthLayout
      {...props}
      intro={props.t("registerIntro")}
      title={props.t("registerTitle")}
      wide
    >
      <form className="auth-form" noValidate onSubmit={handleSubmit}>
        {Object.values(errors).some(Boolean) && (
          <p className="form-error-summary" role="alert">
            {props.t("formErrorSummary")}
          </p>
        )}
        <FormField
          error={errors.displayName ? props.t(errors.displayName) : undefined}
          id="displayName"
          label={props.t("displayNameLabel")}
        >
          <input
            aria-describedby={fieldDescriptionIds("displayName", {
              error: Boolean(errors.displayName),
            })}
            aria-invalid={Boolean(errors.displayName)}
            autoComplete="nickname"
            className="text-input"
            id="displayName"
            maxLength={40}
            onChange={(event) => {
              setDisplayName(event.target.value);
              setErrors((current) => ({ ...current, displayName: undefined }));
            }}
            placeholder={props.t("displayNamePlaceholder")}
            type="text"
            value={displayName}
          />
        </FormField>
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
        <FormField
          error={errors.birthDate ? props.t(errors.birthDate) : undefined}
          hint={props.t("birthDateHint")}
          id="birthDate"
          label={props.t("birthDateLabel")}
        >
          <input
            aria-describedby={fieldDescriptionIds("birthDate", {
              error: Boolean(errors.birthDate),
              hint: true,
            })}
            aria-invalid={Boolean(errors.birthDate)}
            autoComplete="bday"
            className="text-input"
            id="birthDate"
            max={new Date().toISOString().slice(0, 10)}
            onChange={(event) => {
              setBirthDate(event.target.value);
              setErrors((current) => ({ ...current, birthDate: undefined }));
            }}
            type="date"
            value={birthDate}
          />
        </FormField>
        <div className="password-field-stack">
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
          <div aria-label={props.t("passwordRulesTitle")} className="password-rules">
            <p>{props.t("passwordRulesTitle")}</p>
            <ul>
              {passwordChecklist.map(([rule, key]) => (
                <li
                  aria-label={`${props.t(key)}: ${props.t(
                    rules[rule] ? "requirementMet" : "requirementPending",
                  )}`}
                  className={rules[rule] ? "rule-met" : ""}
                  key={rule}
                >
                  <span aria-hidden="true">{rules[rule] ? "✓" : "○"}</span>
                  {props.t(key)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <PasswordField
          autoComplete="new-password"
          error={
            errors.confirmation ? props.t(errors.confirmation) : undefined
          }
          id="confirmation"
          label={props.t("passwordConfirmLabel")}
          onChange={(value) => {
            setConfirmation(value);
            setErrors((current) => ({ ...current, confirmation: undefined }));
          }}
          placeholder={props.t("passwordConfirmPlaceholder")}
          t={props.t}
          value={confirmation}
        />
        <div className="terms-field">
          <label className="checkbox-label" htmlFor="accepted">
            <input
              aria-describedby={errors.accepted ? "accepted-error" : undefined}
              aria-invalid={Boolean(errors.accepted)}
              checked={accepted}
              id="accepted"
              onChange={(event) => {
                setAccepted(event.target.checked);
                setErrors((current) => ({ ...current, accepted: undefined }));
              }}
              type="checkbox"
            />
            <span>
              {props.t("termsPrefix")}{" "}
              <AppLink to="/legal/terms">
                {props.t("termsLink")}
              </AppLink>{" "}
              {props.t("termsAnd")}{" "}
              <AppLink to="/legal/privacy">
                {props.t("privacyLink")}
              </AppLink>
              {props.t("termsSuffix")}
            </span>
          </label>
          {errors.accepted && (
            <p className="field-error" id="accepted-error" role="alert">
              {props.t(errors.accepted)}
            </p>
          )}
        </div>
        <button
          aria-busy={loading}
          className="form-submit"
          disabled={loading}
          type="submit"
        >
          {loading ? props.t("signupLoading") : props.t("signupSubmit")}
        </button>
        {loading && (
          <p className="form-status" role="status">
            {props.t("signupDemoNotice")}
          </p>
        )}
      </form>
      <p className="auth-switch">
        {props.t("haveAccount")}{" "}
        <AppLink to="/login">{props.t("loginLink")}</AppLink>
      </p>
    </AuthLayout>
  );
}

export default RegisterPage;
