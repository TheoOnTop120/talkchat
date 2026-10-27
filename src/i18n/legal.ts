import type { Locale } from "../types/theme";

export type LegalDocumentId =
  | "terms"
  | "privacy"
  | "community"
  | "report"
  | "security";

type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalDocument = {
  title: string;
  summary: string;
  draftNotice: string;
  reviewedAt: string;
  sections: LegalSection[];
  relatedTitle: string;
  related: Array<{ label: string; to: string }>;
  backHome: string;
};

const documents: Record<Locale, Record<LegalDocumentId, LegalDocument>> = {
  fr: {
    terms: {
      title: "Conditions d’utilisation",
      summary:
        "Ce texte est un brouillon de travail pour un futur service TalkChat. Il ne constitue pas des conditions juridiques prêtes à l’emploi.",
      draftNotice:
        "BROUILLON À FAIRE VÉRIFIER : avant toute mise en ligne publique, l’identité et les coordonnées de l’exploitant, le droit applicable, les règles de responsabilité et les modalités définitives doivent être complétés et examinés par un professionnel qualifié.",
      reviewedAt: "Brouillon — aucune date d’entrée en vigueur.",
      sections: [
        {
          heading: "1. État actuel du projet",
          paragraphs: [
            "TalkChat utilise Supabase Auth pour les comptes, les connexions et la récupération de mot de passe. La messagerie, le stockage de conversations et la modération ne sont pas implémentés.",
            "Ce brouillon décrit des sujets à traiter si un service est lancé. Il ne prouve pas qu’un service de messagerie, une assistance ou un mécanisme de modération est disponible aujourd’hui.",
          ],
        },
        {
          heading: "2. Accès et âge minimum envisagés",
          paragraphs: [
            "L’interface demande une date de naissance et vérifie localement un âge minimum de 13 ans avant l’inscription. Cette vérification n’est pas un contrôle d’identité et aucune règle d’âge n’est appliquée côté serveur.",
            "L’âge minimum, les modalités de vérification et les règles applicables aux mineurs devront être validés pour les pays où le service sera proposé avant son ouverture.",
          ],
        },
        {
          heading: "3. Comportements attendus si le service existe",
          paragraphs: [
            "Les utilisateurs d’un futur service devront respecter les lois applicables et les règles de la communauté. Les usages abusifs, les tentatives d’accès non autorisé, l’usurpation d’identité et les contenus portant atteinte aux droits d’autrui devront être traités selon des règles publiées et un processus de recours défini.",
            "Aucune sanction, modération ou procédure d’appel réelle n’est opérée.",
          ],
        },
        {
          heading: "4. Contenus et droits",
          paragraphs: [
            "Les droits sur les contenus, les autorisations limitées nécessaires à l’exploitation d’un futur service, ainsi que les règles concernant les contenus illicites ou signalés devront être précisés dans une version définitive. Ce brouillon n’accorde ni ne revendique de licence sur un contenu utilisateur.",
          ],
        },
        {
          heading: "5. Disponibilité, responsabilité et fin du service",
          paragraphs: [
            "Aucun engagement de disponibilité, de conservation des messages ou de continuité de service ne peut être déduit de cette version. Les exclusions, limites de responsabilité, règles de résiliation, export et suppression devront être rédigées et vérifiées au regard du droit applicable avant le lancement.",
          ],
        },
        {
          heading: "6. Exploitant, droit applicable et contact",
          paragraphs: [
            "L’identité juridique de l’exploitant, son adresse, ses coordonnées de contact, le droit applicable et les juridictions compétentes ne sont pas renseignés. Ils ne doivent pas être inventés et devront être complétés avant publication.",
          ],
        },
      ],
      relatedTitle: "Informations complémentaires",
      related: [
        { label: "Politique de confidentialité", to: "/legal/privacy" },
        { label: "Règles de la communauté", to: "/legal/community" },
        { label: "Principes de sécurité", to: "/legal/security" },
      ],
      backHome: "Retour à l’accueil",
    },
    privacy: {
      title: "Politique de confidentialité",
      summary:
        "Cette page décrit les traitements actuellement prévus par TalkChat et les informations qui restent à définir avant un lancement public.",
      draftNotice:
        "BROUILLON À FAIRE VÉRIFIER : ceci n’est pas un avis juridique ni une garantie de conformité. Les finalités, bases juridiques, responsables, destinataires, durées de conservation et droits devront être précisés et vérifiés selon les pays concernés avant le lancement.",
      reviewedAt: "Brouillon — aucune date d’entrée en vigueur.",
      sections: [
        {
          heading: "1. Données utilisées par la version actuelle",
          paragraphs: [
            "Lors de l’inscription et de la connexion, l’adresse e-mail et le mot de passe sont transmis directement au projet Supabase configuré pour utiliser Supabase Auth. Le nom d’affichage est transmis comme métadonnée du compte. La date de naissance et l’acceptation des conditions sont utilisées uniquement dans le navigateur et ne sont pas envoyées.",
            "Le SDK Supabase gère la persistance de la session dans le navigateur. Les autres valeurs des formulaires restent temporairement en mémoire de la page ; le navigateur peut indépendamment proposer de mémoriser des champs avec sa fonction de remplissage automatique.",
            "La seule préférence de l’application enregistrée localement est le thème clair ou sombre, dans le stockage local du navigateur. La langue sélectionnée est conservée uniquement pendant la navigation de la page et revient au français lors d’un nouveau chargement.",
          ],
        },
        {
          heading: "2. Services externes et journaux",
          paragraphs: [
            "Supabase traite les données nécessaires aux opérations d’authentification. L’envoi des e-mails dépend de la configuration du projet et de son fournisseur SMTP ; cette configuration n’a pas été vérifiée. Aucun service d’analyse ni aucune messagerie TalkChat n’est implémenté. L’hébergeur et l’infrastructure réseau peuvent aussi traiter des données de connexion ou tenir des journaux.",
          ],
        },
        {
          heading: "3. Données possibles d’un futur service",
          paragraphs: [
            "Les données réellement collectées par un futur service ne sont pas encore définies. Elles pourraient comprendre les informations de compte et les contenus ou métadonnées nécessaires au fonctionnement, mais aucune liste exhaustive, finalité ou base juridique n’est arrêtée à ce jour.",
            "Les destinataires, sous-traitants, transferts éventuels hors région, durées de conservation, règles de sauvegarde et procédures de suppression restent à déterminer. Aucune suppression automatique ou durée particulière n’est actuellement promise.",
          ],
        },
        {
          heading: "4. Droits et demandes",
          paragraphs: [
            "Les droits des personnes, leurs conditions d’exercice, les délais de réponse et l’autorité compétente dépendent notamment du lieu de résidence des personnes, de l’organisation exploitant le service et du droit applicable. Ces éléments, ainsi que le responsable du traitement et un moyen de contact valide, devront être ajoutés avant le lancement.",
            "Cette maquette ne dispose d’aucun canal de demande d’accès, de rectification, d’effacement ou de réclamation.",
          ],
        },
        {
          heading: "5. Confidentialité et chiffrement",
          paragraphs: [
            "La présence de cette page ne signifie pas que les conversations sont chiffrées de bout en bout. Aucun système de messagerie ou chiffrement E2EE n’est implémenté dans cette version. Les protections et limites d’un éventuel futur chiffrement devront être décrites après conception et vérification technique.",
          ],
        },
      ],
      relatedTitle: "À lire aussi",
      related: [
        { label: "Conditions d’utilisation", to: "/legal/terms" },
        { label: "Principes de sécurité", to: "/legal/security" },
        { label: "Comment signaler un contenu", to: "/legal/report" },
      ],
      backHome: "Retour à l’accueil",
    },
    community: {
      title: "Règles de la communauté",
      summary:
        "Des principes proposés pour les échanges si TalkChat devient un service de messagerie.",
      draftNotice:
        "BROUILLON À FAIRE VÉRIFIER : TalkChat ne propose pas actuellement de messagerie ni de modération. Ces règles ne sont pas appliquées par un système opérationnel.",
      reviewedAt: "Principes provisoires — aucune date d’entrée en vigueur.",
      sections: [
        {
          heading: "Respect et sécurité",
          paragraphs: [
            "Traitez les autres personnes avec respect. Les menaces, le harcèlement ciblé, la haine, l’intimidation et l’encouragement à la violence n’ont pas leur place dans une communauté sûre.",
            "Ne partagez pas les informations privées d’une autre personne sans son accord. N’usurpez pas l’identité d’autrui et ne cherchez pas à accéder à un compte ou appareil sans autorisation.",
          ],
        },
        {
          heading: "Contenus et sollicitations",
          paragraphs: [
            "N’envoyez pas de contenu illégal, de fraude, de logiciel malveillant, de spam ou de sollicitations répétées non désirées. Respectez les droits d’auteur et les autres droits applicables.",
            "Ces principes sont une proposition éditoriale. La définition des contenus interdits, les exceptions, les mesures éventuelles et les voies de contestation devront être précisés avant le lancement.",
          ],
        },
        {
          heading: "Mineurs et signalements",
          paragraphs: [
            "Ne sollicitez pas les mineurs de façon inappropriée et ne partagez pas d’images ou d’informations qui pourraient les mettre en danger. Les règles de protection, de traitement des signalements et d’escalade devront être conçues avec des garanties adaptées avant toute ouverture au public.",
            "La maquette ne dispose pas de fonction de signalement ou de modération. Consultez la page dédiée pour connaître cette limite.",
          ],
        },
        {
          heading: "Application de ces principes",
          paragraphs: [
            "Aucune équipe de modération, aucun mécanisme de blocage et aucune procédure de sanction ou d’appel ne sont disponibles dans cette version. Ne vous fiez pas à ces règles comme à une intervention réelle.",
          ],
        },
      ],
      relatedTitle: "Pages associées",
      related: [
        { label: "Comment signaler un contenu", to: "/legal/report" },
        { label: "Principes de sécurité", to: "/legal/security" },
        { label: "Politique de confidentialité", to: "/legal/privacy" },
      ],
      backHome: "Retour à l’accueil",
    },
    report: {
      title: "Signaler un contenu ou un compte",
      summary:
        "Les étapes ci-dessous expliquent une démarche future possible et ne constituent pas un formulaire de signalement.",
      draftNotice:
        "AUCUN SIGNALEMENT N’EST TRANSMIS : TalkChat n’a pas encore de fonction de messagerie, de bouton de signalement, d’équipe de traitement ni d’adresse de contact publique indiquée.",
      reviewedAt: "Information de prototype — à réviser avant lancement.",
      sections: [
        {
          heading: "La fonction n’est pas encore disponible",
          paragraphs: [
            "Cette page n’envoie aucun rapport et ne collecte pas de preuve. N’utilisez pas les formulaires de connexion ou d’inscription pour signaler un problème : ils servent uniquement à l’authentification.",
            "Aucune adresse e-mail ou coordonnée de signalement n’est indiquée, car aucun canal opérationnel n’a été défini. Cette page ne peut pas recevoir ni traiter une demande.",
          ],
        },
        {
          heading: "Informations à préparer pour un futur signalement",
          paragraphs: [
            "Si un service est lancé avec une fonction dédiée, il pourra être utile de décrire le contenu ou le compte concerné, l’endroit où il apparaît, la raison du signalement et le moment approximatif. Ne transmettez que les informations strictement nécessaires et évitez de diffuser publiquement des données personnelles ou des contenus sensibles.",
          ],
        },
        {
          heading: "Situations urgentes",
          paragraphs: [
            "TalkChat ne surveille pas cette page et ne peut pas intervenir en urgence. En cas de danger immédiat, contactez les services d’urgence ou les autorités compétentes de votre lieu de résidence.",
          ],
        },
        {
          heading: "Ce qui devra être défini avant le lancement",
          bullets: [
            "Un canal de signalement réellement opérationnel et accessible.",
            "Les catégories, délais indicatifs, règles de traitement et informations conservées.",
            "La protection des personnes signalantes, les notifications et une procédure de contestation.",
            "Les responsabilités de l’exploitant et les règles applicables dans les pays concernés.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Pages associées",
      related: [
        { label: "Règles de la communauté", to: "/legal/community" },
        { label: "Politique de confidentialité", to: "/legal/privacy" },
      ],
      backHome: "Retour à l’accueil",
    },
    security: {
      title: "Principes de sécurité",
      summary:
        "Cette page distingue les limites de la démonstration des objectifs qui resteraient à concevoir avant un véritable service.",
      draftNotice:
        "AUCUNE GARANTIE DE SÉCURITÉ : les principes ci-dessous sont des objectifs de conception. Ils ne décrivent pas des protections déjà implémentées ou auditées.",
      reviewedAt: "Information de prototype — à réviser avant lancement.",
      sections: [
        {
          heading: "État de la démonstration",
          paragraphs: [
            "Supabase Auth fournit l’inscription, la connexion, la gestion de session et la récupération de mot de passe. Cette version frontend n’implémente pas de messagerie, de chiffrement de bout en bout, de sauvegarde sécurisée, de suppression automatique, de surveillance, de limitation serveur des tentatives ou de processus de réponse aux incidents.",
            "La protection des routes dans le navigateur ne constitue pas une frontière d’autorisation et ne remplace pas les contrôles côté serveur ni les politiques RLS Supabase. Aucune table de messages ou de profils n’est implémentée.",
          ],
        },
        {
          heading: "Objectifs proposés pour une future version",
          bullets: [
            "Limiter les données collectées et l’accès aux seules informations nécessaires.",
            "Protéger les comptes et les sessions, vérifier les permissions côté serveur et tester les règles d’accès.",
            "Utiliser des connexions chiffrées en transit et protéger les secrets hors du code distribué au navigateur.",
            "Étudier un protocole E2EE éprouvé avant toute promesse de chiffrement de bout en bout.",
            "Définir les sauvegardes, les clés de récupération, la conservation et des tests de restauration avant de les annoncer.",
            "Prévoir des mises à jour, des contrôles, des journaux minimisés et une réponse aux vulnérabilités.",
          ],
          paragraphs: [],
        },
        {
          heading: "Limites et signalement d’un problème de sécurité",
          paragraphs: [
            "Ces objectifs ne constituent ni une certification ni une garantie de protection absolue. Le responsable de sécurité, le canal de divulgation, les délais de réponse et les coordonnées publiques ne sont pas encore définis. N’utilisez pas les formulaires d’authentification pour transmettre des informations autres que celles demandées.",
          ],
        },
      ],
      relatedTitle: "Pages associées",
      related: [
        { label: "Politique de confidentialité", to: "/legal/privacy" },
        { label: "Conditions d’utilisation", to: "/legal/terms" },
        { label: "Comment signaler un contenu", to: "/legal/report" },
      ],
      backHome: "Retour à l’accueil",
    },
  },
  en: {
    terms: {
      title: "Terms of Service",
      summary:
        "This is a working draft for a possible future TalkChat service. It is not a ready-to-use legal agreement.",
      draftNotice:
        "DRAFT — LEGAL REVIEW REQUIRED: before any public launch, the operator’s identity and contact details, applicable law, liability terms, and final conditions must be completed and reviewed by a qualified professional.",
      reviewedAt: "Draft — no effective date.",
      sections: [
        {
          heading: "1. Current project status",
          paragraphs: [
            "TalkChat uses Supabase Auth for accounts, sign-in, and password recovery. Messaging, conversation storage, and moderation are not implemented.",
            "This draft lists topics to address if a service launches. It does not mean that a service, support channel, or moderation process is available today.",
          ],
        },
        {
          heading: "2. Intended access and minimum age",
          paragraphs: [
            "The interface requests a date of birth and checks a minimum age of 13 locally before sign-up. This is not identity verification, and no server-side age rule is enforced.",
            "The minimum age, verification method, and rules for minors must be reviewed for every country where the service may be offered before launch.",
          ],
        },
        {
          heading: "3. Expected conduct if a service exists",
          paragraphs: [
            "Users of a future service would need to comply with applicable law and the community rules. Abuse, unauthorized access attempts, impersonation, and content that violates others’ rights would need published rules and a defined appeal process.",
            "No real sanctions, moderation, or appeals process is in operation.",
          ],
        },
        {
          heading: "4. Content and rights",
          paragraphs: [
            "Rights in content, any limited permissions needed to operate a future service, and rules for illegal or reported content must be specified in a final version. This draft neither grants nor claims a licence to user content.",
          ],
        },
        {
          heading: "5. Availability, liability, and ending the service",
          paragraphs: [
            "This version makes no commitment about availability, message retention, or service continuity. Disclaimers, liability limits, termination, export, and deletion rules must be drafted and reviewed under applicable law before launch.",
          ],
        },
        {
          heading: "6. Operator, applicable law, and contact",
          paragraphs: [
            "The operator’s legal identity, address, contact details, applicable law, and competent courts are not provided. They must not be invented and must be completed before publication.",
          ],
        },
      ],
      relatedTitle: "Related information",
      related: [
        { label: "Privacy Policy", to: "/legal/privacy" },
        { label: "Community Guidelines", to: "/legal/community" },
        { label: "Security Principles", to: "/legal/security" },
      ],
      backHome: "Back to home",
    },
    privacy: {
      title: "Privacy Policy",
      summary:
        "This page describes TalkChat's current processing and the information that still needs to be defined before a public launch.",
      draftNotice:
        "DRAFT — LEGAL REVIEW REQUIRED: this is not legal advice or a compliance guarantee. Purposes, legal bases, controllers, recipients, retention periods, and rights must be specified and reviewed for relevant jurisdictions before launch.",
      reviewedAt: "Draft — no effective date.",
      sections: [
        {
          heading: "1. Data used by the current version",
          paragraphs: [
            "During sign-up and sign-in, the email address and password are sent directly to the configured Supabase project for Supabase Auth. The display name is sent as account metadata. Date of birth and acceptance of the terms are used only in the browser and are not sent.",
            "The Supabase SDK manages session persistence in the browser. Other form values remain temporarily in page memory; your browser may independently offer to remember fields using its autofill feature.",
            "The only application preference saved locally is the light or dark theme, in the browser’s local storage. The selected language is kept only during client-side navigation and returns to French after a fresh page load.",
          ],
        },
        {
          heading: "2. External services and logs",
          paragraphs: [
            "Supabase processes data needed for authentication. Email delivery depends on the project's configuration and SMTP provider; this configuration has not been verified. No analytics service or TalkChat messaging feature is implemented. The hosting provider and network infrastructure may also process connection data or keep logs.",
          ],
        },
        {
          heading: "3. Possible data in a future service",
          paragraphs: [
            "The data actually collected by a future service has not been defined. It might include account information and content or metadata needed to operate the service, but no exhaustive list, purpose, or legal basis has been decided yet.",
            "Recipients, processors, possible transfers outside the selected region, retention periods, backup rules, and deletion procedures remain to be determined. No automatic deletion or specific retention period is currently promised.",
          ],
        },
        {
          heading: "4. Rights and requests",
          paragraphs: [
            "People’s rights, how to exercise them, response deadlines, and the relevant authority depend in part on people’s location, the service operator, and applicable law. These details, the data controller, and a valid contact method must be added before launch.",
            "This demo has no channel for access, correction, erasure, or complaint requests.",
          ],
        },
        {
          heading: "5. Privacy and encryption",
          paragraphs: [
            "The presence of this page does not mean conversations are end-to-end encrypted. This version has no messaging system or E2EE encryption. Any future encryption and its limitations must be described after technical design and review.",
          ],
        },
      ],
      relatedTitle: "Related pages",
      related: [
        { label: "Terms of Service", to: "/legal/terms" },
        { label: "Security Principles", to: "/legal/security" },
        { label: "How to report content", to: "/legal/report" },
      ],
      backHome: "Back to home",
    },
    community: {
      title: "Community Guidelines",
      summary:
        "Proposed principles for conversations if TalkChat becomes a messaging service.",
      draftNotice:
        "DRAFT — TalkChat does not currently provide messaging or moderation. These guidelines are not enforced by an operational system.",
      reviewedAt: "Proposed principles — no effective date.",
      sections: [
        {
          heading: "Respect and safety",
          paragraphs: [
            "Treat others with respect. Threats, targeted harassment, hate, intimidation, and encouragement of violence have no place in a safe community.",
            "Do not share another person’s private information without permission. Do not impersonate others or try to access an account or device without authorization.",
          ],
        },
        {
          heading: "Content and solicitation",
          paragraphs: [
            "Do not send illegal content, fraud, malware, spam, or repeated unwanted solicitation. Respect copyright and other applicable rights.",
            "These principles are an editorial proposal. Definitions of prohibited content, exceptions, possible measures, and appeal routes must be specified before launch.",
          ],
        },
        {
          heading: "Minors and reporting",
          paragraphs: [
            "Do not inappropriately target minors or share images or information that could put them at risk. Safeguarding rules, report handling, and escalation must be designed with appropriate protections before any public launch.",
            "The demo has no reporting or moderation feature. See the dedicated page for this limitation.",
          ],
        },
        {
          heading: "Enforcement",
          paragraphs: [
            "This version has no moderation team, blocking mechanism, or sanction and appeal process. Do not rely on these guidelines as a real intervention.",
          ],
        },
      ],
      relatedTitle: "Related pages",
      related: [
        { label: "How to report content", to: "/legal/report" },
        { label: "Security Principles", to: "/legal/security" },
        { label: "Privacy Policy", to: "/legal/privacy" },
      ],
      backHome: "Back to home",
    },
    report: {
      title: "Report content or an account",
      summary:
        "The information below describes a possible future process; it is not a reporting form.",
      draftNotice:
        "NO REPORT IS SENT: TalkChat does not yet have messaging, a report button, a review team, or a published reporting contact address.",
      reviewedAt: "Prototype information — review before launch.",
      sections: [
        {
          heading: "Reporting is not available yet",
          paragraphs: [
            "This page does not send a report or collect evidence. Do not use the sign-up or sign-in forms to report an issue; they are only for account authentication.",
            "No reporting email address or contact details are listed because no operational channel has been defined. This page cannot receive or process a request.",
          ],
        },
        {
          heading: "Information to prepare for a future report",
          paragraphs: [
            "If a service launches with a dedicated feature, it may be useful to describe the content or account, where it appears, the reason for the report, and an approximate time. Share only information that is strictly necessary and avoid publicly distributing personal data or sensitive content.",
          ],
        },
        {
          heading: "Urgent situations",
          paragraphs: [
            "TalkChat does not monitor this page and cannot respond to emergencies. If there is immediate danger, contact emergency services or the competent authorities where you live.",
          ],
        },
        {
          heading: "What must be defined before launch",
          bullets: [
            "An operational and accessible reporting channel.",
            "Categories, indicative timelines, handling rules, and information retained.",
            "Protection for reporters, notifications, and an appeal process.",
            "The operator’s responsibilities and rules in relevant jurisdictions.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Related pages",
      related: [
        { label: "Community Guidelines", to: "/legal/community" },
        { label: "Privacy Policy", to: "/legal/privacy" },
      ],
      backHome: "Back to home",
    },
    security: {
      title: "Security Principles",
      summary:
        "This page distinguishes the demo’s limitations from goals that would need to be designed before a real service.",
      draftNotice:
        "NO SECURITY GUARANTEE: the principles below are design goals. They do not describe protections already implemented or audited.",
      reviewedAt: "Prototype information — review before launch.",
      sections: [
        {
          heading: "Current project status",
          paragraphs: [
            "Supabase Auth provides account registration, sign-in, session handling, and password recovery. This frontend does not implement messaging, end-to-end encryption, secure backups, automatic deletion, monitoring, server-side attempt limits, or an incident response process.",
            "The frontend route guard is not an authorization boundary and does not replace server-side checks or Supabase RLS policies. No message or profile tables are implemented.",
          ],
        },
        {
          heading: "Proposed goals for a future version",
          bullets: [
            "Minimize collected data and restrict access to what is necessary.",
            "Protect accounts and sessions, verify permissions server-side, and test access rules.",
            "Use encrypted connections in transit and keep secrets out of browser-delivered code.",
            "Evaluate a well-reviewed E2EE protocol before making any end-to-end encryption claim.",
            "Define backups, recovery keys, retention, and restoration tests before announcing them.",
            "Plan updates, reviews, minimized logs, and vulnerability response.",
          ],
          paragraphs: [],
        },
        {
          heading: "Limitations and security contact",
          paragraphs: [
            "These goals are not a certification or a guarantee of absolute protection. The security owner, disclosure channel, response timelines, and public contact details have not yet been defined. Do not include personal data or secrets in demo forms.",
          ],
        },
      ],
      relatedTitle: "Related pages",
      related: [
        { label: "Privacy Policy", to: "/legal/privacy" },
        { label: "Terms of Service", to: "/legal/terms" },
        { label: "How to report content", to: "/legal/report" },
      ],
      backHome: "Back to home",
    },
  },
};

export function getLegalDocument(
  locale: Locale,
  id: LegalDocumentId,
): LegalDocument {
  return documents[locale][id];
}
