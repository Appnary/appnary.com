import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/pixel-tracker/guides/server-side-tracking", { title: "Server-Side Tracking for Shopify Merchants", description: "Understand server event delivery, consent, and browser/server deduplication before choosing a Shopify tracking integration." });
const sections = [
  {
    "heading": "A browser pixel and a server sender are separate",
    "paragraphs": [
      "A browser pixel sends events from the visitor's browser. A server integration sends events from a backend to an advertising platform. It needs its own event source, authorization, delivery handling, and monitoring. Saving a pixel ID is not enough to establish this path.",
      "A server sender can avoid depending on a browser request for a recorded order. It cannot guarantee every event is collected, matched, or attributed, and it does not bypass consent or tracking choices."
    ]
  },
  {
    "heading": "Confirm what the chosen provider actually sends",
    "paragraphs": [
      "Ask which Shopify events the integration supports, how it receives them, and where you can inspect failed deliveries. Page views, checkout starts, and paid orders are distinct events; support for one does not establish the others.",
      "Shopify documents Meta data sharing through its [Facebook & Instagram channel](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel). For other platforms, use their current integration documentation rather than assuming one token enables every destination."
    ]
  },
  {
    "heading": "Verify deduplication instead of assuming it",
    "paragraphs": [
      "If both browser and server report a purchase, follow the receiving platform's event identity requirements. For example, [TikTok documents event deduplication](https://ads.tiktok.com/help/article/event-deduplication?lang=en) for overlapping deliveries. A retry should preserve the original event identity; a different purchase needs a different identity.",
      "Check source, event name, identifiers, value, and currency for a test order. A browser helper shows browser activity; it does not prove a server event arrived or that duplicate handling worked."
    ]
  },
  {
    "heading": "What Pixel Tracker sends from the server",
    "paragraphs": [
      "Pixel Tracker is in development and is not available to install. A saved G- measurement ID can send a GA4 purchase when an order is paid, using the order id as the transaction id. Meta CAPI, TikTok Events API, and automatic browser/server deduplication are not verified. There is no confirmed CAPI token field to follow in this guide.",
      "Evaluate an available integration if you need server tracking today. [Join the Pixel Tracker waitlist](/#waitlist) for launch updates; pricing will be specific to the app and billed through Shopify."
    ]
  }
];
const steps = [
  {
    "title": "Choose a documented integration",
    "body": "Confirm the supported Shopify events and destination platform before adding credentials."
  },
  {
    "title": "Review consent and matching data",
    "body": "Confirm which data is sent and how the provider applies customer choices."
  },
  {
    "title": "Inspect a test purchase",
    "body": "Check server receipt and compare event identifiers, purchase value, and currency with the order."
  },
  {
    "title": "Check retries and duplicates",
    "body": "Verify browser/server overlap and retried deliveries do not create extra purchases. Monitor delivery failures separately from campaign attribution."
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
  { label: "Pixel Tracker overview", href: "/pixel-tracker" },
  { label: "Facebook pixel setup guide", href: "/pixel-tracker/guides/facebook-pixel-setup" },
  { label: "TikTok pixel setup guide", href: "/pixel-tracker/guides/tiktok-pixel-setup" },
  { label: "Shopify server-side tracking guide (blog)", href: "/blog/shopify-server-side-tracking-guide" },
  { label: "All Pixel Tracker guides", href: "/pixel-tracker/guides" },
];


export default function TrackingGuide() {
  return <GuideArticle slug="server-side-tracking" h1="Server-Side Tracking for Shopify Merchants" tldr="Understand server event delivery, consent, and browser/server deduplication before choosing a Shopify tracking integration." intro={["Understand server event delivery, consent, and browser/server deduplication before choosing a Shopify tracking integration."]} sections={sections} steps={steps} faqs={faqs} relatedLinks={relatedLinks} />;
}
