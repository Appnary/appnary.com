import type { MetadataRoute } from "next";

const AI_CRAWLER_USER_AGENTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extension",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: ["/", "/api/llms.txt"], disallow: "/api/" },
      { userAgent: AI_CRAWLER_USER_AGENTS, allow: ["/", "/api/llms.txt"], disallow: "/api/" },
    ],
    sitemap: "https://appnary.com/sitemap.xml",
  };
}
