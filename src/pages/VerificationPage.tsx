import { useState } from "react";
import AuthLayout from "../components/AuthLayout";
import { AppLink } from "../routing/Router";
import type { AppPageProps } from "../types/app";

function VerificationPage(props: AppPageProps) {
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState(false);

  async function simulateResend() {
    setLoading(true);
    setNotice(false);
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    setLoading(false);
    setNotice(true);
  }

  return (
    <AuthLayout
      {...props}
      intro={props.t("verifyIntro")}
      title={props.t("verifyTitle")}
    >
      <div className="confirmation-panel">
        <span aria-hidden="true" className="confirmation-icon">
          @
        </span>
        <p className="privacy-note">{props.t("verifyDemoNotice")}</p>
        <p className="privacy-note">{props.t("verifyNoAddress")}</p>
        <p className="form-status form-status-subtle" role="note">
          {props.t("verifyNoSend")}
        </p>
        <button
          aria-busy={loading}
          className="form-submit"
          disabled={loading}
          onClick={simulateResend}
          type="button"
        >
          {loading ? props.t("verifyLoading") : props.t("verifyResend")}
        </button>
        {notice && (
          <p className="form-status" role="status">
            {props.t("verifyNoSend")}
          </p>
        )}
      </div>
      <p className="auth-switch">
        <AppLink to="/register">{props.t("verifyBack")}</AppLink>
      </p>
    </AuthLayout>
  );
}

export default VerificationPage;
