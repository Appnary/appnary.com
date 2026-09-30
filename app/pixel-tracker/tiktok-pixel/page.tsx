import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/pixel-tracker/tiktok-pixel", {
  title: "TikTok Pixel on Shopify: Setup and Event Checks | Appnary",
  description: "Prepare a TikTok tracking setup, verify identifiers and test purchases, and check consent. Pixel Tracker is still in development.",
});

const steps = [
  {
    "title": "Confirm the Pixel ID",
    "body": "Use your TikTok ad account to identify the data source and the conversion action you intend to measure. Test both a normal browser and the path a visitor takes from a TikTok ad. Browser event receipt and campaign attribution answer different questions."
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
    "body": "Use TikTok Pixel Helper to inspect browser activity and TikTok Events Manager to check receipt. Complete a test purchase and compare event name, event ID, value, and currency against the order. A page-view event alone does not prove purchase tracking."
  },
  {
    "title": "Inspect server delivery separately",
    "body": "If your chosen integration includes server delivery, check it separately using the provider's diagnostics and deduplication instructions. Pixel Tracker server-side delivery is not confirmed."
  }
];
const faqs = [
  {
    "q": "Can I connect TikTok with Pixel Tracker today?",
    "a": "Pixel Tracker is in development and not available to install. Launch platform coverage is still being verified."
  },
  {
    "q": "Does installing a pixel guarantee purchase tracking?",
    "a": "No. A base tag can load while checkout events are missing or incorrect. Test a complete order and confirm the intended conversion event, value, and currency."
  },
  {
    "q": "Does Pixel Tracker provide server-side tracking?",
    "a": "Server-side delivery and browser/server deduplication are not confirmed launch features."
  },
  {
    "q": "How will Pixel Tracker billing work?",
    "a": "Pricing varies by Shopify app and billing will be through Shopify. Pixel Tracker launch prices and plan limits are not confirmed."
  }
];

export default function PlatformSetupGuide() {
  return <PixelGuide
    slug="tiktok-pixel" platformName="TikTok" h1="TikTok Pixel on Shopify: Setup and Event Checks"
    intro="Prepare a TikTok tracking setup, verify identifiers and test purchases, and check consent. Pixel Tracker is still in development." steps={steps} faqs={faqs}
      relatedLinks={[
        { label: "Official TikTok tracking documentation", href: "https://ads.tiktok.com/help/article/event-deduplication?lang=en" },
        { label: "TikTok Pixel troubleshooting", href: "/pixel-tracker/tiktok-pixel/troubleshooting" },
        { label: "TikTok Pixel events explained", href: "/pixel-tracker/tiktok-pixel/events" },
        { label: "TikTok Pixel server-side tracking", href: "/pixel-tracker/tiktok-pixel/server-side" },
      ]}
  />;
}
