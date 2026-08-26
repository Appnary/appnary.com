# AGENTS

Public landing site for **appnary.com** (Next.js, Railway). Workspace docs live in the private `Appnary/workspace` repo.

## SEO

- Pause new `/vs/` and `/alternatives/` pages until Google Search Console shows 40+ of the existing 88 sitemap URLs indexed (22 as of 26 Aug 2026). The freeze is also at the top of `SEO-GEO-PSEO-PLAN.md`.
- New page metadata goes through `withPageSeo()` in `lib/seo.ts`. That sets an HTTPS-apex canonical and page-specific Twitter tags.
- Do not restore `public/robots.txt`. `app/robots.ts` must win (`Disallow: /api/`, allow `/api/llms.txt`).
- Do not add `AggregateRating` or review schema unless the ratings are real and public.
- Do not add `SoftwareApplication.installUrl` until `https://apps.shopify.com/pixel-tracker` returns 200.
- Do not add Compare to the main nav. Footer and in-page links are enough.
- Canonicals are HTTPS apex only (`https://appnary.com/...`).
