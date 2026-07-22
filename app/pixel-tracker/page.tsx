import { BarChart3, CheckCircle2, ChevronDown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixel Tracker | Multi-Platform Tracking for Shopify | Appnary",
  description:
    "Connect Facebook, Google, TikTok, Snapchat, Pinterest, X, and LinkedIn pixels from one simple Shopify dashboard. No coding required.",
  openGraph: {
    title: "Pixel Tracker | Multi-Platform Tracking for Shopify | Appnary",
    description:
      "Connect all your tracking pixels from one simple dashboard. No coding required.",
    url: "https://appnary.com/pixel-tracker",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const features = [
  {
    title: "Multi-platform tracking",
    description:
      "Facebook, Google Ads, TikTok, Snapchat, Pinterest, X (Twitter), and LinkedIn — all in one place.",
  },
  {
    title: "One-click setup",
    description:
      "Paste your Pixel ID and you're done. No theme editing, no code changes required.",
  },
  {
    title: "Automatic injection",
    description:
      "Pixels fire on every storefront page automatically via Shopify ScriptTags.",
  },
  {
    title: "Server-side events",
    description:
      "Facebook Conversions API (CAPI) and TikTok Events API for more accurate conversion tracking.",
  },
  {
    title: "Simple dashboard",
    description:
      "See all your pixels and their status at a glance. Enable or disable any platform instantly.",
  },
  {
    title: "Free plan available",
    description:
      "Start with one pixel at no cost. Upgrade anytime to manage more platforms.",
  },
];

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "1 pixel",
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Starter",
    price: "$7",
    period: "/mo",
    description: "3 pixels",
    cta: "Start Starter",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$15",
    period: "/mo",
    description: "10 pixels",
    cta: "Start Growth",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "Unlimited pixels",
    cta: "Start Pro",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "What platforms do you support?",
    a: "Facebook/Meta Pixel, Google Ads Tag, TikTok Pixel, Snapchat Pixel, Pinterest Tag, X (Twitter) Pixel, and LinkedIn Insight Tag.",
  },
  {
    q: "How do I install it?",
    a: "Install from the Shopify App Store, paste your Pixel ID for each platform, and your pixels fire automatically. No code editing needed.",
  },
  {
    q: "Does it work with server-side events?",
    a: "Yes. Facebook Conversions API (CAPI) and TikTok Events API are supported for more accurate conversion tracking that isn't blocked by ad blockers.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes. The Free plan includes 1 pixel with no time limit. Upgrade anytime to connect more platforms.",
  },
  {
    q: "Do I need to edit my theme?",
    a: "No. Pixels are injected automatically via Shopify ScriptTags — your theme stays untouched.",
  },
  {
    q: "Can I track multiple stores?",
    a: "Each Shopify store needs its own Pixel Tracker installation. Pricing applies per store.",
  },
  {
    q: "What about GDPR/CCPA compliance?",
    a: "You're responsible for your own compliance. Pixel Tracker connects your existing platform pixels — it doesn't collect or store visitor data itself.",
  },
  {
    q: "How do I cancel?",
    a: "Cancel anytime from the Billing page in your Shopify admin. No cancellation fees.",
  },
];

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

export default function PixelTrackerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 rounded-full bg-lime/80 px-3 py-0.5 text-xs font-semibold text-foreground/80">
            In Development
          </span>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-surface border border-border-themed">
            <BarChart3 className="h-7 w-7 text-aqua" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Pixel Tracker
          </h1>
          <p className="mt-3 max-w-xl text-lg text-muted-foreground">
            Connect all your tracking pixels from one simple dashboard.
            Facebook, Google, TikTok, Snapchat, Pinterest, X, and LinkedIn —
            no coding required.
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
      <section className="mx-auto max-w-5xl px-6 pb-16 sm:pb-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
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
      <section className="mx-auto max-w-5xl px-6 pb-16 sm:pb-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Pricing
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 shadow-sm flex flex-col ${
                plan.highlighted
                  ? "border-aqua bg-aqua/5"
                  : "border-border-themed bg-surface"
              }`}
            >
              {plan.highlighted && (
                <span className="mb-3 self-start rounded-full bg-aqua/20 px-2.5 py-0.5 text-xs font-semibold text-aqua">
                  Popular
                </span>
              )}
              <p className="text-sm font-semibold text-muted-foreground">
                {plan.name}
              </p>
              <p className="mt-1 text-3xl font-bold text-foreground">
                {plan.price}
                <span className="text-base font-normal text-muted-foreground">
                  {plan.period}
                </span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <button
                disabled
                className="mt-6 w-full rounded-lg bg-muted-themed px-4 py-2 text-sm font-medium text-muted-foreground cursor-not-allowed"
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground-faint text-center">
          Available in the Shopify App Store. Purchase directly through
          Shopify.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
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
    </>
  );
}
