import type { BlogPost } from "@/lib/blog";

// Seed posts — keep content marketing-friendly but factual and on-brand.
// In production, these would be authored in MDX; for now we keep them in
// TypeScript so the build is static and there are no extra dependencies.

export const posts: BlogPost[] = [
  {
    slug: "pixel-tracker-launch-preview",
    title: "Pixel Tracker Launch Preview: What We're Building",
    excerpt:
      "A look at Pixel Tracker's multi-platform tracking setup, planned pricing, and what remains before the Shopify App Store launch.",
    category: "Product update",
    publishedAt: "2026-06-18",
    updatedAt: "2026-09-30",
    author: "The Appnary Team",
    readingMinutes: 4,
    tags: ["Pixel Tracker", "Launch", "Shopify"],
    tldr: `Pixel Tracker is in development. Here is the intended platform scope, the verification still needed, and how Shopify billing will work.`,
    body: `Pixel Tracker is the first Shopify app we're building at Appnary. The intended focus is pixel configuration from one dashboard.

The planned platform list is Meta, Google Ads, TikTok, Snapchat, Pinterest, X, and LinkedIn. That list describes our intended scope, not a set of verified launch integrations. Each platform still needs an end-to-end test before we can promise its event coverage.

Our current approach uses a Shopify theme app extension. Merchants would activate the app embed in their theme editor and test the configured events. A storefront tag loading does not establish that a completed checkout reaches the advertising platform.

Server-side delivery through Meta Conversions API or TikTok Events API is not a confirmed launch feature. We also haven't verified automatic browser/server deduplication. We'll document those capabilities only after testing them.

Pricing will be specific to each Shopify app, with billing through Shopify. Pixel Tracker's prices and plan limits are not confirmed.

Pixel Tracker is still in development and is not available to install. [Join the waitlist](/#waitlist) for launch updates.`,
  },
  {
    slug: "why-we-built-pixel-tracker-cookieless",
    title: "Why server-side tracking matters for Shopify stores",
    excerpt:
      "Ad blockers and browser restrictions can drop client-side conversion events. Server-side tracking adds another delivery path.",
    category: "Engineering",
    publishedAt: "2026-06-11",
    updatedAt: "2026-09-30",
    author: "The Appnary Team",
    readingMinutes: 5,
    tags: ["Privacy", "Pixel Tracker", "Engineering"],
    tldr: `Browser pixels can lose conversion events to ad blockers and browser restrictions. Meta Conversions API and TikTok Events API provide another delivery path, but they do not remove consent or privacy obligations.`,
    body: `A browser pixel depends on a script running and its request reaching the advertising platform. Ad blockers and browser restrictions can interrupt that path. A backend integration can send a recorded order through a separate server connection.

That separate connection still needs to work. Confirm the event source, supported Shopify events, failed-delivery handling, and the platform's diagnostics before assuming that server tracking improves your reporting.

## Browser and server events need coordination

When both paths report the same purchase, the integration must follow the destination platform's deduplication rules. Check a test order's event identifiers, value, and currency. A browser helper doesn't prove server delivery or deduplication.

## Consent still applies

Server-side delivery does not override customer choices or privacy requirements. Check which data the integration sends and how it handles declined collection. A received event is also not a guarantee that the platform will attribute an order to an ad.

## Pixel Tracker is still in development

Meta CAPI and TikTok Events API delivery are not confirmed Pixel Tracker launch capabilities. We won't describe server delivery as working until the integration is verified. Use an available provider if you need this today, and follow our [server-side tracking guide](/blog/shopify-server-side-tracking-guide) to evaluate its results.`,
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
    slug: "why-shopify-roas-is-inaccurate",
    title: "Why Your Shopify ROAS Is Inaccurate (And How to Fix It)",
    excerpt: `Facebook, Google, and TikTok each report a ROAS number that assumes full credit for the same sale, while browser pixels quietly lose data to ad blockers and iOS tracking prevention. Here is what is actually driving the gap, and how to build one blended number you can trust.`,
    category: "Ad Tracking",
    publishedAt: "2026-07-02",
    updatedAt: "2026-09-30",
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

When a pixel can't set or read a cookie, it can't recognize a returning visitor, so a customer who has bought from you three times gets logged as brand new on their fourth visit. That distorts the new-customer numbers in prospecting campaigns aimed at cold audiences, making them look like they're recruiting fresh buyers when part of that reach is really repeat customers the pixel simply doesn't remember. It also means a real conversion sometimes never gets reported back to the ad platform at all, which the algorithm reads as this ad didn't convert and optimizes away from, even though it worked. Server-side tracking, which sends conversion events from your server instead of relying on the buyer's browser to cooperate, closes a meaningful part of this gap. [This post](/blog/shopify-server-side-tracking-guide) covers how that works for Facebook Conversions API and TikTok Events API specifically, the two networks where server-side tracking is currently available for Shopify merchants.

Not every conversion is worth the same

The third issue is about weighting, not counting. Platforms generally roll click-through and view-through conversions into the same ROAS figure, but they aren't equivalent events. A shopper who clicked an ad and bought within the hour showed clear intent. A shopper who merely saw an ad in their feed and bought three days later through some unrelated path may well have bought anyway, with the ad contributing nothing at all.

View-through conversions are a legitimate signal for brand awareness campaigns, but most default reporting counts them at the same weight as a direct click. Broad prospecting campaigns, the ones with the biggest reach and impression counts, tend to accumulate the most view-through credit, which is exactly why they often report deceptively strong ROAS, while a tightly targeted retargeting campaign converting real buyers with total certainty can look comparatively weak on paper.

What to actually do about it

None of this makes platform ROAS useless. It makes it directional, not literal. Three adjustments make it far more trustworthy.

Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified. If you need tracking today, choose an available integration and verify its events. [Join the waitlist](/#waitlist) for launch updates.

Second, stop treating any single platform's ROAS as a final answer and start reading it as a trend line instead. If Meta's reported ROAS drops from 3.2 to 2.4 week over week, that drop is real information regardless of whether 3.2 was ever fully accurate to begin with. Trend direction survives attribution noise better than any single snapshot does.

Third, build one blended number that becomes your actual ground truth: total ad spend across every channel, divided by total store revenue from Shopify for that same period, using your own order data instead of any platform's self-reported revenue. This number can't double-count a sale, because it only counts revenue once, no matter how many platforms want credit for it. [This post](/blog/calculate-true-roas) walks through the adjustment most merchants skip entirely: backing out returns and refunds, which platform ROAS never accounts for.

Platform-reported ROAS will keep disagreeing with itself and with your bank account, because the platforms have no incentive to fix that and no way to see each other's data anyway. Accepting that up front, and building a blended, server-side-backed number as your real scoreboard, is a more honest way to run ad spend than chasing whichever platform's dashboard currently looks best.`,
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
        a: `No. Pixel Tracker is a prelaunch pixel-configuration app, not a ROAS calculator or attribution dashboard. Use store records and ad spend to do that calculation separately. Its launch tracking coverage and server delivery are not confirmed.`,
      },
    ],
  },
  {
    slug: "facebook-pixel-vs-google-tag",
    title: "Facebook Pixel vs Google Tag: Which Do You Need?",
    excerpt: `Facebook Pixel and the Google Ads tag aren't competing versions of the same tool, they track two different ad platforms. If you're running ads on both, the honest answer is you need both installed.`,
    category: "Ad Tracking",
    publishedAt: "2026-07-07",
    updatedAt: "2026-09-30",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["Facebook Pixel", "Google Ads", "Ad Tracking", "Shopify Ads"],
    body: `If you're running ads on both Facebook/Instagram and Google, you've probably wondered whether you actually need two separate pixels or just one. It's a fair question, since both get called "the pixel" in casual shop talk, as if they were interchangeable. They aren't. The short answer: Facebook Pixel and the Google Ads tag do different jobs for different ad platforms, and if you're spending money on both, you need both installed. Each one feeds data to a separate ad algorithm that has zero visibility into what the other platform is doing.

The Facebook Pixel tracks activity on your store and reports it back to Meta's ad system, which uses that data to decide who sees your Facebook and Instagram ads. When a visitor views a product, adds to cart, or completes checkout, the pixel fires an event telling Meta's algorithm what kind of person just took that action, so it can find more people who look similar. Without the pixel installed, Meta is still running your campaigns, but it's optimizing for clicks and engagement rather than actual purchases, because it has no way to confirm which clicks turned into sales.

The Google Ads conversion tag does the equivalent job for Google's ad network: Search ads, Shopping listings, Display, and YouTube ads bought through Google Ads. When someone clicks one of those ads and later buys, the tag reports the conversion back to Google Ads, which uses it to decide which keywords, product listings, and audiences are worth bidding on again. Worth being precise here: this is the Google Ads conversion tag, not Google Analytics or GA4. Those are separate Google products that measure different things. GA4 tracks your overall site traffic and behavior, while the Ads conversion tag exists specifically to tell the ad platform what converted. Pixel Tracker is a prelaunch pixel-configuration app, not a GA4 setup service; its Google Ads event coverage is still being verified. If you're actually trying to sort out Google Analytics versus other options, that's a different question, covered in [Shopify Analytics vs Google Analytics](/blog/shopify-analytics-vs-google-analytics).

Facebook and Google run separate auctions for separate inventory, using separate signals. A shopper who clicks your Instagram ad and a shopper who searches for your product on Google are, from each platform's point of view, two unconnected events being scored by two unconnected systems. Meta never sees the Google search. Google never sees the Instagram scroll. Installing the Facebook Pixel does nothing for your Google campaigns, and installing the Google tag does nothing for your Facebook campaigns, because neither pixel talks to the other and neither would help the other's optimization even if it could. So for any store running ad budget on both platforms, the honest answer isn't a choice between the two. It's both.

That said, "install both" isn't a blanket rule regardless of what you're doing. If you only advertise on Facebook and Instagram and have no Google Ads campaigns running, there's no urgency to install a Google tag that would just sit there with nothing to report. The rule is tied to where your ad spend actually goes, not to some general best practice of collecting every tag available.

Say you're running Facebook ads and Google Shopping at the same time, but you only ever got around to installing the Facebook Pixel. Your Facebook campaigns are optimizing normally: Meta knows who's converting and adjusts targeting, bids, and creative delivery accordingly. Your Google Shopping campaign, meanwhile, is flying blind. It has no signal about which clicks became sales, so it keeps spending against whatever bidding strategy you set at launch, with no way to learn that a particular search term or product listing is actually driving revenue. You'll still see clicks and impressions in Google Ads, but no reliable read on which of them mattered, which means bidding strategies like Target ROAS or Maximize Conversions don't have the data they need to work. Flip the setup: Google tag installed, no Facebook Pixel, while running ads on both, and it's your Facebook campaign that's now optimizing blind instead. Either way, half your ad spend has a feedback loop and half doesn't, and the half without one tends to get expensive.

If time or budget only allows for setting up one platform this week, install the pixel for whichever platform you're actually spending money on right now. That sounds obvious, but it's common for stores to stall out trying to get both platforms perfectly configured before launching either, and end up with zero tracking on the campaign that's already live. If your ad budget currently lives in Meta Ads Manager, connect the Meta Pixel first. If your spend is in Google Ads instead, prioritize the Google Ads conversion tag. Once the platform you're actively spending on is tracked, add the second one before you turn on that second campaign, not after it's already running unmeasured.

Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified. If you need tracking today, choose an available integration and verify its events. [Join the waitlist](/#waitlist) for launch updates.

Neither pixel is a lesser version of the other, and neither is optional once you're paying for ads on that platform. If your ad spend touches both Facebook and Google, plan on both pixels from day one. If it only touches one right now, install that one immediately and add the second the moment your budget or campaigns expand there.`,
    faqs: [
      {
        q: `Does the Google tag in Pixel Tracker also cover Google Analytics or GA4?`,
        a: `No. Google Ads conversion measurement and GA4 analytics are separate setups. Pixel Tracker is still in development; it is not a GA4 installation service.`,
      },
      {
        q: `If I only run ads on one platform, do I still need both pixels?`,
        a: `No. The need for a pixel is tied to where you're actually spending ad budget. If you only advertise on Facebook and Instagram, there's no reason to install a Google Ads tag that has no campaign to report on, and the reverse is true if you only run Google Ads.`,
      },
      {
        q: `Will running a Facebook Pixel and a Google Ads tag at the same time cause conflicts?`,
        a: `No. They're independent scripts reporting to two different systems, and Shopify handles the injection through its own theme app extensions mechanism. Adding one doesn't interfere with the other or require editing your theme code.`,
      },
      {
        q: `Does Pixel Tracker support server-side tracking for both Facebook and Google?`,
        a: `Pixel Tracker server-side delivery and automatic browser/server deduplication are not confirmed. The app is in development. For an existing integration, verify server-event receipt separately from browser pixel activity.`,
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
    updatedAt: "2026-09-30",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["TikTok Ads", "Shopify", "Pixel Tracking", "Conversion Tracking"],
    body: `TikTok's ad algorithm doesn't know anything about your store until you tell it. Your Meta pixel doesn't share data with TikTok, your Google Ads tag doesn't either, and Snapchat's pixel is a separate signal too. Every ad platform runs its own closed system: it optimizes toward the people most likely to convert, but only based on the conversions it can actually see happening on your store. If you're running TikTok ads without a TikTok pixel installed, the platform is guessing who to target based on general audience signals, not on what actually happens after someone clicks through to your product page. That's the real reason this deserves its own setup, not just a line item you check off after your Meta pixel is already live.

The mechanics aren't complicated once you know what you're doing, but Shopify adds a wrinkle most general TikTok tutorials skip over: getting the code onto your store without hand-editing theme files that break on the next update. This post covers the shorter version, the steps most merchants actually need to get a working pixel live today. The rest of this post is the checklist for verifying the integration and its events.

Step 1 is creating the pixel itself. Log into TikTok Ads Manager, go to Assets, then Events, and set up a new web pixel. TikTok will ask whether you want to install it manually or through a partner integration, and either way you'll come away with a Pixel ID, a string of letters and numbers unique to your account. That ID is the one thing you need before touching your store.

Step 2 is choosing an available Shopify integration. Follow its current setup instructions and confirm checkout support. Pixel Tracker is in development and is not available to install.

Step 3 is confirming the pixel is actually firing, not just installed. Add the TikTok Pixel Helper browser extension, load your storefront, and check that the pixel ID showing up matches the one in Ads Manager. Browse a product page and add something to cart, then watch for standard events like ViewContent and AddToCart to register. If nothing shows up, check a cached page or an ad blocker running in your own test browser before assuming the install itself is broken. If the basics don't turn up the problem, recheck the pixel ID, the theme app embed, and whether an ad blocker is hiding the request.

Step 4 is the purchase check because the pixel already "looks installed": running an actual purchase through checkout and confirming the event lands in TikTok Events Manager with the correct value and currency attached. TikTok's algorithm uses that value to find more people likely to spend a similar amount, so a Purchase event that fires with a zero value or the wrong currency will quietly work against campaigns optimized for value rather than just clicks. Do this before you scale ad spend, not after the numbers start looking strange.

Steps 1 and 2 above are the setup. Pixel Tracker is not available to install. The app in development now is [Vigil](/vigil), and its [waitlist](/vigil#waitlist) is for that scanner, not for a TikTok pixel.

Step 5 is checking server delivery separately if your provider offers it. Follow its deduplication instructions and respect the same consent settings. A pixel that's technically installed but never confirmed against a real purchase is just code sitting on your site, not a working tracking setup. Get the base pixel firing, confirm it against an actual order, and add server-side tracking once you know the campaigns you're running are worth protecting.`,
    faqs: [
      {
        q: `Do I need to edit my Shopify theme code to install the TikTok pixel?`,
        a: `Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified. Its current approach uses a Shopify theme app extension, which requires app embed activation and event testing.`,
      },
      {
        q: `How is this different from the full TikTok Pixel Setup Guide?`,
        a: `This post is the setup checklist. It covers the install path, consent, and how to confirm ViewContent and AddToCart. There isn't a second guide behind it.`,
      },
      {
        q: `Can TikTok still track a sale if the customer uses an ad blocker?`,
        a: `Not reliably through the browser pixel alone, since ad blockers and privacy settings can stop it from firing. TikTok's Events API sends the same event data from your server instead, which is why it's worth adding once your browser pixel is confirmed working. The [server-side tracking guide](/blog/shopify-server-side-tracking-guide) covers how that works.`,
      },
      {
        q: `Can I install Pixel Tracker on my store right now?`,
        a: `Not yet. Pixel Tracker isn't available to install. The current waitlist is for [Vigil](/vigil#waitlist), which scans theme scripts and leaked keys. It does not install a TikTok pixel.`,
      },
      {
        q: `What does Pixel Tracker cost once it's available?`,
        a: `Pixel Tracker's launch prices and plan limits are not confirmed. Check its Shopify listing when available; billing will be through Shopify.`,
      },
    ],
  },
  {
    slug: "track-ad-spend-multiple-platforms",
    title: "How to Track Ad Spend Across Multiple Platforms",
    excerpt: `When ad spend and conversions live in five different ad dashboards, none of them agree, and that's not an accident. Here's a practical, spreadsheet-based way to build one honest number for what your ads are actually doing.`,
    category: "Ad Tracking",
    publishedAt: "2026-07-14",
    updatedAt: "2026-09-30",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["ad tracking", "blended CAC", "multi-channel marketing", "Shopify ads", "pixel tracking"],
    body: `If you run ads on more than one platform, you already know the feeling: five browser tabs open, five different ways of counting a "conversion," and no single number you actually trust. Facebook Ads Manager says one thing, Google Ads says another, and TikTok's dashboard tells a third story entirely. None of them are lying exactly, they're just each grading their own homework.

Each platform attributes conversions using its own window and its own logic, and each platform has an incentive to claim as much credit as possible for a sale. Meta's reported conversions typically use a 7-day click / 1-day view window by default. Google Ads counts a conversion if it falls within its own lookback period. TikTok has its own rules too. A single customer who saw a TikTok ad, clicked a Google ad two days later, and then clicked a Facebook retargeting ad before buying can show up as a "conversion" on all three platforms at once. Add up what each platform claims, and you've overcounted your own customer base without touching a spreadsheet.

This isn't just a theoretical accuracy problem, it changes what a merchant actually decides to do. Store owners scale up campaigns that look profitable on one platform's dashboard and pause ones that look expensive on another, all while comparing numbers that were never meant to sit side by side in the first place. The fix isn't finding a smarter dashboard. It's building a second, boring, platform-agnostic view that sits above all of them.

That view can be as simple as a spreadsheet, and for most small stores it should be. Once a week, at the same time, pull four numbers from each ad platform you're running spend on: the platform name, total spend for the week, reported conversions for the week, and reported revenue for the week. One row per platform per week. Facebook, Google, TikTok, Snapchat, Pinterest, whatever you're actually running, all logged the same way in the same sheet. It takes maybe fifteen minutes if you do it consistently, and it turns five disconnected dashboards into one table you can actually scroll through.

Weekly is the right cadence for most solo and small-team merchants. Daily is too noisy, since ad platforms revise their own numbers for a day or two after the fact, and monthly is too slow to catch a channel drifting off course. Add a fifth column for total store revenue and total orders for the same week, pulled straight from Shopify, so the sheet has both what each platform claims and what actually happened in the business. That combination is what makes the next step possible.

With that data sitting in one place, you can calculate the number that matters more than anything a single ad platform reports: blended customer acquisition cost. Blended CAC is total ad spend across every platform for the period, divided by total new customers acquired store-wide in that same period, using Shopify's own first-time-customer count rather than any platform's attribution claim. Say you spent $4,000 across Facebook, Google, and TikTok combined last month and picked up 160 new customers store-wide. Your blended CAC would be $25. No attribution model, no click windows, no platform grading its own work.

Blended CAC is a more honest sanity check precisely because it doesn't care which platform gets the credit. It's anchored to something that actually happened, a new customer record in your Shopify admin, rather than to a conversion event that three different platforms might each be independently claiming. A platform-reported return that looks strong in isolation can coexist with a store that's barely breaking even once you account for the overlap between platforms. Blended CAC compared against your average order value and margin tells you whether the whole system is working, not whether one dashboard's math looks good on its own. The overlap is the point: one customer can be claimed by every platform that touched the click path.

None of this works, though, if half your platforms aren't reporting real numbers in the first place. This is the part that trips up most merchants running ads on more than one or two channels: they set up a Facebook pixel and a Google Ads tag when they first started running ads, and that's where pixel setup stopped. Six months later they're running TikTok and Pinterest campaigns too, spending real money, but nobody went back and connected pixels for those platforms. The result is a weekly tracker with a blank or unreliable reported-conversions column for exactly the channels that are newest and least understood, which is backwards. You end up with your best data on your oldest, most familiar channel and next to nothing on the ones you actually need visibility into.

Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified. If you need tracking today, choose an available integration and verify its events. [Join the waitlist](/#waitlist) for launch updates.

Choose an app whose confirmed plan limits cover every ad platform you need. Pixel Tracker's launch prices and plan limits are not confirmed. Check its Shopify listing when available; billing will be through Shopify.

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
        a: `No. Pixel Tracker is a prelaunch pixel-configuration app, not a ROAS calculator or attribution dashboard. Use store records and ad spend to do that calculation separately. Its launch tracking coverage and server delivery are not confirmed.`,
      },
    ],
  },
  {
    slug: "shopify-analytics-vs-google-analytics",
    title: "Google Analytics for Shopify: Shopify Analytics vs GA4",
    excerpt: `Shopify Analytics already covers sales, sessions, and conversion rate. See what Google Analytics 4 adds, when you need both, and when native reports are enough.`,
    category: "Analytics",
    publishedAt: "2026-07-17",
    updatedAt: "2026-09-30",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["Shopify Analytics", "Google Analytics", "GA4", "Ecommerce", "Conversion Tracking"],
    tldr: `Shopify Analytics covers sales, sessions, and basic conversion reporting. Add Google Analytics 4 when you need custom event analysis or Google Ads audiences. Cross-device reporting depends on the identifiers you can collect. Many stores use both, but Shopify Analytics is enough for daily reporting if those extra questions don't matter.`,
    body: `Searching for Google Analytics for Shopify? Start with what Shopify Analytics already gives you. Open Shopify admin, click Analytics, and you have sales, sessions, conversion rate, and a funnel showing where visitors drop off. It's there from day one, no setup required. Then decide whether Google Analytics adds an answer you actually need.

Shopify's built-in analytics covers the questions most stores ask daily. The Overview dashboard shows total sales, order count, average order value, and sessions over whatever date range you pick. The conversion funnel breaks visitors into added to cart, reached checkout, and sessions that converted, so you can see at a glance whether the problem is traffic, interest, or checkout friction. Behavior reports show top landing pages and top products by views. Acquisition reports split traffic by channel: direct, search, social, email, paid. You don't need to install a separate analytics tag to open these reports. Order totals and visitor measurement are different, though: Shopify's session reports use cookies and can be affected by customer privacy settings. [Shopify's explanation of session discrepancies](https://help.shopify.com/en/manual/reports-and-analytics/discrepancies/customer-discrepancies) covers why sessions and conversion rates can change when visitors decline consent.

For a lot of stores, especially single-product shops or anyone running a lean catalog, that's the whole picture they need. You can tell if a product page is converting, whether a discount code moved the needle, and which channel is actually driving sales.

Where Shopify's native reports run out of road is anything that requires tracking behavior across visits or building visitors into a defined audience. GA4 lets you set up custom events for things Shopify doesn't track by default: scroll depth, video plays, clicks on a button that isn't tied to a purchase. It can connect activity across devices when you have suitable identity data. That isn't automatic for every visitor: [Google's reporting identity guide](https://support.google.com/analytics/answer/10976610) explains how User-ID, device IDs, and modeling affect the result. Two anonymous visits on different devices aren't guaranteed to become one journey. It also lets you build audiences for remarketing, such as everyone who viewed a product but didn't buy in the last 30 days, and push those audiences into Google Ads. That matters for stores spending real money on paid search or Performance Max campaigns, because GA4's conversion data can feed Google's bidding algorithms more context than a single purchase event, which in theory helps Google spend the budget toward people more likely to buy.

That bidding integration is a different thing from simply having Google's conversion tag installed, and the two get confused constantly. A Google Ads conversion tag just tells Google a purchase happened, which is enough for basic conversion tracking. GA4 is the fuller reporting layer sitting next to it. If you're trying to sort out which of these you actually need for your ad accounts, [this comparison of pixel tracking versus tag tracking](/blog/facebook-pixel-vs-google-tag) walks through the distinction in more detail.

To connect GA4, create a property and web data stream, then connect the property through Shopify's Google & YouTube app. [Shopify's GA4 setup guide](https://help.shopify.com/en/manual/reports-and-analytics/google-analytics/google-analytics-setup) confirms that ecommerce events are collected automatically after setup. You don't need Google Tag Manager just to start collecting those standard events. Additional custom behavior tracking is a separate job.

After connecting the property, verify the destination and test the events you expect. Check that a product view, cart addition, and test purchase reach the intended property before relying on the reports. [Google's Shopify tag setup instructions](https://support.google.com/analytics/answer/12183125) cover the connection and warn about duplicate tracking. Keep the Google Ads conversion action separate from the GA4 property: receiving an event in Analytics doesn't prove that the Ads conversion action is configured correctly.

Consent affects both reporting systems. Shopify's session measurement and GA4's visitor data can have gaps when privacy settings limit collection. Review the store's customer privacy configuration and the tags you use, rather than assuming native reports are exempt. When comparing the systems, use the same dates, time zone, and metric definition. Order revenue, sessions, and ad-attributed purchases answer different questions; their totals needn't match.

So who actually needs GA4 on a Shopify store? Stores running meaningful paid ad spend through Google Ads, especially anything beyond simple search campaigns, tend to benefit from the deeper conversion data feeding back into bidding. Stores with more than one significant marketing channel, where figuring out which channel deserves credit for a sale isn't obvious from last-click alone, get more out of GA4's audience and attribution tools than Shopify's simpler acquisition report. And any store that wants to track specific on-site behavior, like whether people watch a product video before buying or how far they scroll on a landing page, needs GA4 or something like it, because Shopify's dashboard doesn't track events at that level of detail.

On the other side, if your store is early-stage, running mostly organic or social traffic, or managed by one person without a dedicated marketing hire, Shopify's native analytics probably answers every question you're actually asking day to day. Installing GA4 because a blog post or a Shopify Partner told you to, without a specific question it's meant to answer, is how a lot of stores end up with a GA4 property nobody has opened in six months.

The practical rule: add GA4 when you have a question Shopify's dashboard genuinely can't answer, not as a default checkbox. If that day comes, budget time to verify the automatic ecommerce events and your privacy settings before using the numbers to make decisions.`,
    faqs: [
      { q: `Does Shopify's analytics dashboard cost extra?`, a: `No. It's built into every Shopify plan and works immediately, with no tracking code or setup required.` },
      { q: `Can I use Shopify Analytics and Google Analytics 4 at the same time?`, a: `Yes. They run independently, so adding GA4 doesn't replace or interfere with Shopify's native reports.` },
      { q: `Is Google Analytics 4 free?`, a: `Yes, GA4 itself has no cost. Setup and verification still take time, especially for custom events and your customer privacy configuration.` },
      { q: `Does GA4 track sales as accurately as Shopify?`, a: `They can differ. Order revenue and visitor analytics are different measurements. GA4 ecommerce events depend on the integration, while session-based reports in either system can be affected by privacy settings. Compare the same dates and metric definitions before investigating a discrepancy.` },
      { q: `Do I need GA4 if I mainly run Facebook or TikTok ads instead of Google Ads?`, a: `Not necessarily. GA4's biggest advantage is feeding richer data back into Google Ads bidding, so if most of your ad spend is elsewhere, Shopify's native reports may already answer the questions you have.` },
    ],
  },
  {
    slug: "shopify-server-side-tracking-guide",
    title: "The Complete Guide to Shopify Server-Side Tracking",
    excerpt: `How browser and server delivery differ, what to check for a test order, and why consent and deduplication still matter.`,
    category: "Ad Tracking",
    publishedAt: "2026-07-21",
    updatedAt: "2026-09-30",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["server-side tracking", "Conversions API", "TikTok Events API", "Shopify ads", "ad attribution"],
    body: `If your ad platform's reported conversions never quite match your actual Shopify orders, you've probably chalked it up to "attribution is just messy." Some of that is true. But part of that gap isn't measurement fuzziness — it's data your pixel simply never had the chance to send.

A standard tracking pixel, the kind that fires from a snippet of JavaScript in the visitor's browser, depends on that browser cooperating the whole way through. Ad blockers strip it outright. Safari's Intelligent Tracking Prevention and Firefox's Enhanced Tracking Protection throttle or delete the cookies it relies on. A dropped mobile connection can keep the request from ever reaching Meta or TikTok, even though the checkout finished a second earlier. None of this shows up as an error anywhere in your Shopify admin. The order still completes, the customer still gets a confirmation email, and the sale is still real. The only thing missing is the ad platform's record that it happened.

That's the part worth sitting with, because a missed pixel event isn't a rounding error you can shrug off. Ad platforms use every conversion they can see to decide who to show your ads to next. When a real purchase never reaches Facebook or TikTok, the algorithm doesn't know it happened, so it keeps optimizing toward whoever it could track, which skews toward people with fewer ad blockers and more cooperative browsers, not necessarily whoever was most likely to buy. Do that for a few months and your targeting drifts quietly away from your actual best customers, your reported cost per acquisition looks worse than it really is, and it gets harder to justify the spend on whatever's actually working.

It gets messier if you advertise on more than one platform at once. Say you run both Meta and Google Ads. If Meta's pixel happens to undercount conversions less than Google's does, maybe because more of your Meta traffic comes through in-app browsers that behave differently than Safari, your dashboards will show Meta outperforming Google even when the real return is closer, or reversed. You end up shifting budget toward whichever platform measures itself best, not whichever platform is actually selling the most product. For a solo merchant running a lean ad budget on a couple of channels, that's not an edge case. It's the default state of tracking once any part of your setup relies purely on the browser to report back.

A correctly configured server integration can address some delivery gaps by sending the conversion event a second way: directly from your store's server to the ad platform's API, rather than relying only on the customer's browser to deliver it. The browser pixel still fires first, as it always has. If it's blocked, delayed, or dropped, a server-side copy can provide another delivery path. The integration must deduplicate overlapping events and monitor failed requests. It isn't a replacement for your pixel. It's a second delivery route for the same information, one that ad blockers and browser privacy settings can't touch because it never passes through the visitor's browser at all.

That's the short version of the mechanics. Deduplication, purchase details, and the split between a receipt and an attributed conversion are covered in the sections above.

Timing is part of the case too. Browsers have spent years tightening what third-party scripts are allowed to do, and none of them have reversed course. Ad platforms have noticed the same signal loss merchants have, which is why Meta and TikTok both built server-side APIs in the first place and now reward accounts that use them with better event matching. This isn't a trend you can wait out until it blows over. Browsers are only going to get more restrictive from here, and a server-side path needs monitoring before you can rely on its data. Delivery alone does not establish attribution.

Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified. If you need tracking today, choose an available integration and verify its events. [Join the waitlist](/#waitlist) for launch updates.

Pixel Tracker's launch prices and plan limits are not confirmed. Billing will be through Shopify.

Server-side tracking and privacy-conscious tracking aren't opposites, even though the phrase can sound like it's about squeezing more data out of people who tried to opt out. It's really about not losing the data your own customers already generated by buying something from you. We get into that distinction more in [our post on privacy-first tracking for Shopify stores](/blog/privacy-first-tracking-shopify). The practical takeaway here is simpler: if your pixel is the only thing telling an ad platform what converted, you're leaking signal quietly, every day, in a way that's fixable without touching your theme.`,
    faqs: [
      { q: `What's the actual difference between a pixel and server-side tracking?`, a: `A pixel sends events from a browser. A server integration sends them from a backend through the platform's API. Check both paths separately and verify duplicate handling when they report the same purchase.` },
      { q: `Does Pixel Tracker support server-side tracking for Google Ads, Snapchat, Pinterest, X, or LinkedIn?`, a: `Pixel Tracker server-side delivery and automatic browser/server deduplication are not confirmed. The app is in development. For an existing integration, verify server-event receipt separately from browser pixel activity.` },
      { q: `Do I need a developer or theme access to set this up?`, a: `That depends on the provider. A managed integration may offer a guided Shopify setup; a custom server integration needs technical implementation. Pixel Tracker is not available to install yet.` },
      { q: `How much does Pixel Tracker cost?`, a: `Pixel Tracker's launch prices and plan limits are not confirmed. Check its Shopify listing when available; billing will be through Shopify.` },
      { q: `Can I install Pixel Tracker today?`, a: `Not yet. Pixel Tracker is pre-launch and currently taking signups on the waitlist. You can join the waitlist to get access when it opens.` },
    ],
  },
  {
    slug: "calculate-true-roas",
    title: "How to Measure True ROAS on Shopify (After Returns)",
    excerpt: `Ad platforms lock in ROAS from checkout revenue and never subtract returns. Here's net-of-returns ROAS with a worked example of a campaign that looks fine until refunds land.`,
    category: "Analytics",
    publishedAt: "2026-07-24",
    updatedAt: "2026-09-30",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["ROAS", "Returns & Refunds", "Ad Attribution", "Analytics"],
    body: `A campaign can look great the day you check it and be quietly underwater three weeks later, and the ad platform's dashboard will never tell you. This isn't an edge case. It happens whenever a meaningful share of the orders a campaign generated later get returned, and it happens most often in apparel and footwear, where fit and sizing alone drive a lot of returns that have nothing to do with the ad or the product being bad. The number that made you raise budget in week one can be the same number that was already wrong, you just didn't know it yet.

ROAS is ad spend measured against attributed revenue. This post assumes you already know that formula and focuses on one specific way it misleads you. Gross revenue at the moment of purchase is not the same number as what you actually keep once returns and refunds work their way through the following weeks.

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

None of this makes gross ROAS useless. It's still a fast signal for whether a campaign is in the right neighborhood. But if you sell anything with a meaningful return rate, treat what your ad platform shows you as provisional, not final, until enough time has passed for the returns to show up.`,
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
        q: `Can an app calculate net-of-returns ROAS for me automatically?`,
        a: `Not from the ad platform's report. Pull refunds from Shopify and subtract them from the attributed revenue yourself.`,
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
    updatedAt: "2026-09-30",
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

Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified. If you need tracking today, choose an available integration and verify its events. [Join the waitlist](/#waitlist) for launch updates.

Don't install more pixels than you're actually using. It's common for a store to accumulate a Facebook pixel, a Pinterest tag, a Snap pixel, and a LinkedIn tag over the years, long after the campaigns that needed them have ended. Every pixel still installed is still collecting and sending visitor data somewhere, whether or not anyone is looking at the results. If you're not actively running ads on a platform, there's no upside to keeping its pixel live on your store; it's just more data leaving your site for no benefit to you.

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
        a: `Pixel Tracker server-side delivery and automatic browser/server deduplication are not confirmed. The app is in development. For an existing integration, verify server-event receipt separately from browser pixel activity.`,
      },
    ],
  },
  {
    slug: "multi-platform-ad-tracking-audit",
    title: "How to audit your ad tracking across platforms in one afternoon",
    excerpt: `Most merchants check Facebook, then Google, then TikTok. That wastes hours and misses the gaps. Here's a one-afternoon audit routine.`,
    category: "Strategy",
    publishedAt: "2026-08-02",
    updatedAt: "2026-09-30",
    author: "The Appnary Team",
    readingMinutes: 6,
    tags: ["Strategy", "Multi-platform", "Analytics"],
    body: `Most Shopify merchants audit their ad tracking the same way: open Facebook Events Manager, check that Purchase events are firing, feel reassured, then open Google Ads and repeat the process, then maybe get to TikTok if there's time left. Each check looks fine in isolation. What that approach misses is everything that only shows up when you look at the platforms together: the same Purchase event firing twice through two different apps, a pixel that loads but stopped receiving real conversion data three weeks ago, or a platform you're not even spending on anymore that's still collecting visitor data for no reason. A platform-by-platform audit catches obvious breakage. It doesn't catch overlap, and overlap is where the expensive mistakes live.

The reason this happens is structural, not a matter of carelessness. Each ad platform's help center tells you how to check that platform's pixel, using that platform's tools, inside that platform's dashboard. Nobody's documentation tells you to cross-reference Facebook's reported purchases against TikTok's reported purchases against your actual Shopify order count for the same day. So merchants don't do it, not because it's hard, but because no single source suggests it as a step. The result is a blind spot specific to running multiple platforms at once: each dashboard can report clean data individually while the combined picture is quietly wrong, whether that's double-counted conversions inflating your perceived return on ad spend, or a gap where no platform is reporting a sale that Shopify definitely recorded.

An audit that tries to cover all seven major platforms (Meta, Google Ads, TikTok, Snapchat, Pinterest, X, and LinkedIn) in an afternoon usually means a shallow pass on all of them instead of a real check on the ones that matter. Start with your actual ad spend, not your list of installed pixels. Pull up your ad accounts and see where the last 30 days of budget actually went. Most solo merchants find that two platforms account for nearly all of it, with one or two more pixels installed from a campaign that ended months ago and never got removed. Audit the platforms you're spending on thoroughly. For anything installed but not currently running ads, a five-minute check that the pixel isn't broken is enough, or consider removing it if there's no plan to use it again soon. Depth on two platforms beats a shallow pass on seven.

Once you know which platforms to focus on, the first real check is whether the pixel loads at all. Each major platform has a free browser extension built for exactly this: Meta Pixel Helper for Facebook and Instagram ads, Google's Tag Assistant for the Google Ads conversion tag, and TikTok Pixel Helper for TikTok. Install the one for each platform you're auditing, load your storefront in a normal browser tab (not incognito, since some ad blockers behave differently there), and click through a real session: homepage, a product page, add to cart, and if you're comfortable doing it, checkout. Each extension shows which pixel ID fired and which events it saw. This tells you the pixel is present and technically working. It does not tell you whether the event data it's sending is complete or correct, which is a separate check covered next. A green checkmark in Pixel Helper is a starting point, not a finish line.

The next step moves out of your browser and into each platform's own event manager: Meta's Events Manager, Google Ads' conversion diagnostics, TikTok's Events Manager. This is where a lot of audits stop too early, because PageView is almost always firing (it's the simplest event, and most installs get it right by default), so merchants see PageView data flowing in and assume tracking is healthy. Purchase is the event that actually matters for measuring return on ad spend, and it's also the one most likely to be broken, since it depends on the checkout or thank-you page firing correctly, with the right value and currency attached. In each platform's dashboard, look specifically at Purchase event volume over the last 7 to 14 days and compare it, roughly, against your actual Shopify order count for the same period. If a platform's Purchase count is well below your real order count, something upstream is dropping the event: a checkout page that changed, a consent banner blocking the script before it fires, or an app that stopped working after a theme update. If you'd rather not go dashboard by dashboard, the [pixel health check tool](/tools/pixel-health-check) runs a storefront scan alongside a short setup checklist and flags a lot of these gaps in a couple of minutes, though it's a starting signal, not a replacement for checking each dashboard directly.

Purchase events being too low is one failure mode. The other, less obvious one is Purchase events firing too many times for the same order, which is common on stores that have accumulated tracking apps over time. It's easy to end up with Shopify's native Facebook & Instagram sales channel sending a Purchase event, a separate pixel app also sending a Purchase event, and a theme customization from two years ago still injecting a third copy, all for the same single order. Each platform then reports that one sale as two or three conversions, which inflates your apparent conversion rate and return on ad spend, and can also throw off that platform's own optimization, since its algorithm is learning from inflated signals. The way to catch this: open your browser's network tab (or use each platform's Pixel Helper, which usually flags duplicate pixel IDs) during a real checkout, and count how many times a Purchase or Complete Payment request fires to the same platform. More than one is a duplicate, and the fix is almost always removing one of the redundant integrations, not adding deduplication logic on top of both. If Facebook is one of the platforms showing this, count Purchase requests to the same pixel ID during one checkout. If your store has changed tracking apps more than once, this is the single highest-value thing to check in an afternoon audit, because it directly inflates the numbers you're using to make budget decisions.

Pixel Tracker is in development and not available to install. A saved G- measurement ID can send a GA4 purchase on paid orders. Other platform coverage and server delivery are still being verified. If you need tracking today, choose an available integration and verify its events. [Join the waitlist](/#waitlist) for launch updates.

An afternoon is enough time to run all of the above on two or three platforms, but not enough time to fix everything you find. If the audit turns up more than one issue, which is common, it helps to prioritize. First, fix duplicate Purchase events, since they're actively distorting the numbers you're using right now to decide where to spend, and the fix is usually just removing a redundant app or theme snippet. Second, fix any platform where Purchase events are firing well below your actual order count, since that's a direct measurement gap on money you're already spending on ads. Third, if Meta or TikTok are among your main platforms and you're not on server-side tracking yet, that's the next highest-leverage fix, since it recovers conversions that ad blockers and browser restrictions are otherwise dropping silently. Everything else, like removing an unused pixel from a platform you no longer advertise on, or double-checking event values match your actual order totals, is worth doing but can wait for a slower week.

None of this requires new tools or a rebuilt tracking stack to get through in one sitting. It requires actually looking at two or three platforms together instead of one at a time, and being honest about what the numbers say when you compare them to your real Shopify orders. Most merchants who run this audit find at least one issue in the first hour. That's usually the point of doing it.`,
  },
];
