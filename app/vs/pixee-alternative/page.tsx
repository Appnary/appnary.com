import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";

export const metadata: Metadata = {
  title: "Pixel Tracker vs Pixee | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "How Pixel Tracker compares to Pixee for Shopify pixel tracking — platform support, feed sync features, and server-side tracking, compared honestly.",
  openGraph: {
    title: "Pixel Tracker vs Pixee",
    description:
      "Platform support and pricing: Pixel Tracker vs Pixee for Shopify.",
    url: "https://appnary.com/vs/pixee-alternative",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const featureRows = [
  { feature: "No theme code editing required", pixelTracker: true, competitor: true },
  { feature: "Facebook/Meta pixel", pixelTracker: true, competitor: true },
  { feature: "Google Ads tag", pixelTracker: true, competitor: false },
  { feature: "TikTok pixel", pixelTracker: true, competitor: true },
  { feature: "Snapchat pixel", pixelTracker: true, competitor: false },
  { feature: "Pinterest tag", pixelTracker: true, competitor: true },
  { feature: "LinkedIn Insight Tag", pixelTracker: true, competitor: false },
  { feature: "X (Twitter) pixel", pixelTracker: true, competitor: false },
  { feature: "Server-side event forwarding (CAPI / Events API) confirmed", pixelTracker: true, competitor: "varies" },
  { feature: "Free plan available", pixelTracker: true, competitor: true },
  { feature: "Product-feed sync + AI ad diagnostics bundled", pixelTracker: false, competitor: true },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "$0 (1 pixel)", competitor: "$0 (1 pixel)" },
  { plan: "Entry paid", pixelTracker: "$7/mo (3 pixels)", competitor: "$21/mo (Basic)" },
  { plan: "Top tier", pixelTracker: "$29/mo (unlimited pixels)", competitor: "$25/mo (AI Pro)" },
];

const faqs = [
  {
    q: "What does Pixee do beyond pixel tracking?",
    a: "It bundles product-feed sync and AI-assisted ad diagnostics for Meta and TikTok ads, in addition to installing pixels — more of a small ads toolkit than a pure pixel connector like Pixel Tracker.",
  },
  {
    q: "Does Pixee support Google Ads or Snapchat?",
    a: "No — Pixee covers Facebook, Instagram, TikTok, and Pinterest. Pixel Tracker additionally supports Google Ads, Snapchat, LinkedIn, and X (Twitter).",
  },
  {
    q: "Does Pixee support server-side tracking (CAPI)?",
    a: "It isn't clearly documented in Pixee's own marketing. Pixel Tracker explicitly supports Facebook Conversions API and TikTok Events API.",
  },
  {
    q: "Is Pixee cheaper than Pixel Tracker?",
    a: "Its paid plans ($21-25/mo) sit between Pixel Tracker's Starter ($7/mo) and Pro ($29/mo) tiers, but Pixee bundles extra feed-sync and AI features that Pixel Tracker doesn't include.",
  },
  {
    q: "Is Pixee a good fit if I just want simple pixel tracking?",
    a: "Probably not the best fit — its pricing reflects a bundle of feed-sync and AI diagnostics tools you'd be paying for even if you only want pixels installed. If pixel tracking alone is what you need, Pixel Tracker's $7/mo Starter plan is cheaper and covers more ad platforms.",
  },
];

const overview = [
  "Pixee is less a pure pixel connector and more a small Meta/TikTok ads toolkit — it bundles product-feed sync and AI-assisted ad diagnostics alongside pixel installation, on top of Facebook, Instagram, TikTok, and Pinterest tracking. Pixel Tracker focuses purely on getting more ad platforms' pixels firing reliably, without the extra ads-management tooling.",
  "That difference in scope shapes everything else: Pixee costs more at its paid tiers than Pixel Tracker's entry plan, covers fewer ad platforms, and doesn't clearly document whether its server-side CAPI support is confirmed. Pixel Tracker is narrower in feature scope but broader in platform coverage and explicit about its CAPI/Events API support.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "Pixee supports Facebook, Instagram, TikTok, and Pinterest. It doesn't support Google Ads, Snapchat, LinkedIn, or X (Twitter) — all four of which Pixel Tracker covers. A store running ads beyond Meta, TikTok, and Pinterest will hit a wall with Pixee.",
  },
  {
    title: "Product-feed sync and AI ad diagnostics",
    body: "This is Pixee's main differentiator: beyond installing pixels, it also syncs your product feed and offers AI-assisted diagnostics for ad performance issues. Pixel Tracker doesn't offer either of these — it's built to do one thing, pixel connection, rather than double as an ads-management tool.",
  },
  {
    title: "Server-side tracking (CAPI) — confirmed vs. unclear",
    body: "Pixel Tracker explicitly documents Facebook Conversions API and TikTok Events API support. Pixee's own marketing doesn't clearly confirm whether CAPI/server-side event forwarding is included, which matters for accurate conversion tracking as ad blockers and browser restrictions cut into client-side pixel data.",
  },
  {
    title: "Pricing shape",
    body: "Pixee has only two paid tiers — Basic at $21/mo and AI Pro at $25/mo — both sitting between Pixel Tracker's Starter ($7/mo) and Pro ($29/mo). There's no tier as cheap as Pixel Tracker's Starter, so a small store wanting just a couple of pixels pays considerably more on Pixee unless it stays on the free plan.",
  },
  {
    title: "Free plan",
    body: "Both apps offer a free plan covering one pixel, so testing either one costs nothing upfront. The gap opens up the moment a store needs to move past a single pixel.",
  },
];

