import { BarChart3, CheckCircle2, ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/pixel-tracker", {
  title: "Shopify Pixel Tracking: Meta, Google Ads, TikTok & More | Appnary",
  description:
    "Pixel Tracker is a prelaunch Shopify pixel-configuration app. Intended platform coverage is still being verified. Billing will be through Shopify.",
  openGraph: {
    title: "Shopify Pixel Tracking: Meta, Google Ads, TikTok & More",
    description:
      "Pixel Tracker is a prelaunch Shopify pixel-configuration app. Intended platform coverage is still being verified. Billing will be through Shopify.",
    url: "https://appnary.com/pixel-tracker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
});

const features = [
  {
    title: "Multi-platform tracking",
    description:
      "Intended coverage includes Meta, Google, TikTok, Snapchat, Pinterest, X, and LinkedIn. Availability will be confirmed at launch.",
  },
  {
    title: "Theme app extension",
    description:
      "The current approach uses an app embed activated in Shopify's theme editor. Launch setup still needs end-to-end verification.",
  },
  {
    title: "Browser pixel setup",
    description:
      "The theme app extension loads browser tags when enabled. Event coverage must be tested before relying on the reports.",
  },
  {
    title: "Server-side status",
    description:
      "A saved G- measurement ID can send a GA4 purchase when an order is paid. The order id is the transaction id. Meta CAPI and TikTok Events API are not confirmed.",
  },
  {
    title: "Simple dashboard",
    description:
      "See all your pixels and their status at a glance. Enable or disable any platform instantly.",
  },
  {
    title: "Billing through Shopify",
    description:
      "Review this app's own pricing and plan limits when its Shopify listing is available.",
  },
];

const faqs = [
  {
    q: "What platforms do you support?",
    a: "The intended scope includes Meta, Google, TikTok, Snapchat, Pinterest, X, and LinkedIn. The app is prelaunch; check the launch listing for verified platform coverage.",
  },
  {
    q: "How do I install it?",
    a: "It isn't available to install yet. Join the waitlist for launch updates. The current setup approach uses a Shopify theme app extension that must be activated and tested.",
  },
  {
    q: "Does it work with server-side events?",
    a: "A saved G- measurement ID can send a GA4 purchase when an order is paid, using the order id as the transaction id. Meta CAPI and TikTok Events API are not confirmed, and Pixel Tracker does not run a Google Ads server container.",
  },
  {
    q: "Is there a free plan?",
    a: "A free plan has not been confirmed for launch. Check the app's Shopify listing when it becomes available.",
  },
  {
    q: "Do I need to edit my theme?",
    a: "The current approach does not require editing theme files by hand. It uses an app embed that must be activated in Shopify's theme editor, then tested on the store.",
  },
  {
    q: "Can I track multiple stores?",
    a: "Each Shopify store needs its own Pixel Tracker installation. Pricing applies per store.",
  },
  {
    q: "What about GDPR/CCPA compliance?",
    a: "Review your store's consent settings and the data collected by each ad integration before enabling tracking. Launch documentation will need to describe Pixel Tracker's verified data flow.",
  },
  {
    q: "How do I cancel?",
    a: "Manage app subscriptions through Shopify. Check the subscription terms shown in Shopify before approving a charge.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://appnary.com/" },
    { "@type": "ListItem", position: 2, name: "Pixel Tracker", item: "https://appnary.com/pixel-tracker" },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pixel Tracker",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Shopify",
  description:
    "Pixel Tracker is a prelaunch Shopify pixel-configuration app. Intended platform coverage is still being verified. Billing will be through Shopify.",
};

