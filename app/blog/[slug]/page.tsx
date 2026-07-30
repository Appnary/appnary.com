import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, ChevronDown, Clock, Tag as TagIcon } from "lucide-react";
import {
  formatDate,
  getAllPosts,
  getPostBySlug,
  renderBody,
} from "@/lib/blog";
import { InlineText } from "@/components/inline-text";
import { stripInline } from "@/lib/text";

const baseUrl = "https://appnary.com";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return { title: "Post not found | Appnary Blog" };
  }
  return {
    title: `${post.title} | Appnary Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://appnary.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = renderBody(post.body);
  const allPosts = getAllPosts();
  const currentIdx = allPosts.findIndex((p) => p.slug === post.slug);
  const newer = currentIdx > 0 ? allPosts[currentIdx - 1] : null;
  const older =
    currentIdx >= 0 && currentIdx < allPosts.length - 1
      ? allPosts[currentIdx + 1]
      : null;
  const faqs = post.faqs ?? [];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${baseUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${baseUrl}/blog/${post.slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: "Appnary" },
    mainEntityOfPage: `${baseUrl}/blog/${post.slug}`,
    image: `${baseUrl}/og-image.png`,
  };

  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: stripInline(faq.a) },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <article className="mx-auto max-w-3xl px-6 pt-16 pb-16 sm:pt-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all posts
        </Link>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="rounded-full bg-aqua/15 px-2.5 py-0.5 font-semibold text-foreground/80">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {formatDate(post.publishedAt)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {post.readingMinutes} min read
            </span>
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground-strong">
            {post.excerpt}
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            By <span className="font-medium text-foreground">{post.author}</span>
          </p>
        </header>

        <div className="mt-10 space-y-5 text-base text-muted-foreground-strong leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>
              <InlineText text={p} />
            </p>
          ))}
        </div>

        {post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-border-themed pt-6">
            <TagIcon className="h-3.5 w-3.5 text-muted-foreground" />
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border-themed bg-surface px-2.5 py-0.5 text-xs font-medium text-muted-foreground-strong"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {faqs.length > 0 && (
          <section aria-labelledby="faq-heading" className="mt-12 border-t border-border-themed pt-10">
            <h2
              id="faq-heading"
              className="mb-6 text-2xl font-bold tracking-tight text-foreground"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-xl border border-border-themed bg-surface shadow-sm transition-all open:border-aqua/30"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-foreground list-none">
                    {faq.q}
                    <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180 shrink-0" />
                  </summary>
                  <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                    <InlineText text={faq.a} />
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        <aside
          aria-labelledby="cta-heading"
          className="mt-12 rounded-2xl border border-aqua/30 bg-aqua/5 p-6 text-center sm:p-8"
        >
          <p id="cta-heading" className="text-base font-semibold text-foreground">
            Pixel Tracker is in development
          </p>
          <p className="mt-1 text-sm text-muted-foreground-strong">
            Join the waitlist for early access when it launches on the Shopify App Store.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/#waitlist"
              className="inline-flex items-center justify-center rounded-lg bg-aqua px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-aqua/90"
            >
              Join the waitlist
            </Link>
            <Link
              href="/pixel-tracker"
              className="inline-flex items-center justify-center rounded-lg border border-border-themed bg-surface px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground"
            >
              See Pixel Tracker
            </Link>
          </div>
        </aside>
      </article>

      {/* Older / newer */}
      <nav className="mx-auto max-w-3xl px-6 pb-24 sm:pb-32">
        <div className="grid gap-4 sm:grid-cols-2">
          {older ? (
            <Link
              href={`/blog/${older.slug}`}
              className="group rounded-xl border border-border-themed bg-surface p-5 transition-all hover:border-aqua/40"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                ← Older
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground group-hover:text-aqua transition-colors">
                {older.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {newer ? (
            <Link
              href={`/blog/${newer.slug}`}
              className="group rounded-xl border border-border-themed bg-surface p-5 text-right transition-all hover:border-aqua/40"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Newer →
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground group-hover:text-aqua transition-colors">
                {newer.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </>
  );
}