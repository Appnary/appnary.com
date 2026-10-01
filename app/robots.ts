import type { MetadataRoute } from "next";

const PUBLIC_ALLOW = ["/", "/api/llms.txt"];
const API_DISALLOW = "/api/";

/** Bots that can cite Appnary when someone asks a question. No crawl delay. */
const CITATION_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Bingbot",
  "Googlebot",
  "Applebot",
  "Meta-ExternalFetcher",
];

/**
 * Bots allowed to learn from public pages. Crawl-delay is seconds between
 * hits and is only a request. Cloudflare rate limits are what stop a flood.
 */
const TRAINING_BOTS = [
  "GPTBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "Meta-ExternalAgent",
];

/** Hammers sites and does not send customers. Disallow is not enforcement. */
const BLOCKED_BOTS = ["Bytespider"];

const TRAINING_CRAWL_DELAY_SECONDS = 10;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: PUBLIC_ALLOW, disallow: API_DISALLOW },
      {
        userAgent: CITATION_BOTS,
        allow: PUBLIC_ALLOW,
        disallow: API_DISALLOW,
      },
      {
        userAgent: TRAINING_BOTS,
        allow: PUBLIC_ALLOW,
        disallow: API_DISALLOW,
        crawlDelay: TRAINING_CRAWL_DELAY_SECONDS,
      },
      { userAgent: BLOCKED_BOTS, disallow: "/" },
    ],
    sitemap: "https://appnary.com/sitemap.xml",
  };
}
