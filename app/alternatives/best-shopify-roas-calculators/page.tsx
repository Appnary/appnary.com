import type { Metadata } from "next";
import { AlternativesRoundup } from "@/components/alternatives-roundup";

export const metadata: Metadata = {
  title: "Best Shopify ROAS Calculators 2026 (6 Compared) | Appnary",
  description:
    "TrueProfit, BeProfit, Triple Whale, Juicy, Kendall Analytics, and Rockerbox — real Shopify ROAS and profit apps compared on pricing, features, and reviews.",
  openGraph: {
    title: "Best Shopify ROAS Calculators 2026",
    description:
      "6 real Shopify apps that calculate true, profit-adjusted ROAS — compared on pricing, order-volume gating, and Shopify App Store reviews.",
    url: "https://appnary.com/alternatives/best-shopify-roas-calculators",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const tools = [
  {
    key: "trueprofit",
    rank: 1,
    name: "TrueProfit",
    blurb:
      "Real-time net profit and true-ROAS tracking that nets out COGS, shipping, and fees against synced ad spend from Meta, Google, TikTok, Bing, Snapchat, and Amazon.",
    pricing: "$35/mo (300 orders) – $200/mo (3,500 orders)",
    rating: "5.0★ (801 reviews)",
    bestFor:
      "Stores that want the single most-reviewed, purpose-built true-ROAS app, with per-product and per-ad-level profit breakdowns.",
    pros: [
      "By far the largest, highest-rated review base of any app in this category (801 reviews, 5.0★)",
      "Syncs ad spend from six platforms, not just one or two",
      "Breaks profit and ROAS down to the individual product and ad level",
    ],
    cons: ["Order-volume gated — higher tiers needed as your store scales past 3,500 orders/mo"],
    href: "https://apps.shopify.com/trueprofit",
    external: true,
  },
  {
    key: "beprofit",
    rank: 2,
    name: "BeProfit (Viably)",
    blurb:
      "Profit and P&L analytics that layers ad spend, COGS, and fees against revenue to show true ROAS per channel.",
    pricing: "$49 – $249/mo",
    rating: "4.3★ (172 reviews)",
    bestFor:
      "Stores that want a full profit-and-loss view, not just a ROAS number, with a solid multi-year review history.",
    pros: [
      "Strong review base (172 reviews) with years of track record",
      "Full P&L breakdown, not just ROAS — COGS, shipping, fees, and ad spend in one view",
    ],
    cons: ["No free tier; entry price ($49/mo) is higher than several apps in this list"],
    href: "https://apps.shopify.com/beprofit-profit-tracker",
    external: true,
  },
  {
    key: "triple-whale",
    rank: 3,
    name: "Triple Whale",
    blurb:
      "Attribution, profit BI, and AI-assisted ops suite that includes blended and platform-level ROAS as one part of a much larger reporting layer.",
    pricing: "Free (limited) – $219/mo – $749/mo",
    rating: "4.1★ (86 reviews)",
    bestFor:
      "Stores that want ROAS calculation bundled inside a broader attribution and AI-ops platform, and can justify the jump to $219/mo.",
    pros: [
      "ROAS is one part of a much larger attribution and profit-BI toolkit",
      "AI-assisted operational insights beyond just ROAS reporting",
    ],
    cons: [
      "Entry paid plan ($219/mo) is the most expensive way into ROAS reporting in this list outside of custom-priced tools",
      "A lot of the platform is built for uses beyond ROAS calculation specifically",
    ],
    href: "https://apps.shopify.com/triplewhale-1",
    external: true,
  },
  {
    key: "juicy",
    rank: 4,
    name: "Juicy Attribution & Profit",
    blurb:
      "True net-profit and campaign attribution tracking via UTM and COGS data, with the cheapest genuine entry point in this category.",
    pricing: "Free (≤50 orders/mo) – $49/mo",
    rating: "4.9★ (54 reviews)",
    bestFor:
      "Smaller or newer stores that want real ROAS/profit tracking without committing to a $35+/mo plan immediately.",
    pros: [
      "Cheapest real entry point in this category — free up to 50 orders/month",
      "Strong 4.9★ rating",
      "Multi-store attribution support",
    ],
    cons: ["Smaller review base (54) than the category leaders"],
    href: "https://apps.shopify.com/juicy",
    external: true,
  },
  {
    key: "kendall",
    rank: 5,
    name: "Kendall Analytics",
    blurb:
      "First-party attribution and CRO reporting consolidated into a customizable KPI dashboard, priced by store GMV rather than order count.",
    pricing: "$99/mo (≤$1M GMV) – $299/mo (>$10M GMV)",
    rating: "5.0★ (27 reviews)",
    bestFor:
      "Growing stores that prefer GMV-based pricing tiers over order-count caps, and want CRO reporting alongside ROAS.",
    pros: [
      "Perfect 5.0★ rating",
      "Clean, publicly-listed GMV-based pricing — rare in this category",
      "Combines attribution with conversion-rate-optimization reporting",
    ],
    cons: ["Smaller review base (27) than the more established apps in this list"],
    href: "https://apps.shopify.com/kendall",
    external: true,
  },
  {
    key: "rockerbox",
    rank: 6,
    name: "Rockerbox",
    blurb:
      "Enterprise marketing-measurement platform combining multi-touch attribution, media mix modeling, and incrementality testing across 75+ channels.",
    pricing: "Free to install; custom quote-based pricing",
    rating: "5.0★ (10 reviews)",
    bestFor:
      "Larger stores or brands that need MMM-grade ROAS measurement across dozens of channels and are comfortable with a sales-gated quote process.",
    pros: [
      "Most sophisticated measurement methodology in this list (MMM + multi-touch attribution)",
      "75+ channel integrations",
    ],
    cons: [
      "Pricing isn't public — requires a sales conversation",
      "Thin Shopify App Store review count (10) relative to its enterprise positioning",
    ],
    href: "https://apps.shopify.com/rockerbox",
    external: true,
  },
];

const comparisonRows = [
  {
    feature: "Pricing model",
    values: {
      trueprofit: "Order-volume tiers",
      beprofit: "Flat tiers",
      "triple-whale": "Flat tiers + enterprise",
      juicy: "Order-volume tiers",
      kendall: "GMV tiers",
      rockerbox: "Custom quote",
    },
  },
  {
    feature: "Free tier or trial",
    values: {
      trueprofit: "varies",
      beprofit: false,
      "triple-whale": true,
      juicy: true,
      kendall: "varies",
      rockerbox: "varies",
    },
  },
  {
    feature: "Multi-platform ad spend sync",
    values: {
      trueprofit: "6 platforms",
      beprofit: true,
      "triple-whale": true,
      juicy: true,
      kendall: true,
      rockerbox: "75+ channels",
    },
  },
  {
    feature: "Publicly listed pricing",
    values: {
      trueprofit: true,
      beprofit: true,
      "triple-whale": "varies",
      juicy: true,
      kendall: true,
      rockerbox: false,
    },
  },
  {
    feature: "Shopify App Store reviews",
    values: {
      trueprofit: "801 (5.0★)",
      beprofit: "172 (4.3★)",
      "triple-whale": "86 (4.1★)",
      juicy: "54 (4.9★)",
      kendall: "27 (5.0★)",
      rockerbox: "10 (5.0★)",
    },
  },
];

const analysis = [
  {
    title: "\"True ROAS\" almost always means \"profit-adjusted ROAS\"",
    body: "Every app in this list calculates something more useful than raw ad-platform ROAS (revenue ÷ ad spend, as reported inside Meta or Google Ads). They net out COGS, shipping, payment fees, discounts, and returns before comparing revenue to spend — which is why the number they show you is usually lower, and more honest, than the ROAS your ad platform's own dashboard reports.",
  },
  {
    title: "Pricing model shapes who each app actually fits",
    body: "TrueProfit and Juicy price by order volume, which rewards smaller stores with a lower bill and scales up automatically as you grow. Kendall prices by GMV instead, which can be more predictable for a store with high-AOV, lower-volume orders. BeProfit and Triple Whale use flat tiers regardless of size. Rockerbox skips a public price list entirely in favor of a custom quote, typical of enterprise measurement platforms.",
  },
  {
    title: "Review volume varies by an order of magnitude across this list",
    body: "TrueProfit's 801 reviews dwarf every other app here, including established names like Triple Whale (86) and BeProfit (172). That doesn't automatically make it the better fit for your store, but it is a meaningfully larger, harder-to-fake sample of real merchant experience than the 10-27 review counts at the bottom of this list.",
  },
  {
    title: "Attribution methodology differs more than the marketing copy suggests",
    body: "Most apps in this list attribute revenue to ad spend using last-click or UTM-based matching against Shopify order data — straightforward, but can overcredit or undercredit channels in a multi-touch customer journey. Rockerbox is the outlier, using media mix modeling and incrementality testing alongside attribution, a materially more rigorous (and more expensive) approach aimed at brands spending enough to make that rigor worthwhile.",
  },
  {
    title: "None of these apps can fix inaccurate pixel data feeding into them",
    body: "Every ROAS calculation in this category depends on accurate ad-spend data reaching the app — usually via each ad platform's own API — and accurate order data from Shopify. If your Facebook, Google, or TikTok pixel isn't firing correctly, or conversion events aren't being forwarded server-side, the ROAS number these tools produce will look precise while being built on incomplete data. That's a pixel-layer problem, not something a ROAS calculator itself can correct.",
  },
];

const buyingGuide = [
  "If you're a smaller store or just starting to track profit-adjusted ROAS, Juicy's free tier (up to 50 orders/month) or TrueProfit's $35/mo entry tier are the lowest-risk ways in — both have real review bases behind them (54 and 801 reviews respectively) rather than being unproven.",
  "If you want the most-reviewed, most purpose-built option and don't mind order-volume-based pricing, TrueProfit's 801 reviews at a 5.0★ average make it the default strong choice for most stores in this list.",
  "If you're already spending enough on ads that a 5-10% attribution error meaningfully changes your ROAS number, Rockerbox's media-mix-modeling approach is worth the custom-quote conversation — but that level of rigor is overkill for a store still validating its first few ad channels.",
];

const faqs = [
  {
    q: "What's the difference between ROAS and \"true ROAS\"?",
    a: "Raw ROAS (revenue ÷ ad spend) as shown inside Meta or Google Ads doesn't account for product costs, shipping, payment processing fees, discounts, or returns. \"True ROAS\" — what every app in this list calculates — subtracts those costs first, so the number reflects actual profit generated per ad dollar, not just top-line revenue.",
  },
  {
    q: "Which Shopify ROAS calculator has the best track record?",
    a: "TrueProfit, with 801 reviews at a 5.0★ average — the largest and highest-rated review base of any app in this comparison by a wide margin.",
  },
  {
    q: "Is there a free Shopify ROAS calculator?",
    a: "Juicy offers a genuine free tier for stores under 50 orders/month. Triple Whale also has a limited free tier. Most other apps in this category, including TrueProfit, start with a paid tier or trial rather than an ongoing free plan.",
  },
  {
    q: "Do I need Rockerbox-level attribution modeling, or is a simpler tool enough?",
    a: "For most stores, a UTM/order-matching-based tool like TrueProfit, BeProfit, or Juicy is accurate enough. Media mix modeling and incrementality testing (Rockerbox's approach) mainly pays off once your ad spend is high enough, and split across enough channels, that multi-touch attribution errors start meaningfully distorting your reported ROAS.",
  },
  {
    q: "Does Pixel Tracker calculate ROAS?",
    a: "No. Pixel Tracker installs and manages the ad-platform pixels that feed accurate ad-spend and conversion data into tools like the ones in this list — it doesn't calculate ROAS itself. See the note below for how the two fit together.",
  },
  {
    q: "Can I switch between these ROAS calculators without losing historical data?",
    a: "It depends on the app — most calculate ROAS from live Shopify order and ad-platform API data going forward, so historical figures already shown in one app's dashboard generally don't transfer to another. Check each app's specific data-export options before switching if historical ROAS trends matter to you.",
  },
];

export default function BestRoasCalculatorsPage() {
  return (
    <AlternativesRoundup
      slug="best-shopify-roas-calculators"
      categoryTitle="Best Shopify ROAS Calculators"
      h1="Best Shopify ROAS Calculators (2026)"
      tldr="TrueProfit leads on trust signal (801 reviews, 5.0★) and is the most purpose-built true-ROAS app in this list; Juicy is the cheapest genuine entry point (free under 50 orders/month); Rockerbox is the most rigorous (media mix modeling) but requires a custom quote."
      intro={[
        "A \"ROAS calculator\" in the Shopify App Store context almost always means a profit-analytics app that nets ad spend, product costs, shipping, and fees against revenue to show a more honest return-on-ad-spend number than what your ad platform's own dashboard reports. This is a genuinely different job than installing tracking pixels — it's the analytics layer that sits on top of pixel and order data, not the layer that generates it.",
        "We compared six real, currently-listed Shopify apps in this category, verified against their live App Store listings for pricing, ratings, and review counts as of today. Pixel Tracker isn't included in the ranked list below — it doesn't calculate ROAS, and including it as a ranked competitor here would misrepresent what it does. See the callout further down for how it actually relates to this category.",
      ]}
      tools={tools}
      comparisonRows={comparisonRows}
      analysis={analysis}
      buyingGuide={buyingGuide}
      calloutBox={{
        heading: "Where Pixel Tracker fits in",
        body: [
          "Pixel Tracker isn't a ROAS calculator, and it isn't ranked above as one — that would misrepresent what it does. It's the pixel/data layer: the app that installs and manages Facebook/Meta, Google Ads, TikTok, Snapchat, Pinterest, LinkedIn, and X tracking pixels on your Shopify store, with server-side event forwarding so conversion data stays accurate even when browser tracking gets blocked.",
          "That matters for this category specifically because every ROAS calculator above depends on accurate conversion data reaching it. A profit-adjusted ROAS number is only as good as the ad-spend and conversion data feeding it — if a pixel is misfiring or missing server-side events, the ROAS calculator on top of it will produce a precise-looking number built on incomplete data.",
        ],
        ctaHref: "/pixel-tracker",
        ctaLabel: "See how Pixel Tracker works",
      }}
      faqs={faqs}
    />
  );
}
