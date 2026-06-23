import WaitlistForm from "@/components/waitlist-form";
import Link from "next/link";
import { BarChart3, Rocket, Sparkles, Tag, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-aqua/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-lime/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-16 px-6 pt-20 pb-24 lg:grid-cols-2 lg:items-center lg:pt-28 lg:pb-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-xs font-semibold text-ink/70 shadow-sm">
              <Rocket className="h-3.5 w-3.5 text-aqua" strokeWidth={2.5} />
              Launching soon on the Shopify App Store
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Shopify apps that work
              <span className="block bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
                the way you do
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-ink/60 sm:text-xl">
              Simple, affordable tools built for merchants — not enterprise teams. Join the waitlist to get early-bird pricing and launch updates.
            </p>

            <div id="waitlist" className="mt-10 max-w-lg rounded-2xl border border-ink/10 bg-white p-8 shadow-xl shadow-ink/5">
              <h2 className="text-xl font-semibold text-ink">Get Early Access</h2>
              <p className="mt-1.5 text-sm text-ink/60">Sign up for launch updates and early-bird pricing.</p>
              <WaitlistForm />
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative ml-auto flex h-[420px] w-full max-w-md items-center justify-center">
              <div className="absolute h-72 w-72 rounded-[2.5rem] bg-gradient-to-br from-aqua/20 to-lime/20" />

              <div className="absolute -top-2 left-2 w-56 rotate-[-6deg] rounded-2xl border border-ink/5 bg-white p-5 shadow-xl shadow-ink/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mist">
                  <BarChart3 className="h-5 w-5 text-aqua" />
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">Pixel Tracker</p>
                <p className="mt-1 text-xs text-ink/50">Live ROAS tracking</p>
              </div>

              <div className="absolute right-0 top-24 w-52 rotate-[5deg] rounded-2xl border border-ink/5 bg-white p-5 shadow-xl shadow-ink/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mist">
                  <Tag className="h-5 w-5 text-ink/60" />
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">Simple Pricing</p>
                <p className="mt-1 text-xs text-ink/50">No hidden fees</p>
              </div>

              <div className="absolute bottom-0 left-10 w-48 rotate-[3deg] rounded-2xl border border-ink/5 bg-white p-5 shadow-xl shadow-ink/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-lime/30">
                  <TrendingUp className="h-5 w-5 text-ink" />
                </div>
                <p className="mt-3 text-sm font-semibold text-ink">Growing Suite</p>
                <p className="mt-1 text-xs text-ink/50">More apps on the way</p>
              </div>

              <div className="absolute -right-4 -bottom-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink shadow-xl shadow-ink/20">
                <Sparkles className="h-7 w-7 text-lime" />
              </div>
            </div>
          </div>
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
