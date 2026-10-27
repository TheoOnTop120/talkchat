import type { SupabaseClient } from "@supabase/supabase-js";
import {
  supabaseConfigurationError as initialConfigurationError,
  supabasePublishableKey,
  supabaseUrl,
} from "./supabaseConfig";

export let supabaseConfigurationError = initialConfigurationError;

let clientPromise: Promise<SupabaseClient | null> | undefined;

export function getSupabaseClient(): Promise<SupabaseClient | null> {
  if (supabaseConfigurationError) {
    return Promise.resolve(null);
  }

  clientPromise ??= import("@supabase/supabase-js").then(
    ({ createClient }) => {
      try {
        return createClient(supabaseUrl.trim(), supabasePublishableKey.trim());
      } catch {
        supabaseConfigurationError = "authConfigurationInvalid";
        return null;
      }
    },
  );

  return clientPromise;
}
