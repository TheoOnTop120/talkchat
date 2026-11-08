import { createContext, useContext } from "react";

export type RouterContextValue = {
  pathname: string;
  navigate: (to: string) => void;
};

export const RouterContext = createContext<RouterContextValue | null>(null);

export function useRouter(): RouterContextValue {
  const context = useContext(RouterContext);

  if (!context) {
    throw new Error("useRouter must be used inside RouterProvider.");
  }

  return context;
}
