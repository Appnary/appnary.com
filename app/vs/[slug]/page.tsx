import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VsComparisonGuide } from "@/components/vs-comparison";
import { getVsComparisonPage, VS_COMPARISON_SLUGS } from "@/content/vs-comparisons";
import { InlineText } from "@/components/inline-text";

export const dynamic = "error";
export const revalidate = false;

type Params = { slug: string };

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return VS_COMPARISON_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getVsComparisonPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `https://appnary.com/vs/${slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://appnary.com/vs/${slug}`,
      siteName: "Appnary",
      type: "website",
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getVsComparisonPage(slug);
  if (!page) notFound();
  return (
    <main className="min-h-screen bg-background">
      <VsComparisonGuide page={page} />
    </main>
  );
}
