import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";
import { formatCount, getWaitlistCounts } from "@/lib/waitlist-counts";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/sync", {
  title: "Sync | Future Shopify app | Appnary",
  description:
    "Sync is a future Appnary app for moving Shopify data between stores, then to your own cloud and ERP. Join the waitlist.",
  openGraph: {
    title: "Sync | Future Shopify app",
    description: "Sync is not in development yet. Join the waitlist so we can see demand.",
    url: "https://appnary.com/sync",
  },
});

export default async function SyncPage() {
  const counts = await getWaitlistCounts();

  return (
    <section className="mx-auto max-w-xl px-6 pt-20 pb-24 sm:pt-28">
      <span className="inline-flex items-center rounded-full bg-muted-themed px-3 py-1 text-xs font-medium text-muted-foreground">
        Future
      </span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground">Sync</h1>
      <p className="mt-6 text-lg text-muted-foreground-strong">
        A later app for copying catalog and order data between Shopify stores. Your own cloud and ERP connections would be later modules in the same app, not separate listings.
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        We are not building Sync yet. {formatCount(counts.sync)} {counts.sync === 1 ? "person is" : "people are"} on this list. After Vigil ships, the larger future waitlist is next, except Backup stays last.
      </p>
      <div id="waitlist" className="mt-10 rounded-2xl border border-border-themed bg-surface p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Join the Sync waitlist</h2>
        <WaitlistForm product="sync" />
      </div>
    </section>
  );
}
