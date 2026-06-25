import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  ChevronDown,
  HelpCircle,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Docs & Help | Pixel Tracker by Appnary",
  description:
    "How Pixel Tracker works, setup guides, FAQs, and everything else you need to get started.",
  openGraph: {
    title: "Docs & Help | Pixel Tracker",
    description:
      "Setup guides, how-it-works explainer, and FAQs for Pixel Tracker.",
    url: "https://appnary.com/docs",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const sections = [
  {
    icon: BookOpen,
    title: "How Pixel Tracker works",
    description:
      "A short tour of the architecture: what runs on your store, what runs on ours, and why it stays fast.",
    href: "#how-it-works",
  },
  {
    icon: Settings,
    title: "Setup guide",
    description:
      "From install to first report in under five minutes. Includes verification steps.",
    href: "#setup",
  },
  {
    icon: HelpCircle,
    title: "Frequently asked questions",
    description:
      "Cookies, GDPR, pricing, exports, and the things merchants ask before installing.",
    href: "#faq",
  },
  {
    icon: BarChart3,
    title: "Reading your reports",
    description:
      "What each report means, what to look at first, and what to ignore.",
    href: "#reports",
  },
];

const howItWorksSteps = [
  {
    n: "01",
    title: "Install the app",
    body: "One click from the Shopify App Store. Pixel Tracker adds a small script to your storefront that loads asynchronously.",
  },
  {
    n: "02",
    title: "Visitors browse normally",
    body: "The script records page views, clicks, and scroll depth. Never any personal data or identifiers.",
  },
  {
    n: "03",
    title: "Events stream to your dashboard",
    body: "We aggregate events on our side and surface them in a real-time dashboard you can log in to from anywhere.",
  },
  {
    n: "04",
    title: "You make decisions",
    body: "See which pages convert, which products get attention, and where visitors drop off, then act on it.",
  },
];

const setupSteps = [
  {
    n: "1",
    title: "Install from the Shopify App Store",
    body: "Search \"Pixel Tracker by Appnary\" or follow the link from your dashboard. Approve the standard permissions.",
  },
  {
    n: "2",
    title: "Confirm the storefront script",
    body: "Open your storefront, view source, and confirm appnary-pix.js is loaded. It will only run on your domain.",
  },
  {
    n: "3",
    title: "Open the dashboard",
    body: "Visit the dashboard link in your Shopify admin. You should see live visitors within the first minute.",
  },
  {
    n: "4",
    title: "Bookmark the heatmaps",
    body: "Heatmaps build up over 24 hours. Once you have data, bookmark them. They're the fastest way to spot issues.",
  },
];

const faqs = [
  {
    q: "Does Pixel Tracker slow down my Shopify store?",
    a: "No. The tracking script is asynchronous and adds under 10KB. Most Lighthouse audits show no measurable impact on store speed.",
  },
  {
    q: "Does it use cookies?",
    a: "No. Pixel Tracker is built around aggregate, cookieless analytics. We don't set any cookies or local storage that identifies a visitor.",
  },
  {
    q: "Is it GDPR and CCPA compliant?",
    a: "Yes. Because we don't collect personal data, most jurisdictions don't require a consent banner for our analytics. We never share data with third parties.",
  },
  {
    q: "How much does it cost?",
    a: "$4.99 per month, flat. There are no usage tiers, no per-visitor fees, and no surprise upcharges.",
  },
  {
    q: "Can I try it before paying?",
    a: "Yes. There's a 14-day free trial with full access. No credit card required at install.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. From any report, click Export to download a CSV or JSON file. Exports include the same fields shown in the dashboard.",
  },
  {
    q: "Will it conflict with Google Analytics or Meta Pixel?",
    a: "No. Pixel Tracker runs alongside other analytics tools. They're completely independent.",
  },
  {
    q: "How do I uninstall it?",
    a: "Remove the app from your Shopify admin like any other app. The storefront script is removed automatically and data is purged after 30 days.",
  },
];

const reportGuides = [
  {
    title: "Live dashboard",
    summary:
      "Active visitors, top pages in the last hour, and where they came from. Use this when you want a quick pulse on the store right now.",
  },
  {
    title: "Visitor report",
    summary:
      "Sessions, page views, and bounce rate over time. The single best report for spotting trends and seasonality.",
  },
  {
    title: "Heatmaps",
    summary:
      "Click and scroll maps on product and collection pages. Look for the sections people skip and the buttons they don't see.",
  },
  {
    title: "Conversion funnel",
    summary:
      "From landing page through to purchase. The biggest drop-off is the page you need to fix first.",
  },
  {
    title: "Product performance",
    summary:
      "Which products get the most views and which convert best. Surfaces hidden winners and quiet losers.",
  },
];

export default function DocsPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center sm:pt-28 sm:pb-16">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          Docs & Help
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Everything you need to{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            get started
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">
          Setup guides, how Pixel Tracker works, and the questions
          merchants ask most.
        </p>
      </section>

      {/* Jump nav */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex items-start gap-4 rounded-xl border border-border-themed bg-surface p-5 transition-all hover:border-aqua/40 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-aqua/10">
                <s.icon className="h-5 w-5 text-aqua" strokeWidth={2.25} />
              </div>
              <div className="min-w-0">
                <h2 className="text-base font-semibold text-foreground">
                  {s.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-aqua group-hover:underline">
                  Jump to section <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="mx-auto max-w-3xl px-6 py-16 scroll-mt-24 sm:py-20"
      >
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          How Pixel Tracker works
        </h2>
        <p className="mt-3 text-base text-muted-foreground-strong leading-relaxed">
          The whole thing runs in four steps. No cookies, no personal data,
          no third-party sharing.
        </p>
        <ol className="mt-8 space-y-6">
          {howItWorksSteps.map((step) => (
            <li
              key={step.n}
              className="flex gap-5 rounded-xl border border-border-themed bg-surface p-6 shadow-sm"
            >
              <span className="shrink-0 text-2xl font-bold text-aqua">
                {step.n}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Setup */}
      <section
        id="setup"
        className="mx-auto max-w-3xl px-6 py-16 scroll-mt-24 sm:py-20"
      >
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Setup guide
        </h2>
        <p className="mt-3 text-base text-muted-foreground-strong leading-relaxed">
          From install to first report in under five minutes.
        </p>
        <ol className="mt-8 space-y-4">
          {setupSteps.map((step) => (
            <li
              key={step.n}
              className="rounded-xl border border-border-themed bg-surface p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua/15 text-sm font-semibold text-foreground/80">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="mx-auto max-w-3xl px-6 py-16 scroll-mt-24 sm:py-20"
      >
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-border-themed bg-surface shadow-sm transition-all open:border-aqua/30"
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-foreground list-none">
                {faq.q}
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Reports */}
      <section
        id="reports"
        className="mx-auto max-w-3xl px-6 py-16 pb-24 scroll-mt-24 sm:py-20 sm:pb-32"
      >
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Reading your reports
        </h2>
        <p className="mt-3 text-base text-muted-foreground-strong leading-relaxed">
          What each report shows and what to look at first.
        </p>
        <div className="mt-8 space-y-4">
          {reportGuides.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-border-themed bg-surface p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {r.summary}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-border-themed bg-section p-6 text-center sm:p-8">
          <p className="text-sm font-medium text-muted-foreground">
            Still have questions?
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-block text-base font-semibold text-aqua hover:underline"
          >
            Contact support →
          </Link>
        </div>
      </section>
    </>
  );
}