export default function PixelTrackerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-4xl px-6 pt-6">
        <ol className="flex items-center gap-2 text-xs text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            Pixel Tracker
          </li>
        </ol>
      </nav>

      {/* ── Hero ── */}
      <section aria-label="Pixel Tracker overview" className="mx-auto max-w-4xl px-6 pt-14 pb-16 sm:pt-20 sm:pb-20">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 rounded-full bg-lime/80 px-3 py-0.5 text-xs font-semibold text-foreground/80">
            Available Soon
          </span>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-surface border border-border-themed">
            <BarChart3 className="h-7 w-7 text-aqua" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Pixel Tracker
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            We are building a Shopify app for multi-platform pixel configuration.
            Launch integrations and event coverage are still being verified.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              disabled
              className="rounded-lg bg-muted-themed px-6 py-3 text-sm font-semibold text-muted-foreground cursor-not-allowed"
            >
              Install from Shopify
            </button>
            <a
              href="/#waitlist"
              className="rounded-lg border border-border-themed px-6 py-3 text-sm font-medium text-foreground hover:border-foreground transition-colors"
            >
              Get Early Access
            </a>
          </div>
          <p className="mt-3 text-sm text-muted-foreground-faint">
            Available soon in the Shopify App Store
          </p>
        </div>
      </section>

      {/* ── Features ── */}
      <section aria-labelledby="features-heading" className="mx-auto max-w-5xl px-6 pb-16 sm:pb-20">
        <h2 id="features-heading" className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Features
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border-themed bg-surface p-6 shadow-sm"
            >
              <CheckCircle2 className="mb-3 h-5 w-5 text-aqua" />
              <h3 className="font-semibold text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing ── */}
      <section aria-labelledby="pricing-heading" className="mx-auto max-w-5xl px-6 pb-16 sm:pb-20">
        <h2 id="pricing-heading" className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Pricing
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Each Appnary app has its own pricing, with billing handled through
          Shopify. Pixel Tracker is prelaunch; its prices and plan limits will be
          published with its Shopify listing. Review the terms in Shopify before
          approving a subscription.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
        <h2 id="faq-heading" className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
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

      {/* ── Setup guides ── */}
      <aside aria-labelledby="guides-heading" className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <div className="rounded-2xl border border-border-themed bg-section p-6 sm:p-8">
          <h2 id="guides-heading" className="text-lg font-semibold text-foreground">
            Platform setup guides
          </h2>
          <p className="mt-2 text-sm text-muted-foreground-strong">
            Prepare and verify an existing tracking setup while Pixel Tracker is in development.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            <li>
              <Link href="/pixel-tracker/meta-pixel" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                Meta Pixel setup →
              </Link>
            </li>
            <li>
              <Link href="/pixel-tracker/google-ads" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                Google Ads tag setup →
              </Link>
            </li>
            <li>
              <Link href="/pixel-tracker/tiktok-pixel" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                TikTok Pixel setup →
              </Link>
            </li>
            <li>
              <Link href="/pixel-tracker/snapchat-pixel" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                Snapchat Pixel setup →
              </Link>
            </li>
            <li>
              <Link href="/pixel-tracker/pinterest-pixel" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                Pinterest Tag setup →
              </Link>
            </li>
            <li>
              <Link href="/pixel-tracker/linkedin-pixel" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                LinkedIn Insight Tag setup →
              </Link>
            </li>
            <li>
              <Link href="/pixel-tracker/twitter-pixel" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                X (Twitter) Pixel setup →
              </Link>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground-strong">
            Want more depth? See the full{" "}
            <Link href="/pixel-tracker/guides" className="font-medium text-aqua hover:underline">
              tracking guides
            </Link>
            , the{" "}
            <Link href="/integrations" className="font-medium text-aqua hover:underline">
              integrations hub
            </Link>
            , or free{" "}
            <Link href="/tools" className="font-medium text-aqua hover:underline">
              merchant tools
            </Link>
            . For the difference between store reporting and ad-platform tracking,
            read{" "}
            <Link
              href="/blog/shopify-analytics-vs-google-analytics"
              className="font-medium text-aqua hover:underline"
            >
              Shopify Analytics vs Google Analytics
            </Link>
            .
          </p>
        </div>
      </aside>

      {/* ── How Pixel Tracker compares ── */}
      <aside aria-labelledby="compares-heading" className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <div className="rounded-2xl border border-border-themed bg-section p-6 sm:p-8">
          <h2 id="compares-heading" className="text-lg font-semibold text-foreground">
            How Pixel Tracker compares
          </h2>
          <p className="mt-2 text-sm text-muted-foreground-strong">
            Honest side-by-side breakdowns against specific tracking tools and native channels.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            <li>
              <Link href="/compare" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                See all comparisons →
              </Link>
            </li>
            <li>
              <Link href="/vs/elevar-alternative" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                vs Elevar →
              </Link>
            </li>
            <li>
              <Link href="/vs/trackbee-alternative" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                vs TrackBee →
              </Link>
            </li>
            <li>
              <Link href="/vs/facebook-instagram-alternative" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                vs Facebook Channel →
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* ── Best-of roundups ── */}
      <aside aria-labelledby="roundups-heading" className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <div className="rounded-2xl border border-border-themed bg-section p-6 sm:p-8">
          <h2 id="roundups-heading" className="text-lg font-semibold text-foreground">
            Best-of roundups
          </h2>
          <p className="mt-2 text-sm text-muted-foreground-strong">
            See where Pixel Tracker ranks against a wider field of Shopify apps in each category.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            <li>
              <Link href="/alternatives/best-shopify-pixel-tracking-apps" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                Best Pixel Tracking Apps →
              </Link>
            </li>
            <li>
              <Link href="/alternatives/best-shopify-ad-tracking-tools" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                Best Ad Tracking Tools →
              </Link>
            </li>
            <li>
              <Link href="/alternatives/best-shopify-conversion-tracking-apps" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                Best Conversion Tracking Apps →
              </Link>
            </li>
            <li>
              <Link href="/alternatives/best-shopify-analytics-apps" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                Best Analytics Apps →
              </Link>
            </li>
            <li>
              <Link href="/alternatives/best-shopify-roas-calculators" className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua">
                Best ROAS Calculators →
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
