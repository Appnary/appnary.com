import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";

export const metadata: Metadata = {
  title: "Pixel Tracker vs TiXel | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "How Pixel Tracker compares to TiXel for Shopify pixel tracking — platform support, server-side tracking, and pricing, compared honestly.",
  openGraph: {
    title: "Pixel Tracker vs TiXel",
    description:
      "Platform support, server-side tracking, and pricing: Pixel Tracker vs TiXel for Shopify.",
    url: "https://appnary.com/vs/tixel-alternative",
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
  { feature: "LinkedIn Insight Tag", pixelTracker: true, competitor: true },
  { feature: "X (Twitter) pixel", pixelTracker: true, competitor: true },
  { feature: "Reddit pixel", pixelTracker: false, competitor: true },
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: true, competitor: true },
  { feature: "Free plan for live stores", pixelTracker: true, competitor: false },
  { feature: "Pricing scales with number of pixels used", pixelTracker: true, competitor: false },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "$0 (1 pixel)", competitor: "Dev/partner stores only" },
  { plan: "Entry paid", pixelTracker: "$7/mo (3 pixels)", competitor: "—" },
  { plan: "Mid tier", pixelTracker: "$15/mo (10 pixels)", competitor: "—" },
  { plan: "Top tier", pixelTracker: "$29/mo (unlimited pixels)", competitor: "$19.99/mo (unlimited, all platforms)" },
];

const faqs = [
  {
    q: "Is Pixel Tracker cheaper than TiXel?",
    a: "For a store using only 1-3 platforms, yes — Pixel Tracker's Free and Starter plans ($0-$7/mo) cost less than TiXel's single $19.99/mo Unlimited plan. For a store using most or all supported platforms, TiXel's flat plan can work out cheaper than Pixel Tracker's Pro tier.",
  },
  {
    q: "Does TiXel have a free plan?",
    a: "TiXel lists a free tier, but it's restricted to development and partner stores — a live, published Shopify store needs the paid $19.99/mo plan. Pixel Tracker's free plan (1 pixel) works on live stores.",
  },
  {
    q: "Which one supports more ad platforms?",
    a: "TiXel supports one more platform than Pixel Tracker: Reddit. Both support Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, LinkedIn, and X (Twitter).",
  },
  {
    q: "Can I switch from TiXel to Pixel Tracker?",
    a: "Yes. Both apps inject pixels via Shopify ScriptTags rather than theme code, so switching is a matter of re-entering your existing pixel IDs in Pixel Tracker's dashboard and uninstalling the other app.",
  },
  {
    q: "Is TiXel worth choosing just for its Reddit pixel support?",
    a: "If Reddit Ads is a meaningful part of your paid marketing, yes — it's the deciding factor, since no other app in this comparison series currently supports it. If Reddit isn't part of your mix, the two apps are otherwise close in capability, and the choice comes down to pricing shape instead.",
  },
];

