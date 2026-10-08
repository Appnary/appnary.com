import type { Metadata } from "next";
import VigilMark from "@/components/vigil-mark";
import { apps } from "@/content/apps";
import { formatCount, getWaitlistCounts } from "@/lib/waitlist-counts";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/interest", {
  title: "Waitlist ranking | Appnary",
  description:
    "Public waitlist counts for Vigil, Sync, and Backup. After Vigil ships, the larger future waitlist is built next. Backup stays last.",
  openGraph: {
    title: "Waitlist ranking",
    description: "See which Appnary app people are asking for.",
    url: "https://appnary.com/interest",
  },
});

export default async function InterestPage() {
  const counts = await getWaitlistCounts();
  const ranked = [...apps].sort((a, b) => counts[b.slug] - counts[a.slug]);
  const futureLeader = [...apps]
    .filter((app) => app.slug !== "vigil" && app.slug !== "backup")
    .sort((a, b) => counts[b.slug] - counts[a.slug])[0];

  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 pb-24 sm:pt-28">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Who wants what</h1>
      <p className="mt-6 text-lg text-muted-foreground-strong">
        Vigil is the app we are building. After it ships, we build {futureLeader.name} next if it has the larger future waitlist. Backup stays last while that category is crowded.
      </p>

      <table className="mt-10 w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border-themed text-muted-foreground">
            <th className="py-3 pr-4 font-medium">Rank</th>
            <th className="py-3 pr-4 font-medium">App</th>
            <th className="py-3 pr-4 font-medium">Status</th>
            <th className="py-3 font-medium">Waitlist</th>
          </tr>
        </thead>
        <tbody>
          {ranked.map((app, index) => (
            <tr key={app.slug} className="border-b border-border-themed">
              <td className="py-4 pr-4 text-muted-foreground">{index + 1}</td>
              <td className="py-4 pr-4">
                <a href={app.href} className="inline-flex items-center gap-2 font-medium text-foreground hover:underline">
                  {app.slug === "vigil" && (
                    <VigilMark size={20} className="h-5 w-5 shadow-none" />
                  )}
                  {app.name}
                </a>
              </td>
              <td className="py-4 pr-4 text-muted-foreground">{app.label}</td>
              <td className="py-4 font-medium text-foreground">{formatCount(counts[app.slug])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
