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
    a: "Not currently. If Microsoft Ads pixel tracking is a requirement, OnePixel supports it and Pixel Tracker doesn't.",
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
  "OnePixel supports Microsoft/Bing Ads, which Pixel Tracker doesn't. Pixel Tracker supports LinkedIn's Insight Tag, which OnePixel doesn't. Everything else — Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, and X — is covered by both.",
];

const featureBreakdown = [
  {
    title: "Platform coverage: the one-for-one swap",
    body: "Both apps cover six identical platforms: Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, and X (Twitter). Beyond that, OnePixel adds Microsoft/Bing Ads while Pixel Tracker adds LinkedIn's Insight Tag. Which one you need depends entirely on whether your paid search runs through Bing or your B2B campaigns run through LinkedIn.",
  },
  {
    title: "Server-side tracking (CAPI / Events API)",
    body: "Both apps support server-side event forwarding alongside the browser pixel, which is standard practice now for recovering conversions lost to ad blockers and privacy browser settings. Neither app differentiates meaningfully on CAPI quality — the decision comes down to platform coverage and price.",
  },
  {
    title: "Ease of switching",
    body: "When comparing the two, weigh whether Microsoft Ads or LinkedIn matters more to your campaigns. Pixel Tracker is prelaunch, so check availability before planning a switch.",
  }
];

const pricingNarrative = ["Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify."];

const chooseWhenPixelTracker = [
  "You run LinkedIn campaigns and need the Insight Tag",
];

const chooseWhenCompetitor = [
  "You run Microsoft/Bing Ads campaigns specifically",
  "You don't need LinkedIn tracking"
];

const verdict = [
  "The real difference is platform coverage: OnePixel supports Microsoft/Bing Ads, which Pixel Tracker doesn't, but Pixel Tracker supports LinkedIn's Insight Tag, which OnePixel doesn't."
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
      pixelTrackerPros={[
        "Supports LinkedIn Insight Tag, which OnePixel doesn't",
      ]}
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
