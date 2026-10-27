import type { AuthError } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { MessageKey } from "../i18n/messages";
import { supabase, supabaseConfigurationError } from "../utils/supabase";

export class AuthServiceError extends Error {
  readonly messageKey: MessageKey;

  constructor(messageKey: MessageKey) {
    super(messageKey);
    this.name = "AuthServiceError";
    this.messageKey = messageKey;
  }
}

export function getAuthErrorKey(error: unknown): MessageKey {
  if (error instanceof AuthServiceError) {
    return error.messageKey;
  }

  const message = error instanceof Error ? error.message.toLowerCase() : "";

  if (
    message.includes("expired") ||
    message.includes("invalid token") ||
    message.includes("invalid link") ||
    message.includes("otp")
  ) {
    return "authLinkInvalid";
  }

  if (
    message.includes("invalid login credentials") ||
    message.includes("invalid email or password") ||
    message.includes("invalid credentials")
  ) {
    return "authCredentialsError";
  }

  if (
    message.includes("password") &&
    (message.includes("weak") ||
      message.includes("short") ||
      message.includes("characters"))
  ) {
    return "authPasswordRejected";
  }

  if (
    message.includes("fetch") ||
    message.includes("network") ||
    message.includes("connection")
  ) {
    return "authNetworkError";
  }

  return "authOperationError";
}

async function runAuthOperation(
  operation: (client: SupabaseClient) => Promise<{ error: AuthError | null }>,
): Promise<void> {
  if (!supabase) {
    throw new AuthServiceError(
      supabaseConfigurationError ?? "authConfigurationMissing",
    );
  }

  try {
    const result = await operation(supabase);
    if (result.error) {
      throw result.error;
    }
  } catch (error) {
    throw new AuthServiceError(getAuthErrorKey(error));
  }
}

function localRedirect(path: "/verify-email" | "/reset-password"): string {
  return new URL(path, window.location.origin).toString();
}

export function signIn(email: string, password: string): Promise<void> {
  return runAuthOperation((client) =>
    client.auth.signInWithPassword({ email: email.trim(), password }),
  );
}

export function signUp(
  displayName: string,
  email: string,
  password: string,
): Promise<void> {
  return runAuthOperation((client) =>
    client.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo: localRedirect("/verify-email"),
        data: { display_name: displayName.trim() },
      },
    }),
  );
}

export function signOut(): Promise<void> {
  return runAuthOperation((client) => client.auth.signOut());
}

export function requestPasswordReset(email: string): Promise<void> {
  return runAuthOperation((client) =>
    client.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: localRedirect("/reset-password"),
    }),
  );
}

export function resendSignupConfirmation(email: string): Promise<void> {
  return runAuthOperation((client) =>
    client.auth.resend({
      type: "signup",
      email: email.trim(),
      options: { emailRedirectTo: localRedirect("/verify-email") },
    }),
  );
}

export function updatePassword(password: string): Promise<void> {
  return runAuthOperation((client) => client.auth.updateUser({ password }));
}
