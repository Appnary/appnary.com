import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/vs/pixee-alternative", {
  title: "Pixel Tracker vs Pixee | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  openGraph: {
    title: "Pixel Tracker vs Pixee",
    description:
      "Platform support and pricing: Pixel Tracker vs Pixee for Shopify.",
    url: "https://appnary.com/vs/pixee-alternative",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
});

const featureRows = [
  { feature: "No theme code editing required", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Facebook/Meta pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Google Ads tag", pixelTracker: "Planned; not available", competitor: false },
  { feature: "TikTok pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Snapchat pixel", pixelTracker: "Planned; not available", competitor: false },
  { feature: "Pinterest tag", pixelTracker: "Planned; not available", competitor: true },
  { feature: "LinkedIn Insight Tag", pixelTracker: "Planned; not available", competitor: false },
  { feature: "X (Twitter) pixel", pixelTracker: "Planned; not available", competitor: false },
  { feature: "Server-side event forwarding (CAPI / Events API) confirmed", pixelTracker: "Not confirmed", competitor: "varies" },
  { feature: "Free plan available", pixelTracker: "Not confirmed", competitor: true },
  { feature: "Product-feed sync + AI ad diagnostics bundled", pixelTracker: false, competitor: true },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "Not confirmed", competitor: "$0 (1 pixel)" },
  { plan: "Entry paid", pixelTracker: "Not confirmed", competitor: "$21/mo (Basic)" },
  { plan: "Top tier", pixelTracker: "Not confirmed", competitor: "$25/mo (AI Pro)" },
];

const faqs = [
  {
    q: "What does Pixee do beyond pixel tracking?",
    a: "It bundles product-feed sync and AI-assisted ad diagnostics for Meta and TikTok ads, in addition to installing pixels — more of a small ads toolkit than a pure pixel connector like Pixel Tracker.",
  },
  {
    q: "Does Pixee support Google Ads or Snapchat?",
    a: "No — Pixee covers Facebook, Instagram, TikTok, and Pinterest. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  },
  {
    q: "Does Pixee support server-side tracking (CAPI)?",
    a: "It isn't clearly documented in Pixee's own marketing. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  },
  {
    q: "Is Pixee cheaper than Pixel Tracker?",
    a: "Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify.",
  },
  {
    q: "Is Pixee a good fit if I just want simple pixel tracking?",
    a: "Pixee bundles feed sync and AI ad diagnostics with pixel installation. If you only need pixels, check whether those extras are useful enough to justify its plan. Pixel Tracker focuses on pixel setup but is prelaunch, with pricing still unconfirmed.",
  },
];

const overview = [
  "Pixee is less a pure pixel connector and more a small Meta/TikTok ads toolkit — it bundles product-feed sync and AI-assisted ad diagnostics alongside pixel installation, on top of Facebook, Instagram, TikTok, and Pinterest tracking. Pixel Tracker focuses purely on getting more ad platforms' pixels firing reliably, without the extra ads-management tooling.",
  "That difference in scope shapes everything else: Pixee covers fewer ad platforms and doesn't clearly document whether its server-side CAPI support is confirmed. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "Pixee supports Facebook, Instagram, TikTok, and Pinterest. A store running ads beyond Meta, TikTok, and Pinterest will hit a wall with Pixee. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  },
  {
    title: "Product-feed sync and AI ad diagnostics",
    body: "This is Pixee's main differentiator: beyond installing pixels, it also syncs your product feed and offers AI-assisted diagnostics for ad performance issues. Pixel Tracker doesn't offer either of these — it's built to do one thing, pixel connection, rather than double as an ads-management tool.",
  },
  {
    title: "Server-side tracking: verify before choosing",
    body: "Pixee's own marketing doesn't clearly confirm whether CAPI/server-side event forwarding is included, which matters for accurate conversion tracking as ad blockers and browser restrictions cut into client-side pixel data. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  }
];

const pricingNarrative = ["Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify."];

const chooseWhenPixelTracker = [
  "You are researching a future pixel-configuration app and can wait for launch.",
  "You will verify platform coverage and purchase events before replacing working tracking.",
];

const chooseWhenCompetitor = [
  "You want feed-sync and AI ad diagnostics bundled with pixel installation",
  "Your ad spend is limited to Facebook, Instagram, TikTok, and Pinterest"
];

const verdict = [
  "Pixee is less a pure pixel connector and more a small Meta/TikTok ads toolkit — it bundles product-feed sync and AI-assisted ad diagnostics alongside pixel installation, features Pixel Tracker doesn't offer.",
  "Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
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
      pixelTrackerPros={["Planned focus on pixel configuration from one Shopify app"]}
      pixelTrackerCons={[

      ]}
      competitorPros={[
        "Bundles product-feed sync and AI-assisted ad diagnostics on top of pixel installation — more of an all-in-one Meta/TikTok ads toolkit",
        "Free plan available",
      ]}
      competitorCons={[
        "Narrower platform coverage — no Google Ads, Snapchat, LinkedIn, or X",
        "Pixee's marketing does not clearly document its server-side event coverage; check current provider documentation.",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
