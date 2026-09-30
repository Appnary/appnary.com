import type { Metadata } from "next";
import { VsGuide } from "@/components/vs-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/vs/omega-pixel-alternative", {
  title: "Pixel Tracker vs Omega Pixel | Shopify Pixel Tracking Comparison | Appnary",
  description:
    "How Pixel Tracker compares to Omega (Ⓩ Facebook Pixel TikTok Pixel) for Shopify pixel tracking — platform support, reviews, and pricing, compared honestly.",
  openGraph: {
    title: "Pixel Tracker vs Omega Pixel",
    description:
      "Platform support, reviews, and pricing: Pixel Tracker vs Omega Pixel for Shopify.",
    url: "https://appnary.com/vs/omega-pixel-alternative",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
});

const featureRows = [
  { feature: "No theme code editing required", pixelTracker: true, competitor: true },
  { feature: "Facebook/Meta pixel", pixelTracker: true, competitor: true },
  { feature: "Google Ads tag", pixelTracker: true, competitor: false },
  { feature: "TikTok pixel", pixelTracker: true, competitor: true },
  { feature: "Snapchat pixel", pixelTracker: true, competitor: true },
  { feature: "Pinterest tag", pixelTracker: true, competitor: false },
  { feature: "LinkedIn Insight Tag", pixelTracker: true, competitor: false },
  { feature: "X (Twitter) pixel", pixelTracker: true, competitor: false },
  { feature: "Server-side event forwarding (CAPI / Events API)", pixelTracker: true, competitor: true },
  { feature: "Free plan for live stores", pixelTracker: "Not confirmed", competitor: true },
  { feature: "4 pricing tiers matched to usage", pixelTracker: "Not confirmed", competitor: true },
];

const pricingRows = [
  { plan: "Free", pixelTracker: "Not confirmed", competitor: "$0 (1 pixel)" },
  { plan: "Entry paid", pixelTracker: "Not confirmed", competitor: "$12.99/mo (Basic)" },
  { plan: "Mid tier", pixelTracker: "Not confirmed", competitor: "$29.99/mo (Advanced)" },
  { plan: "Top tier", pixelTracker: "Not confirmed", competitor: "$69.99/mo (Pro)" },
];

const faqs = [
  {
    q: "Does Omega support Google Ads or Pinterest?",
    a: "No — Omega covers Facebook/Meta, TikTok, and Snapchat only. Pixel Tracker additionally supports Google Ads, Pinterest, LinkedIn, and X (Twitter).",
  },
  {
    q: "Is Omega more expensive than Pixel Tracker?",
    a: "Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify.",
  },
  {
    q: "How established is Omega?",
    a: "Very — 158 reviews at a 5.0★ average on the Shopify App Store, a strong reputation. Pixel Tracker is pre-launch and doesn't have public reviews yet.",
  },
  {
    q: "Can I switch from Omega to Pixel Tracker?",
    a: "Yes — both install pixels via Shopify ScriptTags rather than theme code, so switching means re-adding your existing pixel IDs in Pixel Tracker and removing the other app.",
  },
  {
    q: "Is Omega's price increase across tiers justified by extra features?",
    a: "Omega's pricing scales steeply mostly with usage limits rather than adding new platforms — Basic, Advanced, and Pro all cover the same three platforms (Facebook, TikTok, Snapchat). If you need broader platform coverage rather than just higher pixel limits, Pixel Tracker's planned scope adds four more platforms, with pricing still unconfirmed.",
  },
];

const overview = [
  "Omega Pixel and Pixel Tracker both install and manage ad-platform tracking pixels on Shopify without theme code edits, and both support server-side event forwarding. The difference is scope: Omega focuses tightly on three platforms — Facebook/Meta, TikTok, and Snapchat — and has built a strong reputation doing it, with 158 reviews at a perfect 5.0★ average on the Shopify App Store.",
  "Pixel Tracker covers those same three platforms plus four more — Google Ads, Pinterest, LinkedIn, and X. The trade-off is straightforward: Omega has the longer track record in a narrower lane, while Pixel Tracker trades some of that track record for broader planned coverage.",
];

