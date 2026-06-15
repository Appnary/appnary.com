import { BarChart3, CheckCircle2, ChevronDown } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pixel Tracker — Privacy-Friendly Shopify Analytics | Appnary",
  description: "Track every visitor, understand every click. Privacy-friendly analytics built for Shopify merchants.",
};

const features = [
  { title: "Visitor tracking", description: "See how many people visit your store, without slowing down your site." },
  { title: "Click & scroll heatmaps", description: "Understand how visitors interact with your product and collection pages." },
  { title: "Conversion funnel", description: "Track visitors from landing page through to purchase." },
  { title: "Product performance", description: "Know which products get the most views and purchases." },
  { title: "Privacy-first by design", description: "No cookies, no personal data, no third-party trackers." },
  { title: "Live dashboard", description: "Real-time visitor count, top pages, and active sessions." },
];

const faqs = [
  { q: "Does Pixel Tracker slow down my Shopify store?", a: "No. Pixel Tracker loads asynchronously and adds less than 10KB to your page." },
  { q: "Does it use cookies?", a: "No cookies, no tracking identifiers. Privacy-preserving aggregation built in." },
  { q: "Is it GDPR and CCPA compliant?", a: "Yes. No personal data collection, no cookie consent banners needed." },
  { q: "How much does it cost?", a: "$4.99/month flat rate. No per-visitor fees, no tiered plans." },
  { q: "Can I try it before purchasing?", a: "14-day free trial with full access. No credit card required." },
  { q: "How do I install it?", a: "One-click install from the Shopify App Store." },
  { q: "What data does Pixel Tracker collect?", a: "Aggregate page views, referrers, device types, and interactions. No PII." },
  { q: "Can I export my data?", a: "Yes. Export as CSV or JSON at any time." },
];

export default function PixelTrackerPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 rounded-full bg-lime/80 px-3 py-0.5 text-xs font-semibold text-ink/80">In Development</span>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-mist border border-gray-100">
            <BarChart3 className="h-7 w-7 text-aqua" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">Pixel Tracker</h1>
          <p className="mt-3 max-w-xl text-lg text-gray-600">Track every visitor, understand every click. Privacy-friendly analytics built for Shopify merchants.</p>
          <div className="mt-8 flex items-center gap-4">
            <button disabled className="rounded-lg bg-gray-300 px-6 py-3 text-sm font-semibold text-gray-500 cursor-not-allowed">Install from Shopify</button>
            <a href="/#waitlist" className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:border-gray-400 transition-colors">Get Early Access</a>
          </div>
          <p className="mt-3 text-sm text-gray-400">Available soon in the Shopify App Store</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16 sm:pb-20">
        <div className="rounded-2xl border border-gray-200/70 bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Pricing</p>
          <p className="mt-2 text-4xl font-bold text-ink">$4.99<span className="text-lg font-normal text-gray-500">/month</span></p>
          <p className="mt-2 text-sm text-gray-500">Flat rate. No per-visitor fees. No tiered plans.</p>
          <p className="mt-4 text-sm text-gray-400">Available in the Shopify App Store — purchase directly through Shopify.</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 sm:pb-20">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-gray-200/70 bg-white p-6 shadow-sm">
              <CheckCircle2 className="mb-3 h-5 w-5 text-aqua" />
              <h3 className="font-semibold text-ink">{f.title}</h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-ink sm:text-3xl">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-xl border border-gray-200/70 bg-white shadow-sm transition-all open:border-aqua/30">
              <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-ink list-none">
                {faq.q}
                <ChevronDown className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-180" />
              </summary>
              <div className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
