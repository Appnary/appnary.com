import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/compare", {
  title: "Shopify Pixel Tracking Software: Compare Options | Appnary",
  description:
    "Compare Shopify pixel tracking software, apps, DIY theme setup, and attribution tools. See Pixel Tracker features, pricing, and side-by-side comparisons.",
  openGraph: {
    title: "Shopify Pixel Tracking Software: Compare Options",
    description:
      "Compare Shopify pixel tracking software, apps, DIY setup, and attribution tools, with pricing details.",
    url: "https://appnary.com/compare",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
});

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
          Compare Shopify Pixel Tracking{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            Software
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">
          Compare Shopify pixel tracking software, app setups, DIY theme code,
          and attribution tools in one place.
        </p>
      </section>

      {/* Pixel Tracker vs competitors */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Pixel Tracker vs competitors
        </h2>
        <p className="mt-3 text-base text-muted-foreground-strong">
          Compare specific Shopify tracking apps, native channels, and DIY setups.
          Pixel Tracker is in development, so its comparisons describe the
          intended product rather than an app you can install today.
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
          Browse tools for different jobs: installing ad pixels, measuring
          conversions, or analyzing revenue. Pixel Tracker is an ad-pixel
          integration product; it is not a full analytics or profit-reporting suite.
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

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Choose by the measurement job
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground-strong">
          <li>
            For ad-event delivery, compare supported platforms, purchase events,
            consent handling, and the diagnostics each integration provides.
          </li>
          <li>
            For server-side tracking, check the specific ad platform and delivery
            path. A browser pixel installer does not automatically include a
            server connection for every platform.
          </li>
          <li>
            For sales analysis or profit reporting, use the analytics and ROAS
            categories. Installing an ad pixel does not create those reports.
          </li>
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Pricing and Shopify billing
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground-strong">
          Each Shopify app has its own pricing. For Appnary apps, billing is
          handled through Shopify. Check the specific app&apos;s public Shopify
          listing and subscription confirmation for its price, limits, and any
          trial terms before subscribing.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground-strong">
          Pixel Tracker&apos;s public listing is not available yet, so this page
          does not confirm launch prices. See the{" "}
          <Link href="/pixel-tracker" className="text-aqua hover:underline">
            product overview
          </Link>{" "}
          for its intended scope, and join the waitlist for launch updates.
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
