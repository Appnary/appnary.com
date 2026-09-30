import type { Metadata } from "next";
import { withPageSeo } from "@/lib/seo";
import ProductShowcase from "./product-showcase";
import { ContactBanner, PageIntro } from "./sections";
import "./products.css";

export const metadata: Metadata = withPageSeo("/products", {
  title: "Our products | Appnary",
  description: "Explore CloudPloy, SkaleAgents, Crontinel, Toolblip, AmazingPlugins, and harun.dev. More products and projects from the people behind Appnary.",
  openGraph: { images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Appnary" }] },
});

export default function ProductsPage() {
  return (
    <div className="binary-products">
      <PageIntro label="The Binary Labs collection" title="Built out of curiosity. Made to be useful." description="Cloud tools, everyday utilities, and better ways to run a store. Different problems, the same hands-on approach." />
      <section className="wrap catalog-section" aria-label="Product catalog">
        <ProductShowcase searchable />
      </section>
      <ContactBanner />
    </div>
  );
}
