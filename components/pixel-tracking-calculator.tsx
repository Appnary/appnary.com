"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type SetupKey = "diy" | "multiple" | "single" | "none";
type ServerSideKey = "yes" | "partial" | "no";

const PLATFORMS: { key: string; label: string }[] = [
  { key: "facebook", label: "Facebook / Meta" },
  { key: "google", label: "Google Ads" },
  { key: "tiktok", label: "TikTok" },
  { key: "snapchat", label: "Snapchat" },
  { key: "pinterest", label: "Pinterest" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "twitter", label: "X (Twitter)" },
];

const PLANS: { name: string; price: number; pixelCap: number }[] = [
  { name: "Free", price: 0, pixelCap: 1 },
  { name: "Starter", price: 7, pixelCap: 3 },
  { name: "Growth", price: 15, pixelCap: 10 },
  { name: "Pro", price: 29, pixelCap: Infinity },
];

const SETUP_OPTIONS: { key: SetupKey; label: string; points: number }[] = [
  { key: "diy", label: "DIY / theme code / GTM only", points: 10 },
  { key: "multiple", label: "Multiple Shopify pixel apps", points: 20 },
  { key: "single", label: "One multi-platform pixel app", points: 30 },
  { key: "none", label: "Not tracking yet", points: 0 },
];

const SERVER_SIDE_OPTIONS: {
  key: ServerSideKey;
  label: string;
  points: number;
  missedRange: [number, number];
}[] = [
  { key: "yes", label: "Yes, fully", points: 30, missedRange: [0, 3] },
  { key: "partial", label: "Partially", points: 15, missedRange: [5, 10] },
  { key: "no", label: "No", points: 0, missedRange: [10, 20] },
];

const COMPARISON_ROWS: {
  feature: string;
  diy: string;
  multiple: string;
  pixel: string;
}[] = [
  {
    feature: "Monthly cost",
    diy: "$0 (your time)",
    multiple: "$10-$50+/mo*",
    pixel: "$0-$29/mo",
  },
  {
    feature: "Platforms covered",
    diy: "One at a time, by hand",
    multiple: "One per app installed",
    pixel: "Up to 7 from one dashboard",
  },
  {
    feature: "Server-side tracking",
    diy: "Rare, needs custom dev work",
    multiple: "Varies by app",
    pixel: "Facebook CAPI + TikTok Events API",
  },
  {
    feature: "Theme edits required",
    diy: "Yes, manual code",
    multiple: "Sometimes, depends on the app",
    pixel: "No",
  },
];

function formatCurrency(value: number): string {
  return `$${Math.round(value).toLocaleString("en-US")}`;
}

