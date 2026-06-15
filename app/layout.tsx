import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
export const metadata: Metadata = {
  title: "Appnary — Shopify Apps That Work the Way You Do",
  description: "Simple, affordable tools for Shopify merchants. Get early access.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-mist font-sans text-ink antialiased"><Navbar /><main>{children}</main><Footer /></body>
    </html>
  );
}
