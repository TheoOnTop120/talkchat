import type { Locale } from "./locales";

const french = {
  inboxTitle: "Vos conversations",
  inboxIntro: "Échangez simplement avec vos contacts.",
  searchLabel: "Nom d’utilisateur",
  searchPlaceholder: "Rechercher un nom d’utilisateur",
  searchSubmit: "Rechercher",
  searchNoResult: "Aucun utilisateur trouvé avec ce nom.",
  startConversation: "Démarrer la conversation",
  inboxLoading: "Chargement des conversations…",
  inboxError: "Les conversations n’ont pas pu être chargées. Réessayez.",
  inboxEmpty: "Aucune conversation pour le moment.",
  chatBack: "Toutes les conversations",
  chatLoading: "Chargement de la conversation…",
  chatError: "Cette conversation est indisponible ou n’a pas pu être chargée.",
  chatEmpty: "Envoyez le premier message pour commencer.",
  messagePlaceholder: "Écrire un message…",
  sendMessage: "Envoyer le message",
  messageFailed: "Échec de l’envoi.",
  retryMessage: "Réessayer l’envoi",
  messageSending: "Envoi…",
  ownMessage: "Vous",
} as const;

const english: Record<keyof typeof french, string> = {
  inboxTitle: "Your conversations",
  inboxIntro: "Stay in touch with your contacts.",
  searchLabel: "Username",
  searchPlaceholder: "Search for a username",
  searchSubmit: "Search",
  searchNoResult: "No user found with that username.",
  startConversation: "Start conversation",
  inboxLoading: "Loading conversations…",
  inboxError: "Conversations could not be loaded. Please try again.",
  inboxEmpty: "No conversations yet.",
  chatBack: "All conversations",
  chatLoading: "Loading conversation…",
  chatError: "This conversation is unavailable or could not be loaded.",
  chatEmpty: "Send the first message to get started.",
  messagePlaceholder: "Write a message…",
  sendMessage: "Send message",
  messageFailed: "Message failed to send.",
  retryMessage: "Retry sending message",
  messageSending: "Sending…",
  ownMessage: "You",
};

export type ChatCopyKey = keyof typeof french;

export function chatCopy(locale: Locale, key: ChatCopyKey): string {
  return locale === "fr" ? french[key] : english[key];
}
