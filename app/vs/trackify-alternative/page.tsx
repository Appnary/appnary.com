import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";

export const metadata: Metadata = {
  title: "Pixel Tracker vs Trackify | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "How Pixel Tracker compares to Trackify for Shopify pixel tracking — platform support, unlimited-pixel pricing, and reviews, compared honestly.",
  openGraph: {
    title: "Pixel Tracker vs Trackify",
    description:
      "Platform support, pricing, and reviews: Pixel Tracker vs Trackify for Shopify.",
    url: "https://appnary.com/vs/trackify-alternative",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const featureRows = [
  { feature: "No theme code editing required", pixelTracker: true, competitor: true },
  { feature: "Facebook/Meta pixel", pixelTracker: true, competitor: true },
  { feature: "Google Ads tag", pixelTracker: true, competitor: false },
  { feature: "TikTok pixel", pixelTracker: true, competitor: true },
  { feature: "Snapchat pixel", pixelTracker: true, competitor: true },
  { feature: "Pinterest tag", pixelTracker: true, competitor: false },
  { feature: "LinkedIn Insight Tag", pixelTracker: true, competitor: false },
  { feature: "X (Twitter) pixel", pixelTracker: true, competitor: false },
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: true, competitor: true },
  { feature: "Free plan with no order-volume cap", pixelTracker: true, competitor: false },
  { feature: "Unlimited pixels on every paid tier", pixelTracker: false, competitor: true },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "$0 (1 pixel)", competitor: "$0 (1 pixel, 15 orders/mo cap)" },
  { plan: "Entry paid", pixelTracker: "$7/mo (3 pixels)", competitor: "$8.99/mo (unlimited pixels)" },
  { plan: "Mid tier", pixelTracker: "$15/mo (10 pixels)", competitor: "$18.99/mo (unlimited pixels)" },
  { plan: "Top tier", pixelTracker: "$29/mo (unlimited pixels)", competitor: "$28.99/mo (unlimited pixels)" },
];

const faqs = [
  {
    q: "Does Trackify have unlimited pixels on cheaper plans?",
    a: "Yes — Trackify includes unlimited pixels on every paid tier starting at $8.99/mo. Pixel Tracker's pricing scales by pixel count, and unlimited pixels are only included on its $29/mo Pro plan.",
  },
  {
    q: "Does Trackify support Google Ads?",
    a: "No. Trackify covers Facebook/Meta, Instagram, TikTok, and Snapchat. Pixel Tracker additionally supports Google Ads, Pinterest, LinkedIn, and X (Twitter).",
  },
  {
    q: "Is Trackify's free plan unlimited?",
    a: "No — Trackify's free plan is capped at 15 orders per month in addition to a 1-pixel limit. Pixel Tracker's free plan has no order-volume cap.",
  },
  {
    q: "How established is Trackify?",
    a: "Very — it has 350 reviews on the Shopify App Store, the largest review base of any app compared in this series.",
  },
  {
    q: "What happens if my store exceeds Trackify's free-plan order cap?",
    a: "Once a store on Trackify's free plan crosses 15 orders per month, it needs to move to a paid tier, regardless of how many pixels it's actually using. Pixel Tracker's free plan doesn't cap order volume — only pixel count — so a high-order, single-pixel store can stay on it for free.",
  },
];

