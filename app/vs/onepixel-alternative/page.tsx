import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";

export const metadata: Metadata = {
  title: "Pixel Tracker vs OnePixel | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "How Pixel Tracker compares to OnePixel for Shopify pixel tracking — platform support, pixel-count pricing, and Microsoft Ads support, compared honestly.",
  openGraph: {
    title: "Pixel Tracker vs OnePixel",
    description:
      "Platform support and pricing: Pixel Tracker vs OnePixel for Shopify.",
    url: "https://appnary.com/vs/onepixel-alternative",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const featureRows = [
  { feature: "No theme code editing required", pixelTracker: true, competitor: true },
  { feature: "Facebook/Meta pixel", pixelTracker: true, competitor: true },
  { feature: "Google Ads tag", pixelTracker: true, competitor: true },
  { feature: "TikTok pixel", pixelTracker: true, competitor: true },
  { feature: "Snapchat pixel", pixelTracker: true, competitor: true },
  { feature: "Pinterest tag", pixelTracker: true, competitor: true },
  { feature: "LinkedIn Insight Tag", pixelTracker: true, competitor: false },
  { feature: "X (Twitter) pixel", pixelTracker: true, competitor: true },
  { feature: "Microsoft/Bing Ads tag", pixelTracker: false, competitor: true },
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: true, competitor: true },
  { feature: "Pricing tiered by exact pixel count", pixelTracker: true, competitor: true },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "$0 (1 pixel)", competitor: "$0 (1 pixel)" },
  { plan: "Entry paid", pixelTracker: "$7/mo (3 pixels)", competitor: "$9.90/mo (3 pixels)" },
  { plan: "Mid tier", pixelTracker: "$15/mo (10 pixels)", competitor: "$19.90/mo (6 pixels)" },
  { plan: "Top tier", pixelTracker: "$29/mo (unlimited pixels)", competitor: "$29.90/mo (10 pixels)" },
];

const faqs = [
  {
    q: "How is OnePixel's pricing different from Pixel Tracker's?",
    a: "Very similar — both charge by pixel count. OnePixel is $9.90/$19.90/$29.90 for 3/6/10 pixels; Pixel Tracker is $7/$15/$29 for 3/10/unlimited pixels, making it slightly cheaper at each matching tier.",
  },
  {
    q: "Does OnePixel support LinkedIn?",
    a: "No. OnePixel supports Facebook, Google Ads, TikTok, Snapchat, Pinterest, X (Twitter), and Microsoft/Bing Ads, but not LinkedIn's Insight Tag.",
  },
  {
    q: "Does Pixel Tracker support Microsoft/Bing Ads?",
    a: "Not currently. If Microsoft Ads pixel tracking is a requirement, OnePixel supports it and Pixel Tracker doesn't.",
  },
  {
    q: "Which is cheaper?",
    a: "Pixel Tracker, at every directly comparable tier — $7 vs $9.90, $15 vs $19.90, and $29 vs $29.90.",
  },
  {
    q: "Is OnePixel worth the extra cost if I only need Microsoft/Bing Ads support?",
    a: "If Microsoft/Bing Ads is a real part of your paid search mix, yes — it's the only app in this comparison that supports it, and the price difference (roughly $2-3/mo more per tier) is minor next to that capability. If you don't run Bing Ads, Pixel Tracker is cheaper at every matching tier with no trade-off.",
  },
];

const overview = [
  "OnePixel is the closest structural twin to Pixel Tracker of any app in this comparison — both price by exact pixel count, both offer a free tier for a single pixel, and both scale up through several paid tiers as pixel usage grows. The real differences are which two 'extra' platforms each one supports and how the numbers land tier by tier.",
  "OnePixel supports Microsoft/Bing Ads, which Pixel Tracker doesn't. Pixel Tracker supports LinkedIn's Insight Tag, which OnePixel doesn't. Everything else — Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, and X — is covered by both.",
];

