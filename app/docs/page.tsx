import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  HelpCircle,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/docs", {
  title: "Pixel Tracker Docs: Setup, Platforms & FAQs | Appnary",
  description:
    "Pixel Tracker is a prelaunch Shopify pixel-configuration app. Intended platform coverage is still being verified. Billing will be through Shopify.",
  openGraph: {
    title: "Pixel Tracker Docs: Setup, Platforms & FAQs",
    description:
      "Setup steps, platform coverage, and FAQs for Pixel Tracker on Shopify.",
    url: "https://appnary.com/docs",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
});

const sections = [
  {
    icon: BookOpen,
    title: "How Pixel Tracker works",
    description:
      "What the app installs, which platforms it covers, and what server-side tracking means here.",
    href: "#how-it-works",
  },
  {
    icon: Settings,
    title: "Setup guide",
    description:
      "Install, paste Pixel IDs, confirm events fire. No theme edits.",
    href: "#setup",
  },
  {
    icon: HelpCircle,
    title: "Frequently asked questions",
    description:
      "Pricing, CAPI, GDPR, waitlist timing, and uninstall.",
    href: "#faq",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard basics",
    description:
      "What you manage day to day: platforms, status, and which events are server-side.",
    href: "#dashboard",
  },
];

const howItWorksSteps = [
  {
    n: "01",
    title: "Check launch availability",
    body: "Pixel Tracker is not available to install yet. The current approach uses a Shopify theme app extension: activate the app embed in the theme editor and verify events before relying on tracking.",
  },
  {
    n: "02",
    title: "Confirm launch integrations",
    body: "Check the launch documentation for supported platforms before entering any IDs. A planned platform is not a verified integration.",
  },
  {
    n: "03",
    title: "Events fire on the storefront",
    body: "The theme embed loads browser tags. A saved G- measurement ID can also send a GA4 purchase when an order is paid. Meta CAPI and TikTok Events API are not confirmed. A browser event does not prove those server deliveries.",
  },
  {
    n: "04",
    title: "Manage everything in one place",
    body: "The dashboard stores platform IDs. A saved Google measurement ID is what the paid-order GA4 purchase uses. Other server tokens are not confirmed.",
  },
];

const setupSteps = [
  {
    n: "1",
    title: "Install from the Shopify App Store",
    body: "When Pixel Tracker is available, install it on the store you want to track and approve the standard permissions. Until then, join the waitlist for launch access.",
  },
  {
    n: "2",
    title: "Add each platform's Pixel ID",
    body: "At launch, follow the verified setup instructions for each supported platform. Activate the app embed in Shopify's theme editor and confirm the destination ID before testing events.",
  },
  {
    n: "3",
    title: "Confirm events on a test visit",
    body: "Load a product page, add an item to the cart, and complete a test purchase. Verify each expected event and its destination in the platform's test tools. Check server events separately if your chosen integration provides them.",
  },
  {
    n: "4",
    title: "Use the platform guides for edge cases",
    body: "Per-platform walkthroughs (Meta, Google Ads, TikTok, and more) live under Setup guides. Start there if a specific network needs extra fields or verification steps.",
  },
];

const faqs = [
  {
    q: "What does Pixel Tracker actually do?",
    a: "Pixel Tracker is a prelaunch pixel-configuration app. Its intended platforms include Meta, Google Ads, TikTok, Snapchat, Pinterest, X, and LinkedIn. Launch coverage still needs verification.",
  },
  {
    q: "Does Pixel Tracker slow down my Shopify store?",
    a: "The current approach loads browser tags through a Shopify theme app extension. Measure performance on your actual store and check for duplicate tags; using an app does not remove a tag's loading cost.",
  },
  {
    q: "Does it use cookies?",
    a: "Browser pixels may set platform cookies. Pixel Tracker is not a cookieless analytics suite; review the chosen integration and consent settings before collecting events.",
  },
  {
    q: "Is it GDPR and CCPA compliant?",
    a: "Review consent and disclosures for every integration you use. Pixel Tracker is in development; its privacy behavior needs validation before launch.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing is specific to each Shopify app and billed through Shopify. Pixel Tracker's launch prices and plan limits are not confirmed yet.",
  },
  {
    q: "Can I install it today?",
    a: "Not yet. Pixel Tracker is on the waitlist ahead of App Store launch. Join the waitlist for launch updates. Prices and plan limits will be published with the Shopify listing.",
  },
  {
    q: "Does it support server-side events?",
    a: "Pixel Tracker is prelaunch and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Meta CAPI and TikTok Events API are not confirmed.",
  },
  {
    q: "Will it conflict with Google Analytics or an existing Meta Pixel?",
    a: "A saved G- measurement ID loads Google's tag and can send a GA4 purchase on paid orders. If you already have a Meta Pixel in the theme, turn off the duplicate so you don't double-fire the same ID.",
  },
  {
    q: "How do I uninstall it?",
    a: "Manage app subscriptions and uninstall apps through Shopify admin. Review the app's subscription terms in Shopify before approving any charges.",
  },
];

