import AuthLayout from "../components/AuthLayout";
import { getLegalDocument } from "../i18n/legal";
import type { LegalDocumentId } from "../i18n/legal";
import { AppLink } from "../routing/Router";
import type { AppPageProps } from "../types/app";

type LegalPageProps = AppPageProps & {
  documentId: LegalDocumentId;
};

function LegalPage({ documentId, ...props }: LegalPageProps) {
  const document = getLegalDocument(props.locale, documentId);

  return (
    <AuthLayout
      {...props}
      intro={document.summary}
      legal
      title={document.title}
      wide
    >
      <article aria-label={document.title} className="legal-document">
        <aside className="legal-draft-notice" role="note">
          <strong>{document.draftNotice}</strong>
        </aside>
        <p className="legal-reviewed-at">{document.reviewedAt}</p>
        <div className="legal-sections">
          {document.sections.map((section, index) => {
            const headingId = `legal-${documentId}-section-${index + 1}`;

            return (
              <section aria-labelledby={headingId} key={headingId}>
                <h2 id={headingId}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
              </section>
            );
          })}
        </div>
        <nav aria-label={document.relatedTitle} className="legal-related">
          <h2>{document.relatedTitle}</h2>
          <ul>
            {document.related.map((link) => (
              <li key={link.to}>
                <AppLink to={link.to}>{link.label}</AppLink>
              </li>
            ))}
          </ul>
        </nav>
        <AppLink className="legal-back-link" to="/">
          <span aria-hidden="true">←</span>
          {document.backHome}
        </AppLink>
      </article>
    </AuthLayout>
  );
}

export default LegalPage;
