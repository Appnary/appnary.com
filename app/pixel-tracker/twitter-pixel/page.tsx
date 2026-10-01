import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/pixel-tracker/twitter-pixel", {
  title: "X Pixel on Shopify: Setup and Event Checks | Appnary",
  description: "Prepare a X tracking setup, verify identifiers and test purchases, and check consent. Pixel Tracker is still in development.",
});

const steps = [
  {
    "title": "Confirm the pixel ID and conversion event ID",
    "body": "Use your X ad account to identify the data source and the conversion action you intend to measure. A base pixel ID is not a purchase conversion event ID. Verify the configured purchase action instead of treating a page-view request as a completed sale."
  },
  {
    "title": "Choose an available Shopify integration",
    "body": "Check the provider's current Shopify setup instructions and checkout coverage. Pixel Tracker is not available to install yet. Do not remove working tracking to switch to a prelaunch app."
  },
  {
    "title": "Check activation and consent",
    "body": "Follow the chosen integration's activation instructions. A theme app embed must be enabled in the theme editor; it does not establish checkout coverage. Review consent settings before testing."
  },
  {
    "title": "Verify events and purchase details",
    "body": "Use browser network tools to inspect browser activity and X Ads conversion diagnostics to check receipt. Complete a test purchase and compare conversion event ID, order value, and currency against the order. A page-view event alone does not prove purchase tracking."
  },
  {
    "title": "Inspect server delivery separately",
    "body": "If your chosen integration includes server delivery, check it separately using the provider's diagnostics and deduplication instructions. Pixel Tracker does not send this platform's server events. A saved G- measurement ID can send a GA4 purchase on paid orders."
  }
];
const faqs = [
  {
    "q": "Can I connect X with Pixel Tracker today?",
    "a": "Pixel Tracker is in development and not available to install. Launch platform coverage is still being verified."
  },
  {
    "q": "Does installing a pixel guarantee purchase tracking?",
    "a": "No. A base tag can load while checkout events are missing or incorrect. Test a complete order and confirm the intended conversion event, value, and currency."
  },
  {
    "q": "Does Pixel Tracker provide server-side tracking?",
    "a": "This platform's server delivery is not confirmed. A saved G- measurement ID can send a GA4 purchase on paid orders."
  },
  {
    "q": "How will Pixel Tracker billing work?",
    "a": "Pricing varies by Shopify app and billing will be through Shopify. Pixel Tracker launch prices and plan limits are not confirmed."
  }
];

export default function PlatformSetupGuide() {
  return <PixelGuide
    slug="twitter-pixel" platformName="X" h1="X Pixel on Shopify: Setup and Event Checks"
    intro="Prepare a X tracking setup, verify identifiers and test purchases, and check consent. Pixel Tracker is still in development." steps={steps} faqs={faqs}
      relatedLinks={[
        { label: "Official X tracking documentation", href: "https://business.x.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites" },
        { label: "X (Twitter) Pixel troubleshooting", href: "/pixel-tracker/twitter-pixel/troubleshooting" },
        { label: "X (Twitter) Pixel events explained", href: "/pixel-tracker/twitter-pixel/events" },
        { label: "X (Twitter) server-side tracking", href: "/pixel-tracker/twitter-pixel/server-side" },
      ]}
  />;
}
