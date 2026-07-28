# Appnary SEO/GEO/pSEO Action Plan
**Date:** July 27, 2026
**Status:** Planning Phase

---

## Current State Summary

| Metric | Value |
|--------|-------|
| Pages indexed | 7 (out of 15 in sitemap) |
| Total impressions (28d) | 7 |
| Total clicks (28d) | 0 |
| Search queries | None |
| Domain authority | Very low (new site) |
| AI optimization | Good (llms.txt, structured data) |

---

## Phase 1: Quick Wins (Weeks 1-2)
**Goal:** Get indexed, establish baseline

### 1.1 Fix Indexing (Immediate)
- [ ] Submit all 15 sitemap URLs for manual indexing via GSC
- [ ] Fix `sameAs: []` in Organization schema (add social profiles)
- [ ] Add `BreadcrumbList` to all inner pages
- [ ] Add `SoftwareApplication` schema to compare page

### 1.2 Create Missing Platform Pages (High Impact)
- [ ] `/pixel-tracker/snapchat-pixel` — "snapchat pixel shopify"
- [ ] `/pixel-tracker/pinterest-pixel` — "pinterest tag shopify"
- [ ] `/pixel-tracker/linkedin-pixel` — "linkedin insight tag shopify"
- [ ] `/pixel-tracker/twitter-pixel` — "twitter pixel shopify"
- [ ] Each with HowTo schema, step-by-step guide

### 1.3 Fix Technical SEO
- [ ] Ensure `robots.txt` allows all AI crawlers (already done)
- [ ] Add `sitemap.xml` to GSC (already done)
- [ ] Fix any broken links
- [ ] Add canonical URLs to all pages

---

## Phase 2: pSEO Pages (Weeks 3-6)
**Goal:** Capture high-intent comparison/alternative searches

### 2.0 Preconditions — read before writing any page content

These aren't optional polish; each one changes what gets built or what the content is allowed to say.

1. **`/compare` is currently stale and will contradict the new pages.** It still describes the pre-pivot "privacy-friendly analytics with heatmaps" product, lists `$4.99/mo flat` pricing, and offers a "14-day free trial, no credit card required" — none of which are true of the current product (a multi-platform pixel connector, $0/$7/$15/$29 tiers, pre-launch/waitlist, no trial). It compares against Google Analytics and Hotjar-style tools, not the `/vs/` competitor set below. **`/compare` must be rewritten as part of this phase** — it's the natural index/hub page linking to all 10 `/vs/` pages, not a separate stale artifact. Scoped as task 2.5 below.

