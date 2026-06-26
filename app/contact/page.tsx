import type { Metadata } from "next";
import { Briefcase, HelpCircle, Mail, MessageSquare, Newspaper } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Appnary | Support & Business Inquiries",
  description:
    "Reach the Appnary team for support, pre-sales questions, partnerships, press, or anything else.",
  openGraph: {
    title: "Contact | Appnary",
    description: "Support and business inquiries for Appnary.",
    url: "https://appnary.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const channels = [
  {
    icon: HelpCircle,
    title: "App support",
    body: "Questions about Pixel Tracker, billing, or how something works. We answer within 48 hours on weekdays.",
  },
  {
    icon: MessageSquare,
    title: "Pre-sales",
    body: "Wondering if Pixel Tracker is right for your store? Tell us a bit about what you sell and we'll let you know.",
  },
  {
    icon: Briefcase,
    title: "Partnerships",
    body: "Agencies, integrators, and Shopify partners. We love building relationships. Tell us what you have in mind.",
  },
  {
    icon: Newspaper,
    title: "Press",
    body: "Working on a story or a review? Email us and we'll get you what you need quickly.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-12 text-center sm:pt-28 sm:pb-16">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          Get in touch
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          We&apos;d love to{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            hear from you
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">
          Support, sales, partnerships, or just a question. We read every
          message and reply within two business days.
        </p>
      </section>

      {/* Channels */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-border-themed bg-surface p-5"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-aqua/10">
                <c.icon className="h-4.5 w-4.5 text-aqua" strokeWidth={2.25} />
              </div>
              <h2 className="text-sm font-semibold text-foreground">
                {c.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + email */}
      <section className="mx-auto max-w-3xl px-6 pb-16 sm:pb-24">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-3 rounded-2xl border border-border-themed bg-surface p-6 shadow-sm sm:p-8">
            <h2 className="text-lg font-semibold text-foreground">
              Send us a message
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill out the form and we&apos;ll get back to you soon.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border-themed bg-section p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Prefer email?
              </h2>
              <p className="mt-2 text-sm text-muted-foreground-strong">
                Drop us a line directly. Works for support, sales, and
                partnerships.
              </p>
              <a
                href="mailto:hello@appnary.com"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-border-themed bg-surface px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-aqua"
              >
                <Mail className="h-4 w-4 text-aqua" /> hello@appnary.com
              </a>
            </div>

            <div className="rounded-2xl border border-border-themed bg-section p-6">
              <h2 className="text-lg font-semibold text-foreground">
                Common questions
              </h2>
              <p className="mt-2 text-sm text-muted-foreground-strong">
                Most answers are already in our docs.
              </p>
              <a
                href="/docs"
                className="mt-4 inline-block text-sm font-semibold text-aqua hover:underline"
              >
                Browse the docs →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}