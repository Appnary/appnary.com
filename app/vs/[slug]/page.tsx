import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVsPage, VS_CHECKED, VS_SLUGS } from "@/content/vs";
import { withPageSeo } from "@/lib/seo";

export const dynamic = "error";
export const revalidate = false;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return VS_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const page = getVsPage((await params).slug);
  if (!page) return {};
  return withPageSeo(`/vs/${page.slug}`, {
    title: page.title,
    description: page.description,
    openGraph: { title: page.title, description: page.description, url: `https://appnary.com/vs/${page.slug}` },
  });
}

export default async function VsPage({ params }: { params: Promise<Params> }) {
  const page = getVsPage((await params).slug);
  if (!page) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title.replace(" | Appnary", ""),
    description: page.description,
    datePublished: "2026-11-26",
    dateModified: "2026-11-26",
    author: { "@type": "Organization", name: "Appnary" },
    publisher: { "@type": "Organization", name: "Appnary" },
    mainEntityOfPage: `https://appnary.com/vs/${page.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-6 pt-20 pb-24 sm:pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Vigil vs {page.name}</h1>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{page.intro}</p>

      <h2 className="mt-12 text-2xl font-bold text-foreground">What {page.name} does</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{page.otherSummary}</p>

      <h2 className="mt-12 text-2xl font-bold text-foreground">Side by side</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[32rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border-themed text-foreground">
              <th className="py-2 pr-4 font-semibold">&nbsp;</th>
              <th className="py-2 pr-4 font-semibold">Vigil</th>
              <th className="py-2 font-semibold">{page.name}</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {page.rows.map((r) => (
              <tr key={r.label} className="border-b border-border-themed align-top">
                <th scope="row" className="py-3 pr-4 font-medium text-foreground">{r.label}</th>
                <td className="py-3 pr-4">{r.vigil}</td>
                <td className="py-3">{r.other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        {page.name} details come from its{" "}
        <a href={page.listing} rel="nofollow noopener" className="font-medium text-accent-foreground hover:underline">
          Shopify App Store listing
        </a>
        , checked {VS_CHECKED}. &quot;Not listed&quot; means the listing does not mention it, not that the app lacks it.
      </p>

      <h2 className="mt-12 text-2xl font-bold text-foreground">Pick {page.name} if</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{page.pickOther}</p>

      <h2 className="mt-12 text-2xl font-bold text-foreground">Pick Vigil if</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{page.pickVigil}</p>
      <p className="mt-4 text-sm">
        <Link href="/vigil#waitlist" className="font-medium text-accent-foreground hover:underline">
          Join the Vigil waitlist
        </Link>
        {" · "}
        <Link href="/docs" className="font-medium text-accent-foreground hover:underline">
          What Vigil checks
        </Link>
      </p>
    </article>
  );
}
