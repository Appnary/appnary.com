"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";

const NAV_LINKS = [
  { href: "/pixel-tracker", label: "Apps" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const heroEl = document.getElementById("hero");
    if (!heroEl) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > heroEl.offsetHeight - 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-theme={theme}
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-border-themed bg-background/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Appnary home">
          <svg viewBox="0 0 960 280" className="h-10 md:h-12 w-auto text-foreground" role="img" aria-hidden="true">
            <g transform="translate(28 28) scale(.4375)">
              <rect x="40" y="40" width="432" height="432" rx="112" fill="#F6FBF9" />
              <path fill="#111827" fillRule="evenodd"
                d="M253 122c-89.9 0-162 72.6-162 163s72.1 163 162 163c40.9 0 77.7-14.8 105.8-39.5v10.9c0 10.8 8.8 19.6 19.6 19.6H421c10.8 0 19.6-8.8 19.6-19.6V160.6c0-10.8-8.8-19.6-19.6-19.6h-42.6c-10.8 0-19.6 8.8-19.6 19.6v10.9C330.7 146.8 293.9 122 253 122Zm11 82c-46.8 0-84 36.3-84 81s37.2 81 84 81 84-36.3 84-81-37.2-81-84-81Z" />
              <path d="M367 109h56v56" fill="none" stroke="#37D7C6" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="404" cy="127" r="17" fill="#B7F34B" />
            </g>
            <text x="288" y="177" fill="currentColor" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="118" fontWeight="720" letterSpacing="0">appnary</text>
          </svg>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground-strong hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-themed bg-surface text-muted-foreground-strong transition-colors hover:bg-card hover:text-foreground"
          >
            {theme === "dark" ? <Sun size={16} strokeWidth={2.25} /> : <Moon size={16} strokeWidth={2.25} />}
          </button>
          <Link href="/#waitlist" className="inline-flex items-center justify-center rounded-full bg-aqua px-6 py-2.5 text-sm font-semibold text-ink transition-all hover:bg-aqua/90">Join the Waitlist</Link>
        </div>
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-themed bg-surface text-muted-foreground-strong"
          >
            {theme === "dark" ? <Sun size={16} strokeWidth={2.25} /> : <Moon size={16} strokeWidth={2.25} />}
          </button>
          <button type="button" className="text-foreground" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border-themed bg-background px-5 pb-6 pt-4">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-muted-foreground-strong hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/#waitlist" className="mt-3 block rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-ink text-center" onClick={() => setOpen(false)}>Join the Waitlist</Link>
        </div>
      )}
    </header>
  );
}