"use client";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useEffect } from "react";

const cache = createCache({ key: "css", prepend: true });
function UpdateColorScheme({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const currentTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    document.documentElement.setAttribute(
      "data-toolpad-color-scheme",
      currentTheme
    );
  }, []);

  return <>{children}</>;
}
export function CacheProviders({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <UpdateColorScheme>{children}</UpdateColorScheme>
    </CacheProvider>
  );
}
