import type { Metadata } from "next";
import { IntegrationsHub } from "@/components/integrations-hub";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/integrations", {
  title: "Integrations | Pixel Tracker for Shopify",
  description:
    "Pixel Tracker is a prelaunch Shopify pixel-configuration app. Intended platform coverage is still being verified. Billing will be through Shopify.",
  openGraph: {
    title: "Shopify Pixel Integrations | Pixel Tracker",
    description:
      "Pixel Tracker is a prelaunch Shopify pixel-configuration app. Intended platform coverage is still being verified. Billing will be through Shopify.",
    url: "https://appnary.com/integrations",
  },
});

export default function IntegrationsPage() {
  return <IntegrationsHub />;
}
