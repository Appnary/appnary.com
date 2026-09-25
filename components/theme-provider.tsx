"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "appnary-theme";

type ThemeContextValue = {
  theme: Theme;
  toggle: () => void;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * ThemeProvider
 * - Reads initial theme from <html data-theme> (set by the inline init
 *   script in <head> to avoid FOUC).
 * - On first render, "manual" is true iff a saved choice exists in
 *   localStorage. If false, the theme follows the OS preference via
 *   the prefers-color-scheme media query.
 * - When the user clicks the toggle, we persist their choice and
 *   stop listening to system changes.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const manual = useRef(false);

  const applyTheme = useCallback((value: Theme) => {
    document.documentElement.setAttribute("data-theme", value);
    setThemeState(value);
  }, []);

  // Initial read after mount (so we don't mismatch SSR).
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    manual.current = saved === "light" || saved === "dark";
    applyTheme(saved === "light" || saved === "dark" ? saved : mq.matches ? "dark" : "light");
    const onChange = (e: MediaQueryListEvent) => {
      if (!manual.current) applyTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [applyTheme]);

  const setTheme = useCallback((t: Theme) => {
    manual.current = true;
    applyTheme(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      // ignore — private mode etc.
    }
  }, [applyTheme]);

  const toggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    // Safe fallback so SSR / server components never crash.
    return { theme: "light", toggle: () => {}, setTheme: () => {} };
  }
  return ctx;
}

/**
 * The init script string injected into <head>. It runs before React
 * hydrates so the first paint already has the correct theme and we
 * never flash the wrong one. Kept in one place so the script and the
 * provider can never drift apart.
 */
export const THEME_INIT_SCRIPT = `
(function () {
  var theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  try {
    var saved = localStorage.getItem('${STORAGE_KEY}');
    if (saved === 'light' || saved === 'dark') {
      theme = saved;
    }
  } catch (e) {}
  document.documentElement.setAttribute('data-theme', theme);
})();
`.trim();
