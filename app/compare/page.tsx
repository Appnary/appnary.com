import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Pixel Tracker vs Google Analytics & Shopify Analytics | Appnary",
  description:
    "How Pixel Tracker compares to Google Analytics, the built-in Shopify dashboard, and other paid analytics tools. A side-by-side breakdown.",
  openGraph: {
    title: "Pixel Tracker vs the alternatives",
    description:
      "A clear, honest side-by-side comparison of Pixel Tracker, Google Analytics, and built-in Shopify reports.",
    url: "https://appnary.com/compare",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

type Cell = boolean | "partial" | string;

const rows: { feature: string; values: Record<string, Cell> }[] = [
  {
    feature: "No cookies or personal data",
    values: { pixel: true, ga: false, shopify: true, paid: "varies" },
  },
  {
    feature: "Free of consent banners (GDPR/CCPA)",
    values: { pixel: true, ga: false, shopify: true, paid: "varies" },
  },
  {
    feature: "Real-time live dashboard",
    values: { pixel: true, ga: "partial", shopify: false, paid: true },
  },
  {
    feature: "Click & scroll heatmaps",
    values: { pixel: true, ga: false, shopify: false, paid: "partial" },
  },
  {
    feature: "Conversion funnel view",
    values: { pixel: true, ga: "partial", shopify: false, paid: true },
  },
  {
    feature: "Works without code changes",
    values: { pixel: true, ga: false, shopify: true, paid: "varies" },
  },
  {
    feature: "Flat pricing, no usage tiers",
    values: { pixel: true, ga: true, shopify: true, paid: false },
  },
  {
    feature: "CSV / JSON export",
    values: { pixel: true, ga: "partial", shopify: true, paid: "varies" },
  },
  {
    feature: "Built specifically for Shopify",
    values: { pixel: true, ga: false, shopify: true, paid: "varies" },
  },
  {
    feature: "Free tier",
    values: { pixel: "14-day trial", ga: true, shopify: true, paid: false },
  },
];

const competitors = [
  {
    key: "pixel",
    name: "Pixel Tracker",
    blurb: "Privacy-friendly Shopify analytics from Appnary.",
    price: "$4.99/mo flat",
    href: "/pixel-tracker",
    cta: "Try Pixel Tracker",
  },
  {
    key: "ga",
    name: "Google Analytics",
    blurb: "The default for general-purpose web analytics.",
    price: "Free",
    href: "https://marketingplatform.google.com/about/analytics/",
    cta: "Visit site",
  },
  {
    key: "shopify",
    name: "Shopify Analytics",
    blurb: "The built-in dashboard that ships with every store.",
    price: "Included",
    href: "https://help.shopify.com/en/manual/analytics",
    cta: "Visit site",
  },
  {
    key: "paid",
    name: "Premium paid apps",
    blurb: "Tools like Lucky Orange, Hotjar, and similar.",
    price: "$30–$150/mo",
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
  if (value === "partial") {
    return (
      <Minus
        className="mx-auto h-5 w-5 text-muted-foreground"
        strokeWidth={2.5}
        aria-label="Partial"
      />
    );
  }
  return (
    <span className="text-xs font-medium text-muted-foreground-strong">
      {value}
    </span>
  );
}

export default function ComparePage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center sm:pt-28 sm:pb-16">
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
          An honest side-by-side of Pixel Tracker, Google Analytics,
          built-in Shopify reports, and typical paid analytics apps.
        </p>
      </section>

      {/* Competitor summary cards */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                  {...(c.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
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
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="bg-section">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Feature
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-foreground">
                  Pixel Tracker
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Google Analytics
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Shopify Analytics
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Paid apps
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
                    <CellRenderer value={row.values.ga} />
                  </td>
                  <td className="px-5 py-3 text-center">
                    <CellRenderer value={row.values.shopify} />
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
            You want heatmaps and a real-time dashboard without paying
            $50–$150 a month for premium tools that come with a sales
            call.
          </p>
          <p>
            You&apos;d rather not run a cookie banner just to see how
            many people read your product page.
          </p>
          <p>
            You don&apos;t need cross-device identity graphs, retargeting
            segments, or a data team. You want clear answers and to get
            back to running your store.
          </p>
          <p>
            Google Analytics is powerful but built for marketing teams,
            not store owners. The built-in Shopify dashboard is solid
            but limited. Paid apps work but cost more than most
            independent merchants want to spend. Pixel Tracker sits
            in the middle: useful, affordable, and built specifically
            for the way Shopify merchants actually work.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-aqua/30 bg-aqua/5 p-6 text-center sm:p-8">
          <p className="text-base font-semibold text-foreground">
            Ready to give it a try?
          </p>
          <p className="mt-1 text-sm text-muted-foreground-strong">
            14-day free trial. No credit card required.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/pixel-tracker"
              className="inline-flex items-center justify-center rounded-lg bg-aqua px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-aqua/90"
            >
              See Pixel Tracker
            </Link>
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center rounded-lg border border-border-themed bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
            >
              Join the waitlist
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}