import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";

export const metadata: Metadata = {
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
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: true, competitor: true },
  { feature: "Free plan for live stores", pixelTracker: true, competitor: true },
  { feature: "4 pricing tiers matched to usage", pixelTracker: true, competitor: true },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "$0 (1 pixel)", competitor: "$0 (1 pixel)" },
  { plan: "Entry paid", pixelTracker: "$7/mo (3 pixels)", competitor: "$6.99/mo (Basic)" },
  { plan: "Mid tier", pixelTracker: "$15/mo (10 pixels)", competitor: "$9.99/mo (Standard)" },
  { plan: "Top tier", pixelTracker: "$29/mo (unlimited pixels)", competitor: "$19.99/mo (Premium)" },
];

const faqs = [
  {
    q: "Is Infinite cheaper than Pixel Tracker?",
    a: "Infinite's entry paid tier is $6.99/mo, versus Pixel Tracker's Starter at $7/mo — close to identical at the low end. Both offer a free plan for a single pixel.",
  },
  {
    q: "Does Infinite support Google Ads?",
    a: "No. Infinite covers Facebook/Meta, TikTok, Snapchat, Pinterest, and X (Twitter), but not Google Ads or LinkedIn. Pixel Tracker supports all seven, including Google Ads and LinkedIn.",
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
  "Infinite Pixels and Pixel Tracker are both no-code pixel installers built for Shopify, injecting tracking pixels via ScriptTags and forwarding events server-side so ad platforms keep receiving accurate conversion data despite ad blockers and browser tracking restrictions.",
  "The biggest difference between them isn't features — it's track record and platform breadth. Infinite Pixels has been on the Shopify App Store long enough to accumulate 248 reviews at a 4.9★ average, the strongest review history of any app in this comparison series, but it covers five ad platforms rather than Pixel Tracker's seven, leaving out Google Ads and LinkedIn.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "Infinite Pixels supports Facebook/Meta, TikTok, Snapchat, Pinterest, and X (Twitter). It doesn't support Google Ads or LinkedIn's Insight Tag, both of which Pixel Tracker includes. For a store that only advertises on social platforms, this gap doesn't matter; for one running Google Ads or B2B LinkedIn campaigns, it does.",
  },
  {
    title: "Review history and reliability signal",
    body: "248 reviews at a 4.9★ average is a meaningful, hard-to-fake signal that Infinite Pixels works reliably for a large number of merchants over time. Pixel Tracker is pre-launch and doesn't have public reviews yet, so this is a real, concrete advantage for Infinite on trust alone.",
  },
  {
    title: "Pricing tiers",
    body: "Both apps use four pricing tiers matched to usage, and both offer a free plan for one pixel. Infinite's paid tiers ($6.99/$9.99/$19.99) are cheaper at the entry and middle levels than Pixel Tracker's ($7/$15/$29), though Pixel Tracker's tiers unlock more pixels as you move up.",
  },
  {
    title: "Server-side tracking (CAPI)",
    body: "Both apps forward events server-side in addition to the browser pixel. Neither app's marketing distinguishes itself strongly here — the practical difference for most merchants comes down to platform coverage and pricing rather than the CAPI implementation itself.",
  },
  {
    title: "Setup and installation",
    body: "Both are marketed as no-code installs via Shopify ScriptTags, meaning neither requires editing theme files or hiring a developer. A merchant switching between them just re-enters pixel IDs in the new app's dashboard.",
  },
];

const pricingNarrative = [
  "At the entry level, the two apps are close: Infinite's Basic plan is $6.99/mo versus Pixel Tracker's Starter at $7/mo, both aimed at stores running just a few pixels. The gap shows up more by the middle tier — Infinite's Standard is $9.99/mo versus Pixel Tracker's Growth at $15/mo — though Pixel Tracker's Growth tier also unlocks 10 pixels.",
  "Both apps offer a free plan for a single pixel, so a merchant testing either one out can do so without paying anything upfront.",
];

const chooseWhenPixelTracker = [
  "You run Google Ads or LinkedIn campaigns alongside Meta and TikTok",
  "You want the broadest platform coverage from one dashboard (7 platforms vs. Infinite's 5)",
  "You're comfortable choosing a newer app in exchange for wider platform support",
];

const chooseWhenCompetitor = [
  "Your ad spend is entirely on Meta, TikTok, Snapchat, Pinterest, or X — the platforms it covers",
  "A large, proven review history (248 reviews, 4.9★) matters more to you than platform breadth",
  "You want a slightly cheaper entry-level plan ($6.99/mo vs. $7/mo)",
];

const verdict = [
  "Infinite has by far the strongest review track record of any app in this comparison — 248 reviews at a 4.9★ average — which is a real signal of reliability that a pre-launch app like Pixel Tracker can't yet match.",
  "If your ad spend is entirely on Meta and TikTok, Infinite's lower entry price ($6.99/mo) and proven history make it a reasonable default choice.",
  "If you also run Google Ads or LinkedIn campaigns, Infinite doesn't cover them — Pixel Tracker supports both, alongside Meta, TikTok, Snapchat, Pinterest, and X, from the same dashboard.",
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
      positioning="Both connect ad-platform pixels to Shopify without touching theme code. Here's how Infinite's proven track record and narrower platform list compares to Pixel Tracker's broader coverage."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={[
        "Also supports Google Ads and LinkedIn, which Infinite doesn't",
        "Server-side CAPI included at every paid tier",
      ]}
      pixelTrackerCons={[
        "Far smaller review history since it's pre-launch, vs. Infinite's 248 reviews and 4.9★ rating",
      ]}
      competitorPros={[
        "Very large, highly-rated review base (248 reviews, 4.9★) — the most proven track record of any app in this comparison",
        "Lower entry-level paid pricing ($6.99/mo)",
        "Free plan for live stores",
      ]}
      competitorCons={[
        "No Google Ads or LinkedIn pixel support",
        "Narrower platform coverage (5 platforms vs. Pixel Tracker's 7)",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
