"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type SetupKey = "diy" | "multiple" | "single" | "none";
type ServerSideKey = "yes" | "partial" | "no";
type ConsentKey = "none" | "blocks" | "after";
type HelperKey = "yes" | "no" | "unsure";

type PlatformHit = {
  key: string;
  label: string;
  found: boolean;
  signals: string[];
  ids: string[];
};

type ScanResult = {
  url: string;
  status: number;
  hasShopifySignals: boolean;
  foundCount: number;
  platforms: PlatformHit[];
  notes: string[];
};

const PLATFORMS = [
  { key: "meta", label: "Meta / Facebook" },
  { key: "google", label: "Google Ads" },
  { key: "tiktok", label: "TikTok" },
  { key: "snapchat", label: "Snapchat" },
  { key: "pinterest", label: "Pinterest" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "twitter", label: "X (Twitter)" },
] as const;

const SETUP_OPTIONS: { key: SetupKey; label: string; score: number }[] = [
  { key: "single", label: "One multi-platform pixel app", score: 30 },
  { key: "multiple", label: "Multiple Shopify pixel apps", score: 18 },
  { key: "diy", label: "DIY / theme code / GTM only", score: 12 },
  { key: "none", label: "Not tracking yet", score: 0 },
];

const SERVER_OPTIONS: { key: ServerSideKey; label: string; score: number }[] = [
  { key: "yes", label: "Yes, fully", score: 25 },
  { key: "partial", label: "Partially", score: 12 },
  { key: "no", label: "No", score: 0 },
];

const CONSENT_OPTIONS: { key: ConsentKey; label: string; score: number }[] = [
  { key: "after", label: "Fires after consent (or no banner needed)", score: 15 },
  { key: "blocks", label: "Banner may block tags until accept", score: 5 },
  { key: "none", label: "No idea / not configured", score: 0 },
];

const HELPER_OPTIONS: { key: HelperKey; label: string; score: number }[] = [
  { key: "yes", label: "Yes, helpers show my pixel IDs", score: 20 },
  { key: "unsure", label: "Mixed / only some platforms", score: 8 },
  { key: "no", label: "No, helpers find nothing", score: 0 },
];

type FixItem = {
  severity: "high" | "medium" | "low";
  title: string;
  detail: string;
  href?: string;
  hrefLabel?: string;
};

function scoreColor(score: number): string {
  if (score >= 75) return "from-aqua to-lime";
  if (score >= 45) return "from-aqua/80 to-aqua";
  return "from-orange-400 to-red-400";
}

function scoreLabel(score: number): string {
  if (score >= 80) return "Healthy";
  if (score >= 60) return "Mostly ok";
  if (score >= 40) return "Needs work";
  return "At risk";
}

