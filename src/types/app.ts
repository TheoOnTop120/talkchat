import type { MessageKey } from "../i18n/messages";
import type { Locale, Theme } from "./theme";

export type AppPageProps = {
  locale: Locale;
  theme: Theme;
  t: (key: MessageKey) => string;
  onLocaleChange: (locale: Locale) => void;
  onThemeToggle: () => void;
};
