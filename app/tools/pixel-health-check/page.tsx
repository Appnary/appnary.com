import type { Metadata } from "next";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import PixelHealthCheck from "@/components/pixel-health-check";

export const metadata: Metadata = {
  title: "Shopify Pixel Health Check | Free Tool | Appnary",
  description:
    "Check whether your Shopify storefront is loading Meta, Google, TikTok, and other ad pixels. Get a health score and prioritized fixes. Free, no signup.",
  openGraph: {
    title: "Shopify Pixel Health Check",
    description:
      "Scan your storefront HTML and answer a short checklist to score tracking health and get prioritized fixes.",
    url: "https://appnary.com/tools/pixel-health-check",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const faqs = [
  {
    q: "What does this pixel health check do?",
    a: "It combines an optional live HTML scan of your public storefront with a short setup checklist. You get a 0-100 health score and a prioritized list of fixes, with links to platform-specific troubleshooting and events guides.",
  },
  {
    q: "Why might the live scan miss a pixel I know is installed?",
    a: "The scan only reads the initial HTML response. Pixels loaded later by JavaScript, Google Tag Manager, Shopify app embeds that inject after hydration, or tags held behind a consent banner may not appear. Always confirm with each platform's browser helper.",
  },
  {
    q: "Is a high score a guarantee that ads attribution is accurate?",
    a: "No. A healthy install means tags are present and your process covers server-side and purchase verification. Attribution models, click windows, and organic overlap still affect ROAS reports in each ads manager.",
  },
  {
    q: "Do you store the URLs I scan?",
    a: "The scan request is processed to fetch the page and return results. The checklist itself runs in your browser. Do not submit private admin URLs or pages that require login.",
  },
  {
    q: "How is this different from the tracking cost calculator?",
    a: "The cost and coverage calculator estimates plan fit, coverage score, and missed conversions from your inputs. This health check focuses on whether pixels appear to load and which setup gaps to fix first.",
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
      name: "Pixel Health Check",
      item: "https://appnary.com/tools/pixel-health-check",
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
  name: "Shopify Pixel Health Check",
  url: "https://appnary.com/tools/pixel-health-check",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any",
  description:
    "Free tool that scans a Shopify storefront for common ad pixel snippets and scores tracking setup health.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function PixelHealthCheckPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl px-6 pt-6">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
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
            Pixel Health Check
          </li>
        </ol>
      </nav>

      <header className="mx-auto max-w-3xl px-6 pt-10 pb-10 text-center sm:pt-14 sm:pb-12">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          Free tool
        </span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Shopify Pixel{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            Health Check
          </span>
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground-strong">
          Scan a public storefront for common ad pixels, answer a short checklist,
          and get a health score with prioritized fixes. No signup required.
        </p>
      </header>

      <section className="mx-auto max-w-5xl px-6 pb-16 sm:pb-20">
        <PixelHealthCheck />
      </section>

      <article className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <section className="pb-10 sm:pb-12">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What a healthy Shopify pixel setup looks like
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground-strong">
            <p>
              Most stores that complain about broken ROAS do not have a broken
              ads account. They have tags that load on the homepage but not the
              product template, a second app double-firing Purchase, or browser-only
              Meta pixels that quietly drop iOS traffic. A health check is useful
              when it separates &quot;is the script present?&quot; from &quot;is the conversion
              event trustworthy?&quot;
            </p>
            <p>
              Start with presence: Meta Pixel Helper, Google Tag Assistant, TikTok
              Pixel Helper, and the equivalents for Snapchat, Pinterest, LinkedIn,
              and X. If the helper never sees your ID on a product page with ad
              blockers disabled, fix install first. Only after PageView is solid
              should you chase match rates and server-side coverage.
            </p>
          </div>
        </section>

        <section className="pb-10 sm:pb-12">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Why HTML scans are incomplete (and still useful)
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground-strong">
            <p>
              Modern Shopify themes and app embeds often inject tracking after the
              first HTML paint. Consent tools can delay marketing tags until a
              shopper accepts cookies. Checkout and thank-you pages may live on
              different hosts than the storefront homepage. That is why this tool
              pairs a best-effort HTML scan with a merchant checklist instead of
              pretending one curl request is a full audit.
            </p>
            <p>
              Use the scan as a smoke test. If Meta and Google snippets are missing
              from a public product URL you know should fire tags, you have a real
              lead. If the scan is clean but helpers still fail, dig into consent,
              app embed toggles, and theme app extensions next.
            </p>
          </div>
        </section>

        <section className="pb-10 sm:pb-12">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Server-side tracking and purchase verification
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground-strong">
            <p>
              Browser pixels alone under-report when Safari Intelligent Tracking
              Prevention, ad blockers, or ITP-like limits strip third-party
              scripts. Meta Conversions API, TikTok Events API, and similar
              server-side paths send the same purchase with a shared event ID so
              platforms can dedupe browser + server hits. Without that layer, your
              ads manager can look worse than your Shopify orders.
            </p>
            <p>
              The highest-value check is still the thank-you page. Complete a test
              order (or use each platform&apos;s test events tool) and confirm Purchase
              or conversion fires once, with value and currency. Homepage PageView
              success does not prove checkout tracking works.
            </p>
          </div>
        </section>

        <section className="pb-10 sm:pb-12">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How Pixel Tracker fits
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground-strong">
            <p>
              Pixel Tracker is a multi-platform pixel installer for Shopify: paste
              IDs for Meta, Google Ads, TikTok, Snapchat, Pinterest, LinkedIn, and
              X from one dashboard, without theme code. Server-side support focuses
              on Facebook CAPI and TikTok Events API. It is a pixel layer, not a
              full attribution or profit BI suite.
            </p>
            <p>
              The app is not on the Shopify App Store yet. Join the waitlist for
              early access, or use the free{" "}
              <Link
                href="/tools/pixel-tracking-calculator"
                className="font-medium text-aqua hover:underline"
              >
                tracking cost calculator
              </Link>{" "}
              and platform guides while you clean up your current stack.
            </p>
          </div>
        </section>

        <section aria-labelledby="faq-heading" className="pb-4">
          <h2
            id="faq-heading"
            className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Frequently asked questions
          </h2>
          <div className="divide-y divide-border-themed rounded-2xl border border-border-themed bg-surface">
            {faqs.map((faq) => (
              <details key={faq.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-foreground">
                  {faq.q}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground-strong">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
