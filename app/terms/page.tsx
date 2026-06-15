import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Appnary",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold text-ink">Terms of Service</h1>
      <p className="mt-4 text-sm text-ink/50">Last updated: June 2026</p>
      <div className="mt-8 space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>By using Appnary services, you agree to these terms.</p>
        <h2 className="text-lg font-semibold text-ink">Service</h2>
        <p>We provide Shopify apps on a subscription basis. All purchases are handled through the Shopify App Store.</p>
        <h2 className="text-lg font-semibold text-ink">Payments</h2>
        <p>Payments are processed by Shopify. We do not store payment information.</p>
        <h2 className="text-lg font-semibold text-ink">Limitation of Liability</h2>
        <p>Appnary is not liable for any damages arising from the use of our services.</p>
      </div>
    </div>
  );
}
