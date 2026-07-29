import Link from "next/link";
import { Check, ChevronDown, X } from "lucide-react";

type Cell = boolean | "varies" | string;

export interface RoundupTool {
  key: string;
  rank: number;
  name: string;
  isUs?: boolean;
  blurb: string;
  pricing: string;
  rating?: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  href: string;
  external?: boolean;
}

interface ComparisonRow {
  feature: string;
  values: Record<string, Cell>;
}

interface AnalysisSection {
  title: string;
  body: string;
}

interface RoundupFaq {
  q: string;
  a: string;
}

interface CalloutBox {
  heading: string;
  body: string[];
  ctaHref: string;
  ctaLabel: string;
}

interface AlternativesRoundupProps {
  slug: string;
  categoryTitle: string;
  badge?: string;
  h1: string;
  tldr: string;
  intro: string[];
  tools: RoundupTool[];
  comparisonRows: ComparisonRow[];
  analysis: AnalysisSection[];
  buyingGuide: string[];
  calloutBox?: CalloutBox;
  faqs: RoundupFaq[];
}

function CellRenderer({ value }: { value: Cell }) {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-aqua" strokeWidth={2.5} aria-label="Yes" />;
  }
  if (value === false) {
    return (
      <X className="mx-auto h-5 w-5 text-muted-foreground-faint" strokeWidth={2.5} aria-label="No" />
    );
  }
  return <span className="text-xs font-medium text-muted-foreground-strong">{value}</span>;
}

export function AlternativesRoundup({
  slug,
  categoryTitle,
  badge = "Best-of Roundup",
  h1,
  tldr,
  intro,
  tools,
  comparisonRows,
  analysis,
  buyingGuide,
  calloutBox,
  faqs,
}: AlternativesRoundupProps) {
  const baseUrl = "https://appnary.com";
  const pageUrl = `${baseUrl}/alternatives/${slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Alternatives", item: `${baseUrl}/compare` },
      { "@type": "ListItem", position: 3, name: categoryTitle, item: pageUrl },
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

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: categoryTitle,
    itemListElement: tools.map((tool) => ({
      "@type": "ListItem",
      position: tool.rank,
      item: {
        "@type": "SoftwareApplication",
        name: tool.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Shopify",
        description: tool.blurb,
        url: tool.external ? tool.href : `${baseUrl}${tool.href}`,
      },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
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
            <Link href="/compare" className="hover:text-foreground hover:underline">
              Alternatives
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            {categoryTitle}
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 pt-8 pb-10 text-center sm:pt-12 sm:pb-14">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          {badge}
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {h1}
        </h1>
      </section>

      {/* TL;DR */}
      <section className="mx-auto max-w-3xl px-6 pb-10">
        <div className="rounded-2xl border border-border-themed bg-section p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            TL;DR
          </p>
          <p className="mt-2 text-base font-medium text-foreground-strong leading-relaxed">
            {tldr}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <div className="space-y-4 text-base text-muted-foreground-strong leading-relaxed">
          {intro.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Ranked list */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          The ranked list
        </h2>
        <div className="space-y-5">
          {tools.map((tool) => (
            <div
              key={tool.key}
              className={`rounded-2xl border p-6 shadow-sm ${
                tool.isUs ? "border-aqua/40 bg-aqua/5" : "border-border-themed bg-surface"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-section text-xs font-bold text-foreground">
                    {tool.rank}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
                      {tool.isUs && (
                        <span className="rounded-full bg-aqua/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/80">
                          Us
                        </span>
                      )}
                      {tool.rating && (
                        <span className="text-xs font-medium text-muted-foreground">
                          {tool.rating}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground-strong">{tool.blurb}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">{tool.pricing}</p>
                  <a
                    href={tool.href}
                    target={tool.external ? "_blank" : undefined}
                    rel={tool.external ? "nofollow noopener noreferrer" : undefined}
                    className="mt-1 inline-block text-xs font-medium text-aqua hover:underline"
                  >
                    {tool.isUs ? "See Pixel Tracker →" : "View on Shopify App Store →"}
                  </a>
                </div>
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Best for
              </p>
              <p className="mt-1 text-sm text-muted-foreground-strong">{tool.bestFor}</p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {tool.pros.map((pro) => (
                    <li key={pro} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-aqua" strokeWidth={2.5} />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {tool.cons.map((con) => (
                    <li key={con} className="flex gap-2">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground-faint" strokeWidth={2.5} />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Side-by-side comparison
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-border-themed bg-surface shadow-sm">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-section">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Feature
                </th>
                {tools.map((tool) => (
                  <th
                    key={tool.key}
                    className={`px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider ${
                      tool.isUs ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {tool.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border-themed">
              {comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td className="px-5 py-3 text-sm font-medium text-foreground">{row.feature}</td>
                  {tools.map((tool) => (
                    <td key={tool.key} className="px-5 py-3 text-center">
                      <CellRenderer value={row.values[tool.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed analysis */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          How these tools actually differ
        </h2>
        <div className="space-y-6">
          {analysis.map((item) => (
            <div key={item.title}>
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground-strong leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Buying guide */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          How to choose
        </h2>
        <div className="space-y-4 text-base text-muted-foreground-strong leading-relaxed">
          {buyingGuide.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Optional Pixel Tracker callout for reframed categories */}
      {calloutBox && (
        <section className="mx-auto max-w-3xl px-6 pb-16">
          <div className="rounded-2xl border border-aqua/30 bg-aqua/5 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground">{calloutBox.heading}</h2>
            <div className="mt-3 space-y-3 text-sm text-muted-foreground-strong leading-relaxed">
              {calloutBox.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <Link
              href={calloutBox.ctaHref}
              className="mt-4 inline-block text-sm font-medium text-aqua hover:underline"
            >
              {calloutBox.ctaLabel} →
            </Link>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
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

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <div className="rounded-2xl border border-aqua/30 bg-aqua/5 p-6 text-center sm:p-8">
          <p className="text-base font-semibold text-foreground">
            Pixel Tracker is in development
          </p>
          <p className="mt-1 text-sm text-muted-foreground-strong">
            Join the waitlist for early access — available soon on the Shopify App Store.
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
        </div>
      </section>
    </>
  );
}
