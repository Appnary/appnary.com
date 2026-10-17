import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/components/theme-provider";

const baseUrl = "https://appnary.com";
const GA_ID = "G-LZHBMYJFQF";

export const metadata: Metadata = {
  title: "Appnary | Shopify Apps That Work the Way You Do",
  description: "Simple, affordable tools for Shopify merchants. Get early access.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Appnary | Shopify Apps That Work the Way You Do",
    description: "Simple, affordable tools for Shopify merchants. Get early access.",
    url: baseUrl,
    siteName: "Appnary",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Appnary" }],
  },
  twitter: {
    card: "summary_large_image",
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
  foundingDate: "2026",
  founder: {
    "@type": "Person",
    name: "Harun R. Rayhan",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "Binary Labs LLC",
  },
  sameAs: [
    "https://github.com/Appnary",
    "https://x.com/appnary",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set theme before first paint to avoid FOUC. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
