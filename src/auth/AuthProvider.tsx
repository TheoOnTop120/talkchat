import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Session } from "@supabase/supabase-js";
import type { AuthContextValue } from "./AuthContext";
import {
  requestPasswordReset,
  resendSignupConfirmation,
  signIn,
  signOut,
  signUp,
  updatePassword,
  getAuthErrorKey,
} from "../services/auth";
import { supabaseConfigurationError } from "../utils/supabaseConfig";
import { AuthContext } from "./AuthContext";
import type { AuthStatus } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>(
    supabaseConfigurationError ? "error" : "loading",
  );
  const [session, setSession] = useState<Session | null>(null);
  const [error, setError] = useState<AuthContextValue["error"]>(
    supabaseConfigurationError,
  );

  useEffect(() => {
    let active = true;
    let receivedAuthEvent = false;
    let unsubscribe: (() => void) | undefined;

    async function restoreSession() {
      try {
        const { getSupabaseClient, supabaseConfigurationError } = await import(
          "../utils/supabase"
        );
        const supabase = await getSupabaseClient();
        if (!active) return;
        if (!supabase) {
          setError(supabaseConfigurationError ?? "authConfigurationMissing");
          setStatus("error");
          return;
        }

        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, nextSession) => {
          receivedAuthEvent = true;
          if (active) {
            setSession(nextSession);
            setError(null);
            setStatus(nextSession ? "signed-in" : "signed-out");
          }
        });
        unsubscribe = () => subscription.unsubscribe();

        const { data, error: sessionError } = await supabase.auth.getSession();
        if (!active || receivedAuthEvent) {
          return;
        }
        if (sessionError) {
          throw sessionError;
        }
        setSession(data.session);
        setStatus(data.session ? "signed-in" : "signed-out");
      } catch (sessionError: unknown) {
        if (active && !receivedAuthEvent) {
          const errorKey = getAuthErrorKey(sessionError);
          setError(
            errorKey === "authOperationError"
              ? "authSessionRestoreError"
              : errorKey,
          );
          setStatus("error");
        }
      }
    }

    void restoreSession();

    return () => {
      active = false;
      unsubscribe?.();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        status,
        session,
        error,
        signIn,
        signUp,
        signOut,
        requestPasswordReset,
        resendSignupConfirmation,
        updatePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
