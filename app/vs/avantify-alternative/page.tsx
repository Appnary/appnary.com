import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";

export const metadata: Metadata = {
  title: "Pixel Tracker vs Avantify | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "How Pixel Tracker compares to Avantify for Shopify pixel tracking — CAPI pricing, platform support, and free plan availability, compared honestly.",
  openGraph: {
    title: "Pixel Tracker vs Avantify",
    description:
      "Platform support and pricing: Pixel Tracker vs Avantify for Shopify.",
    url: "https://appnary.com/vs/avantify-alternative",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const featureRows = [
  { feature: "No theme code editing required", pixelTracker: true, competitor: true },
  { feature: "Facebook/Meta pixel", pixelTracker: true, competitor: true },
  { feature: "Google Ads tag", pixelTracker: true, competitor: false },
  { feature: "TikTok pixel", pixelTracker: true, competitor: true },
  { feature: "Snapchat pixel", pixelTracker: true, competitor: true },
  { feature: "Pinterest tag", pixelTracker: true, competitor: true },
  { feature: "LinkedIn Insight Tag", pixelTracker: true, competitor: false },
  { feature: "X (Twitter) pixel", pixelTracker: true, competitor: true },
  { feature: "Server-side CAPI included at base price (no per-platform add-on fee)", pixelTracker: true, competitor: false },
  { feature: "Free plan available", pixelTracker: true, competitor: false },
  { feature: "Pricing based on number of pixels used", pixelTracker: true, competitor: false },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "$0 (1 pixel)", competitor: "Not available" },
  { plan: "Entry paid", pixelTracker: "$7/mo (3 pixels)", competitor: "$5.99/mo + CAPI add-ons" },
  { plan: "Mid tier", pixelTracker: "$15/mo (10 pixels)", competitor: "$8.99/mo + CAPI add-ons" },
  { plan: "Top tier", pixelTracker: "$29/mo (unlimited pixels)", competitor: "$12.99/mo + CAPI add-ons" },
];

const faqs = [
  {
    q: "Is Avantify cheaper than Pixel Tracker?",
    a: "Its base price is lower ($5.99/mo vs $7/mo), but Avantify charges an extra $3/mo for each additional CAPI/server-side integration you enable, while Pixel Tracker includes server-side tracking in its regular pricing — so the real cost depends on how many platforms you enable CAPI for.",
  },
  {
    q: "Does Avantify have a free plan?",
    a: "No. Avantify's cheapest plan starts at $5.99/mo. Pixel Tracker offers a free plan covering one pixel.",
  },
  {
    q: "Does Avantify support Google Ads?",
    a: "No — Avantify covers Meta, TikTok, Pinterest, Snapchat, and X. It doesn't support Google Ads or LinkedIn, both of which Pixel Tracker supports.",
  },
  {
    q: "How is Avantify's pricing structured?",
    a: "By Shopify plan tier rather than by pixel count, with add-on fees for extra CAPI integrations — a different model than Pixel Tracker's flat per-pixel-count tiers.",
  },
  {
    q: "How much would Avantify actually cost for a store running CAPI on three platforms?",
    a: "Roughly the base plan price plus $3/mo for each additional integration beyond the first — for example, a $5.99/mo base plan with CAPI enabled on three platforms would run closer to $11.99/mo. Pixel Tracker's pricing doesn't change based on how many platforms have server-side tracking enabled.",
  },
];

const overview = [
  "Avantify and Pixel Tracker both offer server-side conversion tracking (CAPI) for Shopify stores, aimed at recovering ad data lost to browser tracking restrictions. The pricing philosophy is where they diverge sharply: Avantify prices by Shopify plan tier and charges extra per additional CAPI integration, while Pixel Tracker bundles server-side tracking into a flat per-pixel-count price with no add-on fees.",
  "Avantify's base price looks attractive at $5.99/mo, but that number doesn't include CAPI for more than the first platform integration — each additional server-side integration adds $3/mo. Pixel Tracker's pricing already includes CAPI/Events API support at every paid tier, so the sticker price is the real price.",
];

const featureBreakdown = [
  {
    title: "Pricing model: plan tier vs. pixel count",
    body: "Avantify charges based on which Shopify plan tier your store is on (Basic, Shopify, Advanced, etc.), not how many pixels or platforms you connect. Pixel Tracker charges based on pixel count regardless of Shopify plan. This matters most for a store on a higher Shopify plan running only one or two ad platforms — Avantify's plan-tier pricing may not reflect actual usage.",
  },
  {
    title: "CAPI add-on fees",
    body: "Avantify's advertised price only covers CAPI for one platform integration; each additional platform's server-side tracking costs an extra $3/mo. A store running CAPI for three platforms would pay noticeably more than the listed base price. Pixel Tracker includes Facebook CAPI and TikTok Events API in its regular pricing with no per-integration surcharge.",
  },
  {
    title: "Free plan availability",
    body: "Avantify has no free plan at all — its cheapest option starts at $5.99/mo. Pixel Tracker offers a genuine free plan covering one pixel, letting a merchant test the setup before paying anything.",
  },
  {
    title: "Platform coverage",
    body: "Avantify supports Meta, TikTok, Pinterest, Snapchat, and X. It doesn't support Google Ads or LinkedIn, both of which Pixel Tracker covers. Neither app supports Reddit or Microsoft/Bing Ads.",
  },
  {
    title: "Total cost of ownership",
    body: "Because of the CAPI add-on structure, Avantify's real monthly cost depends heavily on how many platforms need server-side tracking enabled — a detail that's easy to miss when comparing base prices alone. Pixel Tracker's listed price is the full price.",
  },
];

const pricingNarrative = [
  "On paper, Avantify's $5.99/mo entry price undercuts Pixel Tracker's $7/mo Starter plan. In practice, that price only includes CAPI for one platform — enabling server-side tracking for a second or third platform adds $3/mo each, which can push the real cost above Pixel Tracker's Starter tier depending on how many platforms you need server-side coverage for.",
  "Avantify also has no free plan, so there's no no-cost way to test it. Pixel Tracker's free plan covers one pixel indefinitely at no charge.",
];

const chooseWhenPixelTracker = [
  "You want CAPI/server-side tracking included in the base price with no per-integration fees",
  "You need Google Ads or LinkedIn pixel tracking",
  "You want to test the app on a genuine free plan before paying anything",
];

const chooseWhenCompetitor = [
  "You only need CAPI for one platform and want the lowest possible entry price",
  "Your store is on a lower Shopify plan tier where Avantify's plan-based pricing works in your favor",
  "You don't need Google Ads or LinkedIn tracking",
];

const verdict = [
  "Avantify's base price looks cheaper than Pixel Tracker's ($5.99/mo vs. $7/mo), but that comparison is misleading once you add server-side tracking: Avantify charges an extra $3/mo for each additional CAPI integration, while Pixel Tracker includes Facebook CAPI and TikTok Events API in its regular per-pixel pricing.",
  "Avantify also has no free plan at all, while Pixel Tracker's free tier covers one pixel at no cost.",
  "Avantify doesn't support Google Ads or LinkedIn at all — Pixel Tracker supports both, alongside Meta, TikTok, Snapchat, Pinterest, and X.",
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
      positioning="Both offer server-side event forwarding for ad platforms. Here's how Avantify's lower base price but per-integration CAPI fees compare to Pixel Tracker's flat, CAPI-included pricing."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={[
        "Has a genuine free plan; Avantify has none",
        "Server-side CAPI/Events API included at every paid tier, no per-integration add-on fee",
      ]}
      pixelTrackerCons={["Doesn't support Google Ads or LinkedIn"]}
      competitorPros={[
        "Lower base entry price ($5.99/mo)",
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
