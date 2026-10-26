import type { MessageKey } from "../i18n/messages";

export type FieldErrors = Record<string, MessageKey>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(email: string): MessageKey | undefined {
  if (!email.trim()) {
    return "errorRequired";
  }

  if (!EMAIL_PATTERN.test(email.trim())) {
    return "errorInvalidEmail";
  }
}

export function passwordRules(password: string) {
  return {
    length: password.length >= 12,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    symbol: /[^A-Za-z0-9]/.test(password),
  };
}

export function isValidBirthDate(value: string): boolean {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

  if (!match) {
    return false;
  }

  const [, year, month, day] = match;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));

  return (
    date.getUTCFullYear() === Number(year) &&
    date.getUTCMonth() === Number(month) - 1 &&
    date.getUTCDate() === Number(day)
  );
}

export function isAtLeastThirteen(value: string, today = new Date()): boolean {
  if (!isValidBirthDate(value)) {
    return false;
  }

  const [year, month, day] = value.split("-").map(Number);
  const age = today.getFullYear() - year;
  const birthdayPassed =
    today.getMonth() + 1 > month ||
    (today.getMonth() + 1 === month && today.getDate() >= day);

  return (birthdayPassed ? age : age - 1) >= 13;
}
