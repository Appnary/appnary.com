import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";
import VigilMark from "@/components/vigil-mark";
import { formatCount, getWaitlistCounts } from "@/lib/waitlist-counts";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/vigil", {
  title: "Vigil | Shopify security scanner | Appnary",
  description:
    "Vigil scans a Shopify store for risky scripts and leaked keys. It is in development. Join the waitlist until Shopify approves it.",
  openGraph: {
    title: "Vigil | Shopify security scanner",
    description:
      "Vigil is in development. Join the waitlist and we will invite you after Shopify approves the listing.",
    url: "https://appnary.com/vigil",
    images: [{ url: "/vigil-app-icon.png", width: 1200, height: 1200, alt: "Vigil" }],
  },
  twitter: {
    images: ["/vigil-app-icon.png"],
  },
});

const checks = [
  {
    title: "Theme and app embeds",
    body: "Vigil reads the published theme and the app embeds on the storefront. Each external script is tied to a file or an app name.",
  },
  {
    title: "Leaked keys",
    body: "It flags tokens and secret-looking strings that shipped in theme code or an embed. The finding names the file.",
  },
  {
    title: "Change history",
    body: "Vigil keeps the store events it can see, past the 250 Shopify shows in admin. It does not read staff accounts.",
  },
  {
    title: "A switch you can flip",
    body: "When a script looks wrong, a person can turn that script off. The first version does not auto-delete apps.",
  },
];

export default async function VigilPage() {
  const counts = await getWaitlistCounts();

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Vigil",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Shopify",
    description:
      "Vigil is a pre-release Shopify security scanner. It is not available to install until Shopify approves the listing.",
    url: "https://appnary.com/vigil",
    image: "https://appnary.com/vigil-app-icon.png",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />

      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 sm:pt-28">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          In development
        </span>
        <div className="mt-6 flex items-center gap-4">
          <VigilMark size={64} className="h-14 w-14 sm:h-16 sm:w-16" priority />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Vigil
          </h1>
        </div>
        <p className="mt-6 text-lg text-muted-foreground-strong">
          A security scan for a Shopify store. It tells you which file or app put a script on the storefront, and you can run that scan from Claude, ChatGPT, or Cursor.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          {formatCount(counts.vigil)} {counts.vigil === 1 ? "person is" : "people are"} on the waitlist. There is no install link until Shopify approves the app.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="text-2xl font-bold text-foreground">What the first version checks</h2>
        <div className="mt-8 space-y-6">
          {checks.map((check) => (
            <div key={check.title}>
              <h3 className="text-base font-semibold text-foreground">{check.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{check.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="text-2xl font-bold text-foreground">Run it from an agent</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          The same scan is available over MCP. An agent asks Vigil to scan the store and gets the findings back as structured data: script, source, and why it was flagged. The merchant still decides what to turn off.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Version 1 does not read customer records or order contents. Undo, an agency kill switch, and an alert when an app changes storefront code come later in the same app.
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <h2 className="text-2xl font-bold text-foreground">Where the app lives</h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          This page on appnary.com is the public page. The screen inside Shopify admin is served by the Appnary control panel. That address processes the install, the scan, and the agent tool. It is not an install link, and this site will not show one until Shopify approves the listing.
        </p>
        <p className="mt-4 text-sm">
          <a href="/docs" className="font-medium text-accent-foreground hover:underline">
            Read the Vigil docs
          </a>
        </p>
      </section>

      <section id="waitlist" className="mx-auto max-w-lg px-6 pb-24">
        <div className="rounded-2xl border border-border-themed bg-surface p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground">Waitlist</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            We keep this list until the app is built and Shopify has approved it. Then we invite people from the list.
          </p>
          <WaitlistForm product="vigil" />
        </div>
      </section>
    </>
  );
}
