import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/pixel-tracker/google-ads", {
  title: "Google Ads Pixel on Shopify: Setup and Event Checks | Appnary",
  description: "Prepare a Google Ads tracking setup, verify identifiers and test purchases, and check consent. Pixel Tracker is still in development.",
});

const steps = [
  {
    "title": "Confirm the conversion ID and label",
    "body": "Use your Google Ads ad account to identify the data source and the conversion action you intend to measure. GA4 key events and Google Ads conversion actions are separate. Confirm which action is primary for bidding before comparing their totals."
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
    "body": "Use Tag Assistant to inspect browser activity and Google Ads conversion diagnostics to check receipt. Complete a test purchase and compare purchase value, currency, and transaction ID against the order. A page-view event alone does not prove purchase tracking."
  },
  {
    "title": "Inspect server delivery separately",
    "body": "If your chosen integration includes server delivery, check it separately using the provider's diagnostics and deduplication instructions. Pixel Tracker server-side delivery is not confirmed."
  }
];
const faqs = [
  {
    "q": "Can I connect Google Ads with Pixel Tracker today?",
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
    slug="google-ads" platformName="Google Ads" h1="Google Ads Pixel on Shopify: Setup and Event Checks"
    intro="Prepare a Google Ads tracking setup, verify identifiers and test purchases, and check consent. Pixel Tracker is still in development." steps={steps} faqs={faqs}
      relatedLinks={[
        { label: "Official Google Ads tracking documentation", href: "https://developers.google.com/tag-platform/tag-manager/server-side/ads-setup" },
        { label: "Google Ads troubleshooting", href: "/pixel-tracker/google-ads/troubleshooting" },
        { label: "Google Ads events explained", href: "/pixel-tracker/google-ads/events" },
        { label: "Google Ads server-side tracking", href: "/pixel-tracker/google-ads/server-side" },
        { label: "Compare Pixel Tracker", href: "/compare" },
      ]}
  />;
}
