import type { Metadata } from "next";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/privacy", {
  title: "Privacy Policy | Appnary",
  description: "How Appnary collects, uses, and shares data for Vigil and other Shopify apps.",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground-faint">Last updated: 7 October 2026</p>
      <div className="mt-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>This policy explains how Appnary handles data for its websites and Shopify apps.</p>
        <h2 className="text-lg font-semibold text-foreground">Waitlist</h2>
        <p>If you join a waitlist, we store the email address and which product you asked about.</p>
        <h2 className="text-lg font-semibold text-foreground">Vigil</h2>
        <p>
          Vigil reads the published theme and the store events Shopify returns to the app. It can store the theme file and line behind a finding, the original text of a line you turn off so it can be restored, and a hash of an agent token you create. It does not request or store customer records or order contents.
        </p>
        <p>
          Shopify&apos;s customer data request and customer redact webhooks are accepted. There is no customer data to export or delete. A shop redact, or uninstalling Vigil, deletes that store&apos;s Vigil records and leaves other Appnary apps on the store alone.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Sharing</h2>
        <p>We do not sell your data. Hosting and email delivery providers process it only so the site and the apps can run.</p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>
          Questions: <a className="underline" href="mailto:harun.b13@gmail.com">harun.b13@gmail.com</a>
        </p>
      </div>
    </div>
  );
}
