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
  { feature: "No theme code editing required", pixelTracker: true, competitor: true },
  { feature: "Facebook/Meta pixel", pixelTracker: true, competitor: true },
  { feature: "Google Ads tag", pixelTracker: true, competitor: false },
  { feature: "TikTok pixel", pixelTracker: true, competitor: true },
  { feature: "Snapchat pixel", pixelTracker: true, competitor: true },
  { feature: "Pinterest tag", pixelTracker: true, competitor: false },
  { feature: "LinkedIn Insight Tag", pixelTracker: true, competitor: false },
  { feature: "X (Twitter) pixel", pixelTracker: true, competitor: false },
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: true, competitor: true },
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
    a: "No. Trackify covers Facebook/Meta, Instagram, TikTok, and Snapchat. Pixel Tracker additionally supports Google Ads, Pinterest, LinkedIn, and X (Twitter).",
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
  "Trackify and Pixel Tracker both connect ad-platform pixels to Shopify with server-side event forwarding, but they make different trade-offs between platform breadth and pixel limits. Trackify has the largest review base of any app in this comparison — 350 reviews — and includes unlimited pixels starting at its lowest paid tier.",
  "The platforms each one supports barely overlap outside the big two: Trackify covers Facebook/Meta, Instagram, TikTok, and Snapchat, while Pixel Tracker adds Google Ads, Pinterest, LinkedIn, and X on top of Facebook/Meta, TikTok, and Snapchat. Which one wins depends on whether your priority is unlimited pixels in a currently available app, or waiting for broader planned platform coverage.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "Trackify covers Facebook/Meta, Instagram, TikTok, and Snapchat. It doesn't support Google Ads, Pinterest, LinkedIn, or X (Twitter) — all four of which Pixel Tracker supports. Instagram-specific tracking is one place Trackify is more explicit than Pixel Tracker, which tracks Facebook/Meta broadly.",
  },
  {
    title: "Review history",
    body: "350 reviews is the largest review base of any app in this comparison series, a strong signal of an established, widely-used product. Pixel Tracker is pre-launch and has no public reviews yet.",
  },
  {
    title: "Server-side tracking (CAPI / Events API)",
    body: "Both apps forward events server-side for the platforms they support, helping recover conversions lost to ad blockers and browser tracking restrictions. The meaningful difference remains which platforms each app's CAPI actually reaches, not the quality of the server-side implementation itself.",
  }
];

const pricingNarrative = ["Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify."];

const chooseWhenPixelTracker = [
  "You need Google Ads, Pinterest, LinkedIn, or X pixel tracking",
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
      positioning="Both connect ad-platform pixels to Shopify without touching theme code. Here's how Trackify's unlimited-pixels-on-every-tier pricing compares to Pixel Tracker's broader platform coverage."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={[
        "Supports Google Ads, Pinterest, LinkedIn, and X, which Trackify doesn't",
      ]}
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
