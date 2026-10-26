import { createContext } from "react";

export type RouterContextValue = {
  pathname: string;
  navigate: (to: string) => void;
};

export const RouterContext = createContext<RouterContextValue | null>(null);
