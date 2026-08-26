import type { Metadata } from "next";

export const BASE_URL = "https://appnary.com";

export function absoluteUrl(path: string): string {
  if (!path || path === "/") {
    return BASE_URL;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalized}`;
}

/**
 * Ensures every page emits an HTTPS-apex canonical and Twitter tags that
 * match the page title/description instead of inheriting the root layout
 * "Get early access" fallback.
 */
export function withPageSeo(path: string, metadata: Metadata = {}): Metadata {
  const canonical =
    (typeof metadata.alternates?.canonical === "string"
      ? metadata.alternates.canonical
      : undefined) ??
    (typeof metadata.openGraph?.url === "string"
      ? metadata.openGraph.url
      : undefined) ??
    absoluteUrl(path);

  const title = typeof metadata.title === "string" ? metadata.title : undefined;
  const description = metadata.description;
  const ogTitle =
    typeof metadata.openGraph?.title === "string"
      ? metadata.openGraph.title
      : title;
  const ogDescription = metadata.openGraph?.description ?? description;
  const twitterTitle =
    typeof metadata.twitter?.title === "string"
      ? metadata.twitter.title
      : ogTitle;
  const twitterDescription = metadata.twitter?.description ?? ogDescription;

  return {
    ...metadata,
    alternates: {
      ...metadata.alternates,
      canonical,
    },
    openGraph: {
      ...metadata.openGraph,
      url: metadata.openGraph?.url ?? canonical,
    },
    twitter: {
      card: "summary_large_image",
      ...metadata.twitter,
      title: twitterTitle,
      description: twitterDescription,
      images: metadata.twitter?.images ?? ["/og-image.png"],
    },
  };
}
