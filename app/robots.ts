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

/**
 * Hammers sites and does not send customers. Disallow is not enforcement.
 * PetalBot was the heaviest AI crawler on appnary.com in the 7 days before
 * 1 Oct 2026 (101 allowed requests). Cloudflare blocks both of these.
 */
const BLOCKED_BOTS = ["Bytespider", "PetalBot"];

const TRAINING_CRAWL_DELAY_SECONDS = 10;

const ALLOWED_SIGNAL = "search=yes, ai-train=yes, ai-input=yes";
const BLOCKED_SIGNAL = "search=no, ai-train=no, ai-input=no";

export function renderRobotsTxt(): string {
  const data = robots();
  const rules = Array.isArray(data.rules) ? data.rules : [data.rules];
  let content = "";
  for (const rule of rules) {
    const userAgent = Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent];
    for (const agent of userAgent) content += `User-Agent: ${agent}\n`;
    const blocked = rule.disallow === "/" && rule.allow == null;
    content += `Content-Signal: ${blocked ? BLOCKED_SIGNAL : ALLOWED_SIGNAL}\n`;
    if (rule.allow) {
      const allow = Array.isArray(rule.allow) ? rule.allow : [rule.allow];
      for (const item of allow) content += `Allow: ${item}\n`;
    }
    if (rule.disallow) {
      const disallow = Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow];
      for (const item of disallow) content += `Disallow: ${item}\n`;
    }
    if (rule.crawlDelay) content += `Crawl-delay: ${rule.crawlDelay}\n`;
    content += "\n";
  }
  const sitemap = data.sitemap;
  if (sitemap) {
    const items = Array.isArray(sitemap) ? sitemap : [sitemap];
    for (const item of items) content += `Sitemap: ${item}\n`;
  }
  return content;
}

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
