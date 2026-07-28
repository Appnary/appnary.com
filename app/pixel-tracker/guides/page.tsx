import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Tracking Guides | Pixel Tracker | Appnary",
  description:
    "In-depth guides on pixel setup, server-side tracking, ROAS calculation, and multi-channel attribution for Shopify merchants.",
  openGraph: {
    title: "Shopify Tracking Guides | Pixel Tracker | Appnary",
    description:
      "In-depth guides on pixel setup, server-side tracking, ROAS calculation, and multi-channel attribution for Shopify merchants.",
    url: "https://appnary.com/pixel-tracker/guides",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const guides = [
  {
    slug: "facebook-pixel-setup",
    title: "How to Set Up the Facebook Pixel on Shopify",
    description:
      "A complete walkthrough of connecting a Meta Pixel to your Shopify store, including Conversions API for server-side accuracy.",
  },
  {
    slug: "google-ads-conversion-tracking",
    title: "How to Track Google Ads Conversions on Shopify",
    description:
      "Set up Google Ads conversion tracking on Shopify the right way, and understand how it differs from Google Analytics.",
  },
  {
    slug: "tiktok-pixel-setup",
    title: "TikTok Pixel Setup Guide for Shopify",
    description:
      "Connect the TikTok Pixel to your Shopify store and enable the Events API for more reliable ad campaign data.",
  },
  {
    slug: "server-side-tracking",
    title: "Server-Side Tracking for Shopify Merchants",
    description:
      "What server-side tracking actually is, why browser pixels alone fall short, and how to add CAPI/Events API on Shopify.",
  },
  {
    slug: "roas-calculation",
    title: "How to Calculate ROAS on Shopify",
    description:
      "The ROAS formula, worked examples, and the tracking mistakes that quietly distort the number for most merchants.",
  },
  {
    slug: "multi-channel-attribution",
    title: "Multi-Channel Ad Attribution for Shopify Stores",
    description:
      "How attribution models work, why single-channel tracking misleads you, and how to set up tracking across every ad platform you run.",
  },
];

const baseUrl = "https://appnary.com";

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
    { "@type": "ListItem", position: 2, name: "Pixel Tracker", item: `${baseUrl}/pixel-tracker` },
    { "@type": "ListItem", position: 3, name: "Guides", item: `${baseUrl}/pixel-tracker/guides` },
  ],
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Shopify Tracking Guides",
  url: `${baseUrl}/pixel-tracker/guides`,
  hasPart: guides.map((g) => ({
    "@type": "Article",
    headline: g.title,
    url: `${baseUrl}/pixel-tracker/guides/${g.slug}`,
  })),
};

export default function GuidesIndexPage() {
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

      <nav aria-label="Breadcrumb" className="mx-auto max-w-4xl px-6 pt-6">
        <ol className="flex items-center gap-2 text-xs text-muted-foreground">
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
            Guides
          </li>
        </ol>
      </nav>

      <section className="mx-auto max-w-4xl px-6 pt-8 pb-12 text-center sm:pt-12 sm:pb-16">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          Guides
        </span>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Shopify tracking guides
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">
          In-depth, step-by-step guides on pixel setup, server-side tracking, and the numbers that actually tell you whether your ads are working.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 sm:pb-32">
        <div className="grid gap-5 sm:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/pixel-tracker/guides/${guide.slug}`}
              className="group flex flex-col rounded-xl border border-border-themed bg-surface p-6 shadow-sm transition-all hover:border-aqua/40 hover:shadow-md"
            >
              <BookOpen className="mb-3 h-5 w-5 text-aqua" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-foreground group-hover:text-aqua transition-colors">
                {guide.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {guide.description}
              </p>
              <span className="mt-4 text-sm font-medium text-aqua group-hover:underline">
                Read the guide →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
