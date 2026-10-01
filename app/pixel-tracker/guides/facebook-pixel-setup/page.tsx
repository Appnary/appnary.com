import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/pixel-tracker/guides/facebook-pixel-setup", { title: "Meta Conversion Tracking on Shopify: Setup and Verification", description: "Check your Meta integration, conversion events, and purchase data on Shopify. Pixel Tracker is prelaunch; these checks apply to an available provider." });
const sections = [
{
  "heading": "Shopify Meta data sharing is an integration choice",
  "paragraphs": [
    "Shopify's Facebook & Instagram channel lets merchants choose a data-sharing level and connect a Meta Pixel. Review those settings in that channel, not in an unreleased Pixel Tracker dashboard.",
    "Use Meta Events Manager to inspect the selected data source. For overlapping browser and server purchases, verify the matching event name and event ID. The browser helper alone cannot confirm that Conversions API received the server event."
  ]
},
  {
    "heading": "Choose the data source before installing anything",
    "paragraphs": [
      "Confirm the pixel or dataset ID in your ad account and document which Shopify integration currently sends events. Shopify documents the Facebook & Instagram by Meta channel. Check its data-sharing settings and the connected pixel before adding a second integration.",
      "Follow the [official Meta documentation](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel) and your chosen provider's Shopify instructions. A working base tag does not prove checkout coverage."
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
      "Use Meta Events Manager to diagnose delivery. A received event is not proof that Meta will attribute the purchase to an ad. Attribution windows, eligible interactions, and reporting delays can cause differences from Shopify order totals.",
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
    "body": "Confirm the pixel or dataset ID and select the action you need to measure."
  },
  {
    "title": "Follow the installed provider's setup",
    "body": "Use its documented Shopify flow. Activate any required app embed and confirm checkout support; Pixel Tracker is not available yet."
  },
  {
    "title": "Complete a test order",
    "body": "Inspect browser activity with Meta Pixel Helper, then confirm receipt in Meta Events Manager. Check event name, event ID, value, and currency."
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
  { label: "Quick Meta Pixel setup (5 steps)", href: "/pixel-tracker/meta-pixel" },
  { label: "Server-side tracking with Conversions API", href: "/pixel-tracker/guides/server-side-tracking" },
  { label: "How to calculate ROAS correctly", href: "/pixel-tracker/guides/roas-calculation" },
  { label: "Facebook Pixel vs. Google Tag", href: "/blog/facebook-pixel-vs-google-tag" },
  { label: "Pixel Tracker for Shopify", href: "/pixel-tracker" },
];


export default function TrackingGuide() {
  return <GuideArticle slug="facebook-pixel-setup" h1="Meta Conversion Tracking on Shopify: Setup and Verification" tldr="Check your Meta integration, conversion events, and purchase data on Shopify. Pixel Tracker is prelaunch; these checks apply to an available provider." intro={["Check your Meta integration, conversion events, and purchase data on Shopify. Pixel Tracker is prelaunch; these checks apply to an available provider."]} sections={sections} steps={steps} faqs={faqs} relatedLinks={relatedLinks} />;
}
