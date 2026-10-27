import type { Locale } from "./locales";

const baseMessages = {
  fr: {
    skipLink: "Aller au contenu",
    home: "Accueil",
    features: "Fonctionnalités",
    about: "À propos",
    legalNavigation: "Informations légales",
    communityLink: "Règles de la communauté",
    reportLink: "Signaler un contenu",
    securityLink: "Sécurité",
    primaryNavigation: "Navigation principale",
    brandHome: "TalkChat — accueil",
    pageTitle: "TalkChat — Les conversations qui rapprochent",
    pageDescription:
      "TalkChat — un espace simple et chaleureux pour rester en contact.",
    themeLight: "Activer le thème clair",
    themeDark: "Activer le thème sombre",
    language: "Langue",
    searchLanguages: "Rechercher des langues",
    noLanguagesFound: "Aucune langue trouvée",
    navLogin: "Se connecter",
    navSignup: "Créer un compte",
    eyebrow: "La conversation, tout simplement",
    headlineStart: "Les conversations",
    headlineAccent: "qui rapprochent.",
    intro:
      "Un espace accueillant pour échanger avec les personnes qui comptent. TalkChat est en préparation.",
    primaryAction: "Bientôt disponible",
    secondaryAction: "Découvrir le projet",
    previewLabel: "Une place pour vos échanges",
    previewGreeting: "Bonjour !",
    previewMessage: "TalkChat prend forme. À très bientôt 👋",
    previewTime: "À l’instant",
    online: "En ligne",
    featureTitle: "Simple, chaleureux, à vous.",
    featureBody:
      "Nous préparons une expérience de discussion claire, agréable sur mobile et pensée avec soin pour votre vie privée.",
    featurePrivacy: "Pensé pour la confidentialité",
    featureResponsive: "Conçu pour tous les écrans",
    featureOpen: "Une base ouverte et évolutive",
    footer: "Un projet en construction, avec soin.",
    footerStatus: "Aucune conversation réelle pour le moment",
    floatingMessage: "Un petit mot, beaucoup de lien.",
    loginTitle: "Bon retour parmi nous",
    loginIntro: "Connectez-vous à TalkChat pour retrouver vos échanges.",
    emailLabel: "Adresse e-mail",
    emailPlaceholder: "vous@exemple.fr",
    passwordLabel: "Mot de passe",
    passwordPlaceholder: "Saisissez votre mot de passe",
    showPassword: "Afficher le mot de passe",
    hidePassword: "Masquer le mot de passe",
    forgotLink: "Mot de passe oublié ?",
    loginSubmit: "Se connecter",
    loginLoading: "Connexion…",
    signOut: "Se déconnecter",
    catalogLoadError:
      "La langue sélectionnée n’a pas pu être chargée. Rechargez la page puis réessayez.",
    legalTranslationNotice:
      "Cette traduction non officielle d’un brouillon juridique n’a pas été vérifiée par un juriste.",
    authConfigurationMissing:
      "L’authentification n’est pas configurée. Renseignez l’URL Supabase et la clé publique du projet dans la configuration locale.",
    authConfigurationInvalid:
      "La configuration Supabase est invalide. Vérifiez l’URL publique du projet.",
    authOperationError:
      "L’opération n’a pas abouti. Réessayez dans quelques instants.",
    authNetworkError:
      "Le service d’authentification est momentanément inaccessible. Vérifiez votre connexion puis réessayez.",
    authCredentialsError: "Adresse e-mail ou mot de passe incorrect.",
    authLinkInvalid:
      "Ce lien est invalide ou a expiré. Demandez un nouveau lien puis réessayez.",
    authPasswordRejected:
      "Le service a refusé ce mot de passe. Choisissez-en un autre conforme aux exigences.",
    authCheckingSession: "Vérification de votre session…",
    authSessionRestoreError:
      "La session n’a pas pu être vérifiée. Rechargez la page ou réessayez.",
    authRecoveryAccepted:
      "Si cette adresse correspond à un compte et si l’envoi e-mail est configuré, un lien de réinitialisation pourra être reçu.",
    authEmailVerified: "Votre adresse e-mail est confirmée.",
    authAccountReady:
      "Votre compte est prêt. Vous pouvez commencer à utiliser TalkChat.",
    authVerifyPending:
      "La demande a été acceptée. Si la confirmation e-mail est activée, consultez votre boîte de réception. L’envoi dépend de la configuration e-mail du projet Supabase.",
    authResetPasswordTitle: "Choisissez un nouveau mot de passe",
    authResetPasswordIntro:
      "Saisissez et confirmez un nouveau mot de passe pour votre compte.",
    authResetPasswordSubmit: "Enregistrer le mot de passe",
    authResetPasswordLoading: "Enregistrement…",
    authPasswordUpdated: "Votre mot de passe a été mis à jour.",
    authResetLinkRequired:
      "Aucun lien de réinitialisation valide n’est actif. Demandez un nouveau lien.",
    authResendEmail: "Adresse e-mail",
    authResendConfirmation: "Renvoyer le lien de confirmation",
    authResendLoading: "Envoi de la demande…",
    authEmailLinkRequested:
      "La demande a été traitée. Si l’envoi e-mail est configuré, vérifiez votre boîte de réception.",
    authInvalidCallback:
      "Le lien de confirmation est invalide ou a expiré. Vous pouvez demander un nouveau lien.",
    noAccount: "Pas encore de compte ?",
    registerLink: "Créer un compte",
    registerTitle: "Rejoignez TalkChat",
    registerIntro:
      "Quelques informations pour préparer votre espace de discussion.",
    displayNameLabel: "Nom d’affichage",
    displayNamePlaceholder: "Comment souhaitez-vous apparaître ?",
    birthDateLabel: "Date de naissance",
    birthDateHint:
      "Utilisée uniquement pour vérifier l’âge minimum de 13 ans dans le navigateur ; elle n’est pas envoyée à Supabase.",
    passwordConfirmLabel: "Confirmer le mot de passe",
    passwordConfirmPlaceholder: "Saisissez à nouveau votre mot de passe",
    passwordRulesTitle: "Votre mot de passe doit contenir :",
    passwordRuleLength: "12 caractères minimum",
    passwordRuleUppercase: "une lettre majuscule",
    passwordRuleLowercase: "une lettre minuscule",
    passwordRuleNumber: "un chiffre",
    passwordRuleSymbol: "un symbole",
    termsPrefix: "J’accepte les",
    termsLink: "conditions d’utilisation",
    termsAnd: "et la",
    privacyLink: "politique de confidentialité",
    termsSuffix: ".",
    legalDraftSignupNote:
      "Ces textes sont des brouillons. Votre acceptation n’est pas transmise avec la demande de compte.",
    signupSubmit: "Créer mon compte",
    signupLoading: "Création du compte…",
    haveAccount: "Vous avez déjà un compte ?",
    loginLink: "Se connecter",
    forgotTitle: "Réinitialiser le mot de passe",
    forgotIntro:
      "Saisissez l’adresse e-mail associée à votre compte. La réception du lien dépend de la configuration e-mail du projet.",
    resetSubmit: "Continuer",
    resetLoading: "Préparation…",
    returnLogin: "Retour à la connexion",
    verifyTitle: "Vérifiez votre adresse e-mail",
    verifyIntro:
      "Suivez le lien de confirmation reçu ou demandez-en un nouveau. La livraison dépend de la configuration e-mail du projet Supabase.",
    verifyBack: "Retour à la création de compte",
    errorRequired: "Ce champ est obligatoire.",
    errorInvalidEmail: "Saisissez une adresse e-mail valide.",
    errorInvalidCredentials:
      "Saisissez votre adresse e-mail et votre mot de passe.",
    errorDisplayName:
      "Le nom d’affichage doit contenir entre 2 et 40 caractères.",
    errorBirthRequired: "La date de naissance est obligatoire.",
    errorBirthInvalid: "Saisissez une date de naissance valide.",
    errorUnderage: "Vous devez avoir au moins 13 ans pour continuer.",
    errorPasswordRules:
      "Le mot de passe ne respecte pas encore tous les critères.",
    errorPasswordMismatch: "Les mots de passe ne correspondent pas.",
    errorTerms: "Vous devez accepter les conditions et la politique.",
    formErrorSummary: "Vérifiez les champs signalés ci-dessous.",
    requirementMet: "Critère satisfait",
    requirementPending: "Critère non satisfait",
    passwordTooShort: "Le mot de passe doit contenir au moins 12 caractères.",
    errorTitle: "Un problème est survenu",
    errorBody:
      "La page n’a pas pu être affichée. Vous pouvez revenir à l’accueil ou réessayer.",
    accessDeniedTitle: "Accès refusé",
    accessDeniedBody:
      "Vous n’avez pas accès à cette page. Une session authentifiée est nécessaire.",
    notFoundTitle: "Cette page est introuvable",
    notFoundBody: "Le lien est peut-être incorrect ou la page a été déplacée.",
    unavailableTitle: "Cette page n’est pas disponible",
    unavailableBody:
      "Cette page ou ce service n’est pas encore prêt. Aucun service externe n’a été contacté.",
    errorCode: "Erreur",
    notFoundCode: "Page introuvable",
    unavailableCode: "Indisponible",
    goHome: "Retour à l’accueil",
    tryLogin: "Aller à la connexion",
    legalTermsUnavailable:
      "Les conditions d’utilisation ne sont pas encore disponibles.",
    legalPrivacyUnavailable:
      "La politique de confidentialité n’est pas encore disponible.",
  },
  en: {
    skipLink: "Skip to content",
    home: "Home",
    features: "Features",
    about: "About",
    legalNavigation: "Legal information",
    communityLink: "Community guidelines",
    reportLink: "Report content",
    securityLink: "Security",
    primaryNavigation: "Primary navigation",
    brandHome: "TalkChat — home",
    pageTitle: "TalkChat — Conversations that bring us closer",
    pageDescription: "TalkChat — a simple, welcoming space to stay in touch.",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    language: "Language",
    searchLanguages: "Search languages",
    noLanguagesFound: "No languages found",
    navLogin: "Sign in",
    navSignup: "Create account",
    eyebrow: "Conversation, made simple",
    headlineStart: "Conversations",
    headlineAccent: "that bring us closer.",
    intro:
      "A welcoming space to connect with the people who matter. TalkChat is in the making.",
    primaryAction: "Coming soon",
    secondaryAction: "Discover the project",
    previewLabel: "A place for your conversations",
    previewGreeting: "Hello!",
    previewMessage: "TalkChat is taking shape. See you soon 👋",
    previewTime: "Just now",
    online: "Online",
    featureTitle: "Simple, welcoming, yours.",
    featureBody:
      "We are preparing a clear, mobile-friendly chat experience, thoughtfully designed with privacy in mind.",
    featurePrivacy: "Privacy-minded",
    featureResponsive: "Made for every screen",
    featureOpen: "An open, evolving foundation",
    footer: "A project in the making, with care.",
    footerStatus: "No real conversations yet",
    floatingMessage: "A small note can mean a lot.",
    loginTitle: "Welcome back",
    loginIntro: "Sign in to TalkChat to pick up your conversations.",
    emailLabel: "Email address",
    emailPlaceholder: "you@example.com",
    passwordLabel: "Password",
    passwordPlaceholder: "Enter your password",
    showPassword: "Show password",
    hidePassword: "Hide password",
    forgotLink: "Forgot password?",
    loginSubmit: "Sign in",
    loginLoading: "Signing in…",
    signOut: "Sign out",
    catalogLoadError:
      "The selected language could not be loaded. Please reload and try again.",
    legalTranslationNotice:
      "This is an unofficial translation of a legal draft and has not been legally reviewed.",
    authConfigurationMissing:
      "Authentication is not configured. Set the Supabase project URL and public key in the local configuration.",
    authConfigurationInvalid:
      "The Supabase configuration is invalid. Check the public project URL.",
    authOperationError:
      "The operation could not be completed. Please try again shortly.",
    authNetworkError:
      "The authentication service is temporarily unreachable. Check your connection and try again.",
    authCredentialsError: "Incorrect email address or password.",
    authLinkInvalid:
      "This link is invalid or has expired. Request a new link and try again.",
    authPasswordRejected:
      "The service rejected this password. Choose another password that meets its requirements.",
    authCheckingSession: "Checking your session…",
    authSessionRestoreError:
      "Your session could not be verified. Reload the page or try again.",
    authRecoveryAccepted:
      "If this address matches an account and email delivery is configured, a password-reset link may arrive.",
    authEmailVerified: "Your email address is confirmed.",
    authAccountReady: "Your account is ready. You can start using TalkChat.",
    authVerifyPending:
      "Your request was accepted. If email confirmation is enabled, check your inbox. Delivery depends on the Supabase project's email configuration.",
    authResetPasswordTitle: "Choose a new password",
    authResetPasswordIntro:
      "Enter and confirm a new password for your account.",
    authResetPasswordSubmit: "Save password",
    authResetPasswordLoading: "Saving…",
    authPasswordUpdated: "Your password has been updated.",
    authResetLinkRequired:
      "There is no active, valid password-reset link. Request a new link.",
    authResendEmail: "Email address",
    authResendConfirmation: "Resend confirmation link",
    authResendLoading: "Sending request…",
    authEmailLinkRequested:
      "The request was processed. If email delivery is configured, check your inbox.",
    authInvalidCallback:
      "This confirmation link is invalid or has expired. You can request a new link.",
    noAccount: "New to TalkChat?",
    registerLink: "Create an account",
    registerTitle: "Join TalkChat",
    registerIntro: "A few details to prepare your chat space.",
    displayNameLabel: "Display name",
    displayNamePlaceholder: "How would you like to appear?",
    birthDateLabel: "Date of birth",
    birthDateHint:
      "Used only to check the minimum age of 13 in your browser; it is not sent to Supabase.",
    passwordConfirmLabel: "Confirm password",
    passwordConfirmPlaceholder: "Enter your password again",
    passwordRulesTitle: "Your password must include:",
    passwordRuleLength: "at least 12 characters",
    passwordRuleUppercase: "an uppercase letter",
    passwordRuleLowercase: "a lowercase letter",
    passwordRuleNumber: "a number",
    passwordRuleSymbol: "a symbol",
    termsPrefix: "I accept the",
    termsLink: "Terms of Service",
    termsAnd: "and",
    privacyLink: "Privacy Policy",
    termsSuffix: ".",
    legalDraftSignupNote:
      "These texts are drafts. Your acceptance is not sent with the account request.",
    signupSubmit: "Create my account",
    signupLoading: "Creating account…",
    haveAccount: "Already have an account?",
    loginLink: "Sign in",
    forgotTitle: "Reset your password",
    forgotIntro:
      "Enter the email address associated with your account. Delivery depends on the project's email configuration.",
    resetSubmit: "Continue",
    resetLoading: "Preparing…",
    returnLogin: "Back to sign in",
    verifyTitle: "Verify your email address",
    verifyIntro:
      "Follow the confirmation link you received or request a new one. Delivery depends on the Supabase project's email configuration.",
    verifyBack: "Back to account creation",
    errorRequired: "This field is required.",
    errorInvalidEmail: "Enter a valid email address.",
    errorInvalidCredentials: "Enter your email address and password.",
    errorDisplayName: "Display name must be between 2 and 40 characters.",
    errorBirthRequired: "Date of birth is required.",
    errorBirthInvalid: "Enter a valid date of birth.",
    errorUnderage: "You must be at least 13 years old to continue.",
    errorPasswordRules: "The password does not meet all the requirements yet.",
    errorPasswordMismatch: "The passwords do not match.",
    errorTerms: "You must accept the terms and privacy policy.",
    formErrorSummary: "Review the fields marked below.",
    requirementMet: "Requirement met",
    requirementPending: "Requirement not met",
    passwordTooShort: "Password must contain at least 12 characters.",
    errorTitle: "Something went wrong",
    errorBody: "The page could not be displayed. Return home or try again.",
    accessDeniedTitle: "Access denied",
    accessDeniedBody:
      "You do not have access to this page. An authenticated session is required.",
    notFoundTitle: "This page could not be found",
    notFoundBody: "The link may be incorrect or the page may have moved.",
    unavailableTitle: "This page is unavailable",
    unavailableBody:
      "This page or service is not ready yet. No external service was contacted.",
    errorCode: "Error",
    notFoundCode: "Page not found",
    unavailableCode: "Unavailable",
    goHome: "Back to home",
    tryLogin: "Go to sign in",
    legalTermsUnavailable: "The Terms of Service are not available yet.",
    legalPrivacyUnavailable: "The Privacy Policy is not available yet.",
  },
} as const;

