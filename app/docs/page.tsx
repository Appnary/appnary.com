import type { Metadata } from "next";
import VigilMark from "@/components/vigil-mark";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/docs", {
  title: "Vigil docs | Appnary",
  description:
    "What the Vigil Shopify security scan checks, what it leaves alone, and how the waitlist works until Shopify approves the app.",
  openGraph: {
    title: "Vigil docs",
    description: "Product notes for Vigil while it is in development.",
    url: "https://appnary.com/docs",
    images: [{ url: "/vigil-app-icon.png", width: 1200, height: 1200, alt: "Vigil" }],
  },
  twitter: {
    images: ["/vigil-app-icon.png"],
  },
});

export default function DocsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-20 pb-24 sm:pt-28">
      <p className="text-sm font-medium text-aqua">Docs</p>
      <div className="mt-3 flex items-center gap-4">
        <VigilMark size={48} className="h-12 w-12" />
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Vigil</h1>
      </div>
      <p className="mt-6 text-lg text-muted-foreground-strong">
        These notes describe the app we are building. Nothing here is installable yet.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-foreground">What a scan looks at</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
        <li>The published theme, including app embeds, app blocks, and JavaScript assets.</li>
        <li>The live storefront, for a script or frame that is not in a theme file. A password page is not the storefront.</li>
        <li>External scripts and frames, with the theme file or app that added each one.</li>
        <li>Strings that look like leaked keys or tokens.</li>
        <li>Store events Vigil can already see, kept past the 250 Shopify shows in admin.</li>
      </ul>

      <h2 className="mt-12 text-2xl font-bold text-foreground">What you can do with a finding</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        A person can turn a bad script off, and undo that. The same host can be turned off on every store under one account. When the published theme changes, Vigil records it. Vigil does not uninstall other apps.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-foreground">Agent scan</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        The scan is also an MCP tool. Claude, ChatGPT, or Cursor can ask Vigil to scan a store and receive the same findings: script, source, and the reason it was flagged. The merchant still approves any change.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-foreground">What version 1 does not read</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Customer records and order contents stay out of version 1. That keeps the first review off protected customer data.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-foreground">Two addresses</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        appnary.com is the public site: this page, the product page, and the waitlist. The Shopify admin screen is hosted on the control panel. That host runs the install, the scan, webhooks, and the agent tool. Merchants open Vigil from Shopify admin. They do not install it from this site.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-foreground">Waitlist</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        The waitlist stays open while we build Vigil and while Shopify reviews it. After the listing is approved, we invite people from the list. There is no public install URL before that.
      </p>
      <p className="mt-4 text-sm">
        <a href="/vigil#waitlist" className="font-medium text-accent-foreground hover:underline">
          Join the Vigil waitlist
        </a>
      </p>
    </article>
  );
}
