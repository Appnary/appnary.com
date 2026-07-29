import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog | Appnary",
  description:
    "Release history and roadmap for Appnary's Shopify apps. See what's new, what's fixed, and what's coming next.",
  openGraph: {
    title: "Changelog | Appnary",
    description:
      "Release history and roadmap for Appnary's Shopify apps.",
    url: "https://appnary.com/changelog",
  },
};

interface ChangelogEntry {
  version: string;
  date: string;
  title: string;
  changes: string[];
}

const entries: ChangelogEntry[] = [
  {
    version: "1.0.0",
    date: "2026-07-29",
    title: "Pixel Tracker Launch",
    changes: [
      "Multi-platform pixel tracking for Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, X (Twitter), and LinkedIn",
      "Server-side tracking support for Facebook Conversions API and TikTok Events API",
      "Shopify dashboard integration for pixel management",
      "Free plan with 1 active pixel included",
      "Starter ($7/mo), Growth ($15/mo), and Pro ($29/mo) pricing tiers",
    ],
  },
  {
    version: "0.9.0",
    date: "2026-07-15",
    title: "Beta Release",
    changes: [
      "Initial beta release for testing",
      "Core pixel installation functionality",
      "Basic dashboard and settings",
    ],
  },
  {
    version: "0.8.0",
    date: "2026-06-01",
    title: "Development Started",
    changes: [
      "Project initiated",
      "Core architecture designed",
      "Shopify app scaffolding created",
    ],
  },
];

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function ChangelogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://appnary.com/" },
              { "@type": "ListItem", position: 2, name: "Changelog", item: "https://appnary.com/changelog" },
            ],
          }),
        }}
      />

      <article className="mx-auto max-w-3xl px-6 pt-16 pb-16 sm:pt-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <header className="mt-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Changelog
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Release history and roadmap for Appnary&apos;s Shopify apps.
          </p>
        </header>

        <div className="mt-12 space-y-12">
          {entries.map((entry) => (
            <section key={entry.version} className="border-l-2 border-border-themed pl-6">
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-semibold text-aqua">
                  v{entry.version}
                </span>
                <time className="text-sm text-muted-foreground">
                  {formatDate(entry.date)}
                </time>
              </div>
              <h2 className="mt-2 text-xl font-bold text-foreground">
                {entry.title}
              </h2>
              <ul className="mt-3 space-y-2">
                {entry.changes.map((change, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground-strong leading-relaxed flex items-start gap-2"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua/60" />
                    {change}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border-themed bg-surface p-6 text-center">
          <h3 className="text-lg font-bold text-foreground">What&apos;s Next</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            We&apos;re working on additional integrations, advanced analytics, and improved server-side tracking. 
            Join the waitlist to get early access to new features.
          </p>
          <Link
            href="/#waitlist"
            className="mt-4 inline-flex items-center rounded-lg bg-aqua px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-aqua/90"
          >
            Join the Waitlist
          </Link>
        </div>
      </article>
    </>
  );
}
