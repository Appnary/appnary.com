import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { InlineText } from "@/components/inline-text";
import { stripInline } from "@/lib/text";
import type { VsComparisonPage } from "@/lib/vs-comparisons";

export function VsComparisonGuide({ page }: { page: VsComparisonPage }) {
  const baseUrl = "https://appnary.com";
  const pageUrl = `${baseUrl}/vs/${page.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Compare", item: `${baseUrl}/compare` },
      { "@type": "ListItem", position: 3, name: page.h1, item: pageUrl },
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

  const comparisonJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Pixel Tracker vs ${page.competitor}`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "SoftwareApplication",
          name: "Pixel Tracker",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Shopify",
          offers: [
            { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
            { "@type": "Offer", name: "Starter", price: "7.00", priceCurrency: "USD", billingIncrement: "P1M" },
            { "@type": "Offer", name: "Growth", price: "15.00", priceCurrency: "USD", billingIncrement: "P1M" },
            { "@type": "Offer", name: "Pro", price: "29.00", priceCurrency: "USD", billingIncrement: "P1M" },
          ],
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "SoftwareApplication",
          name: page.competitor,
          applicationCategory: page.competitorCategory,
          offers: { "@type": "Offer", price: stripInline(page.competitorPrice) },
        },
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonJsonLd) }}
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
              Compare
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            {page.competitor}
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 pt-8 pb-12 text-center sm:pt-12 sm:pb-16">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          Comparison
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {page.h1}
        </h1>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground-strong">
          {page.intro.map((p, i) => (
            <p key={i}>
              <InlineText text={p} />
            </p>
          ))}
        </div>
      </section>

      {/* Quick comparison table */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Quick comparison
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-border-themed bg-surface shadow-sm">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-section">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  &nbsp;
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-foreground">
                  Pixel Tracker
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {page.competitor}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-themed">
              {page.quickComparison.map((row) => (
                <tr key={row.feature}>
                  <td className="px-5 py-3 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-5 py-3 text-center text-sm text-muted-foreground-strong">
                    {row.pixelTracker}
                  </td>
                  <td className="px-5 py-3 text-center text-sm text-muted-foreground-strong">
                    {row.competitor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Feature matrix */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Feature matrix
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-border-themed bg-surface shadow-sm">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="bg-section">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Feature
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-foreground">
                  Pixel Tracker
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {page.competitor}
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-themed">
              {page.featureMatrix.map((row) => (
                <tr key={row.feature}>
                  <td className="px-5 py-3 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-5 py-3 text-center text-sm text-muted-foreground-strong">
                    {row.pixelTracker}
                  </td>
                  <td className="px-5 py-3 text-center text-sm text-muted-foreground-strong">
                    {row.competitor}
                  </td>
                  <td className="px-5 py-3 text-xs text-muted-foreground">
                    {row.notes ?? ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pricing breakdown */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Pricing breakdown
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-border-themed bg-surface shadow-sm">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-section">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Plan
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-foreground">
                  Pixel Tracker
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {page.competitor}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-themed">
              {page.pricingBreakdown.map((row) => (
                <tr key={row.plan}>
                  <td className="px-5 py-3 text-sm font-medium text-foreground">
                    {row.plan}
                  </td>
                  <td className="px-5 py-3 text-center text-sm text-muted-foreground-strong">
                    {row.pixelTracker}
                  </td>
                  <td className="px-5 py-3 text-center text-sm text-muted-foreground-strong">
                    {row.competitor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Who should choose which */}
      <section className="mx-auto max-w-4xl px-6 pb-16 sm:pb-20">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Who should pick which
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-aqua/40 bg-aqua/5 p-6">
            <h3 className="text-sm font-semibold text-foreground">
              Choose Pixel Tracker if...
            </h3>
            <div className="mt-3 space-y-3 text-sm text-muted-foreground-strong leading-relaxed">
              {page.whoShouldChoose.choosePT.map((p, i) => (
                <p key={i}>
                  <InlineText text={p} />
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border-themed bg-surface p-6">
            <h3 className="text-sm font-semibold text-foreground">
              Choose {page.competitor} if...
            </h3>
            <div className="mt-3 space-y-3 text-sm text-muted-foreground-strong leading-relaxed">
              {page.whoShouldChoose.chooseCompetitor.map((p, i) => (
                <p key={i}>
                  <InlineText text={p} />
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
        <h2
          id="faq-heading"
          className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {page.faqs.map((faq) => (
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

      {/* Related links */}
      {page.relatedLinks.length > 0 && (
        <section aria-labelledby="related-heading" className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
          <h2
            id="related-heading"
            className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Related reading
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {page.relatedLinks.map((link) => (
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

      {/* CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <div className="rounded-2xl border border-aqua/30 bg-aqua/5 p-6 text-center sm:p-8">
          <p className="text-base font-semibold text-foreground">
            Pixel Tracker is in development
          </p>
          <p className="mt-1 text-sm text-muted-foreground-strong">
            Join the waitlist for early access. Available soon on the Shopify App Store.
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
