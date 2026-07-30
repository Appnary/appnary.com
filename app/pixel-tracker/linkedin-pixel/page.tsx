import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";

export const metadata: Metadata = {
  title: "LinkedIn Insight Tag Setup for Shopify | Pixel Tracker | Appnary",
  description:
    "How to connect a LinkedIn Insight Tag to your Shopify store with Pixel Tracker. No theme code required.",
  keywords: [
    "LinkedIn Insight Tag Shopify",
    "LinkedIn Pixel setup",
    "Shopify LinkedIn tracking",
    "LinkedIn conversion tracking Shopify",
  ],
  openGraph: {
    title: "LinkedIn Insight Tag Setup for Shopify | Pixel Tracker",
    description:
      "Connect a LinkedIn Insight Tag to your Shopify store with Pixel Tracker. No code required.",
    url: "https://appnary.com/pixel-tracker/linkedin-pixel",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const steps = [
  {
    title: "Get your LinkedIn Insight Tag ID",
    body: "In LinkedIn Campaign Manager, go to Account Assets → Insight Tag and copy your Partner ID.",
  },
  {
    title: "Open the Pixel Tracker dashboard",
    body: "From your Shopify admin, open Pixel Tracker's dashboard.",
  },
  {
    title: "Paste the Partner ID",
    body: "Enter your LinkedIn Partner ID in the LinkedIn field and save. No theme editing is required.",
  },
  {
    title: "Confirm events are firing",
    body: "Pixel Tracker injects the Insight Tag automatically on every storefront page via Shopify ScriptTags. Use LinkedIn's Insight Tag Helper browser extension to confirm it's firing correctly.",
  },
];

const faqs = [
  {
    q: "What does the LinkedIn Insight Tag track?",
    a: "Visitor actions like page views, add-to-cart, and purchases, so LinkedIn ad campaigns can measure results and retarget visitors.",
  },
  {
    q: "Do I need to edit my Shopify theme to add the LinkedIn Insight Tag?",
    a: "No. Pixel Tracker injects the tag automatically via Shopify ScriptTags once you paste your Partner ID.",
  },
  {
    q: "Can I use the LinkedIn Insight Tag alongside other platforms?",
    a: "Yes. Pixel Tracker lets you connect LinkedIn alongside Facebook, Google, TikTok, Snapchat, Pinterest, and X pixels from the same dashboard.",
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

export default function LinkedInPixelGuidePage() {
  return (
    <PixelGuide
      slug="linkedin-pixel"
      platformName="LinkedIn Insight Tag"
      h1="How to Set Up the LinkedIn Insight Tag on Shopify with Pixel Tracker"
      intro="Connect your LinkedIn Insight Tag to your Shopify store in a few minutes — no theme code changes required."
      steps={steps}
      faqs={faqs}
      relatedLinks={[
        { label: "LinkedIn Insight Tag troubleshooting", href: "/pixel-tracker/linkedin-pixel/troubleshooting" },
        { label: "LinkedIn Insight Tag events explained", href: "/pixel-tracker/linkedin-pixel/events" },
        { label: "LinkedIn server-side tracking", href: "/pixel-tracker/linkedin-pixel/server-side" },
      ]}
    />
  );
}