const featureBreakdown = [
  {
    title: "Platform coverage",
    body: "Omega Pixel supports only Facebook/Meta, TikTok, and Snapchat. It doesn't support Google Ads, Pinterest, LinkedIn, or X (Twitter) at all — a real limitation for any store running paid search or B2B campaigns alongside social ads. Pixel Tracker covers all seven of those platforms from one dashboard.",
  },
  {
    title: "Review history and reputation",
    body: "158 reviews at a perfect 5.0★ average is a strong, credible signal that Omega works reliably for the merchants using it within its supported platforms. That track record is a genuine reason to trust the app, though it doesn't offset the platforms it simply can't do.",
  },
  {
    title: "Server-side tracking (CAPI)",
    body: "Omega includes server-side event forwarding. Pixel Tracker's launch plan inclusions are still unconfirmed. Neither app differentiates meaningfully here beyond the platforms each one's CAPI implementation actually covers.",
  },
  {
    title: "Best fit by platform mix",
    body: "If Facebook, TikTok, and Snapchat are genuinely the only platforms you'll ever advertise on, Omega's proven history is a reasonable bet. The moment Google Ads, Pinterest, LinkedIn, or X enters the picture, Omega simply can't help, regardless of price.",
  }
];

const pricingNarrative = ["Pixel Tracker's launch prices and plan limits are not confirmed. Compare the app's Shopify listing when it becomes available; billing will be through Shopify."];

const chooseWhenPixelTracker = [
  "You need Google Ads, Pinterest, LinkedIn, or X pixel tracking alongside Facebook, TikTok, or Snapchat",
  "You want broader platform coverage from one dashboard as your ad mix grows",
];

const chooseWhenCompetitor = [
  "You only ever advertise on Facebook/Meta, TikTok, and Snapchat",
  "A long, perfect-rated track record (158 reviews, 5.0★) outweighs price for you",
  "You're comfortable paying a premium for an established, narrowly-focused app",
];

const verdict = [
  "Omega has a genuinely excellent track record — 158 reviews at a perfect 5.0★ average — but it only covers three ad platforms: Facebook/Meta, TikTok, and Snapchat.",
  "If you also run Google Ads, Pinterest, LinkedIn, or X campaigns, Omega doesn't cover them at all — Pixel Tracker supports all seven platforms from one dashboard."
];

export default function OmegaPixelVsPage() {
  return (
    <VsGuide
      slug="omega-pixel-alternative"
      competitorName="Omega Pixel"
      competitorBlurb="Multi-pixel and CAPI manager for Facebook/Meta, TikTok, and Snapchat, with a perfect 5.0★ rating across 158 reviews."
      competitorPricing="Free – $69.99/mo"
      competitorBestFor="Stores running only Facebook/Meta, TikTok, and Snapchat campaigns that want a well-reviewed, established app."
      competitorHref="https://apps.shopify.com/facebook-multiple-pixel"
      positioning="Both connect ad-platform pixels to Shopify without touching theme code. Here's how Omega's proven reputation but narrower platform list compares to Pixel Tracker's broader planned coverage."
      overview={overview}
      featureRows={featureRows}
      featureBreakdown={featureBreakdown}
      pricingRows={pricingRows}
      pricingNarrative={pricingNarrative}
      pixelTrackerPros={[
        "Supports 4 more platforms (Google Ads, Pinterest, LinkedIn, X) than Omega's 3",
      ]}
      pixelTrackerCons={[
        "No perfect 5.0★ track record yet — pre-launch",
      ]}
      competitorPros={[
        "Perfect 5.0★ rating across 158 reviews — strong reputation",
        "Well-established, mature app",
      ]}
      competitorCons={[
        "Only supports 3 ad platforms (Facebook/Meta, TikTok, Snapchat) — no Google Ads, Pinterest, LinkedIn, or X",
      ]}
      chooseWhenPixelTracker={chooseWhenPixelTracker}
      chooseWhenCompetitor={chooseWhenCompetitor}
      verdict={verdict}
      faqs={faqs}
    />
  );
}
