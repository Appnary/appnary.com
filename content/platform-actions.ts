import type { PlatformActionPage } from "@/lib/platform-actions";

export const platformActionPages: PlatformActionPage[] = [
  {
    "platformSlug": "google-ads",
    "actionSlug": "troubleshooting",
    "platformName": "Google Ads",
    "pixelName": "Google Ads conversion tag",
    "badge": "Troubleshooting",
    "title": "Fix a Google Ads Conversion Tag That's Not Tracking",
    "description": "Google Ads conversion tag showing zero conversions? Learn how to check tag firing, Ads diagnostics, and the GA4 mix-up before you assume tracking is broken.",
    "h1": "Fix a Google Ads Conversion Tag That's Not Tracking",
    "intro": [
      "If your Google Ads account shows \"No recent conversions\" or a conversion count that doesn't match your actual Shopify orders, the Google Ads conversion tag connected through Pixel Tracker usually isn't the first place to look. Most of the time the tag is firing fine, and the real issue is somewhere else: a mismatched conversion label, an ad blocker, or confusion between Google Ads and Google Analytics 4 reporting.",
      "This page walks through the checks worth running in order, starting with the ones inside Google Ads itself, before you assume Pixel Tracker's connection is broken. If you haven't set up Google Ads conversion tracking yet, the [Google Ads conversion tracking guide](/pixel-tracker/guides/google-ads-conversion-tracking) covers the initial setup."
    ],
    "sections": [
      {
        "heading": "Check Google Ads diagnostics before anything else",
        "paragraphs": [
          "Google Ads has a built-in Diagnostics tab under Goals > Conversions > Summary that tells you the actual health of your conversion tag, including whether it has received a hit in the last 24 hours. This is more reliable than eyeballing the conversion count, because a tag can be firing correctly while conversions are still processing or attributed to a different action. Start here before touching anything in your Shopify admin or the Pixel Tracker dashboard."
        ]
      },
      {
        "heading": "You might be looking at GA4, not Google Ads",
        "paragraphs": [
          "Google Analytics 4 and Google Ads track conversions separately, using different IDs and different dashboards, even though both use a version of Google's tag. It's common for a merchant to see purchase events reporting fine in GA4 and assume Google Ads tracking is also fine, when the Ads account is actually using a completely different conversion action with its own conversion ID and label. Confirm you're checking the conversion action inside the Google Ads interface, not a GA4 report, before troubleshooting further."
        ]
      },
      {
        "heading": "Confirm the conversion tag is actually firing",
        "paragraphs": [
          "Install Google's Tag Assistant browser extension, visit your storefront, and complete a real or test purchase while Tag Assistant is recording. If the extension shows the Google tag firing with the correct conversion ID, the tag is working, and the problem is downstream in how Google Ads is counting or attributing it. If Tag Assistant shows nothing firing at all, check that Pixel Tracker's Google Ads connection is still active in your dashboard and that the conversion ID and label match what's configured in Google Ads."
        ]
      },
      {
        "heading": "Ad blockers and consent tools can silently block gtag.js",
        "paragraphs": [
          "Browser extensions, privacy-focused browsers, and cookie consent banners that default to blocking marketing scripts can prevent Google's tag from loading at all, with no visible error to the shopper. This affects a meaningful share of traffic and will always make your reported conversions lower than actual Shopify orders. It's not something Pixel Tracker or Google Ads can fix from the backend, but it does explain a gap between real sales and tracked conversions, especially in privacy-conscious markets."
        ]
      },
      {
        "heading": "Give it time, then check the right column",
        "paragraphs": [
          "New conversion actions and recently reconnected tags can take a few hours, and sometimes up to a day, before Google Ads displays data, even if tracking is working correctly behind the scenes. Also double check you're reading the Conversions column tied to the correct conversion action, since Google Ads can show multiple conversion actions side by side, and it's easy to check the wrong one after adding a new campaign or action."
        ]
      }
    ],
    "steps": [
      {
        "title": "Check Google Ads Diagnostics",
        "body": "Go to Goals > Conversions > Summary in Google Ads and open the conversion action tied to Pixel Tracker. Look for tag health warnings or a \"No recent conversions\" status."
      },
      {
        "title": "Confirm you're not reading GA4",
        "body": "Make sure the numbers you're comparing come from the Google Ads Conversions column, not a Google Analytics 4 report. They use separate tracking and won't always match."
      },
      {
        "title": "Run Tag Assistant on a live checkout",
        "body": "Complete a test purchase with Google's Tag Assistant extension open and confirm the Google tag fires with the correct conversion ID and label."
      },
      {
        "title": "Check the Pixel Tracker connection status",
        "body": "In your Pixel Tracker dashboard, confirm the Google Ads connection is active and the conversion ID matches your Google Ads account."
      },
      {
        "title": "Rule out ad blockers",
        "body": "Test in a browser without ad blocking or privacy extensions enabled to see if the tag fires differently."
      },
      {
        "title": "Wait out the reporting delay",
        "body": "Give a new or reconnected conversion action several hours, occasionally up to 24, before assuming it's broken."
      },
      {
        "title": "Compare against real order counts",
        "body": "Cross check tracked conversions against your Shopify order count for the same date range to see if the gap is total loss or just a delay."
      }
    ],
    "symptoms": [
      "Google Ads Diagnostics shows \"No recent conversions\" for the connected conversion action",
      "Conversions appear in GA4 but the Google Ads conversion count stays flat",
      "Tag Assistant shows the tag firing, but Google Ads still isn't counting it",
      "Conversion count is noticeably lower than actual Shopify order volume",
      "A newly created conversion action never leaves \"no recent conversions\" status",
      "Conversions show up late, in batches, instead of matching order timestamps"
    ],
    "faqs": [
      {
        "q": "Why do I see purchases in GA4 but not in Google Ads?",
        "a": "GA4 and Google Ads track conversions independently, using separate IDs and separate conversion actions, even though they're both built on Google's tag. Seeing data in one doesn't guarantee the other is set up correctly. Check the specific conversion action inside Google Ads, not your GA4 property, to know if Ads tracking is actually working."
      },
      {
        "q": "How long should I wait before assuming the conversion tag is broken?",
        "a": "Give it at least a few hours, and up to 24 for a brand new or recently reconnected conversion action. If Google Ads Diagnostics still shows no recent activity after that, move on to checking Tag Assistant and your ad blocker settings."
      },
      {
        "q": "Can an ad blocker stop the Google Ads conversion tag from firing?",
        "a": "Yes. Ad blockers, privacy browsers, and some cookie consent tools block gtag.js by default, so those visits never get counted, with no error visible to the shopper. This will always make tracked conversions lower than actual orders, and it isn't something that can be fixed from the Pixel Tracker or Google Ads side."
      },
      {
        "q": "What's the difference between Tag Assistant and Google Ads Diagnostics?",
        "a": "Tag Assistant checks whether the tag actually fires in your browser during a real session. Google Ads Diagnostics checks whether Google Ads itself has received and counted that data. A tag can pass Tag Assistant and still show a problem in Diagnostics if the conversion ID or label doesn't match."
      },
      {
        "q": "My conversion count is lower than my Shopify order count, is that normal?",
        "a": "Some gap is normal and expected, mostly from ad blockers, privacy settings, and reporting delays. But if the gap is large or growing, work through the diagnostic checklist above starting with Google Ads Diagnostics before assuming Pixel Tracker's connection has failed."
      }
    ],
    "related": [
      {
        "label": "Google Ads events Pixel Tracker tracks",
        "href": "/pixel-tracker/google-ads/events"
      },
      {
        "label": "Google Ads server-side tracking",
        "href": "/pixel-tracker/google-ads/server-side"
      },
      {
        "label": "Google Ads conversion tracking guide",
        "href": "/pixel-tracker/guides/google-ads-conversion-tracking"
      },
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "All Pixel Tracker guides",
        "href": "/pixel-tracker/guides"
      },
      {
        "label": "Pixel tracking calculator",
        "href": "/tools/pixel-tracking-calculator"
      }
    ]
  },
  {
    "platformSlug": "google-ads",
    "actionSlug": "events",
    "platformName": "Google Ads",
    "pixelName": "Google Ads conversion tag",
    "badge": "Events",
    "title": "Google Ads Conversion Actions: What Pixel Tracker Sends",
    "description": "Google Ads tracks conversion actions, not standard events like Meta or TikTok. Here's what Pixel Tracker fires, and how it differs from your GA4 setup.",
    "h1": "Google Ads Conversion Actions: What Pixel Tracker Sends",
    "intro": [
      "Google Ads doesn't use the \"standard events\" idea that Meta and TikTok use, where a single pixel reports a fixed list of named actions like Purchase or Add to Cart. Instead, Google Ads tracks conversion actions: individual, separately configured tracking targets that each get their own conversion ID and label inside your Google Ads account. Understanding that difference matters if you're comparing Pixel Tracker's Google Ads connection to how it works for Meta or TikTok.",
      "It also matters because of a second, very common mix-up: confusing the Google Ads conversion tag with Google Analytics 4. They look similar, both use a version of Google's tag, but they are two separate tracking systems with separate IDs, and only one of them, the Google Ads conversion action, is what Pixel Tracker connects to for your ad account."
    ],
    "sections": [
      {
        "heading": "Conversion actions, not standard events",
        "paragraphs": [
          "In Meta or TikTok, Purchase and Add to Cart are fixed, pre-named events that any pixel can send once it's installed. Google Ads works differently: each conversion action, Purchase, Add to Cart, Begin Checkout, or anything else you want tracked, is created inside your Google Ads account first, with its own conversion ID and conversion label. Pixel Tracker's job is to fire the Google tag across your storefront and pass the purchase data to the conversion action you've set up, but the conversion action itself lives in Google Ads, not in a fixed Pixel Tracker event list."
        ]
      },
      {
        "heading": "The Google Ads conversion tag and GA4 are not the same tool",
        "paragraphs": [
          "Google Analytics 4 (GA4) and Google Ads conversion tracking are separate products with separate IDs, even though they share the same underlying gtag.js script and get confused constantly. GA4 is built for analytics and reporting across your whole site. The Google Ads conversion tag exists specifically to tell Google Ads which visits turned into sales, so it can optimize your campaigns and bidding. Pixel Tracker connects to the Google Ads conversion action, not your GA4 property, so a working GA4 setup doesn't automatically mean Google Ads conversion tracking is working too."
        ]
      },
      {
        "heading": "What Pixel Tracker's Google Ads connection fires",
        "paragraphs": [
          "You add your Google Ads conversion ID and conversion label to Pixel Tracker, and Pixel Tracker injects the Google tag storefront-wide through a Shopify ScriptTag, no theme code editing required. The primary action is firing the purchase conversion when a checkout completes, which is what most merchants care about for return-on-ad-spend reporting. If you want supporting conversion actions tracked, like Add to Cart or Begin Checkout, those still need to be created as separate conversion actions in your Google Ads account first, with their own IDs and labels."
        ]
      },
      {
        "heading": "Enhanced Conversions and why event accuracy matters",
        "paragraphs": [
          "Enhanced Conversions is a feature Google Ads offers directly, not something Pixel Tracker sets up, that sends hashed first-party customer data, like a shopper's email, alongside a conversion to improve how confidently Google can match it to an ad click. It's configured inside your Google Ads account, or through Google Tag Manager, separate from your Pixel Tracker connection. It's worth knowing about because it directly affects how well your purchase conversion action performs, even though Pixel Tracker itself doesn't manage it. See the [server-side tracking page](/pixel-tracker/google-ads/server-side) for more on what it does and doesn't cover."
        ]
      },
      {
        "heading": "Setting up additional conversion actions",
        "paragraphs": [
          "If you decide you want more than the purchase conversion tracked, say, Begin Checkout for remarketing signals, you'll create that new conversion action inside Google Ads, get its conversion label, and use it alongside your existing purchase tracking. Pixel Tracker fires the base tag that these conversion actions rely on, but each new action still has to be built on the Google Ads side."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "Does Pixel Tracker send standard events like Meta or TikTok does for Google Ads?",
        "a": "No. Google Ads doesn't have a fixed standard events list. It uses conversion actions that you, or your Google Ads account, define individually, each with its own conversion ID and label. Pixel Tracker fires the Google tag that feeds those actions, mainly the purchase conversion, rather than sending a preset roster of named events."
      },
      {
        "q": "What's the actual difference between GA4 and the Google Ads conversion tag?",
        "a": "GA4 is Google's analytics platform, tracking overall site behavior under its own property and measurement ID. The Google Ads conversion tag is a separate system tied to a conversion ID and label inside your Google Ads account, used specifically for ad optimization and bidding. Pixel Tracker connects to the Google Ads conversion action, not your GA4 property."
      },
      {
        "q": "Which conversion action does Pixel Tracker track automatically?",
        "a": "The purchase conversion is the main one, firing when a checkout completes. Any additional conversion actions, like Add to Cart or Begin Checkout, need to be created in your Google Ads account first, with their own conversion ID and label, before Pixel Tracker's tag can report to them."
      },
      {
        "q": "Do I need to build conversion actions myself in Google Ads?",
        "a": "Yes, for anything beyond the primary purchase conversion. Creating a conversion action, naming it, and getting its conversion label, is a Google Ads account setting, not something toggled from the Pixel Tracker dashboard."
      },
      {
        "q": "Are Enhanced Conversions the same thing as Pixel Tracker's tracking?",
        "a": "No. Enhanced Conversions is a Google Ads feature that sends hashed customer data to improve conversion matching, and it's configured directly in Google Ads or Google Tag Manager. Pixel Tracker doesn't set up or manage Enhanced Conversions."
      }
    ],
    "related": [
      {
        "label": "Google Ads troubleshooting",
        "href": "/pixel-tracker/google-ads/troubleshooting"
      },
      {
        "label": "Google Ads server-side tracking",
        "href": "/pixel-tracker/google-ads/server-side"
      },
      {
        "label": "Google Ads conversion tracking guide",
        "href": "/pixel-tracker/guides/google-ads-conversion-tracking"
      },
      {
        "label": "Multi-channel attribution guide",
        "href": "/pixel-tracker/guides/multi-channel-attribution"
      },
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      }
    ]
  },
  {
    "platformSlug": "google-ads",
    "actionSlug": "server-side",
    "platformName": "Google Ads",
    "pixelName": "Google Ads conversion tag",
    "badge": "Server-Side Tracking",
    "title": "Google Ads Server-Side Tracking: What's Actually Possible",
    "description": "Pixel Tracker doesn't offer Google Ads server-side tracking today. Here's what Enhanced Conversions actually does, and where server-side support does exist.",
    "h1": "Google Ads Server-Side Tracking: What's Actually Possible",
    "intro": [
      "Server-side tracking usually means sending conversion data to an ad platform directly from a server, bypassing the shopper's browser so ad blockers and cookie restrictions can't interrupt it. Meta has the Conversions API, TikTok has the Events API, and Pixel Tracker supports both. Google Ads doesn't have a direct equivalent that Pixel Tracker connects to, and it's important to be upfront about that rather than imply otherwise.",
      "Google Ads does have its own answer to signal loss, called Enhanced Conversions, but it's a Google feature configured through Google's own tools, not something Pixel Tracker sets up or manages. This page explains what that actually means, what Enhanced Conversions does and doesn't do, and what your realistic options are if you want stronger conversion data for Google Ads today."
    ],
    "sections": [
      {
        "heading": "Why there's no direct Google Ads server-side option through Pixel Tracker",
        "paragraphs": [
          "Pixel Tracker's Google Ads connection is a client-side tag: the Google tag (gtag.js) loads in the shopper's browser and reports the purchase conversion from there. That's different from Meta and TikTok, where Pixel Tracker also supports sending the same conversion server to server, through Facebook's Conversions API and TikTok's Events API, as a backup path that doesn't depend on the browser. Google Ads doesn't currently have a Pixel Tracker managed server-side path, and we'd rather say that plainly than describe something that doesn't exist."
        ]
      },
      {
        "heading": "What Enhanced Conversions actually is",
        "paragraphs": [
          "Enhanced Conversions is Google's own feature for improving conversion matching, not a Pixel Tracker feature. It works by sending hashed first-party customer data, most commonly a shopper's email address, alongside the standard conversion hit, so Google can match a sale back to an ad click even when browser-based tracking is incomplete. It's a real and useful feature, but it's set up and managed inside Google Ads, or via Google Tag Manager, separate from anything in the Pixel Tracker dashboard."
        ]
      },
      {
        "heading": "How Enhanced Conversions differs from true server-side tracking",
        "paragraphs": [
          "Server-side tracking, in the Meta and TikTok sense, sends the entire conversion event from a server, independent of whether the browser tag fired at all. Enhanced Conversions still relies on the browser-based Google tag firing as the base event, and layers additional hashed customer data on top of it to improve matching. It helps with signal quality, but it doesn't solve the same problem that a fully server-side connection solves, and it isn't something Pixel Tracker configures for you."
        ]
      },
      {
        "heading": "What you can actually do today",
        "paragraphs": [
          "If better Google Ads signal quality matters to your account, Enhanced Conversions is worth turning on directly inside Google Ads, under your conversion action settings, since it's a native Google feature and doesn't depend on Pixel Tracker. Beyond that, the most reliable lever you have through Pixel Tracker is making sure the client-side conversion tag is set up correctly and firing consistently. If server-side reliability is the priority for your ad spend, it's currently available through Pixel Tracker for Meta and TikTok, not Google Ads."
        ]
      },
      {
        "heading": "Where Pixel Tracker does support server-side tracking",
        "paragraphs": [
          "Today, Pixel Tracker's server-side tracking covers Meta, via Conversions API, and TikTok, via Events API, only. If your ad spend leans heavily on those two platforms, that's where a server-side connection will do the most for your data quality. The [server-side tracking guide](/pixel-tracker/guides/server-side-tracking) covers how that works in more detail and why it doesn't currently extend to Google Ads, Snapchat, Pinterest, LinkedIn, or X."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "Does Pixel Tracker support server-side tracking for Google Ads?",
        "a": "No, not today. Pixel Tracker's Google Ads connection is client-side only, firing the Google tag in the shopper's browser. Server-side tracking through Pixel Tracker is currently available for Meta and TikTok only."
      },
      {
        "q": "Is Enhanced Conversions the same as server-side tracking?",
        "a": "Not exactly. Enhanced Conversions is a Google Ads feature that adds hashed customer data on top of the existing browser-based tag to improve conversion matching. It still depends on the tag firing in the browser, unlike a true server-side connection that can send data independent of the browser."
      },
      {
        "q": "Can I set up Enhanced Conversions through Pixel Tracker?",
        "a": "No. Enhanced Conversions is configured directly inside Google Ads, or through Google Tag Manager, under your conversion action settings. Pixel Tracker doesn't set it up or manage it."
      },
      {
        "q": "Which platforms does Pixel Tracker support for server-side tracking?",
        "a": "Meta, through Facebook's Conversions API, and TikTok, through TikTok's Events API. Google Ads, Snapchat, Pinterest, LinkedIn, and X are not currently supported for server-side tracking through Pixel Tracker."
      },
      {
        "q": "Will Pixel Tracker add Google Ads server-side tracking later?",
        "a": "It's not currently supported. For now, if server-side reliability matters most to your account, that's available through Pixel Tracker for Meta and TikTok, and Google's own Enhanced Conversions feature is the closest native option for Google Ads."
      }
    ],
    "related": [
      {
        "label": "Meta Pixel server-side tracking",
        "href": "/pixel-tracker/meta-pixel/server-side"
      },
      {
        "label": "TikTok Pixel server-side tracking",
        "href": "/pixel-tracker/tiktok-pixel/server-side"
      },
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Google Ads troubleshooting",
        "href": "/pixel-tracker/google-ads/troubleshooting"
      },
      {
        "label": "Google Ads events Pixel Tracker tracks",
        "href": "/pixel-tracker/google-ads/events"
      }
    ]
  },
  {
    "platformSlug": "linkedin-pixel",
    "actionSlug": "troubleshooting",
    "platformName": "LinkedIn",
    "pixelName": "LinkedIn Insight Tag",
    "badge": "Troubleshooting",
    "title": "LinkedIn Insight Tag Not Firing on Shopify? Troubleshoot",
    "description": "LinkedIn Insight Tag showing no activity on your Shopify store? Fix Partner ID mismatches, conversion rule errors, and ad blocker issues step by step.",
    "h1": "LinkedIn Insight Tag Not Firing on Shopify? Troubleshoot",
    "intro": [
      "If you connected LinkedIn Insight Tag through Pixel Tracker and your Shopify store still shows no conversions in Campaign Manager, you're not imagining it. LinkedIn's reporting is slower and less forthcoming than Meta's or Google's, and the Insight Tag itself has fewer diagnostic signals built in, so a tag that's actually working fine can look broken for a day or two.",
      "This guide walks through the specific places things go wrong: mismatched Partner IDs, conversion rules that don't match real page behavior, ad blockers and consent tools quietly dropping the tag's request, and Campaign Manager's own reporting lag. If you haven't looked at what LinkedIn Insight Tag can and can't track yet, it's worth reading the [events page](/pixel-tracker/linkedin-pixel/events) first so you know what to expect before you start debugging."
    ],
    "sections": [
      {
        "heading": "Start With the Partner ID, Not the Pixel Tracker Dashboard",
        "paragraphs": [
          "LinkedIn Insight Tag is tied to a Partner ID, found in Campaign Manager under Account Assets > Insight Tag. If that ID doesn't match what's set up in your Pixel Tracker connection, the tag will load on your storefront but report to the wrong Insight Tag, or to nothing at all. Open Campaign Manager, confirm the exact Partner ID shown there, and cross-check it against what you entered when connecting LinkedIn in Pixel Tracker. This single mismatch is the most common reason merchants see zero activity for a tag they're sure is installed.",
          "Also check that you're looking at the right ad account. It's easy to have access to multiple Campaign Manager accounts, and to check tag status on one while the Insight Tag is actually registered under another."
        ]
      },
      {
        "heading": "Check the Tag Status Inside Campaign Manager",
        "paragraphs": [
          "Campaign Manager shows an Insight Tag status of active, inactive, or no activity detected. 'Inactive' right after setup usually just means LinkedIn hasn't seen a page load yet; visit your storefront a few times, wait a few minutes, and refresh the status. 'No activity detected' after 24 to 48 hours despite real traffic is the signal worth investigating, not a transient state to wait out.",
          "Keep in mind LinkedIn's reporting has more lag than Meta or Google Ads. It's normal for conversion counts to update slowly, sometimes a day behind actual traffic, so don't treat a quiet dashboard on day one as proof the tag is broken."
        ]
      },
      {
        "heading": "Use LinkedIn Insight Tag Helper to Confirm What's Firing",
        "paragraphs": [
          "LinkedIn Insight Tag Helper is a free browser extension built for exactly this problem: it inspects a live page and tells you whether the Insight Tag fired, which Partner ID it reported to, and whether any conversion events triggered. Install it, load your storefront and a couple of product pages in a fresh incognito window, and check what the extension actually sees. If it reports no tag found, the problem is upstream of LinkedIn's reporting, most likely the ScriptTag not loading or being blocked.",
          "If Insight Tag Helper does show the tag firing with the correct Partner ID but Campaign Manager still shows nothing, the issue is more likely reporting lag or a conversion rule that isn't matching real page behavior, not the tag installation itself."
        ]
      },
      {
        "heading": "Rule Out Ad Blockers and Consent Banners",
        "paragraphs": [
          "The Insight Tag loads a script from snap.licdn.com, a domain commonly targeted by ad blockers and privacy extensions. A tag that fires for you in a normal browser can be silently blocked for a meaningful share of visitors, especially in the EU where consent management platforms often gate LinkedIn's tag behind an opt-in that many visitors never grant. If your numbers look low rather than zero, this filtering is a more likely explanation than a broken installation.",
          "Also check whether your Shopify theme or another installed app strips third-party scripts, either through a content security policy or a script-blocking privacy app. These conflicts are easy to miss because they don't throw a visible error, the tag simply never loads."
        ]
      },
      {
        "heading": "Check the Conversion Rule Itself, Not Just the Tag",
        "paragraphs": [
          "LinkedIn separates the Insight Tag itself from the conversion rules built on top of it. It's entirely possible for the tag to fire correctly on every page while a specific conversion rule, say one tied to a checkout confirmation URL, never triggers because the URL pattern doesn't match how Shopify actually structures your order confirmation page. Open the conversion rule in Campaign Manager and check the exact URL or event condition against a real completed order.",
          "If you're relying on URL-based rules, test with a real checkout on your live store rather than assuming the pattern is correct. Shopify's checkout URLs vary by plan and by whether Shop Pay is involved, a common reason a rule that looked right on paper never fires in practice."
        ]
      }
    ],
    "steps": [
      {
        "title": "Match the Partner ID",
        "body": "Compare the Partner ID in Campaign Manager (Account Assets > Insight Tag) against what's configured in Pixel Tracker's LinkedIn connection. A mismatch here is the most common cause of zero activity."
      },
      {
        "title": "Check tag status in Campaign Manager",
        "body": "Look for active, inactive, or no activity detected. Give it 24 to 48 hours of real traffic before treating a quiet status as a problem."
      },
      {
        "title": "Install LinkedIn Insight Tag Helper",
        "body": "Load your storefront in incognito and confirm the extension sees the tag fire with the correct Partner ID."
      },
      {
        "title": "Test in a clean browser session",
        "body": "Ad blockers and consent tools frequently drop LinkedIn's script silently. Retest with extensions disabled and cookies accepted."
      },
      {
        "title": "Check for script conflicts",
        "body": "Confirm no privacy app, theme setting, or content security policy is stripping third-party scripts from your storefront."
      },
      {
        "title": "Verify the conversion rule's URL condition",
        "body": "Test against a real completed checkout, since Shopify's confirmation URL can vary by plan and by Shop Pay usage."
      },
      {
        "title": "Give Campaign Manager time to catch up",
        "body": "LinkedIn's reporting lags Meta and Google Ads. Wait a full 48 hours before concluding a correctly firing tag isn't working."
      }
    ],
    "symptoms": [
      "Insight Tag status shows 'no activity detected' days after setup",
      "Conversion rule stuck at zero despite real orders",
      "LinkedIn Insight Tag Helper reports no tag found on the page",
      "Matched audience size isn't growing",
      "Numbers look low compared to actual Shopify traffic",
      "Tag fires in testing but Campaign Manager stays empty"
    ],
    "faqs": [
      {
        "q": "Why does LinkedIn Campaign Manager show no activity even though Pixel Tracker says the Insight Tag is connected?",
        "a": "Most often it's a Partner ID mismatch, or Campaign Manager simply hasn't caught up yet. Confirm the Partner ID in Account Assets > Insight Tag matches your Pixel Tracker connection, then give it 24 to 48 hours before assuming something's broken."
      },
      {
        "q": "How do I check if the Insight Tag is actually loading on my Shopify store?",
        "a": "Install the LinkedIn Insight Tag Helper browser extension and load your storefront in an incognito window. It will show whether the tag fired and which Partner ID it reported to."
      },
      {
        "q": "Is it normal for LinkedIn's conversion numbers to lag behind Shopify's own order count?",
        "a": "Yes. LinkedIn's reporting is noticeably slower to update than Meta's or Google Ads', so a delay of a day or more between an order and it showing in Campaign Manager isn't unusual."
      },
      {
        "q": "Could an ad blocker be the reason my Insight Tag numbers look low?",
        "a": "It's a common cause. The tag loads from snap.licdn.com, a domain blocked by many ad blockers and, in the EU, often gated behind consent banners, so undercounting is more likely than a broken tag."
      },
      {
        "q": "My conversion rule never fires even though the tag is active. What's wrong?",
        "a": "Check the rule's URL or event condition against a real completed order. If you want to understand how LinkedIn's conversion rules differ from a full ecommerce event set, see the [events page](/pixel-tracker/linkedin-pixel/events)."
      }
    ],
    "related": [
      {
        "label": "LinkedIn Pixel overview",
        "href": "/pixel-tracker/linkedin-pixel"
      },
      {
        "label": "LinkedIn Insight Tag events explained",
        "href": "/pixel-tracker/linkedin-pixel/events"
      },
      {
        "label": "LinkedIn server-side tracking",
        "href": "/pixel-tracker/linkedin-pixel/server-side"
      },
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "Multi-channel attribution guide",
        "href": "/pixel-tracker/guides/multi-channel-attribution"
      },
      {
        "label": "Join the waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "linkedin-pixel",
    "actionSlug": "events",
    "platformName": "LinkedIn",
    "pixelName": "LinkedIn Insight Tag",
    "badge": "Events",
    "title": "LinkedIn Insight Tag Events on Shopify: What It Tracks",
    "description": "LinkedIn Insight Tag tracks conversions through URL-based rules, not Meta or TikTok style ecommerce events. Here's what it actually measures on Shopify.",
    "h1": "LinkedIn Insight Tag Events on Shopify: What It Tracks",
    "intro": [
      "LinkedIn Insight Tag doesn't work like Meta Pixel or TikTok's Events API. There's no built-in PageView, ViewContent, AddToCart, or Purchase event waiting to be mapped to your Shopify store. Instead, LinkedIn tracks activity through conversion rules you define yourself in Campaign Manager, each one tied to a specific URL pattern or a general page visit, not a rich taxonomy of ecommerce actions.",
      "That's not a limitation of Pixel Tracker's connection, it's how LinkedIn Insight Tag is built. LinkedIn's ad platform grew up around lead generation and B2B demand, where a form fill or a pricing page visit matters more than a granular shopping funnel, so the tag reflects that. This page explains exactly what you can track for a Shopify store, and where the ceiling is compared to platforms with a full ecommerce event set."
    ],
    "sections": [
      {
        "heading": "What LinkedIn Insight Tag Actually Tracks",
        "paragraphs": [
          "The Insight Tag itself does one thing everywhere it's installed: it records a page visit and adds the visitor to your matched audience pool. Everything beyond that, actual conversion tracking, happens through conversion rules layered on top in Campaign Manager. A conversion rule watches for a visitor reaching a specific URL, or in some cases a general page-load condition, and counts that as a conversion against whichever campaign is linked to it.",
          "There's no event parameter for order value, product ID, or cart contents built into the tag the way there is with Meta Pixel or TikTok's Events API. If you want to know that a $150 order happened rather than just that someone reached your thank-you page, LinkedIn's own tooling won't tell you that on its own."
        ]
      },
      {
        "heading": "Conversion Rules Instead of Ecommerce Events",
        "paragraphs": [
          "Where Meta gives you Purchase, AddToCart, and InitiateCheckout as distinct, parameterized events, LinkedIn gives you conversion rules built around URLs or, for some account types, specific on-page actions. For a Shopify store, the realistic setup is a rule tied to your order confirmation page URL, treated as a stand-in for 'purchase happened,' plus perhaps a second rule for a key page like a lead form if that matters to your business.",
          "This works fine for the basic question LinkedIn ads are usually judged on, did this campaign lead to a conversion, but it won't give you the same shape of data you'd export from Meta or TikTok. There's no clean AddToCart signal, no ViewContent-by-product breakdown, and no built-in way to see average order value per conversion inside Campaign Manager."
        ]
      },
      {
        "heading": "Why LinkedIn's Event Model Is Lighter Than Meta or TikTok's",
        "paragraphs": [
          "This isn't a gap Pixel Tracker or any third-party tool can fill in on LinkedIn's behalf, it reflects what LinkedIn built the Insight Tag for. LinkedIn's core advertising business is B2B lead generation and brand campaigns, not direct-to-consumer ecommerce, so the tag was designed around form submissions and key page visits rather than a shopping cart funnel. Snapchat, Pinterest, and TikTok all built pixels with commerce use cases in mind from early on; LinkedIn's Insight Tag wasn't.",
          "If you're used to Meta's event taxonomy or TikTok's Events API and expect the same depth from LinkedIn, it's worth resetting that expectation upfront rather than troubleshooting for a granularity that isn't there to find."
        ]
      },
      {
        "heading": "What This Means for Setting Up Conversion Rules on Shopify",
        "paragraphs": [
          "In practice, most Shopify merchants running LinkedIn ads end up with one or two conversion rules: an order confirmation URL rule standing in for purchases, and occasionally a rule for a specific landing page if LinkedIn is being used for something other than direct product sales, like B2B wholesale inquiries. Keep the URL pattern specific enough to only match real confirmed orders, since a rule that's too broad will overcount and one that's too narrow, missing a Shop Pay variant of the URL for instance, will undercount.",
          "If revenue-level detail matters to your reporting, you'll generally need to reconcile LinkedIn's conversion counts against your actual Shopify order data rather than expecting Campaign Manager to show it natively."
        ]
      },
      {
        "heading": "Debugging What's Actually Firing",
        "paragraphs": [
          "Because LinkedIn's own reporting in Campaign Manager can lag, the fastest way to confirm what the tag is doing in real time is LinkedIn Insight Tag Helper, a free browser extension that shows whether the tag fired on a given page and which Partner ID it reported to. It won't show you rich event payloads the way Meta's debugging tools do, because there aren't rich payloads to show, but it will confirm the tag itself is alive and reporting."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "Does LinkedIn Insight Tag track AddToCart or Purchase events like Meta Pixel?",
        "a": "No. LinkedIn doesn't have a built-in ecommerce event set. Instead you build conversion rules tied to URLs, typically an order confirmation page standing in for a purchase."
      },
      {
        "q": "Can I track product-level data with LinkedIn Insight Tag?",
        "a": "Not natively. The tag and its conversion rules work at the page or URL level, not the product or cart-contents level, so product-level detail has to come from reconciling against your own Shopify order data."
      },
      {
        "q": "Why does LinkedIn's event model feel so much lighter than Meta or TikTok's?",
        "a": "LinkedIn built the Insight Tag around lead generation and B2B conversions, not ecommerce, so it was never designed with a shopping funnel in mind the way Meta Pixel or TikTok's Events API were."
      },
      {
        "q": "What's the best conversion rule setup for a Shopify store on LinkedIn?",
        "a": "Most stores use a URL-based rule tied to the order confirmation page as a stand-in for purchases, testing it against a real completed checkout to make sure the pattern actually matches."
      },
      {
        "q": "How do I check whether Insight Tag is actually reporting on my store?",
        "a": "Use LinkedIn Insight Tag Helper in an incognito browser window, or see the [troubleshooting guide](/pixel-tracker/linkedin-pixel/troubleshooting) if Campaign Manager shows no activity despite real traffic."
      }
    ],
    "related": [
      {
        "label": "LinkedIn Pixel overview",
        "href": "/pixel-tracker/linkedin-pixel"
      },
      {
        "label": "LinkedIn Insight Tag troubleshooting",
        "href": "/pixel-tracker/linkedin-pixel/troubleshooting"
      },
      {
        "label": "LinkedIn server-side tracking",
        "href": "/pixel-tracker/linkedin-pixel/server-side"
      },
      {
        "label": "Multi-channel attribution guide",
        "href": "/pixel-tracker/guides/multi-channel-attribution"
      },
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "Join the waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "linkedin-pixel",
    "actionSlug": "server-side",
    "platformName": "LinkedIn",
    "pixelName": "LinkedIn Insight Tag",
    "badge": "Server-Side Tracking",
    "title": "LinkedIn Server-Side Tracking on Shopify: The Real Story",
    "description": "Pixel Tracker doesn't support LinkedIn server-side tracking. Here's why it's lower priority than Meta and TikTok, and what Shopify merchants can do instead.",
    "h1": "LinkedIn Server-Side Tracking on Shopify: The Real Story",
    "intro": [
      "Pixel Tracker's LinkedIn connection is client-side only: the Insight Tag runs in the visitor's browser, the same way it would if you'd pasted LinkedIn's own script into your theme. There's no server-side or Conversions API equivalent for LinkedIn in Pixel Tracker today, and this page is here to be upfront about that rather than let you assume it works the same way Meta or TikTok does.",
      "If you came here expecting a LinkedIn version of Meta's Conversions API, the short answer is that LinkedIn doesn't really have one in the same sense, and Pixel Tracker doesn't build server-side support for platforms that don't have a solid one to build on. Below is what server-side tracking would actually solve for LinkedIn, why it's a lower priority than Meta or TikTok for most Shopify stores, and what your realistic options are right now."
    ],
    "sections": [
      {
        "heading": "What Pixel Tracker Supports for LinkedIn Today",
        "paragraphs": [
          "Pixel Tracker connects the LinkedIn Insight Tag as a browser-based pixel, injected via Shopify ScriptTags without any theme code editing, the same mechanism used for Meta, TikTok, Snapchat, Pinterest, Google Ads, and X. It fires page visits and whatever conversion rules you've set up in Campaign Manager. That's the full extent of the LinkedIn integration: client-side tracking, subject to the same browser-level limitations as any pixel, ad blockers, cookie restrictions, and third-party tracking prevention in browsers like Safari.",
          "Server-side tracking for Facebook Conversions API and TikTok Events API is available in Pixel Tracker today. LinkedIn isn't part of that, and there's no timeline to add it."
        ]
      },
      {
        "heading": "What Server-Side Tracking Would Actually Mean for LinkedIn",
        "paragraphs": [
          "Server-side tracking sends conversion data directly from Shopify's servers to the ad platform, bypassing the browser entirely, so it isn't affected by ad blockers, Safari's tracking prevention, or a visitor's cookie choices. For Meta and TikTok, that means capturing orders that the browser-side pixel misses. Applied to LinkedIn, it would mean conversion rule data that doesn't erode over time as more visitors block third-party scripts or reject consent banners, today one of the more common causes of undercounted LinkedIn conversions.",
          "But LinkedIn's own server-side tooling isn't built out the way Meta's or TikTok's is. There's no single, standardized, widely adopted server-to-server option for ecommerce conversions on LinkedIn's side the way there is for the other two, so there's a real limit to what any third-party tool, including Pixel Tracker, could offer here even if it tried."
        ]
      },
      {
        "heading": "Why LinkedIn Is a Lower Priority for Server-Side Support",
        "paragraphs": [
          "For most Shopify stores, LinkedIn is a smaller slice of paid ad spend than Meta, TikTok, or Google. It's a strong channel for B2B, recruiting, and account-based marketing, but for direct-to-consumer ecommerce it typically sits well behind the platforms people actually buy sneakers, skincare, and home goods through. That's the practical reason Pixel Tracker built server-side support for Facebook and TikTok first: those are the two platforms where undercounted conversions most directly cost Shopify merchants money on their largest ad budgets.",
          "If LinkedIn is a meaningful ad channel for your store specifically, perhaps you're B2B, wholesale, or running account-based campaigns, this priority order won't match your situation as well. That's a fair complaint, and it's exactly why we're upfront about what's supported today rather than implying LinkedIn server-side tracking is on the way."
        ]
      },
      {
        "heading": "Your Realistic Options Right Now",
        "paragraphs": [
          "If undercounting on LinkedIn is hurting your reporting, the first lever to pull is reducing what's already being lost client-side: tighten your conversion rule's URL pattern so it reliably matches real orders, keep LinkedIn Insight Tag Helper handy to spot-check that the tag fires correctly, and treat Campaign Manager's numbers as a directional signal rather than a source of truth for revenue. Reconciling LinkedIn's conversion count against your actual Shopify order data periodically is the most reliable way to know how much you're losing to ad blockers and browser restrictions.",
          "For the ad platforms where undercounting has the biggest financial impact, Facebook and TikTok, Pixel Tracker's server-side tracking is the better investment of your setup time. See how it works for those two in the [server-side tracking guide](/pixel-tracker/guides/server-side-tracking)."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "Does Pixel Tracker support server-side tracking for LinkedIn?",
        "a": "No. Pixel Tracker's LinkedIn connection is client-side only, the Insight Tag running in the browser. Server-side tracking is currently available for Facebook Conversions API and TikTok Events API, not LinkedIn."
      },
      {
        "q": "Does LinkedIn have its own version of Meta's Conversions API?",
        "a": "Not in any standardized, widely adopted sense. LinkedIn's own server-side and offline conversion options exist in limited forms, but they're not comparable in scope or adoption to Meta's or TikTok's server-side APIs."
      },
      {
        "q": "Why did Pixel Tracker add server-side tracking for Meta and TikTok but not LinkedIn?",
        "a": "Meta and TikTok are typically the largest ecommerce ad channels for Shopify stores, and undercounting there has the biggest revenue impact. LinkedIn is usually a smaller slice of direct-to-consumer ad spend, and its own server-side tooling isn't built out the same way."
      },
      {
        "q": "Will LinkedIn server-side tracking be added to Pixel Tracker later?",
        "a": "There's no timeline for it. If LinkedIn is a major channel for your store, [Facebook](/pixel-tracker/meta-pixel/server-side) and TikTok server-side tracking are the options available today."
      },
      {
        "q": "What can I do to reduce undercounting on LinkedIn without server-side tracking?",
        "a": "Tighten your conversion rule's URL pattern, confirm the tag fires correctly with LinkedIn Insight Tag Helper, and periodically reconcile Campaign Manager's conversion counts against your actual Shopify orders to gauge how much is being lost client-side."
      }
    ],
    "related": [
      {
        "label": "Meta Pixel server-side tracking",
        "href": "/pixel-tracker/meta-pixel/server-side"
      },
      {
        "label": "TikTok Pixel server-side tracking",
        "href": "/pixel-tracker/tiktok-pixel/server-side"
      },
      {
        "label": "LinkedIn Pixel overview",
        "href": "/pixel-tracker/linkedin-pixel"
      },
      {
        "label": "LinkedIn Insight Tag events",
        "href": "/pixel-tracker/linkedin-pixel/events"
      },
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Join the waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "meta-pixel",
    "actionSlug": "troubleshooting",
    "platformName": "Meta / Facebook",
    "pixelName": "Meta Pixel",
    "badge": "Troubleshooting",
    "title": "Meta Pixel Not Firing on Shopify: Troubleshooting Guide",
    "description": "See why your Meta Pixel shows no data on Shopify, from ad blockers to duplicate pixels to missing Purchase events, and how to fix each cause.",
    "h1": "Meta Pixel Not Firing on Shopify: Troubleshooting Guide",
    "intro": [
      "If Meta Pixel looks connected in Pixel Tracker but Events Manager stays quiet, or Ads Manager reports far fewer conversions than you know you're getting, something in the chain between your Shopify storefront and Meta is being blocked, duplicated, or simply never tested correctly. Before assuming the integration is broken, it helps to check each link in that chain in order.",
      "This guide walks through the most common reasons Meta Pixel appears to stop working on a Shopify store, using Meta Pixel Helper and the Test Events tool in Events Manager to actually see what's happening rather than guessing from Ads Manager totals, which can lag by a day or more."
    ],
    "sections": [
      {
        "heading": "Read what Meta Pixel Helper is actually telling you",
        "paragraphs": [
          "Install the Meta Pixel Helper browser extension and open your storefront, ideally a product page rather than the homepage, since some themes exclude certain templates from Pixel Tracker's script injection. A grey icon with no number usually means the pixel script never loaded on that page at all. A pixel ID with a warning triangle next to it means the pixel is present but something about the event itself, like a missing parameter, is off. These are two very different problems, so don't reinstall anything until you know which one you're dealing with."
        ]
      },
      {
        "heading": "Ad blockers and Safari's tracking prevention",
        "paragraphs": [
          "Browser extensions like uBlock Origin, Ghostery, and Brave's built-in shields block requests to connect.facebook.net by default, which stops the pixel from firing before Pixel Helper even gets a chance to detect it. Safari's Intelligent Tracking Prevention behaves similarly on repeat visits. Always test in a plain browser window with extensions disabled, or a fresh browser profile, before concluding that Pixel Tracker itself isn't working."
        ]
      },
      {
        "heading": "A second pixel firing on the same page",
        "paragraphs": [
          "If your store previously had a pixel added by hand in theme.liquid, through a different app, or via Meta's own Facebook & Instagram sales channel, that older pixel can keep firing alongside Pixel Tracker without anyone noticing. Pixel Helper will flag this as a duplicate PageView or duplicate Purchase event, and Ads Manager numbers can look inflated or oddly split between two pixel IDs. Search your theme code for a leftover fbq('init'... snippet and check whether the sales channel still has its own pixel connected."
        ]
      },
      {
        "heading": "Cookie consent banners holding the script back",
        "paragraphs": [
          "Many Shopify consent management apps block all third-party scripts, Pixel Tracker's included, until a shopper actively accepts cookies. If you're testing the pixel yourself and clicking through the banner without accepting it, no events will fire at all, which looks identical to a broken integration. Confirm your consent tool's settings and accept the banner yourself before treating this as a bug."
        ]
      },
      {
        "heading": "The order confirmation page behaves differently",
        "paragraphs": [
          "Shopify's checkout and order status pages run under different rules than the rest of your storefront, so a Purchase event doesn't always behave exactly like PageView or AddToCart on product and cart pages. If everything upstream is firing correctly but Purchase never shows up, check how the order confirmation page specifically is set up rather than assuming the whole pixel is broken. The [Facebook pixel setup guide](/pixel-tracker/guides/facebook-pixel-setup) walks through where each event is expected to fire."
        ]
      }
    ],
    "steps": [
      {
        "title": "Confirm the pixel ID matches",
        "body": "In Pixel Tracker's dashboard, check that the Meta Pixel ID connected to your store is character-for-character the same one shown in Events Manager. A typo here is more common than it sounds."
      },
      {
        "title": "Run Meta Pixel Helper on a real storefront page",
        "body": "Visit a product page and an actual cart, not just the homepage, and note whether PageView and ViewContent register at all before digging further."
      },
      {
        "title": "Test with extensions and blockers disabled",
        "body": "Open an incognito window with extensions off, or a clean browser profile, to rule out ad blockers and privacy tools before assuming Pixel Tracker is at fault."
      },
      {
        "title": "Look for a second pixel on the page",
        "body": "Check your theme code and the Facebook & Instagram sales channel for a leftover or duplicate pixel that could be firing alongside Pixel Tracker."
      },
      {
        "title": "Check your cookie consent settings",
        "body": "Accept your store's consent banner yourself during testing, since many consent apps hold all third-party scripts until a shopper opts in."
      },
      {
        "title": "Open Test Events in Events Manager",
        "body": "Browse your store in one tab while watching the Test Events tool in another. Events should appear within a few seconds of the action that triggers them."
      },
      {
        "title": "Test the order confirmation page separately",
        "body": "Place a real or test order and check whether Purchase fires there specifically, since checkout pages are handled differently than the rest of the storefront."
      }
    ],
    "symptoms": [
      "Pixel Helper shows no pixel detected on the storefront",
      "Events Manager shows no activity in the last 48 hours",
      "PageView fires but AddToCart or Purchase never shows up",
      "Pixel Helper flags a duplicate PageView or Purchase event",
      "Ads Manager reports far fewer conversions than actual sales",
      "The Test Events tool shows nothing while browsing the store",
      "Two different pixel IDs are firing on the same page"
    ],
    "faqs": [
      {
        "q": "Why does Meta Pixel Helper say no pixel found on my Shopify store?",
        "a": "Most often the script hasn't loaded on that particular page template, or an ad blocker stripped it before Pixel Helper could scan it. Reload without browser extensions and check a product or cart page rather than only the homepage."
      },
      {
        "q": "Why do I see duplicate events in Pixel Helper?",
        "a": "This almost always means two sources are firing the same pixel ID at once, usually a manually added pixel snippet left over from before Pixel Tracker, or Meta's own sales channel still connected. Remove the older source and keep just one."
      },
      {
        "q": "How long should I wait before treating missing data as a bug?",
        "a": "Events Manager itself usually updates within minutes, but Ads Manager reporting can take 24 to 48 hours to fully settle. Use the Test Events tool for immediate feedback instead of watching Ads Manager totals."
      },
      {
        "q": "Does an ad blocker really stop the pixel from working?",
        "a": "Yes. Tools like uBlock Origin and Brave's built-in shields block requests to connect.facebook.net by default, and Safari's tracking prevention limits things further on repeat visits. Always test in a clean browser before assuming the setup itself is broken."
      },
      {
        "q": "Why isn't the Purchase event showing up even though everything else works?",
        "a": "Shopify's checkout and order status pages follow different rules than product and cart pages, so it's worth checking the order confirmation setup on its own. See the [server-side tracking](/pixel-tracker/meta-pixel/server-side) page if you'd rather send Purchase events independently of what happens in the shopper's browser."
      }
    ],
    "related": [
      {
        "label": "Meta Pixel for Shopify overview",
        "href": "/pixel-tracker/meta-pixel"
      },
      {
        "label": "Meta Pixel event reference",
        "href": "/pixel-tracker/meta-pixel/events"
      },
      {
        "label": "Meta Conversions API setup",
        "href": "/pixel-tracker/meta-pixel/server-side"
      },
      {
        "label": "Facebook pixel setup guide",
        "href": "/pixel-tracker/guides/facebook-pixel-setup"
      },
      {
        "label": "Pixel tracking calculator",
        "href": "/tools/pixel-tracking-calculator"
      },
      {
        "label": "Join the waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "meta-pixel",
    "actionSlug": "events",
    "platformName": "Meta / Facebook",
    "pixelName": "Meta Pixel",
    "badge": "Events",
    "title": "Meta Pixel Events on Shopify: PageView to Purchase",
    "description": "A plain-English guide to the Meta Pixel events Pixel Tracker sends from your Shopify store, what each one means, and why Purchase matters most.",
    "h1": "Meta Pixel Events on Shopify: PageView to Purchase",
    "intro": [
      "Pixel Tracker sends Meta's standard e-commerce events from your Shopify store the moment it's connected: PageView, ViewContent, AddToCart, InitiateCheckout, and Purchase, without you touching theme.liquid or adding a single line of code. Each one maps to a specific shopper action, and together they're what Meta's ad system uses to build audiences and decide who to show your ads to.",
      "This page breaks down what each event actually captures, what data goes with it, and why sticking to Meta's own standard events, rather than inventing custom ones, matters for how well your campaigns perform."
    ],
    "sections": [
      {
        "heading": "PageView: the event everything else builds on",
        "paragraphs": [
          "PageView fires on every page a shopper visits and is the foundation for basic retargeting audiences, like anyone who visited the store in the last 30 days. It's usually the first thing to check when something seems off, since if PageView isn't firing, nothing downstream will be either."
        ]
      },
      {
        "heading": "ViewContent: matching products to your Meta catalog",
        "paragraphs": [
          "ViewContent fires on product pages and carries parameters like content_ids, content_type, value, and currency. For these to be useful for dynamic product ads, the content_ids need to match the product IDs in your connected Meta catalog exactly, and the value needs to reflect the actual product price. A mismatch here doesn't break the pixel, but it does mean Meta can't show the right product back to a shopper in a retargeting ad."
        ]
      },
      {
        "heading": "AddToCart and InitiateCheckout: catching intent early",
        "paragraphs": [
          "These two events sit between browsing and buying, and they're what most cart-abandonment and mid-funnel retargeting campaigns are built on. AddToCart should fire from the actual add-to-cart action on product and collection pages, including quick-add buttons some themes use, and InitiateCheckout should fire once when the shopper moves from cart to checkout, not again on every checkout step."
        ]
      },
      {
        "heading": "Purchase: the event Meta's algorithm optimizes toward",
        "paragraphs": [
          "Purchase is the event most ad campaigns are actually optimized for, and it needs to carry an accurate value and currency for Meta to judge whether your ads are profitable. This is also the event most affected by iOS tracking limitations and ad blockers on the browser side alone, which is one reason pairing it with server-side delivery through Conversions API tends to recover data the browser pixel misses on its own."
        ]
      },
      {
        "heading": "Why Pixel Tracker sticks to Meta's standard events",
        "paragraphs": [
          "Meta's algorithm, lookalike audiences, and dynamic ads are all built around a fixed set of standard events rather than arbitrary custom ones. Sending PageView, ViewContent, AddToCart, InitiateCheckout, and Purchase in the format Meta expects means your data plugs directly into features like Advantage+ campaigns without extra mapping work on your end."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "What events does Pixel Tracker send to Meta from my Shopify store?",
        "a": "PageView on every page, ViewContent on product pages, AddToCart when a shopper adds an item to their cart, InitiateCheckout once they move from cart to checkout, and Purchase on a completed order, each one carrying the standard parameters Meta expects to see for that event type."
      },
      {
        "q": "Do I need to configure these events manually in Events Manager?",
        "a": "No. Pixel Tracker sends them automatically as soon as your Meta Pixel is connected, without any manual setup in Events Manager. Events Manager is still useful for viewing and debugging what's arriving, but you don't need to build the events yourself."
      },
      {
        "q": "What's the practical difference between ViewContent and AddToCart?",
        "a": "ViewContent tells Meta a shopper looked at a specific product, which is useful for building retargeting audiences around browsing behavior. AddToCart signals stronger buying intent and is what most abandoned-cart ad campaigns are targeted against, since it means the shopper took an actual action rather than just looking."
      },
      {
        "q": "Why does the Purchase event matter more than the others?",
        "a": "It's the event most ad campaigns are optimized toward, and its value and currency data feed directly into how Meta judges return on ad spend. Our [ROAS calculation guide](/pixel-tracker/guides/roas-calculation) explains how that value data turns into a return figure you can act on."
      },
      {
        "q": "Can Pixel Tracker send custom events beyond the standard five?",
        "a": "Pixel Tracker focuses on Meta's recognized standard e-commerce events rather than custom ones, since those are what Meta's targeting, optimization, and dynamic ad tools are actually built around and understand automatically."
      }
    ],
    "related": [
      {
        "label": "Meta Pixel for Shopify overview",
        "href": "/pixel-tracker/meta-pixel"
      },
      {
        "label": "Meta Pixel troubleshooting",
        "href": "/pixel-tracker/meta-pixel/troubleshooting"
      },
      {
        "label": "Meta Conversions API setup",
        "href": "/pixel-tracker/meta-pixel/server-side"
      },
      {
        "label": "ROAS calculation guide",
        "href": "/pixel-tracker/guides/roas-calculation"
      },
      {
        "label": "Multi-channel attribution guide",
        "href": "/pixel-tracker/guides/multi-channel-attribution"
      },
      {
        "label": "Join the waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "meta-pixel",
    "actionSlug": "server-side",
    "platformName": "Meta / Facebook",
    "pixelName": "Meta Pixel",
    "badge": "Server-Side Tracking",
    "title": "Meta Conversions API Setup for Shopify Merchants",
    "description": "How to connect Meta's Conversions API to Pixel Tracker on Shopify, get your access token from Events Manager, and avoid duplicate events.",
    "h1": "Meta Conversions API Setup for Shopify Merchants",
    "intro": [
      "Browser-based Meta Pixel tracking alone tends to undercount conversions today, thanks to ad blockers, Safari's tracking prevention, and shoppers who simply close the tab before a script fully loads. Meta's Conversions API, or CAPI, fixes part of that by sending the same events directly from a server instead of relying only on the shopper's browser, and Pixel Tracker supports it for Facebook alongside the standard pixel.",
      "Setting it up takes a token from Events Manager and a few minutes in Pixel Tracker's dashboard. This guide covers where to find that token, how event_id deduplication keeps a single sale from being counted twice, and how to check whether it's actually improving your match quality."
    ],
    "sections": [
      {
        "heading": "Why the browser pixel alone isn't enough anymore",
        "paragraphs": [
          "Ad blockers, privacy-focused browsers, and Safari's Intelligent Tracking Prevention all interfere with pixel requests before they ever reach Meta, and none of that is something a Shopify store owner can control from their side. Conversions API sends the same event from your server, which isn't affected by what's installed in a shopper's browser, so it fills in gaps the pixel alone will always have."
        ]
      },
      {
        "heading": "Getting a Conversions API access token from Events Manager",
        "paragraphs": [
          "In business.facebook.com, open Events Manager, select the pixel connected to your store, and go to Settings. Under the Conversions API section, generate an access token and copy it. Paste that token into Pixel Tracker's dashboard under the same Meta Pixel connection, save it, and server-side delivery starts working alongside your existing browser pixel."
        ]
      },
      {
        "heading": "How event_id deduplication prevents double counting",
        "paragraphs": [
          "When both the browser pixel and Conversions API send an event like Purchase for the same order, Meta needs a way to know it's one sale, not two. Pixel Tracker assigns a matching event_id to both the browser and server versions of the same event, and Meta uses that shared ID, along with the event name and a short time window, to deduplicate them automatically. Without matching event_ids, the same purchase can show up twice in your reporting."
        ]
      },
      {
        "heading": "Checking match quality after you turn it on",
        "paragraphs": [
          "Events Manager's Diagnostics and Overview tabs show a match quality score for each event, based on how much customer information, like email or phone, was hashed and passed along with it. It's normal for this score to take a few days to stabilize after you add Conversions API, so check back after your store has processed a reasonable number of orders rather than judging it from the first sale."
        ]
      },
      {
        "heading": "What server-side tracking doesn't fix",
        "paragraphs": [
          "Conversions API improves match rates for events that already have some customer data attached, but it doesn't recover a visitor's activity if they never gave the underlying consent for tracking in the first place, and it isn't a substitute for properly configuring your cookie consent tool. It's also worth knowing that Pixel Tracker's server-side support currently covers Facebook Conversions API and TikTok's Events API, not the other platforms it connects on the browser side."
        ]
      }
    ],
    "steps": [
      {
        "title": "Open Events Manager for your Meta Pixel",
        "body": "Go to business.facebook.com, select the pixel connected to your Shopify store, and open its Settings tab."
      },
      {
        "title": "Generate a Conversions API access token",
        "body": "Under the Conversions API section of Settings, generate a new access token and copy it somewhere safe."
      },
      {
        "title": "Add the token to Pixel Tracker",
        "body": "Paste the token into Pixel Tracker's dashboard under your Meta Pixel connection and save the change."
      },
      {
        "title": "Send a test event and confirm it in Test Events",
        "body": "Trigger a test action on your store and check the Test Events tool in Events Manager for both the browser and server versions of the event."
      },
      {
        "title": "Review match quality after a few days",
        "body": "Come back to the Diagnostics or Overview tab in Events Manager once your store has processed several orders to see whether match quality improved."
      }
    ],
    "symptoms": [],
    "faqs": [
      {
        "q": "Where do I get a Conversions API access token for my Meta Pixel?",
        "a": "In business.facebook.com, open Events Manager, select your pixel, go to Settings, and generate the token under the Conversions API section. Paste it into Pixel Tracker's dashboard for that same pixel connection."
      },
      {
        "q": "Does turning on Conversions API mean I can remove the browser pixel?",
        "a": "No, they're meant to work together. The browser pixel still captures rich on-site behavior, while Conversions API fills in events the browser missed. Removing the browser pixel would actually reduce the data Meta has to work with."
      },
      {
        "q": "Will I get duplicate Purchase events after adding Conversions API?",
        "a": "Not if event_id deduplication is working correctly. Pixel Tracker sends a matching event_id with both the browser and server copies of the same event, and Meta uses that to treat them as one event rather than two."
      },
      {
        "q": "Does Pixel Tracker support server-side tracking for platforms other than Meta?",
        "a": "Server-side support currently covers Facebook Conversions API and TikTok's Events API. Google Ads, Snapchat, Pinterest, LinkedIn, and X are tracked through the browser pixel only, not server-side."
      },
      {
        "q": "How do I know if match quality actually improved after setup?",
        "a": "Check the Diagnostics or Overview tab in Events Manager a few days after enabling Conversions API, once your store has processed a normal run of orders. See the [server-side tracking guide](/pixel-tracker/guides/server-side-tracking) for a deeper walkthrough of what the score means."
      }
    ],
    "related": [
      {
        "label": "Meta Pixel for Shopify overview",
        "href": "/pixel-tracker/meta-pixel"
      },
      {
        "label": "Meta Pixel troubleshooting",
        "href": "/pixel-tracker/meta-pixel/troubleshooting"
      },
      {
        "label": "Meta Pixel event reference",
        "href": "/pixel-tracker/meta-pixel/events"
      },
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Compare Pixel Tracker",
        "href": "/compare"
      },
      {
        "label": "Join the waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "pinterest-pixel",
    "actionSlug": "troubleshooting",
    "platformName": "Pinterest",
    "pixelName": "Pinterest Tag",
    "badge": "Troubleshooting",
    "title": "Pinterest Tag Not Firing on Shopify: Troubleshooting Guide",
    "description": "Pinterest Tag connected but Ads Manager shows no data? Diagnose duplicate tags, ad blockers, and event gaps on your Shopify store step by step.",
    "h1": "Pinterest Tag Not Firing on Shopify: Troubleshooting Guide",
    "intro": [
      "Your Pixel Tracker dashboard says the Pinterest Tag is connected, but Pinterest Ads Manager still shows zero events, or the numbers look wrong. That gap between \"connected\" and \"actually receiving data\" is the most common support question for any Shopify pixel, and Pinterest has a few quirks that make it worse than most.",
      "This guide walks through the checks in order, starting with the fastest ones. Most Pinterest Tag problems on Shopify come down to duplicate tags, ad blockers, or simply not waiting long enough for Pinterest's Conversions dashboard to catch up. If you haven't confirmed which events Pixel Tracker sends yet, start with the [Pinterest event reference](/pixel-tracker/pinterest-pixel/events) so you know what you're looking for."
    ],
    "sections": [
      {
        "heading": "Why \"Connected\" in Pixel Tracker Doesn't Mean Pinterest Is Receiving Data",
        "paragraphs": [
          "Pixel Tracker's dashboard confirms that the Pinterest Tag was successfully injected into your storefront via a Shopify ScriptTag, that's a statement about your store, not about Pinterest. Pinterest Ads Manager is the only place that confirms the tag actually reached Pinterest's servers and was matched to your ad account.",
          "When the two disagree, the ScriptTag connection is almost never the problem. It's usually something happening in the browser between the tag loading and the event reaching Pinterest, an ad blocker, a consent banner, or a duplicate tag competing for the same event."
        ]
      },
      {
        "heading": "Duplicate Tags Are the Most Common Cause of Bad Numbers",
        "paragraphs": [
          "Shopify stores accumulate tracking code over time. A Pinterest Tag added years ago through theme.liquid, a Google Tag Manager container nobody remembers installing, or a previous pixel app that was never fully removed can all leave a second Pinterest Tag firing alongside Pixel Tracker's.",
          "Two tags don't cancel out, they double count. If your conversion numbers look suspiciously close to twice what you'd expect from actual orders, this is the first thing to check, not a Pixel Tracker configuration issue."
        ]
      },
      {
        "heading": "Ad Blockers and Consent Banners Can Silently Block pintrk",
        "paragraphs": [
          "Pinterest's tracking script runs as pintrk() calls in the browser, and it's a named target for most ad blockers and privacy extensions. If your own test traffic uses an ad blocker, you'll see nothing even when the tag is set up perfectly.",
          "Cookie consent tools that block scripts until a visitor accepts tracking cookies will also delay or suppress the tag for anyone who hasn't consented yet, which is expected behavior in a GDPR or CCPA-compliant setup, not a bug."
        ]
      },
      {
        "heading": "When Some Events Fire but Others Don't",
        "paragraphs": [
          "If Pinterest Tag Helper shows page_visit firing on every page but add_to_cart or checkout never appears, the base tag is working and the problem is specific to those triggers. Custom cart drawers, AJAX-based add-to-cart buttons, and heavily customized checkout flows can all prevent an event trigger from running the way a standard Shopify theme would.",
          "Check whether the missing event corresponds to a customized part of your theme. If add_to_cart never fires, test with your theme's default cart button rather than a custom quick-add widget first."
        ]
      },
      {
        "heading": "Pixel Tracker vs Pinterest Ads Manager: Who to Check First",
        "paragraphs": [
          "Use Pixel Tracker to confirm the tag is connected and which events are configured. Use Pinterest Ads Manager's Conversions dashboard, alongside Tag Helper for real-time checks, to confirm Pinterest is actually receiving and matching that data. Most \"it's not working\" reports turn out to be one of the two working fine while the other hasn't been checked yet."
        ]
      }
    ],
    "steps": [
      {
        "title": "Check the connection status in Pixel Tracker",
        "body": "Open your Pixel Tracker dashboard and confirm the Pinterest platform shows as connected with the correct store domain. If it shows disconnected or pending, the ScriptTag may not have been injected yet, reconnect it before doing anything else."
      },
      {
        "title": "Look for a duplicate Pinterest Tag",
        "body": "If you or a previous developer ever added the Pinterest Tag manually through theme.liquid, Google Tag Manager, or another pixel app, you now have two tags firing on every page. This is the single biggest cause of inflated Pinterest numbers on Shopify, so check your theme code and any other tracking apps before assuming Pixel Tracker is at fault."
      },
      {
        "title": "Confirm the Tag ID matches Pinterest Ads Manager",
        "body": "In Pinterest Ads Manager, go to Ads, then Conversions, then Pinterest tag, and copy the exact Tag ID. Compare it to what's saved in Pixel Tracker. A mismatched or outdated Tag ID from a previous ad account is a common reason data never arrives."
      },
      {
        "title": "Install Pinterest Tag Helper and reload the page",
        "body": "The Pinterest Tag Helper browser extension shows exactly which events fired on the page you're viewing, in real time. If it reports no tag, the ScriptTag isn't loading, if it shows the tag but no events, the problem is with individual event triggers, not the base connection."
      },
      {
        "title": "Rule out ad blockers and cookie consent tools",
        "body": "Ad blockers and privacy extensions block pintrk requests by default, and cookie consent banners that wait for opt-in before loading scripts will delay or block the tag entirely. Test in an incognito window with extensions disabled before concluding anything is broken."
      },
      {
        "title": "Give Pinterest's Conversions dashboard time to catch up",
        "body": "Pinterest's own reporting can lag behind real-time firing by a few hours. If Tag Helper confirms events are firing correctly, don't assume something is wrong just because Ads Manager hasn't updated yet."
      },
      {
        "title": "Test on the live storefront domain, not a preview link",
        "body": "Password-protected stores and unpublished theme previews can behave differently than your live domain. Always do a final check on the actual storefront URL customers use."
      }
    ],
    "symptoms": [
      "Pinterest Tag Helper reports \"no tag found\" on your storefront",
      "Ads Manager's Conversions dashboard shows zero events after setup",
      "page_visit fires but add_to_cart or checkout never appears",
      "Conversion counts look roughly double what you'd expect",
      "Pixel Tracker shows \"connected\" but Pinterest shows nothing",
      "Events show up on desktop but not on mobile Safari",
      "The tag worked in theme preview but vanished after publishing"
    ],
    "faqs": [
      {
        "q": "Why does Pixel Tracker show my Pinterest Tag as connected when Ads Manager shows no data?",
        "a": "Pixel Tracker confirms the ScriptTag was injected into your store, which is different from Pinterest confirming it received the data. Use Pinterest Tag Helper to check in real time, then give Ads Manager a few hours to reflect what it sees."
      },
      {
        "q": "How do I find my Pinterest Tag ID?",
        "a": "In Pinterest Ads Manager, go to Ads, then Conversions, then Pinterest tag. Your Tag ID is listed there, and it's the value that needs to match what's saved in Pixel Tracker."
      },
      {
        "q": "Can Pinterest Tag end up installed twice by accident?",
        "a": "Yes, and it's common. If the tag was ever added manually through theme.liquid, Google Tag Manager, or another app before you connected Pixel Tracker, both will fire and your conversion counts will look roughly doubled."
      },
      {
        "q": "Will an ad blocker affect my own testing?",
        "a": "Yes. Most ad blockers and privacy browser extensions block pintrk requests specifically. Test in an incognito window with extensions disabled to get an accurate read."
      },
      {
        "q": "How long does Pinterest take to show events after they fire?",
        "a": "Tag Helper shows events in real time, but Pinterest Ads Manager's own Conversions dashboard can take a few hours to reflect the same data. If Tag Helper confirms firing, treat the dashboard delay as normal rather than a connection problem."
      }
    ],
    "related": [
      {
        "label": "Pinterest Tag events reference",
        "href": "/pixel-tracker/pinterest-pixel/events"
      },
      {
        "label": "Pinterest server-side tracking options",
        "href": "/pixel-tracker/pinterest-pixel/server-side"
      },
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "All Pixel Tracker guides",
        "href": "/pixel-tracker/guides"
      },
      {
        "label": "Join the waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "pinterest-pixel",
    "actionSlug": "events",
    "platformName": "Pinterest",
    "pixelName": "Pinterest Tag",
    "badge": "Events",
    "title": "Pinterest Standard Events for Shopify: Which Ones Fire",
    "description": "See exactly which Pinterest standard events Pixel Tracker sends from your Shopify store, from page_visit to checkout, and what each one tracks.",
    "h1": "Pinterest Standard Events for Shopify: Which Ones Fire",
    "intro": [
      "Pixel Tracker sends Pinterest's standard events using the exact lowercase, snake_case names Pinterest expects: page_visit, view_category, add_to_cart, checkout, and signup. Knowing which event maps to which action on your Shopify store makes it much easier to read your Conversions dashboard and to spot when something stops firing.",
      "This page covers what each event tracks, when it fires, and why some matter more than others for ad reporting. If an event isn't showing up the way you expect, check the [troubleshooting guide](/pixel-tracker/pinterest-pixel/troubleshooting) after confirming the setup here."
    ],
    "sections": [
      {
        "heading": "The Five Pinterest Events Pixel Tracker Sends",
        "paragraphs": [
          "Pixel Tracker maps common Shopify storefront actions to Pinterest's standard event set: browsing any page sends page_visit, viewing a collection sends view_category, adding an item to the cart sends add_to_cart, completing an order sends checkout, and creating a customer account sends signup.",
          "Pinterest's naming convention is lowercase with underscores, not the camelCase or Title Case you'll see on other ad platforms, so don't assume event names line up character for character if you're auditing tracking across Meta, TikTok, and Pinterest in the same spreadsheet. When you're checking Ads Manager against what Pixel Tracker sends, match on the exact snake_case spelling."
        ]
      },
      {
        "heading": "page_visit: The Baseline Event on Every Page",
        "paragraphs": [
          "page_visit fires on every page load across your store, home page, product pages, collection pages, and cart. It's the foundation Pinterest uses to build retargeting audiences of anyone who's visited your site, even before they've added anything to a cart, and it's usually the largest audience Pinterest can build from your tag.",
          "If page_visit isn't firing, nothing downstream will either, which is why it's the first thing to check in Pinterest Tag Helper when something looks off."
        ]
      },
      {
        "heading": "add_to_cart and checkout: The Events Behind Your ROAS Numbers",
        "paragraphs": [
          "add_to_cart and checkout are the two events that carry commercial intent, and they're what Pinterest uses to calculate conversion rate and return on ad spend for your campaigns. checkout fires on order completion and should include order value, which is what lets Pinterest, and you, tie ad spend back to actual revenue.",
          "If you're building out your own attribution math alongside Pinterest's reporting, the [ROAS calculation guide](/pixel-tracker/guides/roas-calculation) walks through how to reconcile platform-reported numbers with your store's actual order data."
        ]
      },
      {
        "heading": "view_category and signup: Smaller Signals Worth Knowing",
        "paragraphs": [
          "view_category fires when a shopper views a collection page, giving Pinterest a signal about product interest that's more specific than a generic page_visit but earlier in the funnel than add_to_cart. It's useful for building interest-based retargeting audiences by product category.",
          "signup fires on account creation, which matters less for stores that don't push account creation but can be a useful top-of-funnel signal if you run a loyalty program or gated content."
        ]
      },
      {
        "heading": "Confirming Events Fire With the Right Names",
        "paragraphs": [
          "Because Pinterest is strict about lowercase snake_case naming, a typo or unexpected capitalization means Pinterest simply won't recognize the event, even if something fired in the browser. Use the Pinterest Tag Helper extension to see exactly which event names are being sent from your store, and cross-check them against Ads Manager's Conversions dashboard.",
          "This matters because a silently misspelled or miscased event won't throw an error anywhere, Pinterest just won't count it. The only reliable check is comparing what Tag Helper reports in the moment against what shows up in Ads Manager a few hours later."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "What events does Pixel Tracker send to Pinterest?",
        "a": "page_visit, view_category, add_to_cart, checkout, and signup, using Pinterest's standard lowercase snake_case naming."
      },
      {
        "q": "Does Pixel Tracker send custom Pinterest events?",
        "a": "No, Pixel Tracker sends Pinterest's standard event set. It doesn't currently support defining custom event names beyond those five."
      },
      {
        "q": "Why is checkout the most important event for ad reporting?",
        "a": "checkout is the event Pinterest uses to attribute a completed order back to an ad click, and it typically carries order value, which is what powers conversion rate and ROAS reporting in Ads Manager."
      },
      {
        "q": "How can I confirm an event is using the correct name?",
        "a": "Install the Pinterest Tag Helper browser extension and reload the page you're testing. It lists every event name exactly as Pinterest received it, which is the fastest way to catch a naming mismatch."
      },
      {
        "q": "Does view_category fire on every product listing page?",
        "a": "It fires on Shopify collection pages, which are the closest equivalent to Pinterest's category page concept. Individual product pages trigger page_visit rather than view_category."
      }
    ],
    "related": [
      {
        "label": "Pinterest troubleshooting guide",
        "href": "/pixel-tracker/pinterest-pixel/troubleshooting"
      },
      {
        "label": "Pinterest server-side tracking options",
        "href": "/pixel-tracker/pinterest-pixel/server-side"
      },
      {
        "label": "ROAS calculation guide",
        "href": "/pixel-tracker/guides/roas-calculation"
      },
      {
        "label": "Multi-channel attribution guide",
        "href": "/pixel-tracker/guides/multi-channel-attribution"
      },
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "Join the waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "pinterest-pixel",
    "actionSlug": "server-side",
    "platformName": "Pinterest",
    "pixelName": "Pinterest Tag",
    "badge": "Server-Side Tracking",
    "title": "Pinterest Server-Side Tracking on Shopify: The Real Options",
    "description": "Pixel Tracker's Pinterest Tag is client-side only. Here's what Pinterest's Conversions API offers, and where Pixel Tracker does support server-side tracking.",
    "h1": "Pinterest Server-Side Tracking on Shopify: The Real Options",
    "intro": [
      "Pixel Tracker's Pinterest connection is a client-side browser tag, injected via Shopify ScriptTag, the same pintrk() tracking that runs in a visitor's browser. It does not include server-side tracking for Pinterest today, so if you're looking for a Pixel Tracker Conversions API setup for Pinterest, it doesn't exist yet.",
      "Pinterest does have its own server-side product, separate from Pixel Tracker, and it's worth understanding what it does before deciding whether you need it. This page covers what Pinterest's server-side option offers, why it matters more than it used to, and where Pixel Tracker's own server-side support actually lives today."
    ],
    "sections": [
      {
        "heading": "Pixel Tracker's Pinterest Tag Is Client-Side Only",
        "paragraphs": [
          "Everything Pixel Tracker sends to Pinterest, page_visit, view_category, add_to_cart, checkout, and signup, runs through the browser-based Pinterest Tag. There's no server-to-server connection between your store and Pinterest through Pixel Tracker, which means any event that gets blocked or dropped in the browser, by an ad blocker, a slow connection, or Safari's tracking prevention, never reaches Pinterest at all.",
          "That's an honest limitation, not a bug. If you need Pinterest events that survive browser-level blocking, that requires Pinterest's own Conversions API, set up independently of Pixel Tracker."
        ]
      },
      {
        "heading": "What Pinterest's Conversions API Actually Does",
        "paragraphs": [
          "Pinterest offers its own server-side product, sometimes called the Pinterest Conversions API or Pinterest API for Conversions, that sends event data directly from your server, or a middleware layer, to Pinterest, bypassing the browser entirely. It's built to work alongside the browser tag, not replace it, matching events on both sides using hashed customer data like email or phone number to fill in gaps the browser tag misses.",
          "Setting it up means either building a direct integration with Pinterest's API or using a server-side tag management solution that supports it. It's a separate project from anything Pixel Tracker configures."
        ]
      },
      {
        "heading": "Why This Matters More for Pinterest Than It Used To",
        "paragraphs": [
          "Safari's Intelligent Tracking Prevention, iOS app tracking restrictions, and the growing share of shoppers running ad blockers all chip away at what a browser-only tag can see. Pinterest's Conversions dashboard likely undercounts real conversions to some degree for any store relying purely on the client-side tag, the only question is by how much.",
          "For most small and mid-size Shopify stores, the browser tag alone is still a reasonable starting point. It becomes a real gap once Pinterest is a meaningful part of your ad spend and you're making budget decisions based on its reported ROAS."
        ]
      },
      {
        "heading": "Where Pixel Tracker Does Support Server-Side Tracking Today",
        "paragraphs": [
          "Pixel Tracker's server-side support currently covers two platforms: Meta, through [Facebook's Conversions API](/pixel-tracker/meta-pixel/server-side), and TikTok, through the TikTok Events API. Both work alongside their respective browser tags to recover events that would otherwise be lost. Pinterest, Google Ads, Snapchat, LinkedIn, and X aren't part of that today.",
          "If Pinterest is one of several platforms you run ads on, the [server-side tracking guide](/pixel-tracker/guides/server-side-tracking) explains how Meta and TikTok's server-side setup works in Pixel Tracker, and how to think about the platforms that aren't covered yet."
        ]
      },
      {
        "heading": "Realistic Options If You Need Better Pinterest Data",
        "paragraphs": [
          "If Pinterest is a small part of your ad mix, the client-side tag combined with Pinterest's own Conversions dashboard is usually good enough to make directional decisions. If Pinterest spend is significant enough that undercounting is costing you real budget accuracy, setting up Pinterest's Conversions API directly, independent of Pixel Tracker, is the option that exists today.",
          "Either way, don't treat Pinterest's reported numbers as the full picture. Cross-check them against your Shopify order data, and lean on the platforms where you do have server-side coverage, Meta and TikTok, for a more complete view of paid performance."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "Does Pixel Tracker support Pinterest server-side tracking?",
        "a": "No. Pixel Tracker's Pinterest connection is client-side only today, sent through the browser-based Pinterest Tag. Pixel Tracker's server-side support currently covers Meta and TikTok only."
      },
      {
        "q": "What is Pinterest's Conversions API?",
        "a": "It's Pinterest's own server-side tracking product, separate from Pixel Tracker, that sends event data directly from a server to Pinterest rather than through a visitor's browser. Setting it up is a separate integration project from anything Pixel Tracker configures."
      },
      {
        "q": "Will Pixel Tracker add Pinterest server-side tracking?",
        "a": "That's not something we can commit to a timeline on here. Today, Pixel Tracker's server-side support is Meta Conversions API and TikTok Events API only."
      },
      {
        "q": "How much data am I actually losing without server-side tracking on Pinterest?",
        "a": "It varies by store, but Safari's tracking prevention, ad blockers, and iOS restrictions all reduce what a browser-only tag can capture. There's no fixed percentage, the safest approach is to cross-check Pinterest's reported conversions against your actual Shopify order count."
      },
      {
        "q": "Should I prioritize Pinterest server-side tracking over Meta or TikTok?",
        "a": "For most stores, no. Meta and TikTok typically carry more ad spend and already have working server-side support in Pixel Tracker, so that's where the accuracy gain is easiest to capture today."
      }
    ],
    "related": [
      {
        "label": "Meta Pixel server-side tracking",
        "href": "/pixel-tracker/meta-pixel/server-side"
      },
      {
        "label": "TikTok Pixel server-side tracking",
        "href": "/pixel-tracker/tiktok-pixel/server-side"
      },
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Pinterest Tag events reference",
        "href": "/pixel-tracker/pinterest-pixel/events"
      },
      {
        "label": "Pinterest troubleshooting guide",
        "href": "/pixel-tracker/pinterest-pixel/troubleshooting"
      },
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      }
    ]
  },
  {
    "platformSlug": "snapchat-pixel",
    "actionSlug": "troubleshooting",
    "platformName": "Snapchat",
    "pixelName": "Snapchat Pixel",
    "badge": "Troubleshooting",
    "title": "Snapchat Pixel Not Firing on Shopify: Troubleshooting Guide",
    "description": "Snap Pixel not tracking on your Shopify store? Diagnose ScriptTag issues, ad blockers, and event mismatches with this step-by-step fix guide.",
    "h1": "Snapchat Pixel Not Firing on Shopify: Troubleshooting Guide",
    "intro": [
      "When your Snap Pixel stops showing activity in Snapchat Ads Manager, or a fresh Shopify install never registers a single PAGE_VIEW, the cause is almost always one of a handful of predictable issues: a mismatched Pixel ID, a ScriptTag that never loaded, an ad blocker eating the request, or events that fire under a name Snapchat doesn't recognize. None of this is exotic. It's the same five or six things every merchant running Pixel Tracker's Snapchat connection eventually runs into.",
      "This guide works through each one in order, starting with the fastest checks first. If you get through the whole list and pixel activity still isn't showing up, the [events reference](/pixel-tracker/snapchat-pixel/events) is worth checking next, since a surprising number of \"not firing\" reports turn out to be events that fired correctly but under names Snapchat's Ads Manager doesn't map the way you'd expect."
    ],
    "sections": [
      {
        "heading": "Why 'Connected' in Pixel Tracker Doesn't Guarantee Data in Snapchat",
        "paragraphs": [
          "Pixel Tracker connects Snapchat by injecting a Shopify ScriptTag, so there's no theme code to edit. But \"connected\" in the dashboard only confirms that Shopify accepted and registered that ScriptTag. It doesn't confirm that a shopper's browser actually loaded the script, that Snapchat's servers received the event, or that Ads Manager has finished processing it. Those are three separate points of failure, and most troubleshooting is really about figuring out which one you're looking at."
        ]
      },
      {
        "heading": "Pixel ID Mismatches",
        "paragraphs": [
          "The single most common cause of a silent pixel is a Pixel ID that doesn't match what's in Snapchat Ads Manager. Your Snap Pixel ID lives under Events Manager in Ads Manager, and it needs to be copied over exactly, including no extra spaces or leftover characters from a previous pixel. It's easy to end up pointing at an old pixel ID from a deleted or reassigned ad account, especially if someone else on the team set up Snapchat originally."
        ]
      },
      {
        "heading": "Ad Blockers and Browser Privacy Settings",
        "paragraphs": [
          "The Snap Pixel script loads from Snapchat's own domains, which puts it squarely in the crosshairs of ad blockers, privacy-focused browsers like Brave, and cookie consent tools configured to block third-party scripts by default. Safari's Intelligent Tracking Prevention can also interfere with cross-site requests. If your own testing happens in a browser with any of these active, you'll see a broken pixel that isn't actually broken for your real customers."
        ]
      },
      {
        "heading": "Reading Snapchat's Pixel Health in Ads Manager",
        "paragraphs": [
          "Ads Manager's event tracking screen shows which events it has actually received, broken out by event type, along with basic diagnostics when something looks off. Reporting typically lags 24 to 48 hours behind real activity, so a quiet dashboard the same day you reconnect the pixel isn't necessarily a problem. Compare what you see there against the five events Pixel Tracker sends: PAGE_VIEW, VIEW_CONTENT, ADD_CART, START_CHECKOUT, and PURCHASE."
        ]
      },
      {
        "heading": "When Checkout Events Specifically Go Missing",
        "paragraphs": [
          "START_CHECKOUT and PURCHASE depend on a shopper actually reaching Shopify's checkout, which runs on a separate, more locked-down domain than your storefront. If PAGE_VIEW and VIEW_CONTENT look healthy but checkout events don't, it's rarely a Pixel Tracker configuration problem. More often, no one has actually completed a checkout since you reconnected the pixel, or a browser blocker is stripping scripts specifically on the checkout domain."
        ]
      }
    ],
    "steps": [
      {
        "title": "Confirm the Pixel ID matches Ads Manager exactly",
        "body": "Open Events Manager in Snapchat Ads Manager, copy the Pixel ID character for character, and paste it into Pixel Tracker's Snapchat connection. Save and reconnect rather than editing in place."
      },
      {
        "title": "Reconnect Snapchat to force the ScriptTag to re-register",
        "body": "Disconnect and reconnect the Snapchat platform in Pixel Tracker. This forces Shopify to re-register the ScriptTag, which clears up issues caused by a stale or partially failed install."
      },
      {
        "title": "Test in a clean browser with blockers off",
        "body": "Use an incognito window with ad blockers, privacy extensions, and consent tools disabled. Browse a product page, add to cart, and check your browser's network tab for requests going out to Snapchat's tracking domains."
      },
      {
        "title": "Place one real test order",
        "body": "PAGE_VIEW and VIEW_CONTENT fire on ordinary browsing, but START_CHECKOUT and PURCHASE only fire when someone actually reaches and completes checkout. Run a real test order, even a $0 one with a discount code, before concluding those events are broken."
      },
      {
        "title": "Give Ads Manager 24-48 hours before troubleshooting further",
        "body": "Snapchat's own reporting lag means a quiet dashboard right after reconnecting isn't unusual. Wait a full reporting cycle before assuming the pixel itself is broken."
      },
      {
        "title": "Rule out a second, conflicting Snapchat install",
        "body": "Check your theme and installed apps for any other Snap Pixel code. Two pixels firing under different or duplicate IDs will produce inconsistent, hard-to-diagnose event counts in Ads Manager."
      }
    ],
    "symptoms": [
      "Snap Pixel shows as unverified or inactive in Ads Manager",
      "No PAGE_VIEW events after a fresh install or theme change",
      "ADD_CART or START_CHECKOUT events missing while PAGE_VIEW works fine",
      "PURCHASE events never appear even after real orders come through",
      "Event counts stuck at zero for more than 48 hours",
      "Pixel fires in Chrome but not in Safari or the Snapchat in-app browser",
      "Dashboard shows Snapchat as connected but Ads Manager disagrees"
    ],
    "faqs": [
      {
        "q": "Why does Pixel Tracker show Snapchat as connected but Ads Manager shows zero events?",
        "a": "Connected only means Shopify accepted the ScriptTag, not that Snapchat has processed any traffic yet. Give it 24 to 48 hours, then check for ad blockers or a Pixel ID mismatch if it's still empty."
      },
      {
        "q": "Can an ad blocker really stop the Snap Pixel from working?",
        "a": "Yes. Ad blockers, privacy browsers, and some consent banners block requests to Snapchat's tracking domains outright. Always test with them disabled before assuming the pixel itself is misconfigured."
      },
      {
        "q": "Why do PAGE_VIEW events show up but PURCHASE never does?",
        "a": "PURCHASE only fires on a completed Shopify checkout. If no test order has gone through since you reconnected the pixel, there's nothing to fire yet, it isn't the same failure as a missing PAGE_VIEW."
      },
      {
        "q": "How long should I wait before assuming the pixel is broken?",
        "a": "Give it a full 24 to 48 hours. Snapchat's own event reporting lags behind real-time activity, so a quiet Ads Manager dashboard the same day isn't unusual."
      },
      {
        "q": "What if I've checked everything and events still aren't showing?",
        "a": "Double-check for a second Snap Pixel installed through your theme or another app, since duplicate pixels cause inconsistent reporting. If that's clean, the [events reference](/pixel-tracker/snapchat-pixel/events) covers exactly which events to expect and when."
      }
    ],
    "related": [
      {
        "label": "Snapchat Pixel Events Reference",
        "href": "/pixel-tracker/snapchat-pixel/events"
      },
      {
        "label": "Snapchat Server-Side Tracking",
        "href": "/pixel-tracker/snapchat-pixel/server-side"
      },
      {
        "label": "Snapchat Pixel Overview",
        "href": "/pixel-tracker/snapchat-pixel"
      },
      {
        "label": "Pixel Tracker Overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "Server-Side Tracking Guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Join the Waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "snapchat-pixel",
    "actionSlug": "events",
    "platformName": "Snapchat",
    "pixelName": "Snapchat Pixel",
    "badge": "Events",
    "title": "Snapchat Pixel Events on Shopify: Full Reference Guide",
    "description": "See which Snapchat Pixel events Pixel Tracker sends from your Shopify store, from PAGE_VIEW to PURCHASE, and how they map to checkout.",
    "h1": "Snapchat Pixel Events on Shopify: Full Reference Guide",
    "intro": [
      "Pixel Tracker maps your Shopify store's actions to Snapchat's own event taxonomy automatically, so there's no manual event builder to configure. Snapchat's standard events use SCREAMING_SNAKE_CASE names like PAGE_VIEW, VIEW_CONTENT, ADD_CART, START_CHECKOUT, and PURCHASE, and Pixel Tracker sends all five directly from the ScriptTag it installs on your storefront.",
      "This page breaks down what each event means, when it fires, and what it tells Snapchat's ad system. If you've confirmed events are set up but they're not showing up in Ads Manager, the [troubleshooting guide](/pixel-tracker/snapchat-pixel/troubleshooting) covers the common causes, from Pixel ID mismatches to ad blockers."
    ],
    "sections": [
      {
        "heading": "PAGE_VIEW: Every Storefront Page Load",
        "paragraphs": [
          "PAGE_VIEW fires on every page a shopper loads across your store, not just product pages. It's the broadest signal Pixel Tracker sends to Snapchat and forms the baseline traffic data Snapchat uses for retargeting audiences and lookalike modeling. It's also the first event worth checking if something looks off, since a store with zero PAGE_VIEW activity almost always points to an installation problem rather than an event-mapping one."
        ]
      },
      {
        "heading": "VIEW_CONTENT: Product Page Visits",
        "paragraphs": [
          "VIEW_CONTENT fires when a shopper lands on a specific product page, and it carries the item ID and price along with it. Snapchat uses this to build catalog-based retargeting ads, showing shoppers the exact products they looked at rather than generic store ads. Because it carries item-level detail, VIEW_CONTENT is also what makes dynamic product ads possible for stores with larger catalogs."
        ]
      },
      {
        "heading": "ADD_CART: Add to Cart Actions",
        "paragraphs": [
          "ADD_CART fires whenever a product is added to the cart, whether from the product page or a cart drawer. This is the event behind most Snapchat cart abandonment campaigns, since it marks a shopper who showed real purchase intent but didn't finish checking out. It typically shows meaningfully less volume than VIEW_CONTENT, since only a fraction of product viewers add anything to their cart, and that drop-off is expected rather than a sign of broken tracking."
        ]
      },
      {
        "heading": "START_CHECKOUT: Checkout Initiation",
        "paragraphs": [
          "START_CHECKOUT fires when a shopper moves from the cart into Shopify's checkout flow. It's one of the more valuable mid-funnel signals for Snapchat's ad optimization, since it separates casual browsers from shoppers who are close to converting. A healthy gap between ADD_CART and START_CHECKOUT is normal too, cart abandonment is a well-documented shopping behavior, not evidence the pixel missed something."
        ]
      },
      {
        "heading": "PURCHASE: Completed Orders",
        "paragraphs": [
          "PURCHASE fires on Shopify's order confirmation page and includes order value and currency. It's the conversion event Snapchat campaigns optimize toward, and also the event most affected by ad blockers, iOS privacy settings, and Snapchat's own reporting delay. Because of that delay, don't expect PURCHASE counts in Ads Manager to match your Shopify order count in real time, they typically catch up within a day or two."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "Which Snapchat events does Pixel Tracker send automatically?",
        "a": "PAGE_VIEW, VIEW_CONTENT, ADD_CART, START_CHECKOUT, and PURCHASE, all mapped from standard Shopify storefront and checkout actions with no manual setup."
      },
      {
        "q": "Do I need to name events in SCREAMING_SNAKE_CASE myself?",
        "a": "No. That naming convention is just how Snapchat's own system labels and expects events. Pixel Tracker handles the mapping so you never touch event names directly."
      },
      {
        "q": "Why does VIEW_CONTENT show far more volume than PURCHASE?",
        "a": "That's expected. Most shoppers browse products without buying, so VIEW_CONTENT naturally has the widest funnel and PURCHASE the narrowest. A large gap between the two reflects normal funnel drop-off, not a tracking problem."
      },
      {
        "q": "Can I add custom Snapchat events beyond the standard five?",
        "a": "Not currently. Pixel Tracker sends the five standard events mapped from Shopify's own storefront and checkout actions, and there's no custom event builder in the app today."
      },
      {
        "q": "Where do I check which events Snapchat actually received?",
        "a": "Snapchat Ads Manager's Events Manager shows a per-event breakdown of what's come through. If counts look wrong, the [troubleshooting guide](/pixel-tracker/snapchat-pixel/troubleshooting) walks through the most common causes."
      }
    ],
    "related": [
      {
        "label": "Snapchat Pixel Troubleshooting",
        "href": "/pixel-tracker/snapchat-pixel/troubleshooting"
      },
      {
        "label": "Snapchat Server-Side Tracking",
        "href": "/pixel-tracker/snapchat-pixel/server-side"
      },
      {
        "label": "Snapchat Pixel Overview",
        "href": "/pixel-tracker/snapchat-pixel"
      },
      {
        "label": "Multi-Channel Attribution Guide",
        "href": "/pixel-tracker/guides/multi-channel-attribution"
      },
      {
        "label": "Pixel Tracker Overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "Join the Waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "snapchat-pixel",
    "actionSlug": "server-side",
    "platformName": "Snapchat",
    "pixelName": "Snapchat Pixel",
    "badge": "Server-Side Tracking",
    "title": "Snapchat Server-Side Tracking on Shopify: What's Possible",
    "description": "Pixel Tracker's Snapchat pixel is client-side only. Here's what Snap Conversions API offers, why it matters, and your realistic options today.",
    "h1": "Snapchat Server-Side Tracking on Shopify: What's Possible",
    "intro": [
      "Pixel Tracker's Snapchat connection today is a client-side pixel only, installed through a Shopify ScriptTag and firing directly from the shopper's browser. There's no server-side or Conversions API support for Snapchat in Pixel Tracker right now, and this page won't pretend otherwise. That's the current state of the integration, not a temporary gap while a feature ships.",
      "If server-side tracking is the reason you're evaluating Pixel Tracker, it's worth being direct about where that stands: it exists today for [Meta and TikTok](/pixel-tracker/guides/server-side-tracking), not for Snapchat. What follows is what server-side tracking would actually mean for Snapchat, why it's become more relevant since Apple's App Tracking Transparency rollout, and what your realistic options are as a Shopify merchant right now."
    ],
    "sections": [
      {
        "heading": "What Pixel Tracker Sends to Snapchat Today",
        "paragraphs": [
          "Pixel Tracker injects the Snap Pixel through a Shopify ScriptTag, no theme code editing required. From there, the pixel fires PAGE_VIEW, VIEW_CONTENT, ADD_CART, START_CHECKOUT, and PURCHASE events directly from the shopper's browser to Snapchat's servers. That's standard client-side tracking, the same way most Shopify pixel integrations have worked for years."
        ]
      },
      {
        "heading": "Why Server-Side Tracking Matters More Since 2021",
        "paragraphs": [
          "Client-side pixels only work if the request actually leaves the browser and reaches the advertiser's server. Apple's App Tracking Transparency prompts, Safari's Intelligent Tracking Prevention, and ad blockers all interrupt that path in different ways, and the cumulative effect has been real, measurable undercounting across the industry, Snapchat included. Server-side tracking sends the same event from a server instead of the browser, which sidesteps a lot of that browser-level interference. That undercounting tends to compound for Snapchat in particular, since a large share of its traffic is mobile and app-embedded, exactly the environments where client-side pixels are weakest."
        ]
      },
      {
        "heading": "Snap Conversions API Is a Real Feature, Just Not a Pixel Tracker One",
        "paragraphs": [
          "Snapchat does offer its own server-side option, called Snap Conversions API, and it's a legitimate part of Snapchat's advertising platform. Pixel Tracker doesn't build, configure, or manage that integration for you, though. Setting it up today would mean working directly with Snapchat's documentation and either your own developer or an agency, independent of anything Pixel Tracker does."
        ]
      },
      {
        "heading": "Where Pixel Tracker Does Support Server-Side Tracking",
        "paragraphs": [
          "Pixel Tracker's server-side support today covers two platforms: [Meta Conversions API](/pixel-tracker/meta-pixel/server-side) and TikTok Events API. Both send events from a server rather than relying solely on the browser, recovering conversions that ad blockers and privacy settings would otherwise hide."
        ]
      },
      {
        "heading": "Realistic Options for Snapchat Merchants Right Now",
        "paragraphs": [
          "The client-side Snap Pixel Pixel Tracker already installs is still useful for prospecting and retargeting, even with some signal loss baked in. If overall measurement accuracy matters more than any one platform, leaning on Meta and TikTok's server-side coverage helps offset part of the gap, and cross-checking ad platform numbers against your actual Shopify order data keeps your read on performance honest regardless of what any single pixel reports. None of that replaces true server-side coverage for Snapchat, but it keeps your numbers honest while that gap exists."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "Does Pixel Tracker support server-side tracking for Snapchat?",
        "a": "No. Pixel Tracker's Snapchat connection is a client-side pixel only, delivered through a Shopify ScriptTag. Today, Pixel Tracker's server-side support covers Meta Conversions API and TikTok Events API only."
      },
      {
        "q": "What is Snap Conversions API, and can Pixel Tracker set it up?",
        "a": "It's Snapchat's own server-side tracking feature, separate from Pixel Tracker. Pixel Tracker doesn't build, configure, or manage it, so using it would require setting it up independently."
      },
      {
        "q": "Why does server-side tracking matter more since iOS changed its privacy rules?",
        "a": "App Tracking Transparency prompts and Safari's tracking prevention block a meaningful share of client-side pixel activity. Server-side tracking sends events from a server instead of the browser, recovering some of that lost signal."
      },
      {
        "q": "If I want the most complete Snapchat data possible, what should I do?",
        "a": "Keep the client-side Snap Pixel running for prospecting and retargeting, and cross-check reported conversions against your actual Shopify orders using something like the [pixel tracking calculator](/tools/pixel-tracking-calculator) rather than trusting any single platform's numbers alone."
      },
      {
        "q": "Will Pixel Tracker add Snapchat server-side tracking in the future?",
        "a": "Server-side support today is limited to Meta and TikTok. Any expansion to additional platforms would show up in the app itself, not as a promise made here."
      }
    ],
    "related": [
      {
        "label": "Meta Pixel Server-Side Tracking",
        "href": "/pixel-tracker/meta-pixel/server-side"
      },
      {
        "label": "TikTok Pixel Server-Side Tracking",
        "href": "/pixel-tracker/tiktok-pixel/server-side"
      },
      {
        "label": "Server-Side Tracking Guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Snapchat Pixel Events Reference",
        "href": "/pixel-tracker/snapchat-pixel/events"
      },
      {
        "label": "Snapchat Pixel Troubleshooting",
        "href": "/pixel-tracker/snapchat-pixel/troubleshooting"
      },
      {
        "label": "Join the Waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "tiktok-pixel",
    "actionSlug": "troubleshooting",
    "platformName": "TikTok",
    "pixelName": "TikTok Pixel",
    "badge": "Troubleshooting",
    "title": "TikTok Pixel Not Firing on Shopify: Troubleshooting Guide",
    "description": "TikTok Pixel Helper shows your pixel installed but TikTok Ads Manager shows no events? Here's how to find and fix the real cause on Shopify.",
    "h1": "TikTok Pixel Not Firing on Shopify: Troubleshooting Guide",
    "intro": [
      "If TikTok Pixel Helper shows a green checkmark on your Shopify store but TikTok Ads Manager still reports almost no events, you're not imagining it. The browser extension only confirms the base pixel code loaded in that one tab. It says nothing about whether TikTok's servers actually received the event, whether it arrived in time to match a click, or whether the shopper even used a normal browser to get to your store.",
      "This is one of the most common support questions for Shopify merchants running TikTok ads, and it usually comes down to one of a handful of causes: the in-app browser TikTok uses for its own traffic, script injection timing on your theme, browser privacy settings, or events firing twice and confusing the reporting. Below is a step-by-step way to isolate which one you're dealing with, plus what a tool like [Pixel Tracker](/pixel-tracker) checks for automatically."
    ],
    "sections": [
      {
        "heading": "Pixel Helper Isn't the Whole Picture",
        "paragraphs": [
          "TikTok Pixel Helper is a debugging tool for one browser tab at a time. It tells you the pixel snippet fired client-side, which events it saw, and whether the payload looks structurally correct. It cannot tell you whether TikTok's servers accepted that event, whether an ad blocker silently dropped the network request a split second after Pixel Helper read it, or how the event will actually get reported inside Ads Manager. Treat a green checkmark as 'the pixel is present,' not 'the pixel is working end to end.'"
        ]
      },
      {
        "heading": "The TikTok In-App Browser Changes Everything",
        "paragraphs": [
          "When someone taps a TikTok ad or a link inside the TikTok app, your store usually opens inside TikTok's own in-app browser, not the shopper's actual mobile Safari or Chrome. That in-app browser has its own rules for cookies, local storage, and script execution, and they are not identical to a normal mobile browser. A pixel that fires reliably when you test it on your laptop can behave completely differently for real ad traffic, because most of that traffic arrives through the in-app browser.",
          "If your numbers look fine in manual testing but collapse on live TikTok campaign traffic, this is the first thing to check, and it's why testing only in mobile Safari or Chrome gives you a false sense of confidence."
        ]
      },
      {
        "heading": "Confirm the Pixel Is Actually Loading on Every Page",
        "paragraphs": [
          "Shopify injects third-party tracking through ScriptTags, and the order in which scripts load can matter, especially on the checkout pages where AddToCart, InitiateCheckout, and PlaceAnOrder events need to fire reliably. Open your storefront in an incognito window, load the homepage, a product page, and go through checkout, watching Pixel Helper at each step. If PageView fires everywhere but AddToCart or InitiateCheckout never shows up, the problem usually isn't the pixel itself, it's that the trigger tied to that specific page or button was never wired up correctly."
        ]
      },
      {
        "heading": "Ad Blockers and Browser Privacy Settings",
        "paragraphs": [
          "Safari's Intelligent Tracking Prevention, Brave's built-in shields, and any ad blocker extension can quietly strip requests to TikTok's tracking domains before they leave the browser. This tends to show up as inconsistent numbers: some shoppers convert and show up in Ads Manager, others convert and never appear, with no obvious pattern from your side.",
          "If a meaningful share of your traffic uses Safari or an ad blocker, expect some client-side event loss no matter how correctly the pixel is installed. That gap is exactly what server-side tracking through the [Events API](/pixel-tracker/tiktok-pixel/server-side) is meant to close."
        ]
      },
      {
        "heading": "Duplicate Events and Match Quality",
        "paragraphs": [
          "If a purchase event fires both from the browser pixel and from a server-side integration without a shared event ID, TikTok can count it twice, which shows up as conversion numbers higher than your actual Shopify orders. Check the Event Match Quality score in Ads Manager too. A low score usually means TikTok isn't receiving enough matching customer data, like email, phone, or an external ID, alongside the event to confidently tie it to a specific ad click, which quietly lowers attributed conversions even when the event fired correctly."
        ]
      }
    ],
    "steps": [
      {
        "title": "Test with TikTok Pixel Helper on desktop first",
        "body": "Load your storefront in an incognito Chrome window and step through homepage, product page, cart, and checkout while watching Pixel Helper. Confirm PageView, ViewContent, AddToCart, InitiateCheckout, and PlaceAnOrder all appear."
      },
      {
        "title": "Retest inside TikTok's actual in-app browser",
        "body": "Tap a real or test link from within the TikTok app so the store opens in TikTok's in-app browser, not your phone's default browser. Compare what fires here against your desktop test."
      },
      {
        "title": "Check Test Events in TikTok Events Manager",
        "body": "Test Events shows what TikTok's servers actually received in real time, which is a better signal than Pixel Helper alone. Look for missing events or events with obviously wrong parameters."
      },
      {
        "title": "Walk through checkout events specifically",
        "body": "Checkout pages are the most common place events silently stop firing, especially InitiateCheckout and PlaceAnOrder. Confirm each one fires exactly once per completed order."
      },
      {
        "title": "Check for duplicate purchase events",
        "body": "Compare your TikTok-reported conversions against actual Shopify order counts for the same period. If TikTok's number is noticeably higher, you likely have a browser and server event firing without deduplication."
      },
      {
        "title": "Review Event Match Quality in Ads Manager",
        "body": "A low match quality score points to missing customer data on your events, not necessarily a broken pixel. This is often the real reason attributed conversions look low even when events are firing."
      }
    ],
    "symptoms": [
      "TikTok Pixel Helper shows the pixel installed but Ads Manager reports almost no events",
      "Events appear in Test Events but never show up in Ads Manager reporting",
      "PageView fires reliably but AddToCart or InitiateCheckout never does",
      "Numbers look fine on desktop testing but drop off for real TikTok ad traffic",
      "Conversions in Ads Manager are higher than actual Shopify order counts",
      "Event Match Quality score sits in the 'low' or 'fair' range"
    ],
    "faqs": [
      {
        "q": "Why does TikTok Pixel Helper say my pixel is installed but Ads Manager still shows no events?",
        "a": "Pixel Helper only confirms the pixel fired in that one browser tab. It doesn't confirm TikTok's servers accepted the event or that it wasn't dropped afterward by an ad blocker or browser privacy setting. Check TikTok Events Manager's Test Events tool for what actually reached TikTok."
      },
      {
        "q": "Does opening my Shopify store inside the TikTok app change how tracking works?",
        "a": "Yes. Links tapped inside TikTok usually open your store in TikTok's own in-app browser instead of the shopper's normal mobile browser, and that in-app browser has different rules for cookies and script execution. Always test with a link opened from inside the TikTok app, not just mobile Safari or Chrome."
      },
      {
        "q": "Why don't my TikTok conversions match my actual Shopify orders?",
        "a": "This goes both ways. Under-counting is usually ad blockers or in-app browser restrictions dropping the browser-side event. Over-counting is usually the same purchase firing from both the browser pixel and a server-side event without a shared event ID for deduplication."
      },
      {
        "q": "Can ad blockers or Safari privacy settings block the TikTok pixel?",
        "a": "Yes. Safari's Intelligent Tracking Prevention, Brave's shields, and browser extensions can strip requests to TikTok's tracking domains before they leave the browser, which causes some conversions to never reach Ads Manager no matter how correctly the pixel is installed."
      },
      {
        "q": "How do I stop TikTok from counting the same purchase twice?",
        "a": "Make sure your browser pixel and any server-side event share the same event ID for the same order, so TikTok can deduplicate them into a single event. See our [server-side tracking guide](/pixel-tracker/guides/server-side-tracking) for how event ID matching works."
      }
    ],
    "related": [
      {
        "label": "TikTok Pixel Hub",
        "href": "/pixel-tracker/tiktok-pixel"
      },
      {
        "label": "TikTok Pixel Events Reference",
        "href": "/pixel-tracker/tiktok-pixel/events"
      },
      {
        "label": "TikTok Server-Side Tracking",
        "href": "/pixel-tracker/tiktok-pixel/server-side"
      },
      {
        "label": "Set Up the TikTok Pixel on Shopify",
        "href": "/pixel-tracker/guides/tiktok-pixel-setup"
      },
      {
        "label": "Server-Side Tracking Guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Join the Waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "tiktok-pixel",
    "actionSlug": "events",
    "platformName": "TikTok",
    "pixelName": "TikTok Pixel",
    "badge": "Events",
    "title": "TikTok Pixel Events on Shopify: PageView to Purchase",
    "description": "Which TikTok pixel events fire on Shopify, from PageView to CompletePayment, what each one tracks, and how they map to Ads Manager optimization.",
    "h1": "TikTok Pixel Events on Shopify: PageView to Purchase",
    "intro": [
      "TikTok's pixel tracks a specific set of standard events on your Shopify store: PageView, ViewContent, AddToCart, InitiateCheckout, and PlaceAnOrder, often shown as CompletePayment in reporting. Each one feeds TikTok's ad algorithm and Ads Manager reporting differently, and missing even one breaks optimization for campaigns that depend on it, like conversion campaigns optimizing toward purchases.",
      "Knowing what each event actually represents, and where it can silently fail on a Shopify store, makes it much easier to diagnose problems using our [troubleshooting guide](/pixel-tracker/tiktok-pixel/troubleshooting) instead of guessing. Below is what each standard event tracks, when it fires, and why TikTok Ads Manager relies on it."
    ],
    "sections": [
      {
        "heading": "PageView: The Foundation Event",
        "paragraphs": [
          "PageView fires on every page load and is the base signal TikTok uses to build retargeting audiences and confirm the pixel is active at all. On its own it doesn't tell TikTok much about purchase intent, but every other event depends on the base pixel code that PageView also relies on, so if PageView is missing, nothing else downstream will work either."
        ]
      },
      {
        "heading": "ViewContent and AddToCart: Purchase Intent Signals",
        "paragraphs": [
          "ViewContent fires on product pages and tells TikTok which specific products a shopper looked at, which matters for dynamic product ads and retargeting. AddToCart fires when a shopper adds an item to their cart and is one of the strongest mid-funnel signals TikTok's algorithm uses to identify people close to buying.",
          "On Shopify, AddToCart needs to fire correctly on both the product page 'add to cart' button and any cart drawer or AJAX cart update, since many themes handle these differently."
        ]
      },
      {
        "heading": "InitiateCheckout and PlaceAnOrder: The Events That Matter Most",
        "paragraphs": [
          "InitiateCheckout fires when a shopper starts checkout, and PlaceAnOrder, which TikTok also reports as CompletePayment, fires on a completed order. Conversion campaigns almost always optimize toward one of these two events, which means if either fires inconsistently, TikTok's algorithm is optimizing on incomplete data and campaign performance suffers even though nothing looks obviously broken in Ads Manager.",
          "Shopify's checkout flow, especially on Shopify Plus with a custom checkout.liquid, is the single most common place these two events get missed."
        ]
      },
      {
        "heading": "Why the TikTok In-App Browser Affects Event Delivery",
        "paragraphs": [
          "A meaningful share of TikTok ad clicks open inside TikTok's own in-app browser rather than a shopper's normal mobile browser, and that environment enforces its own rules around cookies and script execution. Events that fire reliably in a normal browser test can still be delayed, blocked, or lost for real ad traffic arriving through the in-app browser, which is part of why event counts from live campaigns rarely match perfectly with manual testing on a laptop."
        ]
      },
      {
        "heading": "How Events Map to Event Match Quality",
        "paragraphs": [
          "Every event TikTok receives can carry customer parameters like email, phone, or an external ID, and Ads Manager scores how well those parameters let TikTok match the event to a real ad-viewing user. Events sent with more matching parameters, which is exactly what server-side delivery through the [Events API](/pixel-tracker/tiktok-pixel/server-side) adds on top of the browser pixel, tend to score higher and get counted more reliably."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "What are the standard TikTok pixel events on Shopify?",
        "a": "PageView, ViewContent, AddToCart, InitiateCheckout, and PlaceAnOrder, shown as CompletePayment in some TikTok reporting. Each one feeds a different part of TikTok's ad targeting and optimization."
      },
      {
        "q": "Which TikTok pixel event should my campaigns optimize toward?",
        "a": "Most conversion campaigns optimize toward InitiateCheckout or PlaceAnOrder, since those are the closest signals to an actual sale. If either fires inconsistently on your Shopify checkout, TikTok's algorithm is working with incomplete data."
      },
      {
        "q": "Why does AddToCart sometimes not fire on Shopify?",
        "a": "Many Shopify themes handle cart additions differently depending on whether the shopper uses the product page button, a quick-add option, or an AJAX cart drawer, and a pixel wired to only one of those paths will miss the others."
      },
      {
        "q": "Does TikTok's in-app browser change which events fire?",
        "a": "It can. Ad clicks that open inside TikTok's in-app browser follow different cookie and script rules than a normal mobile browser, so events that test fine on your laptop don't always behave identically for real campaign traffic."
      },
      {
        "q": "What is Event Match Quality and why does it matter for events?",
        "a": "It's TikTok's score for how well an event's customer parameters, like email, phone, or an external ID, let TikTok match it to a real user. Higher match quality generally means more of your events get counted and attributed correctly, which is one reason server-side tracking through the Events API tends to improve reported conversions."
      }
    ],
    "related": [
      {
        "label": "TikTok Pixel Hub",
        "href": "/pixel-tracker/tiktok-pixel"
      },
      {
        "label": "TikTok Pixel Troubleshooting",
        "href": "/pixel-tracker/tiktok-pixel/troubleshooting"
      },
      {
        "label": "TikTok Server-Side Tracking",
        "href": "/pixel-tracker/tiktok-pixel/server-side"
      },
      {
        "label": "Set Up the TikTok Pixel on Shopify",
        "href": "/pixel-tracker/guides/tiktok-pixel-setup"
      },
      {
        "label": "Multi-Channel Attribution Guide",
        "href": "/pixel-tracker/guides/multi-channel-attribution"
      },
      {
        "label": "Join the Waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "tiktok-pixel",
    "actionSlug": "server-side",
    "platformName": "TikTok",
    "pixelName": "TikTok Pixel",
    "badge": "Server-Side Tracking",
    "title": "TikTok Events API Setup for Shopify (Server-Side Tracking)",
    "description": "How to connect TikTok's Events API to your Shopify store, deduplicate events with the browser pixel, and check your match rate in Ads Manager.",
    "h1": "TikTok Events API Setup for Shopify: Server-Side Tracking",
    "intro": [
      "TikTok's Events API lets you send conversion events directly from your server to TikTok, alongside, not instead of, the browser pixel. That matters on Shopify specifically because TikTok's in-app browser and standard mobile ad blockers both cause the browser pixel to miss a real share of events, and the Events API is the way to recover them without touching your theme code.",
      "Pixel Tracker supports TikTok's Events API, connecting it through Shopify ScriptTags so you don't need to edit theme files or maintain custom code. This page walks through what the Events API actually does, how to connect it, and how to confirm it's working by checking your match rate in TikTok Ads Manager. For the general setup of the pixel itself, see our [TikTok pixel setup guide](/pixel-tracker/guides/tiktok-pixel-setup)."
    ],
    "sections": [
      {
        "heading": "What the Events API Actually Adds",
        "paragraphs": [
          "The browser pixel depends on JavaScript running successfully in the shopper's browser, which fails more often than most merchants realize once you account for ad blockers, Safari's tracking prevention, and TikTok's own in-app browser environment. The Events API sends the same events, PageView, AddToCart, InitiateCheckout, PlaceAnOrder, directly from Shopify's servers instead, so an event can still reach TikTok even when the browser-side pixel didn't fire. It's a supplement to the pixel, not a replacement for it."
        ]
      },
      {
        "heading": "Getting Your Events API Access Token",
        "paragraphs": [
          "In TikTok Ads Manager, open Assets, then Events, then select your pixel and go to its Events API setup screen. Generate an access token there, this is what authorizes Pixel Tracker to send events to TikTok on your store's behalf. Treat this token like a password: anyone with it can send events to your ad account, so only paste it into a connection you trust."
        ]
      },
      {
        "heading": "Connecting Pixel Tracker to the Events API",
        "paragraphs": [
          "Paste the access token into Pixel Tracker's TikTok connection settings, alongside your pixel ID. Pixel Tracker sends the matching server-side events for the same standard events your browser pixel already tracks, so you don't need to choose one over the other or maintain two separate event schemas."
        ]
      },
      {
        "heading": "Event Deduplication: Why Matching Event IDs Matter",
        "paragraphs": [
          "When the same purchase fires from both the browser pixel and the Events API, TikTok needs a way to know it's one event, not two. That's done by giving both the browser event and the server event the same event ID for the same order. Without matching event IDs, you'll see conversions in Ads Manager running higher than your actual Shopify order count, because TikTok counted the same sale twice.",
          "Pixel Tracker handles this matching automatically so you don't have to manage event IDs by hand."
        ]
      },
      {
        "heading": "Checking Your Match Rate After Setup",
        "paragraphs": [
          "Give it a few days of real traffic, then check the Event Match Quality or match rate figures in TikTok Ads Manager for your pixel. A meaningful jump in matched events after connecting the Events API is the clearest sign it's working. If you don't see improvement, double check that the access token is still valid and that your event IDs are actually deduplicating rather than creating duplicate events."
        ]
      }
    ],
    "steps": [
      {
        "title": "Open your pixel's Events API setup screen in TikTok Ads Manager",
        "body": "Go to Assets, then Events, select your TikTok pixel, and find the Events API section to generate an access token."
      },
      {
        "title": "Generate and copy the access token",
        "body": "TikTok generates a token scoped to that pixel. Keep it private since it authorizes sending events to your ad account."
      },
      {
        "title": "Paste the token into Pixel Tracker",
        "body": "Add the access token and pixel ID to Pixel Tracker's TikTok connection settings. No theme edits or custom code are required."
      },
      {
        "title": "Confirm events are deduplicating correctly",
        "body": "Compare TikTok-reported conversions against actual Shopify order counts for the same window. Matching numbers mean event IDs are deduplicating properly."
      },
      {
        "title": "Check match rate after a few days",
        "body": "Give TikTok a few days of live traffic, then check Event Match Quality in Ads Manager to confirm the Events API connection is improving matched events."
      }
    ],
    "symptoms": [],
    "faqs": [
      {
        "q": "What does TikTok's Events API do that the browser pixel doesn't?",
        "a": "It sends conversion events directly from Shopify's servers to TikTok, so events can still be recorded even when the browser pixel is blocked by an ad blocker, Safari's tracking prevention, or restrictions inside TikTok's in-app browser."
      },
      {
        "q": "Where do I get my TikTok Events API access token?",
        "a": "In TikTok Ads Manager, go to Assets, then Events, select your pixel, and open its Events API setup screen. You'll generate the access token there and paste it into Pixel Tracker."
      },
      {
        "q": "Will the Events API cause duplicate conversions in Ads Manager?",
        "a": "Only if the browser and server events for the same order aren't tagged with a matching event ID. Pixel Tracker handles this deduplication automatically, so the same purchase isn't counted twice."
      },
      {
        "q": "Does Pixel Tracker support server-side tracking for platforms other than TikTok?",
        "a": "Yes, Pixel Tracker also supports Facebook's Conversions API. Server-side tracking for Google Ads, Snapchat, Pinterest, LinkedIn, and X isn't available."
      },
      {
        "q": "How do I know if the Events API connection is actually working?",
        "a": "Check your Event Match Quality or match rate in TikTok Ads Manager a few days after connecting it. A visible increase in matched events is the clearest confirmation. See our [server-side tracking guide](/pixel-tracker/guides/server-side-tracking) for more on reading these numbers."
      }
    ],
    "related": [
      {
        "label": "TikTok Pixel Hub",
        "href": "/pixel-tracker/tiktok-pixel"
      },
      {
        "label": "TikTok Pixel Events Reference",
        "href": "/pixel-tracker/tiktok-pixel/events"
      },
      {
        "label": "TikTok Pixel Troubleshooting",
        "href": "/pixel-tracker/tiktok-pixel/troubleshooting"
      },
      {
        "label": "Server-Side Tracking Guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Set Up the TikTok Pixel on Shopify",
        "href": "/pixel-tracker/guides/tiktok-pixel-setup"
      },
      {
        "label": "Join the Waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "twitter-pixel",
    "actionSlug": "troubleshooting",
    "platformName": "X (Twitter)",
    "pixelName": "X (Twitter) Pixel",
    "badge": "Troubleshooting",
    "title": "X (Twitter) Pixel Not Firing on Shopify: Troubleshooting Guide",
    "description": "Troubleshoot X (Twitter) pixel tracking issues on Shopify: missing PageView and Purchase events, ad blockers, script conflicts, and fixes that work.",
    "h1": "X (Twitter) Pixel Not Firing on Shopify",
    "intro": [
      "If conversions in your X (Twitter) Ads Manager look thin compared to what Shopify shows in orders, you are not imagining it. X's pixel setup has gone through more churn than Meta's or TikTok's since the platform's ownership and branding changed, and that churn shows up as missing PageView, AddToCart, or Purchase events, delayed reporting, or a pixel that looks connected but sends nothing.",
      "This guide walks through the most common reasons an X pixel stops reporting on a Shopify store and how to check each one yourself, whether you are using the [X (Twitter) Pixel overview](/pixel-tracker/twitter-pixel) or set the tag up some other way. Most of the time the fix takes a few minutes once you know where to look."
    ],
    "sections": [
      {
        "heading": "Why X (Twitter) events go missing more often than other pixels",
        "paragraphs": [
          "X's ad tooling has changed hands and names multiple times since the Twitter to X rebrand, and the conversion tracking documentation has not always kept pace. Dashboards get renamed, event definitions shift, and older setup guides reference menus that no longer exist. None of that is a Shopify problem, but it means an X pixel that worked fine six months ago can quietly stop matching what the current dashboard expects.",
          "On top of that, X's own tracking requests are a well-known target for ad blockers and browser tracking-protection lists, more so than most other ad platforms. That combination, shifting product plus aggressive blocking, is why X tends to show gaps other pixels do not."
        ]
      },
      {
        "heading": "Confirm the pixel is actually loading before you troubleshoot further",
        "paragraphs": [
          "Open your Shopify storefront in an incognito or private window with no ad blocker running, then open your browser's developer tools and check the Network tab while you browse a product page and add something to cart. You are looking for outbound requests to X's tracking domain firing on page load and on the add-to-cart action. If you see no request at all, the pixel is not loading. If you see the request firing but nothing shows up later in X Ads Manager, the problem is on the reporting side, not the install."
        ]
      },
      {
        "heading": "Rule out ad blockers and browser privacy settings",
        "paragraphs": [
          "X's website tag is one of the tags most commonly blocked by browser extensions like uBlock Origin and by Safari's and Firefox's built-in tracking protection. Before assuming your setup is broken, test in a plain browser profile with no extensions installed. If events appear cleanly there but not in your everyday browser, the issue is blocking on your end, not the tracking setup itself, and no fix on the Shopify or Pixel Tracker side will change that."
        ]
      },
      {
        "heading": "Check for conflicting or duplicate pixel installs",
        "paragraphs": [
          "If an X pixel was ever added manually through a theme edit, a Shopify app, or a tag manager, and Pixel Tracker was later connected on top of it, you can end up with two tags firing at once or, in some cases, one canceling the other out. Check your theme code, any tag manager containers, and your installed apps list for a second X tag before assuming the pixel itself is broken."
        ]
      },
      {
        "heading": "When the pixel is installed correctly but numbers still look off",
        "paragraphs": [
          "Even a correctly firing pixel will under-report compared to your actual Shopify orders. Ad blockers, iOS privacy changes, and browser cookie restrictions all remove a portion of client-side tracking regardless of platform, and X sees more of this loss than most. If the gap is large and consistent, that is expected behavior for a browser-only pixel, not a sign something is broken. For a fuller picture of true order volume against what pixels report, see [Pixel Tracker's guide to multi-channel attribution](/pixel-tracker/guides/multi-channel-attribution)."
        ]
      }
    ],
    "steps": [
      {
        "title": "Check Pixel Tracker's connection status",
        "body": "In your Pixel Tracker dashboard, confirm the X (Twitter) pixel shows as connected and that the pixel ID listed matches the one in your X Ads Manager account. A mismatch here is the single most common cause of a pixel that looks set up but reports nothing."
      },
      {
        "title": "Test with a clean browser profile",
        "body": "Open your store in an incognito window with all extensions disabled and browse as a customer would: view a product, add to cart, and start checkout. This rules out ad blockers before you spend time on anything else."
      },
      {
        "title": "Watch the Network tab for the tracking request",
        "body": "With developer tools open, filter the Network tab for requests going to X's tracking domain. Confirm a request fires on page load and again on add-to-cart and purchase actions."
      },
      {
        "title": "Check X Ads Manager's event data, not just conversions",
        "body": "X Ads Manager can take longer to reflect new events than Meta or TikTok. Look at raw event data rather than conversion totals, and give it at least a few hours before concluding nothing is arriving."
      },
      {
        "title": "Look for a second pixel firing on the same store",
        "body": "Search your theme code and any tag manager for another X tag installed outside Pixel Tracker. Duplicate tags can create inconsistent or doubled event counts that look like a tracking bug."
      },
      {
        "title": "Compare pixel data against Shopify orders over the same window",
        "body": "Pull your actual order count for a specific day and compare it to what X Ads Manager reports for that same day. Some gap between the two is normal for any browser-only pixel; a near-total gap points to a setup issue."
      },
      {
        "title": "Reconnect the pixel if X's dashboard has changed",
        "body": "Because X's ad tooling changes without much notice, a pixel that was working can break after X updates its own systems. If everything above checks out, disconnect and reconnect the X pixel in Pixel Tracker to force a fresh handshake."
      }
    ],
    "symptoms": [
      "No events appearing in X Ads Manager",
      "Purchase conversions far below actual Shopify orders",
      "Pixel shows as connected but sends no data",
      "PageView events fire but AddToCart and Purchase don't",
      "Numbers work in one browser but not another",
      "Event data delayed by hours or longer",
      "Duplicate or doubled event counts"
    ],
    "faqs": [
      {
        "q": "How do I check if my X (Twitter) pixel is actually installed on Shopify?",
        "a": "Open your store in an incognito window, open developer tools, and watch the Network tab for a request to X's tracking domain while you browse a product and add it to cart. If Pixel Tracker shows the connection as active but you see no request, the issue is on the browser or blocking side, not the setup."
      },
      {
        "q": "Why does X Ads Manager show fewer conversions than my Shopify orders?",
        "a": "Client-side pixels like X's lose a portion of events to ad blockers, Safari and Firefox tracking protection, and iOS privacy restrictions. X tends to lose more than Meta or TikTok because its tracking scripts are more commonly targeted by blocklists. Some gap is normal; a near-total gap usually means the pixel isn't firing at all."
      },
      {
        "q": "Are ad blockers really a bigger problem for X than other platforms?",
        "a": "Yes. X's website tag domain has been on browser blocklists longer than most, so a higher share of your visitors will have it blocked outright regardless of how correctly it's installed."
      },
      {
        "q": "Can I run an X pixel alongside Meta and TikTok pixels on the same store?",
        "a": "Yes, running multiple platform pixels together is normal and Pixel Tracker manages all of them from one dashboard. Just check you haven't also added an X tag manually somewhere else, since two X tags firing at once can cause double-counted events."
      },
      {
        "q": "Why does new pixel data take so long to show up in X Ads Manager?",
        "a": "X's reporting has historically lagged behind Meta's or TikTok's, especially since its ad tooling has changed hands. Give it several hours before assuming an event did not arrive, and check raw event data rather than conversion totals first."
      }
    ],
    "related": [
      {
        "label": "X (Twitter) Pixel overview",
        "href": "/pixel-tracker/twitter-pixel"
      },
      {
        "label": "X (Twitter) events tracked",
        "href": "/pixel-tracker/twitter-pixel/events"
      },
      {
        "label": "X (Twitter) server-side tracking",
        "href": "/pixel-tracker/twitter-pixel/server-side"
      },
      {
        "label": "Multi-channel attribution guide",
        "href": "/pixel-tracker/guides/multi-channel-attribution"
      },
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "Join the Waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "twitter-pixel",
    "actionSlug": "events",
    "platformName": "X (Twitter)",
    "pixelName": "X (Twitter) Pixel",
    "badge": "Events",
    "title": "Tracking X (Twitter) Events on Shopify: PageView, Purchase",
    "description": "See exactly which X (Twitter) events Pixel Tracker sends from your Shopify store, including PageView, ViewContent, AddToCart, and Purchase.",
    "h1": "X (Twitter) Events Tracked on Shopify",
    "intro": [
      "Pixel Tracker's X (Twitter) pixel sends the standard website events X's ad platform uses for conversion tracking: PageView, ViewContent, AddToCart, and Purchase. These are the same event types X Ads Manager expects for building audiences and measuring conversions, mapped automatically once you connect your store, with no manual event coding required.",
      "This page breaks down what each event tracks, when it fires, and what to expect from X's side of the reporting. If you're checking whether server-side tracking is available for X as well, see the [server-side tracking page](/pixel-tracker/twitter-pixel/server-side) for what is and is not supported today."
    ],
    "sections": [
      {
        "heading": "The events Pixel Tracker sends to X",
        "paragraphs": [
          "Pixel Tracker maps four core Shopify storefront actions to X's standard events: a storefront page load becomes PageView, viewing a product page becomes ViewContent, adding an item to cart becomes AddToCart, and a completed order becomes Purchase. These four cover what most Shopify merchants need for prospecting and retargeting audiences in X Ads Manager, along with basic conversion measurement. They match the standard event names X's own documentation describes, so anything you build in X Ads Manager around these events should behave the same way it would with a pixel installed any other way."
        ]
      },
      {
        "heading": "How these events are installed",
        "paragraphs": [
          "The pixel is added through a Shopify ScriptTag, which runs directly on your storefront pages without editing any theme files. That means installation doesn't touch your theme code, and events fire from the customer's browser as they move through your store. It also means, like any client-side pixel, the events depend on the browser actually loading and running that script, so ad blockers or disabled JavaScript will prevent an event from ever reaching X, regardless of how correctly the pixel is configured."
        ]
      },
      {
        "heading": "What X does with each event",
        "paragraphs": [
          "PageView and ViewContent build the audiences X uses for retargeting and lookalike-style targeting. AddToCart is a useful mid-funnel signal for catching abandoned carts in ad campaigns. Purchase is what X Ads Manager uses for conversion reporting and, if you're bidding toward conversions, for optimization. Because X's ad tooling has changed a fair amount since the platform's rebrand, exactly how these events surface in campaign setup can look different than what older guides describe. The event names and firing logic are stable; the dashboard around them is what has shifted."
        ]
      },
      {
        "heading": "What these events do not include",
        "paragraphs": [
          "The four events above are client-side only and do not include server-side confirmation, deduplication with a server-side event, or advanced matching using hashed customer data. If you need that level of tracking, X is not currently one of the platforms Pixel Tracker supports server-side; Meta and TikTok are. See [Pixel Tracker's server-side tracking guide](/pixel-tracker/guides/server-side-tracking) for what that involves on the platforms where it's available."
        ]
      },
      {
        "heading": "Verifying events without guessing",
        "paragraphs": [
          "X Ads Manager's event reporting can lag by hours rather than offering the near-real-time view you get from Meta or TikTok. Checking your raw event data after a test purchase is still the most reliable way to confirm PageView, AddToCart, and Purchase are all landing correctly, rather than relying on campaign-level conversion numbers, which take longer to populate and can be affected by X's own attribution windows and modeling."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "Which events does Pixel Tracker send to X (Twitter)?",
        "a": "PageView, ViewContent, AddToCart, and Purchase, the same standard set X's ad platform uses for retargeting audiences and conversion tracking."
      },
      {
        "q": "Do I need to configure event mapping myself?",
        "a": "No. Once you connect your X pixel in Pixel Tracker, the four events are mapped automatically to your Shopify storefront actions; there's no manual coding step."
      },
      {
        "q": "Does Pixel Tracker send custom or dynamic product events to X?",
        "a": "No, Pixel Tracker sends the four standard events (PageView, ViewContent, AddToCart, Purchase). It does not send custom events or dynamic product feed-based events to X."
      },
      {
        "q": "Why do events sometimes take a while to show up in X Ads Manager?",
        "a": "X's reporting has generally lagged Meta's and TikTok's, and that has not changed much since the platform's rebrand. Check raw event data rather than campaign conversion totals if you are testing right after setup."
      },
      {
        "q": "Does Pixel Tracker support server-side event tracking for X?",
        "a": "Not currently. Pixel Tracker's X connection is a client-side pixel only; server-side tracking is available today for [Meta and TikTok](/pixel-tracker/meta-pixel/server-side)."
      }
    ],
    "related": [
      {
        "label": "X (Twitter) Pixel overview",
        "href": "/pixel-tracker/twitter-pixel"
      },
      {
        "label": "Troubleshooting X (Twitter) pixel issues",
        "href": "/pixel-tracker/twitter-pixel/troubleshooting"
      },
      {
        "label": "X (Twitter) server-side tracking",
        "href": "/pixel-tracker/twitter-pixel/server-side"
      },
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "Join the Waitlist",
        "href": "/#waitlist"
      }
    ]
  },
  {
    "platformSlug": "twitter-pixel",
    "actionSlug": "server-side",
    "platformName": "X (Twitter)",
    "pixelName": "X (Twitter) Pixel",
    "badge": "Server-Side Tracking",
    "title": "X (Twitter) Server-Side Tracking on Shopify: What's Possible",
    "description": "Pixel Tracker does not support server-side tracking for X (Twitter) today. Here's what that means, why it's a lower priority, and your real options.",
    "h1": "X (Twitter) Server-Side Tracking on Shopify",
    "intro": [
      "If you've set up server-side tracking for Meta or TikTok and are wondering whether X (Twitter) offers something similar, the short answer is that Pixel Tracker doesn't support it for X today. X does have its own server-side and API-based conversion options in some form, but they are less standardized and less consistently documented than Meta's Conversions API or TikTok's Events API, largely a byproduct of how much the platform's ad tooling has changed since the Twitter to X rebrand.",
      "This page explains what server-side tracking would actually do for your X campaigns, why it's a lower priority for most Shopify merchants right now, and what your realistic options are given where Pixel Tracker's support stands today. For the full picture of what Pixel Tracker does support for X, see the [X (Twitter) Pixel overview](/pixel-tracker/twitter-pixel)."
    ],
    "sections": [
      {
        "heading": "What Pixel Tracker supports for X today",
        "paragraphs": [
          "Pixel Tracker connects X (Twitter) through a client-side, browser-based pixel only. It sends PageView, ViewContent, AddToCart, and Purchase events directly from the customer's browser via a Shopify ScriptTag, the same installation method used for the other six platforms Pixel Tracker supports. There is no server-side or API-based component to this connection, and Pixel Tracker does not set up, manage, or maintain any such integration for X."
        ]
      },
      {
        "heading": "What server-side tracking would mean for X",
        "paragraphs": [
          "Server-side tracking sends event data from your server, or a middle layer, directly to the ad platform, instead of relying only on the customer's browser. For platforms like Meta and TikTok, this recovers events lost to ad blockers, Safari's and Firefox's tracking protections, and iOS privacy restrictions, often a meaningful percentage of total conversions. In principle, the same benefit would apply to X: more complete conversion data, especially since X's client-side tag is commonly blocked. In practice, X's server-side options are less mature and less standardized than Meta's or TikTok's, which makes building and maintaining a reliable integration harder to justify right now. For more on how server-side tracking works generally and why Meta and TikTok are the two platforms Pixel Tracker supports, see [Pixel Tracker's server-side tracking guide](/pixel-tracker/guides/server-side-tracking)."
        ]
      },
      {
        "heading": "Why this is a lower priority for most Shopify merchants",
        "paragraphs": [
          "For most Shopify stores, X (Twitter) is a smaller share of ad spend and conversions than Meta or TikTok, and its tracking documentation and product surface have changed enough since the rebrand that building against it carries more risk of breaking without notice. Pixel Tracker has prioritized server-side support for Meta and TikTok because those integrations, Conversions API and Events API respectively, are well documented, stable, and used by the largest share of merchants running paid ads on Shopify. X may get equivalent support in the future if its own tooling stabilizes, but there's no committed timeline for that today."
        ]
      },
      {
        "heading": "Your realistic options right now",
        "paragraphs": [
          "For X specifically, the practical options are to run the client-side pixel as-is and accept some data loss from blockers and browser privacy settings, or to reduce reliance on X's own attribution by looking at your actual Shopify order data alongside pixel numbers. If accurate cross-channel measurement matters more than any single platform's own reporting, Pixel Tracker's multi-channel attribution guide covers how to do that without needing server-side tracking on every platform. Pixel Tracker's server-side tracking is available today for Meta and TikTok; both are covered in detail on their own server-side pages, linked below."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "Does Pixel Tracker support server-side tracking for X (Twitter)?",
        "a": "No. Pixel Tracker's X connection is a client-side browser pixel only. Server-side tracking is available today for Meta and TikTok, not for X."
      },
      {
        "q": "Does X (Twitter) itself offer server-side conversion tracking?",
        "a": "X has some form of server-side and API-based conversion tracking, but it is less standardized and less consistently documented than Meta's Conversions API or TikTok's Events API, and it isn't something Pixel Tracker sets up or manages."
      },
      {
        "q": "Will Pixel Tracker add X server-side tracking in the future?",
        "a": "It's possible if X's ad tooling and documentation stabilize, but there's no committed timeline. Meta and TikTok were prioritized because their server-side APIs are stable and widely used."
      },
      {
        "q": "How much conversion data am I actually losing without server-side tracking on X?",
        "a": "It varies by store, but client-side-only tracking on X tends to lose more to ad blockers and browser privacy protections than Meta or TikTok do, since X's tracking domain is more commonly blocked."
      },
      {
        "q": "What should I do instead if X server-side tracking matters to me?",
        "a": "Compare your actual Shopify order totals against what X Ads Manager reports to gauge the real gap, and consider [Pixel Tracker's multi-channel attribution guide](/pixel-tracker/guides/multi-channel-attribution) for a more complete view across all your ad channels, not just X."
      }
    ],
    "related": [
      {
        "label": "X (Twitter) Pixel overview",
        "href": "/pixel-tracker/twitter-pixel"
      },
      {
        "label": "X (Twitter) events tracked",
        "href": "/pixel-tracker/twitter-pixel/events"
      },
      {
        "label": "Troubleshooting X (Twitter) pixel issues",
        "href": "/pixel-tracker/twitter-pixel/troubleshooting"
      },
      {
        "label": "Meta Conversions API server-side setup",
        "href": "/pixel-tracker/meta-pixel/server-side"
      },
      {
        "label": "TikTok Events API server-side setup",
        "href": "/pixel-tracker/tiktok-pixel/server-side"
      },
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      }
    ]
  }
];

export function getAllPlatformActionPages(): PlatformActionPage[] {
  return platformActionPages;
}

export function getPlatformActionPage(
  platformSlug: string,
  actionSlug: string,
): PlatformActionPage | undefined {
  return platformActionPages.find(
    (p) => p.platformSlug === platformSlug && p.actionSlug === actionSlug,
  );
}
