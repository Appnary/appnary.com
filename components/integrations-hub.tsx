import Link from "next/link";
import { ArrowRight } from "lucide-react";

const baseUrl = "https://appnary.com";

const integrations = [
  {
    name: "Facebook / Meta Pixel",
    slug: "meta-pixel",
    blurb: "Conversions API plus browser pixel for Facebook and Instagram campaigns.",
  },
  {
    name: "Google Ads",
    slug: "google-ads",
    blurb: "Conversion tag for Search, Shopping, Display, and YouTube campaigns.",
  },
  {
    name: "TikTok Pixel",
    slug: "tiktok-pixel",
    blurb: "Events API plus browser pixel for TikTok ad campaigns.",
  },
  {
    name: "Snapchat Pixel",
    slug: "snapchat-pixel",
    blurb: "Browser pixel for Snapchat ad campaigns and audience building.",
  },
  {
    name: "Pinterest Tag",
    slug: "pinterest-pixel",
    blurb: "Browser tag for Pinterest ad campaigns and catalog tracking.",
  },
  {
    name: "LinkedIn Insight Tag",
    slug: "linkedin-pixel",
    blurb: "Browser tag for LinkedIn ad campaigns and B2B audience building.",
  },
  {
    name: "X (Twitter) Pixel",
    slug: "twitter-pixel",
    blurb: "Browser pixel for X (Twitter) ad campaigns and conversion tracking.",
  },
];

const steps = [
  {
    title: "Install Pixel Tracker",
    description:
      "Add Pixel Tracker to your Shopify store from your admin dashboard. No theme code to touch.",
  },
  {
    title: "Paste in your pixel IDs",
    description:
      "Add the pixel or tag ID for each ad platform you use. Connect one platform or all seven.",
  },
  {
    title: "Done",
    description:
      "Pixel Tracker injects every pixel automatically via Shopify ScriptTags and starts sending events.",
  },
];

const faqs = [
  {
    q: "Do I need a separate app for each ad platform?",
    a: "No. Pixel Tracker connects Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, LinkedIn, and X (Twitter) from a single dashboard, so one installation covers every platform you advertise on.",
  },
  {
    q: "Can I use Pixel Tracker alongside Shopify's native Facebook & Instagram channel?",
    a: "Yes, though most merchants pick one or the other for Meta tracking to avoid duplicate events. Pixel Tracker's advantage is covering six other platforms from the same dashboard, not just Meta.",
  },
  {
    q: "Which platforms support server-side tracking?",
    a: "Facebook Conversions API and TikTok Events API today. Google Ads, Snapchat, Pinterest, LinkedIn, and X run as standard browser pixels through Pixel Tracker, with no server-side option yet.",
  },
  {
    q: "What happens if I stop using a platform later?",
    a: "Remove the pixel ID from your Pixel Tracker dashboard and the ScriptTag for that platform is removed. Your other integrations keep running normally.",
  },
  {
    q: "Is there a limit to how many platforms I can connect?",
    a: "The limit is on total pixels, not platforms. Free includes 1 pixel, Starter ($7/mo) includes 3, Growth ($15/mo) includes 10, and Pro ($29/mo) includes unlimited pixels across any combination of platforms.",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Integrations", item: `${baseUrl}/integrations` },
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

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Shopify Pixel Integrations",
  description:
    "Tracking pixel integrations available in Pixel Tracker, one Shopify dashboard connecting seven ad platforms.",
  url: `${baseUrl}/integrations`,
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: integrations.length,
    itemListElement: integrations.map((integration, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: integration.name,
        url: `${baseUrl}/pixel-tracker/${integration.slug}`,
        description: integration.blurb,
      },
    })),
  },
};

export function IntegrationsHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-3xl px-6 pt-6">
        <ol className="flex items-center gap-2 text-xs text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            Integrations
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-14 pb-12 text-center sm:pt-20 sm:pb-16">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          Integrations
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Shopify Pixel{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            Integrations
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">
          Most Shopify stores advertise on more than one platform. If your
          tracking only covers one, every other channel is a guess. Pixel
          Tracker connects tracking pixels for seven ad platforms from a
          single dashboard, so every dollar of ad spend gets measured the
          same way.
        </p>
      </section>

      {/* Directory table */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Supported platforms
        </h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-border-themed bg-surface shadow-sm">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-section">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Platform
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  What it covers
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Guide
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-themed">
              {integrations.map((integration) => (
                <tr key={integration.slug}>
                  <td className="px-5 py-4 text-sm font-medium text-foreground">
                    {integration.name}
                  </td>
                  <td className="px-5 py-4 text-sm text-muted-foreground">
                    {integration.blurb}
                  </td>
                  <td className="px-5 py-4">
                    <Link
                      href={`/pixel-tracker/${integration.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-aqua hover:underline"
                    >
                      View guide <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          How it works
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-xl border border-border-themed bg-surface p-6"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-aqua/15 text-sm font-bold text-aqua">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-platform + performance sections */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Can I connect multiple platforms at once?
            </h2>
            <p className="mt-3 text-base text-muted-foreground-strong leading-relaxed">
              Yes. Pixel Tracker isn&apos;t built around one platform, it&apos;s
              built to run all of them from the same dashboard. Add Meta,
              Google Ads, TikTok, Snapchat, Pinterest, LinkedIn, and X
              together on the same store, and manage every pixel ID in one
              place instead of juggling separate apps or theme edits for
              each platform.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">
              Does adding more pixels slow down my store?
            </h2>
            <p className="mt-3 text-base text-muted-foreground-strong leading-relaxed">
              No. Pixel Tracker injects every pixel through Shopify&apos;s
              native ScriptTag API, which loads scripts asynchronously
              instead of blocking page rendering. Adding a second, third, or
              seventh platform doesn&apos;t add theme code, and it
              doesn&apos;t slow down your storefront or checkout.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="rounded-2xl border border-aqua/30 bg-aqua/5 p-6 text-center sm:p-8">
          <p className="text-base font-semibold text-foreground">
            Pixel Tracker is in development
          </p>
          <p className="mt-1 text-sm text-muted-foreground-strong">
            Join the waitlist for early access, available soon on the
            Shopify App Store.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center rounded-lg bg-aqua px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-aqua/90"
            >
              Join the Waitlist
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

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <h2 id="faq-heading" className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
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
