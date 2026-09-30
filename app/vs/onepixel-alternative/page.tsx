import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/vs/onepixel-alternative", {
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
});

const featureRows = [
  { feature: "No theme code editing required", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Facebook/Meta pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Google Ads tag", pixelTracker: "Planned; not available", competitor: true },
  { feature: "TikTok pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Snapchat pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Pinterest tag", pixelTracker: "Planned; not available", competitor: true },
  { feature: "LinkedIn Insight Tag", pixelTracker: "Planned; not available", competitor: false },
  { feature: "X (Twitter) pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Microsoft/Bing Ads tag", pixelTracker: false, competitor: true },
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: "Not confirmed", competitor: true },
  { feature: "Pricing tiered by exact pixel count", pixelTracker: "Not confirmed", competitor: true },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "Not confirmed", competitor: "$0 (1 pixel)" },
  { plan: "Entry paid", pixelTracker: "Not confirmed", competitor: "$9.90/mo (3 pixels)" },
  { plan: "Mid tier", pixelTracker: "Not confirmed", competitor: "$19.90/mo (6 pixels)" },
  { plan: "Top tier", pixelTracker: "Not confirmed", competitor: "$29.90/mo (10 pixels)" },
];

const faqs = [
  {
    q: "How is OnePixel's pricing different from Pixel Tracker's?",
    a: "Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify.",
  },
  {
    q: "Does OnePixel support LinkedIn?",
    a: "No. OnePixel supports Facebook, Google Ads, TikTok, Snapchat, Pinterest, X (Twitter), and Microsoft/Bing Ads, but not LinkedIn's Insight Tag.",
  },
  {
    q: "Does Pixel Tracker support Microsoft/Bing Ads?",
    a: "Not currently. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  },
  {
    q: "Which is cheaper?",
    a: "Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify.",
  },
  {
    q: "Is OnePixel worth the extra cost if I only need Microsoft/Bing Ads support?",
    a: "Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify.",
  },
];

const overview = [
  "Compare the extra platforms each app supports. Pixel Tracker's launch prices are not confirmed yet.",
  "Everything else — Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, and X — is covered by both. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
];

const featureBreakdown = [
  {
    title: "Platform coverage: the one-for-one swap",
    body: "OnePixel includes Microsoft/Bing Ads. Pixel Tracker has a planned multi-platform scope, but its launch integrations are not verified. Check the available app against your actual ad mix.",
  },
  {
    title: "Server-side tracking (CAPI / Events API)",
    body: "Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  },
  {
    title: "Ease of switching",
    body: "When comparing the two, weigh whether Microsoft Ads or LinkedIn matters more to your campaigns. Pixel Tracker is prelaunch, so check availability before planning a switch.",
  }
];

const pricingNarrative = ["Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify."];

const chooseWhenPixelTracker = [
  "You are researching a future pixel-configuration app and can wait for launch.",
  "You will verify platform coverage and purchase events before replacing working tracking.",
];

const chooseWhenCompetitor = [
  "You run Microsoft/Bing Ads campaigns specifically",
  "You don't need LinkedIn tracking"
];

const verdict = [
  "Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
];

export default function OnePixelVsPage() {
  return (
    <VsGuide
      slug="onepixel-alternative"
      competitorName="OnePixel"
      competitorBlurb="Multi-platform pixel and CAPI dashboard with pixel-count-based pricing, plus Microsoft/Bing Ads support."
      competitorPricing="Free – $29.90/mo (10 pixels)"
      competitorBestFor="Stores that also run Microsoft/Bing Ads campaigns and want pixel-count-based pricing."
      competitorHref="https://apps.shopify.com/onepixel"
      positioning="Compare OnePixel's Microsoft Ads support with Pixel Tracker's planned LinkedIn support. Pixel Tracker's pricing will be confirmed at launch."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={["Planned focus on pixel configuration from one Shopify app"]}
      pixelTrackerCons={[
        "Doesn't support Microsoft/Bing Ads",
      ]}
      competitorPros={[
        "Supports Microsoft/Bing Ads, which Pixel Tracker doesn't",
        "Pricing structure is nearly identical to Pixel Tracker's, making it an easy like-for-like comparison",
      ]}
      competitorCons={[
        "No LinkedIn Insight Tag support",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
