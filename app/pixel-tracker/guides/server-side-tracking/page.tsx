import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";

export const metadata: Metadata = {
  title: "Server-Side Tracking for Shopify Merchants | Pixel Tracker",
  description:
    "Server-side tracking sends Shopify order events straight from the server to Meta and TikTok, so ad blockers and Safari's ITP can't stop them from being counted.",
  openGraph: {
    title: "Server-Side Tracking for Shopify Merchants | Pixel Tracker",
    description:
      "Server-side tracking sends Shopify order events straight from the server to Meta and TikTok, so ad blockers and Safari's ITP can't stop them from being counted.",
    url: "https://appnary.com/pixel-tracker/guides/server-side-tracking",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const intro = [
  `Most Shopify merchants find out server-side tracking exists the same way: their ad account's reported conversions stop matching their actual order count, and someone in a Facebook ads group tells them to "turn on CAPI." That's a reasonable starting point, but it's worth understanding what's actually happening before you flip a switch, because the fix only works if you know what problem it's solving.`,
  `Server-side tracking is not a replacement for your Facebook or TikTok pixel, and it's not a new tracking method that watches your store more closely. It's a second, independent path for sending the same event data your store already generates, so a blocked browser script doesn't mean a lost data point. This guide covers what server-side tracking actually is, why browser-only tracking stopped being reliable enough on its own, how Conversions API and Events API work mechanically, what event deduplication means, and what server-side tracking can't do for you no matter how well it's configured. For the shorter version of this same topic, see [our companion post on server-side tracking](/blog/shopify-server-side-tracking-guide).`,
];

const sections = [
  {
    heading: "What Server-Side Tracking Actually Means",
    paragraphs: [
      `Every tracking pixel installed on a Shopify store, whether it's Meta, TikTok, Snapchat, or anything else, works the same basic way by default: a piece of JavaScript loads in the customer's browser, watches for events like "viewed product" or "completed checkout," and fires a request to the ad platform's servers when those events happen. This is client-side tracking. It depends entirely on the customer's browser agreeing to load the script, run it, and let it send data out.`,
      `Server-side tracking skips the browser as the sole reporting path. Instead, when something happens in your store, such as an order being placed, your store's backend, relayed through an app like [Pixel Tracker](/pixel-tracker), sends that event directly to the ad platform's server over a direct server-to-server connection. The browser isn't involved in that leg of the trip at all. No JavaScript has to execute, no third-party cookie has to survive, and no ad blocker gets a vote.`,
      `The event itself is the same event. If someone buys a $40 hoodie, the "Purchase" event sent server-side describes the same order, the same value, and the same currency as the one your browser pixel would have tried to send. Server-side tracking doesn't invent new data or track anything additional about the customer. It's a more reliable delivery method for information your store already has.`,
    ],
  },
  {
    heading: "Why Browser-Only Pixels Stopped Being Enough",
    paragraphs: [
      `Ten years ago, a single browser pixel was close to sufficient. Today, several separate things chip away at how much of your real traffic a browser-only pixel actually sees, and they stack on top of each other.`,
      `Ad blockers are the most direct hit. Browser extensions built to block ads and trackers frequently block the Meta pixel, the TikTok pixel, and similar scripts outright, because they're served from known tracking domains. A meaningful slice of desktop shoppers browse with an ad blocker installed, and for every one of them, a client-side-only setup simply never fires.`,
      `Safari's Intelligent Tracking Prevention (ITP) goes further by limiting how long cookies set by tracking scripts can persist and by restricting cross-site cookie behavior more generally. This mostly affects retargeting and multi-session attribution rather than blocking the initial event outright, but it degrades the browser's ability to tie a later action back to an earlier ad click.`,
      `iOS 14.5's App Tracking Transparency (ATT) prompt changed the picture for a huge share of mobile traffic. Once Apple required apps to explicitly ask permission before tracking users across other apps and websites, a large portion of iPhone users declined. For Facebook and Instagram's in-app browsers specifically, this cut deep into how much event data made it back to Meta from iOS traffic, regardless of what your Shopify store's pixel was configured to send.`,
      `TikTok's own in-app browser adds a more mundane wrinkle: script execution and cookie behavior inside TikTok's embedded browser doesn't always match a normal mobile Safari or Chrome session, so pixel events fired from a link opened inside the TikTok app can behave inconsistently compared to the same link opened in a regular browser. For a platform where a large share of your ad clicks land inside its own app, that's not a rounding error.`,
      `None of this means client-side pixels became useless. It means they became one signal among several rather than the only signal. For more on this shift, see [our post on privacy-first tracking for Shopify stores](/blog/privacy-first-tracking-shopify).`,
    ],
  },
  {
    heading: "How Conversions API and Events API Actually Work",
    paragraphs: [
      `Facebook's Conversions API (CAPI) and TikTok's Events API are, mechanically, close cousins. Both let a business send event data directly from a server to the ad platform, instead of relying solely on a browser script.`,
      `Here's the sequence in practice. A customer completes a purchase on your Shopify store. Shopify's backend records that order the moment it happens, independent of what the customer's browser did or didn't successfully load. An app like Pixel Tracker, which already has your pixel and access token connected, picks up that order event and sends it directly to Meta's or TikTok's server-side event endpoint, tagged with whatever matching information is available, such as a hashed email address or phone number, so the platform can associate the event with the right ad-attributed user where possible.`,
      `Crucially, this happens whether or not the browser-side pixel also fired. If the customer's browser blocked the Meta pixel script entirely, the Conversions API event is still sent, because it never depended on that script in the first place. If the browser pixel fired normally, both events exist briefly, one from the browser and one from the server, describing the same purchase.`,
      `Setting up which platform to send events to still starts with the pixel connection itself. If you haven't connected a Facebook pixel or a TikTok pixel yet, the [Facebook pixel setup guide](/pixel-tracker/guides/facebook-pixel-setup) and [TikTok pixel setup guide](/pixel-tracker/guides/tiktok-pixel-setup) cover that groundwork in detail, including where to find your pixel ID and access token, before you turn on the server-side piece.`,
    ],
  },
  {
    heading: "Event Deduplication: Why You Don't Get Double-Counted",
    paragraphs: [
      `The obvious question at this point is: if both the browser and the server can send the same purchase event, doesn't that mean every sale gets counted twice?`,
      `It doesn't, because of event deduplication. Both Conversions API and Events API support sending a unique event identifier alongside each event, and the browser pixel sends that same identifier when it fires its version of the event. When Meta or TikTok receives two events with a matching event ID within a short window of each other, it recognizes them as the same underlying occurrence and keeps only one for reporting and optimization purposes, rather than counting it twice.`,
      `This is why deduplication has to be built into the app doing the sending, rather than left to chance. Pixel Tracker generates and attaches matching event IDs automatically for both the browser-side and server-side legs of the same event, so a purchase that fires through both paths shows up once in your ads reporting, not twice. If deduplication weren't handled correctly, your reported conversion numbers would inflate, which is worse than the original under-counting problem, since it makes campaigns look more efficient than they actually are.`,
    ],
  },
];

const steps = [
  {
    title: "Connect your pixel first",
    body: `Before Conversions API or Events API can be enabled, the underlying Facebook pixel or TikTok pixel needs to already be connected in your Pixel Tracker dashboard, with a valid pixel ID. If you haven't done this yet, walk through the Facebook pixel setup guide or TikTok pixel setup guide first, since the server-side toggle sits on top of that existing connection and won't do anything meaningful without it.`,
    screenshotCaption: "Pixel Tracker dashboard showing a connected Facebook pixel with its pixel ID field filled in.",
  },
  {
    title: "Generate an access token from the ad platform",
    body: `Both Meta and TikTok require a system-generated access token to authorize server-side event delivery, separate from your regular ad account login. For Facebook, this token comes from Events Manager, under the Conversions API settings for the specific pixel. For TikTok, it comes from TikTok Ads Manager's Events API setup screen. Copy the generated token exactly, since it won't be shown again in full after you leave that screen.`,
    screenshotCaption: "Facebook Events Manager screen showing the Generate Access Token button under Conversions API settings.",
  },
  {
    title: "Paste the token into Pixel Tracker and enable the toggle",
    body: `Back in the Pixel Tracker dashboard, open the settings for the relevant pixel and paste the access token into the Conversions API or Events API field, depending on the platform. Enabling the toggle turns on server-side event forwarding for that specific pixel. This setting is per pixel, so if you're running both a Facebook pixel and a TikTok pixel, each needs its own token entered and its own toggle switched on.`,
    screenshotCaption: "Pixel Tracker settings panel with the Conversions API toggle switched on and an access token field populated.",
  },
  {
    title: "Send a test event and confirm it arrives",
    body: `Both Meta's Events Manager and TikTok Ads Manager include a test events screen that shows incoming server-side events in real time, tagged with their source. Place a small test order or trigger a test event from Pixel Tracker, then check that screen to confirm the event arrives, that its event ID matches between the browser and server versions, and that key details like order value came through correctly.`,
    screenshotCaption: "Facebook Test Events screen showing a Purchase event received from both Browser and Server sources with a matching event ID.",
  },
  {
    title: "Check match quality after a few days",
    body: `Once server-side events have been flowing for a few days, both platforms show a match quality or event match score, reflecting how often the customer information attached to server events, such as a hashed email or phone number, can be matched to a real advertising profile. This isn't something you configure directly, but it's worth checking periodically, since it's the clearest signal that the server-side connection is contributing useful data rather than just duplicate noise.`,
    screenshotCaption: "TikTok Ads Manager Events API dashboard showing an event match rate percentage over the past seven days.",
  },
];

const closingSections = [
  {
    heading: "What Server-Side Tracking Doesn't Fix",
    paragraphs: [
      `Server-side tracking is a delivery reliability fix, not a performance fix. It's easy to treat "turn on CAPI" as a general troubleshooting step for underperforming ads, but it only addresses one specific failure mode: events that happened but never made it back to the ad platform. If your campaigns are struggling because of weak creative, a mismatched audience, or a product page that doesn't convert, sending every event through a second, more reliable channel won't change any of that. You'll just have more accurate visibility into a genuinely bad result, which is still useful, but it isn't the fix people sometimes hope it is.`,
      `It also doesn't replace the browser pixel, even where server-side tracking is available. The pixel still contributes browser-side signals, such as page views and add-to-cart events before a purchase happens, and platforms use both sources together rather than treating server-side as a full substitute. Turning off your pixel because you've enabled Conversions API isn't a setup anyone recommends; the two are meant to run in parallel, with deduplication handling the overlap.`,
      `And it isn't available everywhere. This is worth being direct about: Pixel Tracker supports server-side tracking through Conversions API for Facebook and Events API for TikTok, and that's it. There is no equivalent server-side connection offered for Google Ads, Snapchat, Pinterest, X, or LinkedIn pixels through Pixel Tracker. Those platforms still rely on client-side, browser-fired events only within this app. If your ad spend is concentrated on Meta or TikTok, server-side tracking closes a real gap. If it's concentrated on one of the other platforms, this particular fix won't apply to that spend, and it's worth knowing that going in rather than assuming coverage that isn't there. If you're weighing tracking options across platforms more broadly, [our comparison page](/compare) lays out what's supported where.`,
    ],
  },
  {
    heading: "Where This Fits Before You Set Anything Up",
    paragraphs: [
      `Pixel Tracker isn't available in the Shopify App Store yet. It's currently pre-launch, and merchants can sign up to get access when it opens. Everything covered in this guide, from connecting a pixel to enabling Conversions API or Events API, will work the same way once the app launches, managed from one dashboard instead of separate settings screens for each ad platform. If you want to be notified when that happens, you can [join the waitlist](/#waitlist).`,
    ],
  },
];

const faqs = [
  {
    q: "Does server-side tracking mean I don't need the pixel anymore?",
    a: "No. The pixel and server-side tracking work together, not as substitutes for each other. The pixel still captures browser-side events like page views and add-to-cart actions, and event deduplication is what prevents the same purchase from being counted twice when both the browser and the server report it.",
  },
  {
    q: "Which platforms does Pixel Tracker support for server-side tracking?",
    a: "Facebook Conversions API and TikTok Events API only. Pixel Tracker does not offer server-side tracking for Google Ads, Snapchat, Pinterest, X, or LinkedIn. Pixel connections for those platforms remain client-side (browser pixel) only.",
  },
  {
    q: "Will enabling Conversions API cause my conversions to be counted twice?",
    a: "It shouldn't, as long as event deduplication is working, which it is by default in Pixel Tracker. Each event gets a matching identifier sent from both the browser and the server, and Meta or TikTok uses that identifier to recognize the two as one event rather than two separate ones.",
  },
  {
    q: "Does server-side tracking fully solve the iOS 14.5 tracking problem?",
    a: "It significantly improves visibility into events your store's backend can see, like completed orders, since those don't depend on the customer's browser or in-app browser executing a script correctly. It doesn't restore visibility into earlier-funnel browser behavior on iOS that a user has otherwise opted out of at the device or app level.",
  },
  {
    q: "Do I need a developer to set up Conversions API or Events API?",
    a: "Not for the Pixel Tracker side of it. Generating an access token happens in Meta's Events Manager or TikTok Ads Manager, both standard dashboard screens, and pasting that token into Pixel Tracker and flipping a toggle doesn't require touching any theme code or writing anything.",
  },
  {
    q: "Is server-side tracking available on every Pixel Tracker plan?",
    a: "Server-side tracking is tied to having a Facebook or TikTok pixel connected within your plan's pixel limit, whether that's the Free plan's single pixel, Starter's three, Growth's ten, or Pro's unlimited pixels. Check the Pixel Tracker product page for current plan details before deciding which plan fits your setup.",
  },
  {
    q: "Does Pixel Tracker store customer personal information to do this?",
    a: "Pixel Tracker forwards event data to Meta's or TikTok's servers to enable matching; it doesn't build its own database of customer profiles or personally identifiable visitor data. The matching information sent, such as a hashed email or phone number, goes directly to the ad platform as part of the event.",
  },
];

const relatedLinks = [
  { label: "Pixel Tracker overview", href: "/pixel-tracker" },
  { label: "Facebook pixel setup guide", href: "/pixel-tracker/guides/facebook-pixel-setup" },
  { label: "TikTok pixel setup guide", href: "/pixel-tracker/guides/tiktok-pixel-setup" },
  { label: "Shopify server-side tracking guide (blog)", href: "/blog/shopify-server-side-tracking-guide" },
  { label: "All Pixel Tracker guides", href: "/pixel-tracker/guides" },
];

export default function ServerSideTrackingGuidePage() {
  return (
    <GuideArticle
      slug="server-side-tracking"
      badge="Guide"
      h1="Server-Side Tracking for Shopify Merchants"
      tldr="Server-side tracking sends the same purchase and checkout events your Shopify store already recorded straight to Meta's or TikTok's servers, so ad blockers, Safari's ITP, and iOS opt-outs can't stop them from being counted. It runs alongside your browser pixel, not instead of it, and Pixel Tracker only supports it for Facebook Conversions API and TikTok Events API."
      intro={intro}
      sections={sections}
      steps={steps}
      closingSections={closingSections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