export default function PixelHealthCheck() {
  const [url, setUrl] = useState("");
  const [scanning, setScanning] = useState(false);
  const [scanError, setScanError] = useState("");
  const [scan, setScan] = useState<ScanResult | null>(null);

  const [platforms, setPlatforms] = useState<Set<string>>(
    new Set(["meta", "google"]),
  );
  const [setup, setSetup] = useState<SetupKey>("multiple");
  const [serverSide, setServerSide] = useState<ServerSideKey>("no");
  const [consent, setConsent] = useState<ConsentKey>("none");
  const [helper, setHelper] = useState<HelperKey>("unsure");
  const [purchasePage, setPurchasePage] = useState<HelperKey>("unsure");

  const togglePlatform = (key: string) => {
    setPlatforms((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const runScan = async () => {
    setScanning(true);
    setScanError("");
    setScan(null);
    try {
      const res = await fetch("/api/pixel-health-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (!res.ok) {
        setScanError(data.error || "Scan failed.");
      } else {
        setScan(data as ScanResult);
      }
    } catch {
      setScanError("Network error while scanning. Try again.");
    } finally {
      setScanning(false);
    }
  };

  const results = useMemo(() => {
    const setupScore = SETUP_OPTIONS.find((o) => o.key === setup)?.score ?? 0;
    const serverScore =
      SERVER_OPTIONS.find((o) => o.key === serverSide)?.score ?? 0;
    const consentScore =
      CONSENT_OPTIONS.find((o) => o.key === consent)?.score ?? 0;
    const helperScore = HELPER_OPTIONS.find((o) => o.key === helper)?.score ?? 0;
    const purchaseScore =
      HELPER_OPTIONS.find((o) => o.key === purchasePage)?.score ?? 0;
    const platformScore = Math.min(10, platforms.size * 2);

    let score = Math.round(
      setupScore +
        serverScore +
        consentScore +
        helperScore +
        purchaseScore +
        platformScore,
    );

    // Soft boost/penalty from live scan
    if (scan) {
      const claimed = platforms.size;
      const foundAmongClaimed = scan.platforms.filter(
        (p) => platforms.has(p.key) && p.found,
      ).length;
      if (claimed > 0) {
        const ratio = foundAmongClaimed / claimed;
        if (ratio >= 0.7) score = Math.min(100, score + 8);
        else if (ratio === 0) score = Math.max(0, score - 12);
        else score = Math.max(0, score - 4);
      }
    }

    score = Math.max(0, Math.min(100, score));

    const fixes: FixItem[] = [];

    if (helper === "no") {
      fixes.push({
        severity: "high",
        title: "Browser helpers are not seeing your pixels",
        detail:
          "Install each platform helper, disable ad blockers for a test tab, and reload a product page. If nothing appears, the tag is not loading on that template.",
        href: "/pixel-tracker/meta-pixel/troubleshooting",
        hrefLabel: "Meta troubleshooting",
      });
    }

    if (serverSide === "no" && platforms.has("meta")) {
      fixes.push({
        severity: "high",
        title: "Turn on Meta Conversions API (or equivalent server-side)",
        detail:
          "Browser-only Meta pixels miss a chunk of iOS and ad-blocked traffic. Server-side events recover match rate without replacing the browser pixel.",
        href: "/pixel-tracker/meta-pixel/server-side",
        hrefLabel: "Meta server-side guide",
      });
    }

    if (serverSide === "no" && platforms.has("tiktok")) {
      fixes.push({
        severity: "medium",
        title: "Add TikTok Events API if you spend on TikTok",
        detail:
          "TikTok's Events API pairs with the browser pixel the same way Meta CAPI does. Partial coverage still leaves holes on blocked browsers.",
        href: "/pixel-tracker/tiktok-pixel/server-side",
        hrefLabel: "TikTok server-side guide",
      });
    }

    if (setup === "multiple") {
      fixes.push({
        severity: "medium",
        title: "Multiple pixel apps can double-fire events",
        detail:
          "Two apps sending the same Purchase event inflate platform-reported ROAS. Prefer one multi-platform installer, or disable overlapping tags.",
        href: "/tools/pixel-tracking-calculator",
        hrefLabel: "Cost & coverage calculator",
      });
    }

    if (setup === "diy") {
      fixes.push({
        severity: "medium",
        title: "Theme-code installs break on theme updates",
        detail:
          "Hard-coded theme pixels are easy to lose during redesigns. An app-based installer keeps tags outside theme files.",
        href: "/pixel-tracker",
        hrefLabel: "Pixel Tracker overview",
      });
    }

    if (consent === "blocks" || consent === "none") {
      fixes.push({
        severity: "medium",
        title: "Confirm consent mode is not silently blocking tags",
        detail:
          "Some consent banners delay or block marketing tags until accept. Test both before and after consent, and make sure purchase events still fire when allowed.",
      });
    }

    if (purchasePage === "no" || purchasePage === "unsure") {
      fixes.push({
        severity: "high",
        title: "Verify Purchase / conversion on the thank-you page",
        detail:
          "PageView on the homepage is not enough. Complete a test order (or use platform test-event tools) and confirm the purchase event with value and currency.",
        href: platforms.has("google")
          ? "/pixel-tracker/google-ads/events"
          : "/pixel-tracker/meta-pixel/events",
        hrefLabel: "Events reference",
      });
    }

    if (platforms.size === 0) {
      fixes.push({
        severity: "high",
        title: "Select the platforms you actually advertise on",
        detail:
          "Health checks only matter for channels with spend. Start with the 1-3 platforms that drive most orders.",
      });
    }

    if (scan && scan.foundCount === 0) {
      fixes.push({
        severity: "high",
        title: "Live HTML scan found no common pixel snippets",
        detail:
          "The homepage HTML had no Meta, Google, TikTok, Snapchat, Pinterest, LinkedIn, or X pixel signals. Tags may load later via JS, only on other templates, or not at all.",
        href: "/pixel-tracker/meta-pixel/troubleshooting",
        hrefLabel: "Start troubleshooting",
      });
    }

    if (scan) {
      for (const p of scan.platforms) {
        if (platforms.has(p.key) && !p.found) {
          fixes.push({
            severity: "medium",
            title: `${p.label} not detected in homepage HTML`,
            detail:
              "You said you run this platform, but the initial HTML scan did not find its usual scripts. Check the app dashboard, theme app embeds, and a product page with the platform helper.",
            href: `/pixel-tracker/${
              p.key === "meta"
                ? "meta-pixel"
                : p.key === "google"
                  ? "google-ads"
                  : p.key === "twitter"
                    ? "twitter-pixel"
                    : `${p.key}-pixel`
            }/troubleshooting`,
            hrefLabel: `${p.label} troubleshooting`,
          });
        }
      }
    }

    // de-dupe by title
    const seen = new Set<string>();
    const uniqueFixes = fixes.filter((f) => {
      if (seen.has(f.title)) return false;
      seen.add(f.title);
      return true;
    });

    uniqueFixes.sort((a, b) => {
      const rank = { high: 0, medium: 1, low: 2 };
      return rank[a.severity] - rank[b.severity];
    });

    return { score, fixes: uniqueFixes.slice(0, 8) };
  }, [
    setup,
    serverSide,
    consent,
    helper,
    purchasePage,
    platforms,
    scan,
  ]);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div className="space-y-6">
        <div className="rounded-2xl border border-border-themed bg-surface p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">
            1. Optional live storefront scan
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Paste a public storefront URL. We fetch the HTML server-side and look
            for common pixel snippets. Client-side-only or consent-gated tags may
            not show up.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://your-store.com"
              className="w-full rounded-lg border border-input-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-input-placeholder focus:border-aqua focus:outline-none focus:ring-2 focus:ring-aqua/30"
            />
            <button
              type="button"
              onClick={runScan}
              disabled={scanning || !url.trim()}
              className="shrink-0 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-opacity disabled:opacity-50 dark:bg-aqua dark:text-ink"
            >
              {scanning ? "Scanning…" : "Scan URL"}
            </button>
          </div>
          {scanError && (
            <p className="mt-3 text-sm text-red-600 dark:text-red-400">{scanError}</p>
          )}
          {scan && (
            <div className="mt-5 rounded-xl border border-border-themed bg-section p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Scan result
              </p>
              <p className="mt-1 text-sm text-foreground">
                {scan.foundCount} platform signal
                {scan.foundCount === 1 ? "" : "s"} on{" "}
                <span className="break-all font-medium">{scan.url}</span>
              </p>
              {scan.hasShopifySignals && (
                <p className="mt-1 text-xs text-muted-foreground">
                  Shopify signals detected on the page.
                </p>
              )}
              <ul className="mt-3 space-y-2">
                {scan.platforms.map((p) => (
                  <li
                    key={p.key}
                    className="flex items-start justify-between gap-3 text-sm"
                  >
                    <span className="text-foreground">{p.label}</span>
                    <span
                      className={
                        p.found
                          ? "shrink-0 font-medium text-emerald-600 dark:text-emerald-400"
                          : "shrink-0 text-muted-foreground"
                      }
                    >
                      {p.found
                        ? p.ids.length
                          ? `Found (${p.ids[0]})`
                          : "Found"
                        : "Not found"}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {scan.notes[0]}
              </p>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-border-themed bg-surface p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">
            2. Quick setup checklist
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Answer from how your store works today. Results update live.
          </p>

          <div className="mt-6">
            <p className="text-sm font-medium text-foreground">
              Platforms you run ads on
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {PLATFORMS.map((p) => {
                const active = platforms.has(p.key);
                return (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => togglePlatform(p.key)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                      active
                        ? "border-aqua/50 bg-aqua/10 text-foreground"
                        : "border-border-themed bg-background text-muted-foreground hover:border-aqua/30"
                    }`}
                  >
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-foreground">
              Current setup
            </legend>
            <div className="mt-3 space-y-2">
              {SETUP_OPTIONS.map((option) => (
                <label
                  key={option.key}
                  className="flex items-center gap-2 rounded-lg border border-border-themed bg-background px-3 py-2 text-sm text-foreground"
                >
                  <input
                    type="radio"
                    name="setup"
                    checked={setup === option.key}
                    onChange={() => setSetup(option.key)}
                    className="h-4 w-4 accent-aqua"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-foreground">
              Server-side tracking today?
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVER_OPTIONS.map((option) => (
                <label
                  key={option.key}
                  className="flex items-center gap-2 rounded-lg border border-border-themed bg-background px-3 py-2 text-sm text-foreground"
                >
                  <input
                    type="radio"
                    name="serverSide"
                    checked={serverSide === option.key}
                    onChange={() => setServerSide(option.key)}
                    className="h-4 w-4 accent-aqua"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-foreground">
              Cookie / consent banner
            </legend>
            <div className="mt-3 space-y-2">
              {CONSENT_OPTIONS.map((option) => (
                <label
                  key={option.key}
                  className="flex items-center gap-2 rounded-lg border border-border-themed bg-background px-3 py-2 text-sm text-foreground"
                >
                  <input
                    type="radio"
                    name="consent"
                    checked={consent === option.key}
                    onChange={() => setConsent(option.key)}
                    className="h-4 w-4 accent-aqua"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-foreground">
              Do browser pixel helpers see your tags?
            </legend>
            <div className="mt-3 space-y-2">
              {HELPER_OPTIONS.map((option) => (
                <label
                  key={option.key}
                  className="flex items-center gap-2 rounded-lg border border-border-themed bg-background px-3 py-2 text-sm text-foreground"
                >
                  <input
                    type="radio"
                    name="helper"
                    checked={helper === option.key}
                    onChange={() => setHelper(option.key)}
                    className="h-4 w-4 accent-aqua"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-foreground">
              Have you confirmed Purchase / conversion events?
            </legend>
            <div className="mt-3 space-y-2">
              {HELPER_OPTIONS.map((option) => (
                <label
                  key={`purchase-${option.key}`}
                  className="flex items-center gap-2 rounded-lg border border-border-themed bg-background px-3 py-2 text-sm text-foreground"
                >
                  <input
                    type="radio"
                    name="purchase"
                    checked={purchasePage === option.key}
                    onChange={() => setPurchasePage(option.key)}
                    className="h-4 w-4 accent-aqua"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </div>

      <div className="space-y-5 lg:sticky lg:top-24">
        <div className="rounded-2xl border border-aqua/30 bg-aqua/5 p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Health score
          </p>
          <div className="mt-2 flex items-baseline gap-3">
            <span className="text-4xl font-bold text-foreground">
              {results.score}
            </span>
            <span className="text-sm font-medium text-muted-foreground-strong">
              / 100 · {scoreLabel(results.score)}
            </span>
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-muted-themed">
            <div
              className={`h-2 rounded-full bg-gradient-to-r ${scoreColor(results.score)} transition-all`}
              style={{ width: `${results.score}%` }}
            />
          </div>
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Educational score from your checklist
            {scan ? " plus the optional HTML scan" : ""}. It is not a full
            attribution audit.
          </p>
        </div>

        <div className="rounded-2xl border border-border-themed bg-surface p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">
            Priority fixes
          </h2>
          {results.fixes.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">
              Looking solid from these answers. Still verify Purchase events in
              each ads manager after the next test order.
            </p>
          ) : (
            <ul className="mt-4 space-y-4">
              {results.fixes.map((fix) => (
                <li
                  key={fix.title}
                  className="rounded-xl border border-border-themed bg-section p-4"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                        fix.severity === "high"
                          ? "bg-red-500/10 text-red-600 dark:text-red-400"
                          : fix.severity === "medium"
                            ? "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                            : "bg-muted-themed text-muted-foreground"
                      }`}
                    >
                      {fix.severity}
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {fix.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {fix.detail}
                  </p>
                  {fix.href && (
                    <Link
                      href={fix.href}
                      className="mt-2 inline-block text-sm font-medium text-aqua hover:underline"
                    >
                      {fix.hrefLabel || "Learn more"} →
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-col gap-3 border-t border-border-themed pt-5 sm:flex-row">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white dark:bg-aqua dark:text-ink"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/tools/pixel-tracking-calculator"
              className="inline-flex items-center justify-center rounded-lg border border-border-themed bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:border-aqua/40"
            >
              Cost calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
