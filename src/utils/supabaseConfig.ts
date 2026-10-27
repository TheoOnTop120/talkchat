const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

function isValidSupabaseUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return (
      (url.protocol === "https:" ||
        (url.protocol === "http:" &&
          ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname))) &&
      Boolean(url.hostname) &&
      !url.username &&
      !url.password
    );
  } catch {
    return false;
  }
}

export const supabaseConfigurationError:
  | "authConfigurationMissing"
  | "authConfigurationInvalid"
  | null =
  !supabaseUrl?.trim() || !supabasePublishableKey?.trim()
    ? "authConfigurationMissing"
    : !isValidSupabaseUrl(supabaseUrl)
      ? "authConfigurationInvalid"
      : null;

export { supabaseUrl, supabasePublishableKey };
