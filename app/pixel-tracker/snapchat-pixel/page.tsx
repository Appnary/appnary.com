import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";

export const metadata: Metadata = {
  title: "Snapchat Pixel Setup for Shopify | Pixel Tracker | Appnary",
  description:
    "How to connect a Snapchat Pixel to your Shopify store with Pixel Tracker. No theme code required.",
  keywords: [
    "Snapchat Pixel Shopify",
    "Snapchat Pixel setup",
    "Shopify Snapchat tracking",
    "Snap Pixel Shopify install",
  ],
  openGraph: {
    title: "Snapchat Pixel Setup for Shopify | Pixel Tracker",
    description:
      "Connect a Snapchat Pixel to your Shopify store with Pixel Tracker. No code required.",
    url: "https://appnary.com/pixel-tracker/snapchat-pixel",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const steps = [
  {
    title: "Get your Snapchat Pixel ID",
    body: "In Snapchat Ads Manager, go to Business Details → Pixel (or Events Manager) and copy your Pixel ID.",
  },
  {
    title: "Open the Pixel Tracker dashboard",
    body: "From your Shopify admin, open Pixel Tracker's dashboard.",
  },
  {
    title: "Paste the Pixel ID",
    body: "Enter your Snapchat Pixel ID in the Snapchat field and save. No theme editing is required.",
  },
  {
    title: "Confirm events are firing",
    body: "Pixel Tracker injects the pixel automatically on every storefront page via Shopify ScriptTags. Use the Snap Pixel Helper browser extension to confirm it's firing correctly.",
  },
];

const faqs = [
  {
    q: "What does the Snapchat Pixel track?",
    a: "Visitor actions like page views, add-to-cart, and purchases, so Snapchat ad campaigns can measure results and retarget visitors.",
  },
  {
    q: "Do I need to edit my Shopify theme to add the Snapchat Pixel?",
    a: "No. Pixel Tracker injects the pixel automatically via Shopify ScriptTags once you paste your Pixel ID.",
  },
  {
    q: "Can I use the Snapchat Pixel alongside other platforms?",
    a: "Yes. Pixel Tracker lets you connect Snapchat alongside Facebook, Google, TikTok, Pinterest, LinkedIn, and X pixels from the same dashboard.",
  },
  {
    q: "How much does Pixel Tracker cost?",
    a: "The Free plan includes 1 active tracking pixel at no cost. Paid plans start at $7/month for 3 pixels, up to $29/month for unlimited pixels.",
  },
  {
    q: "Is Pixel Tracker available on the Shopify App Store yet?",
    a: "It's available soon on the Shopify App Store. Join the waitlist at appnary.com for early access.",
  },
];

export default function SnapchatPixelGuidePage() {
  return (
    <PixelGuide
      slug="snapchat-pixel"
      platformName="Snapchat Pixel"
      h1="How to Set Up the Snapchat Pixel on Shopify with Pixel Tracker"
      intro="Connect your Snapchat Pixel to your Shopify store in a few minutes — no theme code changes required."
      steps={steps}
      faqs={faqs}
      relatedLinks={[
        { label: "Snapchat Pixel troubleshooting", href: "/pixel-tracker/snapchat-pixel/troubleshooting" },
        { label: "Snapchat Pixel events explained", href: "/pixel-tracker/snapchat-pixel/events" },
        { label: "Snapchat server-side tracking", href: "/pixel-tracker/snapchat-pixel/server-side" },
      ]}
    />
  );
}
