import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/pixel-tracker/guides/tiktok-pixel-setup", { title: "TikTok Conversion Tracking on Shopify: Setup and Verification", description: "Check your TikTok integration, conversion events, and purchase data on Shopify. Pixel Tracker is prelaunch; these checks apply to an available provider." });
const sections = [
{
  "heading": "Check TikTok event identity across both paths",
  "paragraphs": [
    "Use the intended Pixel ID in TikTok Events Manager and inspect the actual purchase event name sent by your chosen integration. Do not assume that the event names or mappings match a Meta integration.",
    "TikTok's [deduplication documentation](https://ads.tiktok.com/help/article/event-deduplication?lang=en) explains how overlapping Pixel and Events API deliveries are matched. Confirm that the browser and server report the same event with the required shared event ID. A new order must not reuse the previous order's ID.",
    "If visits from TikTok ads behave differently from direct storefront visits, repeat the test through that visitor path. Compare browser receipt with server receipt before treating an attribution difference as a delivery failure."
  ]
},
  {
    "heading": "Choose the data source before installing anything",
    "paragraphs": [
      "Confirm the Pixel ID in your ad account and document which Shopify integration currently sends events. Test both a normal browser and the path a visitor takes from a TikTok ad. Browser event receipt and campaign attribution answer different questions.",
      "Follow the [official TikTok documentation](https://ads.tiktok.com/help/article/event-deduplication?lang=en) and your chosen provider's Shopify instructions. A working base tag does not prove checkout coverage."
    ]
  },
  {
    "heading": "Avoid multiple senders for the same conversion",
    "paragraphs": [
      "Inventory theme snippets, custom pixels, sales channels, and tracking apps. Before removing anything, determine which events each integration supplies. A duplicate purchase sender can inflate reporting even when both integrations appear healthy.",
      "If browser and server send the same purchase, the integration must follow the platform's deduplication rules. A browser helper cannot establish that server delivery or deduplication works."
    ]
  },
  {
    "heading": "Review consent and event data",
    "paragraphs": [
      "Check the store's privacy settings and the integration's data-sharing controls. Verify behavior when collection is permitted and declined. Server delivery does not override a customer's choice.",
      "For a test order, compare event name, event ID, value, and currency with the store record. Watch for a static example value or a default currency accidentally sent for every order."
    ]
  },
  {
    "heading": "Separate receipt from campaign reporting",
    "paragraphs": [
      "Use TikTok Events Manager to diagnose delivery. A received event is not proof that TikTok will attribute the purchase to an ad. Attribution windows, eligible interactions, and reporting delays can cause differences from Shopify order totals.",
      "Use the same dates and currency when reconciling reports. Do not add together conversions claimed by different ad platforms as if they were unique orders."
    ]
  },
  {
    "heading": "Pixel Tracker launch status",
    "paragraphs": [
      "Pixel Tracker is in development and not available to install. Platform coverage, purchase events, and server-side delivery still need verification. There is no confirmed CAPI or Events API toggle to configure in Pixel Tracker.",
      "The current app approach uses a Shopify theme app extension. An app embed requires activation in the theme editor; checkout event delivery needs a separate end-to-end test. [Join the waitlist](/#waitlist) for launch updates."
    ]
  }
];
const steps = [
  {
    "title": "Record the intended conversion",
    "body": "Confirm the Pixel ID and select the action you need to measure."
  },
  {
    "title": "Follow the installed provider's setup",
    "body": "Use its documented Shopify flow. Activate any required app embed and confirm checkout support; Pixel Tracker is not available yet."
  },
  {
    "title": "Complete a test order",
    "body": "Inspect browser activity with TikTok Pixel Helper, then confirm receipt in TikTok Events Manager. Check event name, event ID, value, and currency."
  },
  {
    "title": "Check missing or duplicated events",
    "body": "Inspect browser and server sources separately. Verify one purchase remains one conversion after retries and deduplication."
  }
];
const faqs = [
  {
    "q": "Can I follow these steps in Pixel Tracker today?",
    "a": "No. Pixel Tracker is prelaunch. Use the documentation for an available integration; Pixel Tracker launch coverage and server delivery are not confirmed."
  },
  {
    "q": "Does a received event guarantee an attributed sale?",
    "a": "No. Event delivery and ad attribution are separate. Check diagnostics before comparing campaign totals."
  },
  {
    "q": "Can server tracking ignore consent choices?",
    "a": "No. Review the store's privacy settings and the integration's data-sharing behavior for both browser and server delivery."
  }
];
const relatedLinks = [
  { label: "Quick TikTok Pixel Setup (5 Steps)", href: "/pixel-tracker/tiktok-pixel" },
  { label: "Server-Side Tracking with the Events API & CAPI", href: "/pixel-tracker/guides/server-side-tracking" },
  { label: "All Setup Guides", href: "/pixel-tracker/guides" },
  { label: "Compare Pixel Tracker to Other Apps", href: "/compare" },
  { label: "Pixel Tracker Product Overview", href: "/pixel-tracker" },
];


export default function TrackingGuide() {
  return <GuideArticle slug="tiktok-pixel-setup" h1="TikTok Conversion Tracking on Shopify: Setup and Verification" tldr="Check your TikTok integration, conversion events, and purchase data on Shopify. Pixel Tracker is prelaunch; these checks apply to an available provider." intro={["Check your TikTok integration, conversion events, and purchase data on Shopify. Pixel Tracker is prelaunch; these checks apply to an available provider."]} sections={sections} steps={steps} faqs={faqs} relatedLinks={relatedLinks} />;
}
