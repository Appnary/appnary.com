import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllPlatformActionPages } from "@/content/platform-actions";
import { getAllVsComparisons } from "@/content/vs-comparisons";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://appnary.com";
  const now = new Date();

  const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { url: baseUrl, priority: 1, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/meta-pixel`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/google-ads`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/tiktok-pixel`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/snapchat-pixel`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/pinterest-pixel`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/linkedin-pixel`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/twitter-pixel`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/guides`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/guides/facebook-pixel-setup`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/guides/google-ads-conversion-tracking`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/guides/tiktok-pixel-setup`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/guides/server-side-tracking`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/guides/roas-calculation`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker/guides/multi-channel-attribution`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/about`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/blog`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${baseUrl}/docs`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/contact`, priority: 0.5, changeFrequency: "yearly" },
    { url: `${baseUrl}/compare`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/tools`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/tools/pixel-tracking-calculator`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/tools/pixel-health-check`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/vs/tixel-alternative`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/vs/infinite-pixel-alternative`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/vs/omega-pixel-alternative`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/vs/trackify-alternative`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/vs/onepixel-alternative`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/vs/avantify-alternative`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/vs/pixee-alternative`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/vs/multipixels-alternative`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/vs/pixelfy-alternative`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/vs/shoptok-alternative`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/alternatives/best-shopify-pixel-tracking-apps`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/alternatives/best-shopify-ad-tracking-tools`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/alternatives/best-shopify-roas-calculators`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/alternatives/best-shopify-conversion-tracking-apps`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/alternatives/best-shopify-analytics-apps`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/changelog`, priority: 0.5, changeFrequency: "weekly" },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: "yearly" },
  ];

  const blogPosts = getAllPosts().map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt + "T00:00:00Z"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const platformActionPages = getAllPlatformActionPages().map((p) => ({
    url: `${baseUrl}/pixel-tracker/${p.platformSlug}/${p.actionSlug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const vsComparisonPages = getAllVsComparisons().map((p) => ({
    url: `${baseUrl}/vs/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((r) => ({
      url: r.url,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...blogPosts,
    ...platformActionPages,
    ...vsComparisonPages,
  ];
}