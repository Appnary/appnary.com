import { posts } from "@/content/blog/posts";
import { BASE_URL } from "@/lib/seo";

function section(title: string, url: string, blocks: Array<string | undefined>): string {
  const body = blocks.filter((block) => block && block.trim()).join("\n\n");
  return [`## ${title}`, url, "", body].join("\n");
}

/**
 * Long form of the blog posts that are still published.
 * Pixel Tracker comparison and setup pages redirect to Vigil and are omitted.
 */
export function renderLlmsFull(index: string): string {
  const blog = [...posts]
    .filter((post) => post.slug !== "pixel-tracker-launch-preview")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((post) =>
      section(post.title, `${BASE_URL}/blog/${post.slug}`, [
        post.tldr,
        post.body,
        post.faqs?.map((faq) => `### ${faq.q}\n\n${faq.a}`).join("\n\n"),
      ]),
    );

  return [
    index.trim(),
    "",
    "# Full page text",
    "",
    "The sections below are the remaining blog posts. Vigil is the app in development.",
    "",
    "# Blog",
    "",
    blog.join("\n\n"),
    "",
  ].join("\n");
}
