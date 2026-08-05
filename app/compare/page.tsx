import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How Pixel Tracker Compares | Appnary",
  description:
    "See how Pixel Tracker compares to other Shopify pixel tracking apps, DIY setups, and attribution tools, plus a quick look at pricing.",
  openGraph: {
    title: "How Pixel Tracker Compares",
    description:
      "A directory of every Pixel Tracker comparison, best-of roundup, and pricing tier.",
    url: "https://appnary.com/compare",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const vsCompetitors = [
  { name: "TiXel", slug: "tixel-alternative" },
  { name: "Infinite Pixels", slug: "infinite-pixel-alternative" },
  { name: "Omega Pixel", slug: "omega-pixel-alternative" },
  { name: "Trackify", slug: "trackify-alternative" },
  { name: "OnePixel", slug: "onepixel-alternative" },
  { name: "Avantify", slug: "avantify-alternative" },
  { name: "Pixee", slug: "pixee-alternative" },
  { name: "MultiPixels", slug: "multipixels-alternative" },
  { name: "Pixelfy", slug: "pixelfy-alternative" },
  { name: "Shoptok", slug: "shoptok-alternative" },
  { name: "Elevar", slug: "elevar-alternative" },
  { name: "Facebook & Instagram Channel", slug: "facebook-instagram-alternative" },
  { name: "Google Tag Manager", slug: "google-tag-manager-alternative" },
  { name: "Littledata", slug: "littledata-alternative" },
  { name: "TrackBee", slug: "trackbee-alternative" },
  { name: "Hyros", slug: "hyros-alternative" },
  { name: "Northbeam", slug: "northbeam-alternative" },
  { name: "Lifetimely", slug: "lifetimely-alternative" },
  { name: "DIY Theme Code", slug: "diy-vs-app" },
  { name: "Server-Side Setup Options", slug: "server-side-setup-options" },
];

const alternativesCategories = [
  {
    name: "Best Shopify Pixel Tracking Apps",
    slug: "best-shopify-pixel-tracking-apps",
    blurb: "7 pixel tracking apps compared side by side.",
  },
  {
    name: "Best Shopify Ad Tracking Tools",
    slug: "best-shopify-ad-tracking-tools",
    blurb: "Pixel installers and attribution platforms compared.",
  },
  {
    name: "Best Shopify ROAS Calculators",
    slug: "best-shopify-roas-calculators",
    blurb: "ROAS and profit calculator apps compared.",
  },
  {
    name: "Best Shopify Conversion Tracking Apps",
    slug: "best-shopify-conversion-tracking-apps",
    blurb: "Apps ranked on server-side conversion tracking.",
  },
  {
    name: "Best Shopify Analytics Apps",
    slug: "best-shopify-analytics-apps",
    blurb: "Analytics and reporting apps compared.",
  },
];

const pricingTiers = [
  { plan: "Free", price: "$0", pixels: "1 pixel" },
  { plan: "Starter", price: "$7/mo", pixels: "3 pixels" },
  { plan: "Growth", price: "$15/mo", pixels: "10 pixels" },
  { plan: "Pro", price: "$29/mo", pixels: "Unlimited pixels" },
];

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
          How Pixel Tracker{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            Compares
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">
          Every side by side comparison, best of roundup, and pricing detail
          for Pixel Tracker in one place.
        </p>
      </section>

      {/* Pixel Tracker vs competitors */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Pixel Tracker vs competitors
        </h2>
        <p className="mt-3 text-base text-muted-foreground-strong">
          Detailed, honest breakdowns against specific Shopify tracking
          apps, native channels, and DIY setups.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {vsCompetitors.map((c) => (
            <Link
              key={c.slug}
              href={`/vs/${c.slug}`}
              className="group flex items-center justify-between gap-2 rounded-xl border border-border-themed bg-surface px-5 py-4 transition-all hover:border-aqua/40 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-foreground group-hover:text-aqua transition-colors">
                {c.name}
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-aqua transition-colors" />
            </Link>
          ))}
        </div>
      </section>

      {/* Best-of categories */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Best-of categories
        </h2>
        <p className="mt-3 text-base text-muted-foreground-strong">
          Roundups ranking Pixel Tracker against a wider field of Shopify
          apps in each category.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {alternativesCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/alternatives/${cat.slug}`}
              className="group rounded-xl border border-border-themed bg-surface p-5 transition-all hover:border-aqua/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground group-hover:text-aqua transition-colors">
                  {cat.name}
                </h3>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-aqua transition-colors" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{cat.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick pricing overview */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Quick pricing overview
        </h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border-themed bg-surface shadow-sm">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="bg-section">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Plan
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Price
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Pixels included
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-themed">
              {pricingTiers.map((tier) => (
                <tr key={tier.plan}>
                  <td className="px-5 py-4 text-sm font-medium text-foreground">
                    {tier.plan}
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    {tier.price}
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    {tier.pixels}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Pricing and pixel limits apply per Shopify store. See{" "}
          <Link href="/pixel-tracker" className="text-aqua hover:underline">
            Pixel Tracker
          </Link>{" "}
          for the full feature list.
        </p>
      </section>

      {/* Waitlist CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <div className="rounded-2xl border border-aqua/30 bg-aqua/5 p-6 text-center sm:p-8">
          <p className="text-base font-semibold text-foreground">
            Pixel Tracker is in development
          </p>
          <p className="mt-1 text-sm text-muted-foreground-strong">
            Join the waitlist for early access, available soon on the
            Shopify App Store.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center rounded-lg bg-aqua px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-aqua/90"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/integrations"
              className="inline-flex items-center justify-center rounded-lg border border-border-themed bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
            >
              See Integrations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
