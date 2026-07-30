import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { PlatformActionPage } from "@/lib/platform-actions";
import WaitlistForm from "@/components/waitlist-form";
import { InlineText } from "@/components/inline-text";
import { stripInline } from "@/lib/text";

export function PlatformActionGuide({ page }: { page: PlatformActionPage }) {
  const baseUrl = "https://appnary.com";
  const pageUrl = `${baseUrl}/pixel-tracker/${page.platformSlug}/${page.actionSlug}`;
  const platformUrl = `${baseUrl}/pixel-tracker/${page.platformSlug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pixel Tracker",
        item: `${baseUrl}/pixel-tracker`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.platformName,
        item: platformUrl,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: page.h1,
        item: pageUrl,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: stripInline(faq.a) },
    })),
  };

  const howToJsonLd =
    page.steps.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "HowTo",
          name: page.h1,
          description: stripInline(page.intro[0] ?? page.description),
          step: page.steps.map((step, i) => ({
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
            <Link
              href="/pixel-tracker"
              className="hover:text-foreground hover:underline"
            >
              Pixel Tracker
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={`/pixel-tracker/${page.platformSlug}`}
              className="hover:text-foreground hover:underline"
            >
              {page.platformName}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            {page.badge}
          </li>
        </ol>
      </nav>

      <article className="mx-auto max-w-3xl px-6 pt-8 pb-24 sm:pb-32">
        <header className="pb-10 text-center sm:pb-12">
          <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
            {page.badge}
          </span>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {page.h1}
          </h1>
          <div className="mx-auto mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground-strong">
            {page.intro.map((p, i) => (
              <p key={i}>
                <InlineText text={p} />
              </p>
            ))}
          </div>
        </header>

        {page.symptoms.length > 0 && (
          <section aria-labelledby="symptoms-heading" className="pb-10 sm:pb-12">
            <h2
              id="symptoms-heading"
              className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Common symptoms
            </h2>
            <ul className="space-y-3 rounded-2xl border border-border-themed bg-section p-6">
              {page.symptoms.map((symptom) => (
                <li
                  key={symptom}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground-strong"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua"
                    aria-hidden="true"
                  />
                  <span>{symptom}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {page.sections.map((section) => (
          <section key={section.heading} className="pb-10 sm:pb-12">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {section.heading}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground-strong">
              {section.paragraphs.map((p, i) => (
                <p key={i}>
                  <InlineText text={p} />
                </p>
              ))}
            </div>
          </section>
        ))}

        {page.steps.length > 0 && (
          <section aria-labelledby="steps-heading" className="pb-10 sm:pb-12">
            <h2
              id="steps-heading"
              className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Step-by-step checklist
            </h2>
            <ol className="space-y-5">
              {page.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-xl border border-border-themed bg-surface p-6 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua/15 text-sm font-semibold text-foreground/80">
                      {i + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        )}

        <section aria-labelledby="faq-heading" className="pb-10 sm:pb-12">
          <h2
            id="faq-heading"
            className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Frequently asked questions
          </h2>
          <div className="divide-y divide-border-themed rounded-2xl border border-border-themed bg-surface">
            {page.faqs.map((faq) => (
              <details key={faq.q} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-foreground">
                  {faq.q}
                  <ChevronDown
                    className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground-strong">
                  <InlineText text={faq.a} />
                </p>
              </details>
            ))}
          </div>
        </section>

        {page.related.length > 0 && (
          <section aria-labelledby="related-heading" className="pb-10 sm:pb-12">
            <h2
              id="related-heading"
              className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Related reading
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {page.related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex h-full rounded-xl border border-border-themed bg-surface px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-aqua/40 hover:bg-section"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <aside
          id="waitlist"
          aria-labelledby="cta-heading"
          className="rounded-2xl border border-border-themed bg-section p-6 sm:p-8"
        >
          <h2
            id="cta-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Ready for simpler multi-platform tracking?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground-strong">
            Join the waitlist for early access. Available soon on the Shopify App
            Store.
          </p>
          <div className="mt-5">
            <WaitlistForm />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Or{" "}
            <Link
              href="/pixel-tracker"
              className="font-medium text-aqua hover:underline"
            >
              learn more about Pixel Tracker
            </Link>
            {" · "}
            <Link
              href="/tools/pixel-tracking-calculator"
              className="font-medium text-aqua hover:underline"
            >
              free tracking calculator
            </Link>
          </p>
        </aside>
      </article>
    </>
  );
}