export default function PixelTrackingCalculator() {
  const [adSpend, setAdSpend] = useState(5000);
  const [platforms, setPlatforms] = useState<Set<string>>(
    new Set(["facebook", "google", "tiktok"])
  );
  const [setup, setSetup] = useState<SetupKey>("multiple");
  const [serverSide, setServerSide] = useState<ServerSideKey>("partial");
  const [aov, setAov] = useState(60);
  const [orders, setOrders] = useState(200);

  const togglePlatform = (key: string) => {
    setPlatforms((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const results = useMemo(() => {
    const platformCount = platforms.size;
    const recommendedPlan =
      PLANS.find((p) => platformCount <= p.pixelCap) ?? PLANS[PLANS.length - 1];

    const setupOption = SETUP_OPTIONS.find((o) => o.key === setup)!;
    const serverSideOption = SERVER_SIDE_OPTIONS.find(
      (o) => o.key === serverSide
    )!;

    const platformScore = (platformCount / PLATFORMS.length) * 40;
    const coverageScore = Math.round(
      Math.min(100, platformScore + setupOption.points + serverSideOption.points)
    );

    const [missedPctLow, missedPctHigh] = serverSideOption.missedRange;
    const missedOrdersLow = Math.round((orders * missedPctLow) / 100);
    const missedOrdersHigh = Math.round((orders * missedPctHigh) / 100);

    const roas = adSpend > 0 && orders > 0 ? (orders * aov) / adSpend : null;

    return {
      platformCount,
      recommendedPlan,
      coverageScore,
      missedPctLow,
      missedPctHigh,
      missedOrdersLow,
      missedOrdersHigh,
      roas,
    };
  }, [platforms, setup, serverSide, adSpend, aov, orders]);

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-start">
        {/* Inputs */}
        <div className="rounded-2xl border border-border-themed bg-surface p-6 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-foreground">
            Your current setup
          </h2>

          <div className="mt-6">
            <label className="block text-sm font-medium text-foreground">
              Monthly ad spend
              <div className="mt-2 flex items-center rounded-lg border border-input-border bg-surface px-4 focus-within:border-aqua focus-within:ring-2 focus-within:ring-aqua/30">
                <span className="text-sm text-muted-foreground">$</span>
                <input
                  type="number"
                  min={0}
                  value={adSpend}
                  onChange={(e) => setAdSpend(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full bg-transparent px-2 py-2.5 text-sm text-foreground focus:outline-none"
                />
              </div>
            </label>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-foreground">
              Platforms you run ads on
            </p>
            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {PLATFORMS.map((platform) => (
                <label
                  key={platform.key}
                  className="flex items-center gap-2.5 rounded-lg border border-border-themed bg-surface px-3 py-2 text-sm text-foreground transition-colors hover:border-aqua/40"
                >
                  <input
                    type="checkbox"
                    checked={platforms.has(platform.key)}
                    onChange={() => togglePlatform(platform.key)}
                    className="h-4 w-4 accent-aqua"
                  />
                  {platform.label}
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-foreground">
              Current tracking setup
            </p>
            <div className="mt-3 space-y-2">
              {SETUP_OPTIONS.map((option) => (
                <label
                  key={option.key}
                  className="flex items-center gap-2.5 rounded-lg border border-border-themed bg-surface px-3 py-2 text-sm text-foreground transition-colors hover:border-aqua/40"
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
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-foreground">
              Server-side tracking today?
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVER_SIDE_OPTIONS.map((option) => (
                <label
                  key={option.key}
                  className="flex items-center gap-2 rounded-lg border border-border-themed bg-surface px-3 py-2 text-sm text-foreground transition-colors hover:border-aqua/40"
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
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-foreground">
              Average order value
              <span className="ml-1 font-normal text-muted-foreground-faint">
                (optional)
              </span>
              <div className="mt-2 flex items-center rounded-lg border border-input-border bg-surface px-4 focus-within:border-aqua focus-within:ring-2 focus-within:ring-aqua/30">
                <span className="text-sm text-muted-foreground">$</span>
                <input
                  type="number"
                  min={0}
                  value={aov}
                  onChange={(e) => setAov(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full bg-transparent px-2 py-2.5 text-sm text-foreground focus:outline-none"
                />
              </div>
            </label>
            <label className="block text-sm font-medium text-foreground">
              Estimated monthly orders
              <span className="ml-1 font-normal text-muted-foreground-faint">
                (optional)
              </span>
              <div className="mt-2 rounded-lg border border-input-border bg-surface px-4 focus-within:border-aqua focus-within:ring-2 focus-within:ring-aqua/30">
                <input
                  type="number"
                  min={0}
                  value={orders}
                  onChange={(e) => setOrders(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full bg-transparent px-2 py-2.5 text-sm text-foreground focus:outline-none"
                />
              </div>
            </label>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-5 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-aqua/30 bg-aqua/5 p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Recommended plan
            </p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-foreground">
                {results.recommendedPlan.name}
              </span>
              <span className="text-sm text-muted-foreground-strong">
                {results.recommendedPlan.price === 0
                  ? "Free"
                  : `${formatCurrency(results.recommendedPlan.price)}/mo`}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              Based on {results.platformCount} platform
              {results.platformCount === 1 ? "" : "s"} selected
            </p>

            <div className="mt-6">
              <div className="flex items-baseline justify-between">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Coverage score
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {results.coverageScore}/100
                </p>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-muted-themed">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-aqua to-lime transition-all"
                  style={{ width: `${results.coverageScore}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                How complete your tracking stack is, based on platform
                breadth, your current setup, and server-side coverage.
              </p>
            </div>

            {orders > 0 && (
              <div className="mt-6 rounded-lg border border-border-themed bg-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Estimated missed conversions
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {results.missedOrdersLow === results.missedOrdersHigh
                    ? `~${results.missedOrdersLow} orders/mo`
                    : `~${results.missedOrdersLow}-${results.missedOrdersHigh} orders/mo`}
                </p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Assumes {results.missedPctLow}-{results.missedPctHigh}% of
                  browser-only conversions go unreported due to ad blockers,
                  Safari ITP, and cookie loss. This is an educational
                  estimate, not a guarantee.
                </p>
              </div>
            )}

            {results.roas !== null && (
              <div className="mt-4 rounded-lg border border-border-themed bg-surface p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Blended ROAS helper
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {results.roas.toFixed(2)}x
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  (orders × average order value) / ad spend
                </p>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/#waitlist"
                className="inline-flex items-center justify-center rounded-lg bg-aqua px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-aqua/90"
              >
                Join the Waitlist
              </Link>
              <Link
                href="/pixel-tracker"
                className="inline-flex items-center justify-center rounded-lg border border-border-themed bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
              >
                See Pixel Tracker
              </Link>
            </div>
          </div>

          <details className="rounded-xl border border-border-themed bg-surface p-4 text-xs text-muted-foreground">
            <summary className="cursor-pointer font-medium text-foreground">
              How is the coverage score calculated?
            </summary>
            <ul className="mt-2 space-y-1 leading-relaxed">
              <li>Up to 40 points for how many of the 7 platforms you track</li>
              <li>Up to 30 points for your current setup type</li>
              <li>Up to 30 points for server-side tracking coverage</li>
            </ul>
          </details>
        </div>
      </div>

      {/* Setup comparison table */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold text-foreground">
          DIY vs multiple apps vs Pixel Tracker
        </h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border-themed bg-surface shadow-sm">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-section">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Feature
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  DIY / theme code
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Multiple pixel apps
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-foreground">
                  Pixel Tracker
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-themed">
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.feature}>
                  <td className="px-5 py-3 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground-strong">
                    {row.diy}
                  </td>
                  <td className="px-5 py-3 text-sm text-muted-foreground-strong">
                    {row.multiple}
                  </td>
                  <td className="bg-aqua/5 px-5 py-3 text-sm font-medium text-foreground">
                    {row.pixel}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-muted-foreground-faint">
          * Other paid app pricing is illustrative and varies by provider,
          not a quote from any specific competitor.
        </p>
      </div>
    </div>
  );
}
