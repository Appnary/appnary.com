"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/5 bg-mist/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Appnary home">
          <svg viewBox="0 0 960 280" className="h-7 md:h-8 w-auto" role="img" aria-hidden="true">
            <g transform="translate(28 28) scale(.4375)">
              <rect x="40" y="40" width="432" height="432" rx="112" fill="#F6FBF9" />
              <path fill="#111827" fillRule="evenodd"
                d="M253 122c-89.9 0-162 72.6-162 163s72.1 163 162 163c40.9 0 77.7-14.8 105.8-39.5v10.9c0 10.8 8.8 19.6 19.6 19.6H421c10.8 0 19.6-8.8 19.6-19.6V160.6c0-10.8-8.8-19.6-19.6-19.6h-42.6c-10.8 0-19.6 8.8-19.6 19.6v10.9C330.7 146.8 293.9 122 253 122Zm11 82c-46.8 0-84 36.3-84 81s37.2 81 84 81 84-36.3 84-81-37.2-81-84-81Z" />
              <path d="M367 109h56v56" fill="none" stroke="#37D7C6" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="404" cy="127" r="17" fill="#B7F34B" />
            </g>
            <text x="288" y="177" fill="#111827" fontFamily="Inter, ui-sans-serif, system-ui, sans-serif" fontSize="118" fontWeight="720" letterSpacing="0">appnary</text>
          </svg>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#apps" className="text-sm font-medium text-ink/70 hover:text-ink transition-colors">Apps</Link>
        </nav>
        <div className="hidden md:block">
          <Link href="/#waitlist" className="inline-flex items-center justify-center rounded-full bg-aqua px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-aqua/90">Get Early Access</Link>
        </div>
        <button type="button" className="md:hidden" onClick={() => setOpen(!open)} aria-label={open ? "Close" : "Menu"}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-ink/5 bg-mist px-5 pb-6 pt-4">
          <Link href="/#apps" className="block px-3 py-2 text-sm text-ink/70" onClick={() => setOpen(false)}>Apps</Link>
          <Link href="/#waitlist" className="mt-2 block rounded-full bg-aqua px-6 py-3 text-sm font-semibold text-white text-center" onClick={() => setOpen(false)}>Get Early Access</Link>
        </div>
      )}
    </header>
  );
}