const pricingNarrative = [
  "Pixee's paid tiers ($21-25/mo) sit well above Pixel Tracker's Starter tier ($7/mo) and closer to its Pro tier ($29/mo) — but Pixee bundles feed-sync and AI diagnostics into that price, which Pixel Tracker doesn't offer at any tier. A store that only wants pixel installation is paying for extra tooling it may not use.",
  "Both apps have a genuine free plan for one pixel, so the pricing gap only shows up once a store needs more than one pixel or platform.",
];

const chooseWhenPixelTracker = [
  "You need Google Ads, Snapchat, LinkedIn, or X pixel tracking",
  "You want confirmed, explicit CAPI/server-side tracking support",
  "You don't need feed-sync or AI ad diagnostics and want a cheaper entry-level plan",
];

const chooseWhenCompetitor = [
  "You want feed-sync and AI ad diagnostics bundled with pixel installation",
  "Your ad spend is limited to Facebook, Instagram, TikTok, and Pinterest",
  "You're fine paying $21-25/mo for the extra tooling on top of pixel tracking",
];

const verdict = [
  "Pixee is less a pure pixel connector and more a small Meta/TikTok ads toolkit — it bundles product-feed sync and AI-assisted ad diagnostics alongside pixel installation, features Pixel Tracker doesn't offer.",
  "In exchange, it covers fewer platforms (Facebook, Instagram, TikTok, and Pinterest only) and doesn't clearly document server-side CAPI support the way Pixel Tracker does.",
  "If you want the extra feed-sync/diagnostics tooling and only advertise on Meta, TikTok, and Pinterest, Pixee's bundle may be worth the $21-25/mo. If you need Google Ads, Snapchat, LinkedIn, or X pixel tracking, or want confirmed server-side event forwarding, Pixel Tracker covers that directly.",
];

export default function PixeeVsPage() {
  return (
    <VsGuide
      slug="pixee-alternative"
      competitorName="Pixee"
      competitorBlurb="Multi-pixel installer for Facebook, Instagram, TikTok, and Pinterest, bundled with product-feed sync and AI-assisted ad diagnostics."
      competitorPricing="Free – $25/mo"
      competitorBestFor="Stores that want product-feed sync and AI ad diagnostics bundled in with pixel installation, and only need Facebook, Instagram, TikTok, and Pinterest."
      competitorHref="https://apps.shopify.com/pixee-multi-facebook-pixels"
      positioning="Pixee bundles pixel installation with feed-sync and AI ad tools; Pixel Tracker focuses purely on getting more ad platforms' pixels firing reliably. Here's the honest trade-off."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={[
        "Supports Google Ads, Snapchat, LinkedIn, and X, which Pixee doesn't",
        "Server-side CAPI/Events API support is explicit and confirmed, not ambiguous",
      ]}
      pixelTrackerCons={["Doesn't bundle product-feed sync or AI ad diagnostics"]}
      competitorPros={[
        "Bundles product-feed sync and AI-assisted ad diagnostics on top of pixel installation — more of an all-in-one Meta/TikTok ads toolkit",
        "Free plan available",
      ]}
      competitorCons={[
        "Narrower platform coverage — no Google Ads, Snapchat, LinkedIn, or X",
        "Server-side (CAPI) support isn't clearly documented in its own marketing, unlike Pixel Tracker's explicit CAPI/Events API support",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
