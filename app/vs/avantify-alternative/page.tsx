import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/vs/avantify-alternative", {
  title: "Pixel Tracker vs Avantify | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
  openGraph: {
    title: "Pixel Tracker vs Avantify",
    description:
      "Platform support and pricing: Pixel Tracker vs Avantify for Shopify.",
    url: "https://appnary.com/vs/avantify-alternative",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
});

const featureRows = [
  { feature: "No theme code editing required", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Facebook/Meta pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Google Ads tag", pixelTracker: "Planned; not available", competitor: false },
  { feature: "TikTok pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Snapchat pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Pinterest tag", pixelTracker: "Planned; not available", competitor: true },
  { feature: "LinkedIn Insight Tag", pixelTracker: "Planned; not available", competitor: false },
  { feature: "X (Twitter) pixel", pixelTracker: "Planned; not available", competitor: true },
  { feature: "Server-side CAPI included at base price (no per-platform add-on fee)", pixelTracker: "Not confirmed", competitor: false },
  { feature: "Free plan available", pixelTracker: "Not confirmed", competitor: false },
  { feature: "Pricing based on number of pixels used", pixelTracker: "Not confirmed", competitor: false },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "Not confirmed", competitor: "Not available" },
  { plan: "Entry paid", pixelTracker: "Not confirmed", competitor: "$5.99/mo + CAPI add-ons" },
  { plan: "Mid tier", pixelTracker: "Not confirmed", competitor: "$8.99/mo + CAPI add-ons" },
  { plan: "Top tier", pixelTracker: "Not confirmed", competitor: "$12.99/mo + CAPI add-ons" },
];

const faqs = [
  {
    q: "Is Avantify cheaper than Pixel Tracker?",
    a: "Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify.",
  },
  {
    q: "Does Avantify have a free plan?",
    a: "No. Avantify's cheapest plan starts at $5.99/mo.",
  },
  {
    q: "Does Avantify support Google Ads?",
    a: "No — Avantify covers Meta, TikTok, Pinterest, Snapchat, and X. Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
  },
  {
    q: "How is Avantify's pricing structured?",
    a: "By Shopify plan tier rather than by pixel count, with add-on fees for extra CAPI integrations.",
  },
  {
    q: "How much would Avantify actually cost for a store running CAPI on three platforms?",
    a: "Roughly the base plan price plus $3/mo for each additional integration beyond the first — for example, a $5.99/mo base plan with CAPI enabled on three platforms would run closer to $11.99/mo. Pixel Tracker's launch prices and plan limits are not confirmed. Check its Shopify listing when available; billing will be through Shopify.",
  },
];

const overview = [
  "Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
  "Avantify's base price looks attractive at $5.99/mo, but that number doesn't include CAPI for more than the first platform integration — each additional server-side integration adds $3/mo. Pixel Tracker's launch prices and plan limits are not confirmed. Check its Shopify listing when available; billing will be through Shopify.",
];

const featureBreakdown = [
  {
    title: "CAPI add-on fees",
    body: "Avantify's advertised price only covers CAPI for one platform integration; each additional platform's server-side tracking costs an extra $3/mo. A store running CAPI for three platforms would pay noticeably more than the listed base price. Pixel Tracker's launch plan inclusions and prices are not confirmed.",
  },
  {
    title: "Platform coverage",
    body: "Avantify supports Meta, TikTok, Pinterest, Snapchat, and X. Neither app supports Reddit or Microsoft/Bing Ads. Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified.",
  },
  {
    title: "Total cost of ownership",
    body: "Because of the CAPI add-on structure, Avantify's real monthly cost depends heavily on how many platforms need server-side tracking enabled — a detail that's easy to miss when comparing base prices alone. Pixel Tracker's price comparison must wait for its confirmed launch terms.",
  }
];

const pricingNarrative = ["Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify."];

const chooseWhenPixelTracker = [
  "You are researching a future pixel-configuration app and can wait for launch.",
  "You will verify platform coverage and purchase events before replacing working tracking.",
];

const chooseWhenCompetitor = [
  "You only need CAPI for one platform and want the lowest possible entry price",
  "Your store is on a lower Shopify plan tier where Avantify's plan-based pricing works in your favor",
  "You don't need Google Ads or LinkedIn tracking",
];

const verdict = [
  "Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified."
];

export default function AvantifyVsPage() {
  return (
    <VsGuide
      slug="avantify-alternative"
      competitorName="Avantify"
      competitorBlurb="Server-side conversion tracking app focused on restoring lost Meta and TikTok ad data, priced by Shopify plan tier with per-integration CAPI add-ons."
      competitorPricing="$5.99 – $12.99/mo + CAPI add-ons"
      competitorBestFor="Stores wanting a low entry price who are comfortable paying extra per additional CAPI integration."
      competitorHref="https://apps.shopify.com/avantify-multi-pixels"
      positioning="Compare Avantify's CAPI fees with your integration needs. Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={["Planned focus on pixel configuration from one Shopify app"]}
      pixelTrackerCons={[
        "Still on the waitlist (not installable from the App Store yet)",
        "Meta CAPI and TikTok Events API are not confirmed",
      ]}
      competitorPros={[
        "Pricing tied to Shopify plan tier rather than pixel count may suit stores using many pixels on a Basic Shopify plan",
      ]}
      competitorCons={[
        "No free plan at all",
        "Charges an extra $3/mo per additional CAPI integration, so the real cost climbs with each platform you add server-side tracking for",
        "No Google Ads or LinkedIn support",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
