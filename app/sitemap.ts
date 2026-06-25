import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://appnary.com";
  const now = new Date();

  const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { url: baseUrl, priority: 1, changeFrequency: "monthly" },
    { url: `${baseUrl}/pixel-tracker`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/about`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/blog`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${baseUrl}/docs`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${baseUrl}/contact`, priority: 0.5, changeFrequency: "yearly" },
    { url: `${baseUrl}/compare`, priority: 0.8, changeFrequency: "monthly" },
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

  return [
    ...staticRoutes.map((r) => ({
      url: r.url,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...blogPosts,
  ];
}