import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlatformActionGuide } from "@/components/platform-action-guide";
import { getPlatformActionPage } from "@/content/platform-actions";
import {
  ACTION_SLUGS,
  PLATFORM_ACTION_SLUGS,
} from "@/lib/platform-actions";

type RouteParams = {
  platform: string;
  action: string;
};

export function generateStaticParams() {
  return PLATFORM_ACTION_SLUGS.flatMap((platform) =>
    ACTION_SLUGS.map((action) => ({ platform, action })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { platform, action } = await params;
  const page = getPlatformActionPage(platform, action);
  if (!page) {
    return { title: "Not found" };
  }

  const url = `https://appnary.com/pixel-tracker/${page.platformSlug}/${page.actionSlug}`;

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function PlatformActionPageRoute({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { platform, action } = await params;
  const page = getPlatformActionPage(platform, action);
  if (!page) notFound();

  return <PlatformActionGuide page={page} />;
}
