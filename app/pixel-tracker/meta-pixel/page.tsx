import type { Metadata } from "next";
import { PixelGuide } from "@/components/pixel-guide";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/pixel-tracker/meta-pixel", {
  title: "Meta Pixel on Shopify: Setup and Event Checks | Appnary",
  description:
    "Set up a Meta Pixel on Shopify, check test events, consent, and duplicate purchases. Pixel Tracker is in development; use an available integration today.",
  openGraph: {
    title: "Meta Pixel on Shopify: Setup and Event Checks",
    description:
      "Check Shopify Meta Pixel setup, test events, consent, and browser/server deduplication. Pixel Tracker is not publicly available yet.",
    url: "https://appnary.com/pixel-tracker/meta-pixel",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
});

const steps = [
  {
    title: "Choose an available integration",
    body: "Pixel Tracker is still in development. For a setup you can use today, Shopify documents the Facebook & Instagram by Meta channel. Check existing theme code, apps, and custom pixels before connecting another copy of the same pixel.",
  },
  {
    title: "Connect the intended Meta Pixel",
    body: "In the Facebook & Instagram channel, open Settings and Share data settings. Choose the data-sharing level and connect the intended pixel. Confirm its ID matches the data source in Meta Events Manager. These are the native channel's steps, not Pixel Tracker's dashboard.",
  },
  {
    title: "Check customer privacy settings",
    body: "Review the store's consent settings before testing. Server-side delivery doesn't remove the need to respect customer choices. Test both allowed and declined states where applicable; don't assume a missing event is a broken pixel when collection was declined.",
  },
  {
    title: "Verify a browser purchase",
    body: "Use Events Manager's Test Events view while you browse a product, add it to the cart, and complete a test order. Check the intended pixel receives the expected events and the purchase value and currency match the test order. Pixel Helper can inspect browser events; it does not prove server events arrived.",
  },
  {
    title: "Check browser and server deduplication",
    body: "If your chosen integration sends the same purchase through the pixel and Conversions API, inspect both delivery paths. The paired events should use the same event name and event ID for that purchase. A different purchase needs its own ID. Follow your integration's diagnostics rather than adding a second independent Purchase sender.",
  },
  {
    title: "Separate delivery from attribution",
    body: "Resolve event warnings and duplicates before relying on Ads Manager totals. Seeing a test event confirms receipt, not that Meta will attribute a sale to an ad or recover every event blocked in the browser.",
  },
];

const faqs = [
  {
    q: "Can I install Pixel Tracker from the Shopify App Store today?",
    a: "Not yet. Pixel Tracker is in development. Join the waitlist for launch updates, or use Shopify's documented Facebook & Instagram channel for an available setup.",
  },
  {
    q: "Does adding Conversions API replace the Meta Pixel?",
    a: "Browser and server events can work together. If both report the same action, the integration needs matching event names and IDs to deduplicate it. Server-side delivery isn't a guarantee that every purchase will be measured.",
  },
  {
    q: "Does Pixel Helper verify Conversions API events?",
    a: "Pixel Helper inspects the browser pixel. Check server-event receipt and diagnostics separately in Events Manager for the integration you use.",
  },
  {
    q: "How will Pixel Tracker pricing and billing work?",
    a: "Pricing is specific to each Shopify app, and billing is handled through Shopify. Check the app's public Shopify listing and subscription confirmation when it is available; this guide doesn't confirm launch prices.",
  },
];

export default function MetaPixelGuidePage() {
  return (
    <PixelGuide
      slug="meta-pixel"
      platformName="Meta Pixel"
      h1="Meta Pixel on Shopify: Setup and Event Checks"
      intro="Use an available Shopify integration to connect your Meta Pixel, then verify consent, purchase events, and duplicates. Pixel Tracker is still in development."
      steps={steps}
      faqs={faqs}
      relatedLinks={[
        { label: "Shopify: Meta Pixel setup and duplicate checks", href: "https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel" },
        { label: "Meta: Conversions API event deduplication", href: "https://developers.facebook.com/docs/marketing-api/conversions-api/deduplicate-pixel-and-server-events" },
        { label: "Meta Pixel troubleshooting", href: "/pixel-tracker/meta-pixel/troubleshooting" },
        { label: "Meta Pixel events explained", href: "/pixel-tracker/meta-pixel/events" },
        { label: "Meta Pixel server-side tracking", href: "/pixel-tracker/meta-pixel/server-side" },
        { label: "Full Facebook pixel setup guide", href: "/pixel-tracker/guides/facebook-pixel-setup" },
        { label: "LinkedIn Insight Tag setup", href: "/pixel-tracker/linkedin-pixel" },
        { label: "Pixel health check tool", href: "/tools/pixel-health-check" },
        { label: "Compare Pixel Tracker", href: "/compare" },
      ]}
    />
  );
}
