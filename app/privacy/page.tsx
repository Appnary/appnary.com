import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Appnary",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground-faint">Last updated: June 2026</p>
      <div className="mt-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>Your privacy matters to us. This policy explains how Appnary handles data.</p>
        <h2 className="text-lg font-semibold text-foreground">Data Collection</h2>
        <p>We collect minimal data needed to provide our services. Pixel Tracker uses no cookies and collects no personally identifiable information.</p>
        <h2 className="text-lg font-semibold text-foreground">Third Parties</h2>
        <p>We do not sell, trade, or share your data with third parties except as required to provide our services (hosting, email delivery).</p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>Questions? Contact us through our early access signup form.</p>
      </div>
    </div>
  );
}
