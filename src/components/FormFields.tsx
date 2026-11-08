import { useState } from "react";
import type { ReactNode } from "react";
import type { MessageKey } from "../i18n/messages";
import { fieldDescriptionIds } from "../utils/forms";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
};

export function FormField({ id, label, error, hint, children }: FormFieldProps) {
  return (
    <div className="form-field">
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      {children}
      {hint && (
        <p className="field-hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p className="field-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

type PasswordFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  t: (key: MessageKey) => string;
  error?: string;
  hint?: string;
  autoComplete: "current-password" | "new-password";
};

export function PasswordField({
  id,
  label,
  placeholder,
  value,
  onChange,
  t,
  error,
  hint,
  autoComplete,
}: PasswordFieldProps) {
  const [visible, setVisible] = useState(false);

  return (
    <FormField error={error} hint={hint} id={id} label={label}>
      <div className="password-input-wrap">
        <input
          aria-describedby={fieldDescriptionIds(id, {
            error: Boolean(error),
            hint: Boolean(hint),
          })}
          aria-invalid={Boolean(error)}
          autoComplete={autoComplete}
          className="text-input"
          dir="ltr"
          id={id}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          type={visible ? "text" : "password"}
          value={value}
        />
        <button
          aria-label={t(visible ? "hidePassword" : "showPassword")}
          aria-pressed={visible}
          className="password-visibility"
          onClick={() => setVisible(!visible)}
          type="button"
        >
          {t(visible ? "hidePassword" : "showPassword")}
        </button>
      </div>
    </FormField>
  );
}