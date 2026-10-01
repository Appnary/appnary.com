import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/vs/shoptok-alternative", {
  title: "Pixel Tracker vs Shoptok | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "How Pixel Tracker compares to Shoptok for Shopify pixel tracking — Google Ads support, unlimited-pixel pricing, and platform coverage, compared honestly.",
  openGraph: {
    title: "Pixel Tracker vs Shoptok",
    description:
      "Platform support and pricing: Pixel Tracker vs Shoptok for Shopify.",
    url: "https://appnary.com/vs/shoptok-alternative",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
});

const featureRows = [
  { feature: "No theme code editing required", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Facebook/Meta pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Google Ads tag", pixelTracker: "Planned; not available", competitor: true },
  { feature: "TikTok pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Snapchat pixel", pixelTracker: "Planned; not available", competitor: false },
  { feature: "Pinterest tag", pixelTracker: "Planned; not available", competitor: false },
  { feature: "LinkedIn Insight Tag", pixelTracker: "Planned; not available", competitor: false },
  { feature: "X (Twitter) pixel", pixelTracker: "Planned; not available", competitor: false },
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: "Not confirmed", competitor: true },
  { feature: "Free plan available", pixelTracker: "Not confirmed", competitor: true },
  { feature: "Unlimited pixels across all supported platforms at entry paid tier", pixelTracker: "Not confirmed", competitor: false },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "Not confirmed", competitor: "$0 (1 pixel)" },
  { plan: "Entry paid", pixelTracker: "Not confirmed", competitor: "$9.99/mo (unlimited, 1 platform only)" },
  { plan: "Top tier", pixelTracker: "Not confirmed", competitor: "$19.99/mo (unlimited, all 3 platforms)" },
];

const faqs = [
  {
    q: "Does Shoptok support Snapchat or Pinterest?",
    a: "No — Shoptok covers Facebook/Meta, TikTok, and Google Ads only. Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
  },
  {
    q: "How does Shoptok's pricing work?",
    a: "Its $9.99/mo Basic plan only includes unlimited pixels for one platform — you need the $19.99/mo Premium plan to get unlimited pixels across all three supported platforms.",
  },
  {
    q: "Is Shoptok cheaper than Pixel Tracker?",
    a: "Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify.",
  },
  {
    q: "Does Shoptok have a free plan?",
    a: "Yes — a free plan covering one pixel.",
  },
  {
    q: "Does Shoptok's Basic plan cover all three platforms with unlimited pixels?",
    a: "No — the $9.99/mo Basic plan only unlocks unlimited pixels for one platform of your choice. To get unlimited pixels across Facebook, TikTok, and Google Ads together, you need the $19.99/mo Premium plan.",
  },
];

const overview = [
  "Pixel Tracker targets multiple platforms, but its launch coverage is not verified. Choose an available app if you need working integrations today.",
  "Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "Google Ads is the one platform most apps in this comparison series lack, and Shoptok is one of the few that includes it. Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
  },
  {
    title: "App Store rating",
    body: "Shoptok holds a strong 4.8★ rating, a solid reliability signal within the three platforms it supports.",
  },
  {
    title: "Server-side tracking (CAPI / Events API)",
    body: "Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
  }
];

const pricingNarrative = ["Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify."];

const chooseWhenPixelTracker = [
  "You are researching a future pixel-configuration app and can wait for launch.",
  "You will verify platform coverage and purchase events before replacing working tracking.",
];

const chooseWhenCompetitor = [
  "You only advertise on Facebook, TikTok, and Google Ads",
  "You want Google Ads support specifically, which most comparable apps lack",
  "A strong existing rating (4.8★) matters to you",
];

const verdict = [
  "Pixel Tracker targets multiple platforms, but its launch coverage is not verified. Choose an available app if you need working integrations today.",
  "If you only advertise on Facebook, TikTok, and Google, Shoptok is a reasonable, well-rated option. Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified."
];

export default function ShoptokVsPage() {
  return (
    <VsGuide
      slug="shoptok-alternative"
      competitorName="Shoptok"
      competitorBlurb="Facebook/Meta, TikTok, and Google Ads conversion tag tracking with a server-side API, one of the few comparable apps that covers Google Ads."
      competitorPricing="Free – $19.99/mo"
      competitorBestFor="Stores running only Facebook, TikTok, and Google Ads campaigns who want unlimited pixels once on a paid plan."
      competitorHref="https://apps.shopify.com/shoptok"
      positioning="Shoptok covers fewer platforms but includes Google Ads. Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={["Planned focus on pixel configuration from one Shopify app"]}
      pixelTrackerCons={[

      ]}
      competitorPros={[
        "Free plan for live stores",
        "Strong 4.8★ rating",
      ]}
      competitorCons={[
        "Only covers 3 platforms total (Facebook, TikTok, Google Ads) — no Snapchat, Pinterest, LinkedIn, or X",
        "Basic tier ($9.99/mo) only unlocks unlimited pixels for one platform, not all three — the $19.99/mo Premium plan is needed for full multi-platform coverage",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
