import type { ReactNode } from "react";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: ReactNode;
};

function FormField({ id, label, error, hint, children }: FormFieldProps) {
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

export default FormField;
