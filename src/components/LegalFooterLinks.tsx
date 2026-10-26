import { AppLink } from "../routing/Router";
import type { MessageKey } from "../i18n/messages";

type LegalFooterLinksProps = {
  t: (key: MessageKey) => string;
};

function LegalFooterLinks({ t }: LegalFooterLinksProps) {
  return (
    <nav aria-label={t("legalNavigation")} className="legal-footer-links">
      <AppLink to="/legal/terms">{t("termsLink")}</AppLink>
      <AppLink to="/legal/privacy">{t("privacyLink")}</AppLink>
      <AppLink to="/legal/community">{t("communityLink")}</AppLink>
      <AppLink to="/legal/report">{t("reportLink")}</AppLink>
      <AppLink to="/legal/security">{t("securityLink")}</AppLink>
    </nav>
  );
}

export default LegalFooterLinks;
