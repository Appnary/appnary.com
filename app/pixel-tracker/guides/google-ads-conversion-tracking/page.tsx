import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/pixel-tracker/guides/google-ads-conversion-tracking", { title: "Google Ads Conversion Tracking on Shopify: Setup and Verification", description: "Check your Google Ads integration, conversion events, and purchase data on Shopify. Pixel Tracker is prelaunch; these checks apply to an available provider." });
const sections = [
{
  "heading": "Keep Google Ads conversion actions separate from GA4",
  "paragraphs": [
    "A Google Ads conversion ID and label identify an Ads conversion action. A GA4 measurement ID belongs to an Analytics data stream. Do not paste one into a field intended for the other or assume that a GA4 purchase event has become the Ads action used for bidding.",
    "For a native Shopify setup, start with [Google's Shopify tag instructions](https://support.google.com/analytics/answer/12183125). A custom server-container setup follows [Google's server-side Ads guide](https://developers.google.com/tag-platform/tag-manager/server-side/ads-setup) and needs separate implementation.",
    "Check the transaction ID across repeated delivery attempts. The same order should retain its identifier, while another order needs a different one. Review the chosen conversion action's diagnostics before relying on bidding reports."
  ]
},
  {
    "heading": "Choose the data source before installing anything",
    "paragraphs": [
      "Confirm the conversion ID and label in your ad account and document which Shopify integration currently sends events. GA4 key events and Google Ads conversion actions are separate. Confirm which action is primary for bidding before comparing their totals.",
      "Follow the [official Google Ads documentation](https://developers.google.com/tag-platform/tag-manager/server-side/ads-setup) and your chosen provider's Shopify instructions. A working base tag does not prove checkout coverage."
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
      "For a test order, compare purchase value, currency, and transaction ID with the store record. Watch for a static example value or a default currency accidentally sent for every order."
    ]
  },
  {
    "heading": "Separate receipt from campaign reporting",
    "paragraphs": [
      "Use Google Ads conversion diagnostics to diagnose delivery. A received event is not proof that Google Ads will attribute the purchase to an ad. Attribution windows, eligible interactions, and reporting delays can cause differences from Shopify order totals.",
      "Use the same dates and currency when reconciling reports. Do not add together conversions claimed by different ad platforms as if they were unique orders."
    ]
  },
  {
    "heading": "Pixel Tracker launch status",
    "paragraphs": [
      "Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform purchase events still need verification. There is no confirmed CAPI or Events API toggle to configure in Pixel Tracker.",
      "The current app approach uses a Shopify theme app extension. An app embed requires activation in the theme editor; checkout event delivery needs a separate end-to-end test. [Join the waitlist](/#waitlist) for launch updates."
    ]
  }
];
const steps = [
  {
    "title": "Record the intended conversion",
    "body": "Confirm the conversion ID and label and select the action you need to measure."
  },
  {
    "title": "Follow the installed provider's setup",
    "body": "Use its documented Shopify flow. Activate any required app embed and confirm checkout support; Pixel Tracker is not available yet."
  },
  {
    "title": "Complete a test order",
    "body": "Inspect browser activity with Tag Assistant, then confirm receipt in Google Ads conversion diagnostics. Check purchase value, currency, and transaction ID."
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
  { label: "Quick Google Ads Setup (5 Steps)", href: "/pixel-tracker/google-ads" },
  { label: "Pixel Tracker Overview", href: "/pixel-tracker" },
  { label: "Facebook Pixel vs. Google Tag", href: "/blog/facebook-pixel-vs-google-tag" },
  { label: "Shopify Analytics vs. Google Analytics", href: "/blog/shopify-analytics-vs-google-analytics" },
  { label: "All Pixel Tracker Guides", href: "/pixel-tracker/guides" },
];


export default function TrackingGuide() {
  return <GuideArticle slug="google-ads-conversion-tracking" h1="Google Ads Conversion Tracking on Shopify: Setup and Verification" tldr="Check your Google Ads integration, conversion events, and purchase data on Shopify. Pixel Tracker is prelaunch; these checks apply to an available provider." intro={["Check your Google Ads integration, conversion events, and purchase data on Shopify. Pixel Tracker is prelaunch; these checks apply to an available provider."]} sections={sections} steps={steps} faqs={faqs} relatedLinks={relatedLinks} />;
}
