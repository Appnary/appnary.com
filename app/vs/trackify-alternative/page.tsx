import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/vs/trackify-alternative", {
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
});

const featureRows = [
  { feature: "No theme code editing required", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Facebook/Meta pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Google Ads tag", pixelTracker: "Planned; not available", competitor: false },
  { feature: "TikTok pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Snapchat pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Pinterest tag", pixelTracker: "Planned; not available", competitor: false },
  { feature: "LinkedIn Insight Tag", pixelTracker: "Planned; not available", competitor: false },
  { feature: "X (Twitter) pixel", pixelTracker: "Planned; not available", competitor: false },
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: "Not confirmed", competitor: true },
  { feature: "Free plan with no order-volume cap", pixelTracker: "Not confirmed", competitor: false },
  { feature: "Unlimited pixels on every paid tier", pixelTracker: "Not confirmed", competitor: true },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "Not confirmed", competitor: "$0 (1 pixel, 15 orders/mo cap)" },
  { plan: "Entry paid", pixelTracker: "Not confirmed", competitor: "$8.99/mo (unlimited pixels)" },
  { plan: "Mid tier", pixelTracker: "Not confirmed", competitor: "$18.99/mo (unlimited pixels)" },
  { plan: "Top tier", pixelTracker: "Not confirmed", competitor: "$28.99/mo (unlimited pixels)" },
];

const faqs = [
  {
    q: "Does Trackify have unlimited pixels on cheaper plans?",
    a: "Yes — Trackify includes unlimited pixels on every paid tier starting at $8.99/mo.",
  },
  {
    q: "Does Trackify support Google Ads?",
    a: "No. Trackify covers Facebook/Meta, Instagram, TikTok, and Snapchat. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  },
  {
    q: "Is Trackify's free plan unlimited?",
    a: "No — Trackify's free plan is capped at 15 orders per month in addition to a 1-pixel limit.",
  },
  {
    q: "How established is Trackify?",
    a: "Very — it has 350 reviews on the Shopify App Store, the largest review base of any app compared in this series.",
  },
  {
    q: "What happens if my store exceeds Trackify's free-plan order cap?",
    a: "Trackify requires a paid tier once the store exceeds its free-plan order cap, even if it still uses only one pixel. Check the current listing for limits before choosing a plan.",
  },
];

const overview = [
  "Trackify has the largest review base of any app in this comparison — 350 reviews — and includes unlimited pixels starting at its lowest paid tier. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  "Pixel Tracker targets multiple platforms, but its launch coverage is not verified. Choose an available app if you need working integrations today.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "Trackify covers Facebook/Meta, Instagram, TikTok, and Snapchat. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  },
  {
    title: "Review history",
    body: "350 reviews is the largest review base of any app in this comparison series, a strong signal of an established, widely-used product. Pixel Tracker is pre-launch and has no public reviews yet.",
  },
  {
    title: "Server-side tracking (CAPI / Events API)",
    body: "Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  }
];

const pricingNarrative = ["Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify."];

const chooseWhenPixelTracker = [
  "You are researching a future pixel-configuration app and can wait for launch.",
  "You will verify platform coverage and purchase events before replacing working tracking.",
];

const chooseWhenCompetitor = [
  "You only need Facebook/Meta, Instagram, TikTok, and Snapchat pixel tracking",
  "A large, established review base (350 reviews) matters to you"
];

const verdict = [
  "That's a genuine trade-off: if you only need Facebook/Meta, Instagram, TikTok, and Snapchat pixels but want several of them without paying for the top plan, Trackify's structure works in your favor."
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
      positioning="Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={["Planned focus on pixel configuration from one Shopify app"]}
      pixelTrackerCons={[

      ]}
      competitorPros={[
        "Largest review base of any app in this comparison (350 reviews)",
        "Unlimited pixels included on every paid tier, not just the most expensive one",
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
