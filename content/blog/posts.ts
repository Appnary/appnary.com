import type { BlogPost } from "@/lib/blog";

// Seed posts — keep content marketing-friendly but factual and on-brand.
// In production, these would be authored in MDX; for now we keep them in
// TypeScript so the build is static and there are no extra dependencies.

export const posts: BlogPost[] = [
  {
    slug: "pixel-tracker-launch-preview",
    title: "Pixel Tracker is almost here — what to expect at launch",
    excerpt:
      "A look at what's shipping in v1, why we kept the scope tight, and how the beta merchants shaped every screen.",
    category: "Product update",
    publishedAt: "2026-06-18",
    author: "The Appnary Team",
    readingMinutes: 4,
    tags: ["Pixel Tracker", "Launch", "Shopify"],
    body: `When we started Appnary, we picked one question to anchor every decision: would a solo merchant running their first six-figure store get value out of this?

That lens shaped Pixel Tracker more than any technical constraint. Most analytics tools are built for marketing teams that already know what they want to measure. Independent merchants usually don't — they want to know what's working, what's not, and what to do next.

Here's what ships at launch:

- Visitor tracking with no cookies and no personal data collection
- Live dashboard with active sessions, top pages, and referrer breakdown
- Click and scroll heatmaps on product and collection pages
- Conversion funnel from landing through purchase
- CSV and JSON export at any time
- 14-day free trial with no credit card required

The scope is deliberately small. We picked the reports we'd actually check ourselves, ran them past a dozen beta merchants, and cut anything that didn't earn its place.

If you're on the waitlist, you'll get an email the day we go live with install instructions. Thanks for being early.`,
  },
  {
    slug: "why-we-built-pixel-tracker-cookieless",
    title: "Why we built Pixel Tracker without cookies",
    excerpt:
      "Cookie banners are a tax on merchants and a friction point for shoppers. We thought there was a better way.",
    category: "Engineering",
    publishedAt: "2026-06-11",
    author: "The Appnary Team",
    readingMinutes: 5,
    tags: ["Privacy", "Pixel Tracker", "Engineering"],
    body: `Every Shopify store we've worked on eventually has the same conversation: do we need a cookie banner?

The legal answer in many jurisdictions is yes, the moment you set anything that identifies a returning visitor. The practical answer is that merchants hate them. They slow the site, they hurt conversions, and they erode trust with shoppers who don't understand why a tea store needs their consent to function.

When we designed Pixel Tracker, we asked whether we could ship something useful without any of that. The short answer is yes, if you're willing to give up a few specific capabilities:

- No cross-device visitor tracking (we can't tell that the same person visited on their phone and laptop)
- No returning-visitor segmentation (we can tell you how many people came back, but not who)
- No ad-platform retargeting lists (the pixels you fire for ads still need cookies; ours doesn't)

What we kept is, we think, 95% of what independent merchants actually use analytics for: how many people came, where they came from, what they looked at, and what they bought.

GDPR and CCPA compliance falls out for free. No cookie means no consent. No consent means no banner. The store stays fast and the merchant stays focused on the things that actually move revenue.`,
  },
  {
    slug: "shopify-tips-first-30-days",
    title: "Shopify tips: what to set up in your first 30 days",
    excerpt:
      "A practical checklist for new merchants — the stuff we wish someone had told us on day one.",
    category: "Shopify tips",
    publishedAt: "2026-06-04",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["Shopify", "Tips", "Beginner"],
    body: `Most Shopify advice is written for stores already doing seven figures. Here's a tighter list for stores in their first 30 days.

1. Install the basics, then stop. Pick one analytics app, one email app, and one reviews app. Anything beyond that is distraction in month one. You don't know what you'll need yet.

2. Set up a real abandoned-cart email. The Shopify default is decent. The first follow-up should fire within an hour. Keep it short — subject line, product photo, one button.

3. Watch your real conversion rate, not the one in your head. New merchants almost always overestimate. Check the actual number once a week.

4. Pick a pricing test in month one and stick with it. Tinkering every day means you'll never know what works.

5. Set up your policies before you launch ads. Refund, shipping, and privacy pages aren't optional. They also help conversion — shoppers check.

6. Don't buy a theme over $200 until you've made at least your first sale. The free themes are good. You'll change the theme anyway once you know what you need.

7. Track one number that matters. Pick the metric that, if it improved, would change your business. Track it on a sticky note.

None of this is glamorous. All of it compounds.`,
  },
  {
    slug: "shopify-tips-reading-your-reports",
    title: "How to read your Shopify reports without lying to yourself",
    excerpt:
      "Three traps that turn a good report into a bad decision, and how to avoid each one.",
    category: "Shopify tips",
    publishedAt: "2026-05-28",
    author: "The Appnary Team",
    readingMinutes: 5,
    tags: ["Shopify", "Analytics", "Tips"],
    body: `Reports don't lie. The way we read them does. Here are three traps we see merchants fall into constantly.

Trap 1: Picking the window that flatters you.

If you check conversion rate over the last 7 days after a strong weekend, you'll feel great. If you check the last 90 days, the number will probably be lower and more honest. Pick a window and stick with it.

Trap 2: Confusing traffic with intent.

Sessions going up is not the same as sales going up. The classic mistake is to celebrate a traffic spike that came from a low-intent source. Always look at revenue alongside sessions.

Trap 3: Ignoring the denominator.

A 3% conversion rate sounds great until you realize it's 3% of 100 visitors. The absolute number matters as much as the percentage. A small percent of a big number is bigger than a big percent of a small one.

If you only remember one thing: when a report makes you feel something, double-check it. Feelings are fine, but they shouldn't be the only thing driving the next decision.`,
  },
  {
    slug: "announcing-appnary-public-launch",
    title: "Announcing the Appnary public launch on the Shopify App Store",
    excerpt:
      "Pixel Tracker is live. Here's what we shipped, what's next, and how to get the launch discount.",
    category: "Announcements",
    publishedAt: "2026-06-25",
    author: "The Appnary Team",
    readingMinutes: 3,
    tags: ["Launch", "Pixel Tracker", "Shopify"],
    body: `Today we're flipping the switch. Pixel Tracker is live in the Shopify App Store.

To everyone who joined the waitlist, answered a survey, or installed a beta build — thank you. This launch is the shape it is because of you.

What changed since beta:

- Pricing is finalized at $4.99/month flat, with a 14-day free trial and no credit card required
- Heatmaps got a refresh — the new view is faster and easier to read on mobile
- CSV export is now a one-click action from any report

What's coming next:

- Email reports (weekly summary straight to your inbox)
- More apps in the suite — stay tuned

If you're on the waitlist, your launch discount code is in your inbox. If you're not on it yet, you can still grab early-bird pricing at /#waitlist.`,
  },
];