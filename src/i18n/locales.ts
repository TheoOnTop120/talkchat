export const locales = [
  { code: "fr", name: "Français", direction: "ltr" },
  { code: "en", name: "English", direction: "ltr" },
  { code: "nl", name: "Nederlands", direction: "ltr" },
  { code: "de", name: "Deutsch", direction: "ltr" },
  { code: "es", name: "Español", direction: "ltr" },
  { code: "pt", name: "Português", direction: "ltr" },
  { code: "it", name: "Italiano", direction: "ltr" },
  { code: "pl", name: "Polski", direction: "ltr" },
  { code: "uk", name: "Українська", direction: "ltr" },
  { code: "ru", name: "Русский", direction: "ltr" },
  { code: "tr", name: "Türkçe", direction: "ltr" },
  { code: "ar", name: "العربية", direction: "rtl" },
  { code: "he", name: "עברית", direction: "rtl" },
  { code: "fa", name: "فارسی", direction: "rtl" },
  { code: "hi", name: "हिन्दी", direction: "ltr" },
  { code: "bn", name: "বাংলা", direction: "ltr" },
  { code: "ur", name: "اردو", direction: "rtl" },
  { code: "zh-Hans", name: "简体中文", direction: "ltr" },
  { code: "zh-Hant", name: "繁體中文", direction: "ltr" },
  { code: "ja", name: "日本語", direction: "ltr" },
  { code: "ko", name: "한국어", direction: "ltr" },
  { code: "id", name: "Bahasa Indonesia", direction: "ltr" },
  { code: "vi", name: "Tiếng Việt", direction: "ltr" },
  { code: "th", name: "ไทย", direction: "ltr" },
  { code: "sv", name: "Svenska", direction: "ltr" },
  { code: "nb", name: "Norsk bokmål", direction: "ltr" },
  { code: "da", name: "Dansk", direction: "ltr" },
  { code: "fi", name: "Suomi", direction: "ltr" },
  { code: "el", name: "Ελληνικά", direction: "ltr" },
  { code: "ro", name: "Română", direction: "ltr" },
  { code: "cs", name: "Čeština", direction: "ltr" },
  { code: "sk", name: "Slovenčina", direction: "ltr" },
  { code: "hu", name: "Magyar", direction: "ltr" },
  { code: "bg", name: "Български", direction: "ltr" },
  { code: "hr", name: "Hrvatski", direction: "ltr" },
  { code: "sr-Latn", name: "Srpski (latinica)", direction: "ltr" },
  { code: "sl", name: "Slovenščina", direction: "ltr" },
  { code: "lt", name: "Lietuvių", direction: "ltr" },
  { code: "lv", name: "Latviešu", direction: "ltr" },
  { code: "et", name: "Eesti", direction: "ltr" },
  { code: "ca", name: "Català", direction: "ltr" },
] as const;

export type Locale = (typeof locales)[number]["code"];
export type TextDirection = "ltr" | "rtl";

const localeCodes = new Set<string>(locales.map(({ code }) => code));

export function isLocale(value: string): value is Locale {
  return localeCodes.has(value);
}

export function normalizeLocale(languageTag: string): Locale | undefined {
  let canonicalTag: string;
  try {
    [canonicalTag] = Intl.getCanonicalLocales(languageTag);
  } catch {
    return undefined;
  }
  if (!canonicalTag) {
    return undefined;
  }

  const parts = canonicalTag.split("-");
  const language = parts[0].toLowerCase();
  const script = parts.find((part) => part.length === 4);

  if (language === "zh") {
    const region = parts
      .slice(1)
      .find((part) => part.length === 2)
      ?.toUpperCase();
    return script?.toLowerCase() === "hant" ||
      region === "TW" ||
      region === "HK"
      ? "zh-Hant"
      : "zh-Hans";
  }
  if (language === "pt") return "pt";
  if (language === "no") return "nb";
  if (language === "sr") return "sr-Latn";

  const match = locales.find(
    ({ code }) => code.toLowerCase() === language,
  )?.code;
  return match && localeCodes.has(match) ? match : undefined;
}

export function getLocaleDirection(locale: Locale): TextDirection {
  return locales.find((entry) => entry.code === locale)?.direction ?? "ltr";
}

export function applyLocaleToDocument(
  locale: Locale,
  root: Pick<HTMLElement, "lang" | "dir">,
): void {
  root.lang = locale;
  root.dir = getLocaleDirection(locale);
}

const LOCALE_STORAGE_KEY = "talkchat-locale";

export function getInitialLocale(
  storage: Pick<Storage, "getItem"> | null,
  browserLanguages: readonly string[],
): Locale {
  try {
    const storedLocale = storage?.getItem(LOCALE_STORAGE_KEY);
    if (storedLocale && isLocale(storedLocale)) {
      return storedLocale;
    }
  } catch {
    // Continue with the browser language when storage is unavailable.
  }

  for (const language of browserLanguages) {
    const locale = normalizeLocale(language);
    if (locale) return locale;
  }
  return "fr";
}

export function saveLocale(
  locale: Locale,
  storage: Pick<Storage, "setItem"> | null,
): void {
  try {
    storage?.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // The selected language still applies for this page load.
  }
}

export function formatDate(
  value: Date | number,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions,
): string {
  return new Intl.DateTimeFormat(locale, options).format(value);
}

export function formatNumber(
  value: number,
  locale: Locale,
  options?: Intl.NumberFormatOptions,
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function pluralCategory(
  value: number,
  locale: Locale,
): Intl.LDMLPluralRule {
  return new Intl.PluralRules(locale).select(value);
}
