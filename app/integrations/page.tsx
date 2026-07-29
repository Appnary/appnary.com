import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Integrations | Pixel Tracker for Shopify",
  description:
    "Pixel Tracker connects tracking pixels for Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, X (Twitter), and LinkedIn from one Shopify dashboard.",
  openGraph: {
    title: "Integrations | Pixel Tracker for Shopify",
    description:
      "Connect tracking pixels for 7 ad platforms from one Shopify dashboard.",
    url: "https://appnary.com/integrations",
  },
};

const integrations = [
  {
    name: "Facebook / Meta Pixel",
    slug: "meta-pixel",
    description:
      "Track conversions, build audiences, and optimize campaigns across Facebook and Instagram.",
    events: ["PageView", "ViewContent", "AddToCart", "Purchase", "InitiateCheckout"],
  },
  {
    name: "Google Ads Conversion Tag",
    slug: "google-ads",
    description:
      "Track conversions from Google Search, Shopping, Display, and YouTube campaigns.",
    events: ["Conversion", "PageView", "Purchase", "SignUp", "BeginCheckout"],
  },
  {
    name: "TikTok Pixel",
    slug: "tiktok-pixel",
    description:
      "Track conversions and optimize campaigns across TikTok's advertising platform.",
    events: ["ViewContent", "AddToCart", "Purchase", "InitiateCheckout", "CompletePayment"],
  },
  {
    name: "Snapchat Pixel",
    slug: "snapchat-pixel",
    description:
      "Track conversions and build audiences for Snapchat advertising campaigns.",
    events: ["PAGE_VIEW", "VIEW_CONTENT", "ADD_CART", "PURCHASE", "START_CHECKOUT"],
  },
  {
    name: "Pinterest Tag",
    slug: "pinterest-pixel",
    description:
      "Track conversions and optimize campaigns across Pinterest advertising.",
    events: ["PageVisit", "ViewCategory", "AddToCart", "Checkout", "Lead"],
  },
  {
    name: "LinkedIn Insight Tag",
    slug: "linkedin-pixel",
    description:
      "Track conversions and build audiences for LinkedIn advertising campaigns.",
    events: ["PageView", "Lead", "Purchase", "SignUp", "AddToCart"],
  },
  {
    name: "X (Twitter) Pixel",
    slug: "twitter-pixel",
    description:
      "Track conversions and optimize campaigns across X (Twitter) advertising.",
    events: ["PageView", "ViewContent", "AddToCart", "Purchase", "SignUp"],
  },
];

const baseUrl = "https://appnary.com";

export default function IntegrationsPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pixel Tracker Integrations",
    description: "Tracking pixel integrations available in Pixel Tracker",
    numberOfItems: integrations.length,
    itemListElement: integrations.map((integration, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: integration.name,
        url: `${baseUrl}/pixel-tracker/${integration.slug}`,
        description: integration.description,
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Integrations", item: `${baseUrl}/integrations` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 pt-16 pb-16 sm:pt-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <header className="mt-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Integrations
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Pixel Tracker connects tracking pixels for 7 ad platforms from one Shopify dashboard. 
            No code or theme editing required.
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {integrations.map((integration) => (
            <Link
              key={integration.slug}
              href={`/pixel-tracker/${integration.slug}`}
              className="group rounded-xl border border-border-themed bg-surface p-6 transition-all hover:border-aqua/40 hover:shadow-md"
            >
              <h2 className="text-lg font-bold text-foreground group-hover:text-aqua transition-colors">
                {integration.name}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {integration.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {integration.events.slice(0, 3).map((event) => (
                  <span
                    key={event}
                    className="rounded-full bg-aqua/10 px-2.5 py-0.5 text-xs font-medium text-aqua"
                  >
                    {event}
                  </span>
                ))}
                {integration.events.length > 3 && (
                  <span className="rounded-full bg-surface px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    +{integration.events.length - 3} more
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border-themed bg-surface p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Ready to connect your pixels?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Install Pixel Tracker and set up all your tracking pixels in minutes.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#waitlist"
              className="inline-flex items-center rounded-lg bg-aqua px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-aqua/90"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/pixel-tracker"
              className="inline-flex items-center rounded-lg border border-border-themed bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-aqua/40"
            >
              View Pricing
            </Link>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                q: "How many pixels can I connect?",
                a: "The free plan includes 1 pixel. Starter ($7/mo) includes 3, Growth ($15/mo) includes 10, and Pro ($29/mo) includes unlimited pixels.",
              },
              {
                q: "Do I need to edit my theme?",
                a: "No. Pixel Tracker uses Shopify ScriptTags to inject pixels automatically. No code changes required.",
              },
              {
                q: "What about server-side tracking?",
                a: "Pixel Tracker supports Facebook Conversions API and TikTok Events API for server-side tracking, which provides more accurate conversion data.",
              },
              {
                q: "Can I use this with Google Analytics?",
                a: "Pixel Tracker focuses on ad platform pixels (Facebook, Google Ads, TikTok, etc.). It does not integrate with Google Analytics/GA4 directly.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-border-themed bg-surface"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-foreground list-none">
                  {faq.q}
                </summary>
                <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
