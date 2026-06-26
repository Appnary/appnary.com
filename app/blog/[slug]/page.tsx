import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag as TagIcon } from "lucide-react";
import {
  formatDate,
  getAllPosts,
  getPostBySlug,
  renderBody,
} from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const post = getPostBySlug(params.slug);
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

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const paragraphs = renderBody(post.body);
  const allPosts = getAllPosts();
  const currentIdx = allPosts.findIndex((p) => p.slug === post.slug);
  const newer = currentIdx > 0 ? allPosts[currentIdx - 1] : null;
  const older =
    currentIdx >= 0 && currentIdx < allPosts.length - 1
      ? allPosts[currentIdx + 1]
      : null;

  return (
    <>
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
            <p key={i}>{p}</p>
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