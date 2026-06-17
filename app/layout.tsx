import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

const baseUrl = "https://appnary.com";

export const metadata: Metadata = {
  title: "Appnary — Shopify Apps That Work the Way You Do",
  description: "Simple, affordable tools for Shopify merchants. Get early access.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Appnary — Shopify Apps That Work the Way You Do",
    description: "Simple, affordable tools for Shopify merchants. Get early access.",
    url: baseUrl,
    siteName: "Appnary",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Appnary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Appnary — Shopify Apps That Work the Way You Do",
    description: "Simple, affordable tools for Shopify merchants. Get early access.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Appnary",
  url: baseUrl,
  logo: `${baseUrl}/appnary-logo.svg`,
  description: "Simple, affordable Shopify apps for merchants.",
  sameAs: [],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-mist font-sans text-ink antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
