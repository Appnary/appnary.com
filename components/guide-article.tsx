import Link from "next/link";
import { ChevronDown, ImageIcon } from "lucide-react";
import { InlineText } from "@/components/inline-text";
import { stripInline } from "@/lib/text";

type GuideSection = { heading: string; paragraphs: string[] };
type GuideStep = { title: string; body: string; screenshotCaption?: string };
type GuideFaq = { q: string; a: string };
type RelatedLink = { label: string; href: string };

interface GuideArticleProps {
  slug: string;
  badge?: string;
  h1: string;
  tldr: string;
  intro: string[];
  sections?: GuideSection[];
  stepsHeading?: string;
  steps?: GuideStep[];
  closingSections?: GuideSection[];
  faqs: GuideFaq[];
  relatedLinks: RelatedLink[];
}

function ProseSection({ heading, paragraphs }: GuideSection) {
  return (
    <div className="pb-10 sm:pb-12">
      <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {heading}
      </h2>
      <div className="space-y-4 text-base text-muted-foreground-strong leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>
            <InlineText text={p} />
          </p>
        ))}
      </div>
    </div>
  );
}

export function GuideArticle({
  slug,
  badge = "Guide",
  h1,
  tldr,
  intro,
  sections = [],
  stepsHeading = "Step-by-step instructions",
  steps = [],
  closingSections = [],
  faqs,
  relatedLinks,
}: GuideArticleProps) {
  const baseUrl = "https://appnary.com";
  const pageUrl = `${baseUrl}/pixel-tracker/guides/${slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Pixel Tracker", item: `${baseUrl}/pixel-tracker` },
      { "@type": "ListItem", position: 3, name: "Guides", item: `${baseUrl}/pixel-tracker/guides` },
      { "@type": "ListItem", position: 4, name: h1, item: pageUrl },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: stripInline(faq.a) },
    })),
  };

  const howToJsonLd =
    steps.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: h1,
          description: stripInline(tldr),
          step: steps.map((step, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: step.title,
            text: stripInline(step.body),
          })),
        }
      : null;

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
      {howToJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
        />
      )}

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
          <li>
            <Link href="/pixel-tracker/guides" className="hover:text-foreground hover:underline">
              Guides
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            {h1}
          </li>
        </ol>
      </nav>

      <article className="mx-auto max-w-3xl px-6 pt-8 pb-24 sm:pb-32">
        <header className="pb-8 text-center sm:pb-10">
          <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
            {badge}
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {h1}
          </h1>
        </header>

        {/* TL;DR */}
        <section className="pb-10 sm:pb-12">
          <div className="rounded-2xl border border-border-themed bg-section p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              TL;DR
            </p>
            <p className="mt-2 text-base font-medium text-foreground-strong leading-relaxed">
              <InlineText text={tldr} />
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="pb-10 sm:pb-12">
          <div className="space-y-4 text-base text-muted-foreground-strong leading-relaxed">
            {intro.map((p, i) => (
              <p key={i}>
                <InlineText text={p} />
              </p>
            ))}
          </div>
        </section>

        {sections.map((section) => (
          <ProseSection key={section.heading} {...section} />
        ))}

        {steps.length > 0 && (
          <section aria-labelledby="steps-heading" className="pb-10 sm:pb-12">
            <h2
              id="steps-heading"
              className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              {stepsHeading}
            </h2>
            <ol className="space-y-5">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-xl border border-border-themed bg-surface p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua/15 text-sm font-semibold text-foreground/80">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        <InlineText text={step.body} />
                      </p>
                      {step.screenshotCaption && (
                        <div className="mt-4 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border-themed bg-section px-4 py-8 text-center">
                          <ImageIcon className="h-5 w-5 text-muted-foreground-faint" aria-hidden="true" />
                          <p className="text-xs text-muted-foreground-faint">
                            Screenshot: {step.screenshotCaption}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        {closingSections.map((section) => (
          <ProseSection key={section.heading} {...section} />
        ))}

        {/* FAQ */}
        <section aria-labelledby="faq-heading" className="pb-10 sm:pb-12">
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
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 shrink-0" />
                </summary>
                <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  <InlineText text={faq.a} />
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related resources */}
        {relatedLinks.length > 0 && (
          <section aria-labelledby="related-heading" className="pb-10 sm:pb-12">
            <h2
              id="related-heading"
              className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Related resources
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua"
                  >
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* CTA */}
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
