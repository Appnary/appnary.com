import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Pixel Tracker vs Manual Pixel Setup & Paid Tracking Apps | Appnary",
  description:
    "How Pixel Tracker compares to manually adding tracking pixels via Shopify theme code, and to other paid Shopify tracking apps. An honest, side-by-side breakdown.",
  openGraph: {
    title: "Pixel Tracker vs the alternatives",
    description:
      "A clear, honest side-by-side comparison of Pixel Tracker, manual theme-code pixel setup, and other paid Shopify tracking apps.",
    url: "https://appnary.com/compare",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

type Cell = boolean | "varies" | string;

const rows: { feature: string; values: Record<string, Cell> }[] = [
  {
    feature: "No theme code editing required",
    values: { pixel: true, manual: false, paid: "varies" },
  },
  {
    feature: "7 ad platforms from one dashboard",
    values: { pixel: true, manual: false, paid: "varies" },
  },
  {
    feature: "Server-side events (CAPI / Events API)",
    values: { pixel: true, manual: false, paid: "varies" },
  },
  {
    feature: "Survives theme updates without breaking",
    values: { pixel: true, manual: false, paid: true },
  },
  {
    feature: "No developer needed",
    values: { pixel: true, manual: false, paid: true },
  },
  {
    feature: "Flat, transparent per-store pricing",
    values: { pixel: true, manual: true, paid: "varies" },
  },
  {
    feature: "Setup time per platform",
    values: { pixel: "Minutes", manual: "Hours", paid: "Minutes–hours" },
  },
  {
    feature: "Free plan available",
    values: { pixel: true, manual: true, paid: "varies" },
  },
];

const competitors = [
  {
    key: "pixel",
    name: "Pixel Tracker",
    blurb: "Multi-platform tracking pixel connector for Shopify, from Appnary.",
    price: "Free – $29/mo",
    href: "/pixel-tracker",
    cta: "See Pixel Tracker",
  },
  {
    key: "manual",
    name: "Manual theme code",
    blurb: "Pasting each platform's pixel snippet directly into your theme files.",
    price: "Free (developer time)",
    href: null,
    cta: null,
  },
  {
    key: "paid",
    name: "Other paid tracking apps",
    blurb: "Single-platform or bundled tracking apps in the Shopify App Store.",
    price: "$10–$50+/mo",
    href: null,
    cta: null,
  },
];

function CellRenderer({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <Check
        className="mx-auto h-5 w-5 text-aqua"
        strokeWidth={2.5}
        aria-label="Yes"
      />
    );
  }
  if (value === false) {
    return (
      <X
        className="mx-auto h-5 w-5 text-muted-foreground-faint"
        strokeWidth={2.5}
        aria-label="No"
      />
    );
  }
  if (value === "varies") {
    return (
      <Minus
        className="mx-auto h-5 w-5 text-muted-foreground"
        strokeWidth={2.5}
        aria-label="Varies"
      />
    );
  }
  return (
    <span className="text-xs font-medium text-muted-foreground-strong">
      {value}
    </span>
  );
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://appnary.com/" },
    { "@type": "ListItem", position: 2, name: "Compare", item: "https://appnary.com/compare" },
  ],
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pixel Tracker",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Shopify",
  description:
    "Connect Facebook, Google Ads, TikTok, Snapchat, Pinterest, X, and LinkedIn tracking pixels from one simple Shopify dashboard. No coding required.",
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
    {
      "@type": "Offer",
      name: "Starter",
      price: "7.00",
      priceCurrency: "USD",
      billingIncrement: "P1M",
    },
    {
      "@type": "Offer",
      name: "Growth",
      price: "15.00",
      priceCurrency: "USD",
      billingIncrement: "P1M",
    },
    {
      "@type": "Offer",
      name: "Pro",
      price: "29.00",
      priceCurrency: "USD",
      billingIncrement: "P1M",
    },
  ],
};

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-3xl px-6 pt-6">
        <ol className="flex items-center gap-2 text-xs text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            Compare
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 pt-14 pb-12 text-center sm:pt-20 sm:pb-16">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          Comparison
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Pixel Tracker vs{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            the alternatives
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">
          An honest side-by-side of Pixel Tracker, manually adding pixels via
          theme code, and typical paid Shopify tracking apps.
        </p>
      </section>

      {/* Competitor summary cards */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-4 sm:grid-cols-3">
          {competitors.map((c) => (
            <div
              key={c.key}
              className={`rounded-xl border p-5 ${
                c.key === "pixel"
                  ? "border-aqua/40 bg-aqua/5 shadow-sm"
                  : "border-border-themed bg-surface"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-base font-semibold text-foreground">
                  {c.name}
                </h2>
                {c.key === "pixel" && (
                  <span className="rounded-full bg-aqua/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/80">
                    Us
                  </span>
                )}
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{c.blurb}</p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {c.price}
              </p>
              {c.href && c.cta && (
                <Link
                  href={c.href}
                  className="mt-3 inline-block text-xs font-medium text-aqua hover:underline"
                >
                  {c.cta} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="overflow-x-auto rounded-2xl border border-border-themed bg-surface shadow-sm">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-section">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Feature
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-foreground">
                  Pixel Tracker
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Manual theme code
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Other paid apps
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-themed">
              {rows.map((row) => (
                <tr key={row.feature}>
                  <td className="px-5 py-3 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-5 py-3 text-center">
                    <CellRenderer value={row.values.pixel} />
                  </td>
                  <td className="px-5 py-3 text-center">
                    <CellRenderer value={row.values.manual} />
                  </td>
                  <td className="px-5 py-3 text-center">
                    <CellRenderer value={row.values.paid} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Pixel Tracker */}
      <section className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          When Pixel Tracker is the right call
        </h2>
        <div className="mt-6 space-y-4 text-base text-muted-foreground-strong leading-relaxed">
          <p>
            You want every ad platform pixel — Facebook, Google, TikTok,
            Snapchat, Pinterest, X, and LinkedIn — firing correctly without
            touching your theme code or hiring a developer.
          </p>
          <p>
            You&apos;ve had a pixel silently break after a theme update.
            Pixel Tracker injects pixels via Shopify ScriptTags, not theme
            files, so a theme change doesn&apos;t take your tracking down
            with it.
          </p>
          <p>
            You want server-side event matching — Facebook Conversions API,
            TikTok Events API — without building custom backend
            infrastructure yourself.
          </p>
          <p>
            You&apos;re comparing apps that only support one ad platform at
            a time, but you run campaigns across several.
          </p>
          <p>
            One honest caveat: if what you need is multi-touch attribution
            modeling, cross-device identity resolution, or a full
            analytics/BI layer on top of your pixels, that&apos;s a
            different category of tool than Pixel Tracker. Pixel Tracker
            focuses specifically on getting your pixels firing reliably —
            it doesn&apos;t replace an attribution platform.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-aqua/30 bg-aqua/5 p-6 text-center sm:p-8">
          <p className="text-base font-semibold text-foreground">
            Pixel Tracker is in development
          </p>
          <p className="mt-1 text-sm text-muted-foreground-strong">
            Join the waitlist for early access — available soon on the
            Shopify App Store.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center rounded-lg bg-aqua px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-aqua/90"
            >
              Join the waitlist
            </Link>
            <Link
              href="/pixel-tracker"
              className="inline-flex items-center justify-center rounded-lg border border-border-themed bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
            >
              See Pixel Tracker
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