const dashboardGuides = [
  {
    title: "Connected platforms",
    summary:
      "A saved platform ID does not prove events are arriving. Verify each intended integration independently; launch coverage and plan limits are not confirmed.",
  },
  {
    title: "Pixel status",
    summary:
      "A saved ID is only a configuration check. Confirm actual delivery in the destination platform's test tools.",
  },
  {
    title: "Browser vs server-side",
    summary:
      "Browser and server delivery need separate checks. A saved G- measurement ID can send a GA4 purchase on paid orders. Meta CAPI and TikTok Events API are not confirmed.",
  },
  {
    title: "Per-store billing",
    summary:
      "Each Shopify app has its own pricing and is billed through Shopify. Review the app's listing for store coverage and plan limits when it launches.",
  },
];

export default function DocsPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center sm:pt-28 sm:pb-16">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          Docs & Help
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Everything you need to{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            connect your pixels
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">
          Setup, platform coverage, and the questions merchants ask before
          installing Pixel Tracker.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {sections.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group flex items-start gap-4 rounded-xl border border-border-themed bg-surface p-5 transition-all hover:border-aqua/40 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-aqua/10">
                <s.icon className="h-5 w-5 text-aqua" strokeWidth={2.25} />
              </div>
              <div className="min-w-0">
                <h2 className="text-base font-semibold text-foreground">
                  {s.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-aqua group-hover:underline">
                  Jump to section <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-3xl px-6 py-16 scroll-mt-24 sm:py-20"
      >
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          How Pixel Tracker works
        </h2>
        <p className="mt-3 text-base text-muted-foreground-strong leading-relaxed">
          One dashboard for ad-platform pixels on Shopify. No theme code, no
          separate analytics product bolted on.
        </p>
        <ol className="mt-8 space-y-6">
          {howItWorksSteps.map((step) => (
            <li
              key={step.n}
              className="flex gap-5 rounded-xl border border-border-themed bg-surface p-6 shadow-sm"
            >
              <span className="shrink-0 text-2xl font-bold text-aqua">
                {step.n}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="setup"
        className="mx-auto max-w-3xl px-6 py-16 scroll-mt-24 sm:py-20"
      >
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Setup guide
        </h2>
        <p className="mt-3 text-base text-muted-foreground-strong leading-relaxed">
          From install to a verified test event. Platform-specific detail lives
          in the guides linked below.
        </p>
        <ol className="mt-8 space-y-4">
          {setupSteps.map((step) => (
            <li
              key={step.n}
              className="rounded-xl border border-border-themed bg-surface p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua/15 text-sm font-semibold text-foreground/80">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="faq"
        className="mx-auto max-w-3xl px-6 py-16 scroll-mt-24 sm:py-20"
      >
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-3">
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

      <section
        id="dashboard"
        className="mx-auto max-w-3xl px-6 py-16 pb-24 scroll-mt-24 sm:py-20 sm:pb-32"
      >
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Dashboard basics
        </h2>
        <p className="mt-3 text-base text-muted-foreground-strong leading-relaxed">
          What you&apos;ll actually look at once pixels are connected.
        </p>
        <div className="mt-8 space-y-4">
          {dashboardGuides.map((r) => (
            <div
              key={r.title}
              className="rounded-xl border border-border-themed bg-surface p-6 shadow-sm"
            >
              <h3 className="text-base font-semibold text-foreground">
                {r.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {r.summary}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-border-themed bg-section p-6 sm:p-8">
          <h3 className="text-base font-semibold text-foreground text-center">
            Platform setup and tools
          </h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            <li>
              <Link
                href="/pixel-tracker/meta-pixel"
                className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua"
              >
                Meta Pixel setup →
              </Link>
            </li>
            <li>
              <Link
                href="/pixel-tracker/linkedin-pixel"
                className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua"
              >
                LinkedIn Insight Tag setup →
              </Link>
            </li>
            <li>
              <Link
                href="/pixel-tracker/guides"
                className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua"
              >
                All tracking guides →
              </Link>
            </li>
            <li>
              <Link
                href="/tools/pixel-health-check"
                className="block rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-aqua"
              >
                Pixel health check →
              </Link>
            </li>
          </ul>
          <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
            <Link
              href="/compare"
              className="inline-block text-base font-semibold text-aqua hover:underline"
            >
              Compare Pixel Tracker →
            </Link>
            <Link
              href="/#waitlist"
              className="inline-block text-base font-semibold text-aqua hover:underline"
            >
              Join the waitlist →
            </Link>
            <Link
              href="/contact"
              className="inline-block text-base font-semibold text-aqua hover:underline"
            >
              Contact support →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
