import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/vs/tixel-alternative", {
  title: "Pixel Tracker vs TiXel | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
  openGraph: {
    title: "Pixel Tracker vs TiXel",
    description:
      "Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
    url: "https://appnary.com/vs/tixel-alternative",
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
  { feature: "LinkedIn Insight Tag", pixelTracker: "Planned; not available", competitor: true },
  { feature: "X (Twitter) pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Reddit pixel", pixelTracker: false, competitor: true },
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: "Not confirmed", competitor: true },
  { feature: "Free plan for live stores", pixelTracker: "Not confirmed", competitor: false },
  { feature: "Pricing scales with number of pixels used", pixelTracker: "Not confirmed", competitor: false },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "Not confirmed", competitor: "Dev/partner stores only" },
  { plan: "Entry paid", pixelTracker: "Not confirmed", competitor: "—" },
  { plan: "Mid tier", pixelTracker: "Not confirmed", competitor: "—" },
  { plan: "Top tier", pixelTracker: "Not confirmed", competitor: "$19.99/mo (unlimited, all platforms)" },
];

const faqs = [
  {
    q: "Is Pixel Tracker cheaper than TiXel?",
    a: "Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify.",
  },
  {
    q: "Does TiXel have a free plan?",
    a: "TiXel lists a free tier, but it's restricted to development and partner stores — a live, published Shopify store needs the paid $19.99/mo plan.",
  },
  {
    q: "Which one supports more ad platforms?",
    a: "TiXel lists broad platform coverage. Pixel Tracker has an intended multi-platform scope, but none of its launch integrations should be treated as verified by this comparison.",
  },
  {
    q: "Can I switch from TiXel to Pixel Tracker?",
    a: "Not yet. Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
  },
  {
    q: "Is TiXel worth choosing just for its Reddit pixel support?",
    a: "If Reddit Ads is a meaningful part of your paid marketing, yes — it's the deciding factor, since no other app in this comparison series currently supports it. If Reddit isn't part of your mix, the two apps are otherwise close in capability, and the choice comes down to pricing shape instead.",
  },
];

const overview = [
  "Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
  "The practical difference between them comes down to two things: how many ad platforms each one covers, and how each charges for that coverage. TiXel supports the widest platform list of any app in this comparison series, including Reddit, but delivers it through a single flat-rate plan.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "Pixel Tracker targets multiple platforms, but its launch coverage is not verified. Choose an available app if you need working integrations today.",
  },
  {
    title: "Server-side tracking (CAPI / Events API)",
    body: "Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
  },
  {
    title: "Setup and switching cost",
    body: "Switching is really just re-entering your existing pixel IDs in the new app's dashboard and uninstalling the old one. Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
  }
];

const pricingNarrative = ["Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify."];

const chooseWhenPixelTracker = [
  "You are researching a future pixel-configuration app and can wait for launch.",
  "You will verify platform coverage and purchase events before replacing working tracking.",
];

const chooseWhenCompetitor = [
  "You need Reddit pixel tracking specifically — it's the only app in this comparison that supports it",
  "You run ads on most or all 7-8 supported platforms and want one flat monthly price instead of pixel-count tiers",
  "You'd rather not track which tier you're on as you add more platforms",
];

const verdict = [
  "Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified."
];

export default function TiXelVsPage() {
  return (
    <VsGuide
      slug="tixel-alternative"
      competitorName="TiXel"
      competitorBlurb="Multi-platform pixel installer with AI-assisted server-side tracking, supporting the widest platform list of any comparable app — including LinkedIn and Reddit."
      competitorPricing="$19.99/mo (no live-store free plan)"
      competitorBestFor="Stores that need Reddit pixel tracking alongside the standard platforms and prefer one flat-rate plan."
      competitorHref="https://apps.shopify.com/tixel"
      positioning="Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={["Planned focus on pixel configuration from one Shopify app"]}
      pixelTrackerCons={[
        "Doesn't support Reddit pixel tracking",
      ]}
      competitorPros={[
        "Widest platform coverage of any comparable app, including LinkedIn and Reddit",
        "AI-assisted setup for server-side tracking",
        "Single flat Unlimited plan is simple to reason about once you're on multiple platforms",
      ]}
      competitorCons={[
        "No usable free plan for live stores — the free tier is dev/partner-store only",
        "No pixel-count tiering, so a store using only 1-2 platforms pays the same $19.99/mo as one using all 9",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
