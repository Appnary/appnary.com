import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VsComparisonGuide } from "@/components/vs-comparison";
import { getVsComparison } from "@/content/vs-comparisons";
import { VS_COMPARISON_SLUGS } from "@/lib/vs-comparisons";

type RouteParams = {
  slug: string;
};

export function generateStaticParams() {
  return VS_COMPARISON_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getVsComparison(slug);
  if (!page) {
    return { title: "Not found" };
  }

  const url = `https://appnary.com/vs/${page.slug}`;

  return {
    title: `${page.title} | Appnary`,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function VsComparisonPageRoute({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const page = getVsComparison(slug);
  if (!page) notFound();

  return <VsComparisonGuide page={page} />;
}
