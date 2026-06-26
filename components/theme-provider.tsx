"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

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
  const [manual, setManual] = useState(false);

  // Initial read after mount (so we don't mismatch SSR).
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Theme | null;
    if (saved === "light" || saved === "dark") {
      setThemeState(saved);
      setManual(true);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial: Theme = prefersDark ? "dark" : "light";
      setThemeState(initial);
      setManual(false);
    }
  }, []);

  // Apply theme to <html data-theme> whenever it changes.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // If we have no manual choice, follow the system preference live.
  useEffect(() => {
    if (manual) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      setThemeState(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [manual]);

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t);
    setManual(true);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      // ignore — private mode etc.
    }
  }, []);

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
  try {
    var saved = localStorage.getItem('${STORAGE_KEY}');
    var theme;
    if (saved === 'light' || saved === 'dark') {
      theme = saved;
    } else {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`.trim();
