import type { Metadata } from "next";
import { ChevronDown, Shield } from "lucide-react";
import WaitlistForm from "@/components/waitlist-form";
import { apps } from "@/content/apps";
import { formatCount, getWaitlistCounts } from "@/lib/waitlist-counts";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/", {
  description:
    "Appnary is building Vigil, a Shopify security scanner you can also run from an AI agent. Join the waitlist until the app is approved.",
  openGraph: {
    description:
      "Vigil is in development. Join the waitlist and we will invite you after Shopify approves the listing.",
  },
});

const homeFaqs = [
  {
    q: "What is Appnary building now?",
    a: "Vigil, a security scanner for Shopify. It reads the published theme and app embeds, names the file or app behind an external script, and flags leaked keys. Sync and Backup are later apps with their own waitlists.",
  },
  {
    q: "Can I install Vigil?",
    a: "Not yet. Vigil stays on the waitlist until we finish it and Shopify approves the listing. We invite people from that list.",
  },
  {
    q: "What are the other waitlists for?",
    a: "Sync and Backup are future apps. Each has a public signup count. After Vigil ships, we build the future app with more signups. Backup stays last because that category is already crowded.",
  },
  {
    q: "What happened to Pixel Tracker?",
    a: "We stopped it. It was never published. The site now follows Vigil, Sync, and Backup.",
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

export default async function Home() {
  const counts = await getWaitlistCounts();

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
        <div
          aria-hidden="true"
          className="hero-glow pointer-events-none absolute inset-0"
        />

        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 pb-24 text-center sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-themed bg-surface px-4 py-1.5 text-xs font-semibold text-foreground shadow-sm">
            <Shield className="h-3.5 w-3.5 text-aqua" strokeWidth={2.5} />
            Vigil is in development
          </span>

          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-foreground">See what is running</span>
            <span className="mt-2 block bg-gradient-to-r from-accent-foreground to-accent-heading-end bg-clip-text text-transparent">
              on your Shopify store
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground-strong sm:text-xl">
            Vigil names the theme file or app behind each external script, flags leaked keys, and lets an AI agent run the same scan. The waitlist stays open until Shopify approves the app.
          </p>

          <div
            id="waitlist"
            className="mt-12 w-full max-w-lg rounded-2xl border border-border-themed bg-surface p-8 text-left shadow-sm sm:p-10"
          >
            <h2 className="text-xl font-semibold text-foreground">
              Join the Vigil waitlist
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              {formatCount(counts.vigil)} {counts.vigil === 1 ? "person is" : "people are"} waiting. We invite this list after approval.
            </p>
            <WaitlistForm product="vigil" />
          </div>
        </div>
      </section>

      <section id="apps" className="border-t border-border-themed bg-section py-20 transition-colors">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">The apps</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Counts are public.{" "}
              <a href="/interest" className="font-medium text-accent-foreground hover:underline">
                See which waitlist is ahead.
              </a>
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {apps.map((app) => (
              <div
                key={app.slug}
                className="rounded-xl border border-border-themed bg-card p-6 text-left transition-shadow hover:shadow-card hover:border-border-themed-strong"
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    app.status === "in-development"
                      ? "bg-aqua/15 text-accent-foreground"
                      : "bg-muted-themed text-muted-foreground"
                  }`}
                >
                  {app.label}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">{app.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{app.summary}</p>
                <p className="mt-4 text-sm font-medium text-foreground">
                  {formatCount(counts[app.slug])} on the waitlist
                </p>
                <a href={app.href} className="mt-3 inline-block text-sm font-medium text-accent-foreground hover:underline">
                  {app.status === "in-development" ? "Read the details" : "Join this waitlist"} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <h2 id="faq-heading" className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Questions
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
