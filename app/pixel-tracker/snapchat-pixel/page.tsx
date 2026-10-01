import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/pixel-tracker/snapchat-pixel", {
  title: "Snapchat Pixel on Shopify: Setup and Event Checks | Appnary",
  description: "Prepare a Snapchat tracking setup, verify identifiers and test purchases, and check consent. Pixel Tracker is still in development.",
});

const steps = [
  {
    "title": "Confirm the Snap Pixel ID",
    "body": "Use your Snapchat ad account to identify the data source and the conversion action you intend to measure. Test the path from a Snap ad landing page through checkout. A working landing-page pixel does not establish that the checkout integration sends PURCHASE."
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
    "body": "Use Snap Pixel Helper to inspect browser activity and Snapchat Events Manager to check receipt. Complete a test purchase and compare event type, price, currency, and transaction identifier against the order. A page-view event alone does not prove purchase tracking."
  },
  {
    "title": "Inspect server delivery separately",
    "body": "If your chosen integration includes server delivery, check it separately using the provider's diagnostics and deduplication instructions. Pixel Tracker does not send this platform's server events. A saved G- measurement ID can send a GA4 purchase on paid orders."
  }
];
const faqs = [
  {
    "q": "Can I connect Snapchat with Pixel Tracker today?",
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
    slug="snapchat-pixel" platformName="Snapchat" h1="Snapchat Pixel on Shopify: Setup and Event Checks"
    intro="Prepare a Snapchat tracking setup, verify identifiers and test purchases, and check consent. Pixel Tracker is still in development." steps={steps} faqs={faqs}
      relatedLinks={[
        { label: "Official Snapchat tracking documentation", href: "https://businesshelp.snapchat.com/s/topic/0TO8b000000P7mXGAS/integration-methods?language=en_US" },
        { label: "Snapchat Pixel troubleshooting", href: "/pixel-tracker/snapchat-pixel/troubleshooting" },
        { label: "Snapchat Pixel events explained", href: "/pixel-tracker/snapchat-pixel/events" },
        { label: "Snapchat server-side tracking", href: "/pixel-tracker/snapchat-pixel/server-side" },
      ]}
  />;
}
