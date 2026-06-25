import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Appnary | Simple Shopify Apps",
  description:
    "Appnary builds simple, affordable Shopify apps for independent merchants. Learn about our mission, team, and story.",
  openGraph: {
    title: "About | Appnary",
    description:
      "Simple, affordable Shopify apps built by a small team that actually uses them.",
    url: "https://appnary.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const values = [
  {
    icon: Heart,
    title: "Built for merchants first",
    body: "Every feature starts with a real merchant problem. If it doesn't help someone running a store, it doesn't ship.",
  },
  {
    icon: Lightbulb,
    title: "Simplicity over features",
    body: "Most apps ship with a hundred settings nobody uses. We ship fewer, better ones that actually matter.",
  },
  {
    icon: Users,
    title: "Honest pricing",
    body: "Flat rates, no usage tiers, no surprise upcharges. You should know what you're paying before you install.",
  },
];

const milestones = [
  {
    date: "Q1 2026",
    title: "Appnary founded",
    body: "Started as a side project to scratch our own itch with Shopify analytics.",
  },
  {
    date: "Q2 2026",
    title: "Pixel Tracker in private beta",
    body: "Working with a small group of Shopify merchants to shape the first app.",
  },
  {
    date: "Q3 2026",
    title: "Public launch on the Shopify App Store",
    body: "Pixel Tracker goes live. More apps in the pipeline.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center sm:pt-28 sm:pb-16">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          Our story
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Small team. Simple apps.{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            Honest pricing.
          </span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground-strong">
          Appnary exists because running a Shopify store shouldn&apos;t require
          an enterprise budget or a half-day of onboarding. We&apos;re a tiny
          team building the apps we wished existed when we ran our own stores.
        </p>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
        <div className="rounded-2xl border border-border-themed bg-surface p-8 shadow-sm sm:p-10">
          <p className="text-sm font-medium uppercase tracking-wider text-aqua">
            Mission
          </p>
          <p className="mt-3 text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            Give independent merchants the same caliber of tools the big
            brands use, without the enterprise contract.
          </p>
          <p className="mt-6 text-base text-muted-foreground-strong leading-relaxed">
            The Shopify App Store has thousands of apps. Most of them are
            either too expensive, too complicated, or stuffed with features
            that exist only to justify a higher tier. We think independent
            merchants deserve better, and we&apos;re building it.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-5xl px-6 pb-16 sm:pb-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          What we believe
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-xl border border-border-themed bg-surface p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-aqua/10">
                <v.icon className="h-5 w-5 text-aqua" strokeWidth={2.25} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Story / timeline */}
      <section className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          How we got here
        </h2>
        <ol className="space-y-6 border-l-2 border-aqua/30 pl-6">
          {milestones.map((m) => (
            <li key={m.title} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-aqua ring-4 ring-background" />
              <p className="text-xs font-semibold uppercase tracking-wider text-aqua">
                {m.date}
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {m.body}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
        <div className="rounded-2xl border border-border-themed bg-section p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            The team
          </h2>
          <p className="mt-3 text-base text-muted-foreground-strong leading-relaxed">
            We&apos;re a small group of builders who&apos;ve shipped
            products at every scale, from solo projects to platforms used
            by millions. We came together over a shared frustration: the
            best Shopify tools were gated behind pricing that didn&apos;t
            fit a store doing six figures, not eight.
          </p>
          <p className="mt-4 text-base text-muted-foreground-strong leading-relaxed">
            Today we&apos;re a handful of people, fully remote, working
            with a small group of beta merchants. We&apos;d love to hear
            from you.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-aqua px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-aqua/90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}