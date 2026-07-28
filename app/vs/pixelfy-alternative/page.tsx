import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";

export const metadata: Metadata = {
  title: "Pixel Tracker vs Pixelfy | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "How Pixel Tracker compares to Pixelfy for Shopify pixel tracking — platform support, flat-rate pricing, and Taboola support, compared honestly.",
  openGraph: {
    title: "Pixel Tracker vs Pixelfy",
    description:
      "Platform support and pricing: Pixel Tracker vs Pixelfy for Shopify.",
    url: "https://appnary.com/vs/pixelfy-alternative",
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
  { feature: "X (Twitter) pixel", pixelTracker: true, competitor: false },
  { feature: "Taboola pixel", pixelTracker: false, competitor: true },
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: true, competitor: true },
  { feature: "Free plan available", pixelTracker: true, competitor: false },
  { feature: "Pricing tiers that scale down for smaller stores", pixelTracker: true, competitor: false },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "$0 (1 pixel)", competitor: "Not available" },
  { plan: "Only plan", pixelTracker: "—", competitor: "$7.99/mo (all pixels)" },
  { plan: "Entry paid", pixelTracker: "$7/mo (3 pixels)", competitor: "—" },
  { plan: "Top tier", pixelTracker: "$29/mo (unlimited pixels)", competitor: "—" },
];

const faqs = [
  {
    q: "Is Pixelfy cheaper than Pixel Tracker?",
    a: "Its single plan is $7.99/mo, close to Pixel Tracker's $7/mo Starter tier, but Pixelfy has no free plan while Pixel Tracker does.",
  },
  {
    q: "Does Pixelfy support Google Ads?",
    a: "No — Pixelfy covers Facebook, TikTok, Snapchat, Pinterest, and Taboola. Pixel Tracker additionally supports Google Ads, LinkedIn, and X (Twitter), though not Taboola.",
  },
  {
    q: "How is Pixelfy rated on the Shopify App Store?",
    a: "3.9★ across 39 reviews — the lowest rating among the apps compared in this series, though still a real, established app.",
  },
  {
    q: "Does Pixel Tracker support Taboola?",
    a: "Not currently. If Taboola pixel tracking is a specific requirement, Pixelfy supports it and Pixel Tracker doesn't.",
  },
  {
    q: "Should a lower App Store rating rule out Pixelfy?",
    a: "Not necessarily — 3.9★ across 39 reviews is still a real, working app, just with more mixed feedback than some competitors in this space. If Taboola support or its flat unlimited-pixel pricing matters to you, it's worth weighing against that rating rather than dismissing it outright.",
  },
];

const overview = [
  "Pixelfy runs a single flat-rate plan — $7.99/mo for unlimited pixels — covering Facebook, TikTok, Snapchat, Pinterest, and Taboola. Pixel Tracker covers a different, broader mix (Facebook, Google Ads, TikTok, Snapchat, Pinterest, LinkedIn, and X) through tiered pricing that starts free.",
  "The two apps make almost opposite bets: Pixelfy trades platform breadth for one simple price with unlimited pixels included from day one, while Pixel Tracker trades pricing simplicity for wider platform coverage and a free entry point. Pixelfy is also the only app in this comparison series that supports Taboola.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "Pixelfy covers Facebook, TikTok, Snapchat, Pinterest, and Taboola. It doesn't support Google Ads, LinkedIn, or X (Twitter), all of which Pixel Tracker supports. Taboola is Pixelfy's one differentiator no other app in this series offers.",
  },
  {
    title: "Pricing simplicity vs. free tier",
    body: "Pixelfy's single $7.99/mo plan includes unlimited pixels with no tiers to think about, but there's no free option — you pay from day one. Pixel Tracker's free plan covers one pixel at no cost, with paid tiers scaling up to $29/mo for unlimited pixels.",
  },
  {
    title: "App Store rating",
    body: "Pixelfy holds a 3.9★ average across 39 reviews — the lowest rating among the apps compared in this series, though still a real, established app with a meaningful review sample.",
  },
  {
    title: "Server-side tracking (CAPI)",
    body: "Pixelfy includes CAPI support alongside its pixel installation for the platforms it covers. Pixel Tracker's server-side forwarding covers Facebook CAPI and TikTok Events API specifically, included at every paid tier.",
  },
  {
    title: "Best fit by platform mix",
    body: "If Taboola is part of your media mix, or you specifically want one flat unlimited price with no free tier to worry about, Pixelfy's model is straightforward. If you need Google Ads, LinkedIn, or X — or want to start on a free plan — Pixel Tracker covers more ground.",
  },
];

const pricingNarrative = [
  "Pixelfy's $7.99/mo flat rate is close to Pixel Tracker's $7/mo Starter tier in price, but the two aren't quite equivalent: Pixelfy includes unlimited pixels from the start, while Pixel Tracker's Starter tier caps at 3 pixels (unlimited requires the $29/mo Pro tier). Pixelfy also has no free plan, while Pixel Tracker does.",
  "For a store that wants unlimited pixels cheaply and only needs Pixelfy's five supported platforms, that trade-off can work in Pixelfy's favor.",
];

const chooseWhenPixelTracker = [
  "You need Google Ads, LinkedIn, or X pixel tracking",
  "You want a free plan to start on before paying anything",
  "You want pricing that scales down for a store using very few pixels",
];

const chooseWhenCompetitor = [
  "You specifically need Taboola pixel tracking",
  "You want unlimited pixels at a low flat price with no tiers to think about",
  "Your ad platforms are limited to Facebook, TikTok, Snapchat, and Pinterest",
];

const verdict = [
  "Pixelfy's single $7.99/mo flat plan is simple and close in price to Pixel Tracker's Starter tier, and it's the only app in this comparison supporting Taboola pixel tracking.",
  "Its 3.9★ rating is the lowest among the apps compared in this series, though its review count (39) is still a meaningful sample.",
  "If you specifically need Taboola support and only advertise on Facebook, TikTok, Snapchat, and Pinterest, Pixelfy covers that at a low flat price. For broader platform coverage — Google Ads, LinkedIn, X — or a free tier to start on, Pixel Tracker is the better fit.",
];

export default function PixelfyVsPage() {
  return (
    <VsGuide
      slug="pixelfy-alternative"
      competitorName="Pixelfy"
      competitorBlurb="Unlimited Facebook and TikTok pixels with CAPI on a single flat-rate plan, plus Taboola pixel support."
      competitorPricing="$7.99/mo flat (no free plan)"
      competitorBestFor="Stores wanting the single lowest flat monthly price and Taboola pixel support specifically."
      competitorHref="https://apps.shopify.com/pixelfy-facebook-pixels"
      positioning="Pixelfy runs one flat plan for unlimited pixels across a narrower platform list. Here's how it compares to Pixel Tracker's tiered, wider-coverage pricing."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={[
        "Has a genuine free plan; Pixelfy has none",
        "Supports Google Ads, LinkedIn, and X, which Pixelfy doesn't",
        "Offers tiered pricing that scales down for smaller stores",
      ]}
      pixelTrackerCons={["Doesn't support Taboola"]}
      competitorPros={[
        "Low, simple flat price ($7.99/mo)",
        "Supports Taboola pixel tracking, which Pixel Tracker doesn't",
      ]}
      competitorCons={[
        "No free plan",
        "Lowest App Store rating among comparable apps (3.9★)",
        "No Google Ads, LinkedIn, or X support",
        "Single flat plan regardless of how many pixels you actually use",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
