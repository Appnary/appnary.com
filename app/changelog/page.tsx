import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog & Roadmap | Pixel Tracker | Appnary",
  description:
    "Every release, every improvement, every fix. See what's new in Pixel Tracker and what's coming next.",
  openGraph: {
    title: "Pixel Tracker changelog",
    description:
      "Every release, every improvement, and the upcoming roadmap.",
    url: "https://appnary.com/changelog",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

type ChangeKind = "added" | "improved" | "fixed";

const releases: {
  version: string;
  date: string;
  title: string;
  summary: string;
  changes: { kind: ChangeKind; text: string }[];
}[] = [
  {
    version: "1.0.0",
    date: "2026-06-25",
    title: "Public launch",
    summary:
      "Pixel Tracker is live on the Shopify App Store. This is the first public release, built on months of feedback from beta merchants.",
    changes: [
      { kind: "added", text: "Live dashboard with active sessions and top pages" },
      { kind: "added", text: "Click and scroll heatmaps on product and collection pages" },
      { kind: "added", text: "Conversion funnel from landing page through purchase" },
      { kind: "added", text: "Visitor and product performance reports" },
      { kind: "added", text: "CSV and JSON export from any report" },
      { kind: "added", text: "14-day free trial, no credit card required" },
    ],
  },
  {
    version: "0.9.0",
    date: "2026-06-11",
    title: "Beta 4: Heatmaps refresh",
    summary:
      "Heatmap rendering is significantly faster and easier to read on mobile devices.",
    changes: [
      { kind: "improved", text: "Heatmap render time cut by ~60% on large product catalogs" },
      { kind: "improved", text: "Mobile-friendly layout with pinch-to-zoom support" },
      { kind: "fixed", text: "Heatmap data missing for storefronts using custom themes" },
    ],
  },
  {
    version: "0.8.0",
    date: "2026-05-28",
    title: "Beta 3: Funnel improvements",
    summary:
      "Conversion funnel now supports multiple entry pages and shows step-by-step drop-off rates.",
    changes: [
      { kind: "added", text: "Multi-entry-point funnel analysis" },
      { kind: "improved", text: "Drop-off rate calculated per step, not just end-to-end" },
    ],
  },
  {
    version: "0.7.0",
    date: "2026-05-14",
    title: "Beta 2: Exports",
    summary:
      "Export your data from any report. Two formats, no extra setup.",
    changes: [
      { kind: "added", text: "CSV export from visitor, product, and referrer reports" },
      { kind: "added", text: "JSON export with full event detail" },
    ],
  },
  {
    version: "0.5.0",
    date: "2026-04-22",
    title: "Beta 1: First private beta",
    summary:
      "First release handed to a small group of beta merchants. Used to validate the core dashboard and onboarding flow.",
    changes: [
      { kind: "added", text: "Initial live dashboard with session and page-view metrics" },
      { kind: "added", text: "Referrer breakdown and device type segmentation" },
    ],
  },
];

const roadmap = [
  {
    quarter: "Q3 2026",
    title: "Email reports",
    description:
      "A weekly summary of your store's key numbers, delivered to your inbox. Pick the metrics that matter to you.",
  },
  {
    quarter: "Q3 2026",
    title: "Custom dashboards",
    description:
      "Pin the reports you check most to a custom view. Save it as your default.",
  },
  {
    quarter: "Q4 2026",
    title: "Goal tracking",
    description:
      "Set conversion or revenue goals and see progress against them on the live dashboard.",
  },
  {
    quarter: "Q4 2026",
    title: "Wider integrations",
    description:
      "First-party connections to popular email and ad platforms, with the same privacy guarantees.",
  },
];

const kindStyle: Record<ChangeKind, string> = {
  added: "bg-aqua/20 text-foreground/80",
  improved: "bg-lime/30 text-foreground/80",
  fixed: "bg-muted-themed text-muted-foreground-strong",
};

const kindLabel: Record<ChangeKind, string> = {
  added: "Added",
  improved: "Improved",
  fixed: "Fixed",
};

export default function ChangelogPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center sm:pt-28 sm:pb-16">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          Changelog & Roadmap
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Every release, every{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            improvement
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">
          What we&apos;ve shipped, what we&apos;re fixing, and what we&apos;re
          building next. No marketing-speak, just the actual list.
        </p>
      </section>

      {/* Releases */}
      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="space-y-10">
          {releases.map((r, idx) => (
            <article
              key={r.version}
              className="relative rounded-2xl border border-border-themed bg-surface p-6 shadow-sm sm:p-8"
            >
              {idx === 0 && (
                <span className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-aqua px-3 py-1 text-xs font-semibold text-ink shadow-sm">
                  <Sparkles className="h-3 w-3" /> Latest
                </span>
              )}
              <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="rounded-md bg-aqua/15 px-2 py-0.5 text-xs font-bold text-foreground/80">
                  v{r.version}
                </span>
                <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                  {r.title}
                </h2>
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {new Date(r.date + "T00:00:00Z").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC",
                  })}
                </span>
              </header>
              <p className="mt-3 text-sm text-muted-foreground-strong leading-relaxed">
                {r.summary}
              </p>
              <ul className="mt-5 space-y-2.5">
                {r.changes.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-foreground/90"
                  >
                    <span
                      className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${kindStyle[c.kind]}`}
                    >
                      {kindLabel[c.kind]}
                    </span>
                    <span className="leading-relaxed">{c.text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          What&apos;s coming next
        </h2>
        <p className="mt-3 text-base text-muted-foreground-strong leading-relaxed">
          Our roadmap is directional. We ship when features are ready,
          not on a deadline.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {roadmap.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-border-themed bg-section p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-aqua">
                {r.quarter}
              </p>
              <h3 className="mt-1 text-base font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <div className="rounded-2xl border border-border-themed bg-section p-6 text-center sm:p-10">
          <CheckCircle2 className="mx-auto h-8 w-8 text-aqua" />
          <p className="mt-3 text-lg font-semibold text-foreground">
            Want to suggest a feature?
          </p>
          <p className="mt-1 text-sm text-muted-foreground-strong">
            We read every reply. Most of the items above came from
            merchant feedback.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block text-sm font-semibold text-aqua hover:underline"
          >
            Send feedback →
          </Link>
        </div>
      </section>
    </>
  );
}