import type { Metadata } from "next";
import Link from "next/link";
import { Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Tools for Shopify Merchants | Appnary",
  description:
    "Free calculators and tools for Shopify merchants, starting with a pixel tracking cost and coverage calculator. No signup required.",
  openGraph: {
    title: "Free Tools for Shopify Merchants",
    description:
      "Free calculators and tools for Shopify merchants. No signup required.",
    url: "https://appnary.com/tools",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const tools = [
  {
    title: "Pixel Tracking Cost & Coverage Calculator",
    description:
      "Estimate your recommended plan, tracking coverage score, and conversions missed from browser-only pixels.",
    href: "/tools/pixel-tracking-calculator",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://appnary.com/" },
    { "@type": "ListItem", position: 2, name: "Tools", item: "https://appnary.com/tools" },
  ],
};

export default function ToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mx-auto max-w-4xl px-6 pt-6">
        <ol className="flex items-center gap-2 text-xs text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            Tools
          </li>
        </ol>
      </nav>

      <section className="mx-auto max-w-3xl px-6 pt-10 pb-12 text-center sm:pt-14 sm:pb-16">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Free Tools for{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            Shopify Merchants
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">
          Practical calculators and checkers, free to use, no signup
          required.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 sm:pb-32">
        <div className="grid gap-6 sm:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="rounded-xl border border-border-themed bg-surface p-6 text-left transition-shadow hover:shadow-card hover:border-border-themed-strong"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface border border-border-themed shadow-sm">
                <Calculator className="h-6 w-6 text-aqua" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                {tool.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {tool.description}
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-aqua hover:underline">
                Try it →
              </span>
            </Link>
          ))}

          <div className="rounded-xl border border-dashed border-border-themed bg-surface p-6 text-left">
            <p className="text-sm font-medium text-foreground">
              More free tools are on the way
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              We&apos;re building more calculators and checkers for Shopify
              merchants. Check back soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