const overview = [
  "TiXel and Pixel Tracker solve the same basic problem for Shopify merchants: getting ad-platform tracking pixels installed and firing reliably without editing theme code or hiring a developer. Both apps use Shopify's ScriptTag API to inject pixel code automatically, and both support server-side event forwarding so conversions still get counted when browser-based tracking is blocked by ad blockers or Safari's Intelligent Tracking Prevention.",
  "The practical difference between them comes down to two things: how many ad platforms each one covers, and how each charges for that coverage. TiXel supports the widest platform list of any app in this comparison series, including Reddit, but delivers it through a single flat-rate plan. Pixel Tracker covers one platform fewer but prices by how many pixels you actually use, with a genuine free tier for stores running just one.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "TiXel and Pixel Tracker cover the same seven core platforms — Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, LinkedIn, and X (Twitter) — but TiXel adds an eighth: Reddit. If Reddit Ads is part of your marketing mix, TiXel is currently the only app in this comparison series that can install that pixel for you.",
  },
  {
    title: "Pricing model",
    body: "TiXel runs on a single $19.99/mo Unlimited plan regardless of how many platforms or pixels you connect. Pixel Tracker instead tiers by pixel count — Free (1 pixel), Starter ($7/mo, 3 pixels), Growth ($15/mo, 10 pixels), and Pro ($29/mo, unlimited) — so the fairer price depends on how many platforms you're actually running.",
  },
  {
    title: "Free plan availability",
    body: "TiXel lists a free tier, but it's restricted to Shopify development and partner stores — a live, published store has to be on the $19.99/mo plan from day one. Pixel Tracker's free plan works on live stores, covering one pixel at no cost, which matters for a merchant who wants to test a single Facebook pixel before committing to a paid plan.",
  },
  {
    title: "Server-side tracking (CAPI / Events API)",
    body: "Both apps forward conversion events server-side in addition to the browser pixel, which is what keeps ad platforms' conversion data accurate as third-party cookies and ad blockers erode client-side tracking. TiXel markets this as AI-assisted setup, aimed at reducing manual configuration steps; Pixel Tracker's server-side forwarding covers Facebook CAPI and TikTok Events API without a separate AI layer.",
  },
  {
    title: "Setup and switching cost",
    body: "Because both apps inject pixels via Shopify ScriptTags rather than editing theme files, moving from one to the other doesn't require a developer or a theme rollback. Switching is really just re-entering your existing pixel IDs in the new app's dashboard and uninstalling the old one.",
  },
];

const pricingNarrative = [
  "The pricing comparison only tells the full story once you know how many platforms you're actually using. A store running one or two ad platforms pays $0-$7/mo on Pixel Tracker's Free or Starter plans — well under TiXel's flat $19.99/mo. A store running most or all 7-8 supported platforms is closer to Pixel Tracker's $29/mo Pro tier, at which point TiXel's flat rate becomes the cheaper option.",
  "The other factor is the free plan: TiXel's is unusable for a live store, so a merchant testing the waters has to commit to $19.99/mo immediately. Pixel Tracker lets a single-pixel setup run at no cost indefinitely.",
];

const chooseWhenPixelTracker = [
  "You only run ads on 1-3 platforms and don't want to pay a flat unlimited-tier price for capacity you're not using",
  "You want to test a single pixel setup on a free plan before committing to a paid tier",
  "You don't need Reddit pixel tracking",
];

const chooseWhenCompetitor = [
  "You need Reddit pixel tracking specifically — it's the only app in this comparison that supports it",
  "You run ads on most or all 7-8 supported platforms and want one flat monthly price instead of pixel-count tiers",
  "You'd rather not track which tier you're on as you add more platforms",
];

const verdict = [
  "If you need Reddit pixel tracking specifically, TiXel is the only app in this comparison that supports it — that's a real, concrete reason to choose it over Pixel Tracker.",
  "If you don't need Reddit, the choice mostly comes down to pricing shape. Pixel Tracker's tiers scale with how many pixels you actually use, so a store running one or two ad platforms pays less on Free or Starter than TiXel's single $19.99/mo Unlimited plan. A store running most or all 7-9 supported platforms may find TiXel's flat pricing simpler and, at that scale, cheaper.",
  "Both apps install pixels via Shopify ScriptTags with no theme code editing, and both offer server-side event forwarding, so the core reliability story is similar between them.",
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
      positioning="Both connect ad-platform pixels to Shopify without touching theme code. Here's how TiXel's broader platform list and flat pricing compares to Pixel Tracker's tiered, pay-for-what-you-use plans."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={[
        "Genuine free plan for live stores (1 pixel)",
        "Pricing tiers scale with pixel count, so a store using 1-3 platforms doesn't overpay",
        "Simple flat monthly pricing per tier, no order-volume caps",
      ]}
      pixelTrackerCons={["Doesn't support Reddit pixel tracking"]}
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
