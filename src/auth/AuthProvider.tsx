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
import { supabase, supabaseConfigurationError } from "../utils/supabase";
import { AuthContext } from "./AuthContext";
import type { AuthStatus } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<AuthStatus>(
    supabase ? "loading" : "error",
  );
  const [session, setSession] = useState<Session | null>(null);
  const [error, setError] = useState<AuthContextValue["error"]>(
    supabase
      ? null
      : supabaseConfigurationError ?? "authConfigurationMissing",
  );

  useEffect(() => {
    if (!supabase) {
      return undefined;
    }

    let active = true;
    let receivedAuthEvent = false;
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

    void supabase.auth
      .getSession()
      .then(({ data, error: sessionError }) => {
        if (!active || receivedAuthEvent) {
          return;
        }
        if (sessionError) {
          throw sessionError;
        }
        setSession(data.session);
        setStatus(data.session ? "signed-in" : "signed-out");
      })
      .catch((sessionError: unknown) => {
        if (active && !receivedAuthEvent) {
          const errorKey = getAuthErrorKey(sessionError);
          setError(
            errorKey === "authOperationError"
              ? "authSessionRestoreError"
              : errorKey,
          );
          setStatus("error");
        }
      });

    return () => {
      active = false;
      subscription.unsubscribe();
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
