import type { AppPageProps } from "../types/app";
import { useAuth } from "../auth/AuthContext";

function AuthConfigurationNotice({ t }: Pick<AppPageProps, "t">) {
  const { status, error } = useAuth();

  if (status !== "error" || !error) {
    return null;
  }

  return (
    <p className="auth-config-notice form-error-summary" role="alert">
      {t(error)}
    </p>
  );
}

export default AuthConfigurationNotice;
