import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";

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

let configurationError:
  | "authConfigurationMissing"
  | "authConfigurationInvalid"
  | null = !supabaseUrl?.trim() || !supabasePublishableKey?.trim()
  ? "authConfigurationMissing"
  : !isValidSupabaseUrl(supabaseUrl)
    ? "authConfigurationInvalid"
    : null;

let client: SupabaseClient | null = null;
if (!configurationError) {
  try {
    client = createClient(supabaseUrl.trim(), supabasePublishableKey.trim());
  } catch {
    configurationError = "authConfigurationInvalid";
  }
}

export const supabaseConfigurationError = configurationError;
export const supabase = client;
