import { NextResponse } from "next/server";

export const runtime = "nodejs";

type PlatformHit = {
  key: string;
  label: string;
  found: boolean;
  signals: string[];
  ids: string[];
};

const PLATFORM_CHECKS: {
  key: string;
  label: string;
  patterns: { label: string; regex: RegExp }[];
  idPatterns: RegExp[];
}[] = [
  {
    key: "meta",
    label: "Meta / Facebook Pixel",
    patterns: [
      { label: "fbq()", regex: /\bfbq\s*\(/i },
      { label: "connect.facebook.net", regex: /connect\.facebook\.net/i },
      { label: "facebook-pixel", regex: /facebook[-_]?pixel/i },
    ],
    idPatterns: [
      /fbq\s*\(\s*['"]init['"]\s*,\s*['"](\d{10,20})['"]/i,
      /fbq\s*\(\s*['"]track['"][^)]*['"](\d{10,20})['"]/i,
    ],
  },
  {
    key: "google",
    label: "Google Ads / gtag",
    patterns: [
      { label: "gtag()", regex: /\bgtag\s*\(/i },
      { label: "googletagmanager.com", regex: /googletagmanager\.com/i },
      { label: "googleadservices.com", regex: /googleadservices\.com/i },
      { label: "AW- conversion ID", regex: /\bAW-\d{6,}/i },
    ],
    idPatterns: [/\b(AW-\d{6,12})\b/g, /\b(G-[A-Z0-9]{6,})\b/g],
  },
  {
    key: "tiktok",
    label: "TikTok Pixel",
    patterns: [
      { label: "ttq", regex: /\bttq\b/i },
      { label: "analytics.tiktok.com", regex: /analytics\.tiktok\.com/i },
    ],
    idPatterns: [
      /ttq\.load\s*\(\s*['"]([A-Z0-9]{10,})['"]/i,
      /pixel_code['"]?\s*[:=]\s*['"]([A-Z0-9]{10,})['"]/i,
    ],
  },
  {
    key: "snapchat",
    label: "Snapchat Pixel",
    patterns: [
      { label: "snaptr", regex: /\bsnaptr\s*\(/i },
      { label: "sc-static.net", regex: /sc-static\.net/i },
    ],
    idPatterns: [/snaptr\s*\(\s*['"]init['"]\s*,\s*['"]([a-f0-9-]{10,})['"]/i],
  },
  {
    key: "pinterest",
    label: "Pinterest Tag",
    patterns: [
      { label: "pintrk", regex: /\bpintrk\s*\(/i },
      { label: "s.pinimg.com", regex: /s\.pinimg\.com\/ct/i },
    ],
    idPatterns: [/pintrk\s*\(\s*['"]load['"]\s*,\s*['"](\d{5,})['"]/i],
  },
  {
    key: "linkedin",
    label: "LinkedIn Insight Tag",
    patterns: [
      { label: "_linkedin_partner_id", regex: /_linkedin_partner_id/i },
      { label: "snap.licdn.com", regex: /snap\.licdn\.com/i },
    ],
    idPatterns: [/_linkedin_partner_id\s*=\s*['"](\d+)['"]/i],
  },
  {
    key: "twitter",
    label: "X / Twitter Pixel",
    patterns: [
      { label: "twq(", regex: /\btwq\s*\(/i },
      { label: "static.ads-twitter.com", regex: /static\.ads-twitter\.com/i },
    ],
    idPatterns: [/twq\s*\(\s*['"]config['"]\s*,\s*['"]([a-z0-9]{5,})['"]/i],
  },
];

function normalizeUrl(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;
  try {
    const withProtocol = /^https?:\/\//i.test(trimmed)
      ? trimmed
      : `https://${trimmed}`;
    const url = new URL(withProtocol);
    if (!["http:", "https:"].includes(url.protocol)) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function extractIds(html: string, patterns: RegExp[]): string[] {
  const ids = new Set<string>();
  for (const pattern of patterns) {
    const flags = pattern.flags.includes("g") ? pattern.flags : `${pattern.flags}g`;
    const re = new RegExp(pattern.source, flags);
    let match: RegExpExecArray | null;
    while ((match = re.exec(html)) !== null) {
      if (match[1]) ids.add(match[1]);
    }
  }
  return Array.from(ids).slice(0, 5);
}

export async function POST(request: Request) {
  let body: { url?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const url = normalizeUrl(body.url || "");
  if (!url) {
    return NextResponse.json(
      { error: "Enter a valid storefront URL (https://your-store.com)." },
      { status: 400 },
    );
  }

  let html = "";
  let finalUrl = url;
  let status = 0;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    const res = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: {
        "User-Agent":
          "AppnaryPixelHealthCheck/1.0 (+https://appnary.com/tools/pixel-health-check)",
        Accept: "text/html,application/xhtml+xml",
      },
      cache: "no-store",
    });
    clearTimeout(timeout);
    status = res.status;
    finalUrl = res.url || url;
    const contentType = res.headers.get("content-type") || "";
    if (!contentType.includes("text/html") && !contentType.includes("application/xhtml")) {
      // Still try to read; some stores return odd content-types
    }
    html = await res.text();
    // Cap memory
    if (html.length > 1_500_000) {
      html = html.slice(0, 1_500_000);
    }
  } catch (err) {
    const message =
      err instanceof Error && err.name === "AbortError"
        ? "Timed out fetching that URL. Try again or check the storefront is public."
        : "Could not fetch that URL. Make sure the storefront is publicly reachable.";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  if (status >= 400) {
    return NextResponse.json(
      {
        error: `Storefront returned HTTP ${status}. The page may require login or be blocked.`,
        url: finalUrl,
        status,
      },
      { status: 502 },
    );
  }

  const platforms: PlatformHit[] = PLATFORM_CHECKS.map((check) => {
    const signals = check.patterns
      .filter((p) => p.regex.test(html))
      .map((p) => p.label);
    const ids = extractIds(html, check.idPatterns);
    return {
      key: check.key,
      label: check.label,
      found: signals.length > 0 || ids.length > 0,
      signals,
      ids,
    };
  });

  const foundCount = platforms.filter((p) => p.found).length;
  const hasShopify =
    /cdn\.shopify\.com/i.test(html) ||
    /Shopify\.theme/i.test(html) ||
    /myshopify\.com/i.test(html);

  return NextResponse.json({
    url: finalUrl,
    status,
    hasShopifySignals: hasShopify,
    foundCount,
    platforms,
    notes: [
      "This scan reads the initial HTML only. Pixels injected later by JavaScript, GTM, or consent tools may not appear.",
      "A missing pixel here is a clue, not proof the store never fires it on other pages (cart, checkout, thank-you).",
      "Always confirm with each platform's browser helper and Events Manager / Ads diagnostics.",
    ],
  });
}
