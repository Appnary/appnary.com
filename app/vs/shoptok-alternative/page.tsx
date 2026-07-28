import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";

export const metadata: Metadata = {
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
};

const featureRows = [
  { feature: "No theme code editing required", pixelTracker: true, competitor: true },
  { feature: "Facebook/Meta pixel", pixelTracker: true, competitor: true },
  { feature: "Google Ads tag", pixelTracker: true, competitor: true },
  { feature: "TikTok pixel", pixelTracker: true, competitor: true },
  { feature: "Snapchat pixel", pixelTracker: true, competitor: false },
  { feature: "Pinterest tag", pixelTracker: true, competitor: false },
  { feature: "LinkedIn Insight Tag", pixelTracker: true, competitor: false },
  { feature: "X (Twitter) pixel", pixelTracker: true, competitor: false },
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: true, competitor: true },
  { feature: "Free plan available", pixelTracker: true, competitor: true },
  { feature: "Unlimited pixels across all supported platforms at entry paid tier", pixelTracker: false, competitor: false },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "$0 (1 pixel)", competitor: "$0 (1 pixel)" },
  { plan: "Entry paid", pixelTracker: "$7/mo (3 pixels)", competitor: "$9.99/mo (unlimited, 1 platform only)" },
  { plan: "Top tier", pixelTracker: "$29/mo (unlimited pixels)", competitor: "$19.99/mo (unlimited, all 3 platforms)" },
];

const faqs = [
  {
    q: "Does Shoptok support Snapchat or Pinterest?",
    a: "No — Shoptok covers Facebook/Meta, TikTok, and Google Ads only. Pixel Tracker additionally supports Snapchat, Pinterest, LinkedIn, and X (Twitter).",
  },
  {
    q: "How does Shoptok's pricing work?",
    a: "Its $9.99/mo Basic plan only includes unlimited pixels for one platform — you need the $19.99/mo Premium plan to get unlimited pixels across all three supported platforms.",
  },
  {
    q: "Is Shoptok cheaper than Pixel Tracker?",
    a: "For a single-platform store, Shoptok's $9.99/mo Basic plan is close to Pixel Tracker's $7/mo Starter tier. For full multi-platform coverage, Shoptok's $19.99/mo Premium plan is cheaper than Pixel Tracker's $29/mo Pro tier, but covers 4 fewer platforms.",
  },
  {
    q: "Does Shoptok have a free plan?",
    a: "Yes — a free plan covering one pixel, similar to Pixel Tracker's free tier.",
  },
  {
    q: "Does Shoptok's Basic plan cover all three platforms with unlimited pixels?",
    a: "No — the $9.99/mo Basic plan only unlocks unlimited pixels for one platform of your choice. To get unlimited pixels across Facebook, TikTok, and Google Ads together, you need the $19.99/mo Premium plan.",
  },
];

const overview = [
  "Shoptok is narrower in platform scope than Pixel Tracker — three platforms (Facebook, TikTok, Google Ads) versus seven — but it's also one of the few apps in this comparison series that includes Google Ads support at all. Its pricing has a structural quirk worth understanding before comparing the numbers directly.",
  "Both apps offer a free plan for one pixel and forward events server-side for accurate conversion tracking. The real decision point is whether Shoptok's narrower platform list, offset by Google Ads support and a well-rated track record, fits your ad mix better than Pixel Tracker's broader seven-platform coverage.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "Shoptok covers Facebook/Meta, TikTok, and Google Ads — no Snapchat, Pinterest, LinkedIn, or X (Twitter), all of which Pixel Tracker supports. Google Ads is the one platform most apps in this comparison series lack, and Shoptok is one of the few that includes it.",
  },
  {
    title: "Pricing quirk: single-platform vs. all-platform unlimited",
    body: "Shoptok's $9.99/mo Basic plan only unlocks unlimited pixels for one platform — a store needs the $19.99/mo Premium plan to get unlimited pixels across all three supported platforms. It's easy to assume Basic covers everything at that price, and it doesn't.",
  },
  {
    title: "App Store rating",
    body: "Shoptok holds a strong 4.8★ rating, a solid reliability signal within the three platforms it supports.",
  },
  {
    title: "Server-side tracking (CAPI / Events API)",
    body: "Both apps forward events server-side alongside the pixel, which helps recover conversions that ad blockers and browser privacy settings would otherwise hide from Facebook, TikTok, and Google Ads reporting.",
  },
  {
    title: "Free plan",
    body: "Both apps offer a free plan for one pixel. Shoptok's Basic and Premium tiers both cost less than Pixel Tracker's top Pro tier, but cover four fewer platforms.",
  },
];

const pricingNarrative = [
  "For a single-platform store, Shoptok's $9.99/mo Basic plan is close to Pixel Tracker's $7/mo Starter tier, though Basic only unlocks unlimited pixels for one of Shoptok's three platforms — not all of them. For full multi-platform coverage across all three, Shoptok's $19.99/mo Premium plan is cheaper than Pixel Tracker's $29/mo Pro tier, but covers four fewer platforms overall.",
  "Both apps have a free plan covering one pixel, so testing either one costs nothing upfront.",
];

const chooseWhenPixelTracker = [
  "You need Snapchat, Pinterest, LinkedIn, or X pixel tracking",
  "You want unlimited pixels across every platform you use, not just one",
  "You're comfortable with pricing that scales by pixel count rather than by platform",
];

const chooseWhenCompetitor = [
  "You only advertise on Facebook, TikTok, and Google Ads",
  "You want Google Ads support specifically, which most comparable apps lack",
  "A strong existing rating (4.8★) matters to you",
];

const verdict = [
  "Shoptok is narrower in scope than Pixel Tracker — three platforms (Facebook, TikTok, Google Ads) versus seven — but it's also one of the few apps in this comparison that includes Google Ads support at all.",
  "Its pricing has a quirk worth knowing: the $9.99/mo Basic plan only gives unlimited pixels for one platform, so multi-platform stores need the $19.99/mo Premium tier to get all three unlimited.",
  "If you only advertise on Facebook, TikTok, and Google, Shoptok is a reasonable, well-rated option. If you also use Snapchat, Pinterest, LinkedIn, or X, Pixel Tracker covers all seven from one dashboard.",
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
      positioning="Shoptok covers fewer platforms but includes Google Ads. Here's how its per-platform pricing quirk compares to Pixel Tracker's broader seven-platform coverage."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={[
        "Supports 4 more platforms (Snapchat, Pinterest, LinkedIn, X) than Shoptok's 3",
        "Unlimited-pixels pricing isn't restricted to a single platform at the entry paid tier",
      ]}
      pixelTrackerCons={[
        "Doesn't offer a single-platform discount tier the way Shoptok's $9.99 Basic plan does",
      ]}
      competitorPros={[
        "Free plan for live stores",
        "Basic plan ($9.99/mo) is cheaper if you only need one platform unlimited",
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
