import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";
import Link from "next/link";
import { BarChart3, ChevronDown, Rocket, Sparkles, Tag } from "lucide-react";

export const metadata: Metadata = {
  description:
    "Appnary builds Pixel Tracker, connecting Facebook, Google, and TikTok pixels on your Shopify store from one dashboard — no code or theme edits required.",
  openGraph: {
    description:
      "Pixel Tracker connects Shopify pixel tracking for Facebook, Google, and TikTok from one dashboard — no code required.",
  },
};

const homeFaqs = [
  {
    q: "What does Appnary build?",
    a: "Appnary builds simple, affordable Shopify apps for independent merchants, starting with Pixel Tracker, a multi-platform tracking pixel connector.",
  },
  {
    q: "What is Pixel Tracker?",
    a: "Pixel Tracker connects tracking pixels for Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, X (Twitter), and LinkedIn from one Shopify dashboard, with no theme code editing required.",
  },
  {
    q: "Is Pixel Tracker available now?",
    a: "Pixel Tracker is available soon on the Shopify App Store. Join the waitlist for early access and launch pricing.",
  },
  {
    q: "How much does Pixel Tracker cost?",
    a: "Pixel Tracker starts free for 1 pixel, with paid plans from $7/month for 3 pixels up to $29/month for unlimited pixels, per Shopify store.",
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section
        id="hero"
        className="relative overflow-hidden bg-background text-foreground transition-colors"
      >
        {/* Background gradient orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="animate-orb absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-aqua/20 to-lime/10 blur-3xl" />
          <div className="animate-orb-delayed absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-aqua/15 to-lime/5 blur-3xl" />
          <div className="animate-fade-in absolute left-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-aqua/5 to-transparent blur-2xl" />
        </div>

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 pb-24 text-center sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40">
          <span className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-border-themed bg-surface px-4 py-1.5 text-xs font-semibold text-foreground shadow-sm">
            <Rocket className="h-3.5 w-3.5 text-aqua" strokeWidth={2.5} />
            Available soon on the Shopify App Store
          </span>

          <h1 className="animate-fade-in-up animation-delay-200 mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-foreground">Shopify apps that work</span>
            <span className="mt-2 block bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
              the way you do
            </span>
          </h1>

          <p className="animate-fade-in-up animation-delay-400 mt-6 max-w-xl text-lg text-muted-foreground-strong sm:text-xl">
            Simple, affordable tools built for merchants, not enterprise
            teams. Join the waitlist to get early-bird pricing and launch
            updates.
          </p>

          <div
            id="waitlist"
            className="animate-fade-in-up animation-delay-600 mt-12 w-full max-w-lg rounded-2xl border border-border-themed bg-surface p-8 text-left shadow-sm sm:p-10"
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
              <span className="inline-block rounded-full bg-aqua/15 px-3 py-1 text-xs font-medium text-aqua">Available Soon</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">Pixel Tracker</h3>
              <p className="mt-2 text-sm text-muted-foreground">Connect Facebook, Google, TikTok &amp; more pixels from one simple dashboard.</p>
              <Link href="/pixel-tracker" className="mt-4 inline-block text-sm font-medium text-aqua hover:underline">Learn More →</Link>
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
