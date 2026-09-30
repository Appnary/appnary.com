import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/pixel-tracker/linkedin-pixel", {
  title: "LinkedIn Pixel on Shopify: Setup and Event Checks | Appnary",
  description: "Prepare a LinkedIn tracking setup, verify identifiers and test purchases, and check consent. Pixel Tracker is still in development.",
});

const steps = [
  {
    "title": "Confirm the Partner ID and conversion rule",
    "body": "Use your LinkedIn ad account to identify the data source and the conversion action you intend to measure. Installing the Insight Tag is separate from defining a conversion. Confirm the rule measures the intended action; a page visit is not proof of a purchase."
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
    "body": "Use Insight Tag diagnostics to inspect browser activity and LinkedIn Campaign Manager to check receipt. Complete a test purchase and compare conversion rule, value, and event identifier against the order. A page-view event alone does not prove purchase tracking."
  },
  {
    "title": "Inspect server delivery separately",
    "body": "If your chosen integration includes server delivery, check it separately using the provider's diagnostics and deduplication instructions. Pixel Tracker server-side delivery is not confirmed."
  }
];
const faqs = [
  {
    "q": "Can I connect LinkedIn with Pixel Tracker today?",
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
    slug="linkedin-pixel" platformName="LinkedIn" h1="LinkedIn Pixel on Shopify: Setup and Event Checks"
    intro="Prepare a LinkedIn tracking setup, verify identifiers and test purchases, and check consent. Pixel Tracker is still in development." steps={steps} faqs={faqs}
      relatedLinks={[
        { label: "Official LinkedIn tracking documentation", href: "https://learn.microsoft.com/en-us/linkedin/marketing/conversions/conversions-overview?view=li-lms-2026-02" },
        { label: "LinkedIn Insight Tag troubleshooting", href: "/pixel-tracker/linkedin-pixel/troubleshooting" },
        { label: "LinkedIn Insight Tag events explained", href: "/pixel-tracker/linkedin-pixel/events" },
        { label: "LinkedIn server-side tracking", href: "/pixel-tracker/linkedin-pixel/server-side" },
      ]}
  />;
}
