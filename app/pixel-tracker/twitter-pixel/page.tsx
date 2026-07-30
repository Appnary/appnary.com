import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";

export const metadata: Metadata = {
  title: "X (Twitter) Pixel Setup for Shopify | Pixel Tracker | Appnary",
  description:
    "How to connect an X (Twitter) Pixel to your Shopify store with Pixel Tracker. No theme code required.",
  keywords: [
    "X Pixel Shopify",
    "Twitter Pixel setup",
    "Shopify X tracking",
    "Twitter conversion tracking Shopify",
  ],
  openGraph: {
    title: "X (Twitter) Pixel Setup for Shopify | Pixel Tracker",
    description:
      "Connect an X (Twitter) Pixel to your Shopify store with Pixel Tracker. No code required.",
    url: "https://appnary.com/pixel-tracker/twitter-pixel",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const steps = [
  {
    title: "Get your X Pixel ID",
    body: "In X Ads Manager, go to Tools → Conversion tracking (Website Event Manager) and copy your Pixel ID.",
  },
  {
    title: "Open the Pixel Tracker dashboard",
    body: "From your Shopify admin, open Pixel Tracker's dashboard.",
  },
  {
    title: "Paste the Pixel ID",
    body: "Enter your X Pixel ID in the X (Twitter) field and save. No theme editing is required.",
  },
  {
    title: "Confirm events are firing",
    body: "Pixel Tracker injects the pixel automatically on every storefront page via Shopify ScriptTags. Use X Ads Manager's event testing tool to confirm it's firing correctly.",
  },
];

const faqs = [
  {
    q: "What does the X (Twitter) Pixel track?",
    a: "Visitor actions like page views, add-to-cart, and purchases, so X ad campaigns can measure results and retarget visitors.",
  },
  {
    q: "Do I need to edit my Shopify theme to add the X Pixel?",
    a: "No. Pixel Tracker injects the pixel automatically via Shopify ScriptTags once you paste your Pixel ID.",
  },
  {
    q: "Can I use the X Pixel alongside other platforms?",
    a: "Yes. Pixel Tracker lets you connect X alongside Facebook, Google, TikTok, Snapchat, Pinterest, and LinkedIn pixels from the same dashboard.",
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

export default function TwitterPixelGuidePage() {
  return (
    <PixelGuide
      slug="twitter-pixel"
      platformName="X (Twitter) Pixel"
      h1="How to Set Up the X (Twitter) Pixel on Shopify with Pixel Tracker"
      intro="Connect your X (Twitter) Pixel to your Shopify store in a few minutes — no theme code changes required."
      steps={steps}
      faqs={faqs}
      relatedLinks={[
        { label: "X (Twitter) Pixel troubleshooting", href: "/pixel-tracker/twitter-pixel/troubleshooting" },
        { label: "X (Twitter) Pixel events explained", href: "/pixel-tracker/twitter-pixel/events" },
        { label: "X (Twitter) server-side tracking", href: "/pixel-tracker/twitter-pixel/server-side" },
      ]}
    />
  );
}
