import WaitlistForm from "@/components/waitlist-form";
import Link from "next/link";
import { BarChart3, Rocket, Sparkles, Tag } from "lucide-react";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden bg-background text-foreground transition-colors"
      >
        <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pt-24 pb-24 text-center sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-themed bg-surface px-4 py-1.5 text-xs font-semibold text-foreground shadow-sm">
            <Rocket className="h-3.5 w-3.5 text-aqua" strokeWidth={2.5} />
            Launching soon on the Shopify App Store
          </span>

          <h1 className="mt-8 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-foreground">Shopify apps that work</span>
            <span className="mt-2 block bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
              the way you do
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground-strong sm:text-xl">
            Simple, affordable tools built for merchants — not enterprise
            teams. Join the waitlist to get early-bird pricing and launch
            updates.
          </p>

          <div
            id="waitlist"
            className="mt-12 w-full max-w-lg rounded-2xl border border-border-themed bg-surface p-8 text-left shadow-sm sm:p-10"
          >
            <h2 className="text-xl font-semibold text-foreground">
              Get Early Access
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Sign up for launch updates and early-bird pricing.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      <section
        id="apps"
        className="border-t border-border-themed bg-surface py-20"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Our Apps
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-border-themed bg-background p-6 text-left">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface border border-border-themed">
                <BarChart3 className="h-6 w-6 text-aqua" />
              </div>
              <span className="inline-block rounded-full bg-lime/30 px-3 py-1 text-xs font-medium text-foreground/70">
                In Development
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                Pixel Tracker
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Track ad performance and ROAS directly in your Shopify
                dashboard.
              </p>
              <Link
                href="/pixel-tracker"
                className="mt-4 inline-block text-sm font-medium text-aqua hover:underline"
              >
                Learn More →
              </Link>
            </div>

            <div className="rounded-xl border border-border-themed bg-background p-6 text-left">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface border border-border-themed">
                <Sparkles className="h-6 w-6 text-foreground/50" />
              </div>
              <span className="inline-block rounded-full bg-lime/30 px-3 py-1 text-xs font-medium text-foreground/70">
                Coming Soon
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                More Coming
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;re building a suite of tools Shopify merchants
                actually need.
              </p>
            </div>

            <div className="rounded-xl border border-border-themed bg-background p-6 text-left">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface border border-border-themed">
                <Tag className="h-6 w-6 text-foreground/50" />
              </div>
              <span className="inline-block rounded-full bg-lime/30 px-3 py-1 text-xs font-medium text-foreground/70">
                Coming Soon
              </span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">
                Simple Pricing
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                No surprises. Transparent, affordable pricing for every
                budget.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
