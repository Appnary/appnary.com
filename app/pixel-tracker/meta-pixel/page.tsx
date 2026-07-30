import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";

export const metadata: Metadata = {
  title: "Meta Pixel Setup for Shopify | Pixel Tracker | Appnary",
  description:
    "How to connect a Facebook/Meta Pixel to your Shopify store with Pixel Tracker. No theme code required, with optional Conversions API support.",
  openGraph: {
    title: "Meta Pixel Setup for Shopify | Pixel Tracker",
    description:
      "Connect a Facebook/Meta Pixel to your Shopify store with Pixel Tracker. No code required.",
    url: "https://appnary.com/pixel-tracker/meta-pixel",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const steps = [
  {
    title: "Get your Meta Pixel ID",
    body: "In Meta Events Manager (business.facebook.com → Events Manager → Data Sources), open your pixel and copy its Pixel ID.",
  },
  {
    title: "Open the Pixel Tracker dashboard",
    body: "From your Shopify admin, open Pixel Tracker's dashboard.",
  },
  {
    title: "Paste the Pixel ID",
    body: "Enter your Meta Pixel ID in the Facebook/Meta field and save. No theme editing is required.",
  },
  {
    title: "Enable Conversions API (optional)",
    body: "Turn on Facebook Conversions API (CAPI) for server-side event matching — this improves accuracy against ad blockers and browser tracking prevention.",
  },
  {
    title: "Confirm events are firing",
    body: "Pixel Tracker injects the pixel automatically on every storefront page via Shopify ScriptTags. Use Meta's Pixel Helper browser extension or Events Manager's test events tool to confirm.",
  },
];

const faqs = [
  {
    q: "What does the Meta Pixel track?",
    a: "Visitor actions like page views, add-to-cart, and purchases, so Facebook and Instagram ad campaigns can measure results and retarget visitors.",
  },
  {
    q: "Do I need to edit my Shopify theme to add the Meta Pixel?",
    a: "No. Pixel Tracker injects the pixel automatically via Shopify ScriptTags once you paste your Pixel ID.",
  },
  {
    q: "Does Pixel Tracker support Facebook Conversions API (CAPI)?",
    a: "Yes. Enabling CAPI sends events server-side in addition to the browser pixel, improving match rates for ad blockers and iOS tracking prevention.",
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

export default function MetaPixelGuidePage() {
  return (
    <PixelGuide
      slug="meta-pixel"
      platformName="Meta Pixel"
      h1="How to Set Up the Meta Pixel on Shopify with Pixel Tracker"
      intro="Connect your Facebook/Meta Pixel to your Shopify store in a few minutes — no theme code changes, with optional server-side Conversions API support."
      steps={steps}
      faqs={faqs}
      relatedLinks={[
        { label: "Meta Pixel troubleshooting", href: "/pixel-tracker/meta-pixel/troubleshooting" },
        { label: "Meta Pixel events explained", href: "/pixel-tracker/meta-pixel/events" },
        { label: "Meta Pixel server-side tracking", href: "/pixel-tracker/meta-pixel/server-side" },
      ]}
    />
  );
}