const featureBreakdown = [
  {
    title: "Platform coverage: the one-for-one swap",
    body: "Both apps cover six identical platforms: Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, and X (Twitter). Beyond that, OnePixel adds Microsoft/Bing Ads while Pixel Tracker adds LinkedIn's Insight Tag. Which one you need depends entirely on whether your paid search runs through Bing or your B2B campaigns run through LinkedIn.",
  },
  {
    title: "Pricing structure",
    body: "Both apps use nearly identical tiering logic — a free plan for one pixel, then paid tiers that scale with exact pixel count. OnePixel's tiers are $9.90 for 3 pixels, $19.90 for 6 pixels, and $29.90 for 10 pixels. Pixel Tracker's are $7 for 3 pixels, $15 for 10 pixels, and $29 for unlimited — cheaper at every matching tier and unlocking more pixels per dollar at the top end.",
  },
  {
    title: "Server-side tracking (CAPI / Events API)",
    body: "Both apps support server-side event forwarding alongside the browser pixel, which is standard practice now for recovering conversions lost to ad blockers and privacy browser settings. Neither app differentiates meaningfully on CAPI quality — the decision comes down to platform coverage and price.",
  },
  {
    title: "Unlimited pixels",
    body: "Pixel Tracker's top Pro tier unlocks unlimited pixels for $29/mo. OnePixel's top tier caps at 10 pixels for $29.90/mo — slightly more expensive and without an unlimited option. A store that needs more than 10 pixels has no higher OnePixel tier to move to.",
  },
  {
    title: "Ease of switching",
    body: "Because the pricing models are so similar, moving between the two mostly means weighing whether Microsoft Ads or LinkedIn matters more to your campaigns — the actual switch is just re-entering pixel IDs via Shopify ScriptTags, no theme code involved.",
  },
];

const pricingNarrative = [
  "At every directly comparable tier, Pixel Tracker is cheaper: $7 vs. $9.90 for the entry tier, $15 vs. $19.90 for the mid tier, and $29 vs. $29.90 for the top tier. Pixel Tracker's top tier also includes unlimited pixels, while OnePixel's top tier caps at 10.",
  "Both apps offer the same free-tier shape — one pixel, no cost — making this one of the more apples-to-apples pricing comparisons in this series.",
];

const chooseWhenPixelTracker = [
  "You run LinkedIn campaigns and need the Insight Tag",
  "You want the cheaper price at every matching tier",
  "You expect to eventually need more than 10 pixels and want an unlimited option",
];

const chooseWhenCompetitor = [
  "You run Microsoft/Bing Ads campaigns specifically",
  "You don't need LinkedIn tracking",
  "The roughly $2-3/mo price difference across tiers isn't a deciding factor for you",
];

const verdict = [
  "OnePixel is the closest structural match to Pixel Tracker of any app in this comparison — both price by exact pixel count, with a free tier for one pixel and paid tiers that scale up from there.",
  "The real difference is platform coverage: OnePixel supports Microsoft/Bing Ads, which Pixel Tracker doesn't, but Pixel Tracker supports LinkedIn's Insight Tag, which OnePixel doesn't.",
  "At every matching tier, Pixel Tracker is slightly cheaper ($7/$15/$29 vs. OnePixel's $9.90/$19.90/$29.90) — the choice mostly comes down to whether Microsoft Ads or LinkedIn matters more to your campaigns.",
];

export default function OnePixelVsPage() {
  return (
    <VsGuide
      slug="onepixel-alternative"
      competitorName="OnePixel"
      competitorBlurb="Multi-platform pixel and CAPI dashboard with pixel-count-based pricing nearly identical to Pixel Tracker's, plus Microsoft/Bing Ads support."
      competitorPricing="Free – $29.90/mo (10 pixels)"
      competitorBestFor="Stores that also run Microsoft/Bing Ads campaigns and want pixel-count-based pricing similar to Pixel Tracker's."
      competitorHref="https://apps.shopify.com/onepixel"
      positioning="Both price by exact pixel count and inject pixels without theme code. Here's how OnePixel's Microsoft Ads support compares to Pixel Tracker's LinkedIn support and slightly lower pricing."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={[
        "Supports LinkedIn Insight Tag, which OnePixel doesn't",
        "Marginally cheaper at every matching tier ($7/$15/$29 vs. $9.90/$19.90/$29.90)",
      ]}
      pixelTrackerCons={["Doesn't support Microsoft/Bing Ads"]}
      competitorPros={[
        "Supports Microsoft/Bing Ads, which Pixel Tracker doesn't",
        "Pricing structure is nearly identical to Pixel Tracker's, making it an easy like-for-like comparison",
      ]}
      competitorCons={[
        "No LinkedIn Insight Tag support",
        "Every paid tier is slightly more expensive than Pixel Tracker's equivalent",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