const overview = [
  "Trackify and Pixel Tracker both connect ad-platform pixels to Shopify with server-side event forwarding, but they make different trade-offs between platform breadth and pixel limits. Trackify has the largest review base of any app in this comparison — 350 reviews — and includes unlimited pixels starting at its lowest paid tier. Pixel Tracker covers more platforms but reserves unlimited pixels for its top $29/mo tier.",
  "The platforms each one supports barely overlap outside the big two: Trackify covers Facebook/Meta, Instagram, TikTok, and Snapchat, while Pixel Tracker adds Google Ads, Pinterest, LinkedIn, and X on top of Facebook/Meta, TikTok, and Snapchat. Which one wins depends on whether your priority is unlimited pixels at a lower price, or coverage across more ad platforms.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "Trackify covers Facebook/Meta, Instagram, TikTok, and Snapchat. It doesn't support Google Ads, Pinterest, LinkedIn, or X (Twitter) — all four of which Pixel Tracker supports. Instagram-specific tracking is one place Trackify is more explicit than Pixel Tracker, which tracks Facebook/Meta broadly.",
  },
  {
    title: "Unlimited pixels vs. tiered pixel counts",
    body: "This is the core structural difference: Trackify includes unlimited pixels on every paid tier, starting at $8.99/mo. Pixel Tracker ties pixel count to plan tier — 3 pixels on Starter, 10 on Growth, unlimited only on the $29/mo Pro plan. A store wanting many pixels on the four platforms Trackify covers can get unlimited pixels cheaper through Trackify.",
  },
  {
    title: "Free plan limits",
    body: "Trackify's free plan caps at 15 orders per month in addition to its 1-pixel limit — once a store crosses that order volume, it needs to upgrade regardless of how many pixels it's using. Pixel Tracker's free plan has no order-volume cap, only the 1-pixel limit.",
  },
  {
    title: "Review history",
    body: "350 reviews is the largest review base of any app in this comparison series, a strong signal of an established, widely-used product. Pixel Tracker is pre-launch and has no public reviews yet.",
  },
  {
    title: "Server-side tracking (CAPI / Events API)",
    body: "Both apps forward events server-side for the platforms they support, helping recover conversions lost to ad blockers and browser tracking restrictions. The meaningful difference remains which platforms each app's CAPI actually reaches, not the quality of the server-side implementation itself.",
  },
];

const pricingNarrative = [
  "Trackify's entry paid tier ($8.99/mo) already includes unlimited pixels, while Pixel Tracker's equivalent Starter tier ($7/mo) caps at 3 pixels — unlimited pixels on Pixel Tracker only arrive at the $29/mo Pro tier. For a store that wants many pixels across Trackify's four supported platforms, that's meaningfully cheaper.",
  "The free tiers differ in what they cap: Trackify limits free-plan stores to 15 orders per month regardless of pixel count, while Pixel Tracker's free plan has no order-volume limit at all — only the 1-pixel cap.",
];

const chooseWhenPixelTracker = [
  "You need Google Ads, Pinterest, LinkedIn, or X pixel tracking",
  "Your store's order volume would exceed Trackify's 15-orders/month free-plan cap",
  "You're fine with unlimited pixels being reserved for the top tier since you only need a handful of pixels",
];

const chooseWhenCompetitor = [
  "You only need Facebook/Meta, Instagram, TikTok, and Snapchat pixel tracking",
  "You want unlimited pixels without paying for the most expensive plan",
  "A large, established review base (350 reviews) matters to you",
];

const verdict = [
  "Trackify has the largest review base of any app in this comparison (350 reviews) and, unlike Pixel Tracker, includes unlimited pixels starting at its lowest paid tier ($8.99/mo) rather than only at the top tier.",
  "That's a genuine trade-off: if you only need Facebook/Meta, Instagram, TikTok, and Snapchat pixels but want several of them without paying for the top plan, Trackify's structure works in your favor.",
  "If you need Google Ads, Pinterest, LinkedIn, or X pixel tracking, Trackify doesn't support any of them — Pixel Tracker covers all seven platforms, though unlimited pixels are reserved for its $29/mo Pro plan.",
];

export default function TrackifyVsPage() {
  return (
    <VsGuide
      slug="trackify-alternative"
      competitorName="Trackify"
      competitorBlurb="Behavior tracking across Meta, Instagram, TikTok, and Snapchat with server-side APIs, and the largest review base of any comparable app."
      competitorPricing="Free (capped) – $28.99/mo"
      competitorBestFor="Stores wanting unlimited pixels on every paid tier, not just the top one, and willing to trade that for narrower platform coverage."
      competitorHref="https://apps.shopify.com/trackify-1"
      positioning="Both connect ad-platform pixels to Shopify without touching theme code. Here's how Trackify's unlimited-pixels-on-every-tier pricing compares to Pixel Tracker's broader platform coverage."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={[
        "Free plan has no order-volume cap (only a 1-pixel limit)",
        "Supports Google Ads, Pinterest, LinkedIn, and X, which Trackify doesn't",
      ]}
      pixelTrackerCons={[
        "Unlimited pixels only unlock at the top $29/mo Pro tier — Trackify includes unlimited pixels starting at its lowest paid tier ($8.99/mo)",
      ]}
      competitorPros={[
        "Largest review base of any app in this comparison (350 reviews)",
        "Unlimited pixels included on every paid tier, not just the most expensive one",
        "Lower entry paid price ($8.99/mo)",
      ]}
      competitorCons={[
        "Free plan caps at 15 orders/month, not just pixel count",
        "No Google Ads, Pinterest, LinkedIn, or X pixel support",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
