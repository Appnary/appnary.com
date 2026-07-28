import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";

export const metadata: Metadata = {
  title: "How to Calculate ROAS on Shopify: Formula, Example, and Steps",
  description:
    "Learn the ROAS formula for Shopify stores, why platform-reported ROAS runs optimistic, and the exact steps to calculate your real blended ROAS each month.",
  openGraph: {
    title: "How to Calculate ROAS on Shopify: Formula, Example, and Steps",
    description:
      "Learn the ROAS formula for Shopify stores, why platform-reported ROAS runs optimistic, and the exact steps to calculate your real blended ROAS each month.",
    url: "https://appnary.com/pixel-tracker/guides/roas-calculation",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const intro = [
  `ROAS stands for return on ad spend, and the formula is short: ad revenue divided by ad spend. If you spent $1,000 on ads and those ads drove $4,000 in revenue, your ROAS is 4, or "4x." That part isn't controversial. What trips up most Shopify merchants is that the ROAS number sitting in Facebook Ads Manager or Google Ads almost never matches what actually happened in their store, because each platform reports attribution on its own terms, not on your store's terms.`,
  `This guide walks through the ROAS formula, why platform-reported numbers tend to run high, a full worked example with made-up but realistic numbers, how to think about what counts as a "good" ROAS for your specific margins, and a short process for calculating your own blended ROAS every month. None of this requires special software. A spreadsheet and your ad account dashboards are enough. What it does require is knowing which numbers to trust and which to treat with suspicion.`,
];

const sections = [
  {
    heading: "The ROAS Formula",
    paragraphs: [
      `The core formula is: ROAS = ad revenue ÷ ad spend. Spend $2,000 on ads in a month, generate $8,000 in attributed revenue from those ads, and ROAS is 4x. It's usually expressed as a multiple ("4x ROAS") rather than a percentage, though the math is identical to a percentage if that's how you prefer to see it (400%).`,
      `The formula itself is simple enough that a calculator handles it in seconds. The hard part, and the part that actually matters for a Shopify store, is deciding what belongs in the numerator. "Ad revenue" sounds like a fixed number, but it depends entirely on which sale gets credited to which ad, over what time window, and according to whose tracking. That's where platform-reported ROAS and your store's real ROAS start to diverge.`,
    ],
  },
  {
    heading: "Platform-Reported ROAS vs. Blended (True) ROAS",
    paragraphs: [
      `Platform-reported ROAS is the number each ad platform shows inside its own dashboard, calculated using that platform's own attribution rules and its own pixel data. Facebook Ads Manager reports Facebook's ROAS. Google Ads reports Google's ROAS. TikTok reports TikTok's ROAS. Each of these numbers is calculated in isolation, as if that platform were the only one running ads for the store.`,
      `Blended ROAS, sometimes called true ROAS, is a different calculation: total store revenue for a period divided by total ad spend across every platform combined. It doesn't ask any single platform to explain the whole story, because no single platform can. If a store runs Facebook, Google, and TikTok at the same time, and a customer sees all three before buying, blended ROAS counts the sale once against combined spend, instead of letting three separate dashboards each claim it happened because of them. For a longer breakdown of exactly where these two numbers part ways, see [why Shopify ROAS is usually inaccurate](/blog/why-shopify-roas-is-inaccurate).`,
    ],
  },
  {
    heading: "Why Platform Numbers Run Optimistic",
    paragraphs: [
      `Three mechanics show up again and again when platform-reported ROAS comes in higher than blended ROAS.`,
      `The first is the attribution window. Most platforms count a sale toward an ad's ROAS if the customer clicked the ad in the last 7 or 28 days, or, depending on settings, if they merely saw the ad (a "view-through" conversion) without clicking at all. A customer who scrolled past a Facebook ad three weeks ago and then bought after finding the store through a Google search can still get counted as a Facebook conversion. The wider the window, and the more view-through conversions a platform counts, the more sales it can plausibly claim.`,
      `The second is multiple platforms claiming credit for the same sale. Running ads on Facebook, Google, and TikTok at once means a single customer's path to purchase often crosses more than one platform. Each platform's pixel sees its own touchpoint and, using its own attribution model, counts the full sale as its own conversion. Add up the "revenue" each platform separately claims and the total is often larger than what the store actually made that month, because the same order got counted more than once.`,
      `The third is browser-level tracking loss. When a pixel misses events, whether from ad blockers, cookie restrictions, or a browser that strips tracking parameters, some platforms fill the gap with modeled or probabilistic conversions rather than leaving the number blank. In certain reporting views this can make a channel look like it's driving a disproportionate share of "new" conversions, when some of that is a platform's model guessing rather than confirmed, tracked data.`,
    ],
  },
  {
    heading: "Worked Example: Calculating Blended ROAS",
    paragraphs: [
      `Here's a simplified, made-up example to show the mechanics. Store X spends $2,000 on Facebook ads and $1,000 on Google ads in a month, for total ad spend of $3,000.`,
      `Inside Facebook Ads Manager, Store X sees $9,000 in reported conversion value, for a Facebook-reported ROAS of 4.5x ($9,000 ÷ $2,000). Inside Google Ads, Store X sees $5,000 in reported conversion value, for a Google-reported ROAS of 5x ($5,000 ÷ $1,000). Add those two platform-reported revenue figures together and the total is $14,000 against $3,000 in spend, which would suggest a combined ROAS of about 4.7x.`,
      `But Store X's actual Shopify revenue for that month was $9,500. Some of the customers Facebook and Google each claimed credit for were the same people, clicking one ad, then the other, before buying once. Using the real number, blended ROAS is $9,500 ÷ $3,000, or roughly 3.17x. That's a meaningfully lower number than either platform reported on its own, and it's the number that reflects what Store X actually earned relative to what it actually spent.`,
      `Nothing about this example is unusual. It's the expected result of running more than one ad platform at the same time, which is exactly why blended ROAS, not any single platform's dashboard, is the number worth making decisions from.`,
    ],
  },
  {
    heading: `What Counts as "Good" ROAS`,
    paragraphs: [
      `There's no universal "good" ROAS, despite how often round numbers like 3x or 4x get treated as benchmarks. What actually matters is breakeven ROAS: the minimum ROAS at which ad spend stops being a loss, given gross margin.`,
      `Breakeven ROAS is roughly 1 ÷ gross margin, expressed as a decimal. A store with a 50% gross margin needs a 2x ROAS just to cover the cost of the ads with the profit from the sale. A store with a 25% gross margin needs a 4x ROAS to hit that same breakeven point. A 4x ROAS that looks impressive for one store might be barely break-even for another selling a low-margin product, while a 2x ROAS could be comfortably profitable for a high-margin brand. Judging ROAS without knowing margin is judging half the equation.`,
      `In practice, most merchants want ROAS meaningfully above their breakeven number, since spend also has to cover fixed costs like software and staff time, not just the direct cost of goods for one order. But the breakeven figure is the honest floor to compare against, not a benchmark borrowed from someone else's business.`,
    ],
  },
];

const steps = [
  {
    title: "Add up total ad spend across every platform",
    body: `Pull ad spend for the period from each platform actually in use: Facebook Ads Manager, Google Ads, TikTok Ads Manager, and any others. Add them into one total spend figure. This step is easy to skip when a store only checks its best-performing platform, but blended ROAS needs the full spend picture, not just the one that looks good.`,
    screenshotCaption: "A spreadsheet row listing ad spend pulled separately from Facebook Ads Manager, Google Ads, and TikTok Ads Manager, summed into a single total spend figure.",
  },
  {
    title: "Pull total revenue for the same period",
    body: `Go to Shopify's own sales reporting for total store revenue over that period, rather than adding up each platform's self-reported "conversion value," since those figures overlap whenever more than one platform claims credit for the same order. Using total store revenue as the numerator gives a conservative, defensible blended ROAS, even though it also credits ads with some sales that might have happened anyway.`,
    screenshotCaption: "Shopify's sales-over-time analytics report for the month, showing the total revenue figure used as the numerator in the ROAS calculation.",
  },
  {
    title: "Check that the pixel data behind those numbers is actually reliable",
    body: `Before trusting any platform's conversion count, confirm its pixel is firing on every completed order, and that server-side tracking, such as Facebook Conversions API or TikTok Events API, is active where available. A pixel that silently stops firing after a checkout update, or loses events to browser-level blocking, will understate what a platform reports, which throws off both platform-reported and blended ROAS. The [server-side tracking guide](/pixel-tracker/guides/server-side-tracking) covers how this works in more detail.`,
    screenshotCaption: "A dashboard view listing each connected ad pixel next to its status and whether server-side event tracking is active for it.",
  },
  {
    title: "Divide total revenue by total spend",
    body: `With both totals in hand, the math is one line: blended ROAS equals total revenue divided by total spend. If total revenue for the month was $9,500 and total spend across all platforms was $3,000, blended ROAS is roughly 3.17x. Keep this number in a running spreadsheet rather than recalculating from scratch every time.`,
    screenshotCaption: "A spreadsheet formula cell dividing total monthly revenue by total monthly ad spend to produce the blended ROAS figure.",
  },
  {
    title: "Work out your breakeven ROAS",
    body: `Divide 1 by gross margin, expressed as a decimal, to find the ROAS at which ad spend stops being a loss. A 40% gross margin gives a breakeven ROAS of 2.5x. A 20% gross margin gives a breakeven ROAS of 5x. Compare blended ROAS from step 4 against this number, not against a generic benchmark from somewhere else.`,
    screenshotCaption: "A small table listing gross margin percentages next to their corresponding breakeven ROAS thresholds.",
  },
  {
    title: "Repeat monthly and track the trend",
    body: `Run the same calculation every month using the same method and the same attribution window, and log it alongside spend and revenue. One month's ROAS is a snapshot. Several months in a row show whether ad performance relative to spend is improving, holding steady, or sliding, which is far more useful for planning next month's budget than any single number in isolation.`,
    screenshotCaption: "A simple month-by-month line chart of blended ROAS, showing the trend over several months rather than one isolated figure.",
  },
];

const closingSections = [
  {
    heading: "Tools That Can Help (and What Pixel Tracker Doesn't Do)",
    paragraphs: [
      `For most independent Shopify merchants, a spreadsheet is genuinely enough to track blended ROAS. Pull spend and revenue once a month, do the division, and watch the trend. Merchants who want more automation around the calculation itself, including automatic blending across platforms and historical trend charts, can look at dedicated [ROAS calculator and reporting apps](/alternatives/best-shopify-roas-calculators) built for that specific job.`,
      `[Pixel Tracker](/pixel-tracker) is not one of those apps, and it's worth being direct about that. It doesn't calculate ROAS and it has no ROAS dashboard. What it does is connect Facebook, Google Ads (conversion tag), TikTok, Snapchat, Pinterest, X, and LinkedIn pixels to a Shopify store from one dashboard, with server-side tracking through Facebook Conversions API and TikTok Events API to recover events that browser-based pixels alone would miss. That matters for ROAS because every calculation above depends on the revenue and conversion numbers each platform reports being reasonably accurate in the first place. Better pixel data in means more trustworthy numbers to blend, even though the blending and the math stay with the merchant.`,
    ],
  },
  {
    heading: "Where to Go From Here",
    paragraphs: [
      `Multi-platform overlap, the mechanic behind the worked example above, is covered in more depth in the [multi-channel attribution guide](/pixel-tracker/guides/multi-channel-attribution). Returns and refunds cause a related but separate distortion, chipping away at revenue after the sale rather than before it. [How to calculate true ROAS](/blog/calculate-true-roas) covers adjusting for that specifically.`,
      `Pixel Tracker is currently pre-launch. [Join the waitlist](/#waitlist) to get notified when it opens, along with early access to the pixel and server-side tracking setup described above.`,
    ],
  },
];

const faqs = [
  {
    q: "Is ROAS the same as ROI?",
    a: "No. ROAS is revenue divided by ad spend, and it doesn't account for the cost of the product, shipping, payment processing, or any other cost of doing business. ROI accounts for those additional costs to show actual profit, not just revenue relative to ad spend. A store can have a healthy-looking ROAS and still be unprofitable once other costs are included, which is why breakeven ROAS relative to gross margin is more useful than ROAS on its own.",
  },
  {
    q: "Is a 4x ROAS good?",
    a: "It depends entirely on gross margin. For a store with a 25% gross margin, 4x ROAS is close to breakeven. For a store with a 60% gross margin, 4x ROAS is comfortably profitable. There's no fixed number that's universally \"good.\" Compare ROAS to your own breakeven ROAS, not to a number seen in a forum post.",
  },
  {
    q: "Why does Facebook show a different ROAS than Google Ads for the same month?",
    a: "Because each platform calculates ROAS using only its own pixel data and its own attribution rules, applied as if it were the only channel running ads. When a customer is exposed to more than one platform's ads before buying, more than one platform can claim credit for the same sale, which is why the sum of each platform's reported revenue is often higher than the store's actual total revenue for the period.",
  },
  {
    q: "Does Pixel Tracker calculate ROAS for me?",
    a: "No. Pixel Tracker connects and manages tracking pixels, including server-side tracking through Facebook Conversions API and TikTok Events API, so the conversion data feeding each ad platform is more complete and accurate. It doesn't calculate, display, or report ROAS. Merchants still do that calculation themselves, whether in a spreadsheet, in each ad platform's dashboard, or in a dedicated ROAS reporting app.",
  },
  {
    q: "How often should I recalculate my ROAS?",
    a: "Monthly is a reasonable minimum for most independent stores, since it smooths out day-to-day noise and lines up with how ad budgets are usually planned. Stores spending heavily or running frequent promotions may want to check weekly, but the important habit is comparing the same period length consistently over time rather than reacting to any single day's number.",
  },
  {
    q: "What attribution window should I use when pulling platform numbers?",
    a: "Whatever window is chosen, use it consistently across platforms and across months, since attribution windows change the count of conversions each platform reports. A shorter, click-only window, rather than one that includes view-through conversions, generally produces a more conservative, more defensible number, but the specific choice matters less than staying consistent so month-to-month comparisons remain meaningful.",
  },
  {
    q: "Do returns and refunds affect ROAS?",
    a: "Yes, and most basic ROAS calculations ignore them entirely, since they're based on order revenue at the time of purchase rather than revenue after any returns. A high ROAS on paper can look considerably worse once refunded orders are backed out, which is worth adjusting for if a store has a meaningful return rate.",
  },
];

const relatedLinks = [
  { label: "Why Shopify ROAS Is Usually Inaccurate", href: "/blog/why-shopify-roas-is-inaccurate" },
  { label: "How to Calculate True ROAS", href: "/blog/calculate-true-roas" },
  { label: "Multi-Channel Attribution Guide", href: "/pixel-tracker/guides/multi-channel-attribution" },
  { label: "Server-Side Tracking Guide", href: "/pixel-tracker/guides/server-side-tracking" },
  { label: "Best Shopify ROAS Calculator Apps", href: "/alternatives/best-shopify-roas-calculators" },
];

export default function RoasCalculationGuidePage() {
  return (
    <GuideArticle
      slug="roas-calculation"
      badge="Guide"
      h1="How to Calculate ROAS on Shopify"
      tldr="ROAS is ad revenue divided by ad spend, but the number your ad platforms report is almost always higher than your real, blended ROAS. Calculate it yourself each month by dividing total store revenue by total ad spend across every platform, then judge the result against your own breakeven ROAS instead of a generic benchmark."
      intro={intro}
      sections={sections}
      steps={steps}
      closingSections={closingSections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
