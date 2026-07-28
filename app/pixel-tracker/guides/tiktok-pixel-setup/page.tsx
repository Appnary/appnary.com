import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";

export const metadata: Metadata = {
  title: "TikTok Pixel Setup Guide for Shopify (2026)",
  description:
    "A complete walkthrough for setting up the TikTok Pixel on Shopify: creating the pixel, standard events, the Events API, and verifying it with Pixel Helper.",
  openGraph: {
    title: "TikTok Pixel Setup Guide for Shopify (2026)",
    description:
      "A complete walkthrough for setting up the TikTok Pixel on Shopify: creating the pixel, standard events, the Events API, and verifying it with Pixel Helper.",
    url: "https://appnary.com/pixel-tracker/guides/tiktok-pixel-setup",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const intro = [
  `If you're spending money on TikTok ads for a Shopify store, the TikTok Pixel isn't a nice-to-have. TikTok's ad system decides who to show your ads to based on the events the pixel reports back, things like product views, add-to-carts, and completed purchases. Without that signal, TikTok's bidding is optimizing blind. With it, TikTok can actually find people who resemble your past buyers instead of just people who tend to click ads.`,
  `This guide covers the full setup: creating the pixel in TikTok Ads Manager, connecting it to your store, turning on standard events, adding the TikTok Events API for server-side reliability, and verifying everything with TikTok Pixel Helper before you trust it with ad spend. If you just want the fast version, there's a [quicker 5-step walkthrough](/pixel-tracker/tiktok-pixel) that skips the explanations. This version is for when you want to understand what each step actually does, and why TikTok's setup has a few quirks that Google Ads and Meta don't.`,
  `We'll also get into the two mistakes that cause the most damage to TikTok campaign performance without ever throwing an error: purchase events that fire but carry the wrong data, and pixel ID mixups between multiple TikTok ad accounts. Both are common, and both take a few minutes to fix once you know what to check.`,
];

const sections = [
  {
    heading: "What the TikTok Pixel Tracks, and Why TikTok Ads Depend On It",
    paragraphs: [
      `The TikTok Pixel is a snippet of tracking code that reports standard events back to TikTok as visitors move through your store: PageView, ViewContent, AddToCart, InitiateCheckout, AddPaymentInfo, PlaceAnOrder, and CompletePayment. Each event carries parameters, product ID, value, currency, so TikTok knows not just that something happened, but what it was worth. The pixel also captures a click identifier, ttclid, that ties a specific ad click to whatever that visitor does next on your site, which is how TikTok connects an impression to a sale days later.`,
      `TikTok ads run on the same basic model as Meta: an automated bidding system that needs a steady stream of accurately valued conversion events to find more people likely to buy. The algorithm doesn't know your product is good, it knows that people who looked a certain way on TikTok ended up completing a payment on your site, and it looks for more people who look like that. Feed it thin or wrong data and it optimizes toward the wrong audience, or gets stuck in the learning phase indefinitely. This is arguably more true for TikTok than for search-based platforms like Google Ads, where intent signals like search terms do some of the targeting work before the pixel even gets involved. On TikTok, the pixel is carrying more of the weight.`,
      `None of this requires editing your Shopify theme by hand. [Pixel Tracker](/pixel-tracker) adds the TikTok Pixel through a Shopify ScriptTag, so it loads across your storefront automatically once it's connected, but the mechanics of what the pixel tracks and how TikTok uses it are the same no matter what tool installs it.`,
    ],
  },
  {
    heading: "The TikTok Events API: Why the Browser Pixel Alone Isn't Enough",
    paragraphs: [
      `The pixel described above is a client-side pixel: JavaScript that runs in the visitor's browser and sends events straight from that browser to TikTok. That works fine in a normal desktop browser tab, and reasonably well in Safari or Chrome on mobile. It works less reliably inside TikTok's own in-app browser, which is where a large portion of TikTok ad clicks actually land.`,
      `When someone taps an ad inside the TikTok app, the link usually opens in TikTok's built-in webview instead of the phone's default browser. That in-app browser behaves differently from Safari or Chrome: people frequently swipe back to the TikTok feed mid-checkout to keep scrolling, the webview can get backgrounded or closed by the OS before a page finishes loading, and stricter mobile privacy settings can interfere with third-party scripts. Any of those can happen after a customer has already paid, meaning the sale is real but the pixel's CompletePayment call never gets a chance to fire. Google Ads and desktop-heavy Meta traffic don't have this exact problem at the same scale, since more of that traffic opens in an actual browser rather than an app's embedded webview.`,
      `The TikTok Events API fixes this by sending the same events from your store's backend directly to TikTok, server to server, independent of whatever happens in the visitor's browser. So if the in-app browser closes before the client-side pixel fires, the Events API call still goes through. Pixel Tracker supports the TikTok Events API alongside Facebook's Conversions API, and the [server-side tracking guide](/pixel-tracker/guides/server-side-tracking) covers how event deduplication between the browser pixel and the Events API works, so the same purchase doesn't get counted twice.`,
    ],
  },
];

const steps = [
  {
    title: "Create a TikTok Pixel in TikTok Ads Manager",
    body: `In TikTok Ads Manager, go to Assets > Events, and choose to create a web pixel. Select the manual setup method, give the pixel a name you'll recognize later, something like "Store Name Website" rather than the default, and save it. TikTok generates a unique Pixel ID as soon as it's created. If your business runs more than one TikTok ad account, make a note of which account and Business Center this specific pixel belongs to before moving on, since that detail matters later.`,
    screenshotCaption: "TikTok Ads Manager's Assets > Events screen, showing the option to create a new web pixel and name it.",
  },
  {
    title: "Copy the Pixel ID and generate an Events API access token",
    body: `Open the pixel you just created and copy its Pixel ID, a long alphanumeric string listed near the top of the pixel's management page. While you're there, go to the pixel's Events API tab and generate an access token. You'll need both values in the next steps: the Pixel ID connects the browser pixel, and the access token authorizes the server-side Events API connection. Treat the access token like a password. Anyone with it can send events into your ad account's data.`,
    screenshotCaption: "TikTok pixel management page showing the Pixel ID field and the Events API tab with a Generate Token button.",
  },
  {
    title: "Add the TikTok pixel to Pixel Tracker",
    body: `In your Shopify admin, open Pixel Tracker, go to Pixels, and add a new TikTok pixel. Paste in the Pixel ID from step 2 and save. Pixel Tracker injects the base pixel script across your storefront through a Shopify ScriptTag, so it's live on every page without touching theme.liquid or any template file.`,
    screenshotCaption: "Pixel Tracker's Add Pixel screen with TikTok selected and a Pixel ID field.",
  },
  {
    title: "Turn on the standard commerce events",
    body: `In the pixel's event settings inside Pixel Tracker, confirm that ViewContent, AddToCart, InitiateCheckout, AddPaymentInfo, PlaceAnOrder, and CompletePayment are all toggled on and mapped to the matching actions in your store. Pay particular attention to CompletePayment. It's the event TikTok uses to attribute revenue and run value-based optimization, and it needs to carry an actual order value and currency, not just fire as a blank signal. We'll come back to why this specific event trips people up.`,
    screenshotCaption: "Pixel Tracker's event mapping screen for the TikTok pixel, with standard events toggled on.",
  },
  {
    title: "Enable the TikTok Events API",
    body: `On the same pixel, switch on the Events API and paste in the access token from step 2. This runs a server-side connection in parallel with the browser pixel, so events reach TikTok directly from Shopify's backend even when a visitor's in-app browser closes before the client-side script fires. It's the single biggest reliability upgrade you can make to TikTok tracking, and it takes about as long as pasting in a token.`,
    screenshotCaption: "Pixel Tracker's TikTok Events API toggle with an access token field.",
  },
  {
    title: "Verify everything with TikTok Pixel Helper",
    body: `Install the TikTok Pixel Helper extension in Chrome, then open your store in a normal desktop browser tab, not inside the TikTok app. Click through a product page, add something to cart, start checkout, and place a real or test order. The Pixel Helper icon shows a running count of events as they fire, and clicking it lists each event with its parameters. Confirm CompletePayment appears with a value and currency that match the order, and that there are no errors flagged next to any event.`,
    screenshotCaption: "TikTok Pixel Helper's popup panel listing fired events including CompletePayment with value and currency parameters.",
  },
  {
    title: "Assign the pixel to your campaign, on the right ad account",
    body: `When you build or edit a TikTok ad campaign, the ad group's tracking section lets you pick which pixel to use and which event to optimize toward, usually CompletePayment. Before you save, double check that the pixel you selected actually belongs to the ad account and Business Center you're running the campaign from. If your store or agency manages more than one TikTok ad account, it's easy to pick an old test pixel or a different client's pixel by mistake, which quietly splits your conversion data across accounts TikTok can't merge back together.`,
    screenshotCaption: "TikTok ad group setup screen showing the pixel and optimization event selectors.",
  },
];

const closingSections = [
  {
    heading: "Two Mistakes That Quietly Wreck TikTok Ad Performance",
    paragraphs: [
      `The first is a CompletePayment event that fires but carries bad or missing data. It's easy to test a pixel by placing one order, seeing the event count go up in TikTok Ads Manager's overview, and assuming everything works. But TikTok's bidding needs the value and currency attached to that event to run value-based optimization or report accurate ROAS. A CompletePayment that fires without an order value, or that double-counts a refunded order as a completed sale, feeds TikTok's algorithm bad information it then optimizes against for weeks.`,
      `The second is pixel ID mixups across multiple TikTok ad accounts. This shows up most with agencies managing several client accounts, or merchants who created a personal ad account to test campaigns before setting up a proper Business Center. Each account can have its own pixel, and it's easy to paste the wrong Pixel ID into Pixel Tracker, or assign a live campaign to a pixel from a different account. When that happens, conversion data splits across two pixels TikTok treats as unrelated, and neither one gets enough volume to leave the learning phase.`,
      `Both mistakes are invisible from inside TikTok Ads Manager, which reports normal-looking numbers while the actual optimization signal underneath is broken. If you're still weighing which pixel tool to use for your store, [see how the options compare](/compare) before you commit, since switching pixels later means TikTok's algorithm has to relearn your audience from scratch.`,
    ],
  },
  {
    heading: "Where TikTok Fits Into Your Broader Tracking Setup",
    paragraphs: [
      `TikTok is rarely the only platform a Shopify store advertises on, and Pixel Tracker isn't built around just one pixel. It connects TikTok alongside Facebook and Meta, Google Ads' conversion tag, Snapchat, Pinterest, X, and LinkedIn from the same Shopify dashboard, so adding a second ad platform later doesn't mean installing a second tracking app. The [guides hub](/pixel-tracker/guides) has a similar walkthrough for each one.`,
      `Pixel Tracker hasn't launched on the Shopify App Store yet. There's no free trial, and access opens through the [waitlist](/#waitlist) rather than an install button once it's live. If you need something shorter to send to a teammate or a VA in the meantime, the [companion blog post](/blog/tiktok-pixel-setup-shopify) covers this same setup in about a third of the length.`,
    ],
  },
];

const faqs = [
  {
    q: "Do I need to edit my Shopify theme to install the TikTok Pixel?",
    a: "No. Pixel Tracker adds the TikTok Pixel through a Shopify ScriptTag, so it loads across your storefront automatically without opening theme.liquid or any template file.",
  },
  {
    q: "What's the difference between PlaceAnOrder and CompletePayment?",
    a: "PlaceAnOrder fires when a customer submits an order. CompletePayment fires once payment is actually confirmed. TikTok generally recommends optimizing campaigns toward CompletePayment where volume allows, since it reflects a paid sale with a real value attached, rather than an order attempt that could still fail at checkout.",
  },
  {
    q: "If my browser pixel already fires correctly, do I still need the Events API?",
    a: "Yes, mainly because of TikTok's in-app browser. A meaningful share of TikTok ad clicks open inside the TikTok app's own webview rather than Safari or Chrome, and that in-app browser is more likely to close or get interrupted before a purchase event's JavaScript finishes running. The Events API sends the same event from your store's backend instead, so it still gets reported even when the in-app browser drops it.",
  },
  {
    q: "How long does a new TikTok pixel take to start optimizing campaigns well?",
    a: "TikTok doesn't publish a fixed number, but pixels generally need a consistent run of accurately valued conversion events before campaigns leave the learning phase. Splitting that data across multiple pixels, by mixing up ad accounts, is one of the more common reasons a pixel never seems to get past it.",
  },
  {
    q: "I manage multiple TikTok ad accounts. What should I double check?",
    a: "Confirm that the Pixel ID entered in Pixel Tracker matches the ad account you're actually running campaigns from, and check that any campaign's tracking settings point to that same pixel. It's easy to paste in an ID from a different account or an old test pixel, which splits your conversion data without throwing any error.",
  },
  {
    q: "Is Pixel Tracker live on the Shopify App Store?",
    a: "Not yet. It's in pre-launch, there's no free trial, and the way to get access once it opens is to join the waitlist.",
  },
];

const relatedLinks = [
  { label: "Quick TikTok Pixel Setup (5 Steps)", href: "/pixel-tracker/tiktok-pixel" },
  { label: "Server-Side Tracking with the Events API & CAPI", href: "/pixel-tracker/guides/server-side-tracking" },
  { label: "All Setup Guides", href: "/pixel-tracker/guides" },
  { label: "Compare Pixel Tracker to Other Apps", href: "/compare" },
  { label: "Pixel Tracker Product Overview", href: "/pixel-tracker" },
];

export default function TikTokPixelSetupGuidePage() {
  return (
    <GuideArticle
      slug="tiktok-pixel-setup"
      badge="Setup Guide"
      h1="TikTok Pixel Setup Guide for Shopify"
      tldr="Create a TikTok Pixel in TikTok Ads Manager, connect it to your Shopify store through Pixel Tracker, and turn on the TikTok Events API as a server-side backup, since a large share of TikTok's ad traffic runs through an in-app browser that quietly drops client-side pixel events."
      intro={intro}
      sections={sections}
      steps={steps}
      closingSections={closingSections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
