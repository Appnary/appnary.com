import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";
import { BarChart3, ChevronDown, Rocket, Sparkles, Tag } from "lucide-react";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/", {
  description:
    "Appnary is building Pixel Tracker, a Shopify pixel-configuration app. Join the waitlist for verified launch coverage and availability.",
  openGraph: {
    description:
      "Pixel Tracker is in development. Follow launch updates for this planned Shopify pixel-configuration app.",
  },
});

const homeFaqs = [
  {
    q: "What does Appnary build?",
    a: "Appnary builds simple, affordable Shopify apps for independent merchants, starting with Pixel Tracker, a multi-platform tracking pixel connector.",
  },
  {
    q: "What is Pixel Tracker?",
    a: "Pixel Tracker is a planned Shopify pixel-configuration app. Intended coverage includes Meta, Google Ads, TikTok, Snapchat, Pinterest, X, and LinkedIn; launch integrations are still being verified.",
  },
  {
    q: "Is Pixel Tracker available now?",
    a: "Pixel Tracker is in development and not available to install. Join the waitlist for launch updates.",
  },
  {
    q: "How much does Pixel Tracker cost?",
    a: "Pricing is specific to each Shopify app and billed through Shopify. Pixel Tracker's launch prices and plan limits are not confirmed yet.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((faq) => ({
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
  url: "https://appnary.com/pixel-tracker",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      <section
        id="hero"
        className="relative overflow-hidden bg-background text-foreground transition-colors"
      >
        {/* Soft gradients without large animated blur layers. */}
        <div
          aria-hidden="true"
          className="hero-glow pointer-events-none absolute inset-0"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 pb-24 text-center sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-themed bg-surface px-4 py-1.5 text-xs font-semibold text-foreground shadow-sm">
            <Rocket className="h-3.5 w-3.5 text-aqua" strokeWidth={2.5} />
            Available soon on the Shopify App Store
          </span>

          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-foreground">Shopify apps that work</span>
            <span className="mt-2 block bg-gradient-to-r from-accent-foreground to-accent-heading-end bg-clip-text text-transparent">
              the way you do
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground-strong sm:text-xl">
            Simple, affordable tools built for merchants, not enterprise
            teams. Join the waitlist to get early-bird pricing and launch
            updates.
          </p>

          <div
            id="waitlist"
            className="mt-12 w-full max-w-lg rounded-2xl border border-border-themed bg-surface p-8 text-left shadow-sm sm:p-10"
          >
            <h2 className="text-xl font-semibold text-foreground">
              Join the Waitlist
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Be the first to know when we launch.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      <section id="apps" className="border-t border-border-themed bg-section py-20 transition-colors">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Our Apps</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-border-themed bg-card p-6 text-left transition-shadow hover:shadow-card hover:border-border-themed-strong">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface border border-border-themed shadow-sm">
                <BarChart3 className="h-6 w-6 text-aqua" />
              </div>
              <span className="inline-block rounded-full bg-aqua/15 px-3 py-1 text-xs font-medium text-accent-foreground">Available Soon</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Pixel Tracker</h3>
              <p className="mt-2 text-sm text-muted-foreground">A planned Shopify app for multi-platform pixel configuration. Launch coverage is still being verified.</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                <a href="/pixel-tracker" className="inline-block text-sm font-medium text-accent-foreground hover:underline">Learn More →</a>
                <a href="/pixel-tracker/guides" className="inline-block text-sm font-medium text-muted-foreground-strong hover:text-accent-foreground hover:underline">Setup guides →</a>
                <a href="/compare" className="inline-block text-sm font-medium text-muted-foreground-strong hover:text-accent-foreground hover:underline">Compare tracking options →</a>
              </div>
            </div>

            <div className="rounded-xl border border-border-themed bg-card p-6 text-left transition-shadow hover:shadow-card hover:border-border-themed-strong">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface border border-border-themed shadow-sm">
                <Sparkles className="h-6 w-6 text-foreground/50" />
              </div>
              <span className="inline-block rounded-full bg-muted-themed px-3 py-1 text-xs font-medium text-muted-foreground">Coming Soon</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">More Coming</h3>
              <p className="mt-2 text-sm text-muted-foreground">We&apos;re building a suite of tools Shopify merchants actually need.</p>
            </div>

            <div className="rounded-xl border border-border-themed bg-card p-6 text-left transition-shadow hover:shadow-card hover:border-border-themed-strong">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface border border-border-themed shadow-sm">
                <Tag className="h-6 w-6 text-foreground/50" />
              </div>
              <span className="inline-block rounded-full bg-muted-themed px-3 py-1 text-xs font-medium text-muted-foreground">Coming Soon</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Simple Pricing</h3>
              <p className="mt-2 text-sm text-muted-foreground">No surprises. Transparent, affordable pricing for every budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <h2 id="faq-heading" className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {homeFaqs.map((faq) => (
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
