import type { VsComparisonPage } from "@/lib/vs-comparisons";

export const vsComparisonPages: VsComparisonPage[] = 
[
  {
    "slug": "elevar-alternative",
    "competitor": "Elevar",
    "competitorPrice": "$225 - $1,250/mo",
    "competitorCategory": "BusinessApplication",
    "title": "Pixel Tracker vs Elevar: Shopify Tracking Comparison",
    "description": "Pixel Tracker and Elevar both solve Shopify tracking problems, but for very different stores and budgets. Compare features, pricing, and who each tool is built for.",
    "h1": "Pixel Tracker vs Elevar: Which Shopify Tracking Solution Fits Your Store?",
    "intro": [
      "Elevar is a full server-side data pipeline for stores that need custom event schemas, warehouse sync, and agency-grade infrastructure. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
      "If you're a solo merchant who wants Facebook, Google Ads, TikTok, and other pixels running without touching theme code, Pixel Tracker is the simpler option to evaluate after launch. If you're an agency or technical team managing complex data infrastructure across multiple stores, Elevar is the right tool for that job."
    ],
    "quickComparison": [
      {
        "feature": "Lowest paid plan",
        "pixelTracker": "Not confirmed",
        "competitor": "$225/mo"
      },
      {
        "feature": "Free plan",
        "pixelTracker": "Not confirmed",
        "competitor": "No"
      },
      {
        "feature": "Ad platforms supported",
        "pixelTracker": "Planned; not available",
        "competitor": "Meta, Google, TikTok, Snap (pixel layer only)"
      },
      {
        "feature": "Server-side tracking",
        "pixelTracker": "Not verified",
        "competitor": "Full data pipeline (custom events, webhooks)"
      },
      {
        "feature": "Theme code required",
        "pixelTracker": "No",
        "competitor": "No"
      },
      {
        "feature": "Setup complexity",
        "pixelTracker": "Planned; not available",
        "competitor": "Technical setup, often agency-assisted"
      },
      {
        "feature": "Target audience",
        "pixelTracker": "Solo merchants, small teams",
        "competitor": "Agencies, technical teams, enterprise"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Facebook/Meta pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes"
      },
      {
        "feature": "Google Ads conversion tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes"
      },
      {
        "feature": "TikTok pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes"
      },
      {
        "feature": "Snapchat pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes"
      },
      {
        "feature": "Pinterest tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Not standard"
      },
      {
        "feature": "LinkedIn Insight Tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Not standard"
      },
      {
        "feature": "X (Twitter) pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Not standard"
      },
      {
        "feature": "Facebook CAPI",
        "pixelTracker": "Not verified",
        "competitor": "Yes (deeper)"
      },
      {
        "feature": "TikTok Events API",
        "pixelTracker": "Not verified",
        "competitor": "Yes"
      },
      {
        "feature": "Custom event schemas",
        "pixelTracker": "Not verified",
        "competitor": "Fully customizable"
      },
      {
        "feature": "Data warehouse sync",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Multi-store management",
        "pixelTracker": "Per-store dashboard",
        "competitor": "Yes (agency view)"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Planned; not available",
        "competitor": "Requires configuration"
      },
      {
        "feature": "Pricing transparency",
        "pixelTracker": "Not confirmed",
        "competitor": "Sales-driven"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "Pixel Tracker launch plans",
        "pixelTracker": "Not confirmed; billed through Shopify",
        "competitor": "N/A"
      },
      {
        "plan": "Elevar entry",
        "pixelTracker": "N/A",
        "competitor": "$225/mo"
      },
      {
        "plan": "Elevar mid",
        "pixelTracker": "N/A",
        "competitor": "$650/mo"
      },
      {
        "plan": "Elevar enterprise",
        "pixelTracker": "N/A",
        "competitor": "$1,250/mo (custom)"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You are researching a future pixel connector and can wait for a verified launch.",
        "You will compare confirmed platform coverage, event delivery, and Shopify billing terms before switching."
      ],
      "chooseCompetitor": [
        "You need a full server-side data pipeline, not just pixel installation",
        "You're an agency managing tracking across multiple client stores",
        "You need custom event schemas or warehouse sync",
        "Your data infrastructure budget is $200+/mo"
      ]
    },
    "faqs": [
      {
        "q": "Can Pixel Tracker replace Elevar?",
        "a": "For pixel installation, yes. For full data pipeline infrastructure (custom events, warehouse sync, agency multi-store views), Elevar is the more complete tool. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
      },
      {
        "q": "Is Elevar worth the price for a small store?",
        "a": "For most solo merchants, no. Elevar is built for stores with complex data needs and agency support. Pixel Tracker's price comparison must wait for confirmed launch plans. If you just need pixels firing correctly, a simpler installer is usually enough."
      },
      {
        "q": "Does Pixel Tracker support server-side tracking like Elevar?",
        "a": "Elevar offers a broader data pipeline with custom event schemas, but that depth comes for more complex data requirements. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
      },
      {
        "q": "Can I start with Pixel Tracker and move to Elevar later?",
        "a": "Pixel Tracker is not available to install yet. After launch, confirm the required integrations and test a replacement before removing working tracking. Historical data and migration behavior depend on the platforms and providers involved."
      },
      {
        "q": "Which is better for Facebook Conversions API?",
        "a": "Pixel Tracker CAPI delivery is not verified, so this comparison cannot establish parity. Check an available provider's current Meta integration and verify test events before choosing."
      }
    ],
    "relatedLinks": [
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Tracking coverage calculator",
        "href": "/tools/pixel-tracking-calculator"
      },
      {
        "label": "Pixel health check",
        "href": "/tools/pixel-health-check"
      }
    ]
  },
  {
    "slug": "facebook-instagram-alternative",
    "competitor": "Facebook & Instagram (Shopify native)",
    "competitorPrice": "Free (included with Shopify)",
    "competitorCategory": "BusinessApplication",
    "title": "Pixel Tracker vs Facebook & Instagram Channel: Comparison",
    "description": "The Facebook & Instagram sales channel is free and Meta-only. Compare what each does well. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
    "h1": "Pixel Tracker vs Facebook & Instagram Channel: Do You Need Both?",
    "intro": [
      "Most Shopify stores already have the Facebook & Instagram sales channel installed. It's free, it connects your Meta pixel, and it lets you manage your Facebook and Instagram shop from Shopify. The question is whether that's enough for your tracking needs, or whether a multi-platform pixel installer adds something the native channel doesn't.",
      "The short answer: if you only run ads on Meta and don't need server-side tracking, the native channel is probably fine. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "Not confirmed",
        "competitor": "Free"
      },
      {
        "feature": "Ad platforms",
        "pixelTracker": "Planned; not available",
        "competitor": "Meta only (Facebook + Instagram)"
      },
      {
        "feature": "Server-side tracking",
        "pixelTracker": "Not verified",
        "competitor": "CAPI (via channel settings)"
      },
      {
        "feature": "Theme code required",
        "pixelTracker": "No",
        "competitor": "No"
      },
      {
        "feature": "Shop management",
        "pixelTracker": "No (tracking only)",
        "competitor": "Yes (Facebook/IG shop, catalogs)"
      },
      {
        "feature": "Product catalog sync",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Unified dashboard",
        "pixelTracker": "Yes (all platforms)",
        "competitor": "Meta only"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Facebook/Meta pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes"
      },
      {
        "feature": "Google Ads conversion tag",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "TikTok pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "Snapchat pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "Pinterest tag",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "LinkedIn Insight Tag",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "X (Twitter) pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "Facebook CAPI",
        "pixelTracker": "Not verified",
        "competitor": "Yes"
      },
      {
        "feature": "TikTok Events API",
        "pixelTracker": "Not verified",
        "competitor": "No"
      },
      {
        "feature": "Facebook/IG shop management",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Product catalog sync",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Multi-platform dashboard",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "Setup time",
        "pixelTracker": "Planned; not available",
        "competitor": "10-15 minutes"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "Pixel Tracker launch plans",
        "pixelTracker": "Not confirmed; billed through Shopify",
        "competitor": "N/A"
      },
      {
        "plan": "Facebook & Instagram channel",
        "pixelTracker": "N/A",
        "competitor": "Free"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You are researching a future pixel connector and can wait for a verified launch.",
        "You will compare confirmed platform coverage, event delivery, and Shopify billing terms before switching."
      ],
      "chooseCompetitor": [
        "You only advertise on Meta (Facebook + Instagram)",
        "You need Facebook/IG shop management features",
        "You want product catalog sync",
        "Zero cost is the top priority"
      ]
    },
    "faqs": [
      {
        "q": "Can I use both Pixel Tracker and the Facebook & Instagram channel?",
        "a": "Pixel Tracker is not available to install, and interoperability is not verified. Keep working tracking in place. Before combining future integrations, confirm which one sends each event and test for duplicates."
      },
      {
        "q": "Does the native channel support server-side tracking?",
        "a": "Yes, the Facebook & Instagram channel includes Conversions API (CAPI) support. You can enable it in the channel settings. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
      },
      {
        "q": "What does Pixel Tracker offer that the native channel doesn't?",
        "a": "Multi-platform coverage (Google Ads, TikTok, Snapchat, Pinterest, X, LinkedIn), a unified dashboard for all platforms, and optional TikTok Events API support. The native channel is Meta-only."
      },
      {
        "q": "Should I switch from the native channel to Pixel Tracker?",
        "a": "Pixel Tracker is not available to install yet. After launch, confirm the required integrations and test a replacement before removing working tracking. Historical data and migration behavior depend on the platforms and providers involved."
      },
      {
        "q": "Is Pixel Tracker available on the Shopify App Store?",
        "a": "Not yet ,  it's currently in development. Join the waitlist at appnary.com for early access."
      }
    ],
    "relatedLinks": [
      {
        "label": "Meta Pixel setup guide",
        "href": "/pixel-tracker/meta-pixel"
      },
      {
        "label": "Facebook CAPI setup",
        "href": "/pixel-tracker/meta-pixel/server-side"
      },
      {
        "label": "Tracking coverage calculator",
        "href": "/tools/pixel-tracking-calculator"
      },
      {
        "label": "All platform guides",
        "href": "/pixel-tracker/guides"
      }
    ]
  },
  {
    "slug": "google-tag-manager-alternative",
    "competitor": "Google Tag Manager (DIY)",
    "competitorPrice": "Free (DIY setup required)",
    "competitorCategory": "BusinessApplication",
    "title": "Pixel Tracker vs Google Tag Manager: Comparison",
    "description": "Google Tag Manager is free and infinitely flexible. Pixel Tracker is a managed pixel installer. Compare the trade-offs for Shopify stores.",
    "h1": "Pixel Tracker vs Google Tag Manager: DIY Tags vs Managed Pixel Installation",
    "intro": [
      "Google Tag Manager (GTM) is the most powerful tag management tool available ,  it's free, it handles virtually any tracking script, and it gives you full control over when and how tags fire. The trade-off is complexity: GTM requires understanding tags, triggers, variables, and data layers, and a misconfigured trigger can silently break your conversion tracking.",
      "You trade flexibility for simplicity. For most Shopify merchants who want ad pixels running correctly without learning tag management infrastructure, that's a good trade. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "Not confirmed",
        "competitor": "Free"
      },
      {
        "feature": "Setup time",
        "pixelTracker": "Planned; not available",
        "competitor": "1-4 hours (first time)"
      },
      {
        "feature": "Technical skill needed",
        "pixelTracker": "None (paste IDs)",
        "competitor": "Intermediate to advanced"
      },
      {
        "feature": "Ad platforms",
        "pixelTracker": "Planned; not available",
        "competitor": "Unlimited (any script)"
      },
      {
        "feature": "Event customization",
        "pixelTracker": "Not verified",
        "competitor": "Fully custom"
      },
      {
        "feature": "Server-side tracking",
        "pixelTracker": "Not verified",
        "competitor": "Server-side GTM (complex)"
      },
      {
        "feature": "Maintenance burden",
        "pixelTracker": "None (app-managed)",
        "competitor": "Ongoing (tag updates, debugging)"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Facebook/Meta pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes (manual config)"
      },
      {
        "feature": "Google Ads conversion tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes (native integration)"
      },
      {
        "feature": "TikTok pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes (manual config)"
      },
      {
        "feature": "Snapchat pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes (manual config)"
      },
      {
        "feature": "Pinterest tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes (manual config)"
      },
      {
        "feature": "LinkedIn Insight Tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes (manual config)"
      },
      {
        "feature": "X (Twitter) pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes (manual config)"
      },
      {
        "feature": "Custom scripts",
        "pixelTracker": "No",
        "competitor": "Yes (anything)"
      },
      {
        "feature": "Custom event triggers",
        "pixelTracker": "Not verified",
        "competitor": "Fully custom"
      },
      {
        "feature": "Data layer access",
        "pixelTracker": "No",
        "competitor": "Full control"
      },
      {
        "feature": "Server-side GTM",
        "pixelTracker": "Not verified",
        "competitor": "Yes (advanced)"
      },
      {
        "feature": "Debug/preview mode",
        "pixelTracker": "Dashboard view",
        "competitor": "Full GTM preview"
      },
      {
        "feature": "Version control",
        "pixelTracker": "N/A",
        "competitor": "Yes (workspaces, versions)"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "Pixel Tracker launch plans",
        "pixelTracker": "Not confirmed; billed through Shopify",
        "competitor": "N/A"
      },
      {
        "plan": "Google Tag Manager",
        "pixelTracker": "N/A",
        "competitor": "Free"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You are researching a future pixel connector and can wait for a verified launch.",
        "You will compare confirmed platform coverage, event delivery, and Shopify billing terms before switching."
      ],
      "chooseCompetitor": [
        "You need custom event triggers beyond standard Purchase/PageView",
        "You want full control over tag firing logic",
        "You have a developer who can maintain GTM",
        "You need Server-side GTM for advanced data infrastructure"
      ]
    },
    "faqs": [
      {
        "q": "Can I use Pixel Tracker alongside GTM?",
        "a": "Pixel Tracker is not available to install, and interoperability is not verified. Keep working tracking in place. Before combining future integrations, confirm which one sends each event and test for duplicates."
      },
      {
        "q": "Is GTM really free?",
        "a": "Yes, GTM itself is free. The cost is in setup time, ongoing maintenance, and the risk of misconfiguration. A broken GTM trigger can silently stop tracking conversions, and debugging it requires understanding the GTM interface and tag architecture."
      },
      {
        "q": "Can Pixel Tracker do anything GTM can't?",
        "a": "Not in terms of flexibility. GTM can fire any script with any trigger. Pixel Tracker is limited to standard pixel events for the 7 supported platforms. The advantage is simplicity: no configuration needed beyond pasting your Pixel IDs."
      },
      {
        "q": "What if I outgrow Pixel Tracker?",
        "a": "Standard pixel integrations don't lock you in. If your store's tracking needs become complex enough to require custom event logic, Server-side GTM, or warehouse sync, migrating to GTM (or a combination) is straightforward."
      },
      {
        "q": "Which is better for Google Ads conversion tracking specifically?",
        "a": "GTM documents Google Ads tags and conversion configuration. Pixel Tracker's Google integration is not verified for launch, so this page cannot claim equivalent functionality. Check a test purchase using the integration you choose."
      }
    ],
    "relatedLinks": [
      {
        "label": "Google Ads setup guide",
        "href": "/pixel-tracker/google-ads"
      },
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Tracking coverage calculator",
        "href": "/tools/pixel-tracking-calculator"
      },
      {
        "label": "Pixel health check",
        "href": "/tools/pixel-health-check"
      }
    ]
  },
  {
    "slug": "littledata-alternative",
    "competitor": "Littledata",
    "competitorPrice": "$199+/mo (enterprise pricing)",
    "competitorCategory": "BusinessApplication",
    "title": "Pixel Tracker vs Littledata: Comparison",
    "description": "Pixel Tracker is in development. Launch platform coverage and server-side delivery are not confirmed. Compare the intended pixel-configuration role with the other tool's documented features.",
    "h1": "Pixel Tracker vs Littledata: Analytics Pipeline vs Pixel Installation",
    "intro": [
      "Littledata is a server-side analytics layer that fixes tracking accuracy in GA4, Segment, and ad platforms. It's built for stores with complex analytics needs, subscription businesses, and teams that need clean data flowing into their analytics stack.",
      "It's focused on a narrower problem: getting your Meta, Google, TikTok, and other ad pixels firing correctly without code. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "Not confirmed",
        "competitor": "$199+/mo"
      },
      {
        "feature": "Primary function",
        "pixelTracker": "Ad pixel installation",
        "competitor": "Analytics data pipeline"
      },
      {
        "feature": "Target audience",
        "pixelTracker": "Solo merchants",
        "competitor": "Data-driven stores, subscription businesses"
      },
      {
        "feature": "Setup complexity",
        "pixelTracker": "Planned; not available",
        "competitor": "Technical setup required"
      },
      {
        "feature": "Ad platforms",
        "pixelTracker": "Planned; not available",
        "competitor": "GA4, Segment, ad platform pixels"
      },
      {
        "feature": "Server-side GA4",
        "pixelTracker": "Not verified",
        "competitor": "Yes"
      },
      {
        "feature": "Subscription tracking",
        "pixelTracker": "No",
        "competitor": "Yes (revenue attribution)"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Facebook/Meta pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes (via pipeline)"
      },
      {
        "feature": "Google Ads conversion tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes (via pipeline)"
      },
      {
        "feature": "TikTok pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Limited"
      },
      {
        "feature": "Snapchat pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Not standard"
      },
      {
        "feature": "Pinterest tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Not standard"
      },
      {
        "feature": "LinkedIn Insight Tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Not standard"
      },
      {
        "feature": "Server-side GA4",
        "pixelTracker": "Not verified",
        "competitor": "Yes"
      },
      {
        "feature": "Server-side ad platform pixels",
        "pixelTracker": "Not verified",
        "competitor": "Via Segment/GA4 pipeline"
      },
      {
        "feature": "Subscription revenue tracking",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "Data warehouse export",
        "pixelTracker": "No",
        "competitor": "Yes"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "Pixel Tracker launch plans",
        "pixelTracker": "Not confirmed; billed through Shopify",
        "competitor": "N/A"
      },
      {
        "plan": "Littledata",
        "pixelTracker": "N/A",
        "competitor": "$199+/mo (enterprise)"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You are researching a future pixel connector and can wait for a verified launch.",
        "You will compare confirmed platform coverage, event delivery, and Shopify billing terms before switching."
      ],
      "chooseCompetitor": [
        "You need clean GA4 data with server-side tracking",
        "You run a subscription business needing revenue attribution",
        "You use Segment and need server-side event repair",
        "Analytics accuracy is more important than pixel installation"
      ]
    },
    "faqs": [
      {
        "q": "Does Littledata replace the need for Pixel Tracker?",
        "a": "Littledata repairs analytics data flowing into GA4 and ad platforms, but it doesn't install or manage ad pixels directly. For multi-platform pixel installation and management, Pixel Tracker covers a different layer of the stack."
      },
      {
        "q": "Is Littledata worth $199+/mo for a small store?",
        "a": "Pixel Tracker's launch prices and plan limits are not confirmed. Check its Shopify listing when available; billing will be through Shopify."
      },
      {
        "q": "Can I use both together?",
        "a": "Pixel Tracker is a prelaunch pixel-configuration app, not an analytics or attribution service. Launch tracking coverage is not verified. Keep any working integration until you can test an available replacement."
      },
      {
        "q": "Does Pixel Tracker fix GA4 tracking accuracy?",
        "a": "Pixel Tracker is a prelaunch pixel-configuration app, not an analytics or attribution service. Launch tracking coverage is not verified. Keep any working integration until you can test an available replacement."
      },
      {
        "q": "Is Pixel Tracker available on the Shopify App Store?",
        "a": "Not yet ,  it's currently in development. Join the waitlist at appnary.com for early access."
      }
    ],
    "relatedLinks": [
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "All platform guides",
        "href": "/pixel-tracker/guides"
      },
      {
        "label": "Tracking coverage calculator",
        "href": "/tools/pixel-tracking-calculator"
      },
      {
        "label": "Pixel health check",
        "href": "/tools/pixel-health-check"
      }
    ]
  },
  {
    "slug": "trackbee-alternative",
    "competitor": "TrackBee",
    "competitorPrice": "~$19/mo (entry)",
    "competitorCategory": "BusinessApplication",
    "title": "Pixel Tracker vs TrackBee: Comparison",
    "description": "Compare TrackBee with the intended scope of prelaunch Pixel Tracker. Launch coverage and prices for Pixel Tracker are not confirmed.",
    "h1": "Pixel Tracker vs TrackBee: Multi-Platform Pixel Installation Compared",
    "intro": [
      "They're close competitors, and the right choice depends on which platforms you advertise on and whether you need server-side tracking. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
      "TrackBee focuses primarily on Meta and a smaller set of platforms. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
    ],
    "quickComparison": [
      {
        "feature": "Lowest paid plan",
        "pixelTracker": "Not confirmed",
        "competitor": "~$19/mo"
      },
      {
        "feature": "Free plan",
        "pixelTracker": "Not confirmed",
        "competitor": "Limited"
      },
      {
        "feature": "Ad platforms",
        "pixelTracker": "Planned; not available",
        "competitor": "Meta, Google, TikTok (fewer platforms)"
      },
      {
        "feature": "Server-side tracking",
        "pixelTracker": "Not verified",
        "competitor": "Limited"
      },
      {
        "feature": "Theme code required",
        "pixelTracker": "No",
        "competitor": "No"
      },
      {
        "feature": "Dashboard",
        "pixelTracker": "Unified multi-platform",
        "competitor": "Basic"
      },
      {
        "feature": "Setup time",
        "pixelTracker": "Planned; not available",
        "competitor": "5-10 minutes"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Facebook/Meta pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes"
      },
      {
        "feature": "Google Ads conversion tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes"
      },
      {
        "feature": "TikTok pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes"
      },
      {
        "feature": "Snapchat pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Not standard"
      },
      {
        "feature": "Pinterest tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Not standard"
      },
      {
        "feature": "LinkedIn Insight Tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Not standard"
      },
      {
        "feature": "X (Twitter) pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Not standard"
      },
      {
        "feature": "Facebook CAPI",
        "pixelTracker": "Not verified",
        "competitor": "Limited"
      },
      {
        "feature": "TikTok Events API",
        "pixelTracker": "Not verified",
        "competitor": "Not standard"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes"
      },
      {
        "feature": "Multi-platform dashboard",
        "pixelTracker": "Planned; not available",
        "competitor": "Basic"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "Pixel Tracker launch plans",
        "pixelTracker": "Not confirmed; billed through Shopify",
        "competitor": "N/A"
      },
      {
        "plan": "TrackBee entry",
        "pixelTracker": "N/A",
        "competitor": "~$19/mo"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You are researching a future pixel connector and can wait for a verified launch.",
        "You will compare confirmed platform coverage, event delivery, and Shopify billing terms before switching."
      ],
      "chooseCompetitor": [
        "You only advertise on Meta and want a simple Meta pixel installer",
        "TrackBee's specific Meta integrations fit your workflow",
        "You're already using TrackBee and it's working"
      ]
    },
    "faqs": [
      {
        "q": "Is TrackBee cheaper than Pixel Tracker?",
        "a": "Pixel Tracker's launch prices and plan limits are not confirmed. Check its Shopify listing when available; billing will be through Shopify."
      },
      {
        "q": "Can I switch from TrackBee to Pixel Tracker?",
        "a": "Pixel Tracker is not available to install yet. After launch, confirm the required integrations and test a replacement before removing working tracking. Historical data and migration behavior depend on the platforms and providers involved."
      },
      {
        "q": "Which has better server-side support?",
        "a": "TrackBee's server-side support is more limited. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
      },
      {
        "q": "Does TrackBee support all the same platforms?",
        "a": "TrackBee lists a narrower platform scope. Pixel Tracker intends broader coverage, but its launch integrations are not verified. Check the current provider documentation for each platform you need."
      },
      {
        "q": "Is Pixel Tracker available on the Shopify App Store?",
        "a": "Not yet ,  it's currently in development. Join the waitlist at appnary.com for early access."
      }
    ],
    "relatedLinks": [
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "All platform guides",
        "href": "/pixel-tracker/guides"
      },
      {
        "label": "Tracking coverage calculator",
        "href": "/tools/pixel-tracking-calculator"
      },
      {
        "label": "Compare all alternatives",
        "href": "/alternatives/best-shopify-pixel-tracking-apps"
      }
    ]
  },
  {
    "slug": "hyros-alternative",
    "competitor": "Hyros",
    "competitorPrice": "~$230+/mo (revenue-tiered)",
    "competitorCategory": "BusinessApplication",
    "title": "Pixel Tracker vs Hyros: Comparison",
    "description": "Pixel Tracker is in development. Launch platform coverage and server-side delivery are not confirmed. Compare the intended pixel-configuration role with the other tool's documented features.",
    "h1": "Pixel Tracker vs Hyros: Attribution Intelligence vs Pixel Installation",
    "intro": [
      "Hyros is an AI-powered attribution platform that tracks ad spend across multiple channels and provides cross-device, cross-platform attribution modeling. It's built for stores spending $10k+/mo on ads and needing accurate ROAS data across Meta, Google, TikTok, and other platforms.",
      "It connects ad platforms to your Shopify store so events fire correctly. It doesn't model attribution or provide cross-channel reporting ,  it makes sure the data gets to the platforms in the first place. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "Not confirmed",
        "competitor": "$230+/mo"
      },
      {
        "feature": "Primary function",
        "pixelTracker": "Pixel installation",
        "competitor": "AI-powered attribution"
      },
      {
        "feature": "Target audience",
        "pixelTracker": "Solo merchants",
        "competitor": "Stores spending $10k+/mo on ads"
      },
      {
        "feature": "Ad platforms tracked",
        "pixelTracker": "Planned; not available",
        "competitor": "Meta, Google, TikTok + more (attribution)"
      },
      {
        "feature": "AI attribution modeling",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Cross-device tracking",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Setup complexity",
        "pixelTracker": "Planned; not available",
        "competitor": "Technical integration"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Installs Meta pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "No (uses existing pixel data)"
      },
      {
        "feature": "Installs Google Ads tag",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "Installs TikTok pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "AI attribution modeling",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Cross-device tracking",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Ad spend optimization",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Server-side pixel support",
        "pixelTracker": "Not verified",
        "competitor": "No (reads platform data)"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "ROAS reporting",
        "pixelTracker": "No (platform-level only)",
        "competitor": "Yes (cross-platform)"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "Pixel Tracker launch plans",
        "pixelTracker": "Not confirmed; billed through Shopify",
        "competitor": "N/A"
      },
      {
        "plan": "Hyros entry",
        "pixelTracker": "N/A",
        "competitor": "~$230+/mo (revenue-tiered)"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You are researching a future pixel connector and can wait for a verified launch.",
        "You will compare confirmed platform coverage, event delivery, and Shopify billing terms before switching."
      ],
      "chooseCompetitor": [
        "You spend $10k+/mo across multiple ad platforms",
        "You need cross-platform attribution modeling",
        "You want AI-powered ad spend optimization",
        "You already have pixels installed and need better reporting"
      ]
    },
    "faqs": [
      {
        "q": "Does Hyros install pixels for me?",
        "a": "Pixel Tracker is a prelaunch pixel-configuration app, not an analytics or attribution service. Launch tracking coverage is not verified. Keep any working integration until you can test an available replacement."
      },
      {
        "q": "Can I use both together?",
        "a": "Yes, and they're complementary. Hyros reads that data and provides cross-platform attribution. They solve different problems at different layers. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
      },
      {
        "q": "Is Hyros worth $230+/mo for a small store?",
        "a": "It depends on whether you need cross-platform attribution enough to justify the subscription. Start by checking whether your existing platform reports answer your questions. Pixel Tracker is intended for pixel setup, so it does not replace Hyros's attribution analysis, and its launch price is not confirmed."
      },
      {
        "q": "What's the difference between attribution and pixel installation?",
        "a": "Pixel installation means getting tracking code to fire on your store (what Pixel Tracker does). Attribution means figuring out which ad drove which sale across platforms and devices (what Hyros does). You need the first to make the second possible."
      },
      {
        "q": "Is Pixel Tracker available on the Shopify App Store?",
        "a": "Not yet ,  it's currently in development. Join the waitlist at appnary.com for early access."
      }
    ],
    "relatedLinks": [
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Tracking coverage calculator",
        "href": "/tools/pixel-tracking-calculator"
      },
      {
        "label": "ROAS calculation guide",
        "href": "/pixel-tracker/guides/roas-calculation"
      }
    ]
  },
  {
    "slug": "northbeam-alternative",
    "competitor": "Northbeam",
    "competitorPrice": "$100-$200+/mo",
    "competitorCategory": "BusinessApplication",
    "title": "Pixel Tracker vs Northbeam: Comparison",
    "description": "Northbeam is multi-touch attribution. Pixel Tracker is pixel installation. They serve different needs and budgets.",
    "h1": "Pixel Tracker vs Northbeam: Multi-Touch Attribution vs Pixel Installation",
    "intro": [
      "Northbeam provides multi-touch attribution for Shopify stores, showing which ads across Meta, Google, TikTok, and other platforms actually drive conversions. It uses server-side tracking and first-party data to model customer journeys across channels.",
      "Pixel Tracker is in development. Launch platform coverage and server-side delivery are not confirmed. Compare the intended pixel-configuration role with the other tool's documented features."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "Not confirmed",
        "competitor": "$100-$200+/mo"
      },
      {
        "feature": "Primary function",
        "pixelTracker": "Pixel installation",
        "competitor": "Multi-touch attribution"
      },
      {
        "feature": "Target audience",
        "pixelTracker": "Solo merchants",
        "competitor": "DTC brands, mid-market stores"
      },
      {
        "feature": "Ad platforms",
        "pixelTracker": "Planned; not available",
        "competitor": "Meta, Google, TikTok, Snap + more (attribution)"
      },
      {
        "feature": "Server-side tracking",
        "pixelTracker": "Not verified",
        "competitor": "Server-side attribution layer"
      },
      {
        "feature": "Multi-touch modeling",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Setup complexity",
        "pixelTracker": "Planned; not available",
        "competitor": "Technical integration"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Installs ad pixels",
        "pixelTracker": "Planned; not available",
        "competitor": "No (reads existing data)"
      },
      {
        "feature": "Multi-touch attribution",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Cross-platform ROAS",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Customer journey mapping",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Server-side pixel support",
        "pixelTracker": "Not verified",
        "competitor": "Server-side attribution"
      },
      {
        "feature": "Ad creative-level reporting",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "LTV prediction",
        "pixelTracker": "No",
        "competitor": "Yes"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "Pixel Tracker launch plans",
        "pixelTracker": "Not confirmed; billed through Shopify",
        "competitor": "N/A"
      },
      {
        "plan": "Northbeam entry",
        "pixelTracker": "N/A",
        "competitor": "$100-$200+/mo"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You are researching a future pixel connector and can wait for a verified launch.",
        "You will compare confirmed platform coverage, event delivery, and Shopify billing terms before switching."
      ],
      "chooseCompetitor": [
        "You need to know which ad drove which sale across platforms",
        "You spend $5k+/mo on ads and need ROAS data",
        "You want multi-touch attribution and LTV prediction",
        "You already have pixels installed and need better reporting"
      ]
    },
    "faqs": [
      {
        "q": "Does Northbeam install pixels?",
        "a": "No. Northbeam reads data from existing pixel connections and ad platform APIs. It doesn't install or manage pixels. If your pixels aren't firing, Northbeam can't fix that ,  Pixel Tracker can."
      },
      {
        "q": "Can I use both together?",
        "a": "Pixel Tracker is a prelaunch pixel-configuration app, not an analytics or attribution service. Launch tracking coverage is not verified. Keep any working integration until you can test an available replacement."
      },
      {
        "q": "Which should I set up first?",
        "a": "Pixels first. Attribution tools need clean pixel data to model correctly. If your Meta pixel isn't firing Purchase events, no attribution tool can tell you which ad drove the sale. Fix the pixel layer first with Pixel Tracker, then consider attribution if your ad spend justifies it."
      },
      {
        "q": "Is Northbeam worth $100+/mo for a small store?",
        "a": "Compare the subscription cost with the decisions you need multi-touch attribution to support. Individual platform dashboards may be enough for a simpler ad setup. Pixel Tracker is intended for pixel installation rather than attribution analysis; its launch price is not confirmed."
      },
      {
        "q": "Is Pixel Tracker available on the Shopify App Store?",
        "a": "Not yet ,  it's currently in development. Join the waitlist at appnary.com for early access."
      }
    ],
    "relatedLinks": [
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "ROAS calculation guide",
        "href": "/pixel-tracker/guides/roas-calculation"
      },
      {
        "label": "Tracking coverage calculator",
        "href": "/tools/pixel-tracking-calculator"
      },
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      }
    ]
  },
  {
    "slug": "lifetimely-alternative",
    "competitor": "Lifetimely (by Shopify)",
    "competitorPrice": "$24-$120+/mo",
    "competitorCategory": "BusinessApplication",
    "title": "Pixel Tracker vs Lifetimely: Comparison",
    "description": "Pixel Tracker is in development. Launch platform coverage and server-side delivery are not confirmed. Compare the intended pixel-configuration role with the other tool's documented features.",
    "h1": "Pixel Tracker vs Lifetimely: Profit Analytics vs Pixel Installation",
    "intro": [
      "Lifetimely is a profit analytics and LTV tool built for Shopify. It shows your actual profit after costs, tracks customer lifetime value, and provides cohort analysis. It's built for understanding whether your business is actually making money, not just generating revenue.",
      "Pixel Tracker is in development. Launch platform coverage and server-side delivery are not confirmed. Compare the intended pixel-configuration role with the other tool's documented features."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "Not confirmed",
        "competitor": "$24-$120+/mo"
      },
      {
        "feature": "Primary function",
        "pixelTracker": "Pixel installation",
        "competitor": "Profit analytics & LTV"
      },
      {
        "feature": "Target audience",
        "pixelTracker": "Any Shopify store",
        "competitor": "Stores tracking profitability"
      },
      {
        "feature": "Ad platforms",
        "pixelTracker": "Planned; not available",
        "competitor": "Reads ad spend data"
      },
      {
        "feature": "Profit tracking",
        "pixelTracker": "No",
        "competitor": "Yes (COGS, shipping, fees)"
      },
      {
        "feature": "LTV / cohort analysis",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Setup complexity",
        "pixelTracker": "Planned; not available",
        "competitor": "Connect Shopify, set COGS"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Installs ad pixels",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "Profit margin tracking",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Customer LTV",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Cohort analysis",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Ad spend integration",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes (reads platform data)"
      },
      {
        "feature": "COGS tracking",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Multi-platform pixel dashboard",
        "pixelTracker": "Planned; not available",
        "competitor": "No"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Planned; not available",
        "competitor": "Yes"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "Pixel Tracker launch plans",
        "pixelTracker": "Not confirmed; billed through Shopify",
        "competitor": "N/A"
      },
      {
        "plan": "Lifetimely Starter",
        "pixelTracker": "N/A",
        "competitor": "$24/mo"
      },
      {
        "plan": "Lifetimely Pro",
        "pixelTracker": "N/A",
        "competitor": "$50/mo"
      },
      {
        "plan": "Lifetimely Advanced",
        "pixelTracker": "N/A",
        "competitor": "$120+/mo"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You are researching a future pixel connector and can wait for a verified launch.",
        "You will compare confirmed platform coverage, event delivery, and Shopify billing terms before switching."
      ],
      "chooseCompetitor": [
        "You need to know your actual profit after costs",
        "You want customer lifetime value and cohort data",
        "You already have pixels installed and need business analytics",
        "You're spending on ads but don't know if you're profitable"
      ]
    },
    "faqs": [
      {
        "q": "Does Lifetimely install pixels?",
        "a": "No. Lifetimely reads ad spend data from connected platforms for profit analysis. It doesn't install or manage pixels. If your pixels aren't firing correctly, Lifetimely can't help with that."
      },
      {
        "q": "Can I use both together?",
        "a": "Pixel Tracker is a prelaunch pixel-configuration app, not an analytics or attribution service. Launch tracking coverage is not verified. Keep any working integration until you can test an available replacement."
      },
      {
        "q": "Which should I set up first?",
        "a": "Pixels first. If your ad pixels aren't firing, your ad platforms can't optimize campaigns, which directly affects the ROAS data that feeds into profit analytics. Fix the pixel layer, then layer on profit analytics when you need it."
      },
      {
        "q": "Is Lifetimely better than Shopify's built-in reports?",
        "a": "Lifetimely adds COGS tracking, LTV calculations, and cohort analysis that Shopify's basic reports don't include. If you need profit margin visibility (not just revenue), Lifetimely fills a gap. If you just need revenue and order data, Shopify's reports may be enough."
      },
      {
        "q": "Is Pixel Tracker available on the Shopify App Store?",
        "a": "Not yet ,  it's currently in development. Join the waitlist at appnary.com for early access."
      }
    ],
    "relatedLinks": [
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "ROAS calculation guide",
        "href": "/pixel-tracker/guides/roas-calculation"
      },
      {
        "label": "Tracking coverage calculator",
        "href": "/tools/pixel-tracking-calculator"
      },
      {
        "label": "All platform guides",
        "href": "/pixel-tracker/guides"
      }
    ]
  },
  {
    "slug": "diy-vs-app",
    "competitor": "DIY theme code installation",
    "competitorPrice": "Free (time cost)",
    "competitorCategory": "BusinessApplication",
    "title": "DIY Pixel Installation vs Pixel Tracker App: Comparison",
    "description": "Manually adding pixel code to your Shopify theme is free but fragile. Compare DIY theme installation against a managed pixel app.",
    "h1": "DIY Theme Code vs Pixel Tracker App: Should You Install Pixels Yourself?",
    "intro": [
      "Adding pixel code directly to your Shopify theme is free and gives you full control. The trade-off: theme code changes break on theme updates, are hard to debug, and get messy when you're managing multiple platforms. Every pixel needs its own code snippet, placed in the right template, firing at the right time.",
      "Pixel Tracker's current approach uses a Shopify theme app extension. Its app embed requires activation, and a theme change still needs event testing. Pixel Tracker is not available to install; launch coverage and performance are unverified."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "Not confirmed",
        "competitor": "Free (your time)"
      },
      {
        "feature": "Setup time (first pixel)",
        "pixelTracker": "Planned; not available",
        "competitor": "30-60 minutes"
      },
      {
        "feature": "Setup time (7 pixels)",
        "pixelTracker": "Planned; not available",
        "competitor": "3-7 hours"
      },
      {
        "feature": "Theme updates break tracking",
        "pixelTracker": "Not verified",
        "competitor": "Yes (common)"
      },
      {
        "feature": "Debugging difficulty",
        "pixelTracker": "Not verified",
        "competitor": "Hard (manual code review)"
      },
      {
        "feature": "Multi-platform management",
        "pixelTracker": "Planned; not available",
        "competitor": "Separate code per platform"
      },
      {
        "feature": "Server-side tracking",
        "pixelTracker": "Not verified",
        "competitor": "Manual setup per platform"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Facebook/Meta pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Add fbq() code to theme"
      },
      {
        "feature": "Google Ads tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Add gtag() code to theme"
      },
      {
        "feature": "TikTok pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Add TikTok snippet to theme"
      },
      {
        "feature": "Snapchat pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Add snaptr() to theme"
      },
      {
        "feature": "Pinterest tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Add pintrk() to theme"
      },
      {
        "feature": "LinkedIn Insight Tag",
        "pixelTracker": "Planned; not available",
        "competitor": "Add LinkedIn snippet to theme"
      },
      {
        "feature": "X (Twitter) pixel",
        "pixelTracker": "Planned; not available",
        "competitor": "Add twq() to theme"
      },
      {
        "feature": "Survives theme updates",
        "pixelTracker": "Not verified",
        "competitor": "No"
      },
      {
        "feature": "Duplicate detection",
        "pixelTracker": "Not verified",
        "competitor": "Manual"
      },
      {
        "feature": "Enable/disable per platform",
        "pixelTracker": "Planned; not available",
        "competitor": "Remove/add code"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "Pixel Tracker launch plans",
        "pixelTracker": "Not confirmed; billed through Shopify",
        "competitor": "N/A"
      },
      {
        "plan": "DIY (your time)",
        "pixelTracker": "N/A",
        "competitor": "Free (1-7 hours setup)"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You are researching a future pixel connector and can wait for a verified launch.",
        "You will compare confirmed platform coverage, event delivery, and Shopify billing terms before switching."
      ],
      "chooseCompetitor": [
        "You only need one pixel and want zero monthly cost",
        "You're comfortable editing Shopify theme code",
        "You need exact control over script placement and timing",
        "You have a developer on staff who maintains theme code"
      ]
    },
    "faqs": [
      {
        "q": "Why not just add pixel code to my theme for free?",
        "a": "You can, and it works for a single pixel. The problem starts when you add 3-7 platforms: each needs its own code snippet in the right template, and theme updates can silently remove or break those snippets. An app keeps pixels separate from theme code."
      },
      {
        "q": "Will a pixel app slow down my store more than theme code?",
        "a": "Either approach loads browser scripts with real network and execution costs. An app extension does not guarantee a particular loading time or performance score. Measure your store before and after changes, and remove duplicate tags."
      },
      {
        "q": "Can I switch from theme code to Pixel Tracker later?",
        "a": "Pixel Tracker is not available to install yet. After launch, confirm the required integrations and test a replacement before removing working tracking. Historical data and migration behavior depend on the platforms and providers involved."
      },
      {
        "q": "What if I only use one ad platform?",
        "a": "A single-platform setup may be manageable through that platform's Shopify integration or a carefully tested manual installation. Pixel Tracker is prelaunch, so check its confirmed plan limits and pricing when the listing is available before choosing it."
      },
      {
        "q": "Is Pixel Tracker available on the Shopify App Store?",
        "a": "Not yet ,  it's currently in development. Join the waitlist at appnary.com for early access."
      }
    ],
    "relatedLinks": [
      {
        "label": "Pixel Tracker overview",
        "href": "/pixel-tracker"
      },
      {
        "label": "All platform setup guides",
        "href": "/pixel-tracker/guides"
      },
      {
        "label": "Tracking coverage calculator",
        "href": "/tools/pixel-tracking-calculator"
      },
      {
        "label": "Pixel health check",
        "href": "/tools/pixel-health-check"
      }
    ]
  },
  {
    "slug": "server-side-setup-options",
    "competitor": "Server-side tracking setup comparison",
    "competitorPrice": "Varies by method",
    "competitorCategory": "BusinessApplication",
    "title": "Server-Side Tracking Setup Options for Shopify: Comparison",
    "description": "Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified.",
    "h1": "Server-Side Tracking Setup Options for Shopify: CAPI, GTM, Native, and Pixel Tracker",
    "intro": [
      "Server-side tracking sends conversion events directly from your server (or Shopify's) to ad platforms, bypassing browser blockers that kill client-side pixels. There are four main ways to set it up on Shopify, each with different trade-offs in complexity, cost, and platform coverage.",
      "Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "Not confirmed",
        "competitor": "Free (CAPI), Free (sGTM), Free (native), or $225+ (Elevar)"
      },
      {
        "feature": "Setup time",
        "pixelTracker": "Planned; not available",
        "competitor": "1-4 hours (CAPI), 4-8 hours (sGTM), 15 min (native), 30 min (Elevar)"
      },
      {
        "feature": "Technical skill",
        "pixelTracker": "None",
        "competitor": "Intermediate (CAPI), Advanced (sGTM), Low (native), Technical (Elevar)"
      },
      {
        "feature": "Platforms covered",
        "pixelTracker": "Planned; not available",
        "competitor": "CAPI: Meta only; sGTM: any; Native: per channel"
      },
      {
        "feature": "Maintenance",
        "pixelTracker": "App-managed",
        "competitor": "Self-managed (CAPI/sGTM), App-managed (native/PT)"
      },
      {
        "feature": "Event customization",
        "pixelTracker": "Not verified",
        "competitor": "Custom (sGTM/Elevar), Standard (CAPI/native/PT)"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Facebook CAPI",
        "pixelTracker": "Not verified",
        "competitor": "CAPI: Yes | sGTM: Yes | Native: Yes | Elevar: Yes"
      },
      {
        "feature": "TikTok Events API",
        "pixelTracker": "Not verified",
        "competitor": "CAPI: No | sGTM: Manual | Native: No | Elevar: Yes"
      },
      {
        "feature": "Google Ads server-side",
        "pixelTracker": "Not verified",
        "competitor": "CAPI: No | sGTM: Yes | Native: No | Elevar: Yes"
      },
      {
        "feature": "Snapchat CAPI",
        "pixelTracker": "Not verified",
        "competitor": "CAPI: No | sGTM: Manual | Native: No | Elevar: Possible"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Planned; not available",
        "competitor": "CAPI: Partial | sGTM: No | Native: Yes | Elevar: No"
      },
      {
        "feature": "Browser + server deduplication",
        "pixelTracker": "Not verified",
        "competitor": "CAPI: Manual | sGTM: Manual | Native: Yes | Elevar: Yes"
      },
      {
        "feature": "Multi-platform from one dashboard",
        "pixelTracker": "Planned; not available",
        "competitor": "No (each method is per-platform)"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "Pixel Tracker launch plans",
        "pixelTracker": "Not confirmed; billed through Shopify",
        "competitor": "N/A"
      },
      {
        "plan": "Facebook CAPI (DIY)",
        "pixelTracker": "N/A",
        "competitor": "Free (server hosting costs vary)"
      },
      {
        "plan": "Server-side GTM",
        "pixelTracker": "N/A",
        "competitor": "Free (GTM) + server hosting ($5-50/mo)"
      },
      {
        "plan": "Native Shopify channels",
        "pixelTracker": "N/A",
        "competitor": "Free (included with sales channel apps)"
      },
      {
        "plan": "Elevar",
        "pixelTracker": "N/A",
        "competitor": "$225+/mo"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You are researching a future pixel connector and can wait for a verified launch.",
        "You will compare confirmed platform coverage, event delivery, and Shopify billing terms before switching."
      ],
      "chooseCompetitor": [
        "You need server-side for Google Ads (use sGTM)",
        "You want custom event schemas and full control (use sGTM or Elevar)",
        "You only need Meta CAPI and want the native channel (use Facebook & Instagram channel)",
        "You need enterprise-grade data pipeline (use Elevar)"
      ]
    },
    "faqs": [
      {
        "q": "What is server-side tracking and why does it matter?",
        "a": "Server-side tracking sends conversion events from your server directly to ad platforms, bypassing browser ad blockers and tracking prevention. Browser-only pixels miss 10-20% of conversions due to blockers, Safari ITP, and cookie loss. Server-side tracking recovers that data."
      },
      {
        "q": "Which server-side method should I use?",
        "a": "For Google Ads server-side, use Server-side GTM. For full data infrastructure, use Elevar. For Meta-only, the native Facebook & Instagram channel works. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
      },
      {
        "q": "Can I use Pixel Tracker's server-side alongside sGTM?",
        "a": "Pixel Tracker server-side delivery is not confirmed. For any future combination, define which provider sends each event and verify duplicate handling before running overlapping integrations."
      },
      {
        "q": "Does Pixel Tracker support Google Ads server-side?",
        "a": "Not currently. For Google Ads server-side tracking, Server-side GTM is the standard approach. Pixel Tracker is in development and not available to install. Platform coverage and server-side delivery are still being verified."
      },
      {
        "q": "Is Pixel Tracker available on the Shopify App Store?",
        "a": "Not yet ,  it's currently in development. Join the waitlist at appnary.com for early access."
      }
    ],
    "relatedLinks": [
      {
        "label": "Server-side tracking guide",
        "href": "/pixel-tracker/guides/server-side-tracking"
      },
      {
        "label": "Meta CAPI setup",
        "href": "/pixel-tracker/meta-pixel/server-side"
      },
      {
        "label": "TikTok Events API setup",
        "href": "/pixel-tracker/tiktok-pixel/server-side"
      },
      {
        "label": "Tracking coverage calculator",
        "href": "/tools/pixel-tracking-calculator"
      }
    ]
  }
]
;

export function getAllVsComparisonPages(): VsComparisonPage[] {
  return vsComparisonPages;
}

export function getVsComparisonPage(slug: string): VsComparisonPage | undefined {
  return vsComparisonPages.find((p) => p.slug === slug);
}

export function getAllVsComparisons() {
  return vsComparisonPages;
}

export const VS_COMPARISON_SLUGS = vsComparisonPages.map((p) => p.slug);
