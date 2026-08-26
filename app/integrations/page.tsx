import type { Metadata } from "next";
import { IntegrationsHub } from "@/components/integrations-hub";
import { withPageSeo } from "@/lib/seo";

export const metadata: Metadata = withPageSeo("/integrations", {
  title: "Integrations | Pixel Tracker for Shopify",
  description:
    "Pixel Tracker connects tracking pixels for Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, LinkedIn, and X (Twitter) from one Shopify dashboard.",
  openGraph: {
    title: "Shopify Pixel Integrations | Pixel Tracker",
    description:
      "Connect tracking pixels for 7 ad platforms from one Shopify dashboard.",
    url: "https://appnary.com/integrations",
  },
});

export default function IntegrationsPage() {
  return <IntegrationsHub />;
}
