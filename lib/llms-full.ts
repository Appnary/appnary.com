import { posts } from "@/content/blog/posts";
import { platformActionPages } from "@/content/platform-actions";
import { vsComparisonPages } from "@/content/vs-comparisons";
import { BASE_URL } from "@/lib/seo";

function section(title: string, url: string, blocks: Array<string | undefined>): string {
  const body = blocks.filter((block) => block && block.trim()).join("\n\n");
  return [`## ${title}`, url, "", body].join("\n");
}

function bullets(items: string[]): string {
  return items.map((item) => `- ${item}`).join("\n");
}

/**
 * Long form of the pages whose copy lives in the content modules.
 * Guides that are written only inside page components stay linked from llms.txt.
 */
export function renderLlmsFull(index: string): string {
  const blog = [...posts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((post) =>
      section(post.title, `${BASE_URL}/blog/${post.slug}`, [
        post.tldr,
        post.body,
        post.faqs?.map((faq) => `### ${faq.q}\n\n${faq.a}`).join("\n\n"),
      ]),
    );

  const comparisons = vsComparisonPages.map((page) =>
    section(page.h1, `${BASE_URL}/vs/${page.slug}`, [
      page.description,
      page.intro.join("\n\n"),
      [
        "### Quick comparison",
        ...page.quickComparison.map(
          (row) => `- ${row.feature}: Pixel Tracker — ${row.pixelTracker}. ${page.competitor} — ${row.competitor}.`,
        ),
      ].join("\n"),
      [
        "### Features",
        ...page.featureMatrix.map((row) => {
          const notes = row.notes ? ` ${row.notes}` : "";
          return `- ${row.feature}: Pixel Tracker — ${row.pixelTracker}. ${page.competitor} — ${row.competitor}.${notes}`;
        }),
      ].join("\n"),
      [
        "### Pricing",
        ...page.pricingBreakdown.map(
          (row) => `- ${row.plan}: Pixel Tracker — ${row.pixelTracker}. ${page.competitor} — ${row.competitor}.`,
        ),
      ].join("\n"),
      `### Choose Pixel Tracker\n\n${bullets(page.whoShouldChoose.choosePT)}`,
      `### Choose ${page.competitor}\n\n${bullets(page.whoShouldChoose.chooseCompetitor)}`,
      page.faqs.map((faq) => `### ${faq.q}\n\n${faq.a}`).join("\n\n"),
    ]),
  );

  const actions = platformActionPages.map((page) =>
    section(page.h1, `${BASE_URL}/pixel-tracker/${page.platformSlug}/${page.actionSlug}`, [
      page.description,
      page.intro.join("\n\n"),
      page.sections.map((block) => `### ${block.heading}\n\n${block.paragraphs.join("\n\n")}`).join("\n\n"),
      page.steps.length
        ? ["### Steps", ...page.steps.map((step, index) => `${index + 1}. **${step.title}.** ${step.body}`)].join("\n")
        : undefined,
      page.symptoms.length ? `### Symptoms\n\n${bullets(page.symptoms)}` : undefined,
      page.faqs.map((faq) => `### ${faq.q}\n\n${faq.a}`).join("\n\n"),
    ]),
  );

  return [
    index.trim(),
    "",
    "# Full page text",
    "",
    "The sections below are the blog posts, comparison pages, and platform action pages. Setup guides linked above stay on their own URLs.",
    "",
    "# Blog",
    "",
    blog.join("\n\n"),
    "",
    "# Comparisons",
    "",
    comparisons.join("\n\n"),
    "",
    "# Platform actions",
    "",
    actions.join("\n\n"),
    "",
  ].join("\n");
}
