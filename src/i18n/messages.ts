import type { Locale } from "../types/theme";

export const messages = {
  fr: {
    skipLink: "Aller au contenu",
    home: "Accueil",
    features: "Fonctionnalités",
    about: "À propos",
    themeLight: "Activer le thème clair",
    themeDark: "Activer le thème sombre",
    language: "Langue",
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
  },
  en: {
    skipLink: "Skip to content",
    home: "Home",
    features: "Features",
    about: "About",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    language: "Language",
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
  },
} as const;

export type MessageKey = keyof (typeof messages)["fr"];

export function translate(locale: Locale, key: MessageKey): string {
  return messages[locale][key];
}
