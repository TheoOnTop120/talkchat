import { useEffect, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { RouterContext } from "./routerContext";
import { useRouter } from "./useRouter";

function normalizePathname(pathname: string): string {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "");
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(() =>
    normalizePathname(window.location.pathname),
  );

  useEffect(() => {
    function handlePopState() {
      setPathname(normalizePathname(window.location.pathname));
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(to: string) {
    const destination = new URL(to, window.location.href);

    if (destination.origin !== window.location.origin) {
      window.location.assign(destination.href);
      return;
    }

    window.history.pushState({}, "", destination);
    setPathname(normalizePathname(destination.pathname));

    requestAnimationFrame(() => {
      if (destination.hash) {
        document
          .getElementById(decodeURIComponent(destination.hash.slice(1)))
          ?.scrollIntoView();
      } else {
        window.scrollTo({ top: 0 });
      }
    });
  }

  return (
    <RouterContext.Provider value={{ pathname, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

type AppLinkProps = {
  to: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

export function AppLink({
  to,
  children,
  className,
  onClick,
  ...props
}: AppLinkProps) {
  const { navigate } = useRouter();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.();

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    navigate(to);
  }

  return (
    <a {...props} className={className} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
