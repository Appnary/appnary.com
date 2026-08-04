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
      "Pixel Tracker and Elevar are both Shopify tracking tools, but they serve different audiences. Pixel Tracker is a pixel installer that connects ad platforms to your store with no code required. Elevar is a full server-side data pipeline for stores that need custom event schemas, warehouse sync, and agency-grade infrastructure.",
      "If you're a solo merchant who wants Facebook, Google Ads, TikTok, and other pixels running without touching theme code, Pixel Tracker is the simpler and cheaper option. If you're an agency or technical team managing complex data infrastructure across multiple stores, Elevar is the right tool for that job."
    ],
    "quickComparison": [
      {
        "feature": "Lowest paid plan",
        "pixelTracker": "$7/mo (3 pixels)",
        "competitor": "$225/mo"
      },
      {
        "feature": "Free plan",
        "pixelTracker": "Yes (1 pixel)",
        "competitor": "No"
      },
      {
        "feature": "Ad platforms supported",
        "pixelTracker": "7 (Meta, Google, TikTok, Snapchat, Pinterest, X, LinkedIn)",
        "competitor": "Meta, Google, TikTok, Snap (pixel layer only)"
      },
      {
        "feature": "Server-side tracking",
        "pixelTracker": "CAPI + TikTok Events API",
        "competitor": "Full data pipeline (custom events, webhooks)"
      },
      {
        "feature": "Theme code required",
        "pixelTracker": "No",
        "competitor": "No"
      },
      {
        "feature": "Setup complexity",
        "pixelTracker": "Paste Pixel IDs, done",
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
        "pixelTracker": "Yes",
        "competitor": "Yes"
      },
      {
        "feature": "Google Ads conversion tag",
        "pixelTracker": "Yes",
        "competitor": "Yes"
      },
      {
        "feature": "TikTok pixel",
        "pixelTracker": "Yes",
        "competitor": "Yes"
      },
      {
        "feature": "Snapchat pixel",
        "pixelTracker": "Yes",
        "competitor": "Yes"
      },
      {
        "feature": "Pinterest tag",
        "pixelTracker": "Yes",
        "competitor": "Not standard"
      },
      {
        "feature": "LinkedIn Insight Tag",
        "pixelTracker": "Yes",
        "competitor": "Not standard"
      },
      {
        "feature": "X (Twitter) pixel",
        "pixelTracker": "Yes",
        "competitor": "Not standard"
      },
      {
        "feature": "Facebook CAPI",
        "pixelTracker": "Yes",
        "competitor": "Yes (deeper)"
      },
      {
        "feature": "TikTok Events API",
        "pixelTracker": "Yes",
        "competitor": "Yes"
      },
      {
        "feature": "Custom event schemas",
        "pixelTracker": "Standard events only",
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
        "pixelTracker": "Yes",
        "competitor": "Requires configuration"
      },
      {
        "feature": "Pricing transparency",
        "pixelTracker": "Published on site",
        "competitor": "Sales-driven"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "Free",
        "pixelTracker": "$0/mo (1 pixel)",
        "competitor": "N/A"
      },
      {
        "plan": "Starter",
        "pixelTracker": "$7/mo (3 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Growth",
        "pixelTracker": "$15/mo (10 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pro",
        "pixelTracker": "$29/mo (unlimited)",
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
        "You want to install ad pixels without code or developer help",
        "You manage 1-3 ad platforms and need a simple dashboard",
        "You're a solo merchant or small team watching costs",
        "You want transparent pricing without a sales call"
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
        "a": "For pixel installation, yes. Pixel Tracker connects 7 ad platforms from one dashboard with no code. For full data pipeline infrastructure (custom events, warehouse sync, agency multi-store views), Elevar is the more complete tool."
      },
      {
        "q": "Is Elevar worth the price for a small store?",
        "a": "For most solo merchants, no. Elevar's entry plan costs 8x Pixel Tracker's top tier and is built for stores with complex data needs and agency support. If you just need pixels firing correctly, a simpler installer is usually enough."
      },
      {
        "q": "Does Pixel Tracker support server-side tracking like Elevar?",
        "a": "Pixel Tracker supports Facebook Conversions API and TikTok Events API for server-side event tracking. Elevar offers a broader data pipeline with custom event schemas, but that depth comes at a much higher price point."
      },
      {
        "q": "Can I start with Pixel Tracker and move to Elevar later?",
        "a": "Yes. Pixel Tracker's pixel connections are standard integrations ,  there's no lock-in. If your store grows to need full data pipeline infrastructure, you can migrate to Elevar without losing historical pixel data."
      },
      {
        "q": "Which is better for Facebook Conversions API?",
        "a": "Both support CAPI. Elevar's implementation is deeper (custom deduplication, advanced match quality). Pixel Tracker's is simpler to set up. For most stores, Pixel Tracker's CAPI is sufficient."
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
        "label": "Tracking cost calculator",
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
    "description": "The Facebook & Instagram sales channel is free and Meta-only. Pixel Tracker covers 7 ad platforms with optional server-side tracking. Compare what each does well.",
    "h1": "Pixel Tracker vs Facebook & Instagram Channel: Do You Need Both?",
    "intro": [
      "Most Shopify stores already have the Facebook & Instagram sales channel installed. It's free, it connects your Meta pixel, and it lets you manage your Facebook and Instagram shop from Shopify. The question is whether that's enough for your tracking needs, or whether a multi-platform pixel installer adds something the native channel doesn't.",
      "The short answer: if you only run ads on Meta and don't need server-side tracking, the native channel is probably fine. If you advertise on more than one platform, want a unified dashboard, or need Conversions API support without theme code changes, Pixel Tracker covers the gaps."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "$0-$29/mo",
        "competitor": "Free"
      },
      {
        "feature": "Ad platforms",
        "pixelTracker": "7 platforms",
        "competitor": "Meta only (Facebook + Instagram)"
      },
      {
        "feature": "Server-side tracking",
        "pixelTracker": "CAPI + TikTok Events API",
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
        "pixelTracker": "Yes",
        "competitor": "Yes"
      },
      {
        "feature": "Google Ads conversion tag",
        "pixelTracker": "Yes",
        "competitor": "No"
      },
      {
        "feature": "TikTok pixel",
        "pixelTracker": "Yes",
        "competitor": "No"
      },
      {
        "feature": "Snapchat pixel",
        "pixelTracker": "Yes",
        "competitor": "No"
      },
      {
        "feature": "Pinterest tag",
        "pixelTracker": "Yes",
        "competitor": "No"
      },
      {
        "feature": "LinkedIn Insight Tag",
        "pixelTracker": "Yes",
        "competitor": "No"
      },
      {
        "feature": "X (Twitter) pixel",
        "pixelTracker": "Yes",
        "competitor": "No"
      },
      {
        "feature": "Facebook CAPI",
        "pixelTracker": "Yes",
        "competitor": "Yes"
      },
      {
        "feature": "TikTok Events API",
        "pixelTracker": "Yes",
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
        "pixelTracker": "Yes",
        "competitor": "No"
      },
      {
        "feature": "Setup time",
        "pixelTracker": "5 minutes",
        "competitor": "10-15 minutes"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "Facebook & Instagram channel",
        "pixelTracker": "N/A",
        "competitor": "Free"
      },
      {
        "plan": "Pixel Tracker Free",
        "pixelTracker": "$0/mo (1 pixel)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Starter",
        "pixelTracker": "$7/mo (3 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Growth",
        "pixelTracker": "$15/mo (10 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Pro",
        "pixelTracker": "$29/mo (unlimited)",
        "competitor": "N/A"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You advertise on more than one platform (Meta + Google, Meta + TikTok, etc.)",
        "You want one dashboard for all your pixel connections",
        "You need TikTok Events API alongside Meta CAPI",
        "You're switching away from Meta and want to keep tracking on other platforms"
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
        "a": "Yes, but you'd be sending duplicate Meta pixel events. If you install Pixel Tracker for Meta, remove the pixel connection from the native channel to avoid double-firing. Keep the channel for shop management if you use it."
      },
      {
        "q": "Does the native channel support server-side tracking?",
        "a": "Yes, the Facebook & Instagram channel includes Conversions API (CAPI) support. You can enable it in the channel settings. Pixel Tracker also supports CAPI with the same setup path."
      },
      {
        "q": "What does Pixel Tracker offer that the native channel doesn't?",
        "a": "Multi-platform coverage (Google Ads, TikTok, Snapchat, Pinterest, X, LinkedIn), a unified dashboard for all platforms, and optional TikTok Events API support. The native channel is Meta-only."
      },
      {
        "q": "Should I switch from the native channel to Pixel Tracker?",
        "a": "Only if you advertise on platforms beyond Meta or want a single dashboard for all pixels. If Meta is your only ad channel and you use the shop management features, the native channel covers what you need."
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
        "label": "Tracking cost calculator",
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
      "Pixel Tracker takes the opposite approach: paste your Pixel IDs, and the app handles injection, event firing, and dashboard visibility across 7 platforms. You trade flexibility for simplicity. For most Shopify merchants who want ad pixels running correctly without learning tag management infrastructure, that's a good trade."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "$0-$29/mo",
        "competitor": "Free"
      },
      {
        "feature": "Setup time",
        "pixelTracker": "5 minutes",
        "competitor": "1-4 hours (first time)"
      },
      {
        "feature": "Technical skill needed",
        "pixelTracker": "None (paste IDs)",
        "competitor": "Intermediate to advanced"
      },
      {
        "feature": "Ad platforms",
        "pixelTracker": "7 managed platforms",
        "competitor": "Unlimited (any script)"
      },
      {
        "feature": "Event customization",
        "pixelTracker": "Standard events only",
        "competitor": "Fully custom"
      },
      {
        "feature": "Server-side tracking",
        "pixelTracker": "CAPI + TikTok Events API",
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
        "pixelTracker": "Yes (managed)",
        "competitor": "Yes (manual config)"
      },
      {
        "feature": "Google Ads conversion tag",
        "pixelTracker": "Yes (managed)",
        "competitor": "Yes (native integration)"
      },
      {
        "feature": "TikTok pixel",
        "pixelTracker": "Yes (managed)",
        "competitor": "Yes (manual config)"
      },
      {
        "feature": "Snapchat pixel",
        "pixelTracker": "Yes (managed)",
        "competitor": "Yes (manual config)"
      },
      {
        "feature": "Pinterest tag",
        "pixelTracker": "Yes (managed)",
        "competitor": "Yes (manual config)"
      },
      {
        "feature": "LinkedIn Insight Tag",
        "pixelTracker": "Yes (managed)",
        "competitor": "Yes (manual config)"
      },
      {
        "feature": "X (Twitter) pixel",
        "pixelTracker": "Yes (managed)",
        "competitor": "Yes (manual config)"
      },
      {
        "feature": "Custom scripts",
        "pixelTracker": "No",
        "competitor": "Yes (anything)"
      },
      {
        "feature": "Custom event triggers",
        "pixelTracker": "Standard events only",
        "competitor": "Fully custom"
      },
      {
        "feature": "Data layer access",
        "pixelTracker": "No",
        "competitor": "Full control"
      },
      {
        "feature": "Server-side GTM",
        "pixelTracker": "No",
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
        "plan": "Google Tag Manager",
        "pixelTracker": "N/A",
        "competitor": "Free"
      },
      {
        "plan": "Pixel Tracker Free",
        "pixelTracker": "$0/mo (1 pixel)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Starter",
        "pixelTracker": "$7/mo (3 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Growth",
        "pixelTracker": "$15/mo (10 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Pro",
        "pixelTracker": "$29/mo (unlimited)",
        "competitor": "N/A"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You want pixels running in 5 minutes with zero technical setup",
        "You advertise on 2-7 platforms and want a dashboard for all of them",
        "You don't have a developer on staff",
        "You want someone else to handle tag updates when platforms change their scripts"
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
        "a": "Yes, but you'd be managing pixels in two places. If GTM already handles your tracking correctly, adding Pixel Tracker is redundant. If GTM handles some platforms and you want easier coverage for others, using both is an option ,  just avoid duplicate pixel fires on the same platform."
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
        "a": "Both work. GTM has a native Google Ads tag template with advanced options (enhanced conversions, value rules). Pixel Tracker's Google Ads support is simpler ,  paste your Conversion ID and label, and it fires. For basic conversion tracking, both are equivalent."
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
        "label": "Tracking cost calculator",
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
    "description": "Littledata fixes analytics data pipelines. Pixel Tracker installs ad pixels. They solve different problems for different stores.",
    "h1": "Pixel Tracker vs Littledata: Analytics Pipeline vs Pixel Installation",
    "intro": [
      "Littledata is a server-side analytics layer that fixes tracking accuracy in GA4, Segment, and ad platforms. It's built for stores with complex analytics needs, subscription businesses, and teams that need clean data flowing into their analytics stack.",
      "Pixel Tracker is a pixel installer that connects ad platforms to your Shopify store. It's simpler, cheaper, and focused on a narrower problem: getting your Meta, Google, TikTok, and other ad pixels firing correctly without code."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "$0-$29/mo",
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
        "pixelTracker": "Paste IDs, done",
        "competitor": "Technical setup required"
      },
      {
        "feature": "Ad platforms",
        "pixelTracker": "7 platforms",
        "competitor": "GA4, Segment, ad platform pixels"
      },
      {
        "feature": "Server-side GA4",
        "pixelTracker": "No",
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
        "pixelTracker": "Yes",
        "competitor": "Yes (via pipeline)"
      },
      {
        "feature": "Google Ads conversion tag",
        "pixelTracker": "Yes",
        "competitor": "Yes (via pipeline)"
      },
      {
        "feature": "TikTok pixel",
        "pixelTracker": "Yes",
        "competitor": "Limited"
      },
      {
        "feature": "Snapchat pixel",
        "pixelTracker": "Yes",
        "competitor": "Not standard"
      },
      {
        "feature": "Pinterest tag",
        "pixelTracker": "Yes",
        "competitor": "Not standard"
      },
      {
        "feature": "LinkedIn Insight Tag",
        "pixelTracker": "Yes",
        "competitor": "Not standard"
      },
      {
        "feature": "Server-side GA4",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Server-side ad platform pixels",
        "pixelTracker": "CAPI + TikTok Events API",
        "competitor": "Via Segment/GA4 pipeline"
      },
      {
        "feature": "Subscription revenue tracking",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Yes",
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
        "plan": "Littledata",
        "pixelTracker": "N/A",
        "competitor": "$199+/mo (enterprise)"
      },
      {
        "plan": "Pixel Tracker Free",
        "pixelTracker": "$0/mo (1 pixel)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Starter",
        "pixelTracker": "$7/mo (3 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Growth",
        "pixelTracker": "$15/mo (10 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Pro",
        "pixelTracker": "$29/mo (unlimited)",
        "competitor": "N/A"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You want ad pixels installed and managed simply",
        "You advertise on multiple platforms and need a dashboard",
        "Budget under $50/mo for tracking tools",
        "No developer on staff"
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
        "a": "For most solo merchants, no. Littledata's value is in cleaning GA4 data and fixing analytics attribution ,  problems that are most expensive at scale. If your primary need is installing ad pixels, a simpler tool at $0-$29/mo is more appropriate."
      },
      {
        "q": "Can I use both together?",
        "a": "Yes. Pixel Tracker installs and manages your ad pixels. Littledata can clean the analytics data flowing into GA4. They operate at different layers ,  pixel installation vs analytics data repair."
      },
      {
        "q": "Does Pixel Tracker fix GA4 tracking accuracy?",
        "a": "No. Pixel Tracker installs ad platform pixels. GA4 accuracy issues (missing events, wrong attribution, subscription tracking) are what Littledata solves. They're complementary tools for different problems."
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
        "label": "Tracking cost calculator",
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
    "description": "Both are Shopify pixel installers at similar price points. Compare platform coverage, server-side support, and dashboard features.",
    "h1": "Pixel Tracker vs TrackBee: Multi-Platform Pixel Installation Compared",
    "intro": [
      "Pixel Tracker and TrackBee are both Shopify pixel installers that let you connect ad platforms without editing theme code. They're close competitors, and the right choice depends on which platforms you advertise on and whether you need server-side tracking.",
      "Pixel Tracker covers 7 platforms (Meta, Google Ads, TikTok, Snapchat, Pinterest, X, LinkedIn) with optional Facebook CAPI and TikTok Events API support. TrackBee focuses primarily on Meta and a smaller set of platforms."
    ],
    "quickComparison": [
      {
        "feature": "Lowest paid plan",
        "pixelTracker": "$7/mo (3 pixels)",
        "competitor": "~$19/mo"
      },
      {
        "feature": "Free plan",
        "pixelTracker": "Yes (1 pixel)",
        "competitor": "Limited"
      },
      {
        "feature": "Ad platforms",
        "pixelTracker": "7 platforms",
        "competitor": "Meta, Google, TikTok (fewer platforms)"
      },
      {
        "feature": "Server-side tracking",
        "pixelTracker": "CAPI + TikTok Events API",
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
        "pixelTracker": "5 minutes",
        "competitor": "5-10 minutes"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Facebook/Meta pixel",
        "pixelTracker": "Yes",
        "competitor": "Yes"
      },
      {
        "feature": "Google Ads conversion tag",
        "pixelTracker": "Yes",
        "competitor": "Yes"
      },
      {
        "feature": "TikTok pixel",
        "pixelTracker": "Yes",
        "competitor": "Yes"
      },
      {
        "feature": "Snapchat pixel",
        "pixelTracker": "Yes",
        "competitor": "Not standard"
      },
      {
        "feature": "Pinterest tag",
        "pixelTracker": "Yes",
        "competitor": "Not standard"
      },
      {
        "feature": "LinkedIn Insight Tag",
        "pixelTracker": "Yes",
        "competitor": "Not standard"
      },
      {
        "feature": "X (Twitter) pixel",
        "pixelTracker": "Yes",
        "competitor": "Not standard"
      },
      {
        "feature": "Facebook CAPI",
        "pixelTracker": "Yes",
        "competitor": "Limited"
      },
      {
        "feature": "TikTok Events API",
        "pixelTracker": "Yes",
        "competitor": "Not standard"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Yes",
        "competitor": "Yes"
      },
      {
        "feature": "Multi-platform dashboard",
        "pixelTracker": "Yes",
        "competitor": "Basic"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "TrackBee entry",
        "pixelTracker": "N/A",
        "competitor": "~$19/mo"
      },
      {
        "plan": "Pixel Tracker Free",
        "pixelTracker": "$0/mo (1 pixel)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Starter",
        "pixelTracker": "$7/mo (3 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Growth",
        "pixelTracker": "$15/mo (10 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Pro",
        "pixelTracker": "$29/mo (unlimited)",
        "competitor": "N/A"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You advertise on more than 3 platforms",
        "You need Snapchat, Pinterest, LinkedIn, or X pixels",
        "You want server-side CAPI and TikTok Events API",
        "You prefer transparent, tiered pricing"
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
        "a": "TrackBee's entry plan (~$19/mo) is close to Pixel Tracker's Growth plan ($15/mo). Pixel Tracker's Starter plan ($7/mo) is cheaper if you only need 3 pixels. For unlimited pixels, Pixel Tracker's Pro ($29/mo) is competitive."
      },
      {
        "q": "Can I switch from TrackBee to Pixel Tracker?",
        "a": "Yes. Both are standard pixel integrations ,  there's no lock-in. Switching involves disconnecting TrackBee and connecting Pixel Tracker with the same Pixel IDs. Your historical ad platform data stays in the ad platforms themselves."
      },
      {
        "q": "Which has better server-side support?",
        "a": "Pixel Tracker supports both Facebook CAPI and TikTok Events API for server-side tracking. TrackBee's server-side support is more limited. If server-side tracking is a priority, Pixel Tracker covers more ground."
      },
      {
        "q": "Does TrackBee support all the same platforms?",
        "a": "No. TrackBee focuses on Meta, Google, and TikTok. Pixel Tracker adds Snapchat, Pinterest, LinkedIn, and X (Twitter). If you advertise on any of those four additional platforms, Pixel Tracker covers them without a second app."
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
        "label": "Tracking cost calculator",
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
    "description": "Hyros is AI-powered attribution. Pixel Tracker installs ad pixels. Different tools, different budgets, different problems.",
    "h1": "Pixel Tracker vs Hyros: Attribution Intelligence vs Pixel Installation",
    "intro": [
      "Hyros is an AI-powered attribution platform that tracks ad spend across multiple channels and provides cross-device, cross-platform attribution modeling. It's built for stores spending $10k+/mo on ads and needing accurate ROAS data across Meta, Google, TikTok, and other platforms.",
      "Pixel Tracker is a pixel installer. It connects ad platforms to your Shopify store so events fire correctly. It doesn't model attribution or provide cross-channel reporting ,  it makes sure the data gets to the platforms in the first place."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "$0-$29/mo",
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
        "pixelTracker": "7 (installation only)",
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
        "pixelTracker": "Paste IDs, done",
        "competitor": "Technical integration"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Installs Meta pixel",
        "pixelTracker": "Yes",
        "competitor": "No (uses existing pixel data)"
      },
      {
        "feature": "Installs Google Ads tag",
        "pixelTracker": "Yes",
        "competitor": "No"
      },
      {
        "feature": "Installs TikTok pixel",
        "pixelTracker": "Yes",
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
        "pixelTracker": "CAPI + TikTok Events API",
        "competitor": "No (reads platform data)"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Yes",
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
        "plan": "Hyros entry",
        "pixelTracker": "N/A",
        "competitor": "~$230+/mo (revenue-tiered)"
      },
      {
        "plan": "Pixel Tracker Free",
        "pixelTracker": "$0/mo (1 pixel)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Starter",
        "pixelTracker": "$7/mo (3 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Growth",
        "pixelTracker": "$15/mo (10 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Pro",
        "pixelTracker": "$29/mo (unlimited)",
        "competitor": "N/A"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You need pixels installed, not attributed",
        "You spend under $10k/mo on ads",
        "Budget under $50/mo for tracking tools",
        "You want a 5-minute setup with no technical work"
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
        "a": "No. Hyros reads data from existing pixel connections ,  it doesn't install or manage pixels. If your pixels aren't firing correctly, Hyros can't help with that. Pixel Tracker installs and manages the pixel layer."
      },
      {
        "q": "Can I use both together?",
        "a": "Yes, and they're complementary. Pixel Tracker ensures your pixels fire correctly across 7 platforms. Hyros reads that data and provides cross-platform attribution. They solve different problems at different layers."
      },
      {
        "q": "Is Hyros worth $230+/mo for a small store?",
        "a": "For stores spending under $10k/mo on ads, Hyros typically doesn't justify its cost. At that spend level, the attribution insights don't offset the monthly fee. Pixel Tracker at $7-$29/mo covers the pixel installation layer."
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
        "label": "Tracking cost calculator",
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
      "Pixel Tracker installs the pixels that make attribution possible. Without correctly firing ad platform pixels, attribution tools have incomplete data to work with. They solve different problems at different layers of the tracking stack."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "$0-$29/mo",
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
        "pixelTracker": "7 (installation)",
        "competitor": "Meta, Google, TikTok, Snap + more (attribution)"
      },
      {
        "feature": "Server-side tracking",
        "pixelTracker": "CAPI + TikTok Events API",
        "competitor": "Server-side attribution layer"
      },
      {
        "feature": "Multi-touch modeling",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Setup complexity",
        "pixelTracker": "5 minutes",
        "competitor": "Technical integration"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Installs ad pixels",
        "pixelTracker": "Yes",
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
        "pixelTracker": "CAPI + TikTok Events API",
        "competitor": "Server-side attribution"
      },
      {
        "feature": "Ad creative-level reporting",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Yes",
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
        "plan": "Northbeam entry",
        "pixelTracker": "N/A",
        "competitor": "$100-$200+/mo"
      },
      {
        "plan": "Pixel Tracker Free",
        "pixelTracker": "$0/mo (1 pixel)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Starter",
        "pixelTracker": "$7/mo (3 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Growth",
        "pixelTracker": "$15/mo (10 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Pro",
        "pixelTracker": "$29/mo (unlimited)",
        "competitor": "N/A"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You need pixels installed across multiple platforms",
        "Budget under $50/mo for tracking tools",
        "You don't need cross-platform attribution yet",
        "You want a no-code, 5-minute setup"
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
        "a": "Yes. Pixel Tracker ensures pixels fire correctly. Northbeam reads that data and provides multi-touch attribution. They're complementary tools at different layers of the stack."
      },
      {
        "q": "Which should I set up first?",
        "a": "Pixels first. Attribution tools need clean pixel data to model correctly. If your Meta pixel isn't firing Purchase events, no attribution tool can tell you which ad drove the sale. Fix the pixel layer first with Pixel Tracker, then consider attribution if your ad spend justifies it."
      },
      {
        "q": "Is Northbeam worth $100+/mo for a small store?",
        "a": "For stores spending under $5k/mo on ads, Northbeam's attribution insights usually don't justify the cost. At that spend level, the individual platform dashboards (Meta Ads Manager, Google Ads) provide sufficient reporting. Pixel Tracker at $7-$29/mo covers the pixel installation layer."
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
        "label": "Tracking cost calculator",
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
    "description": "Lifetimely tracks profit and customer lifetime value. Pixel Tracker installs ad pixels. Different tools for different jobs.",
    "h1": "Pixel Tracker vs Lifetimely: Profit Analytics vs Pixel Installation",
    "intro": [
      "Lifetimely is a profit analytics and LTV tool built for Shopify. It shows your actual profit after costs, tracks customer lifetime value, and provides cohort analysis. It's built for understanding whether your business is actually making money, not just generating revenue.",
      "Pixel Tracker installs ad platform pixels. It ensures the data flows to Meta, Google, TikTok, and other platforms so their reporting works. It doesn't analyze profit or LTV ,  it makes sure the ad platforms have the conversion data they need."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "$0-$29/mo",
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
        "pixelTracker": "7 (installation)",
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
        "pixelTracker": "5 minutes",
        "competitor": "Connect Shopify, set COGS"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Installs ad pixels",
        "pixelTracker": "Yes",
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
        "pixelTracker": "No (installs pixel)",
        "competitor": "Yes (reads platform data)"
      },
      {
        "feature": "COGS tracking",
        "pixelTracker": "No",
        "competitor": "Yes"
      },
      {
        "feature": "Multi-platform pixel dashboard",
        "pixelTracker": "Yes",
        "competitor": "No"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Yes",
        "competitor": "Yes"
      }
    ],
    "pricingBreakdown": [
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
      },
      {
        "plan": "Pixel Tracker Free",
        "pixelTracker": "$0/mo (1 pixel)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Starter",
        "pixelTracker": "$7/mo (3 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Growth",
        "pixelTracker": "$15/mo (10 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Pro",
        "pixelTracker": "$29/mo (unlimited)",
        "competitor": "N/A"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You need ad pixels installed across multiple platforms",
        "You want a unified dashboard for pixel management",
        "Budget under $50/mo for tracking tools",
        "You don't need profit analytics yet"
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
        "a": "Yes, and they're complementary. Pixel Tracker ensures your ad pixels fire correctly so platform reporting works. Lifetimely analyzes whether your business is profitable after accounting for all costs. Different layers of the same stack."
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
        "label": "Tracking cost calculator",
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
      "Pixel Tracker handles injection through Shopify ScriptTags, which stay separate from your theme. Updates to your theme don't break pixel tracking, and you manage all platforms from one dashboard. The trade-off: you give up some control over exactly when and where scripts fire."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "$0-$29/mo",
        "competitor": "Free (your time)"
      },
      {
        "feature": "Setup time (first pixel)",
        "pixelTracker": "5 minutes",
        "competitor": "30-60 minutes"
      },
      {
        "feature": "Setup time (7 pixels)",
        "pixelTracker": "5 minutes total",
        "competitor": "3-7 hours"
      },
      {
        "feature": "Theme updates break tracking",
        "pixelTracker": "No",
        "competitor": "Yes (common)"
      },
      {
        "feature": "Debugging difficulty",
        "pixelTracker": "Easy (dashboard)",
        "competitor": "Hard (manual code review)"
      },
      {
        "feature": "Multi-platform management",
        "pixelTracker": "One dashboard",
        "competitor": "Separate code per platform"
      },
      {
        "feature": "Server-side tracking",
        "pixelTracker": "CAPI + TikTok Events API",
        "competitor": "Manual setup per platform"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Facebook/Meta pixel",
        "pixelTracker": "Paste ID, done",
        "competitor": "Add fbq() code to theme"
      },
      {
        "feature": "Google Ads tag",
        "pixelTracker": "Paste ID, done",
        "competitor": "Add gtag() code to theme"
      },
      {
        "feature": "TikTok pixel",
        "pixelTracker": "Paste ID, done",
        "competitor": "Add TikTok snippet to theme"
      },
      {
        "feature": "Snapchat pixel",
        "pixelTracker": "Paste ID, done",
        "competitor": "Add snaptr() to theme"
      },
      {
        "feature": "Pinterest tag",
        "pixelTracker": "Paste ID, done",
        "competitor": "Add pintrk() to theme"
      },
      {
        "feature": "LinkedIn Insight Tag",
        "pixelTracker": "Paste ID, done",
        "competitor": "Add LinkedIn snippet to theme"
      },
      {
        "feature": "X (Twitter) pixel",
        "pixelTracker": "Paste ID, done",
        "competitor": "Add twq() to theme"
      },
      {
        "feature": "Survives theme updates",
        "pixelTracker": "Yes",
        "competitor": "No"
      },
      {
        "feature": "Duplicate detection",
        "pixelTracker": "Dashboard view",
        "competitor": "Manual"
      },
      {
        "feature": "Enable/disable per platform",
        "pixelTracker": "One toggle",
        "competitor": "Remove/add code"
      }
    ],
    "pricingBreakdown": [
      {
        "plan": "DIY (your time)",
        "pixelTracker": "N/A",
        "competitor": "Free (1-7 hours setup)"
      },
      {
        "plan": "Pixel Tracker Free",
        "pixelTracker": "$0/mo (1 pixel)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Starter",
        "pixelTracker": "$7/mo (3 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Growth",
        "pixelTracker": "$15/mo (10 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Pro",
        "pixelTracker": "$29/mo (unlimited)",
        "competitor": "N/A"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You advertise on multiple platforms and don't want to manage code",
        "Your theme gets updated frequently",
        "You want server-side tracking without custom development",
        "You prefer a dashboard over editing liquid templates"
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
        "a": "Both load the same pixel scripts from the same ad platform servers. The app uses Shopify ScriptTags, which inject scripts after page load ,  the same timing as most theme-code installations. Performance impact is comparable."
      },
      {
        "q": "Can I switch from theme code to Pixel Tracker later?",
        "a": "Yes. Remove the pixel snippets from your theme, install Pixel Tracker, and connect the same Pixel IDs. Your ad platform data is stored in the platforms themselves, not in the theme code, so nothing is lost."
      },
      {
        "q": "What if I only use one ad platform?",
        "a": "For a single platform with no plans to expand, DIY is perfectly reasonable and costs nothing. Pixel Tracker's Free plan ($0/mo for 1 pixel) is also an option if you want the dashboard and future flexibility without monthly cost."
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
        "label": "Tracking cost calculator",
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
    "description": "Compare the four main ways to set up server-side tracking on Shopify: Conversions API, Server-side GTM, native app channels, and Pixel Tracker.",
    "h1": "Server-Side Tracking Setup Options for Shopify: CAPI, GTM, Native, and Pixel Tracker",
    "intro": [
      "Server-side tracking sends conversion events directly from your server (or Shopify's) to ad platforms, bypassing browser blockers that kill client-side pixels. There are four main ways to set it up on Shopify, each with different trade-offs in complexity, cost, and platform coverage.",
      "This page compares Facebook Conversions API (CAPI), Server-side Google Tag Manager (sGTM), native Shopify sales channel integrations, and Pixel Tracker's built-in server-side support ,  so you can pick the approach that fits your store."
    ],
    "quickComparison": [
      {
        "feature": "Monthly cost",
        "pixelTracker": "$0-$29/mo",
        "competitor": "Free (CAPI), Free (sGTM), Free (native), or $225+ (Elevar)"
      },
      {
        "feature": "Setup time",
        "pixelTracker": "5 minutes",
        "competitor": "1-4 hours (CAPI), 4-8 hours (sGTM), 15 min (native), 30 min (Elevar)"
      },
      {
        "feature": "Technical skill",
        "pixelTracker": "None",
        "competitor": "Intermediate (CAPI), Advanced (sGTM), Low (native), Technical (Elevar)"
      },
      {
        "feature": "Platforms covered",
        "pixelTracker": "Meta CAPI + TikTok Events API",
        "competitor": "CAPI: Meta only; sGTM: any; Native: per channel"
      },
      {
        "feature": "Maintenance",
        "pixelTracker": "App-managed",
        "competitor": "Self-managed (CAPI/sGTM), App-managed (native/PT)"
      },
      {
        "feature": "Event customization",
        "pixelTracker": "Standard events",
        "competitor": "Custom (sGTM/Elevar), Standard (CAPI/native/PT)"
      }
    ],
    "featureMatrix": [
      {
        "feature": "Facebook CAPI",
        "pixelTracker": "Yes (built-in)",
        "competitor": "CAPI: Yes | sGTM: Yes | Native: Yes | Elevar: Yes"
      },
      {
        "feature": "TikTok Events API",
        "pixelTracker": "Yes (built-in)",
        "competitor": "CAPI: No | sGTM: Manual | Native: No | Elevar: Yes"
      },
      {
        "feature": "Google Ads server-side",
        "pixelTracker": "No",
        "competitor": "CAPI: No | sGTM: Yes | Native: No | Elevar: Yes"
      },
      {
        "feature": "Snapchat CAPI",
        "pixelTracker": "No",
        "competitor": "CAPI: No | sGTM: Manual | Native: No | Elevar: Possible"
      },
      {
        "feature": "No-code setup",
        "pixelTracker": "Yes",
        "competitor": "CAPI: Partial | sGTM: No | Native: Yes | Elevar: No"
      },
      {
        "feature": "Browser + server deduplication",
        "pixelTracker": "Yes (event ID)",
        "competitor": "CAPI: Manual | sGTM: Manual | Native: Yes | Elevar: Yes"
      },
      {
        "feature": "Multi-platform from one dashboard",
        "pixelTracker": "Yes",
        "competitor": "No (each method is per-platform)"
      }
    ],
    "pricingBreakdown": [
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
      },
      {
        "plan": "Pixel Tracker Free",
        "pixelTracker": "$0/mo (1 pixel)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Starter",
        "pixelTracker": "$7/mo (3 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Growth",
        "pixelTracker": "$15/mo (10 pixels)",
        "competitor": "N/A"
      },
      {
        "plan": "Pixel Tracker Pro",
        "pixelTracker": "$29/mo (unlimited)",
        "competitor": "N/A"
      }
    ],
    "whoShouldChoose": {
      "choosePT": [
        "You want server-side CAPI and TikTok Events API without technical setup",
        "You advertise on Meta and TikTok and want both covered simply",
        "You want browser + server deduplication handled automatically",
        "Budget under $50/mo and no developer on staff"
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
        "a": "For most solo merchants: Pixel Tracker covers Meta CAPI and TikTok Events API with no code. For Google Ads server-side, use Server-side GTM. For full data infrastructure, use Elevar. For Meta-only, the native Facebook & Instagram channel works."
      },
      {
        "q": "Can I use Pixel Tracker's server-side alongside sGTM?",
        "a": "Yes, but you'd be managing server-side tracking in two places. If sGTM already handles your server-side needs, adding Pixel Tracker's CAPI is redundant. If you want simpler Meta/TikTok server-side without sGTM complexity, Pixel Tracker covers those two platforms."
      },
      {
        "q": "Does Pixel Tracker support Google Ads server-side?",
        "a": "Not currently. Pixel Tracker's server-side support covers Facebook CAPI and TikTok Events API. For Google Ads server-side tracking, Server-side GTM is the standard approach."
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
        "label": "Tracking cost calculator",
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
