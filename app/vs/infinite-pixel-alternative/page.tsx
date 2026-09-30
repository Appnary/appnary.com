import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/vs/infinite-pixel-alternative", {
  title: "Pixel Tracker vs Infinite Pixels | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "How Pixel Tracker compares to Infinite (∞ Facebook Pixel-TikTok Pixel) for Shopify pixel tracking — platform support, reviews, and pricing, compared honestly.",
  openGraph: {
    title: "Pixel Tracker vs Infinite Pixels",
    description:
      "Platform support, reviews, and pricing: Pixel Tracker vs Infinite Pixels for Shopify.",
    url: "https://appnary.com/vs/infinite-pixel-alternative",
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
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: "Not confirmed", competitor: true },
  { feature: "Free plan for live stores", pixelTracker: "Not confirmed", competitor: true },
  { feature: "4 pricing tiers matched to usage", pixelTracker: "Not confirmed", competitor: true },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "Not confirmed", competitor: "$0 (1 pixel)" },
  { plan: "Entry paid", pixelTracker: "Not confirmed", competitor: "$6.99/mo (Basic)" },
  { plan: "Mid tier", pixelTracker: "Not confirmed", competitor: "$9.99/mo (Standard)" },
  { plan: "Top tier", pixelTracker: "Not confirmed", competitor: "$19.99/mo (Premium)" },
];

const faqs = [
  {
    q: "Is Infinite cheaper than Pixel Tracker?",
    a: "Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify.",
  },
  {
    q: "Does Infinite support Google Ads?",
    a: "No. Infinite covers Facebook/Meta, TikTok, Snapchat, Pinterest, and X (Twitter), but not Google Ads or LinkedIn. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  },
  {
    q: "Which has more reviews?",
    a: "Infinite has a much longer track record — 248 reviews at a 4.9★ average on the Shopify App Store. Pixel Tracker is pre-launch and doesn't have public reviews yet.",
  },
  {
    q: "Can I use both together?",
    a: "Running two pixel-connector apps on the same store risks firing duplicate events to the same ad platform, which can distort reporting — it's best to pick one.",
  },
  {
    q: "Does Infinite's 4.9★ rating mean it's the better choice?",
    a: "It means Infinite has a long, positive track record with real merchants, which is worth weighing seriously. But a high rating on a narrower feature set doesn't help if you specifically need Google Ads or LinkedIn tracking — in that case, platform coverage matters more than review count.",
  },
];

const overview = [
  "Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  "The biggest difference between them isn't features — it's track record and platform breadth. Infinite Pixels has been on the Shopify App Store long enough to accumulate 248 reviews at a 4.9★ average, the strongest review history of any app in this comparison series, but it covers five ad platforms rather than Pixel Tracker's seven, leaving out Google Ads and LinkedIn.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "Infinite Pixels supports Facebook/Meta, TikTok, Snapchat, Pinterest, and X (Twitter). For a store that only advertises on social platforms, this gap doesn't matter; for one running Google Ads or B2B LinkedIn campaigns, it does. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  },
  {
    title: "Review history and reliability signal",
    body: "248 reviews at a 4.9★ average is a meaningful, hard-to-fake signal that Infinite Pixels works reliably for a large number of merchants over time. Pixel Tracker is pre-launch and doesn't have public reviews yet, so this is a real, concrete advantage for Infinite on trust alone.",
  },
  {
    title: "Server-side tracking (CAPI)",
    body: "Neither app's marketing distinguishes itself strongly here — the practical difference for most merchants comes down to platform coverage and pricing rather than the CAPI implementation itself. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
  },
  {
    title: "Setup and installation",
    body: "Pixel Tracker uses a theme app extension in its current implementation. App embed activation and event testing are required; it is not available to install yet. Check the available provider's own setup instructions.",
  }
];

const pricingNarrative = ["Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify."];

const chooseWhenPixelTracker = [
  "You are researching a future pixel-configuration app and can wait for launch.",
  "You will verify platform coverage and purchase events before replacing working tracking.",
];

const chooseWhenCompetitor = [
  "Your ad spend is entirely on Meta, TikTok, Snapchat, Pinterest, or X — the platforms it covers",
  "A large, proven review history (248 reviews, 4.9★) matters more to you than platform breadth"
];

const verdict = [
  "Infinite has by far the strongest review track record of any app in this comparison — 248 reviews at a 4.9★ average — which is a real signal of reliability that a pre-launch app like Pixel Tracker can't yet match.",
  "Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
];

export default function InfinitePixelVsPage() {
  return (
    <VsGuide
      slug="infinite-pixel-alternative"
      competitorName="Infinite Pixels"
      competitorBlurb="No-code multi-channel pixel installer with server-side CAPI, and the largest, highest-rated review base of any comparable app."
      competitorPricing="Free – $19.99/mo"
      competitorBestFor="Stores focused on Meta and TikTok specifically, comfortable without Google Ads or LinkedIn pixel support."
      competitorHref="https://apps.shopify.com/infinite-fb-tiktok-pixels"
      positioning="Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={["Planned focus on pixel configuration from one Shopify app"]}
      pixelTrackerCons={[
        "Far smaller review history since it's pre-launch, vs. Infinite's 248 reviews and 4.9★ rating",
      ]}
      competitorPros={[
        "Very large, highly-rated review base (248 reviews, 4.9★) — the most proven track record of any app in this comparison",
        "Free plan for live stores",
      ]}
      competitorCons={[
        "No Google Ads or LinkedIn pixel support",
        "Its listed platforms exclude Google Ads and LinkedIn",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