export type MessageKey = keyof (typeof baseMessages)["fr"];

type MessageCatalog = Record<MessageKey, string>;

const loadedCatalogs = new Map<Locale, MessageCatalog>([
  ["fr", baseMessages.fr],
  ["en", baseMessages.en],
]);

const catalogLoaders = {
  groupA: () => import("./catalogs/groupA.ts").then(({ groupA }) => groupA),
  groupB: () => import("./catalogs/groupB.ts").then(({ groupB }) => groupB),
  groupC: () => import("./catalogs/groupC.ts").then(({ groupC }) => groupC),
  groupD: () => import("./catalogs/groupD.ts").then(({ groupD }) => groupD),
};

const localeGroups = {
  nl: "groupA",
  de: "groupA",
  es: "groupA",
  pt: "groupA",
  it: "groupA",
  pl: "groupA",
  uk: "groupA",
  ru: "groupA",
  tr: "groupA",
  ar: "groupA",
  he: "groupB",
  fa: "groupB",
  ur: "groupB",
  hi: "groupB",
  bn: "groupB",
  "zh-Hans": "groupB",
  "zh-Hant": "groupB",
  ja: "groupB",
  ko: "groupB",
  id: "groupB",
  vi: "groupC",
  th: "groupC",
  sv: "groupC",
  nb: "groupC",
  da: "groupC",
  fi: "groupC",
  el: "groupC",
  ro: "groupC",
  cs: "groupC",
  sk: "groupC",
  hu: "groupD",
  bg: "groupD",
  hr: "groupD",
  "sr-Latn": "groupD",
  sl: "groupD",
  lt: "groupD",
  lv: "groupD",
  et: "groupD",
  ca: "groupD",
} as const satisfies Record<
  Exclude<Locale, "fr" | "en">,
  keyof typeof catalogLoaders
>;

export const messageLocales = ["fr", "en", ...Object.keys(localeGroups)];

export async function loadMessageCatalog(locale: Locale): Promise<void> {
  if (loadedCatalogs.has(locale)) {
    return;
  }
  if (locale === "fr" || locale === "en") {
    throw new Error(`Missing base message catalog for locale "${locale}".`);
  }

  const catalogs: Partial<Record<Locale, MessageCatalog>> =
    await catalogLoaders[localeGroups[locale]]();
  const catalog = catalogs[locale];
  if (!catalog) {
    throw new Error(`Missing message catalog for locale "${locale}".`);
  }
  loadedCatalogs.set(locale, catalog);
}

export function getMessageCatalog(locale: Locale): Readonly<MessageCatalog> {
  const catalog = loadedCatalogs.get(locale);
  if (!catalog) {
    throw new Error(`Message catalog for locale "${locale}" is not loaded.`);
  }
  return catalog;
}

export function translate(locale: Locale, key: MessageKey): string {
  const catalog = getMessageCatalog(locale);
  const translation = catalog[key];
  if (typeof translation !== "string" || translation.length === 0) {
    throw new Error(`Missing translation for "${key}" in locale "${locale}".`);
  }
  return translation;
}
