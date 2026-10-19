import type { Metadata } from "next";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/privacy", {
  title: "Privacy Policy | Appnary",
  description: "How Appnary collects, uses, and shares data for its websites and Shopify apps, including Vigil and AI agents connected to it.",
});

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold text-foreground">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted-foreground-faint">Last updated: 19 October 2026</p>
      <div className="mt-8 space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>This policy explains how Appnary handles data for its websites and Shopify apps. Appnary is a product of Binary Labs LLC, a company based in Wyoming, USA (<a className="underline" href="https://binarylabssoft.com">binarylabssoft.com</a>). Binary Labs LLC is responsible for this data.</p>
        <h2 className="text-lg font-semibold text-foreground">Website</h2>
        <p>
          appnary.com uses Google Analytics (GA4). It sets cookies and records page views so we can see which pages are read. Google handles that data under its own policy.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Waitlist</h2>
        <p>If you join a waitlist, we store the email address and which product you asked about.</p>
        <h2 className="text-lg font-semibold text-foreground">Vigil</h2>
        <p>
          Vigil requests theme read access only. It reads the published theme and the store events Shopify returns to the app. It does not request staff, customer, or order data.
        </p>
        <p>For each store, Vigil stores:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>the Shopify access token, encrypted at rest;</li>
          <li>the storefront password, if you save one, encrypted at rest;</li>
          <li>the theme file and line behind each finding, and the original text of any line you turn off so it can be restored;</li>
          <li>storefront HTML from a live-page scan, kept in a cache for up to 60 minutes (the last good copy for up to 7 days);</li>
          <li>a log of scans and changes;</li>
          <li>agent tokens, stored only as hashes. The plain token is shown once;</li>
          <li>for each AI connection, the name of the client, the name or email of the Shopify staff member who connected it, and hashed access and refresh tokens. Access tokens last 1 hour and refresh tokens 30 days. The Shopify token from that sign-in is not kept.</li>
        </ul>
        <p>
          Scans read your storefront as a visitor does, without a customer login.
        </p>
        <p>
          AI agents you connect, such as Claude (claude.ai, Claude Desktop, Claude Code, with any model including Opus), ChatGPT, Codex, Cursor, or any other MCP client, can read Vigil results for your store: theme findings, script hosts on the live page, change history, and any storefront HTML they upload. Vigil returns this data only when a connected client asks for it. What the client does with it, and how long it keeps it, is set by that provider. Connections are read-only unless you allow turn-off. You can revoke a connection or rotate a token at any time on the Agent page.
        </p>
        <p>
          Vigil keeps its records while the app is installed. Uninstalling Vigil, or a Shopify shop redact request, deletes that store&apos;s Vigil records: tokens, connections, saved passwords, the change log, and turned-off lines. Cached storefront HTML expires within 7 days. Server logs keep the store domain and webhook events for troubleshooting. Other Appnary apps on the store are not affected.
        </p>
        <p>
          Shopify&apos;s customer data request and customer redact webhooks are accepted. Vigil holds no customer records, so there is nothing to export or erase for a customer.
        </p>
        <h2 className="text-lg font-semibold text-foreground">Sharing</h2>
        <p>We do not sell your data. Hosting and email delivery providers process it only so the site and the apps can run. AI clients are covered in the Vigil section above.</p>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>
          Questions or deletion requests: <a className="underline" href="mailto:info@binarylabssoft.com">info@binarylabssoft.com</a>
        </p>
      </div>
    </div>
  );
}
