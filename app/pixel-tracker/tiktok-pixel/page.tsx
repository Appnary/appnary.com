import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";

export const metadata: Metadata = {
  title: "TikTok Pixel Setup for Shopify | Pixel Tracker | Appnary",
  description:
    "How to connect a TikTok Pixel to your Shopify store with Pixel Tracker. No theme code required, with optional Events API support.",
  openGraph: {
    title: "TikTok Pixel Setup for Shopify | Pixel Tracker",
    description:
      "Connect a TikTok Pixel to your Shopify store with Pixel Tracker. No code required.",
    url: "https://appnary.com/pixel-tracker/tiktok-pixel",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const steps = [
  {
    title: "Get your TikTok Pixel ID",
    body: "In TikTok Ads Manager, go to Assets → Events → Web Events and copy your Pixel ID.",
  },
  {
    title: "Open the Pixel Tracker dashboard",
    body: "From your Shopify admin, open Pixel Tracker's dashboard.",
  },
  {
    title: "Paste the Pixel ID",
    body: "Enter your TikTok Pixel ID in the TikTok field and save. No theme editing is required.",
  },
  {
    title: "Enable Events API (optional)",
    body: "Turn on TikTok Events API for server-side event tracking — this improves match rates and accuracy for ad blockers and tracking prevention.",
  },
  {
    title: "Confirm events are firing",
    body: "Pixel Tracker injects the pixel automatically on every storefront page via Shopify ScriptTags. Use TikTok Pixel Helper or Events Manager's test tool to confirm.",
  },
];

const faqs = [
  {
    q: "What does the TikTok Pixel track?",
    a: "Visitor actions like page views, add-to-cart, and purchases, so TikTok ad campaigns can measure results and retarget visitors.",
  },
  {
    q: "Do I need to edit my Shopify theme to add the TikTok Pixel?",
    a: "No. Pixel Tracker injects the pixel automatically via Shopify ScriptTags once you paste your Pixel ID.",
  },
  {
    q: "Does Pixel Tracker support TikTok Events API?",
    a: "Yes. Enabling Events API sends events server-side in addition to the browser pixel, improving match rates for ad blockers and tracking prevention.",
  },
  {
    q: "How much does Pixel Tracker cost?",
    a: "The Free plan includes 1 active tracking pixel at no cost. Paid plans start at $7/month for 3 pixels, up to $29/month for unlimited pixels.",
  },
  {
    q: "Is Pixel Tracker available on the Shopify App Store yet?",
    a: "Not yet — it's currently in development. Join the waitlist at appnary.com for early access.",
  },
];

export default function TikTokPixelGuidePage() {
  return (
    <PixelGuide
      slug="tiktok-pixel"
      platformName="TikTok Pixel"
      h1="How to Set Up the TikTok Pixel on Shopify with Pixel Tracker"
      intro="Connect your TikTok Pixel to your Shopify store in a few minutes — no theme code changes, with optional server-side Events API support."
      steps={steps}
      faqs={faqs}
      relatedLinks={[
        { label: "TikTok Pixel troubleshooting", href: "/pixel-tracker/tiktok-pixel/troubleshooting" },
        { label: "TikTok Pixel events explained", href: "/pixel-tracker/tiktok-pixel/events" },
        { label: "TikTok Pixel server-side tracking", href: "/pixel-tracker/tiktok-pixel/server-side" },
      ]}
    />
  );
}
