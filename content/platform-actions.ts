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
      "Check the conversion ID and label in your existing integration and compare it with Google Ads conversion diagnostics. Use Tag Assistant to inspect browser activity, then test checkout separately. GA4 key events and Google Ads conversion actions are separate. Confirm which action is primary for bidding before comparing their totals."
    ],
    "sections": [
      {
        "heading": "You might be looking at GA4, not Google Ads",
        "paragraphs": [
          "Google Analytics 4 and Google Ads track conversions separately, using different IDs and different dashboards, even though both use a version of Google's tag. It's common for a merchant to see purchase events reporting fine in GA4 and assume Google Ads tracking is also fine, when the Ads account is actually using a completely different conversion action with its own conversion ID and label. Confirm you're checking the conversion action inside the Google Ads interface, not a GA4 report, before troubleshooting further."
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
        "title": "Check your Google Ads integration",
        "body": "Use the settings in your installed integration to confirm the conversion ID and label. Pixel Tracker is not available to install. If your integration uses a theme app embed, activate it in the theme editor and test checkout separately."
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
        "a": "Yes. An extension or browser setting can block the tag or its request. Compare a test with extensions disabled against normal browsing, and check consent settings separately."
      },
      {
        "q": "What's the difference between Tag Assistant and Google Ads Diagnostics?",
        "a": "Tag Assistant checks whether the tag actually fires in your browser during a real session. Google Ads Diagnostics checks whether Google Ads itself has received and counted that data. A tag can pass Tag Assistant and still show a problem in Diagnostics if the conversion ID or label doesn't match."
      },
      {
        "q": "My conversion count is lower than my Shopify order count, is that normal?",
        "a": "The totals measure different things. Shopify records orders, while Google Ads reports conversions attributed under your selected settings. Check dates, conversion actions, attribution windows, consent, and delivery before treating a difference as a broken tag."
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
      }
    ],
    "related": [
      {
        "label": "Google Ads conversion event checks",
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
    "title": "Google Ads Conversion Actions: What to Verify",
    "description": "Check Google Ads tracking on Shopify: verify the conversion ID and label, event receipt, and purchase details with your current integration.",
    "h1": "Google Ads Conversion Actions: What to Verify",
    "intro": [
      "Check the conversion ID and label in your existing integration and compare it with Google Ads conversion diagnostics. Use Tag Assistant to inspect browser activity, then test checkout separately. GA4 key events and Google Ads conversion actions are separate. Confirm which action is primary for bidding before comparing their totals."
    ],
    "sections": [
      {
        "heading": "Enhanced Conversions and why event accuracy matters",
        "paragraphs": [
          "Browser and server delivery are separate checks. Verify the provider's documented Google Ads server integration and inspect receipt in Google Ads conversion diagnostics. Pixel Tracker server-side delivery is not confirmed."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "What's the actual difference between GA4 and the Google Ads conversion tag?",
        "a": "GA4 measures site activity in an Analytics property. Google Ads conversion actions measure outcomes used for Ads reporting and bidding. Confirm the intended action and import settings; a GA4 event does not automatically prove the separate Ads conversion tag works."
      },
      {
        "q": "Do I need to build conversion actions myself in Google Ads?",
        "a": "You need an appropriate conversion action in the intended Ads account. Some integrations create or import actions, while others require an existing ID and label. Follow the provider's documented setup and check the action used for bidding."
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
    "description": "Google Ads supports server-side conversion tracking through GTM. Compare that with Enhanced Conversions, verify purchases, and see Pixel Tracker's limits.",
    "h1": "Google Ads Server-Side Tracking: What's Actually Possible",
    "intro": [
      "Google Ads supports server-side conversion tracking through Google Tag Manager. Pixel Tracker is in development and does not manage that setup; its own launch event coverage is still being verified.",
      "Enhanced Conversions adds customer matching data to conversion measurement; it isn't another name for server-side tagging. This guide covers Google's supported options and a purchase-verification checklist. Pixel Tracker is still in development and isn't publicly installable yet."
    ],
    "sections": [
      {
        "heading": "What Google Ads server-side tracking requires",
        "paragraphs": [
          "[Google's server-side Ads setup guide](https://developers.google.com/tag-platform/tag-manager/server-side/ads-setup) uses a GTM web container, a server container, and a GA4 client. A server-side Conversion Linker and Ads Conversion Tracking tag send the conversion to Google Ads. Pixel Tracker doesn't create or manage those containers.",
          "Server-side delivery doesn't make an event source independent of the browser. Google's documented GTM path still needs incoming event data. Test that path and respect the consent settings of the store; a server container doesn't guarantee recovery of every missing purchase."
        ]
      },
      {
        "heading": "Enhanced Conversions and server-side tagging solve different problems",
        "paragraphs": [
          "Enhanced Conversions adds first-party customer matching data to a conversion. Google's server-side Ads guide also supports Enhanced Conversions, so it isn't limited to a browser-only Ads tag. Choose the collection method for your implementation and verify it separately from whether the purchase tag fires."
        ]
      },
      {
        "heading": "Choose one purchase-tracking path before adding more tags",
        "paragraphs": [
          "For Shopify's supported native integration, start with [Google's Shopify tag setup instructions](https://support.google.com/analytics/answer/12183125). If you instead need a custom GTM server container, follow Google's server-side guide with the person responsible for your tagging infrastructure. Neither route requires an unreleased Pixel Tracker feature.",
          "List the existing purchase sources first: the Google & YouTube app, theme code, custom pixels, and GTM. Check the conversion action each sends to. A GA4 purchase event and an Ads conversion are separate destinations; don't make multiple purchase actions primary without deciding what your campaigns should count."
        ]
      },
      {
        "heading": "Check transaction IDs before trusting the totals",
        "paragraphs": [
          "[Google's transaction-ID guidance](https://support.google.com/google-ads/answer/6386790) explains that duplicate hits to the same conversion action can be identified by the same transaction ID. Use one stable ID for an order and a different ID for a different order. A transaction ID doesn't merge unrelated conversion actions.",
          "If a purchase is sent through multiple supported sources, check that they use the same order ID format. Hashing or a server container doesn't replace this check. Inspect consent handling and avoid putting customer identifiers into a transaction ID."
        ]
      },
      {
        "heading": "Pixel Tracker availability and scope",
        "paragraphs": [
          "Pixel Tracker is in development and is not available to install. It does not configure Google Tag Manager server containers or Enhanced Conversions. A saved G- measurement ID can send a GA4 purchase when an order is paid, with the Shopify order id as the transaction id. That purchase is a GA4 event, not a Google Ads conversion."
        ]
      }
    ],
    "steps": [
      {
        "title": "Choose the destination",
        "body": "Record the intended Ads conversion ID and label, purchase value, and currency. Check that the campaign uses the intended primary purchase action."
      },
      {
        "title": "Run a test purchase",
        "body": "Use a test store/order and Tag Assistant to follow the purchase. For a GTM server implementation, open server-container Preview and check the Ads tag fired and its Console has no transmission errors."
      },
      {
        "title": "Inspect the order ID",
        "body": "Verify the transaction ID is present and consistent for the same order. Repeat with a second order and confirm its ID differs; a fixed test value will undercount real purchases."
      },
      {
        "title": "Check competing sources",
        "body": "Look for another theme, app, custom pixel, or GTM tag sending the same purchase. After verifying a replacement path, remove the equivalent legacy sender using the integration documentation."
      },
      {
        "title": "Review reporting separately",
        "body": "A fired tag proves a delivery attempt, not an attributed ad sale. Check the conversion action diagnostics and reporting after processing; keep test purchases separate from business performance."
      }
    ],
    "symptoms": [],
    "faqs": [
      {
        "q": "Does Google Ads support server-side conversion tracking?",
        "a": "Yes. Google documents an Ads Conversion Tracking tag for GTM server containers. That requires a separate implementation; Pixel Tracker does not manage it."
      },
      {
        "q": "Is Enhanced Conversions the same as server-side tracking?",
        "a": "No. Enhanced Conversions supplies customer matching data. Server-side tagging controls where a tag runs. Google supports using them together."
      },
      {
        "q": "Will transaction IDs prevent all duplicate conversions?",
        "a": "No. The ID must be stable for the same order and unique across orders. Deduplication for one conversion action does not combine separate conversion actions."
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
        "label": "Google Ads conversion event checks",
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
      "Check the Partner ID and conversion rule in your existing integration and compare it with LinkedIn Campaign Manager. Use Insight Tag diagnostics to inspect browser activity, then test checkout separately. Installing the Insight Tag is separate from defining a conversion. Confirm the rule measures the intended action; a page visit is not proof of a purchase.",
      "This guide walks through the specific places things go wrong: mismatched Partner IDs, conversion rules that don't match real page behavior, ad blockers and consent tools quietly dropping the tag's request, and Campaign Manager's own reporting lag. If you haven't looked at what LinkedIn Insight Tag can and can't track yet, it's worth reading the [events page](/pixel-tracker/linkedin-pixel/events) first so you know what to expect before you start debugging."
    ],
    "sections": [
      {
        "heading": "Verify your LinkedIn configuration",
        "paragraphs": [
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
        "title": "Check your LinkedIn integration",
        "body": "Use the settings in your installed integration to confirm the Partner ID and conversion rule. Pixel Tracker is not available to install. If your integration uses a theme app embed, activate it in the theme editor and test checkout separately."
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
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
      "Check the Partner ID and conversion rule in your existing integration and compare it with LinkedIn Campaign Manager. Use Insight Tag diagnostics to inspect browser activity, then test checkout separately. Installing the Insight Tag is separate from defining a conversion. Confirm the rule measures the intended action; a page visit is not proof of a purchase."
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
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
    "title": "LinkedIn Server-Side Tracking for Shopify: What to Verify",
    "description": "Check LinkedIn server event delivery, consent, purchase details, and duplicate handling on Shopify. Pixel Tracker server-side support is not confirmed.",
    "h1": "LinkedIn Server-Side Tracking for Shopify: What to Verify",
    "intro": [
      "Server-side delivery needs a working integration that sends events from your store to LinkedIn. Adding a browser pixel does not establish that connection.",
      "Pixel Tracker is in development. Its server-side delivery and browser/server deduplication are not confirmed. The checks below are for evaluating an available integration."
    ],
    "sections": [
      {
        "heading": "Check the LinkedIn integration, not just the pixel",
        "paragraphs": [
          "Start with [LinkedIn Conversions API documentation](https://learn.microsoft.com/en-us/linkedin/marketing/conversions/conversions-overview?view=li-lms-2026-02) and the documentation for the provider you use. Confirm which Shopify events it supports and whether it sends them from the browser, server, or both.",
          "Installing the Insight Tag is separate from defining a conversion. Confirm the rule measures the intended action; a page visit is not proof of a purchase."
        ]
      },
      {
        "heading": "Verify receipt separately from attribution",
        "paragraphs": [
          "Look for server-event receipt in LinkedIn Campaign Manager or the delivery logs supplied by your integration. A successful browser request in Insight Tag diagnostics does not prove a server event arrived. An accepted event also does not guarantee an attributed conversion.",
          "Compare conversion rule, value, and event identifier against a test order. Check failed deliveries and retries before relying on totals."
        ]
      },
      {
        "heading": "Prevent duplicate purchases",
        "paragraphs": [
          "If browser and server report the same action, follow the platform's deduplication requirements. Preserve the same event identity across the two paths and across retries where required; a new purchase needs a new identity. Do not add another independent purchase sender without checking the existing one."
        ]
      },
      {
        "heading": "Respect the same customer choices",
        "paragraphs": [
          "Server delivery does not override consent or privacy settings. Confirm how the integration handles declined consent, permitted matching data, and data retention before enabling it."
        ]
      }
    ],
    "steps": [
      {
        "title": "Confirm the supported delivery path",
        "body": "Read the chosen provider's current LinkedIn setup instructions and supported Shopify events. Pixel Tracker does not have a verified server setup to follow yet."
      },
      {
        "title": "Check a test purchase",
        "body": "Complete a test order and inspect LinkedIn Campaign Manager. Compare conversion rule, value, and event identifier with that order."
      },
      {
        "title": "Check overlap and retries",
        "body": "Confirm the browser/server pair is deduplicated according to platform requirements. Ensure a retry does not become a second purchase."
      },
      {
        "title": "Test consent states",
        "body": "Verify the integration respects the store's collection settings before using the events for reporting."
      }
    ],
    "symptoms": [
      "Browser events arrive but no server events appear",
      "Two purchase events appear for one test order",
      "Purchase value or currency differs from the order",
      "The provider shows failed requests or repeated retries"
    ],
    "faqs": [
      {
        "q": "Does a browser helper prove server delivery?",
        "a": "No. Check server receipt separately in LinkedIn Campaign Manager or your integration's delivery logs."
      },
      {
        "q": "Will server-side tracking make every order appear in ad reporting?",
        "a": "No. Delivery, customer consent, matching, and attribution are separate. Reconcile test events before interpreting campaign totals."
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
      "Check theme code, custom pixels, and installed apps for duplicate Meta senders. Keep one intended source for each event, with platform-specific deduplication if browser and server both send it. Test before removing an existing integration.",
      "This guide walks through the most common reasons Meta Pixel appears to stop working on a Shopify store, using Meta Pixel Helper and the Test Events tool in Events Manager to actually see what's happening rather than guessing from Ads Manager totals, which can lag by a day or more."
    ],
    "sections": [
      {
        "heading": "Read what Meta Pixel Helper is actually telling you",
        "paragraphs": [
          "Check the pixel or dataset ID in your existing integration and compare it with Meta Events Manager. Use Meta Pixel Helper to inspect browser activity, then test checkout separately. Shopify documents the Facebook & Instagram by Meta channel. Check its data-sharing settings and the connected pixel before adding a second integration."
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
        "title": "Check your Meta integration",
        "body": "Use the settings in your installed integration to confirm the pixel or dataset ID. Pixel Tracker is not available to install. If your integration uses a theme app embed, activate it in the theme editor and test checkout separately."
      },
      {
        "title": "Run Meta Pixel Helper on a real storefront page",
        "body": "Visit a product page and an actual cart, not just the homepage, and note whether PageView and ViewContent register at all before digging further."
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
        "a": "Check for the same pixel loaded by theme code, a custom pixel, and one or more apps. Repeated browser requests can indicate duplicate senders. If browser and server both report a purchase, check event deduplication separately in Events Manager."
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
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
    "description": "Check Meta tracking on Shopify: verify the pixel or dataset ID, event receipt, and purchase details with your current integration.",
    "h1": "Meta Pixel Events on Shopify: PageView to Purchase",
    "intro": [
      "Check the pixel or dataset ID in your existing integration and compare it with Meta Events Manager. Use Meta Pixel Helper to inspect browser activity, then test checkout separately. Shopify documents the Facebook & Instagram by Meta channel. Check its data-sharing settings and the connected pixel before adding a second integration.",
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
        "heading": "Verify your Meta / Facebook configuration",
        "paragraphs": [
          "Meta's algorithm, lookalike audiences, and dynamic ads are all built around a fixed set of standard events rather than arbitrary custom ones. Sending PageView, ViewContent, AddToCart, InitiateCheckout, and Purchase in the format Meta expects means your data plugs directly into features like Advantage+ campaigns without extra mapping work on your end."
        ]
      }
    ],
    "steps": [],
    "symptoms": [],
    "faqs": [
      {
        "q": "Do I need to configure these events manually in Events Manager?",
        "a": "That depends on the integration. Check its supported event mappings, then use Events Manager to verify receipt. Do not assume an installed base pixel also reports cart and checkout events."
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
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
    "title": "Meta Server-Side Tracking for Shopify: What to Verify",
    "description": "Check Meta server event delivery, consent, purchase details, and duplicate handling on Shopify. Pixel Tracker server-side support is not confirmed.",
    "h1": "Meta Server-Side Tracking for Shopify: What to Verify",
    "intro": [
      "Server-side delivery needs a working integration that sends events from your store to Meta. Adding a browser pixel does not establish that connection.",
      "Pixel Tracker is in development. Its server-side delivery and browser/server deduplication are not confirmed. The checks below are for evaluating an available integration."
    ],
    "sections": [
      {
        "heading": "Check the Meta integration, not just the pixel",
        "paragraphs": [
          "Start with [Meta Conversions API documentation](https://help.shopify.com/en/manual/promoting-marketing/analyze-marketing/meta-pixel) and the documentation for the provider you use. Confirm which Shopify events it supports and whether it sends them from the browser, server, or both.",
          "Shopify documents the Facebook & Instagram by Meta channel. Check its data-sharing settings and the connected pixel before adding a second integration."
        ]
      },
      {
        "heading": "Verify receipt separately from attribution",
        "paragraphs": [
          "Look for server-event receipt in Meta Events Manager or the delivery logs supplied by your integration. A successful browser request in Meta Pixel Helper does not prove a server event arrived. An accepted event also does not guarantee an attributed conversion.",
          "Compare event name, event ID, value, and currency against a test order. Check failed deliveries and retries before relying on totals."
        ]
      },
      {
        "heading": "Prevent duplicate purchases",
        "paragraphs": [
          "If browser and server report the same action, follow the platform's deduplication requirements. Preserve the same event identity across the two paths and across retries where required; a new purchase needs a new identity. Do not add another independent purchase sender without checking the existing one."
        ]
      },
      {
        "heading": "Respect the same customer choices",
        "paragraphs": [
          "Server delivery does not override consent or privacy settings. Confirm how the integration handles declined consent, permitted matching data, and data retention before enabling it."
        ]
      }
    ],
    "steps": [
      {
        "title": "Confirm the supported delivery path",
        "body": "Read the chosen provider's current Meta setup instructions and supported Shopify events. Pixel Tracker does not have a verified server setup to follow yet."
      },
      {
        "title": "Check a test purchase",
        "body": "Complete a test order and inspect Meta Events Manager. Compare event name, event ID, value, and currency with that order."
      },
      {
        "title": "Check overlap and retries",
        "body": "Confirm the browser/server pair is deduplicated according to platform requirements. Ensure a retry does not become a second purchase."
      },
      {
        "title": "Test consent states",
        "body": "Verify the integration respects the store's collection settings before using the events for reporting."
      }
    ],
    "symptoms": [
      "Browser events arrive but no server events appear",
      "Two purchase events appear for one test order",
      "Purchase value or currency differs from the order",
      "The provider shows failed requests or repeated retries"
    ],
    "faqs": [
      {
        "q": "Does a browser helper prove server delivery?",
        "a": "No. Check server receipt separately in Meta Events Manager or your integration's delivery logs."
      },
      {
        "q": "Will server-side tracking make every order appear in ad reporting?",
        "a": "No. Delivery, customer consent, matching, and attribution are separate. Reconcile test events before interpreting campaign totals."
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
      "Check the tag ID in your existing integration and compare it with Pinterest conversion diagnostics. Use Pinterest Tag Helper to inspect browser activity, then test checkout separately. Pinterest uses Checkout for completed transactions. Check the selected event and product details rather than assuming a generic PageVisit represents a sale.",
      "Check theme code, custom pixels, and installed apps for duplicate Pinterest senders. Keep one intended source for each event, with platform-specific deduplication if browser and server both send it. Test before removing an existing integration."
    ],
    "sections": [
      {
        "heading": "Verify your Pinterest configuration",
        "paragraphs": [
          "Browser and server delivery are separate checks. Verify the provider's documented Pinterest server integration and inspect receipt in Pinterest conversion diagnostics. Pixel Tracker server-side delivery is not confirmed."
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
      }
    ],
    "steps": [
      {
        "title": "Check your Pinterest integration",
        "body": "Use the settings in your installed integration to confirm the tag ID. Pixel Tracker is not available to install. If your integration uses a theme app embed, activate it in the theme editor and test checkout separately."
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
      "Check the tag ID in your existing integration and compare it with Pinterest conversion diagnostics. Use Pinterest Tag Helper to inspect browser activity, then test checkout separately. Pinterest uses Checkout for completed transactions. Check the selected event and product details rather than assuming a generic PageVisit represents a sale.",
      "Events show up on desktop but not on mobile Safari",
      "The tag worked in theme preview but vanished after publishing"
    ],
    "faqs": [
      {
        "q": "How do I find my Pinterest Tag ID?",
        "a": "Open the tag configuration in the intended Pinterest business account and copy its tag ID. Confirm the same ID is configured in your Shopify integration and appears in your browser test. It is separate from a server API credential."
      },
      {
        "q": "Can Pinterest Tag end up installed twice by accident?",
        "a": "Yes. Theme code, custom pixels, and apps can each add a tag. Inventory the active senders and use a test visit and order to confirm that each intended event is reported once."
      },
      {
        "q": "Will an ad blocker affect my own testing?",
        "a": "Yes. Most ad blockers and privacy browser extensions block pintrk requests specifically. Test in an incognito window with extensions disabled to get an accurate read."
      },
      {
        "q": "How long does Pinterest take to show events after they fire?",
        "a": "Tag Helper shows events in real time, but Pinterest Ads Manager's own Conversions dashboard can take a few hours to reflect the same data. If Tag Helper confirms firing, treat the dashboard delay as normal rather than a connection problem."
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
    "description": "Check Pinterest tracking on Shopify: verify the tag ID, event receipt, and purchase details with your current integration.",
    "h1": "Pinterest Standard Events for Shopify: Which Ones Fire",
    "intro": [
      "Check the tag ID in your existing integration and compare it with Pinterest conversion diagnostics. Use Pinterest Tag Helper to inspect browser activity, then test checkout separately. Pinterest uses Checkout for completed transactions. Check the selected event and product details rather than assuming a generic PageVisit represents a sale.",
      "This page covers what each event tracks, when it fires, and why some matter more than others for ad reporting. If an event isn't showing up the way you expect, check the [troubleshooting guide](/pixel-tracker/pinterest-pixel/troubleshooting) after confirming the setup here."
    ],
    "sections": [
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
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
    "title": "Pinterest Server-Side Tracking for Shopify: What to Verify",
    "description": "Check Pinterest server event delivery, consent, purchase details, and duplicate handling on Shopify. Pixel Tracker server-side support is not confirmed.",
    "h1": "Pinterest Server-Side Tracking for Shopify: What to Verify",
    "intro": [
      "Server-side delivery needs a working integration that sends events from your store to Pinterest. Adding a browser pixel does not establish that connection.",
      "Pixel Tracker is in development. Its server-side delivery and browser/server deduplication are not confirmed. The checks below are for evaluating an available integration."
    ],
    "sections": [
      {
        "heading": "Check the Pinterest integration, not just the pixel",
        "paragraphs": [
          "Start with [Pinterest API for Conversions documentation](https://help.pinterest.com/en/business/article/getting-started-with-the-conversions-api) and the documentation for the provider you use. Confirm which Shopify events it supports and whether it sends them from the browser, server, or both.",
          "Pinterest uses Checkout for completed transactions. Check the selected event and product details rather than assuming a generic PageVisit represents a sale."
        ]
      },
      {
        "heading": "Verify receipt separately from attribution",
        "paragraphs": [
          "Look for server-event receipt in Pinterest conversion diagnostics or the delivery logs supplied by your integration. A successful browser request in Pinterest Tag Helper does not prove a server event arrived. An accepted event also does not guarantee an attributed conversion.",
          "Compare event type, order value, currency, and order identifier against a test order. Check failed deliveries and retries before relying on totals."
        ]
      },
      {
        "heading": "Prevent duplicate purchases",
        "paragraphs": [
          "If browser and server report the same action, follow the platform's deduplication requirements. Preserve the same event identity across the two paths and across retries where required; a new purchase needs a new identity. Do not add another independent purchase sender without checking the existing one."
        ]
      },
      {
        "heading": "Respect the same customer choices",
        "paragraphs": [
          "Server delivery does not override consent or privacy settings. Confirm how the integration handles declined consent, permitted matching data, and data retention before enabling it."
        ]
      }
    ],
    "steps": [
      {
        "title": "Confirm the supported delivery path",
        "body": "Read the chosen provider's current Pinterest setup instructions and supported Shopify events. Pixel Tracker does not have a verified server setup to follow yet."
      },
      {
        "title": "Check a test purchase",
        "body": "Complete a test order and inspect Pinterest conversion diagnostics. Compare event type, order value, currency, and order identifier with that order."
      },
      {
        "title": "Check overlap and retries",
        "body": "Confirm the browser/server pair is deduplicated according to platform requirements. Ensure a retry does not become a second purchase."
      },
      {
        "title": "Test consent states",
        "body": "Verify the integration respects the store's collection settings before using the events for reporting."
      }
    ],
    "symptoms": [
      "Browser events arrive but no server events appear",
      "Two purchase events appear for one test order",
      "Purchase value or currency differs from the order",
      "The provider shows failed requests or repeated retries"
    ],
    "faqs": [
      {
        "q": "Does a browser helper prove server delivery?",
        "a": "No. Check server receipt separately in Pinterest conversion diagnostics or your integration's delivery logs."
      },
      {
        "q": "Will server-side tracking make every order appear in ad reporting?",
        "a": "No. Delivery, customer consent, matching, and attribution are separate. Reconcile test events before interpreting campaign totals."
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
    "description": "Check Snapchat tracking on Shopify: verify the Snap Pixel ID, event receipt, and purchase details with your current integration.",
    "h1": "Snapchat Pixel Not Firing on Shopify: Troubleshooting Guide",
    "intro": [
      "Check the Snap Pixel ID in your existing integration and compare it with Snapchat Events Manager. Use Snap Pixel Helper to inspect browser activity, then test checkout separately. Test the path from a Snap ad landing page through checkout. A working landing-page pixel does not establish that the checkout integration sends PURCHASE.",
      "This guide works through each one in order, starting with the fastest checks first. If you get through the whole list and pixel activity still isn't showing up, the [events reference](/pixel-tracker/snapchat-pixel/events) is worth checking next, since a surprising number of \"not firing\" reports turn out to be events that fired correctly but under names Snapchat's Ads Manager doesn't map the way you'd expect."
    ],
    "sections": [
      {
        "heading": "Verify your Snapchat configuration",
        "paragraphs": [
          "Browser and server delivery are separate checks. Verify the provider's documented Snapchat server integration and inspect receipt in Snapchat Events Manager. Pixel Tracker server-side delivery is not confirmed."
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
      }
    ],
    "steps": [
      {
        "title": "Check your Snapchat integration",
        "body": "Use the settings in your installed integration to confirm the Snap Pixel ID. Pixel Tracker is not available to install. If your integration uses a theme app embed, activate it in the theme editor and test checkout separately."
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
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
    "description": "Check Snapchat tracking on Shopify: verify the Snap Pixel ID, event receipt, and purchase details with your current integration.",
    "h1": "Snapchat Pixel Events on Shopify: Full Reference Guide",
    "intro": [
      "Check the Snap Pixel ID in your existing integration and compare it with Snapchat Events Manager. Use Snap Pixel Helper to inspect browser activity, then test checkout separately. Test the path from a Snap ad landing page through checkout. A working landing-page pixel does not establish that the checkout integration sends PURCHASE.",
      "This page breaks down what each event means, when it fires, and what it tells Snapchat's ad system. If you've confirmed events are set up but they're not showing up in Ads Manager, the [troubleshooting guide](/pixel-tracker/snapchat-pixel/troubleshooting) covers the common causes, from Pixel ID mismatches to ad blockers."
    ],
    "sections": [
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
        "q": "Do I need to name events in SCREAMING_SNAKE_CASE myself?",
        "a": "Use the event names required by Snap's API for a custom implementation. A managed integration should document its mappings; verify those mappings in Snapchat diagnostics rather than renaming events based on a display label."
      },
      {
        "q": "Why does VIEW_CONTENT show far more volume than PURCHASE?",
        "a": "That's expected. Most shoppers browse products without buying, so VIEW_CONTENT naturally has the widest funnel and PURCHASE the narrowest. A large gap between the two reflects normal funnel drop-off, not a tracking problem."
      },
      {
        "q": "Can I add custom Snapchat events beyond the standard five?",
        "a": "Available events depend on Snapchat's current API and your integration. Check both before implementing another event. A list of common events in this guide does not establish Pixel Tracker launch support."
      },
      {
        "q": "Where do I check which events Snapchat actually received?",
        "a": "Snapchat Ads Manager's Events Manager shows a per-event breakdown of what's come through. If counts look wrong, the [troubleshooting guide](/pixel-tracker/snapchat-pixel/troubleshooting) walks through the most common causes."
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
    "title": "Snapchat Server-Side Tracking for Shopify: What to Verify",
    "description": "Check Snapchat server event delivery, consent, purchase details, and duplicate handling on Shopify. Pixel Tracker server-side support is not confirmed.",
    "h1": "Snapchat Server-Side Tracking for Shopify: What to Verify",
    "intro": [
      "Server-side delivery needs a working integration that sends events from your store to Snapchat. Adding a browser pixel does not establish that connection.",
      "Pixel Tracker is in development. Its server-side delivery and browser/server deduplication are not confirmed. The checks below are for evaluating an available integration."
    ],
    "sections": [
      {
        "heading": "Check the Snapchat integration, not just the pixel",
        "paragraphs": [
          "Start with [Snap Conversions API documentation](https://businesshelp.snapchat.com/s/topic/0TO8b000000P7mXGAS/integration-methods?language=en_US) and the documentation for the provider you use. Confirm which Shopify events it supports and whether it sends them from the browser, server, or both.",
          "Test the path from a Snap ad landing page through checkout. A working landing-page pixel does not establish that the checkout integration sends PURCHASE."
        ]
      },
      {
        "heading": "Verify receipt separately from attribution",
        "paragraphs": [
          "Look for server-event receipt in Snapchat Events Manager or the delivery logs supplied by your integration. A successful browser request in Snap Pixel Helper does not prove a server event arrived. An accepted event also does not guarantee an attributed conversion.",
          "Compare event type, price, currency, and transaction identifier against a test order. Check failed deliveries and retries before relying on totals."
        ]
      },
      {
        "heading": "Prevent duplicate purchases",
        "paragraphs": [
          "If browser and server report the same action, follow the platform's deduplication requirements. Preserve the same event identity across the two paths and across retries where required; a new purchase needs a new identity. Do not add another independent purchase sender without checking the existing one."
        ]
      },
      {
        "heading": "Respect the same customer choices",
        "paragraphs": [
          "Server delivery does not override consent or privacy settings. Confirm how the integration handles declined consent, permitted matching data, and data retention before enabling it."
        ]
      }
    ],
    "steps": [
      {
        "title": "Confirm the supported delivery path",
        "body": "Read the chosen provider's current Snapchat setup instructions and supported Shopify events. Pixel Tracker does not have a verified server setup to follow yet."
      },
      {
        "title": "Check a test purchase",
        "body": "Complete a test order and inspect Snapchat Events Manager. Compare event type, price, currency, and transaction identifier with that order."
      },
      {
        "title": "Check overlap and retries",
        "body": "Confirm the browser/server pair is deduplicated according to platform requirements. Ensure a retry does not become a second purchase."
      },
      {
        "title": "Test consent states",
        "body": "Verify the integration respects the store's collection settings before using the events for reporting."
      }
    ],
    "symptoms": [
      "Browser events arrive but no server events appear",
      "Two purchase events appear for one test order",
      "Purchase value or currency differs from the order",
      "The provider shows failed requests or repeated retries"
    ],
    "faqs": [
      {
        "q": "Does a browser helper prove server delivery?",
        "a": "No. Check server receipt separately in Snapchat Events Manager or your integration's delivery logs."
      },
      {
        "q": "Will server-side tracking make every order appear in ad reporting?",
        "a": "No. Delivery, customer consent, matching, and attribution are separate. Reconcile test events before interpreting campaign totals."
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
      "Check theme code, custom pixels, and installed apps for duplicate TikTok senders. Keep one intended source for each event, with platform-specific deduplication if browser and server both send it. Test before removing an existing integration."
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
          "Shopify injects third-party tracking through theme app extensions, and the order in which scripts load can matter, especially on the checkout pages where AddToCart, InitiateCheckout, and PlaceAnOrder events need to fire reliably. Open your storefront in an incognito window, load the homepage, a product page, and go through checkout, watching Pixel Helper at each step. If PageView fires everywhere but AddToCart or InitiateCheckout never shows up, the problem usually isn't the pixel itself, it's that the trigger tied to that specific page or button was never wired up correctly."
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
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
    "title": "TikTok Server-Side Tracking for Shopify: What to Verify",
    "description": "Check TikTok server event delivery, consent, purchase details, and duplicate handling on Shopify. Pixel Tracker server-side support is not confirmed.",
    "h1": "TikTok Server-Side Tracking for Shopify: What to Verify",
    "intro": [
      "Server-side delivery needs a working integration that sends events from your store to TikTok. Adding a browser pixel does not establish that connection.",
      "Pixel Tracker is in development. Its server-side delivery and browser/server deduplication are not confirmed. The checks below are for evaluating an available integration."
    ],
    "sections": [
      {
        "heading": "Check the TikTok integration, not just the pixel",
        "paragraphs": [
          "Start with [TikTok Events API documentation](https://ads.tiktok.com/help/article/event-deduplication?lang=en) and the documentation for the provider you use. Confirm which Shopify events it supports and whether it sends them from the browser, server, or both.",
          "Test both a normal browser and the path a visitor takes from a TikTok ad. Browser event receipt and campaign attribution answer different questions."
        ]
      },
      {
        "heading": "Verify receipt separately from attribution",
        "paragraphs": [
          "Look for server-event receipt in TikTok Events Manager or the delivery logs supplied by your integration. A successful browser request in TikTok Pixel Helper does not prove a server event arrived. An accepted event also does not guarantee an attributed conversion.",
          "Compare event name, event ID, value, and currency against a test order. Check failed deliveries and retries before relying on totals."
        ]
      },
      {
        "heading": "Prevent duplicate purchases",
        "paragraphs": [
          "If browser and server report the same action, follow the platform's deduplication requirements. Preserve the same event identity across the two paths and across retries where required; a new purchase needs a new identity. Do not add another independent purchase sender without checking the existing one."
        ]
      },
      {
        "heading": "Respect the same customer choices",
        "paragraphs": [
          "Server delivery does not override consent or privacy settings. Confirm how the integration handles declined consent, permitted matching data, and data retention before enabling it."
        ]
      }
    ],
    "steps": [
      {
        "title": "Confirm the supported delivery path",
        "body": "Read the chosen provider's current TikTok setup instructions and supported Shopify events. Pixel Tracker does not have a verified server setup to follow yet."
      },
      {
        "title": "Check a test purchase",
        "body": "Complete a test order and inspect TikTok Events Manager. Compare event name, event ID, value, and currency with that order."
      },
      {
        "title": "Check overlap and retries",
        "body": "Confirm the browser/server pair is deduplicated according to platform requirements. Ensure a retry does not become a second purchase."
      },
      {
        "title": "Test consent states",
        "body": "Verify the integration respects the store's collection settings before using the events for reporting."
      }
    ],
    "symptoms": [
      "Browser events arrive but no server events appear",
      "Two purchase events appear for one test order",
      "Purchase value or currency differs from the order",
      "The provider shows failed requests or repeated retries"
    ],
    "faqs": [
      {
        "q": "Does a browser helper prove server delivery?",
        "a": "No. Check server receipt separately in TikTok Events Manager or your integration's delivery logs."
      },
      {
        "q": "Will server-side tracking make every order appear in ad reporting?",
        "a": "No. Delivery, customer consent, matching, and attribution are separate. Reconcile test events before interpreting campaign totals."
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
          "Check the pixel ID and conversion event ID in your existing integration and compare it with X Ads conversion diagnostics. Use browser network tools to inspect browser activity, then test checkout separately. A base pixel ID is not a purchase conversion event ID. Verify the configured purchase action instead of treating a page-view request as a completed sale."
        ]
      }
    ],
    "steps": [
      {
        "title": "Check your X integration",
        "body": "Use the settings in your installed integration to confirm the pixel ID and conversion event ID. Pixel Tracker is not available to install. If your integration uses a theme app embed, activate it in the theme editor and test checkout separately."
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
        "title": "Compare pixel data against Shopify orders over the same window",
        "body": "Pull your actual order count for a specific day and compare it to what X Ads Manager reports for that same day. Some gap between the two is normal for any browser-only pixel; a near-total gap points to a setup issue."
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
        "a": "Inspect browser requests during a test visit and compare the pixel ID with X Events Manager. Then complete a test order and verify the intended purchase conversion event; a base page-view request is not enough."
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
        "a": "Separate platform pixels can coexist. Verify each destination, consent behavior, and performance independently, and avoid adding duplicate senders for the same platform. Pixel Tracker launch coverage is still unverified."
      },
      {
        "q": "Why does new pixel data take so long to show up in X Ads Manager?",
        "a": "X's reporting has historically lagged behind Meta's or TikTok's, especially since its ad tooling has changed hands. Give it several hours before assuming an event did not arrive, and check raw event data rather than conversion totals first."
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
    "description": "Check X tracking on Shopify: verify the pixel ID and conversion event ID, event receipt, and purchase details with your current integration.",
    "h1": "X (Twitter) Events Tracked on Shopify",
    "intro": [
      "Check the pixel ID and conversion event ID in your existing integration and compare it with X Ads conversion diagnostics. Use browser network tools to inspect browser activity, then test checkout separately. A base pixel ID is not a purchase conversion event ID. Verify the configured purchase action instead of treating a page-view request as a completed sale.",
      "This page breaks down what each event tracks, when it fires, and what to expect from X's side of the reporting. If you're checking whether server-side tracking is available for X as well, see the [server-side tracking page](/pixel-tracker/twitter-pixel/server-side) for what is and is not supported today."
    ],
    "sections": [
      {
        "heading": "How these events are installed",
        "paragraphs": [
          "The pixel is added through a Shopify theme app extension, which runs directly on your storefront pages without editing any theme files. That means installation doesn't touch your theme code, and events fire from the customer's browser as they move through your store. It also means, like any client-side pixel, the events depend on the browser actually loading and running that script, so ad blockers or disabled JavaScript will prevent an event from ever reaching X, regardless of how correctly the pixel is configured."
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
          "Browser and server delivery are separate checks. Verify the provider's documented X server integration and inspect receipt in X Ads conversion diagnostics. Pixel Tracker server-side delivery is not confirmed."
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
        "q": "Do I need to configure event mapping myself?",
        "a": "For a custom X setup, configure the base pixel and intended conversion event IDs using X's documentation. For a managed integration, check its supported mappings and verify a test purchase. Pixel Tracker does not yet have verified launch coverage."
      },
      {
        "q": "Why do events sometimes take a while to show up in X Ads Manager?",
        "a": "X's reporting has generally lagged Meta's and TikTok's, and that has not changed much since the platform's rebrand. Check raw event data rather than campaign conversion totals if you are testing right after setup."
      },
      {
        "q": "Can I use Pixel Tracker for this today?",
        "a": "No. Pixel Tracker is in development and not available to install. Use an available integration and verify its documented event coverage."
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
    "title": "X Server-Side Tracking for Shopify: What to Verify",
    "description": "Check X server event delivery, consent, purchase details, and duplicate handling on Shopify. Pixel Tracker server-side support is not confirmed.",
    "h1": "X Server-Side Tracking for Shopify: What to Verify",
    "intro": [
      "Server-side delivery needs a working integration that sends events from your store to X. Adding a browser pixel does not establish that connection.",
      "Pixel Tracker is in development. Its server-side delivery and browser/server deduplication are not confirmed. The checks below are for evaluating an available integration."
    ],
    "sections": [
      {
        "heading": "Check the X integration, not just the pixel",
        "paragraphs": [
          "Start with [X conversion tracking documentation](https://business.x.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites) and the documentation for the provider you use. Confirm which Shopify events it supports and whether it sends them from the browser, server, or both.",
          "A base pixel ID is not a purchase conversion event ID. Verify the configured purchase action instead of treating a page-view request as a completed sale."
        ]
      },
      {
        "heading": "Verify receipt separately from attribution",
        "paragraphs": [
          "Look for server-event receipt in X Ads conversion diagnostics or the delivery logs supplied by your integration. A successful browser request in browser network tools does not prove a server event arrived. An accepted event also does not guarantee an attributed conversion.",
          "Compare conversion event ID, order value, and currency against a test order. Check failed deliveries and retries before relying on totals."
        ]
      },
      {
        "heading": "Prevent duplicate purchases",
        "paragraphs": [
          "If browser and server report the same action, follow the platform's deduplication requirements. Preserve the same event identity across the two paths and across retries where required; a new purchase needs a new identity. Do not add another independent purchase sender without checking the existing one."
        ]
      },
      {
        "heading": "Respect the same customer choices",
        "paragraphs": [
          "Server delivery does not override consent or privacy settings. Confirm how the integration handles declined consent, permitted matching data, and data retention before enabling it."
        ]
      }
    ],
    "steps": [
      {
        "title": "Confirm the supported delivery path",
        "body": "Read the chosen provider's current X setup instructions and supported Shopify events. Pixel Tracker does not have a verified server setup to follow yet."
      },
      {
        "title": "Check a test purchase",
        "body": "Complete a test order and inspect X Ads conversion diagnostics. Compare conversion event ID, order value, and currency with that order."
      },
      {
        "title": "Check overlap and retries",
        "body": "Confirm the browser/server pair is deduplicated according to platform requirements. Ensure a retry does not become a second purchase."
      },
      {
        "title": "Test consent states",
        "body": "Verify the integration respects the store's collection settings before using the events for reporting."
      }
    ],
    "symptoms": [
      "Browser events arrive but no server events appear",
      "Two purchase events appear for one test order",
      "Purchase value or currency differs from the order",
      "The provider shows failed requests or repeated retries"
    ],
    "faqs": [
      {
        "q": "Does a browser helper prove server delivery?",
        "a": "No. Check server receipt separately in X Ads conversion diagnostics or your integration's delivery logs."
      },
      {
        "q": "Will server-side tracking make every order appear in ad reporting?",
        "a": "No. Delivery, customer consent, matching, and attribution are separate. Reconcile test events before interpreting campaign totals."
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
