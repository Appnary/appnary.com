import type { Metadata } from "next";
import { ArrowUpRight, Cloud, Code2, HeartPulse, Plug, ShieldCheck, Wrench } from "lucide-react";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/products", {
  title: "Our products | Appnary",
  description:
    "Explore more from the people behind Appnary: cloud deployment, developer tools, WooCommerce plugins, and engineering insights.",
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Appnary" }],
  },
});

const products = [
  {
    name: "CloudPloy",
    domain: "cloudploy.com",
    category: "Cloud & AI",
    headline: "Deploy from the tools you already use.",
    description:
      "Connect your own cloud to Claude Code, Cursor, or any MCP client and manage deployments from your existing workflow.",
    icon: Cloud,
    color: "bg-[#e0f4f1] text-[#12645b]",
    detail: "Your cloud. Your workflow.",
  },
  {
    name: "SkaleAgents",
    domain: "skaleagents.com",
    category: "Cloud & AI",
    headline: "Get another pair of eyes on your infrastructure.",
    description:
      "Find specialist AI agents for code and infrastructure reviews. Reuse prompts and bring their findings back to your editor through MCP.",
    icon: ShieldCheck,
    color: "bg-[#e9ecfc] text-[#414d8c]",
    detail: "Code reviews to cloud operations",
  },
  {
    name: "Crontinel",
    domain: "crontinel.com",
    category: "Developer tools",
    headline: "Catch the failures an uptime check misses.",
    description:
      "Monitor scheduled jobs, queues, workers, and AI agent runs with open-source SDKs and a hosted dashboard.",
    icon: HeartPulse,
    color: "bg-[#fcebe3] text-[#944422]",
    detail: "Jobs, workers, and agent runs",
  },
  {
    name: "Toolblip",
    domain: "toolblip.com",
    category: "Developer tools",
    headline: "Open a browser and get the small jobs done.",
    description:
      "Format JSON, convert files, and work with text using free browser-based tools. No account needed.",
    icon: Wrench,
    color: "bg-[#e4f0fc] text-[#245e91]",
    detail: "Everyday tools, no signup",
  },
  {
    name: "AmazingPlugins",
    domain: "amazingplugins.com",
    category: "Commerce",
    headline: "Focused plugins for your WooCommerce store.",
    description:
      "Free WordPress and WooCommerce plugins that solve specific store problems, starting with accessibility.",
    icon: Plug,
    color: "bg-[#f0e7f8] text-[#754290]",
    detail: "WordPress & WooCommerce",
  },
  {
    name: "harun.dev",
    domain: "harun.dev",
    category: "More from us",
    headline: "Meet the engineer behind the products.",
    description:
      "Harun R. Rayhan shares notes on software engineering and cloud architecture, alongside his DevOps consulting work.",
    icon: Code2,
    color: "bg-[#edf1de] text-[#53652a]",
    detail: "Engineering, consulting, and writing",
  },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <header className="mb-12 max-w-3xl sm:mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Our products
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-muted-foreground-strong">
          There&apos;s more to our work than Shopify apps.
        </p>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Explore the other tools and projects from the people behind Appnary,
          built at Binary Labs. From cloud deployments to everyday utilities,
          each starts with a problem we want to solve.
        </p>
      </header>

      <section aria-label="Products and projects" className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <article key={product.domain} className="flex flex-col overflow-hidden rounded-2xl border border-border-themed bg-surface">
            <div className={`flex min-h-36 items-center justify-between gap-6 px-6 py-8 sm:px-8 ${product.color}`}>
              <product.icon className="h-14 w-14 shrink-0" strokeWidth={1.5} aria-hidden="true" />
              <p className="max-w-48 text-right text-lg font-semibold leading-snug">
                {product.detail}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <p className="text-sm font-medium text-accent-foreground">{product.category}</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">{product.name}</h2>
              <p className="mt-4 text-lg font-semibold leading-snug text-foreground">{product.headline}</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground-strong">{product.description}</p>
              <a
                href={`https://${product.domain}`}
                className="mt-6 flex items-center justify-between gap-3 rounded-sm border-t border-border-themed pt-5 text-sm font-semibold text-accent-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-foreground"
              >
                <span>Visit {product.domain}</span>
                <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
