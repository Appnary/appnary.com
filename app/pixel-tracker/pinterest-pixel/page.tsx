import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";

export const metadata: Metadata = {
  title: "Pinterest Tag Setup for Shopify | Pixel Tracker | Appnary",
  description:
    "How to connect a Pinterest Tag to your Shopify store with Pixel Tracker. No theme code required.",
  keywords: [
    "Pinterest Tag Shopify",
    "Pinterest Pixel setup",
    "Shopify Pinterest tracking",
    "Pinterest conversion tag Shopify",
  ],
  openGraph: {
    title: "Pinterest Tag Setup for Shopify | Pixel Tracker",
    description:
      "Connect a Pinterest Tag to your Shopify store with Pixel Tracker. No code required.",
    url: "https://appnary.com/pixel-tracker/pinterest-pixel",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const steps = [
  {
    title: "Get your Pinterest Tag ID",
    body: "In Pinterest Ads Manager, go to Ads → Conversions → Pinterest tag and copy your Tag ID.",
  },
  {
    title: "Open the Pixel Tracker dashboard",
    body: "From your Shopify admin, open Pixel Tracker's dashboard.",
  },
  {
    title: "Paste the Tag ID",
    body: "Enter your Pinterest Tag ID in the Pinterest field and save. No theme editing is required.",
  },
  {
    title: "Confirm events are firing",
    body: "Pixel Tracker injects the tag automatically on every storefront page via Shopify ScriptTags. Use Pinterest's Tag Helper browser extension to confirm it's firing correctly.",
  },
];

const faqs = [
  {
    q: "What does the Pinterest Tag track?",
    a: "Visitor actions like page views, add-to-cart, and purchases, so Pinterest ad campaigns can measure results and retarget visitors.",
  },
  {
    q: "Do I need to edit my Shopify theme to add the Pinterest Tag?",
    a: "No. Pixel Tracker injects the tag automatically via Shopify ScriptTags once you paste your Tag ID.",
  },
  {
    q: "Can I use the Pinterest Tag alongside other platforms?",
    a: "Yes. Pixel Tracker lets you connect Pinterest alongside Facebook, Google, TikTok, Snapchat, LinkedIn, and X pixels from the same dashboard.",
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

export default function PinterestPixelGuidePage() {
  return (
    <PixelGuide
      slug="pinterest-pixel"
      platformName="Pinterest Tag"
      h1="How to Set Up the Pinterest Tag on Shopify with Pixel Tracker"
      intro="Connect your Pinterest Tag to your Shopify store in a few minutes — no theme code changes required."
      steps={steps}
      faqs={faqs}
    />
  );
}
