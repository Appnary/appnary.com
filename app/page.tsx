import WaitlistForm from "@/components/waitlist-form";
import Link from "next/link";
import { BarChart3, Sparkles, Tag } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-32 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
          Shopify Apps That Work<span className="block text-aqua">the Way You Do</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-ink/70 sm:text-xl">
          Simple, affordable tools for Shopify merchants. Be the first to know when we launch.
        </p>
        <div id="waitlist" className="mx-auto mt-10 max-w-lg rounded-2xl border border-ink/5 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">Get Early Access</h2>
          <p className="mt-1.5 text-sm text-ink/60">Sign up for launch updates and early-bird pricing.</p>
          <WaitlistForm />
        </div>
      </section>

      <section id="apps" className="border-t border-ink/5 bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">Our Apps</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-ink/5 bg-mist p-6 text-left">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-ink/10">
                <BarChart3 className="h-6 w-6 text-aqua" />
              </div>
              <span className="inline-block rounded-full bg-lime/30 px-3 py-1 text-xs font-medium text-ink/70">In Development</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">Pixel Tracker</h3>
              <p className="mt-2 text-sm text-ink/60">Track ad performance and ROAS directly in your Shopify dashboard.</p>
              <Link href="/pixel-tracker" className="mt-4 inline-block text-sm font-medium text-aqua hover:underline">Learn More →</Link>
            </div>

            <div className="rounded-xl border border-ink/5 bg-mist p-6 text-left">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-ink/10">
                <Sparkles className="h-6 w-6 text-ink/50" />
              </div>
              <span className="inline-block rounded-full bg-lime/30 px-3 py-1 text-xs font-medium text-ink/70">Coming Soon</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">More Coming</h3>
              <p className="mt-2 text-sm text-ink/60">We&apos;re building a suite of tools Shopify merchants actually need.</p>
            </div>

            <div className="rounded-xl border border-ink/5 bg-mist p-6 text-left">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-ink/10">
                <Tag className="h-6 w-6 text-ink/50" />
              </div>
              <span className="inline-block rounded-full bg-lime/30 px-3 py-1 text-xs font-medium text-ink/70">Coming Soon</span>
              <h3 className="mt-3 text-lg font-semibold text-ink">Simple Pricing</h3>
              <p className="mt-2 text-sm text-ink/60">No surprises. Transparent, affordable pricing for every budget.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
