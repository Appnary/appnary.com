import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PixelTrackingCalculator from "@/components/pixel-tracking-calculator";

export const metadata: Metadata = {
  title: "Pixel Tracking Cost & Coverage Calculator | Appnary",
  description:
    "Estimate your Shopify tracking coverage, recommended plan cost, and missed conversions from browser-only pixels. Free, no signup required.",
  openGraph: {
    title: "Pixel Tracking Cost & Coverage Calculator",
    description:
      "See your tracking coverage score, recommended plan, and estimated missed conversions in seconds.",
    url: "https://appnary.com/tools/pixel-tracking-calculator",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "What does this calculator estimate?",
    a: "It estimates three things from your inputs: which Pixel Tracker plan fits your platform count, a 0-100 coverage score for how complete your tracking stack is, and a rough range of conversions that may go unreported if you're not using server-side tracking. It also shows a simple blended ROAS if you fill in ad spend, average order value, and monthly orders.",
  },
  {
    q: "How is the coverage score calculated?",
    a: "It's a simple, transparent formula: up to 40 points for how many of the 7 major ad platforms you track, up to 30 points for your current setup type (DIY code, multiple apps, one multi-platform app, or none), and up to 30 points for server-side tracking coverage. It's meant as a rough health check, not a precise audit.",
  },
  {
    q: "Where does the missed conversions estimate come from?",
    a: "It's based on a conservative, commonly cited range: roughly 10-20% of browser-only conversions can go unreported due to ad blockers, Safari's Intelligent Tracking Prevention, and third-party cookie loss. If you already use server-side tracking like Facebook Conversions API, that assumed loss drops closer to 0-3%. Your actual numbers will vary by traffic mix and browser.",
  },
  {
    q: "Does this replace a ROAS or attribution tool?",
    a: "No. The blended ROAS figure here is a simple (orders × average order value) / ad spend calculation, useful as a gut check, not multi-touch attribution. If you need proper attribution modeling or a full analytics layer, that's a different category of tool than this calculator or Pixel Tracker itself.",
  },
  {
    q: "Is my data saved anywhere?",
    a: "No. Everything you enter runs in your browser only. Nothing is sent to a server, stored, or shared. Refreshing the page resets it back to the defaults.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://appnary.com/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://appnary.com/tools" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Pixel Tracking Calculator",
      item: "https://appnary.com/tools/pixel-tracking-calculator",
    },
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

const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pixel Tracking Cost & Coverage Calculator",
  url: "https://appnary.com/tools/pixel-tracking-calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  description:
    "Free calculator that estimates Shopify tracking coverage, recommended pixel plan cost, and conversions missed from browser-only tracking.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function PixelTrackingCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }}
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
          <li>
            <Link href="/tools" className="hover:text-foreground hover:underline">
              Tools
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            Pixel Tracking Calculator
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 pt-10 pb-10 text-center sm:pt-14 sm:pb-14">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          Free Tool
        </span>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Pixel Tracking Cost &amp;{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            Coverage Calculator
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">
          See which plan fits your platform count, how complete your
          tracking stack is, and roughly how many conversions browser-only
          tracking might be missing.
        </p>
      </section>

      {/* Calculator */}
      <section className="mx-auto max-w-5xl px-6 pb-16 sm:pb-20">
        <PixelTrackingCalculator />
      </section>

      {/* SEO content */}
      <section className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
        <div className="space-y-10 text-base leading-relaxed text-muted-foreground-strong">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              What this calculator estimates
            </h2>
            <p className="mt-4">
              This tool takes a few basic inputs, the ad platforms you run,
              your current tracking setup, and whether you use server-side
              events, and turns them into three plain-English numbers: a
              recommended Pixel Tracker plan based on how many platforms you
              need, a coverage score out of 100 that reflects how complete
              your tracking stack is, and an estimated range of conversions
              that browser-only tracking might not be reporting. If you also
              enter your ad spend, average order value, and monthly orders,
              it adds a simple blended ROAS figure for reference.
            </p>
            <p className="mt-4">
              Every number here is an estimate built from a transparent,
              conservative formula, not a black box. The calculator page
              shows exactly how each score is calculated so you can judge
              for yourself how much weight to put on it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Why multi-platform pixel setup gets expensive and messy
            </h2>
            <p className="mt-4">
              Most Shopify stores end up advertising on more than one
              platform: Facebook, Google, TikTok, and increasingly Snapchat,
              Pinterest, LinkedIn, or X. Each platform ships its own pixel or
              tag, with its own setup instructions, its own ID format, and
              its own quirks for single-page checkout flows.
            </p>
            <p className="mt-4">
              Handled manually, that means editing theme code (or
              Google Tag Manager) once per platform, and testing each pixel
              separately after every theme update. Handled with a separate
              app per platform, it means paying multiple subscriptions,
              tracking multiple dashboards, and hoping none of them conflict
              with each other or slow down your storefront. Both paths add
              up in time and cost as you add more platforms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              When server-side tracking matters
            </h2>
            <p className="mt-4">
              Browser-based pixels rely on a script running in the
              customer's browser and a cookie surviving long enough to match
              a visit to a purchase. Ad blockers, Safari's Intelligent
              Tracking Prevention, and the general decline of third-party
              cookies all interrupt that chain, so a real purchase can
              happen without the ad platform ever hearing about it.
            </p>
            <p className="mt-4">
              Server-side tracking, like Facebook's Conversions API or
              TikTok's Events API, sends the same conversion event directly
              from your store's server instead of relying solely on the
              browser. It doesn't fix everything, ad platforms still need to
              match the event to a person, but it recovers a meaningful
              share of conversions that browser-only tracking would
              otherwise lose. If you're spending real ad budget on a
              platform, server-side support for that platform is worth
              checking for.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              How Pixel Tracker fits into this
            </h2>
            <p className="mt-4">
              Pixel Tracker is a pixel layer, not a reporting or ROAS
              analytics tool. It connects Facebook/Meta, Google Ads, TikTok,
              Snapchat, Pinterest, X, and LinkedIn pixels from one Shopify
              dashboard, so you install once and manage every platform from
              the same place instead of juggling separate apps or editing
              theme code per platform. Where supported, it also sends
              server-side events (Facebook Conversions API and TikTok Events
              API today) to help recover some of the conversions that
              browser-only tracking misses.
            </p>
            <p className="mt-4">
              It won't give you multi-touch attribution or a full analytics
              dashboard, that's a different category of product. What it
              does is make sure the pixels themselves are firing reliably,
              which is the foundation any attribution or ROAS tool needs to
              work with in the first place.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
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
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 shrink-0" />
              </summary>
              <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
