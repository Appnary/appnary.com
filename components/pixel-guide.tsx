import Link from "next/link";
import { ChevronDown } from "lucide-react";

type GuideStep = { title: string; body: string };
type GuideFaq = { q: string; a: string };

interface PixelGuideProps {
  slug: string;
  platformName: string;
  badge?: string;
  h1: string;
  intro: string;
  steps: GuideStep[];
  faqs: GuideFaq[];
}

export function PixelGuide({
  slug,
  platformName,
  badge = "Setup Guide",
  h1,
  intro,
  steps,
  faqs,
}: PixelGuideProps) {
  const baseUrl = "https://appnary.com";
  const pageUrl = `${baseUrl}/pixel-tracker/${slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Pixel Tracker", item: `${baseUrl}/pixel-tracker` },
      { "@type": "ListItem", position: 3, name: platformName, item: pageUrl },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: h1,
    description: intro,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.body,
    })),
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-3xl px-6 pt-6">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/pixel-tracker" className="hover:text-foreground hover:underline">
              Pixel Tracker
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            {platformName}
          </li>
        </ol>
      </nav>

      <article className="mx-auto max-w-3xl px-6 pt-8 pb-24 sm:pb-32">
        <header className="pb-12 text-center sm:pb-16">
          <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
            {badge}
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {h1}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground-strong">{intro}</p>
        </header>

        <section aria-labelledby="steps-heading" className="pb-16 sm:pb-20">
          <h2
            id="steps-heading"
            className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Setup steps
          </h2>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-xl border border-border-themed bg-surface p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua/15 text-sm font-semibold text-foreground/80">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="faq-heading" className="pb-16 sm:pb-20">
          <h2
            id="faq-heading"
            className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
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

        <aside aria-labelledby="cta-heading" className="rounded-2xl border border-aqua/30 bg-aqua/5 p-6 text-center sm:p-8">
          <p id="cta-heading" className="text-base font-semibold text-foreground">
            Pixel Tracker is in development
          </p>
          <p className="mt-1 text-sm text-muted-foreground-strong">
            Join the waitlist for early access when it launches on the Shopify App Store.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center rounded-lg bg-aqua px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-aqua/90"
            >
              Join the waitlist
            </Link>
            <Link
              href="/pixel-tracker"
              className="inline-flex items-center justify-center rounded-lg border border-border-themed bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
            >
              See Pixel Tracker
            </Link>
          </div>
        </aside>
      </article>
    </>
  );
}
