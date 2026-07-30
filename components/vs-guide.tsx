import Link from "next/link";
import { Check, ChevronDown, Minus, X } from "lucide-react";

type Cell = boolean | "varies" | string;

interface FeatureRow {
  feature: string;
  pixelTracker: Cell;
  competitor: Cell;
}

interface PricingRow {
  plan: string;
  pixelTracker: string;
  competitor: string;
}

interface VsFaq {
  q: string;
  a: string;
}

interface FeatureExplainer {
  title: string;
  body: string;
}

interface VsGuideProps {
  slug: string;
  competitorName: string;
  competitorBlurb: string;
  competitorPricing: string;
  competitorBestFor: string;
  competitorHref?: string;
  positioning: string;
  overview: string[];
  featureRows: FeatureRow[];
  featureBreakdown: FeatureExplainer[];
  pricingRows: PricingRow[];
  pricingNarrative: string[];
  pixelTrackerPros: string[];
  pixelTrackerCons: string[];
  competitorPros: string[];
  competitorCons: string[];
  chooseWhenPixelTracker: string[];
  chooseWhenCompetitor: string[];
  verdict: string[];
  faqs: VsFaq[];
}

function CellRenderer({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <Check className="mx-auto h-5 w-5 text-aqua" strokeWidth={2.5} aria-label="Yes" />
    );
  }
  if (value === false) {
    return (
      <X
        className="mx-auto h-5 w-5 text-muted-foreground-faint"
        strokeWidth={2.5}
        aria-label="No"
      />
    );
  }
  if (value === "varies") {
    return (
      <Minus
        className="mx-auto h-5 w-5 text-muted-foreground"
        strokeWidth={2.5}
        aria-label="Varies"
      />
    );
  }
  return (
    <span className="text-xs font-medium text-muted-foreground-strong">{value}</span>
  );
}

export function VsGuide({
  slug,
  competitorName,
  competitorBlurb,
  competitorPricing,
  competitorBestFor,
  competitorHref,
  positioning,
  overview,
  featureRows,
  featureBreakdown,
  pricingRows,
  pricingNarrative,
  pixelTrackerPros,
  pixelTrackerCons,
  competitorPros,
  competitorCons,
  chooseWhenPixelTracker,
  chooseWhenCompetitor,
  verdict,
  faqs,
}: VsGuideProps) {
  const baseUrl = "https://appnary.com";
  const pageUrl = `${baseUrl}/vs/${slug}`;
  const title = `Pixel Tracker vs ${competitorName}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Compare", item: `${baseUrl}/compare` },
      { "@type": "ListItem", position: 3, name: title, item: pageUrl },
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
      { "@type": "Offer", name: "Starter", price: "7.00", priceCurrency: "USD", billingIncrement: "P1M" },
      { "@type": "Offer", name: "Growth", price: "15.00", priceCurrency: "USD", billingIncrement: "P1M" },
      { "@type": "Offer", name: "Pro", price: "29.00", priceCurrency: "USD", billingIncrement: "P1M" },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
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
            {title}
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 pt-8 pb-12 text-center sm:pt-12 sm:pb-16">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          Comparison
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Pixel Tracker vs{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            {competitorName}
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">{positioning}</p>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-3xl px-6 pb-12">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Overview
        </h2>
        <div className="space-y-4 text-base text-muted-foreground-strong leading-relaxed">
          {overview.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* At-a-glance cards */}
      <section className="mx-auto max-w-4xl px-6 pb-12">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-aqua/40 bg-aqua/5 p-5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-base font-semibold text-foreground">Pixel Tracker</h2>
              <span className="rounded-full bg-aqua/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground/80">
                Us
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Multi-platform tracking pixel connector for Shopify, from Appnary.
            </p>
            <p className="mt-3 text-sm font-semibold text-foreground">Free – $29/mo</p>
            <Link
              href="/pixel-tracker"
              className="mt-3 inline-block text-xs font-medium text-aqua hover:underline"
            >
              See Pixel Tracker →
            </Link>
          </div>
          <div className="rounded-xl border border-border-themed bg-surface p-5">
            <h2 className="text-base font-semibold text-foreground">{competitorName}</h2>
            <p className="mt-1 text-xs text-muted-foreground">{competitorBlurb}</p>
            <p className="mt-3 text-sm font-semibold text-foreground">{competitorPricing}</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Best for: {competitorBestFor}
            </p>
            {competitorHref && (
              <a
                href={competitorHref}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="mt-3 inline-block text-xs font-medium text-muted-foreground-strong hover:underline"
              >
                View on Shopify App Store →
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Feature comparison
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-border-themed bg-surface shadow-sm">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead className="bg-section">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Feature
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-foreground">
                  Pixel Tracker
                </th>
                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {competitorName}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-themed">
              {featureRows.map((row) => (
                <tr key={row.feature}>
                  <td className="px-5 py-3 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-5 py-3 text-center">
                    <CellRenderer value={row.pixelTracker} />
                  </td>
                  <td className="px-5 py-3 text-center">
                    <CellRenderer value={row.competitor} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Feature-by-feature breakdown */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Feature-by-feature breakdown
        </h2>
        <div className="space-y-6">
          {featureBreakdown.map((item) => (
            <div key={item.title}>
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground-strong leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing comparison table */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Pricing comparison
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
                  {competitorName}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-themed">
              {pricingRows.map((row) => (
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
        <div className="mt-6 space-y-4 text-base text-muted-foreground-strong leading-relaxed">
          {pricingNarrative.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Pros / cons */}
      <section className="mx-auto max-w-4xl px-6 pb-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Pros &amp; cons
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border-themed bg-surface p-6">
            <h3 className="text-sm font-semibold text-foreground">Pixel Tracker</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {pixelTrackerPros.map((pro) => (
                <li key={pro} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-aqua" strokeWidth={2.5} />
                  <span>{pro}</span>
                </li>
              ))}
              {pixelTrackerCons.map((con) => (
                <li key={con} className="flex gap-2">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground-faint" strokeWidth={2.5} />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-border-themed bg-surface p-6">
            <h3 className="text-sm font-semibold text-foreground">{competitorName}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {competitorPros.map((pro) => (
                <li key={pro} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-aqua" strokeWidth={2.5} />
                  <span>{pro}</span>
                </li>
              ))}
              {competitorCons.map((con) => (
                <li key={con} className="flex gap-2">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground-faint" strokeWidth={2.5} />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Which one should you use?
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Choose Pixel Tracker if...
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {chooseWhenPixelTracker.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-aqua" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Choose {competitorName} if...
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {chooseWhenCompetitor.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-aqua" strokeWidth={2.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 space-y-4 text-base text-muted-foreground-strong leading-relaxed">
          {verdict.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
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
