import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://appnary.com";

  const staticRoutes: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { url: baseUrl, priority: 1, changeFrequency: "weekly" },
    { url: `${baseUrl}/vigil`, priority: 0.9, changeFrequency: "weekly" },
    { url: `${baseUrl}/docs`, priority: 0.8, changeFrequency: "weekly" },
    { url: `${baseUrl}/sync`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/backup`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${baseUrl}/interest`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${baseUrl}/about`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${baseUrl}/products`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${baseUrl}/blog`, priority: 0.6, changeFrequency: "weekly" },
    { url: `${baseUrl}/contact`, priority: 0.4, changeFrequency: "yearly" },
    { url: `${baseUrl}/changelog`, priority: 0.4, changeFrequency: "monthly" },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: "yearly" },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: "yearly" },
  ];

  const blogPosts = getAllPosts()
    .filter((post) => post.slug !== "pixel-tracker-launch-preview")
    .map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date((post.updatedAt ?? post.publishedAt) + "T00:00:00Z"),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [
    ...staticRoutes.map((route) => ({
      url: route.url,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogPosts,
  ];
}
