/**
 * Blog data layer.
 *
 * Posts are stored as TS modules under `content/blog/`. We intentionally
 * avoid MDX or a CMS for now — the corpus is small, the build stays
 * static, and there are no extra dependencies to maintain.
 *
 * To add a post: append it to `content/blog/posts.ts`.
 */

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string; // ISO date — YYYY-MM-DD
  author: string;
  readingMinutes: number;
  tags: string[];
  body: string; // Plain text with paragraph breaks (blank lines).
};

// Import the seed list. Adding a new post is just appending to that file.
import { posts as seedPosts } from "@/content/blog/posts";

const posts: BlogPost[] = seedPosts;

/** Returns all posts, newest first. */
export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

/** Returns the most recent N posts. */
export function getRecentPosts(limit: number): BlogPost[] {
  return getAllPosts().slice(0, limit);
}

/** Returns a single post by slug, or undefined. */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

/** All distinct categories, sorted alphabetically. */
export function getAllCategories(): string[] {
  return Array.from(new Set(posts.map((p) => p.category))).sort();
}

/** All distinct tags, sorted alphabetically. */
export function getAllTags(): string[] {
  return Array.from(new Set(posts.flatMap((p) => p.tags))).sort();
}

/** Convert a slug like "pixel-tracker-launch-preview" to a title. */
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

/**
 * Renders plain-text post bodies into React elements with paragraph
 * breaks. Kept tiny on purpose — we don't need full markdown for the
 * MVP, and skipping a markdown parser means zero added dependencies.
 */
export function renderBody(body: string): string[] {
  return body
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean);
}

/** Formats an ISO date as "June 18, 2026". */
export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}