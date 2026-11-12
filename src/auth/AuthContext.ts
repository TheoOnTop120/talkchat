import { createContext, useContext } from "react";
import type { Session } from "@supabase/supabase-js";
import type { MessageKey } from "../i18n/messages";

export type AuthStatus =
  | "loading"
  | "signed-out"
  | "email-unconfirmed"
  | "signed-in"
  | "error";

export type AuthContextValue = {
  status: AuthStatus;
  session: Session | null;
  error: MessageKey | null;
  signOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    displayName: string,
    username: string,
    email: string,
    birthDate: string,
    password: string,
  ) => Promise<void>;
  requestPasswordReset: (email: string) => Promise<void>;
  resendSignupConfirmation: (email: string) => Promise<void>;
  updatePassword: (password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }
  return context;
}
