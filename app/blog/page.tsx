import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import {
  formatDate,
  getAllCategories,
  getAllPosts,
  getRecentPosts,
} from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Appnary | Shopify Tips & Product Updates",
  description:
    "Product updates from the Appnary team and practical tips for Shopify merchants. New posts every week.",
  openGraph: {
    title: "Blog | Appnary",
    description: "Product updates and Shopify tips from the Appnary team.",
    url: "https://appnary.com/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function BlogIndexPage() {
  const featured = getRecentPosts(1)[0];
  const rest = getAllPosts().slice(1);
  const categories = getAllCategories();

  return (
    <>
      {/* Header */}
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12 text-center sm:pt-28 sm:pb-16">
        <span className="inline-flex items-center rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-semibold text-foreground">
          The Appnary Blog
        </span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Product updates &{" "}
          <span className="bg-gradient-to-r from-aqua to-lime bg-clip-text text-transparent">
            Shopify tips
          </span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground-strong">
          What we&apos;re building, what we&apos;re learning, and the
          practical stuff we wish someone had told us sooner.
        </p>
      </section>

      {/* Featured + categories */}
      <section className="mx-auto max-w-5xl px-6 pb-8">
        {categories.length > 0 && (
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Topics:
            </span>
            {categories.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border-themed bg-surface px-3 py-1 text-xs font-medium text-muted-foreground-strong"
              >
                {c}
              </span>
            ))}
          </div>
        )}

        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group block overflow-hidden rounded-2xl border border-border-themed bg-surface shadow-sm transition-all hover:border-aqua/40 hover:shadow-md"
          >
            <div className="grid gap-0 md:grid-cols-5">
              <div className="relative md:col-span-2 bg-gradient-to-br from-aqua/30 via-lime/20 to-aqua/10 p-8 sm:p-10 min-h-[180px] flex items-center justify-center">
                <span className="text-xs font-semibold uppercase tracking-wider text-ink/70">
                  Featured
                </span>
              </div>
              <div className="md:col-span-3 p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-aqua/15 px-2.5 py-0.5 font-semibold text-foreground/80">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {formatDate(featured.publishedAt)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {featured.readingMinutes} min read
                  </span>
                </div>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground group-hover:text-aqua transition-colors sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-3 text-base text-muted-foreground-strong">
                  {featured.excerpt}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-aqua group-hover:underline">
                  Read more →
                </span>
              </div>
            </div>
          </Link>
        )}
      </section>

      {/* Post grid */}
      <section className="mx-auto max-w-5xl px-6 pb-24 sm:pb-32">
        <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Latest posts
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-xl border border-border-themed bg-surface p-6 shadow-sm transition-all hover:border-aqua/40 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="rounded-full bg-aqua/15 px-2.5 py-0.5 font-semibold text-foreground/80">
                  {post.category}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" /> {formatDate(post.publishedAt)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {post.readingMinutes} min
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-aqua transition-colors">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {post.excerpt}
              </p>
              <span className="mt-4 text-sm font-medium text-aqua group-hover:underline">
                Read more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}