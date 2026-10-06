import type { Metadata } from "next";
import WaitlistForm from "@/components/waitlist-form";
import { formatCount, getWaitlistCounts } from "@/lib/waitlist-counts";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/backup", {
  title: "Backup | Future Shopify app | Appnary",
  description:
    "Backup is a future Appnary app for Shopify backup and restore. It will be built last. Join the waitlist.",
  openGraph: {
    title: "Backup | Future Shopify app",
    description: "Backup is not in development yet. The waitlist is open so we can see demand.",
    url: "https://appnary.com/backup",
  },
});

export default async function BackupPage() {
  const counts = await getWaitlistCounts();

  return (
    <section className="mx-auto max-w-xl px-6 pt-20 pb-24 sm:pt-28">
      <span className="inline-flex items-center rounded-full bg-muted-themed px-3 py-1 text-xs font-medium text-muted-foreground">
        Future
      </span>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground">Backup</h1>
      <p className="mt-6 text-lg text-muted-foreground-strong">
        Backup and restore for a Shopify store. Rewind and a few other apps already own this category, so we will build Backup last even if this waitlist is the largest.
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        {formatCount(counts.backup)} {counts.backup === 1 ? "person is" : "people are"} on this list. The count is public. It does not move Backup ahead of Sync.
      </p>
      <div id="waitlist" className="mt-10 rounded-2xl border border-border-themed bg-surface p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-foreground">Join the Backup waitlist</h2>
        <WaitlistForm product="backup" />
      </div>
    </section>
  );
}
