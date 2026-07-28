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
  {
    slug: "why-shopify-roas-is-inaccurate",
    title: "Why Your Shopify ROAS Is Inaccurate (And How to Fix It)",
    excerpt: `Facebook, Google, and TikTok each report a ROAS number that assumes full credit for the same sale, while browser pixels quietly lose data to ad blockers and iOS tracking prevention. Here is what is actually driving the gap, and how to build one blended number you can trust.`,
    category: "Ad Tracking",
    publishedAt: "2026-07-02",
    author: "The Appnary Team",
    readingMinutes: 5,
    tags: ["ROAS", "Attribution", "Ad Tracking", "Server-Side Tracking", "Shopify Ads"],
    body: `Open Meta Ads Manager and Google Ads on the same day, for the same store, and you'll often see two ROAS numbers that don't agree with each other or with your bank statement. Neither platform is lying, exactly. They're just each counting sales that, in some cases, only happened once.

This is the part nobody explains when you're setting up your first ad account: platform-reported ROAS was never designed to be an objective, external measurement. It's a self-reported metric, built on each platform's own attribution rules, and those rules are structurally biased toward making that platform look good. If you're running ads on more than one channel, and most Shopify stores are running at least Facebook and Google at once, the numbers will overlap, and the overlap points in one direction: up.

The same sale, claimed twice

Attribution windows are the first problem. Meta's default is a 7-day click and 1-day view window, meaning if someone clicks an ad and buys within a week, or just sees an ad and buys within a day, Meta counts it as an ad-driven sale. Google Ads runs its own windows on a separate clock. TikTok and Pinterest each have their own too.

None of these systems talk to each other. Picture an ordinary path to purchase: a shopper sees a Facebook ad on Monday, searches your brand name on Google on Wednesday and clicks a Google Ads result, then buys on Thursday. Facebook counts that as a Facebook-driven sale, since it fell inside the view window. Google counts it as a Google-driven sale, since it was a direct ad click. One order, two platforms claiming full credit. Add up reported revenue across every channel you run and the total can sit well above what actually landed in your Shopify orders.

This isn't a bug in either platform. It's what happens when every ad network grades its own homework.

Pixel data is also going missing

The second problem is quieter but just as damaging: a growing share of the browser-side data these pixels depend on never reaches the platform at all. iOS App Tracking Transparency lets people opt out of tracking with one tap, and most do. Safari's Intelligent Tracking Prevention limits how long a pixel's cookie survives. Ad blockers strip pixel scripts before they load. None of this is new information, but its effect on ROAS specifically is easy to underestimate.

When a pixel can't set or read a cookie, it can't recognize a returning visitor, so a customer who has bought from you three times gets logged as brand new on their fourth visit. That distorts the new-customer numbers in prospecting campaigns aimed at cold audiences, making them look like they're recruiting fresh buyers when part of that reach is really repeat customers the pixel simply doesn't remember. It also means a real conversion sometimes never gets reported back to the ad platform at all, which the algorithm reads as this ad didn't convert and optimizes away from, even though it worked. Server-side tracking, which sends conversion events from your server instead of relying on the buyer's browser to cooperate, closes a meaningful part of this gap. [This guide](/pixel-tracker/guides/server-side-tracking) covers how that works for Facebook Conversions API and TikTok Events API specifically, the two networks where server-side tracking is currently available for Shopify merchants.

Not every conversion is worth the same

The third issue is about weighting, not counting. Platforms generally roll click-through and view-through conversions into the same ROAS figure, but they aren't equivalent events. A shopper who clicked an ad and bought within the hour showed clear intent. A shopper who merely saw an ad in their feed and bought three days later through some unrelated path may well have bought anyway, with the ad contributing nothing at all.

View-through conversions are a legitimate signal for brand awareness campaigns, but most default reporting counts them at the same weight as a direct click. Broad prospecting campaigns, the ones with the biggest reach and impression counts, tend to accumulate the most view-through credit, which is exactly why they often report deceptively strong ROAS, while a tightly targeted retargeting campaign converting real buyers with total certainty can look comparatively weak on paper.

What to actually do about it

None of this makes platform ROAS useless. It makes it directional, not literal. Three adjustments make it far more trustworthy.

First, enable server-side tracking wherever the platform supports it. It won't fix cross-platform attribution overlap, but it recovers conversions that browser-based pixels are losing to ad blockers and tracking prevention, which makes the new-customer and conversion-volume numbers you do see meaningfully more accurate. [Pixel Tracker](/pixel-tracker) connects your store's pixels for Facebook, Google Ads, TikTok, Snapchat, Pinterest, X, and LinkedIn from one dashboard, with server-side support for Facebook and TikTok, and installs everything through Shopify's own ScriptTags rather than requiring theme edits.

Second, stop treating any single platform's ROAS as a final answer and start reading it as a trend line instead. If Meta's reported ROAS drops from 3.2 to 2.4 week over week, that drop is real information regardless of whether 3.2 was ever fully accurate to begin with. Trend direction survives attribution noise better than any single snapshot does.

Third, build one blended number that becomes your actual ground truth: total ad spend across every channel, divided by total store revenue from Shopify for that same period, using your own order data instead of any platform's self-reported revenue. This number can't double-count a sale, because it only counts revenue once, no matter how many platforms want credit for it. [This guide](/pixel-tracker/guides/roas-calculation) walks through the formula, and [this post](/blog/calculate-true-roas) covers the adjustment most merchants skip entirely: backing out returns and refunds, which platform ROAS never accounts for.

Platform-reported ROAS will keep disagreeing with itself and with your bank account, because the platforms have no incentive to fix that and no way to see each other's data anyway. Accepting that up front, and building a blended, server-side-backed number as your real scoreboard, is a more honest way to run ad spend than chasing whichever platform's dashboard currently looks best.

Pixel Tracker is still pre-launch. If you want your store's pixels centralized and your server-side conversions actually firing once it ships, [join the waitlist](/#waitlist). It won't calculate ROAS for you, that's still your spreadsheet's job, but it makes the data feeding that spreadsheet a lot harder to argue with.`,
    faqs: [
      {
        q: `Why do Facebook and Google both show a strong ROAS but my actual revenue doesn't match either number?`,
        a: `Attribution windows overlap. Meta and Google each track ad exposure and purchases on their own clock and give themselves credit for any sale that fits inside their own window, with no coordination between platforms. A single order can get counted as a win by two or three different ad accounts at once, which is why summed platform ROAS is almost always higher than what actually shows up in your Shopify revenue.`,
      },
      {
        q: `Does enabling server-side tracking fully fix ROAS accuracy?`,
        a: `No. Server-side tracking, through Facebook Conversions API or TikTok Events API, recovers conversion events that browser pixels lose to ad blockers, iOS App Tracking Transparency, and Safari's Intelligent Tracking Prevention. That makes the data each platform receives more complete, but it does not stop two platforms from both claiming credit for the same sale. You still need a blended, order-based number to see the real picture.`,
      },
      {
        q: `What does a "blended" ROAS number actually mean?`,
        a: `It means dividing your total ad spend across every channel by your total store revenue from Shopify orders for the same period, rather than adding up each platform's self-reported revenue. Because it counts each sale exactly once, it can't be inflated by cross-platform attribution overlap the way individual platform dashboards can.`,
      },
      {
        q: `Should I ignore platform-reported ROAS entirely?`,
        a: `No. It's still useful as a directional signal, particularly for spotting trends within a single platform over time. The mistake is treating the absolute number as literal truth or comparing raw ROAS figures across platforms, since each one is measuring against a different, self-favoring set of rules.`,
      },
      {
        q: `Does Pixel Tracker calculate ROAS for me?`,
        a: `No. Pixel Tracker installs and manages your tracking pixels for Facebook, Google Ads, TikTok, Snapchat, Pinterest, X, and LinkedIn from one Shopify dashboard, and supports server-side tracking for Facebook and TikTok. It feeds more complete, accurate conversion data into those ad platforms and into whatever tool or spreadsheet you use to calculate ROAS yourself. It does not have a built-in ROAS dashboard.`,
      },
    ],
  },
  {
    slug: "facebook-pixel-vs-google-tag",
    title: "Facebook Pixel vs Google Tag: Which Do You Need?",
    excerpt: `Facebook Pixel and the Google Ads tag aren't competing versions of the same tool, they track two different ad platforms. If you're running ads on both, the honest answer is you need both installed.`,
    category: "Ad Tracking",
    publishedAt: "2026-07-07",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["Facebook Pixel", "Google Ads", "Ad Tracking", "Shopify Ads"],
    body: `If you're running ads on both Facebook/Instagram and Google, you've probably wondered whether you actually need two separate pixels or just one. It's a fair question, since both get called "the pixel" in casual shop talk, as if they were interchangeable. They aren't. The short answer: Facebook Pixel and the Google Ads tag do different jobs for different ad platforms, and if you're spending money on both, you need both installed. Each one feeds data to a separate ad algorithm that has zero visibility into what the other platform is doing.

The Facebook Pixel tracks activity on your store and reports it back to Meta's ad system, which uses that data to decide who sees your Facebook and Instagram ads. When a visitor views a product, adds to cart, or completes checkout, the pixel fires an event telling Meta's algorithm what kind of person just took that action, so it can find more people who look similar. Without the pixel installed, Meta is still running your campaigns, but it's optimizing for clicks and engagement rather than actual purchases, because it has no way to confirm which clicks turned into sales.

The Google Ads conversion tag does the equivalent job for Google's ad network: Search ads, Shopping listings, Display, and YouTube ads bought through Google Ads. When someone clicks one of those ads and later buys, the tag reports the conversion back to Google Ads, which uses it to decide which keywords, product listings, and audiences are worth bidding on again. Worth being precise here: this is the Google Ads conversion tag, not Google Analytics or GA4. Those are separate Google products that measure different things. GA4 tracks your overall site traffic and behavior, while the Ads conversion tag exists specifically to tell the ad platform what converted. Pixel Tracker installs the Google Ads conversion tag, not GA4, and doesn't touch your Analytics setup at all. If you're actually trying to sort out Google Analytics versus other options, that's a different question, covered in [Shopify Analytics vs Google Analytics](/blog/shopify-analytics-vs-google-analytics).

Facebook and Google run separate auctions for separate inventory, using separate signals. A shopper who clicks your Instagram ad and a shopper who searches for your product on Google are, from each platform's point of view, two unconnected events being scored by two unconnected systems. Meta never sees the Google search. Google never sees the Instagram scroll. Installing the Facebook Pixel does nothing for your Google campaigns, and installing the Google tag does nothing for your Facebook campaigns, because neither pixel talks to the other and neither would help the other's optimization even if it could. So for any store running ad budget on both platforms, the honest answer isn't a choice between the two. It's both.

That said, "install both" isn't a blanket rule regardless of what you're doing. If you only advertise on Facebook and Instagram and have no Google Ads campaigns running, there's no urgency to install a Google tag that would just sit there with nothing to report. The rule is tied to where your ad spend actually goes, not to some general best practice of collecting every tag available.

Say you're running Facebook ads and Google Shopping at the same time, but you only ever got around to installing the Facebook Pixel. Your Facebook campaigns are optimizing normally: Meta knows who's converting and adjusts targeting, bids, and creative delivery accordingly. Your Google Shopping campaign, meanwhile, is flying blind. It has no signal about which clicks became sales, so it keeps spending against whatever bidding strategy you set at launch, with no way to learn that a particular search term or product listing is actually driving revenue. You'll still see clicks and impressions in Google Ads, but no reliable read on which of them mattered, which means bidding strategies like Target ROAS or Maximize Conversions don't have the data they need to work. Flip the setup: Google tag installed, no Facebook Pixel, while running ads on both, and it's your Facebook campaign that's now optimizing blind instead. Either way, half your ad spend has a feedback loop and half doesn't, and the half without one tends to get expensive.

If time or budget only allows for setting up one platform this week, install the pixel for whichever platform you're actually spending money on right now. That sounds obvious, but it's common for stores to stall out trying to get both platforms perfectly configured before launching either, and end up with zero tracking on the campaign that's already live. If your ad budget currently lives in Meta Ads Manager, get the [Meta Pixel](/pixel-tracker/meta-pixel) connected first, and the [Facebook Pixel setup guide](/pixel-tracker/guides/facebook-pixel-setup) walks through it in full. If your spend is in Google Ads instead, prioritize the [Google Ads conversion tag](/pixel-tracker/google-ads), and the [Google Ads conversion tracking guide](/pixel-tracker/guides/google-ads-conversion-tracking) covers that setup end to end. Once the platform you're actively spending on is tracked, add the second one before you turn on that second campaign, not after it's already running unmeasured.

This is the part where running both through one tool actually matters. Pixel Tracker connects Meta, Google Ads, TikTok, Snapchat, Pinterest, X, and LinkedIn pixels from a single Shopify dashboard, and they inject automatically through Shopify's own ScriptTags system, so none of it involves editing theme code. Adding a second or third platform later just means connecting another pixel, not redoing the setup you already have. Worth noting on the server-side question too, since it comes up: Pixel Tracker supports Facebook Conversions API alongside the browser pixel, for stores that want to backfill events that browser-based tracking misses. The Google Ads tag stays client-side only through Pixel Tracker; there's no server-side option for that one. The free plan covers one pixel; paid plans run from $7 a month for three pixels up to $29 a month for unlimited, per store, with no free trial. Pixel Tracker is pre-launch right now, so the way in is to [join the waitlist](/#waitlist).

Neither pixel is a lesser version of the other, and neither is optional once you're paying for ads on that platform. If your ad spend touches both Facebook and Google, plan on both pixels from day one. If it only touches one right now, install that one immediately and add the second the moment your budget or campaigns expand there.`,
    faqs: [
      {
        q: `Does the Google tag in Pixel Tracker also cover Google Analytics or GA4?`,
        a: `No. Pixel Tracker installs the Google Ads conversion tag, which reports conversions back to Google Ads for bidding and optimization. That's a separate product from Google Analytics (GA4), which measures general site traffic and behavior. Pixel Tracker doesn't touch GA4 at all.`,
      },
      {
        q: `If I only run ads on one platform, do I still need both pixels?`,
        a: `No. The need for a pixel is tied to where you're actually spending ad budget. If you only advertise on Facebook and Instagram, there's no reason to install a Google Ads tag that has no campaign to report on, and the reverse is true if you only run Google Ads.`,
      },
      {
        q: `Will running a Facebook Pixel and a Google Ads tag at the same time cause conflicts?`,
        a: `No. They're independent scripts reporting to two different systems, and Shopify handles the injection through its own ScriptTags mechanism. Adding one doesn't interfere with the other or require editing your theme code.`,
      },
      {
        q: `Does Pixel Tracker support server-side tracking for both Facebook and Google?`,
        a: `Only for Facebook. Pixel Tracker supports Facebook Conversions API (CAPI) and TikTok Events API for server-side event tracking. The Google Ads conversion tag through Pixel Tracker is client-side/browser only, with no server-side option.`,
      },
      {
        q: `What happens if I only ever install one pixel while advertising on both platforms?`,
        a: `The platform without a pixel keeps spending your budget without any conversion feedback. Its bidding strategy has no data on which clicks actually became sales, so it can't learn or improve targeting, even while the other platform's campaign optimizes normally.`,
      },
    ],
  },
  {
    slug: "tiktok-pixel-setup-shopify",
    title: "TikTok Pixel Setup on Shopify: Step-by-Step",
    excerpt: `TikTok's algorithm can't optimize toward conversions it never sees, and your Meta or Google pixel won't tell it anything. Here's the short version of getting a TikTok pixel live on Shopify, plus the purchase-check step most merchants skip.`,
    category: "Ad Tracking",
    publishedAt: "2026-07-10",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["TikTok Ads", "Shopify", "Pixel Tracking", "Conversion Tracking"],
    body: `TikTok's ad algorithm doesn't know anything about your store until you tell it. Your Meta pixel doesn't share data with TikTok, your Google Ads tag doesn't either, and Snapchat's pixel is a separate signal too. Every ad platform runs its own closed system: it optimizes toward the people most likely to convert, but only based on the conversions it can actually see happening on your store. If you're running TikTok ads without a TikTok pixel installed, the platform is guessing who to target based on general audience signals, not on what actually happens after someone clicks through to your product page. That's the real reason this deserves its own setup, not just a line item you check off after your Meta pixel is already live.

The mechanics aren't complicated once you know what you're doing, but Shopify adds a wrinkle most general TikTok tutorials skip over: getting the code onto your store without hand-editing theme files that break on the next update. This post covers the shorter version, the steps most merchants actually need to get a working pixel live today. If you want every screen in TikTok Ads Manager, exact field names, and fixes for specific error messages, the [TikTok Pixel Setup Guide for Shopify](/pixel-tracker/guides/tiktok-pixel-setup) covers all of that. Treat this as the version you read first.

Step 1 is creating the pixel itself. Log into TikTok Ads Manager, go to Assets, then Events, and set up a new web pixel. TikTok will ask whether you want to install it manually or through a partner integration, and either way you'll come away with a Pixel ID, a string of letters and numbers unique to your account. That ID is the one thing you need before touching your store.

Step 2 is getting that pixel onto every page of your store, which is where things usually get annoying. The standard route is pasting TikTok's base code into theme.liquid, which works fine until your next theme update overwrites it, or until you add a second ad platform and now you're maintaining two blocks of hand-edited code in a file you're afraid to touch. [Pixel Tracker](/pixel-tracker) skips that entirely: paste your TikTok Pixel ID into the app's dashboard and it injects the pixel across your storefront through a Shopify ScriptTag automatically, no theme editor required. The same dashboard holds your Meta pixel, Google Ads conversion tag, Snapchat, Pinterest, X, and LinkedIn pixels too, since most stores end up running more than one ad platform eventually.

Step 3 is confirming the pixel is actually firing, not just installed. Add the TikTok Pixel Helper browser extension, load your storefront, and check that the pixel ID showing up matches the one in Ads Manager. Browse a product page and add something to cart, then watch for standard events like ViewContent and AddToCart to register. If nothing shows up, check a cached page or an ad blocker running in your own test browser before assuming the install itself is broken. The [full setup guide](/pixel-tracker/guides/tiktok-pixel-setup) has a longer troubleshooting section if the basics don't turn up the problem.

Step 4 is the one people skip because the pixel already "looks installed": running an actual purchase through checkout and confirming the event lands in TikTok Events Manager with the correct value and currency attached. TikTok's algorithm uses that value to find more people likely to spend a similar amount, so a Purchase event that fires with a zero value or the wrong currency will quietly work against campaigns optimized for value rather than just clicks. Do this before you scale ad spend, not after the numbers start looking strange.

Step 5, optional but worth doing once the basics are confirmed, is server-side tracking. Browser pixels miss conversions for reasons that have nothing to do with your setup, most commonly ad blockers and privacy settings that stop third-party scripts before they load. TikTok's Events API sends the same conversion events from your server instead of relying entirely on the browser to deliver them. Pixel Tracker supports TikTok Events API alongside Facebook Conversions API, so this is a reasonable next step once your browser pixel is confirmed working, not something you need on day one. The [server-side tracking guide](/pixel-tracker/guides/server-side-tracking) covers when it's worth setting up and how it differs from what you just installed.

If you'd rather skip straight to connecting through the app instead of reading through the reasoning above, the [TikTok pixel setup page](/pixel-tracker/tiktok-pixel) is the direct version of step 2. One honest note on timing: Pixel Tracker is pre-launch right now, so the accurate thing to do is [join the waitlist](/#waitlist) for access when it opens, not install it this afternoon. On pricing, since it tends to come up early: plans start free for one pixel and scale to unlimited pixels at $29 a month, with $7 and $15 tiers in between, so if TikTok is the only platform you're tracking right now, you're not paying for tools you don't need yet.

None of this is complicated once it's done properly, which is exactly the point of doing it properly the first time. A pixel that's technically installed but never confirmed against a real purchase is just code sitting on your site, not a working tracking setup. Get the base pixel firing, confirm it against an actual order, and add server-side tracking once you know the campaigns you're running are worth protecting.`,
    faqs: [
      {
        q: `Do I need to edit my Shopify theme code to install the TikTok pixel?`,
        a: `Not if you're using an app to handle it. Pixel Tracker injects the pixel through a Shopify ScriptTag once you enter your TikTok Pixel ID, so there's no theme.liquid editing involved. A fully manual install, without an app, does require pasting TikTok's base code into your theme, which is where most install errors come from.`,
      },
      {
        q: `How is this different from the full TikTok Pixel Setup Guide?`,
        a: `This post covers the high-level steps for merchants who want the pixel running without reading a full reference document. The [TikTok Pixel Setup Guide for Shopify](/pixel-tracker/guides/tiktok-pixel-setup) covers every screen, exact field names, screenshots, and troubleshooting for specific error messages, so use that one if you get stuck on a particular step.`,
      },
      {
        q: `Can TikTok still track a sale if the customer uses an ad blocker?`,
        a: `Not reliably through the browser pixel alone, since ad blockers and privacy settings can stop it from firing. TikTok's Events API sends the same event data from your server instead, which is why it's worth adding once your browser pixel is confirmed working. The [server-side tracking guide](/pixel-tracker/guides/server-side-tracking) covers how that works.`,
      },
      {
        q: `Can I install Pixel Tracker on my store right now?`,
        a: `Not yet. Pixel Tracker is pre-launch, so the current step is to [join the waitlist](/#waitlist) for access when it opens rather than installing it today.`,
      },
      {
        q: `What does Pixel Tracker cost once it's available?`,
        a: `Plans run from free for one pixel up to $29 a month for unlimited pixels, with $7 and $15 tiers in between for 3 and 10 pixels. Pricing is per store, and there's no free trial.`,
      },
    ],
  },
  {
    slug: "track-ad-spend-multiple-platforms",
    title: "How to Track Ad Spend Across Multiple Platforms",
    excerpt: `When ad spend and conversions live in five different ad dashboards, none of them agree, and that's not an accident. Here's a practical, spreadsheet-based way to build one honest number for what your ads are actually doing.`,
    category: "Ad Tracking",
    publishedAt: "2026-07-14",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["ad tracking", "blended CAC", "multi-channel marketing", "Shopify ads", "pixel tracking"],
    body: `If you run ads on more than one platform, you already know the feeling: five browser tabs open, five different ways of counting a "conversion," and no single number you actually trust. Facebook Ads Manager says one thing, Google Ads says another, and TikTok's dashboard tells a third story entirely. None of them are lying exactly, they're just each grading their own homework.

Each platform attributes conversions using its own window and its own logic, and each platform has an incentive to claim as much credit as possible for a sale. Meta's reported conversions typically use a 7-day click / 1-day view window by default. Google Ads counts a conversion if it falls within its own lookback period. TikTok has its own rules too. A single customer who saw a TikTok ad, clicked a Google ad two days later, and then clicked a Facebook retargeting ad before buying can show up as a "conversion" on all three platforms at once. Add up what each platform claims, and you've overcounted your own customer base without touching a spreadsheet.

This isn't just a theoretical accuracy problem, it changes what a merchant actually decides to do. Store owners scale up campaigns that look profitable on one platform's dashboard and pause ones that look expensive on another, all while comparing numbers that were never meant to sit side by side in the first place. The fix isn't finding a smarter dashboard. It's building a second, boring, platform-agnostic view that sits above all of them.

That view can be as simple as a spreadsheet, and for most small stores it should be. Once a week, at the same time, pull four numbers from each ad platform you're running spend on: the platform name, total spend for the week, reported conversions for the week, and reported revenue for the week. One row per platform per week. Facebook, Google, TikTok, Snapchat, Pinterest, whatever you're actually running, all logged the same way in the same sheet. It takes maybe fifteen minutes if you do it consistently, and it turns five disconnected dashboards into one table you can actually scroll through.

Weekly is the right cadence for most solo and small-team merchants. Daily is too noisy, since ad platforms revise their own numbers for a day or two after the fact, and monthly is too slow to catch a channel drifting off course. Add a fifth column for total store revenue and total orders for the same week, pulled straight from Shopify, so the sheet has both what each platform claims and what actually happened in the business. That combination is what makes the next step possible.

With that data sitting in one place, you can calculate the number that matters more than anything a single ad platform reports: blended customer acquisition cost. Blended CAC is total ad spend across every platform for the period, divided by total new customers acquired store-wide in that same period, using Shopify's own first-time-customer count rather than any platform's attribution claim. Say you spent $4,000 across Facebook, Google, and TikTok combined last month and picked up 160 new customers store-wide. Your blended CAC would be $25. No attribution model, no click windows, no platform grading its own work.

Blended CAC is a more honest sanity check precisely because it doesn't care which platform gets the credit. It's anchored to something that actually happened, a new customer record in your Shopify admin, rather than to a conversion event that three different platforms might each be independently claiming. A platform-reported return that looks strong in isolation can coexist with a store that's barely breaking even once you account for the overlap between platforms. Blended CAC compared against your average order value and margin tells you, in plain terms, whether the whole system is working, not whether one dashboard's math looks good on its own. For a deeper look at why platform-level attribution disagrees with itself and how different attribution models handle the overlap, the [multi-channel attribution guide](/pixel-tracker/guides/multi-channel-attribution) covers the theory side of this in more detail.

None of this works, though, if half your platforms aren't reporting real numbers in the first place. This is the part that trips up most merchants running ads on more than one or two channels: they set up a Facebook pixel and a Google Ads tag when they first started running ads, and that's where pixel setup stopped. Six months later they're running TikTok and Pinterest campaigns too, spending real money, but nobody went back and connected pixels for those platforms. The result is a weekly tracker with a blank or unreliable reported-conversions column for exactly the channels that are newest and least understood, which is backwards. You end up with your best data on your oldest, most familiar channel and next to nothing on the ones you actually need visibility into.

Getting every pixel connected, not just the first one or two set up back at launch, is a prerequisite for this whole exercise, not an optional nice-to-have. This is the specific problem [Pixel Tracker](/pixel-tracker) is built around: connecting tracking pixels for Meta (Facebook), Google Ads (the conversion tag, not GA4), TikTok, Snapchat, Pinterest, X, and LinkedIn from one Shopify dashboard, with pixels injected automatically through Shopify ScriptTags so there's no theme code to touch. It's worth being clear about what it does and doesn't do: it connects the pixels, and for Facebook and TikTok it adds server-side tracking through Conversions API and Events API so the numbers those two platforms report are less dented by browser tracking loss. It does not calculate a blended CAC or ROAS for you, and there's no cross-platform dashboard built in. You still need the weekly spreadsheet described above. What it fixes is the step before that: making sure every platform you're spending money on is actually reporting real numbers to log in the first place.

That distinction matters for picking a plan, too. The free tier covers one pixel, which is fine if you're only running Facebook ads and nothing else. The moment you're running ads on three or more platforms, which is exactly the situation this tracking exercise assumes, you're looking at Starter at $7 a month for three pixels, Growth at $15 a month for ten, or Pro at $29 a month for unlimited pixels on a single store. Growth and Pro exist specifically for merchants who've moved past one or two ad channels and need every platform they're actually spending on connected at once, not just the ones they got around to first.

If you're comparing options for pixel management on Shopify, it's worth looking at more than one tool before committing, since setups and pricing structures vary more than you'd expect for what sounds like a simple task. The [roundup of Shopify ad tracking tools](/alternatives/best-shopify-ad-tracking-tools) is a reasonable place to start that comparison.

Pixel Tracker itself is currently pre-launch and taking [waitlist signups](/#waitlist) rather than live installs, so if the pixel-connection side of this is what you're after, that's the way to get notified when it opens up.

None of this requires new software to start, though. The spreadsheet, the weekly fifteen minutes, and the blended CAC formula work today with whatever platforms you're already running, using numbers you can pull by hand. Getting every pixel connected just determines how much you can trust the numbers you're plugging into it.`,
    faqs: [
      {
        q: `What is blended CAC and why does it matter more than a single platform's reported ROAS?`,
        a: `Blended CAC is total ad spend across every platform for a period, divided by total new customers acquired store-wide in that same period, using your store's own first-time-customer count rather than any platform's attribution claim. It matters more than a single platform's ROAS because platforms attribute conversions using overlapping windows and each has an incentive to claim credit, so summing their individual numbers overcounts. Blended CAC is anchored to something that actually happened in your Shopify admin, not to a conversion event three platforms might each be claiming at once.`,
      },
      {
        q: `How often should I update my ad spend tracking spreadsheet?`,
        a: `Weekly works well for most solo and small-team merchants. Daily is usually too noisy, since ad platforms revise their own numbers for a day or two after the fact, and monthly is too slow to catch a channel going sideways before it burns through real budget.`,
      },
      {
        q: `Why do Facebook, Google, and TikTok report different conversion numbers for the same period?`,
        a: `Each platform uses its own attribution window and logic, and each has an incentive to claim credit for a sale. A customer who saw ads on all three before buying can be counted as a conversion by all three at once, so adding up each platform's own reported number overcounts your actual customer base.`,
      },
      {
        q: `Do I need every platform's pixel connected even if I'm only actively running paid ads on two of them right now?`,
        a: `You only need pixels firing for platforms where you're actually spending money, but the moment you add a new ad platform to the mix, connect its pixel before or alongside launching the campaign. The common failure is adding TikTok or Pinterest spend months after initial setup and forgetting to connect that platform's pixel, which leaves that channel's numbers unreliable in your tracker.`,
      },
      {
        q: `Does Pixel Tracker calculate blended CAC or ROAS for me?`,
        a: `No. Pixel Tracker connects tracking pixels for Meta, Google Ads, TikTok, Snapchat, Pinterest, X, and LinkedIn from one Shopify dashboard, and adds server-side tracking for Facebook and TikTok through Conversions API and Events API. It doesn't calculate a blended CAC or ROAS figure or provide a cross-platform dashboard, so you still build the weekly spreadsheet yourself using the numbers each connected platform reports.`,
      },
    ],
  },
  {
    slug: "shopify-analytics-vs-google-analytics",
    title: "Shopify Analytics vs Google Analytics: Pros and Cons",
    excerpt: `Shopify's built-in dashboard covers sales, sessions, and conversion rate with zero setup. Here's what Google Analytics 4 actually adds on top, what it costs you in setup time and consent complexity, and how to tell which one your store needs.`,
    category: "Analytics",
    publishedAt: "2026-07-17",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["Shopify Analytics", "Google Analytics", "GA4", "Ecommerce", "Conversion Tracking"],
    body: `Open Shopify admin, click Analytics, and you already have a dashboard: sales, sessions, conversion rate, a funnel showing where visitors drop off. It's there from day one, no setup required. Then someone tells you to install Google Analytics too, and you have to decide whether that's actually going to tell you anything the native reports don't.

Shopify's built-in analytics covers the questions most stores ask daily. The Overview dashboard shows total sales, order count, average order value, and sessions over whatever date range you pick. The conversion funnel breaks visitors into added to cart, reached checkout, and sessions that converted, so you can see at a glance whether the problem is traffic, interest, or checkout friction. Behavior reports show top landing pages and top products by views. Acquisition reports split traffic by channel: direct, search, social, email, paid. None of this requires a cookie banner update, a tracking code install, or a data layer. It's first-party data, tied to orders that already exist in Shopify's database, and it's accurate the day you launch.

For a lot of stores, especially single-product shops or anyone running a lean catalog, that's the whole picture they need. You can tell if a product page is converting, whether a discount code moved the needle, and which channel is actually driving sales.

Where Shopify's native reports run out of road is anything that requires tracking behavior across visits or building visitors into a defined audience. GA4 lets you set up custom events for things Shopify doesn't track by default: scroll depth, video plays, clicks on a button that isn't tied to a purchase. It stitches sessions together across devices, so a visitor who browses on their phone during lunch and buys from a laptop that night shows up as one journey instead of two disconnected sessions. It also lets you build audiences for remarketing, such as everyone who viewed a product but didn't buy in the last 30 days, and push those audiences into Google Ads. That matters for stores spending real money on paid search or Performance Max campaigns, because GA4's conversion data can feed Google's bidding algorithms more context than a single purchase event, which in theory helps Google spend the budget toward people more likely to buy.

That bidding integration is a different thing from simply having Google's conversion tag installed, and the two get confused constantly. A Google Ads conversion tag just tells Google a purchase happened, which is enough for basic conversion tracking. GA4 is the fuller reporting layer sitting next to it. If you're trying to sort out which of these you actually need for your ad accounts, [this comparison of pixel tracking versus tag tracking](/blog/facebook-pixel-vs-google-tag) walks through the distinction in more detail. Worth noting: a tool like [Pixel Tracker](/pixel-tracker) handles the ad-platform side of this, connecting the Facebook pixel, the [Google Ads conversion tag](/pixel-tracker/google-ads), TikTok, and a handful of other ad platforms directly from the Shopify admin ahead of its launch. It has nothing to do with GA4 or Shopify's analytics dashboard; it's solving a narrower problem, getting ad platforms the purchase signal they need, not building you a reporting suite. If that's the gap you're trying to close, you can [join the waitlist](/#waitlist).

Back to GA4 itself. The reason a lot of merchants install it and then never open it again comes down to setup cost. Connecting GA4 to Shopify is the easy part, a few clicks in the Sales Channels section. Getting it to report anything useful is the harder part. Shopify's native ecommerce events don't automatically become meaningful GA4 conversions; you generally need to mark specific events, like purchase or add_to_cart, as key events inside GA4's admin, and depending on your setup that can mean digging into data stream configuration or adding Google Tag Manager into the mix. GA4's interface is also a genuine departure from the old Universal Analytics reports merchants may remember. Instead of a handful of pre-built reports, GA4 leans on "Explorations," a flexible report-builder that's powerful once you know what you're doing and fairly opaque before that. Answering a simple question like what's my conversion rate by traffic source this month often means building a custom exploration rather than clicking a report that already exists.

There's also a consent question that Shopify's native analytics mostly sidesteps. Because Shopify's built-in reports run on first-party order and session data already required to operate the store, they don't typically trigger the same cookie consent obligations as GA4, which relies on cookies and, in some configurations, additional identifiers to stitch sessions and build audiences. If you're selling into the EU, UK, or other regions with cookie consent laws, adding GA4 usually means adding an analytics category to your consent banner, and depending on how many visitors decline, that can mean real gaps in the data GA4 collects. None of this makes GA4 not worth it, but it's a cost that doesn't show up until after installation, and it's worth planning for rather than discovering later.

So who actually needs GA4 on a Shopify store? Stores running meaningful paid ad spend through Google Ads, especially anything beyond simple search campaigns, tend to benefit from the deeper conversion data feeding back into bidding. Stores with more than one significant marketing channel, where figuring out which channel deserves credit for a sale isn't obvious from last-click alone, get more out of GA4's audience and attribution tools than Shopify's simpler acquisition report. And any store that wants to track specific on-site behavior, like whether people watch a product video before buying or how far they scroll on a landing page, needs GA4 or something like it, because Shopify's dashboard doesn't track events at that level of detail.

On the other side, if your store is early-stage, running mostly organic or social traffic, or managed by one person without a dedicated marketing hire, Shopify's native analytics probably answers every question you're actually asking day to day. Installing GA4 because a blog post or a Shopify Partner told you to, without a specific question it's meant to answer, is how a lot of stores end up with a GA4 property nobody has opened in six months.

The practical rule: add GA4 when you have a question Shopify's dashboard genuinely can't answer, not as a default checkbox. If that day comes, budget real time for setting up conversion events properly and reviewing your cookie consent flow, not just pasting in a measurement ID and assuming the data will make sense on its own.`,
    faqs: [
      { q: `Does Shopify's analytics dashboard cost extra?`, a: `No. It's built into every Shopify plan and works immediately, with no tracking code or setup required.` },
      { q: `Can I use Shopify Analytics and Google Analytics 4 at the same time?`, a: `Yes. They run independently, so adding GA4 doesn't replace or interfere with Shopify's native reports.` },
      { q: `Is Google Analytics 4 free?`, a: `Yes, GA4 itself has no cost. The real expense is the time it takes to configure conversion events correctly and keep your consent banner compliant.` },
      { q: `Does GA4 track sales as accurately as Shopify?`, a: `They can differ. Shopify's sales figures come directly from completed orders, while GA4's ecommerce events depend on correct tracking configuration and can undercount if conversion events aren't set up properly or if a visitor declines cookie consent.` },
      { q: `Do I need GA4 if I mainly run Facebook or TikTok ads instead of Google Ads?`, a: `Not necessarily. GA4's biggest advantage is feeding richer data back into Google Ads bidding, so if most of your ad spend is elsewhere, Shopify's native reports may already answer the questions you have.` },
    ],
  },
  {
    slug: "shopify-server-side-tracking-guide",
    title: "The Complete Guide to Shopify Server-Side Tracking",
    excerpt: `A missed pixel event isn't a rounding error, it's lost signal that quietly skews your ad targeting and inflates your reported cost per acquisition. Here's why server-side tracking matters now, and where Pixel Tracker's server-side support actually starts and stops.`,
    category: "Ad Tracking",
    publishedAt: "2026-07-21",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["server-side tracking", "Conversions API", "TikTok Events API", "Shopify ads", "ad attribution"],
    body: `If your ad platform's reported conversions never quite match your actual Shopify orders, you've probably chalked it up to "attribution is just messy." Some of that is true. But part of that gap isn't measurement fuzziness — it's data your pixel simply never had the chance to send.

A standard tracking pixel, the kind that fires from a snippet of JavaScript in the visitor's browser, depends on that browser cooperating the whole way through. Ad blockers strip it outright. Safari's Intelligent Tracking Prevention and Firefox's Enhanced Tracking Protection throttle or delete the cookies it relies on. A dropped mobile connection can keep the request from ever reaching Meta or TikTok, even though the checkout finished a second earlier. None of this shows up as an error anywhere in your Shopify admin. The order still completes, the customer still gets a confirmation email, and the sale is still real. The only thing missing is the ad platform's record that it happened.

That's the part worth sitting with, because a missed pixel event isn't a rounding error you can shrug off. Ad platforms use every conversion they can see to decide who to show your ads to next. When a real purchase never reaches Facebook or TikTok, the algorithm doesn't know it happened, so it keeps optimizing toward whoever it could track, which skews toward people with fewer ad blockers and more cooperative browsers, not necessarily whoever was most likely to buy. Do that for a few months and your targeting drifts quietly away from your actual best customers, your reported cost per acquisition looks worse than it really is, and it gets harder to justify the spend on whatever's actually working.

It gets messier if you advertise on more than one platform at once. Say you run both Meta and Google Ads. If Meta's pixel happens to undercount conversions less than Google's does, maybe because more of your Meta traffic comes through in-app browsers that behave differently than Safari, your dashboards will show Meta outperforming Google even when the real return is closer, or reversed. You end up shifting budget toward whichever platform measures itself best, not whichever platform is actually selling the most product. For a solo merchant running a lean ad budget on a couple of channels, that's not an edge case. It's the default state of tracking once any part of your setup relies purely on the browser to report back.

Server-side tracking closes most of that gap by sending the conversion event a second way: directly from your store's server to the ad platform's API, rather than relying only on the customer's browser to deliver it. The browser pixel still fires first, as it always has. If it's blocked, delayed, or dropped, a server-side copy of that same event, deduplicated against the browser event so the platform doesn't count the sale twice, still gets through. It isn't a replacement for your pixel. It's a second delivery route for the same information, one that ad blockers and browser privacy settings can't touch because it never passes through the visitor's browser at all.

That's the short version of the mechanics. How deduplication actually works, what a Conversions API payload looks like, how TikTok's Events API differs from Meta's — that's all covered in detail in the [full technical guide to Shopify server-side tracking](/pixel-tracker/guides/server-side-tracking). This post is more about why it's worth bothering with in the first place.

Timing is part of the case too. Browsers have spent years tightening what third-party scripts are allowed to do, and none of them have reversed course. Ad platforms have noticed the same signal loss merchants have, which is why Meta and TikTok both built server-side APIs in the first place and now reward accounts that use them with better event matching. This isn't a trend you can wait out until it blows over. Browsers are only going to get more restrictive from here, and the merchants who set up a server-side path now are the ones whose reported numbers will keep lining up with what actually happened in their store, while everyone else's numbers drift further from reality.

It's worth being precise here about what Pixel Tracker actually covers, since "server-side tracking" gets used loosely. [Pixel Tracker](/pixel-tracker) connects pixels for Meta, Google Ads' conversion tag, TikTok, Snapchat, Pinterest, X, and LinkedIn from one Shopify dashboard, injected automatically through Shopify ScriptTags so there's no theme editing involved. On the server-side, it currently supports Meta's Conversions API and TikTok's Events API, and only those two. Google Ads, Snapchat, Pinterest, X, and LinkedIn run on standard browser pixels for now, with no server-side option yet. If most of your spend sits on one of those platforms, that's worth knowing before you assume server-side tracking solves everything at once.

None of this requires a developer. Setup for the platforms Pixel Tracker supports happens in the dashboard, where you paste in pixel IDs and access tokens rather than opening theme.liquid or writing custom code. If you haven't set up the underlying pixels yet, the [Facebook pixel setup guide](/pixel-tracker/guides/facebook-pixel-setup) and [TikTok pixel setup guide](/pixel-tracker/guides/tiktok-pixel-setup) walk through that first, since server-side tracking supplements a working pixel rather than replacing one.

Pixel Tracker is pre-launch right now, so there's no install-it-today option — you can [join the waitlist](/#waitlist) for access when it opens. Pricing is set: free at $0/month for one pixel, $7/month for three pixels on Starter, $15/month for ten pixels on Growth, and $29/month for unlimited pixels on Pro, per store, with no free trial.

Server-side tracking and privacy-conscious tracking aren't opposites, even though the phrase can sound like it's about squeezing more data out of people who tried to opt out. It's really about not losing the data your own customers already generated by buying something from you. We get into that distinction more in [our post on privacy-first tracking for Shopify stores](/blog/privacy-first-tracking-shopify). The practical takeaway here is simpler: if your pixel is the only thing telling an ad platform what converted, you're leaking signal quietly, every day, in a way that's fixable without touching your theme.`,
    faqs: [
      { q: `What's the actual difference between a pixel and server-side tracking?`, a: `A pixel is JavaScript that fires in the customer's browser and depends on that browser letting it through, so ad blockers, tracking prevention, and dropped connections can all stop it. Server-side tracking sends the same conversion event from your store's server directly to the ad platform's API, so it doesn't depend on the browser cooperating. Pixel Tracker deduplicates the two so the platform doesn't count one sale twice. For the full technical breakdown, see the server-side tracking guide at /pixel-tracker/guides/server-side-tracking.` },
      { q: `Does Pixel Tracker support server-side tracking for Google Ads, Snapchat, Pinterest, X, or LinkedIn?`, a: `Not currently. Pixel Tracker's server-side support covers Meta's Conversions API and TikTok's Events API only. Google Ads, Snapchat, Pinterest, X, and LinkedIn are handled through standard browser pixels, injected automatically via Shopify ScriptTags.` },
      { q: `Do I need a developer or theme access to set this up?`, a: `No. Everything runs through the Pixel Tracker dashboard, where you paste in pixel IDs and access tokens rather than editing theme.liquid or writing custom scripts. The Facebook and TikTok pixel setup guides walk through the exact steps.` },
      { q: `How much does Pixel Tracker cost?`, a: `Free for one pixel at $0/month, $7/month for three pixels on Starter, $15/month for ten pixels on Growth, and $29/month for unlimited pixels on Pro. Pricing is per store, and there's no free trial.` },
      { q: `Can I install Pixel Tracker today?`, a: `Not yet. Pixel Tracker is pre-launch and currently taking signups on the waitlist. You can join the waitlist to get access when it opens.` },
    ],
  },
  {
    slug: "calculate-true-roas",
    title: "How to Calculate True ROAS (Including Returns)",
    excerpt: `Ad platforms calculate ROAS from gross revenue at checkout and never adjust it when a return comes in later. Here's how to work out net-of-returns ROAS, with a worked example showing how a profitable-looking campaign can quietly go underwater.`,
    category: "Analytics",
    publishedAt: "2026-07-24",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["ROAS", "Returns & Refunds", "Ad Attribution", "Analytics"],
    body: `A campaign can look great the day you check it and be quietly underwater three weeks later, and the ad platform's dashboard will never tell you. This isn't an edge case. It happens whenever a meaningful share of the orders a campaign generated later get returned, and it happens most often in apparel and footwear, where fit and sizing alone drive a lot of returns that have nothing to do with the ad or the product being bad. The number that made you raise budget in week one can be the same number that was already wrong, you just didn't know it yet.

If you haven't seen the standard formula yet, the [base guide to calculating ROAS](/pixel-tracker/guides/roas-calculation) covers it: ad spend measured against attributed revenue. This post assumes you already know that formula and focuses on one specific way it misleads you. Gross revenue at the moment of purchase is not the same number as what you actually keep once returns and refunds work their way through the following weeks.

Here's the mechanic. When Meta, Google, TikTok, or any other ad platform reports a purchase conversion, it records the order value at checkout, whether that event came from a browser pixel or a server-side call like Facebook's Conversions API. That number gets locked into the campaign's reporting the moment the event lands. As far as the ad platform is concerned, the sale is final. If the customer returns the product two weeks later, nothing in that report changes. The platform doesn't go back and subtract the refunded amount from the campaign's historical revenue. The ROAS you see for that period stays frozen at the gross figure, refund or no refund.

A worked example makes the gap concrete. Say you run a Meta campaign for a dress line at $1,000 in ad spend over one week. Meta's reporting attributes 20 purchases to that spend, each order worth $60, for $1,200 in attributed revenue. Gross ROAS is $1,200 divided by $1,000, or 1.2x. Not spectacular, but profitable on paper, assuming your margins can carry a 1.2x return.

Over the next three weeks, as customers actually try the dresses on, six of those twenty orders come back. Wrong size, color looked different online, whatever the reason. That's $360 in refunded revenue. Net revenue for the campaign is now $1,200 minus $360, or $840. Net-of-returns ROAS is $840 divided by $1,000, or 0.84x. The campaign that looked like it cleared break-even is now losing money on revenue alone, before cost of goods or fulfillment even enters the picture.

Meta's dashboard, meanwhile, still reports 1.2x. It will keep reporting 1.2x indefinitely, because nothing in that pipeline knows or cares that six shipments came back.

The two numbers, side by side:

Gross ROAS = Attributed Revenue / Ad Spend
Net-of-Returns ROAS = (Attributed Revenue - Refunded Revenue) / Ad Spend

The size of the gap between the two is basically your return rate for that product, weighted by which specific campaigns drove the orders that came back. A brand selling candles or phone cases might barely notice it. A brand selling apparel or footwear, where fit-related returns are routine, cannot skip this step, because the gap is large enough to flip a channel from apparently profitable to a real loss.

Two things make this hard to fix rather than just annoying to know about.

The first is timing. Ad platforms use attribution windows, commonly something like a 7-day click or 1-day view window, to decide which ad gets credit for a sale. That window closes fast. A return window is typically 30 days or more, and the customer often doesn't start the return until they've actually worn or used the item. By the time a return lands, the attribution window that produced the original ROAS number closed weeks earlier. The platform has already moved on to reporting the next batch of campaigns. It has no mechanism, and no real incentive, to reopen last month's numbers and revise them down.

The second is that ad platforms don't retroactively adjust reported conversion value for a return. This isn't a setting buried in Ads Manager that nobody turns on. Meta, Google, and TikTok all work the same way here: the conversion event fired, the revenue got attributed, and that's the end of the story from the platform's side. If you want net-of-returns ROAS, you build it yourself, outside the ad platform, using your own order and refund data.

Matching refunds back to the campaign that generated the original sale adds another layer of friction. Shopify's refund record doesn't know which ad or which platform sent that customer, and the ad platform's conversion report doesn't carry your order number by default. Without something tying the two together, usually a UTM parameter or an order tag set at checkout, you end up eyeballing dates and matching them to order values by hand, which works for twenty orders and falls apart once volume grows.

In practice that means pulling refund records out of Shopify (orders with a refund or return, tied to a date and an amount) and matching them against the orders your ads generated, then recalculating ROAS on a delay, after most of the return window for that batch of orders has closed. For a store with a 30-day return policy, that might mean not trusting a campaign's real ROAS until five or six weeks after it ran. That's an awkward cadence for making fast budget decisions, which is exactly why it's easy to skip and why so many merchants never catch it. For more on why the ROAS number on your dashboard drifts from reality even before returns enter the picture, see [why Shopify ROAS is inaccurate](/blog/why-shopify-roas-is-inaccurate).

Worth being direct about what a tool like [Pixel Tracker](/pixel-tracker) can and can't do here. Getting your pixels and server-side events (Conversions API for Facebook, Events API for TikTok) firing correctly and consistently across every platform is a prerequisite for any ROAS number being trustworthy in the first place, gross or net. But it's a data layer, not a returns ledger. Pixel Tracker doesn't calculate ROAS, and no tracking tool can retroactively tell Meta or TikTok that an order got refunded, because the ad platforms don't accept that correction after the fact. Solving the returns problem is a process you run on your end: export refunds, match them to orders, recompute net ROAS on a lag. Accurate tracking just makes sure the number you start with is actually right, so the math you build on top of it holds up.

None of this makes gross ROAS useless. It's still a fast signal for whether a campaign is in the right neighborhood. But if you sell anything with a meaningful return rate, treat what your ad platform shows you as provisional, not final, until enough time has passed for the returns to show up. Pixel Tracker is in development now; if you want to know when it's ready, [join the waitlist](/#waitlist).`,
    faqs: [
      {
        q: `Does Meta or Google Ads ever adjust reported ROAS after a customer returns a product?`,
        a: `No. Once a purchase conversion is attributed and reported, ad platforms don't go back and revise that number down when the order is later refunded. The ROAS you see is a snapshot taken at the moment of purchase, not a running total that accounts for what happens to the order afterward.`,
      },
      {
        q: `How long should I wait before trusting a campaign's ROAS?`,
        a: `Long enough for most returns tied to that batch of orders to have already happened. If your return policy gives customers 30 days, treat any ROAS pulled before that window closes as a provisional, gross number, and recheck it against your actual refund data once the window has passed.`,
      },
      {
        q: `Which product categories need to worry about this the most?`,
        a: `Apparel and footwear are the clearest cases, since fit and sizing drive returns that have nothing to do with the product being defective or the ad being misleading. Categories with low return rates, like consumables or accessories, will see a much smaller gap between gross and net ROAS.`,
      },
      {
        q: `Can Pixel Tracker calculate net-of-returns ROAS for me automatically?`,
        a: `No. Pixel Tracker connects tracking pixels for Facebook, Google Ads, TikTok, Snapchat, Pinterest, X, and LinkedIn, plus server-side events through Facebook Conversions API and TikTok Events API, so the ad platforms receive accurate conversion data. It doesn't have a ROAS dashboard and doesn't track refunds. Matching refunds to orders and recalculating net ROAS is a step you do separately with your own store data.`,
      },
      {
        q: `Does this mean gross ROAS is worthless?`,
        a: `No. It's still a useful early signal for whether a campaign is roughly in the right range. Just don't treat it as final for any product line with a meaningful return rate, and recheck it against net-of-returns numbers before scaling spend based on it.`,
      },
    ],
  },
  {
    slug: "privacy-first-tracking-shopify",
    title: "Privacy-First Tracking for Shopify in 2026",
    excerpt: `Third-party cookies are disappearing and ad platforms are undercounting conversions because of it. Here's what privacy-first tracking actually means for a Shopify merchant in 2026, and why it isn't the same thing as turning tracking off.`,
    category: "Privacy",
    publishedAt: "2026-07-28",
    author: "The Appnary Team",
    readingMinutes: 5,
    tags: ["privacy", "server-side tracking", "conversions api", "shopify ads", "cookie consent"],
    body: `Third-party cookies have been dying a slow, heavily-announced death for years, and by 2026 the effects are showing up plainly in ad dashboards rather than just in browser release notes. Safari and Firefox stopped accepting third-party cookies by default a while ago. Chrome has spent years narrowing what cross-site tracking is even possible. iOS's App Tracking Transparency prompt means a large share of iPhone users decline tracking outright when an app asks. None of this is breaking news if you've been paying attention to ad platforms complaining about it, but the cumulative effect is the part that matters to a Shopify merchant: the browser environment most ad pixels were designed for barely exists anymore.

What that means in practice: the conversion numbers your ad platform shows you become less reliable over time, not because your ads stopped working, but because the platform has a harder time connecting a click to a purchase that happened later, on a different device, or in a browser that blocks the tracking script outright. You place an order in Shopify, revenue is fine, but your Facebook or TikTok dashboard reports fewer conversions than actually happened. Left alone, this gap tends to widen as browsers keep restricting client-side tracking further each year. The fix available to merchants isn't to give up on measurement, it's to route conversion events through a method that doesn't depend entirely on a script surviving in someone's browser: server-side tracking, where the ad platform supports it.

That's a good moment to be precise about what privacy-first tracking actually means, because it gets used loosely and sometimes gets conflated with no tracking at all. They aren't the same thing, and mixing them up leads to bad decisions in both directions.

Privacy-first tracking means collecting only the data you actually need for measurement, being upfront about what you collect (in a privacy policy a visitor can actually read), and preferring methods that don't rely on invasive client-side fingerprinting to reconstruct who a visitor is. Server-side conversion APIs (Facebook's Conversions API and TikTok's Events API are the two most established examples) fit this description well: they send a conversion event from your server directly to the ad platform, so the event doesn't disappear just because a browser blocked a script or an ad blocker intercepted it. That's a narrower, more deliberate approach to tracking than firing a dozen client-side scripts and hoping some of them get through.

No tracking is a different thing entirely: not measuring conversions at all. For a merchant running paid ads, that's not a realistic option. If you're spending money on Facebook, TikTok, or Google Ads, you need some signal about which campaigns are actually producing sales, so you can put next month's budget somewhere sensible instead of guessing. Turning off measurement doesn't make your store more private in any meaningful way; it just means you're spending ad money blind. The realistic goal for most merchants in 2026 is somewhere in the middle: track what you need to run your business, be transparent about it, and stop over-collecting data you don't actually use.

With that distinction in mind, here's what a privacy-first setup looks like in practice for a Shopify store in 2026.

Keep a privacy policy that's actually accurate. This sounds obvious, but a lot of stores are still running a generic policy template that doesn't reflect which ad pixels are actually installed. If you're sending events to Facebook, Google, and TikTok, your policy should say so, in plain language a visitor can understand.

Use a cookie consent banner where the law requires one. Whether that's required depends on where your visitors are and what you're collecting. That's genuinely a legal question rather than a technical one, and your Shopify app can't decide for you whether GDPR or CCPA applies to your specific business. If you sell into the EU or UK, or have meaningful California traffic, talk to whoever handles your compliance about what your banner needs to cover.

Prefer server-side conversion APIs over piling on client-side tracking scripts. This is the technical lever with the most upside for both privacy and accuracy: fewer client-side scripts running in the browser means less data collected in the browser itself, and it also tends to produce more reliable conversion numbers because the event isn't dependent on a script surviving ad blockers and browser restrictions. For a walkthrough of how this actually works for a Shopify store, [Pixel Tracker's guide on server-side tracking](/pixel-tracker/guides/server-side-tracking) covers the mechanics, and the [companion post on setting up server-side tracking](/blog/shopify-server-side-tracking-guide) goes through it step by step.

Don't install more pixels than you're actually using. It's common for a store to accumulate a Facebook pixel, a Pinterest tag, a Snap pixel, and a LinkedIn tag over the years, long after the campaigns that needed them have ended. Every pixel still installed is still collecting and sending visitor data somewhere, whether or not anyone is looking at the results. If you're not actively running ads on a platform, there's no upside to keeping its pixel live on your store; it's just more data leaving your site for no benefit to you.

One thing worth being direct about: none of this transfers your compliance obligations to a piece of software. A tool that connects your pixels or routes events server-side, [Pixel Tracker](/pixel-tracker) included, forwards the events you configure it to send to the ad platforms you choose. It doesn't collect or store personally identifiable visitor data itself, and it doesn't manage cookie consent for you. The privacy policy, the consent banner, and the underlying legal compliance are still on the merchant, the same as they were before any pixel was installed. Server-side tracking is one piece of a privacy-conscious setup, not a substitute for the rest of it.

Pixel Tracker connects pixels for Facebook and Meta, Google Ads' conversion tag, TikTok, Snapchat, Pinterest, X, and LinkedIn from a single Shopify dashboard, and injects them automatically through Shopify's script tags rather than requiring theme edits. On the server-side, it supports Facebook's Conversions API and TikTok's Events API, for merchants who want their conversion numbers to hold up as client-side tracking keeps getting less reliable. It's currently pre-launch, and you can [join the waitlist](/#waitlist) to get access once it's available.

None of this requires overhauling your entire marketing stack overnight. Start with the pixels you actually use, move the ones that support it to server-side, and make sure your privacy policy reflects what's actually happening on your store. That's a more realistic definition of privacy-first than either ignoring the issue or ripping out tracking altogether.`,
    faqs: [
      {
        q: `What does privacy-first tracking mean for a Shopify store?`,
        a: `It means collecting only the data you actually need to measure ad performance, being transparent about it in your privacy policy, and preferring server-side methods, like Facebook's Conversions API or TikTok's Events API, over client-side scripts that rely on invasive browser fingerprinting.`,
      },
      {
        q: `Is privacy-first tracking the same as turning off tracking completely?`,
        a: `No. Not measuring conversions at all isn't realistic for a merchant paying for ads, since you need some signal about which campaigns are working. Privacy-first tracking is about collecting less and being more transparent, not collecting nothing.`,
      },
      {
        q: `Why do my ad platform's conversion numbers look lower than my actual sales?`,
        a: `Browser restrictions on tracking scripts, from Safari and Firefox's cookie blocking to iOS's App Tracking Transparency prompt, make it harder for ad platforms to connect a click to a later purchase. Server-side tracking, where the platform supports it, helps close that gap.`,
      },
      {
        q: `Does Pixel Tracker handle GDPR or CCPA compliance for my store?`,
        a: `No. Pixel Tracker forwards the events you configure to the ad platforms you choose, and it doesn't collect or store personally identifiable visitor data itself, but it doesn't manage cookie consent or handle your legal compliance. Your privacy policy, consent banner, and overall compliance remain your responsibility as the merchant.`,
      },
      {
        q: `Which ad platforms support server-side tracking through Pixel Tracker?`,
        a: `Pixel Tracker currently supports server-side tracking through Facebook's Conversions API and TikTok's Events API. Client-side pixel connections are available for Facebook and Meta, Google Ads' conversion tag, TikTok, Snapchat, Pinterest, X, and LinkedIn.`,
      },
    ],
  },
];