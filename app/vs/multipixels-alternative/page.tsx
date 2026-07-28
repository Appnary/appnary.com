import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";

export const metadata: Metadata = {
  title: "Pixel Tracker vs MultiPixels | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "How Pixel Tracker compares to MultiPixels for Shopify pixel tracking — platform support, free plan availability, and pricing, compared honestly.",
  openGraph: {
    title: "Pixel Tracker vs MultiPixels",
    description:
      "Platform support and pricing: Pixel Tracker vs MultiPixels for Shopify.",
    url: "https://appnary.com/vs/multipixels-alternative",
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
  { feature: "Server-side event forwarding (CAPI / Events API) confirmed", pixelTracker: true, competitor: "varies" },
  { feature: "Free plan available", pixelTracker: true, competitor: false },
  { feature: "Audience-builder tools bundled", pixelTracker: false, competitor: true },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "$0 (1 pixel)", competitor: "Not available" },
  { plan: "Entry paid", pixelTracker: "$7/mo (3 pixels)", competitor: "$9.99/mo (Starter)" },
  { plan: "Mid tier", pixelTracker: "$15/mo (10 pixels)", competitor: "$19.99/mo (Advanced)" },
  { plan: "Top tier", pixelTracker: "$29/mo (unlimited pixels)", competitor: "$39.99/mo (Premium)" },
];

const faqs = [
  {
    q: "Does MultiPixels have a free plan?",
    a: "No — its cheapest plan is $9.99/mo. Pixel Tracker offers a free plan covering one pixel.",
  },
  {
    q: "Does MultiPixels support Google Ads?",
    a: "No — it covers Facebook, Instagram, TikTok, Snapchat, Pinterest, and X. Pixel Tracker additionally supports Google Ads and LinkedIn.",
  },
  {
    q: "How established is MultiPixels?",
    a: "It has a strong 4.8★ rating but only 10 reviews on the Shopify App Store so far — a thinner track record than most other apps compared in this series.",
  },
  {
    q: "Is MultiPixels cheaper than Pixel Tracker?",
    a: "No — at every tier, MultiPixels costs more ($9.99-$39.99/mo vs. Pixel Tracker's $0-$29/mo), and it has no free plan.",
  },
  {
    q: "Is MultiPixels' 4.8★ rating reliable given it only has 10 reviews?",
    a: "A 4.8★ average from 10 reviews is a positive early signal but a much smaller sample than most other apps in this comparison series, some of which have 150+ reviews. It's worth treating as encouraging rather than conclusive until the review count grows.",
  },
];

const overview = [
  "MultiPixels covers six social ad platforms — Facebook, Instagram, TikTok, Snapchat, Pinterest, and X — and bundles audience-building tools on top of pixel installation. Pixel Tracker covers those same six platforms plus Google Ads and LinkedIn, without the audience-builder extras, generally at a lower price.",
  "The biggest practical difference is cost and track record: MultiPixels has no free plan and its cheapest tier is $9.99/mo, while Pixel Tracker starts free. MultiPixels also has a notably thin review history — just 10 reviews, despite a strong 4.8★ average — compared to the hundreds some other apps in this comparison series have accumulated.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "MultiPixels supports Facebook, Instagram, TikTok, Snapchat, Pinterest, and X. It doesn't support Google Ads or LinkedIn, both of which Pixel Tracker covers. For a store running paid search or B2B campaigns, that's a real gap.",
  },
  {
    title: "Audience-builder tools",
    body: "MultiPixels bundles tools for building custom ad audiences on top of its pixel installation, a feature Pixel Tracker doesn't offer. If audience-building is something you'd otherwise pay for separately, that's a genuine value MultiPixels brings that a pure pixel connector doesn't.",
  },
  {
    title: "Free plan and pricing floor",
    body: "MultiPixels has no free tier at all — its cheapest plan is $9.99/mo. Pixel Tracker's free plan covers one pixel at no cost, and its cheapest paid tier ($7/mo) still undercuts MultiPixels' entry price.",
  },
  {
    title: "Review history",
    body: "MultiPixels holds a strong 4.8★ average, but from only 10 reviews — a small sample compared to other apps in this space, some of which have well over 100. That doesn't mean it's unreliable, just less proven at scale so far.",
  },
  {
    title: "Server-side tracking (CAPI)",
    body: "Whether MultiPixels' CAPI/server-side event forwarding is confirmed isn't clearly documented in its own marketing. Pixel Tracker explicitly supports Facebook CAPI and TikTok Events API.",
  },
];

const pricingNarrative = [
  "MultiPixels is more expensive than Pixel Tracker at every tier: $9.99 vs. Pixel Tracker's free plan or $7/mo Starter, $19.99 vs. $15/mo Growth, and $39.99 vs. $29/mo Pro. There's no free option to test MultiPixels before paying.",
  "The extra cost is partly explained by the bundled audience-builder tools, which Pixel Tracker doesn't include — whether that's worth the premium depends on whether you'd actually use those tools.",
];

const chooseWhenPixelTracker = [
  "You want a free plan to test before paying anything",
  "You need Google Ads or LinkedIn pixel tracking",
  "You want lower pricing at every tier and don't need audience-builder tools",
];

const chooseWhenCompetitor = [
  "You want audience-building tools bundled with pixel installation",
  "You don't need Google Ads or LinkedIn tracking",
  "You're comfortable with a newer app that has a smaller review sample so far",
];

const verdict = [
  "MultiPixels bundles audience-building tools alongside pixel installation, which Pixel Tracker doesn't offer — but it has no free plan, a much thinner review history (10 reviews) than most other apps in this space, and costs more at every tier ($9.99-$39.99/mo vs. Pixel Tracker's $0-$29/mo).",
  "It also doesn't support Google Ads or LinkedIn, both of which Pixel Tracker covers.",
  "Unless the audience-builder features specifically matter to you, Pixel Tracker covers more ad platforms at a lower price with a free tier to start on.",
];

export default function MultiPixelsVsPage() {
  return (
    <VsGuide
      slug="multipixels-alternative"
      competitorName="MultiPixels"
      competitorBlurb="No-code social pixel installer for Facebook, Instagram, TikTok, Snapchat, Pinterest, and X, bundled with audience-builder extras."
      competitorPricing="$9.99 – $39.99/mo (no free plan)"
      competitorBestFor="Stores wanting audience-building extras bundled with pixel installation, that don't need Google Ads or LinkedIn."
      competitorHref="https://apps.shopify.com/multipixel"
      positioning="MultiPixels adds audience-builder tools on top of pixel installation, at a higher price and with no free tier. Here's how it compares to Pixel Tracker's lower-cost, broader-coverage plans."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={[
        "Has a genuine free plan; MultiPixels has none",
        "Supports Google Ads and LinkedIn, which MultiPixels doesn't",
        "Lower cost at every paid tier",
      ]}
      pixelTrackerCons={["Doesn't include audience-builder tooling"]}
      competitorPros={[
        "Bundles audience-builder extras alongside pixel installation",
        "Strong early rating (4.8★), though from a small sample",
      ]}
      competitorCons={[
        "No free plan at all",
        "Only 10 reviews on the Shopify App Store — a thin track record compared to most other apps in this comparison",
        "No Google Ads or LinkedIn support",
        "More expensive at every tier than Pixel Tracker's equivalent",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
