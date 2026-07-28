import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";

export const metadata: Metadata = {
  title: "How to Set Up the Meta Pixel on Shopify: Complete Guide",
  description:
    "A complete walkthrough for installing the Meta Pixel on Shopify correctly: standard events, Conversions API, domain checks, and how to verify it fires.",
  openGraph: {
    title: "How to Set Up the Meta Pixel on Shopify: Complete Guide",
    description:
      "A complete walkthrough for installing the Meta Pixel on Shopify correctly: standard events, Conversions API, domain checks, and how to verify it fires.",
    url: "https://appnary.com/pixel-tracker/guides/facebook-pixel-setup",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const intro = [
  `If you run ads for a Shopify store, the Meta Pixel is not optional. It is the thing that tells Facebook and Instagram which of your ads led to a purchase, which of your visitors are worth showing more ads to, and which ones are not. Get it wrong and you are effectively paying to acquire customers Meta cannot verify, while its ad delivery system optimizes toward the wrong audience without you knowing it.`,
  `This guide is the long version. If you just want the fast path, there is a five-step walkthrough at [Meta Pixel setup](/pixel-tracker/meta-pixel) that gets a basic pixel live in a few minutes. What follows here goes further: what the pixel actually measures, which events matter and why, why a pixel installed the ordinary way has been losing accuracy for years, and how to set one up through Pixel Tracker with server-side tracking included so the data holds up.`,
  `None of this requires touching your theme's code. Every step below happens inside a dashboard.`,
];

const sections = [
  {
    heading: "What the Meta Pixel actually measures",
    paragraphs: [
      `The Meta Pixel is a snippet of tracking code that reports visitor activity back to Meta's ad platform: what pages someone viewed, what they added to cart, whether they checked out, and what they paid. Meta uses that data for two things. First, measurement: attributing a sale back to the ad that probably caused it, so you know which campaigns are working and which are burning budget. Second, optimization: feeding your ad account a stream of "here is what a customer looks like" so its delivery algorithm can find more people who resemble them and stop spending on people who do not.`,
      `Without the pixel, none of that works. Meta can still show your ads, but it has no idea whether anyone bought anything afterward, so it has nothing to optimize toward besides clicks, which is a weak stand-in for revenue.`,
    ],
  },
  {
    heading: "The standard events your store should be sending",
    paragraphs: [
      `Meta groups pixel activity into standard events, a fixed vocabulary the ad platform understands. The ones that matter for a Shopify store, roughly in funnel order, are PageView, which fires on every page load and is the baseline signal; ViewContent, which fires on a product page and tells Meta what someone looked at; AddToCart, which signals intent and gets used heavily for retargeting; InitiateCheckout, which fires when checkout starts; AddPaymentInfo, which fires once payment details are entered; and Purchase, which fires on order confirmation and carries the value and currency Meta uses to calculate return on ad spend.`,
      `A pixel that only fires PageView is close to useless for running ads. Meta needs the ecommerce-specific events, especially Purchase, to know what a conversion is actually worth. This is also why wiring events into a theme by hand is failure-prone: it is easy to get PageView working and quietly miss AddToCart or Purchase because they live on different templates entirely.`,
    ],
  },
  {
    heading: "Why a browser-only pixel stopped being enough",
    paragraphs: [
      `For years, a pixel that lived entirely in the browser was enough. That stopped being true around 2021, when Apple's iOS 14.5 App Tracking Transparency update let iPhone users opt out of cross-app tracking, and most of them did. Safari's Intelligent Tracking Prevention independently cut the lifespan of third-party cookies, and ad blockers common in Chrome and Firefox began blocking Meta's pixel domain outright. None of this is a Shopify-specific problem. It is a change to how browsers and mobile operating systems treat tracking scripts industrywide.`,
      `The practical result is that a purchase can happen while the pixel never reports it, because the buyer's browser blocked it or the cookie expired before checkout. The sale is real and the ad spend is real, but the attribution data feeding Meta's algorithm has a gap in it. Meta's fix is the Conversions API, which sends the same event from your server instead of, or alongside, the browser, so it does not depend on cookies or scripts loading at all. The [server-side tracking guide](/pixel-tracker/guides/server-side-tracking) covers Conversions API in depth; the short version is that it closes exactly this gap, which is why Pixel Tracker treats enabling it as a single toggle rather than a separate project.`,
    ],
  },
];

const steps = [
  {
    title: "Find your Meta Pixel ID",
    body: `Open Meta Events Manager at business.facebook.com/events_manager and select the pixel tied to your ad account, or create one if you do not have one yet. Copy the numeric Pixel ID, usually 15 to 16 digits, listed under the pixel's name. If you run ads for more than one store or brand from the same Business Manager, double check you are copying the ID for the right pixel. Grabbing the wrong one is one of the more common mistakes covered further down.`,
    screenshotCaption: "Meta Events Manager showing the Pixel ID listed under the pixel's name.",
  },
  {
    title: "Add the pixel in Pixel Tracker",
    body: `In your Pixel Tracker dashboard, add a new pixel, choose Meta/Facebook, and paste the Pixel ID from step one. There is no code to copy into your theme. Pixel Tracker injects the pixel using Shopify's ScriptTag system, which loads it on every storefront page automatically once you save.`,
    screenshotCaption: "Pixel Tracker's add-pixel screen with Meta selected and a Pixel ID field filled in.",
  },
  {
    title: "Verify your domain in Meta Business Settings",
    body: `Under Business Settings, Brand Safety, Domains in Meta Business Suite, add and verify the domain your store uses at checkout, your custom domain rather than the myshopify.com one if you have both. Domain verification is what lets you configure the eight prioritized conversion events Meta uses for iOS 14.5's Aggregated Event Measurement. Skip it and Meta will silently ignore some of your events for traffic from opted-out iPhone users.`,
    screenshotCaption: "Meta Business Settings domain verification screen with a store domain pending verification.",
  },
  {
    title: "Confirm your standard events are mapped",
    body: `Pixel Tracker maps Shopify's storefront and checkout activity to Meta's standard events automatically, so PageView, ViewContent, AddToCart, InitiateCheckout, AddPaymentInfo, and Purchase all fire without extra configuration. Open the pixel's detail view in Pixel Tracker to see which events are active, and cross check that list against the Aggregated Event Measurement tab in Events Manager, where you can also set event priority order for iOS traffic.`,
    screenshotCaption: "Pixel Tracker's event mapping list showing which standard events are active for a pixel.",
  },
  {
    title: "Turn on Conversions API",
    body: `In the pixel's settings, turn on Conversions API. This sends the same standard events from Pixel Tracker's server directly to Meta, in parallel with the browser pixel, using an access token generated in Meta Events Manager. Meta deduplicates events that arrive from both paths using an event ID, so a single purchase is not counted twice. This is the single change most likely to improve your event match quality and reported conversions, and it is worth doing on a brand new pixel too, not just as a fix for one that has been underreporting for a while.`,
    screenshotCaption: "Pixel Tracker's Conversions API toggle switched on, with a connection status indicator.",
  },
  {
    title: "Publish and let it run",
    body: `Save the pixel and Pixel Tracker activates the ScriptTag on your storefront right away, with no theme deploy or app embed toggle required. Place a test order, or use Shopify's test payment gateway, to generate a real Purchase event from start to finish.`,
    screenshotCaption: "Pixel Tracker dashboard showing a connected pixel with an Active status.",
  },
  {
    title: "Confirm it's actually firing",
    body: `Install the Meta Pixel Helper browser extension, visit your store, click through a few product pages, and add something to cart. The extension should show your Pixel ID and the events firing in real time, ideally with no errors flagged. Then open the Test Events tool in Events Manager, browse your store, and confirm the same events land there, including, once Conversions API is on, events tagged as arriving from both Browser and Server for the same action.`,
    screenshotCaption: "Meta Pixel Helper extension popup showing PageView and AddToCart events firing on a Shopify product page.",
  },
];

const closingSections = [
  {
    heading: "Common setup mistakes that quietly break tracking",
    paragraphs: [
      `The single most common mistake is having the pixel installed in two places at once. Often a developer pasted Meta's base code into theme.liquid years ago, and now Pixel Tracker's ScriptTag is loading it as well. Both fire on every page, so Meta receives two PageView events, two AddToCart events, two Purchase events for the same visitor action. Your event counts look inflated, cost per result looks artificially good, and reported ROAS is wrong in a way that is easy to miss unless you are specifically checking for duplicates. Before adding a pixel in Pixel Tracker, search your theme code for "fbq(" or "connect.facebook.net" and remove any hardcoded pixel, and if another app on your store also injects a Meta pixel, disable one of the two.`,
      `The second common mistake is pasting the wrong Pixel ID, usually copied from the wrong ad account or a different pixel inside the same Business Manager, or one created years ago for a domain the store no longer uses. If ad performance data is not showing up anywhere after setup, the ID is the first thing to check.`,
      `Third is skipping domain verification. You can still fire events without it, but Meta will not reliably attribute conversions from users who have opted out of tracking under iOS 14.5, since domain verification is a prerequisite for setting which events get priority there.`,
      `Fourth is leaving Conversions API off. A browser-only pixel is not broken exactly, it is just missing a growing share of events it used to catch reliably. If only one thing gets fixed beyond the basic install, it should be this. Apps that offer nothing beyond a browser pixel carry this gap by default; see the [feature comparison](/compare) for how that plays out across the options merchants usually consider.`,
    ],
  },
  {
    heading: "Reading your results after setup",
    paragraphs: [
      `Two numbers are worth comparing once the pixel has been live for a few days: your Shopify order count and the Purchase event count in Meta Events Manager for the same window. They will not match exactly, since Meta drops some events from users who opted out entirely and Conversions API cannot recover those, but they should be close. A wide gap, Meta reporting half your actual orders for example, points to a setup problem rather than ordinary tracking loss.`,
      `Events Manager also reports an Event Match Quality score for the Purchase event once Conversions API is running. A higher score means Meta had enough matching signal, such as email, phone, or browser ID, to confidently tie a server-side event to a specific ad click, which affects how well it can attribute and optimize. It is normal for this score to improve over the first couple of weeks as more orders come through.`,
      `Once Purchase events are landing reliably from both the browser and the server, the ROAS figure in Ads Manager becomes something you can trust rather than a rough guess with an unknown margin of error. The [ROAS calculation guide](/pixel-tracker/guides/roas-calculation) covers how to sanity check that number against your own margins.`,
    ],
  },
];

const faqs = [
  {
    q: "Do I need to add any code to my Shopify theme?",
    a: "No. Pixel Tracker adds the Meta Pixel using Shopify's ScriptTag system, which loads it on your storefront without editing theme.liquid or any template file.",
  },
  {
    q: "What's the difference between the Meta Pixel and Conversions API?",
    a: "The pixel runs in the visitor's browser and is affected by ad blockers, cookie restrictions, and iOS tracking opt-outs. Conversions API sends the same events from a server instead, so they do not depend on what the browser lets through. Pixel Tracker runs the pixel and server-side path together and lets Meta deduplicate any event that arrives twice.",
  },
  {
    q: "Does Pixel Tracker also connect to Google Analytics?",
    a: "No. Pixel Tracker connects the Google Ads conversion tag, not Google Analytics or GA4. They are different tools built for different purposes, and mixing them up is a common source of confusion when merchants are troubleshooting missing conversion data. See [Facebook Pixel vs. Google Tag](/blog/facebook-pixel-vs-google-tag) for how the two compare.",
  },
  {
    q: "How many Meta pixels can I connect?",
    a: "That depends on your plan. Free covers one pixel at $0/mo, Starter covers three at $7/mo, Growth covers ten at $15/mo, and Pro is unlimited at $29/mo. Limits are per Shopify store.",
  },
  {
    q: "I already have a Meta Pixel installed manually. What happens if I also add it through Pixel Tracker?",
    a: "You will get duplicate events, since both the manual install and Pixel Tracker's ScriptTag fire on every page. Remove the hardcoded pixel from your theme, or disable it in whichever app added it, before turning on the one in Pixel Tracker.",
  },
  {
    q: "How long does it take for pixel data to show up in Meta?",
    a: "Real-time events show up immediately in tools like Pixel Helper and Test Events. Ads Manager reporting typically takes a few hours to reflect delivery data, and attribution numbers can keep settling for several days depending on the attribution window you have selected.",
  },
  {
    q: "Can I start using Pixel Tracker right now?",
    a: "Pixel Tracker has not launched on the Shopify App Store yet. It is currently pre-launch. [Join the waitlist](/#waitlist) to get access when it opens.",
  },
];

const relatedLinks = [
  { label: "Quick Meta Pixel setup (5 steps)", href: "/pixel-tracker/meta-pixel" },
  { label: "Server-side tracking with Conversions API", href: "/pixel-tracker/guides/server-side-tracking" },
  { label: "How to calculate ROAS correctly", href: "/pixel-tracker/guides/roas-calculation" },
  { label: "Facebook Pixel vs. Google Tag", href: "/blog/facebook-pixel-vs-google-tag" },
  { label: "Pixel Tracker for Shopify", href: "/pixel-tracker" },
];

export default function FacebookPixelSetupGuidePage() {
  return (
    <GuideArticle
      slug="facebook-pixel-setup"
      badge="Setup Guide"
      h1="How to Set Up the Meta Pixel on Shopify: The Complete Guide"
      tldr="The Meta Pixel tells Facebook and Instagram which ads led to a sale, but a browser-only install has been quietly losing accuracy since iOS 14.5. This guide covers the standard events that matter, why Conversions API closes that gap, and how to set both up correctly through Pixel Tracker."
      intro={intro}
      sections={sections}
      steps={steps}
      closingSections={closingSections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
