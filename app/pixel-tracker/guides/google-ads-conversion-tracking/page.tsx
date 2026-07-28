import type { Metadata } from "next";
import { GuideArticle } from "@/components/guide-article";

export const metadata: Metadata = {
  title: "How to Track Google Ads Conversions on Shopify | Pixel Tracker",
  description:
    "Learn how to create a Google Ads conversion action on Shopify, grab your Conversion ID and Label, and connect them correctly in Pixel Tracker's dashboard.",
  openGraph: {
    title: "How to Track Google Ads Conversions on Shopify | Pixel Tracker",
    description:
      "Learn how to create a Google Ads conversion action on Shopify, grab your Conversion ID and Label, and connect them correctly in Pixel Tracker's dashboard.",
    url: "https://appnary.com/pixel-tracker/guides/google-ads-conversion-tracking",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const intro = [
  `Ask a Shopify merchant if their Google Ads conversion tracking works, and most will say yes. Ask them to open Google Ads and show you the Conversions column for last week, and the answer gets a lot less confident. Somewhere between installing "some Google code" during store setup and actually running ads, the wires get crossed, usually because Google Analytics got installed instead of, or in addition to, the Google Ads conversion tag.`,
  `Those are not the same product. [Pixel Tracker](/pixel-tracker) installs the Google Ads conversion tag, the one that reports purchases directly into your Google Ads account so Smart Bidding has something real to optimize toward. It does not install or connect to Google Analytics or GA4, and it's not meant to. This guide covers the whole chain: what a conversion action is, why it's not the same thing as GA4, how to build one in Google Ads, and how to get it running correctly through Pixel Tracker.`,
  `If you've already been through the quick version, [setting up the Google Ads tag in five steps](/pixel-tracker/google-ads), this is the longer read, covering the parts that page skips to keep things fast. Here we slow down on the setup details that determine whether your conversion numbers mean anything.`,
];

const sections = [
  {
    heading: "What a conversion action is, and why Google Ads is guessing without one",
    paragraphs: [
      `A conversion action is a specific thing you've told Google Ads to count and report on: a completed purchase, a submitted lead form, a phone call from an ad. For a Shopify store, the conversion action that matters is almost always Purchase, tied to the order confirmation page a customer lands on right after checkout.`,
      `The conversion action itself lives inside your Google Ads account. It's a rule Google Ads is watching for. The tag Pixel Tracker installs on your store has one job: tell that rule "this happened," and how much the order was worth. Without a correctly configured conversion action, Smart Bidding strategies like Maximize Conversions or Target ROAS have nothing real to optimize against, so Google Ads either falls back to guessing based on clicks, or optimizes toward whatever conversion action happens to be reporting data, even if it's the wrong one.`,
      `This is why a store can run ads for months, see decent click-through rates, and still not know if any of it made money. The ads platform was never told what a sale looked like.`,
    ],
  },
  {
    heading: "The mix-up that wastes ad spend: conversion tag vs. Google Analytics (GA4)",
    paragraphs: [
      `Google Analytics (GA4) and the Google Ads conversion tag are built by the same company and both involve a snippet of tracking code, which is about where the similarity ends. GA4 measures overall site behavior: sessions, pageviews, where traffic came from, what people clicked before they left. It's a general analytics tool, not something Google Ads reads from directly.`,
      `The Google Ads conversion tag exists for one purpose: report conversions back into a specific Google Ads account so that account's bidding can use them. Google does offer a way to import GA4 goals into Google Ads as conversion actions, but that's a separate configuration with its own setup and its own quirks. Pixel Tracker doesn't do this, and doesn't connect to GA4 at all. What it installs is the direct Google Ads conversion tag, which fires the moment a purchase completes and reports straight into the Conversions column.`,
      `If someone on your team says tracking is covered because "Analytics is already installed," that's exactly the assumption this guide exists to correct. A working GA4 setup tells you nothing about whether your Google Ads account has ever recorded a single purchase. For a closer look at how the two systems actually differ on a Shopify store, see [Shopify Analytics vs Google Analytics](/blog/shopify-analytics-vs-google-analytics).`,
      `One more related gap worth knowing about upfront: Google Ads has a separate feature called Enhanced Conversions, which sends hashed customer email and phone data to improve match rates on iOS and in browsers that block cookies. Pixel Tracker doesn't support Enhanced Conversions. It handles standard conversion tracking through the Google Ads tag, which is what most stores need and is a large step up from no tracking at all, but it's not the same feature.`,
    ],
  },
  {
    heading: "Why this tag is client-side only, and why that's normal",
    paragraphs: [
      `Pixel Tracker sends some events server-side: Facebook conversions go through Meta's Conversions API, and TikTok events go through TikTok's Events API, both of which route around ad blockers and browser tracking restrictions. Google Ads conversion tracking through Pixel Tracker works differently. It's client-side only, meaning the tag fires from the customer's own browser on the order confirmation page, the same way the standard Google Ads tag has always worked.`,
      `In practice, this means ad blockers, blocked third-party cookies, and a customer closing the tab a half-second too early can cause an occasional real order to go unrecorded. That's not a flaw in the setup, it's a limitation every store using client-side Google Ads tracking deals with. A small, consistent gap between your Shopify order count and your Google Ads conversion count is normal. A large gap usually means something in the setup is wrong, not that browsers are blocking half your traffic.`,
    ],
  },
];

const steps = [
  {
    title: "Create a conversion action in Google Ads",
    body: `In Google Ads, go to Goals > Conversions > Summary > New conversion action > Website. Choose "Purchase" as the category, since that's the action that actually reflects revenue. For value settings, use the transaction-specific value option so each order reports its own amount, rather than a single fixed value that ignores how much someone actually spent. Leave the count setting on "One," save the conversion action, and move to the next screen.`,
    screenshotCaption: "Google Ads new conversion action screen with Website source and Purchase category selected.",
  },
  {
    title: "Copy the Conversion ID and Conversion Label",
    body: `Saving the conversion action opens a tag setup screen with a block of code. Ignore the code itself, Pixel Tracker doesn't need you to paste a script anywhere. Instead, find two values inside it: the Conversion ID (formatted like AW-123456789) and the Conversion Label (a short string of letters and numbers next to it). Copy both somewhere you can paste from in the next step.`,
    screenshotCaption: "Google Ads tag setup panel with the Conversion ID and Conversion Label values highlighted.",
  },
  {
    title: "Add a new Google Ads pixel in Pixel Tracker",
    body: `From your Pixel Tracker dashboard, go to Pixels > Add Pixel and choose Google Ads from the platform list. There's no Google account login or OAuth step here, Pixel Tracker only needs the conversion tag details, not access to your full Google Ads account.`,
    screenshotCaption: "Pixel Tracker's Add Pixel screen with Google Ads selected from the platform list.",
  },
  {
    title: "Enter the Conversion ID and Label, then save",
    body: `Paste the Conversion ID into the ID field and the Conversion Label into the Label field, then save. Pixel Tracker installs the tag across your storefront automatically through a Shopify ScriptTag, so there's no theme.liquid to edit and no developer required. The tag goes live on the next page load after saving.`,
    screenshotCaption: "Pixel Tracker pixel configuration form with Conversion ID and Conversion Label fields completed.",
  },
  {
    title: "Confirm the tag fires with Google Tag Assistant",
    body: `Install the Google Tag Assistant Chrome extension, click Connect, and browse to your storefront. Add a product to cart and complete checkout with a real (or heavily discounted) test order. Tag Assistant should show your Conversion ID firing on the order confirmation page as a conversion event. If nothing shows up, check that the pixel is marked active in Pixel Tracker and that you completed an actual purchase rather than just viewing the cart.`,
    screenshotCaption: "Google Tag Assistant showing the Google Ads conversion tag firing on the order confirmation page.",
  },
  {
    title: "Check the Conversions column after a test purchase",
    body: `Tag Assistant confirms the tag fired, not that Google Ads recorded it correctly. After your test order, check Google Ads under Goals > Conversions > Summary. Conversions typically appear within a few hours and sometimes take closer to a day, so a zero right after checkout isn't automatically a failure.`,
    screenshotCaption: "Google Ads Conversions summary showing a recorded Purchase conversion and its value.",
  },
  {
    title: "Exclude the test order before trusting the numbers",
    body: `Once the conversion has recorded correctly, refund or delete the test order in Shopify and note the order number so you can exclude it when reviewing performance later, since Google Ads doesn't offer a way to remove a single past conversion from its totals. If you'll be testing checkout regularly, set up an IP exclusion under Google Ads Settings > Excluded IP addresses so future test runs don't inflate your conversion rate.`,
    screenshotCaption: "Shopify order list with a test order flagged before it's excluded from ad performance reporting.",
  },
];

const closingSections = [
  {
    heading: "Three mistakes that quietly wreck Google Ads conversion data",
    paragraphs: [
      `The most common one: the conversion action Smart Bidding is actually optimizing toward isn't Purchase at all. Plenty of Google Ads accounts also have a "Contact" or lead-form conversion action set up from an earlier campaign, and if that one is marked primary while Purchase is secondary, Google Ads will happily optimize your budget toward people who filled out a contact form and never bought anything. Check Goals > Conversions > Summary and confirm Purchase is the primary action your bidding strategy is using.`,
      `The second: never excluding test orders. One low-value test purchase pushed through checkout to confirm the tag fires can quietly drag down your average order value and inflate your conversion rate, and Google Ads doesn't offer a clean way to remove a single historical conversion once it's counted. Handle this the way Step 7 above describes, before you start trusting the numbers for real decisions.`,
      `The third, and the easiest to miss: conversion value currency. Pixel Tracker sends the order value in your storefront's currency. If your Google Ads account currency is set differently, say your account is in USD but your store charges in CAD, Google Ads needs to know that so it converts the value correctly. Check the value settings on your conversion action (Tools > Conversions > your action > Value) and confirm the currency matches your storefront. Get this wrong and every order gets recorded as if it were the account currency, which can overstate or understate reported revenue by a meaningful margin.`,
    ],
  },
  {
    heading: "What Pixel Tracker does, and doesn't, cover for Google Ads",
    paragraphs: [
      `To recap plainly: Pixel Tracker installs the standard Google Ads conversion tag automatically through a Shopify ScriptTag, with no theme code editing required. It does not connect to Google Analytics or GA4, does not support Enhanced Conversions, and doesn't send Google Ads events server-side the way it does for Facebook and TikTok. What it does handle is the part most stores actually need: getting real purchase data into the Conversions column reliably, without a developer.`,
      `If you're deciding how Google Ads tracking fits alongside Facebook and TikTok on the same store, [Facebook Pixel vs. Google Tag](/blog/facebook-pixel-vs-google-tag) walks through how the two approaches differ, and the [comparison page](/compare) lays out how Pixel Tracker's setup compares to doing this manually through Google Tag Manager.`,
    ],
  },
];

const faqs = [
  {
    q: "Does Pixel Tracker set up Google Analytics or GA4 for my store?",
    a: "No. Pixel Tracker only installs the Google Ads conversion tag, the one that reports purchases back to your Google Ads account for bidding. It doesn't touch Google Analytics or GA4, and it can't import GA4 goals as conversion actions. If you want GA4 running on your store, that's a separate setup handled directly through Google, not something Pixel Tracker does.",
  },
  {
    q: "Does Pixel Tracker support Enhanced Conversions or Customer Match?",
    a: "No. Pixel Tracker installs standard client-side Google Ads conversion tracking. It doesn't hash and send customer email or phone data for Enhanced Conversions, and there's no Customer Match integration. If your account relies on Enhanced Conversions for match quality, that would need to be configured separately.",
  },
  {
    q: "Why does Google Ads show fewer conversions than my actual Shopify order count?",
    a: "A small gap is normal. The Google Ads tag through Pixel Tracker is client-side, firing from the customer's browser on the order confirmation page, so ad blockers and blocked cookies can occasionally cause a real order to go unrecorded, a limitation every store on client-side tracking has. A gap of a few percent is expected. A gap of 50% or more usually points at a setup problem, like the wrong conversion action being tracked, rather than browsers blocking traffic.",
  },
  {
    q: "Can I track other actions besides Purchase, like Add to Cart?",
    a: "Pixel Tracker sends the Purchase event to the Conversion ID and Label you configure, since that's the action that determines whether your ad spend is actually working. Additional conversion actions like Add to Cart or Begin Checkout would need to be set up and tagged separately in Google Ads. Pixel Tracker's Google Ads support is focused on getting Purchase tracking right.",
  },
  {
    q: "How long does it take for a test conversion to show up in Google Ads?",
    a: "Usually a few hours, sometimes closer to a full day. Google Ads processes conversion data in batches rather than in real time, so a Conversions column still showing zero right after a test order doesn't necessarily mean the tag failed. Confirm the tag fired with Google Tag Assistant first, then give the reporting time to catch up.",
  },
  {
    q: "Do I need to edit my Shopify theme code to install this?",
    a: "No. Pixel Tracker installs the Google Ads tag through a Shopify ScriptTag, which runs across your store without editing theme.liquid or any theme files. You enter the Conversion ID and Label in Pixel Tracker's dashboard, and the tag deploys on its own.",
  },
  {
    q: "Is Pixel Tracker available on the Shopify App Store right now?",
    a: "Not yet. Pixel Tracker is in pre-launch, and access is currently through the [waitlist](/#waitlist). There's no free trial once it launches, just plans sized by how many pixels a store needs, and the Google Ads setup works exactly the way this guide describes.",
  },
];

const relatedLinks = [
  { label: "Quick Google Ads Setup (5 Steps)", href: "/pixel-tracker/google-ads" },
  { label: "Pixel Tracker Overview", href: "/pixel-tracker" },
  { label: "Facebook Pixel vs. Google Tag", href: "/blog/facebook-pixel-vs-google-tag" },
  { label: "Shopify Analytics vs. Google Analytics", href: "/blog/shopify-analytics-vs-google-analytics" },
  { label: "All Pixel Tracker Guides", href: "/pixel-tracker/guides" },
];

export default function GoogleAdsConversionTrackingGuidePage() {
  return (
    <GuideArticle
      slug="google-ads-conversion-tracking"
      badge="Setup Guide"
      h1="How to Track Google Ads Conversions on Shopify"
      tldr="A Google Ads conversion action is separate from Google Analytics or GA4, and it's what tells Google Ads a purchase actually happened. Create the conversion action in Google Ads, drop the Conversion ID and Label into Pixel Tracker, then confirm it in the Conversions column before you trust your bidding data."
      intro={intro}
      sections={sections}
      steps={steps}
      closingSections={closingSections}
      faqs={faqs}
      relatedLinks={relatedLinks}
    />
  );
}
