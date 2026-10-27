import { useState } from "react";
import FormField from "./FormField";
import type { MessageKey } from "../i18n/messages";
import { fieldDescriptionIds } from "../utils/forms";

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

function PasswordField({
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

export default PasswordField;