2. **No fabricated ratings.** The brief asks for `Review`/`AggregateRating` schema on the `/alternatives/` pages. Pixel Tracker has zero real users or reviews (pre-launch, waitlist-only) — publishing `AggregateRating` for it would be fabricated structured data (a Google Search Console spam-action risk, and the same "manufacture fake reviews" line I won't cross regardless of framing). **Plan uses `ItemList`/`CollectionPage` schema instead** — an honest ranked list, no star ratings for us. If real, citable ratings exist for competitors (their own App Store listing, with a "last checked" date), those can be included per-competitor; nothing gets a number we didn't verify.

3. **Competitor premise-check — DONE (2026-07-28). Result: 0 of 10 targets are a clean, same-tier head-to-head match.** Full research pass completed via parallel web research per competitor. Findings:

   | Competitor | Actual category | Real pricing (verified) | Verdict |
   |---|---|---|---|
   | Triple Whale | Attribution + profit BI + AI ops suite | Free (limited); $219/mo entry; $749/mo; enterprise custom | **Mismatch/wrong tier** — entry paid plan is 7-30x our range. Bundles its own pixel as one feature of a much larger suite. |
   | Gleam | Giveaway/contest/referral platform | $0 / $59 / $179 / $499 per Shopify listing | **Mismatch, confirmed** — only "pixel" feature is a single entry-tracking field (Lead event on contest entry), not a tag/pixel connector. Not either/or with Pixel Tracker. |
   | Hyros | Cross-device attribution layered on top of existing pixels | ~$230/mo+ (revenue-tiered, mostly quote-gated) | **Mismatch/complementary** — assumes pixels already installed; solves a different problem (attribution, not tag firing). |
   | Northbeam | Enterprise MMM/attribution platform | Starts $1,500/mo; not Shopify-specific; Shopify isn't even a listed integration | **Mismatch, wrong tier** — enterprise analytics for $250k+/mo ad spend brands, no free/cheap plan. |
   | Elevar | Server-side data layer / event pipeline (agency/technical audience) | $225 / $650 / $1,250/mo, no free tier | **Mismatch, wrong tier/audience** — closest in category (does forward pixel-style events) but built for technical/agency setup, not our no-code buyer. Best candidate for a "simpler/cheaper alternative to" reframe, not a straight vs. |
   | Lifetimely (by Amp) | Profit/LTV analytics, consumes ad-spend data | Free–$999/mo, order-volume gated | **Mismatch, confirmed** — downstream BI tool that reads data Pixel Tracker would help produce; no pixel firing at all. |
   | BeProfit (now Viably) | Profit/P&L analytics, consumes ad-spend data | $49 / $99 / $149 / $249/mo | **Mismatch, confirmed** — same shape as Lifetimely; complementary, not competitive. |
   | Polar Analytics | Enterprise BI/data-warehouse + attribution | From ~$750/mo (GMV-scaled, demo-gated) | **Mismatch, wrong tier** — bundles a first-party pixel as one line-item inside an enterprise suite. |
   | TrackBee | Ambiguous — two unrelated products share the name: (a) trackbee.io, an attribution/analytics SaaS positioned against Triple Whale, €79-449/mo; (b) an unrelated 3-review free Shopify listing | N/A — no single clear match | **Drop/replace** — neither product is a clean, verifiable match; picking either risks misrepresenting a real company. |
   | AfterSell (Rokt AfterSell) | Post-purchase upsell / thank-you-page revenue app | $29.99-$99+/mo, order-volume gated | **Mismatch, confirmed** — zero pixel/tag functionality of any kind. Unrelated category. |

   **Net finding:** none of the original 10 targets are a same-category, same-tier, straightforward "alternative to" match — 6 are complementary analytics/BI tools that *consume* pixel data rather than compete for installing it (Triple Whale, Hyros, Lifetimely, BeProfit, Polar, arguably Northbeam), 2 are outright category mismatches (Gleam, AfterSell), 1 is an adjacent but much more technical/expensive tool (Elevar), and 1 has no clean single real-world match (TrackBee). **Flagged back to the user before writing any `/vs/` copy — see chat for the decision on how to proceed** (options considered: drop the list and find real lightweight pixel-connector competitors instead; keep a subset reframed as "complementary" rather than "vs"; some combination).

4. **Category fit for two `/alternatives/` pages is off — decided: reframe.** Pixel Tracker doesn't calculate ROAS and isn't an analytics platform — it's the pixel/data layer that feeds those. **Decision: keep both pages, reframe Pixel Tracker as a complementary mention, not a ranked competitor** — "you need accurate pixels before any ROAS number means anything." The ranked list on each page stays genuine tools in that actual category; Pixel Tracker gets a callout box, not a numbered slot.

5. **`/integrations/` as scoped duplicates work we already shipped — decided: hub page.** The 7 requested integration pages (Facebook, Google, TikTok, Snapchat, Pinterest, LinkedIn, X) are near-identical in purpose, schema, and content shape to the 7 `/pixel-tracker/{platform}-pixel` setup guides already live (built in Phase 1, each with `HowTo` + `BreadcrumbList` + `FAQPage` schema). **Decision: build one `/integrations` hub page instead of 7**, linking out to the existing guides. See section 2.4.

6. **CTAs stay consistent with current site status.** Every new page's CTA is "Join the waitlist" / "Available Soon" badge, matching the pattern already live everywhere else (disabled "Install from Shopify" button + waitlist link) — not a live install link, since the app isn't on the App Store yet.

7. **Pricing, for reference:** Free $0 (1 pixel), Starter $7/mo (3 pixels), Growth $15/mo (10 pixels), Pro $29/mo (unlimited) — same figures already live on `/pixel-tracker`. (Flagging since the pricing shorthand in the request read like shell variables got stripped again — same pattern as a couple of sessions back.)

---

### 2.1 Shared infrastructure — components & data model

Two new reusable components, following the existing `components/pixel-guide.tsx` pattern (typed props, page.tsx files stay thin data + `<Component {...data} />`):

**`components/vs-guide.tsx`** — renders a `/vs/[competitor]` page from a typed data object:
```
{ slug, competitorName, competitorBlurb, competitorPricing, competitorHref,
  featureRows: { feature, pixelTracker, competitor }[],
  pricingRows: { plan, pixelTracker, competitor }[],
  pixelTrackerPros: string[], pixelTrackerCons: string[],
  competitorPros: string[], competitorCons: string[],
  verdict: string,   // honest "when to choose which" paragraph, same tone as current /compare
  faqs: { q, a }[] }
```
Emits `BreadcrumbList`, `FAQPage`, `SoftwareApplication` (Pixel Tracker only, `offers` array, no rating) — same JSON-LD shape already used in `app/pixel-tracker/page.tsx`.

**`components/alternatives-roundup.tsx`** — renders a `/alternatives/[category]` page:
```
{ slug, categoryTitle, intro,
  tools: { rank, name, blurb, pricing, bestFor, pros: string[], cons: string[], href }[],
  comparisonRows: { feature, values: Record<toolKey, Cell> }[],
  faqs: { q, a }[] }
```
Emits `BreadcrumbList`, `FAQPage`, `ItemList` (ranked, `item` = each tool as `SoftwareApplication`, no `aggregateRating`).

Both reuse the existing CTA block markup (waitlist + "See Pixel Tracker" links, `Available Soon` framing) rather than inventing a third CTA style.

---

### 2.2 /vs/ Comparison Pages (10 pages)

Route: `app/vs/[slug]/page.tsx` (explicit folder per competitor, matching the existing `pixel-tracker/{platform}` convention rather than a dynamic catch-all).

**✅ Replaced (2026-07-28) — done.** The original 10 targets (Triple Whale, Gleam, Hyros, Northbeam, Elevar, Lifetimely, BeProfit, Polar Analytics, TrackBee, AfterSell) were dropped per user decision — 0 were a clean same-tier match. Replaced with 10 real, verified, same-category Shopify pixel/tag-connector apps found via direct App Store research. All 10 pages are built (`app/vs/[slug]/page.tsx`, using `components/vs-guide.tsx`), sitemap and llms.txt updated.

| Page | Competitor | Real pricing (verified) | Platform gap vs. Pixel Tracker |
|------|-----------|--------------------------|----------------------------------|
| `/vs/tixel-alternative` | TiXel | Free (dev/partner only) → $19.99/mo flat | +Reddit; no live-store free plan |
| `/vs/infinite-pixel-alternative` | Infinite Pixels | $0 → $6.99 → $9.99 → $19.99/mo | No Google Ads/LinkedIn; 248 reviews/4.9★ |
| `/vs/omega-pixel-alternative` | Omega Pixel | $0 → $12.99 → $29.99 → $69.99/mo | Only FB/TikTok/Snap; 158 reviews/5.0★ |
| `/vs/trackify-alternative` | Trackify | $0 (15 orders/mo cap) → $8.99 → $18.99 → $28.99/mo | No Google Ads/Pinterest/LinkedIn/X; unlimited pixels on every paid tier; 350 reviews (largest) |
| `/vs/onepixel-alternative` | OnePixel | $0 → $9.90 → $19.90 → $29.90/mo | +Microsoft/Bing Ads, -LinkedIn; nearly identical pixel-count tiering to ours |
| `/vs/avantify-alternative` | Avantify | $5.99 → $8.99 → $12.99/mo + $3/mo per extra CAPI | No free plan, no Google Ads/LinkedIn; priced by Shopify plan tier not pixel count |
| `/vs/pixee-alternative` | Pixee | $0 → $21 → $25/mo | No Google Ads/Snapchat/LinkedIn/X; bundles feed-sync + AI ad diagnostics |
| `/vs/multipixels-alternative` | MultiPixels | $9.99 → $19.99 → $39.99/mo (no free tier) | No Google Ads/LinkedIn; only 10 reviews |
| `/vs/pixelfy-alternative` | Pixelfy | $7.99/mo flat (no free tier) | +Taboola, -Google Ads/LinkedIn/X; lowest rating found (3.9★) |
| `/vs/shoptok-alternative` | Shoptok | $0 → $9.99 (1 platform) → $19.99/mo (all 3) | Only FB/TikTok/Google Ads; entry tier only unlocks 1 platform unlimited |

Excluded from the final 10 despite being real, verified apps: Nabu and Easy Pixels (Facebook-only, not multi-platform — mismatch), wetracked.io (enterprise pricing $49-249/mo — same problem as the original list).

**Page section order** (each page, via `vs-guide.tsx`):
1. Breadcrumb: Home → Compare → Pixel Tracker vs [Competitor]
2. Hero — H1 "Pixel Tracker vs [Competitor]", one-line positioning, "Available Soon" badge, waitlist CTA
3. At-a-glance cards — Pixel Tracker vs [Competitor]: pricing, one-line "best for"
4. Feature comparison table
5. Pricing comparison table
6. Pros/cons — two columns, both tools (honest, not one-sided)
7. Verdict section — "When Pixel Tracker is the right call" / "When [Competitor] is the right call" (same honest-comparison tone as current `/compare`, avoiding false-equivalence — several of these are enterprise attribution platforms at a very different price tier, and the copy should say so rather than pretend it's an apples-to-apples swap)
8. FAQ (4-6 Qs): "Is Pixel Tracker cheaper than [Competitor]?", "Does Pixel Tracker replace [Competitor]?", "Can I use both together?"
9. CTA — waitlist

| Page | Target keyword | Premise-check needed |
|------|----------------|----------------------|
| `/vs/triple-whale-alternative` | "triple whale alternative shopify" | Confirm current pricing tier/positioning |
| `/vs/gleam-pixel-vs-pixel-tracker` | "gleam pixel vs pixel tracker" | **Verify Gleam actually has a pixel-tracking product** — known primarily as a giveaway/referral platform |
| `/vs/hyros-alternative` | "hyros alternative shopify" | Confirm current pricing tier/positioning |
| `/vs/northbeam-alternative` | "northbeam alternative shopify" | Confirm current pricing tier/positioning |
| `/vs/elevar-alternative` | "elevar alternative shopify" | Confirm current pricing tier/positioning |
| `/vs/lifetimely-alternative` | "lifetimely alternative shopify" | Confirm current pricing tier/positioning |
| `/vs/beprofit-alternative` | "beprofit alternative shopify" | **Verify overlap** — known primarily as a profit-analytics app, not a pixel tool |
| `/vs/polar-analytics-alternative` | "polar analytics alternative shopify" | Confirm current pricing tier/positioning |
| `/vs/trackbee-alternative` | "trackbee alternative shopify" | Confirm current pricing tier/positioning |
| `/vs/aftersell-alternative` | "aftersell alternative shopify" | **Verify overlap** — known primarily as a post-purchase upsell app, not a pixel tool |

Schema per page: `BreadcrumbList`, `FAQPage`, `SoftwareApplication` (no rating).

---

### 2.3 /alternatives/ Category Pages (5 pages)

Route: `app/alternatives/[slug]/page.tsx`.

**Page section order** (via `alternatives-roundup.tsx`):
1. Breadcrumb: Home → Alternatives → [Category Title]
2. Hero — H1, one-line framing of the category, TL;DR summary (per Phase 4's GEO guidance, pull that forward here rather than waiting)
3. Ranked list (5-10 tools) — each with blurb, pricing, best-for, pros/cons, link
4. Comparison table across the same tools
5. FAQ (4-6 Qs, category-specific)
6. CTA — waitlist

| Page | Category fit | Note |
|------|--------------|------|
| Best Shopify Pixel Tracking Apps 2026 | Direct fit | Pixel Tracker ranks honestly among real pixel/tag apps |
| Best Shopify Ad Tracking Tools | Direct fit | — |
| Best Shopify ROAS Calculators | **Reframed** (decided, see 2.0.4) | Ranked list stays genuine ROAS tools; Pixel Tracker gets a complementary callout box, not a ranked slot |
| Best Shopify Conversion Tracking Apps | Direct fit | — |
| Best Shopify Analytics Apps | **Reframed** (decided, see 2.0.4) | Ranked list stays genuine analytics tools; Pixel Tracker gets a complementary callout box, not a ranked slot |

Schema per page: `BreadcrumbList`, `FAQPage`, `ItemList` (ranked tools as `SoftwareApplication` items, **no `AggregateRating`** — see 2.0.2).

---

### 2.4 /integrations/ Pages — decided: hub page, not 7

Build **one** `/integrations` hub page, not 7. Content: why pixel integrations matter for Shopify merchants (short intro), a directory table (platform → what it tracks → link to the existing `/pixel-tracker/{platform}-pixel` guide), and an FAQ covering cross-platform questions the individual guides don't ("Can I connect multiple platforms at once?", "Does adding more pixels slow down my store?"). Schema: `BreadcrumbList`, `CollectionPage`/`ItemList` linking to the 7 existing guides, `FAQPage` — no `HowTo` at the hub level, since the actual steps already live on the linked pages with their own `HowTo` schema. This captures "integration" keyword variants via on-page copy and internal linking without a second `HowTo` competing against the one that already exists per platform.

---

### 2.5 Rewrite `/compare` — done (factual-accuracy pass); directory upgrade pending

**Status: shipped.** `/compare` no longer describes the pre-pivot "privacy-friendly analytics with heatmaps" product or the fake `$4.99/mo` / "14-day free trial" claims. It now compares Pixel Tracker honestly against two categories that don't require unverified named-competitor research: manually adding pixels via theme code, and paid Shopify tracking apps in general. Added `BreadcrumbList` and `SoftwareApplication` (real $0/$7/$15/$29 offers) JSON-LD — closes the two outstanding Phase 1.1 checklist items ("Add BreadcrumbList to all inner pages", "Add SoftwareApplication schema to compare page") for this page. CTA matches sitewide waitlist/Available-Soon pattern, no fake trial.

**Still pending, once `/vs/` and `/alternatives/` pages exist (weeks 3-4):** convert `/compare` from a standalone comparison into the full directory hub — add a section linking out to all 10 `/vs/` pages and 5 `/alternatives/` pages. Not done yet because those pages don't exist; linking to them now would just be dead links. Revisit this page when that work lands.

---

### 2.6 Internal linking strategy

- **`/compare`** becomes the hub: links to all 10 `/vs/` pages + all 5 `/alternatives/` pages. Footer already links to `/compare` (`app/footer.tsx`, "Apps" column) — no nav change needed, the hub absorbs the new pages without adding footer/nav clutter.
- **Each `/vs/[competitor]`** page links back to `/compare` (hub), to `/pixel-tracker` (product), to the 1-2 most relevant `/alternatives/` category pages, and to one adjacent `/vs/` page ("Comparing a different tool? See Pixel Tracker vs [X]") for topical clustering.
- **Each `/alternatives/[category]`** page links to `/pixel-tracker`, and to any `/vs/` page whose competitor appears in that category's ranked list (e.g. the ROAS-calculator roundup can link to `/vs/triple-whale-alternative` if Triple Whale is listed there).
- **`/pixel-tracker`** page's existing "Platform setup guides" aside gets a sibling aside: "How Pixel Tracker compares" linking to `/compare` + 2-3 top `/vs/` pages, and "Best-of roundups" linking to the 5 `/alternatives/` pages.
- **`/integrations` hub** (if built per 2.4) links to all 7 existing `/pixel-tracker/{platform}-pixel` guides; those guides get a new backlink to `/integrations` alongside their existing links.
- **`app/sitemap.ts`** — add all new routes once built (10 + 5 + 1 or 7).
- **`public/llms.txt`** — add new page entries once built, matching the existing pattern.

---

### 2.7 Schema markup summary

| Page type | Breadcrumb | FAQPage | SoftwareApplication | ItemList/CollectionPage | HowTo | Rating |
|---|---|---|---|---|---|---|
| `/vs/[competitor]` | ✓ | ✓ | ✓ (Pixel Tracker only) | — | — | None |
| `/alternatives/[category]` | ✓ | ✓ | — | ✓ (ranked tools) | — | None |
| `/integrations` hub (recommended) | ✓ | ✓ | — | ✓ (links to guides) | — | None |
| `/integrations/[platform]` (alternative) | ✓ | ✓ | — | — | — (owned by linked guide) | None |
| `/compare` (rewrite) | ✓ | — | ✓ (corrected pricing) | ✓ (directory) | — | None |

---

### 2.8 Estimated timeline (Weeks 3-6)

| Week | Work | Depends on |
|---|---|---|
| 3, day 1 | Competitor premise-check + research for all 10 `/vs/` targets (verify positioning, real pricing, real features); resolve the `/integrations` hub-vs-7-pages call (2.4) and the two mismatched `/alternatives` categories (2.0.4) | none — blocks everything else |
| 3 | Build `vs-guide.tsx` + `alternatives-roundup.tsx` components; rewrite `/compare` as hub (2.5) | Day-1 research |
| 3-4 | Write + build all 10 `/vs/` pages | Components + research |
| 4-5 | Write + build all 5 `/alternatives/` pages | Components + category decision |
| 5 | Build `/integrations` (1 hub page, or 7 if that path is chosen) | 2.4 decision |
| 5-6 | Internal linking pass (2.6), sitemap + llms.txt updates, build verification, FAQ/schema validation (Google Rich Results Test) | All pages built |

If the 7-page `/integrations` alternative is chosen instead of the hub, add ~3-4 days to weeks 5-6 for the extra differentiated writing.

---

## Phase 3: Content Hub (Weeks 5-8)
**Goal:** Build topical authority with educational content

### 3.1 Guide Pages (6 pages)
- [ ] "How to Set Up Facebook Pixel on Shopify (2026 Guide)"
- [ ] "Shopify ROAS Calculation: Complete Guide"
- [ ] "Server-Side Tracking for Shopify: What You Need to Know"
- [ ] "Shopify Conversion Tracking: Everything Explained"
- [ ] "Multi-Channel Attribution for Shopify Stores"
- [ ] "First-Party Data Tracking on Shopify"

### 3.2 Blog Posts (8 posts)
- [ ] "Why Your Shopify ROAS Is Inaccurate (And How to Fix It)"
- [ ] "Facebook Pixel vs Google Tag: Which Do You Need?"
- [ ] "TikTok Pixel Setup on Shopify: Step-by-Step"
- [ ] "How to Track Ad Spend Across Multiple Platforms"
- [ ] "Shopify Analytics vs Google Analytics: Pros and Cons"
- [ ] "The Complete Guide to Shopify Server-Side Tracking"
- [ ] "How to Calculate True ROAS (Including Returns)"
- [ ] "Privacy-First Tracking for Shopify in 2026"

---

## Phase 4: GEO Optimization (Weeks 7-10)
**Goal:** Optimize for AI search engines (ChatGPT, Perplexity, Google AI Overviews)

### 4.1 Content Structure
- [ ] Add "TL;DR" boxes at top of all pages
- [ ] Use definitive statements (not "maybe" or "might")
- [ ] Add comparison tables to all vs/alternatives pages
- [ ] Create FAQ sections on every page
- [ ] Use numbered lists and clear headings

### 4.2 Schema Markup
- [ ] `SoftwareApplication` on all product pages
- [ ] `FAQPage` on all guide/alternative pages
- [ ] `HowTo` on all setup/integration pages
- [ ] `Review` schema on comparison pages
- [ ] `BreadcrumbList` on all pages

### 4.3 AI-Specific Optimization
- [ ] Update `llms.txt` with new pages
- [ ] Add "Citation-ready" summaries to key pages
- [ ] Create original data/statistics pages (citation magnets)
- [ ] Ensure all pages have clear, extractable answers

---

## Phase 5: Scale & Maintain (Weeks 11-16)
**Goal:** Scale pSEO with matrix expansion

### 5.1 Matrix Pages
- N competitors = N*(N-1)/2 comparison pages
- Auto-generate from template + competitor data
- Example: 10 competitors = 45 comparison pages

### 5.2 Category Expansion
- [ ] Create category pages for each pixel type
- [ ] Build hub-and-spoke content structure
- [ ] Link all related pages together

### 5.3 Monitoring
- [ ] Weekly GSC check for rankings
- [ ] Monthly content performance review
- [ ] Quarterly competitor analysis

---

## Expected Results

| Timeframe | Metric | Target |
|-----------|--------|--------|
| Month 1 | Indexed pages | 20+ |
| Month 1 | Monthly impressions | 100+ |
| Month 2 | Indexed pages | 40+ |
| Month 2 | Monthly impressions | 500+ |
| Month 3 | Indexed pages | 60+ |
| Month 3 | Monthly clicks | 50+ |
| Month 6 | Monthly clicks | 200+ |

---

## Resources Needed

1. **Claude Code** — Create all pSEO pages using templates
2. **Content** — Write guides and blog posts (can use Claude)
3. **Design** — Create comparison tables and infographics
4. **Time** — ~4-6 weeks for Phase 1-3, ongoing for Phase 4-5

---

## Success Metrics

- [ ] 100+ pages indexed in GSC
- [ ] 1,000+ monthly impressions
- [ ] 100+ monthly clicks
- [ ] Top 10 ranking for 5+ target keywords
- [ ] Featured in AI Overviews for 3+ queries
