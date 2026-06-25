import Link from "next/link";
import { Mail } from "lucide-react";

const year = new Date().getFullYear();

const columns = [
  {
    title: "Apps",
    links: [
      { label: "Pixel Tracker", href: "/pixel-tracker" },
      { label: "Compare", href: "/compare" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "/docs" },
      { label: "Blog", href: "/blog" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border-themed bg-background">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1 md:pr-8">
            <Link
              href="/"
              className="text-lg font-bold text-foreground"
              aria-label="Appnary home"
            >
              appnary
            </Link>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Simple, affordable Shopify apps.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col-reverse items-center gap-4 border-t border-border-themed pt-6 text-xs text-muted-foreground-faint md:flex-row md:justify-between">
          <p>&copy; {year} Appnary. All rights reserved.</p>
          <a
            href="mailto:hello@appnary.com"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            aria-label="Email Appnary"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            hello@appnary.com
          </a>
        </div>
      </div>
    </footer>
  );
}