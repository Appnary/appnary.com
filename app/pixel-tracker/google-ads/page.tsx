import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";

export const metadata: Metadata = {
  title: "Google Ads Tag Setup for Shopify | Pixel Tracker | Appnary",
  description:
    "How to connect a Google Ads conversion tag to your Shopify store with Pixel Tracker. No theme code required.",
  openGraph: {
    title: "Google Ads Tag Setup for Shopify | Pixel Tracker",
    description:
      "Connect a Google Ads conversion tag to your Shopify store with Pixel Tracker. No code required.",
    url: "https://appnary.com/pixel-tracker/google-ads",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const steps = [
  {
    title: "Get your Google Ads Tag ID",
    body: "In Google Ads, go to Tools & Settings → Conversions (or Google Tag setup) and copy your conversion ID/tag ID.",
  },
  {
    title: "Open the Pixel Tracker dashboard",
    body: "From your Shopify admin, open Pixel Tracker's dashboard.",
  },
  {
    title: "Paste the Tag ID",
    body: "Enter your Google Ads Tag ID in the Google Ads field and save. No theme editing is required.",
  },
  {
    title: "Confirm the tag is firing",
    body: "Pixel Tracker injects the tag automatically on every storefront page via Shopify ScriptTags. Use Google Tag Assistant to confirm it's firing correctly.",
  },
];

const faqs = [
  {
    q: "Does Pixel Tracker support Google Analytics (GA4)?",
    a: "No. Pixel Tracker currently supports the Google Ads conversion tag, not Google Analytics/GA4.",
  },
  {
    q: "What does the Google Ads tag track?",
    a: "Conversion events like purchases, so Google Ads campaigns can measure return on ad spend and optimize bidding.",
  },
  {
    q: "Do I need to edit my Shopify theme to add the Google Ads tag?",
    a: "No. Pixel Tracker injects the tag automatically via Shopify ScriptTags once you paste your Tag ID.",
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

export default function GoogleAdsGuidePage() {
  return (
    <PixelGuide
      slug="google-ads"
      platformName="Google Ads"
      h1="How to Set Up the Google Ads Tag on Shopify with Pixel Tracker"
      intro="Connect a Google Ads conversion tag to your Shopify store in a few minutes — no theme code changes required."
      steps={steps}
      faqs={faqs}
    />
  );
}
