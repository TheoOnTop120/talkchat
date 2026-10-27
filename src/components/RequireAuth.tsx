import type { ReactNode } from "react";
import { useEffect } from "react";
import type { MessageKey } from "../i18n/messages";
import { useRouter } from "../routing/useRouter";
import { useAuth } from "../auth/useAuth";

type RequireAuthProps = {
  children: ReactNode;
  t: (key: MessageKey) => string;
};

function RequireAuth({ children, t }: RequireAuthProps) {
  const { status, error } = useAuth();
  const { navigate } = useRouter();

  useEffect(() => {
    if (status === "signed-out") {
      navigate("/login");
    }
  }, [status, navigate]);

  if (status === "signed-out") {
    return null;
  }
  if (status === "loading") {
    return <p role="status">{t("authCheckingSession")}</p>;
  }
  if (status === "error") {
    return <p role="alert">{t(error ?? "authOperationError")}</p>;
  }
  return children;
}

export default RequireAuth;
