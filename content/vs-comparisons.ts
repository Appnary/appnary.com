import {
  VS_COMPARISON_SLUGS,
  type VsComparisonPage,
  type VsComparisonSlug,
} from "@/lib/vs-comparisons";

const PT_RELATED_LINKS = [
  { label: "See Pixel Tracker", href: "/pixel-tracker" },
  { label: "Tracking cost and coverage calculator", href: "/tools/pixel-tracking-calculator" },
  { label: "Free pixel health check", href: "/tools/pixel-health-check" },
  { label: "Join the waitlist", href: "/#waitlist" },
];

export const vsComparisonPages: VsComparisonPage[] = [
  {
    slug: "elevar-alternative",
    competitor: "Elevar",
    competitorPrice: "$225 to $1,250/mo",
    competitorCategory: "Server-side data layer and event pipeline for Shopify",
    title: "Pixel Tracker vs Elevar: Which Shopify Tracking Solution Fits Your Store?",
    description:
      "Elevar is a full server-side data layer built for agencies and technical teams. Pixel Tracker is a simpler, cheaper way to get pixels installed correctly. Here is how they actually differ.",
    h1: "Pixel Tracker vs Elevar: Which Shopify Tracking Solution Fits Your Store?",
    intro: [
      "Elevar and Pixel Tracker both show up when Shopify merchants search for better tracking, but they solve different problems. Elevar is a server-side data layer and event pipeline built for agencies and technical teams managing complex data infrastructure across a warehouse, multiple ad platforms, and custom event schemas. Pixel Tracker is a pixel installer: it gets your ad platform pixels firing correctly across your store with one dashboard, no code required.",
      "If your team has a developer on retainer and needs custom event mapping, warehouse sync, and full control over your data layer, Elevar's pricing and complexity make sense. If you just need Meta, TikTok, Google Ads, and the rest firing reliably without hiring anyone, that is a very different budget and a very different tool.",
      "This page compares both directly so you can tell which one actually matches what you are trying to fix.",
    ],
    quickComparison: [
      { feature: "Monthly price (lowest paid tier)", pixelTracker: "$7/mo", competitor: "$225/mo" },
      { feature: "Free plan available", pixelTracker: "Yes (1 pixel)", competitor: "No" },
      { feature: "Platforms supported", pixelTracker: "7, from one dashboard", competitor: "Any platform via custom data layer" },
      { feature: "Server-side tracking", pixelTracker: "Meta and TikTok", competitor: "Full server-side event pipeline" },
      { feature: "Theme code required", pixelTracker: "No", competitor: "Yes, developer implementation" },
      { feature: "Dashboard complexity", pixelTracker: "Low, single dashboard", competitor: "High, built for technical teams" },
    ],
    featureMatrix: [
      { feature: "Install method", pixelTracker: "App-based, no code", competitor: "Developer-implemented data layer", notes: "Elevar setup typically involves an agency or in-house developer" },
      { feature: "Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, X in one place", pixelTracker: "✓", competitor: "varies", notes: "Elevar can feed any destination, but each one is configured separately" },
      { feature: "Server-side event pipeline", pixelTracker: "Meta CAPI and TikTok Events API", competitor: "✓", notes: "Elevar's core product is server-side infrastructure" },
      { feature: "Data warehouse sync", pixelTracker: "✗", competitor: "✓" },
      { feature: "Custom event schema design", pixelTracker: "✗", competitor: "✓" },
      { feature: "Built for solo merchants", pixelTracker: "✓", competitor: "✗", notes: "Elevar's pricing and setup assume an agency or dedicated team" },
      { feature: "Free plan", pixelTracker: "✓", competitor: "✗" },
      { feature: "Setup time", pixelTracker: "Minutes", competitor: "Days to weeks, with a developer" },
      { feature: "Ongoing maintenance", pixelTracker: "Managed by Pixel Tracker", competitor: "Usually requires ongoing agency support" },
    ],
    pricingBreakdown: [
      { plan: "Free / entry", pixelTracker: "$0, 1 pixel", competitor: "No free tier" },
      { plan: "Starter", pixelTracker: "$7/mo, 3 pixels", competitor: "$225/mo" },
      { plan: "Mid tier", pixelTracker: "$15/mo, 10 pixels", competitor: "$650/mo" },
      { plan: "Top tier", pixelTracker: "$29/mo, unlimited pixels", competitor: "$1,250/mo" },
    ],
    whoShouldChoose: {
      choosePT: [
        "You need Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, or X pixels firing correctly and don't have a developer on staff to build a custom data layer.",
        "Your budget for tracking tools is closer to $10-30/mo than $200-1,250/mo.",
        "You want one dashboard to check pixel status across platforms instead of managing separate implementations.",
      ],
      chooseCompetitor: [
        "You run a large store or manage tracking for multiple brands and need a custom data layer feeding a warehouse.",
        "You already work with an agency or in-house developer who can own the implementation and maintenance.",
        "Your reporting needs go beyond ad platform pixels into full event schema design and cross-system data sync.",
      ],
    },
    faqs: [
      {
        q: "Is Elevar overkill for a small Shopify store?",
        a: "For most solo merchants and small teams, yes. Elevar is priced and built for agencies managing complex, multi-brand data infrastructure. If your actual problem is 'is my Meta pixel firing correctly,' a dedicated pixel installer like [Pixel Tracker](/pixel-tracker) solves that at a fraction of the cost and setup time.",
      },
      {
        q: "Can Pixel Tracker replace Elevar's data layer?",
        a: "No. Pixel Tracker installs and manages ad platform pixels across 7 platforms from one dashboard. It does not build a custom data layer, sync to a warehouse, or design custom event schemas. If you need that level of infrastructure, Elevar is built for it.",
      },
      {
        q: "Does Elevar support server-side tracking better than Pixel Tracker?",
        a: "Elevar's entire product is a server-side event pipeline, so it covers more ground than any platform-specific integration. Pixel Tracker currently supports server-side tracking for Meta, via Conversions API, and TikTok, via Events API, which covers the two platforms where undercounting tends to cost merchants the most.",
      },
      {
        q: "What does Elevar cost compared to a typical Shopify tracking app?",
        a: "Elevar's published pricing runs from roughly $225/mo to $1,250/mo depending on plan and scale. That is a different budget category than most Shopify pixel apps, which typically run free to $30-50/mo, including Pixel Tracker.",
      },
      {
        q: "Is Pixel Tracker available now?",
        a: "Pixel Tracker is in development and not yet live on the Shopify App Store. You can [join the waitlist](/#waitlist) for early access, or check the [pixel health check tool](/tools/pixel-health-check) in the meantime to see whether your current pixels are firing correctly.",
      },
    ],
    relatedLinks: PT_RELATED_LINKS,
  },

  {
    slug: "facebook-instagram-alternative",
    competitor: "Facebook & Instagram (Shopify native channel)",
    competitorPrice: "Free",
    competitorCategory: "Meta-only pixel and shop management channel",
    title: "Pixel Tracker vs Facebook & Instagram Channel: Do You Need Both?",
    description:
      "Shopify's native Facebook & Instagram channel handles your Meta pixel for free, but only Meta. Here is what it covers, what it doesn't, and where Pixel Tracker fits in.",
    h1: "Pixel Tracker vs Facebook & Instagram Channel: Do You Need Both?",
    intro: [
      "If you sell on Shopify and run Meta ads, you've probably already installed the Facebook & Instagram sales channel. It's free, it's built by Shopify, and it handles your Meta pixel along with product catalog sync and shop features. For a store that only advertises on Meta, that channel alone can be enough.",
      "The gap shows up once you add a second platform. TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, X: none of those are covered by the Facebook & Instagram channel, so you end up installing a separate app or writing custom code for each one, with no shared view of what's actually firing.",
      "This comparison isn't about which one is better. It's about what each one actually does, since they solve different problems and many stores end up using both.",
    ],
    quickComparison: [
      { feature: "Monthly price (lowest paid tier)", pixelTracker: "$7/mo", competitor: "Free" },
      { feature: "Free plan available", pixelTracker: "Yes (1 pixel)", competitor: "Yes, only option" },
      { feature: "Platforms supported", pixelTracker: "7, from one dashboard", competitor: "1 (Meta only)" },
      { feature: "Server-side tracking", pixelTracker: "Meta and TikTok", competitor: "Yes, for Meta only" },
      { feature: "Theme code required", pixelTracker: "No", competitor: "No" },
      { feature: "Dashboard complexity", pixelTracker: "Low, single dashboard for all platforms", competitor: "Low, but Meta-only" },
    ],
    featureMatrix: [
      { feature: "Meta pixel installation", pixelTracker: "✓", competitor: "✓" },
      { feature: "TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, X pixels", pixelTracker: "✓", competitor: "✗", notes: "The native channel is Meta-only by design" },
      { feature: "Meta Conversions API (server-side)", pixelTracker: "✓", competitor: "✓" },
      { feature: "Product catalog sync to Meta shop", pixelTracker: "✗", competitor: "✓", notes: "Not Pixel Tracker's job, this is a Meta shop feature" },
      { feature: "Single dashboard across ad platforms", pixelTracker: "✓", competitor: "✗" },
      { feature: "Cost", pixelTracker: "Free to $29/mo", competitor: "Free" },
      { feature: "Setup time", pixelTracker: "Minutes", competitor: "Minutes" },
      { feature: "Built by", pixelTracker: "Independent app", competitor: "Shopify" },
    ],
    pricingBreakdown: [
      { plan: "Free / entry", pixelTracker: "$0, 1 pixel", competitor: "Free, unlimited use" },
      { plan: "Starter", pixelTracker: "$7/mo, 3 pixels", competitor: "N/A" },
      { plan: "Growth", pixelTracker: "$15/mo, 10 pixels", competitor: "N/A" },
      { plan: "Pro", pixelTracker: "$29/mo, unlimited pixels", competitor: "N/A" },
    ],
    whoShouldChoose: {
      choosePT: [
        "You advertise on more than just Meta, and want TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, or X pixels managed from the same place.",
        "You want a single dashboard showing pixel status across every platform you run ads on, instead of checking each app separately.",
        "You still keep the Facebook & Instagram channel installed for its shop and catalog features, since Pixel Tracker doesn't replace those.",
      ],
      chooseCompetitor: [
        "Meta is the only platform you advertise on, and you also want the shop and product catalog features the channel provides.",
        "You want a zero-cost setup with no third-party app involved.",
        "You don't need a unified view across platforms because you're only tracking one.",
      ],
    },
    faqs: [
      {
        q: "Should I remove the Facebook & Instagram channel if I install Pixel Tracker?",
        a: "No. The native channel handles product catalog sync and Meta shop features that Pixel Tracker doesn't touch. Most stores that advertise on Meta keep the channel installed for those features and add [Pixel Tracker](/pixel-tracker) to also cover other ad platforms from one dashboard.",
      },
      {
        q: "Will running both cause duplicate Meta pixel events?",
        a: "This is worth checking directly, since two tools sending the same event type can cause double-counting in Meta's reporting. Run the [free pixel health check](/tools/pixel-health-check) to see exactly what's firing and confirm there's no overlap before you rely on the numbers.",
      },
      {
        q: "Does the Facebook & Instagram channel support server-side tracking?",
        a: "Yes, it supports Meta's Conversions API for server-side event delivery. That covers Meta specifically. If you also advertise on TikTok, Pixel Tracker adds server-side support there too, via TikTok's Events API.",
      },
      {
        q: "What if I only advertise on Meta right now, but plan to add TikTok or Google Ads later?",
        a: "The native channel will keep working for Meta either way. When you add a second platform, that's usually the point where a multi-platform dashboard starts saving real time, since you stop checking pixel status in five different places.",
      },
      {
        q: "Is Pixel Tracker a replacement for Shopify's native Meta integration?",
        a: "No, and it isn't trying to be. Pixel Tracker focuses on getting pixels installed and firing correctly across multiple ad platforms. For Meta-specific shop features like catalog sync, the native channel remains the right tool.",
      },
    ],
    relatedLinks: PT_RELATED_LINKS,
  },

  {
    slug: "google-tag-manager-alternative",
    competitor: "Google Tag Manager (DIY)",
    competitorPrice: "Free",
    competitorCategory: "Tag management infrastructure, not a pixel app",
    title: "Pixel Tracker vs Google Tag Manager: DIY Tags vs Managed Pixel Installation",
    description:
      "Google Tag Manager is free and infinitely flexible, but it requires ongoing technical work. Pixel Tracker trades some of that flexibility for a five-minute, no-code setup.",
    h1: "Pixel Tracker vs Google Tag Manager: DIY Tags vs Managed Pixel Installation",
    intro: [
      "Google Tag Manager is the default answer a lot of developers give when someone asks how to install ad pixels on Shopify. It's free, extremely flexible, and can theoretically handle any tag you throw at it, including server-side variants through server-side GTM.",
      "The tradeoff is that GTM is infrastructure, not a finished solution. Someone has to build the container, configure triggers and variables for each platform, test that events fire at the right moment, and maintain all of it as Shopify's checkout or your theme changes. For a merchant without a developer, that's a real ongoing cost even though the tool itself is free.",
      "Pixel Tracker takes the opposite approach: less flexibility, but pixels are installed and maintained for you across 7 platforms without touching a GTM container.",
    ],
    quickComparison: [
      { feature: "Monthly price (lowest paid tier)", pixelTracker: "$7/mo", competitor: "Free" },
      { feature: "Free plan available", pixelTracker: "Yes (1 pixel)", competitor: "Yes, fully free" },
      { feature: "Platforms supported", pixelTracker: "7, from one dashboard", competitor: "Unlimited, manually configured" },
      { feature: "Server-side tracking", pixelTracker: "Meta and TikTok, managed", competitor: "Possible via server-side GTM, self-built" },
      { feature: "Theme code required", pixelTracker: "No", competitor: "Yes, container and tag setup" },
      { feature: "Dashboard complexity", pixelTracker: "Low, single dashboard", competitor: "High, requires GTM knowledge" },
    ],
    featureMatrix: [
      { feature: "No-code installation", pixelTracker: "✓", competitor: "✗", notes: "GTM requires configuring triggers, variables, and tags manually" },
      { feature: "Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, X support", pixelTracker: "✓", competitor: "varies", notes: "GTM can technically fire any tag, but each one is built by hand" },
      { feature: "Server-side tracking", pixelTracker: "Meta and TikTok, built in", competitor: "Possible via server-side GTM", notes: "Requires a separate server container and hosting" },
      { feature: "Ongoing maintenance as Shopify changes", pixelTracker: "Handled for you", competitor: "Your responsibility" },
      { feature: "Deep Google Ads integration", pixelTracker: "Standard pixel support", competitor: "✓", notes: "GTM is built by Google and integrates tightly with Google Ads" },
      { feature: "Cost", pixelTracker: "Free to $29/mo", competitor: "Free (developer time not included)" },
      { feature: "Setup time", pixelTracker: "Minutes", competitor: "Hours to days, depending on skill" },
      { feature: "Requires technical skill", pixelTracker: "No", competitor: "Yes" },
    ],
    pricingBreakdown: [
      { plan: "Free / entry", pixelTracker: "$0, 1 pixel", competitor: "Free, unlimited tags" },
      { plan: "Starter", pixelTracker: "$7/mo, 3 pixels", competitor: "N/A" },
      { plan: "Growth", pixelTracker: "$15/mo, 10 pixels", competitor: "N/A" },
      { plan: "Pro", pixelTracker: "$29/mo, unlimited pixels", competitor: "N/A" },
    ],
    whoShouldChoose: {
      choosePT: [
        "You want pixels installed correctly without learning GTM's trigger and variable system.",
        "You don't have a developer available for ongoing maintenance when Shopify's checkout or your theme changes.",
        "You'd rather pay a small monthly fee than spend hours building and testing tags yourself.",
      ],
      chooseCompetitor: [
        "You or someone on your team already knows GTM and wants full control over exactly what fires and when.",
        "You need custom tags or triggers beyond standard ad platform pixel events.",
        "Budget matters more than time, and you're comfortable maintaining the setup yourself long term.",
      ],
    },
    faqs: [
      {
        q: "Is Google Tag Manager free to use?",
        a: "Yes, GTM itself has no cost. The real cost is the time it takes to build, test, and maintain the container, which usually requires either a developer or a fair amount of self-taught GTM knowledge.",
      },
      {
        q: "Can I use Google Tag Manager and Pixel Tracker together?",
        a: "It's not recommended for the same platform's pixel, since running both can cause duplicate events. If you already have a working GTM setup for some platforms, [the free pixel health check](/tools/pixel-health-check) can confirm what's actually firing before you add anything else.",
      },
      {
        q: "Does server-side GTM solve the same problem as Pixel Tracker's server-side tracking?",
        a: "Conceptually yes, both aim to recover events lost to ad blockers and browser restrictions. The difference is that server-side GTM requires you to set up and pay for a server container yourself, while Pixel Tracker's server-side support for Meta and TikTok is managed as part of the app.",
      },
      {
        q: "Why would I pay for pixel installation when GTM is free?",
        a: "The tool is free, but your time isn't. If you're not comfortable configuring GTM triggers and variables for multiple ad platforms, or don't want to maintain that setup as your store changes, a managed installer trades a small monthly fee for that time and risk.",
      },
      {
        q: "Is Pixel Tracker a good fit for someone who already knows GTM well?",
        a: "If you're comfortable in GTM and want granular, custom control, you may prefer to keep using it. Pixel Tracker is built for merchants who want standard ad platform pixels working correctly without managing that infrastructure themselves.",
      },
    ],
    relatedLinks: PT_RELATED_LINKS,
  },

  {
    slug: "littledata-alternative",
    competitor: "Littledata",
    competitorPrice: "$199+/mo",
    competitorCategory: "Server-side analytics layer for Shopify",
    title: "Pixel Tracker vs Littledata: Analytics Pipeline vs Pixel Installation",
    description:
      "Littledata fixes your GA4 and analytics data pipeline. Pixel Tracker installs and manages your ad platform pixels. Here is how the two actually compare.",
    h1: "Pixel Tracker vs Littledata: Analytics Pipeline vs Pixel Installation",
    intro: [
      "Littledata built its reputation on fixing Shopify's notoriously messy GA4 data, adding server-side tracking, subscription analytics, and cleaner attribution for stores that rely heavily on their analytics stack. It's a serious tool, and its pricing, starting around $199/mo, reflects the depth of what it does.",
      "Pixel Tracker solves a narrower, more specific problem: getting your ad platform pixels, Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, and X, installed and firing correctly, with server-side support for the two platforms where undercounting hurts the most.",
      "If your actual pain point is 'my ad pixels might not be tracking conversions accurately,' that's a different fix than 'my GA4 data doesn't match my Shopify orders.' This page breaks down which tool addresses which problem.",
    ],
    quickComparison: [
      { feature: "Monthly price (lowest paid tier)", pixelTracker: "$7/mo", competitor: "$199/mo" },
      { feature: "Free plan available", pixelTracker: "Yes (1 pixel)", competitor: "No (trial only)" },
      { feature: "Platforms supported", pixelTracker: "7 ad platforms, from one dashboard", competitor: "GA4 plus connected ad platforms" },
      { feature: "Server-side tracking", pixelTracker: "Meta and TikTok", competitor: "Yes, GA4 server-side plus ad platforms" },
      { feature: "Theme code required", pixelTracker: "No", competitor: "No, app-based" },
      { feature: "Dashboard complexity", pixelTracker: "Low, single dashboard", competitor: "Medium to high, analytics-focused" },
    ],
    featureMatrix: [
      { feature: "Primary focus", pixelTracker: "Ad platform pixel installation", competitor: "Analytics data pipeline (GA4, subscriptions)" },
      { feature: "Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, X pixels", pixelTracker: "✓", competitor: "varies", notes: "Littledata focuses on GA4 accuracy, not managing every ad pixel" },
      { feature: "GA4 server-side tracking", pixelTracker: "✗", competitor: "✓", notes: "Not something Pixel Tracker does" },
      { feature: "Subscription analytics", pixelTracker: "✗", competitor: "✓" },
      { feature: "Ad platform server-side events", pixelTracker: "Meta and TikTok", competitor: "Depends on integration" },
      { feature: "Built for solo merchants", pixelTracker: "✓", competitor: "✗", notes: "Littledata's pricing targets larger, analytics-heavy stores" },
      { feature: "Free plan", pixelTracker: "✓", competitor: "✗" },
      { feature: "Setup time", pixelTracker: "Minutes", competitor: "Longer, involves data pipeline configuration" },
    ],
    pricingBreakdown: [
      { plan: "Free / entry", pixelTracker: "$0, 1 pixel", competitor: "No free tier" },
      { plan: "Starter", pixelTracker: "$7/mo, 3 pixels", competitor: "$199/mo" },
      { plan: "Growth", pixelTracker: "$15/mo, 10 pixels", competitor: "Higher tiers scale with traffic/orders" },
      { plan: "Pro", pixelTracker: "$29/mo, unlimited pixels", competitor: "Enterprise, custom pricing" },
    ],
    whoShouldChoose: {
      choosePT: [
        "Your core problem is ad platform pixels, not GA4 data quality.",
        "You want a lightweight, low-cost way to manage pixels across multiple ad platforms.",
        "You don't run subscriptions or need analytics-grade GA4 server-side tracking.",
      ],
      chooseCompetitor: [
        "Your GA4 data doesn't match your Shopify orders and you need that fixed at the source.",
        "You run a subscription business and need subscription-specific analytics.",
        "Your budget supports a $199+/mo analytics tool and the depth it provides matters to your reporting.",
      ],
    },
    faqs: [
      {
        q: "Does Littledata also install ad platform pixels like Meta or TikTok?",
        a: "Littledata's core strength is GA4 and analytics data accuracy, including server-side GA4 tracking. Ad platform pixel management is not its primary focus the way it is for a dedicated tool like [Pixel Tracker](/pixel-tracker).",
      },
      {
        q: "Can I use Pixel Tracker and Littledata at the same time?",
        a: "Yes, since they solve different problems. Littledata can handle your GA4 and analytics pipeline while Pixel Tracker manages your ad platform pixels. Just confirm neither is duplicating the same events on any shared platform using the [pixel health check tool](/tools/pixel-health-check).",
      },
      {
        q: "Is $199/mo worth it for a small Shopify store?",
        a: "It depends on what's broken. If your GA4 revenue numbers are significantly off from your actual Shopify sales, that gap alone can justify the cost for stores making real decisions off that data. If your issue is specifically ad pixels not firing, that's a narrower and cheaper problem to solve.",
      },
      {
        q: "Does Pixel Tracker fix GA4 discrepancies?",
        a: "No. Pixel Tracker is focused on ad platform pixels, not Google Analytics data accuracy. If GA4 discrepancies are your main issue, that's outside what Pixel Tracker is built to solve.",
      },
      {
        q: "How much does undercounted ad conversions actually cost a store?",
        a: "It varies by ad spend and platform, but the [tracking cost and coverage calculator](/tools/pixel-tracking-calculator) gives a rough estimate based on your monthly spend and current setup, which can help decide whether the fix is worth prioritizing.",
      },
    ],
    relatedLinks: PT_RELATED_LINKS,
  },

  {
    slug: "trackbee-alternative",
    competitor: "TrackBee",
    competitorPrice: "~$19/mo",
    competitorCategory: "Pixel installer for Shopify",
    title: "Pixel Tracker vs TrackBee: Multi-Platform Pixel Installation Compared",
    description:
      "TrackBee and Pixel Tracker both install ad platform pixels on Shopify without code. Here is how platform coverage, server-side tracking, and pricing compare.",
    h1: "Pixel Tracker vs TrackBee: Multi-Platform Pixel Installation Compared",
    intro: [
      "TrackBee and Pixel Tracker sit in the same category: both are no-code, app-based pixel installers built for Shopify merchants who don't want to touch theme code. If you're evaluating one, you're likely evaluating the other.",
      "The main difference is scope. Pixel Tracker manages 7 ad platforms, Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, and X, from a single dashboard, with server-side support for Meta and TikTok. TrackBee's focus tends to run narrower, which can be an advantage if you're a Meta-only or Meta-plus-TikTok store that doesn't need a broader dashboard.",
      "This page compares platform coverage, server-side support, and pricing so you can see which fits your actual ad mix.",
    ],
    quickComparison: [
      { feature: "Monthly price (lowest paid tier)", pixelTracker: "$7/mo", competitor: "~$19/mo" },
      { feature: "Free plan available", pixelTracker: "Yes (1 pixel)", competitor: "Trial only, no confirmed free tier" },
      { feature: "Platforms supported", pixelTracker: "7, from one dashboard", competitor: "Fewer, primarily Meta and TikTok focused" },
      { feature: "Server-side tracking", pixelTracker: "Meta and TikTok", competitor: "Limited, varies by plan" },
      { feature: "Theme code required", pixelTracker: "No", competitor: "No" },
      { feature: "Dashboard complexity", pixelTracker: "Low, single dashboard for 7 platforms", competitor: "Low, narrower platform scope" },
    ],
    featureMatrix: [
      { feature: "No-code installation", pixelTracker: "✓", competitor: "✓" },
      { feature: "Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, X in one dashboard", pixelTracker: "✓", competitor: "varies", notes: "TrackBee's coverage tends to be narrower, worth confirming for your specific platform mix" },
      { feature: "Server-side tracking", pixelTracker: "Meta CAPI and TikTok Events API", competitor: "varies", notes: "Confirm current server-side support directly with TrackBee for your plan" },
      { feature: "Free plan", pixelTracker: "✓, 1 pixel", competitor: "Not confirmed" },
      { feature: "Entry price", pixelTracker: "$7/mo", competitor: "~$19/mo" },
      { feature: "Best for Meta-only stores", pixelTracker: "Works well, but built for multi-platform", competitor: "Potentially simpler if that's your only need" },
      { feature: "Setup time", pixelTracker: "Minutes", competitor: "Minutes" },
    ],
    pricingBreakdown: [
      { plan: "Free / entry", pixelTracker: "$0, 1 pixel", competitor: "No confirmed free plan" },
      { plan: "Starter", pixelTracker: "$7/mo, 3 pixels", competitor: "~$19/mo, entry tier" },
      { plan: "Growth", pixelTracker: "$15/mo, 10 pixels", competitor: "Higher tiers vary by plan" },
      { plan: "Pro", pixelTracker: "$29/mo, unlimited pixels", competitor: "Check current pricing for top tier" },
    ],
    whoShouldChoose: {
      choosePT: [
        "You run ads on more than Meta and TikTok, and want Google Ads, Pinterest, Snapchat, LinkedIn, or X pixels in the same dashboard.",
        "You want the lowest possible entry price for a single pixel, starting free.",
        "You want server-side tracking for both Meta and TikTok included as your store grows.",
      ],
      chooseCompetitor: [
        "Your ad spend is concentrated on just one or two platforms and you don't need a broader dashboard.",
        "You've already evaluated TrackBee's specific feature set against your needs and it's a closer match.",
        "Price at the entry tier isn't the deciding factor for your store.",
      ],
    },
    faqs: [
      {
        q: "How is Pixel Tracker different from TrackBee if they're both no-code installers?",
        a: "The biggest difference is platform breadth. [Pixel Tracker](/pixel-tracker) covers 7 platforms, Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, and X, from one dashboard, with server-side support for Meta and TikTok. Confirm TrackBee's current platform list directly, since coverage can change over time.",
      },
      {
        q: "Which one is cheaper?",
        a: "Pixel Tracker's entry paid tier is $7/mo for 3 pixels, with a free plan for 1 pixel. TrackBee's entry tier runs around $19/mo. Exact pricing can change, so check both directly before deciding based on price alone.",
      },
      {
        q: "Does TrackBee support server-side tracking?",
        a: "This varies by plan and has likely changed over time, so it's worth confirming directly with TrackBee. Pixel Tracker's server-side support currently covers Meta, via Conversions API, and TikTok, via Events API.",
      },
      {
        q: "Can I switch from TrackBee to Pixel Tracker without losing historical data?",
        a: "Pixel installation tools generally don't store your historical ad platform data themselves, that lives in each ad platform's own dashboard (Meta Ads Manager, TikTok Ads Manager, and so on). Switching installers shouldn't affect that historical data.",
      },
      {
        q: "Is Pixel Tracker available to install right now?",
        a: "Pixel Tracker is in development and not yet live on the Shopify App Store. [Join the waitlist](/#waitlist) for early access, or use the [free pixel health check](/tools/pixel-health-check) to audit your current setup in the meantime.",
      },
    ],
    relatedLinks: PT_RELATED_LINKS,
  },

  {
    slug: "hyros-alternative",
    competitor: "Hyros",
    competitorPrice: "~$230+/mo",
    competitorCategory: "Ad attribution and tracking software for scaling brands",
    title: "Pixel Tracker vs Hyros: Attribution Software vs Pixel Installation",
    description:
      "Hyros is attribution and ad tracking software built for media buyers scaling ad accounts. Pixel Tracker installs your ad platform pixels. Here is how the two differ.",
    h1: "Pixel Tracker vs Hyros: Attribution Software vs Pixel Installation",
    intro: [
      "Hyros is built for a specific kind of merchant: one spending serious money on ads and needing multi-touch attribution, call tracking, and ad-level ROI data that goes beyond what a standard pixel reports. It's popular with media buyers and larger direct-response brands, and its pricing, starting around $230+/mo, reflects that audience.",
      "Pixel Tracker addresses an earlier, more foundational problem: are your ad platform pixels actually installed and firing correctly in the first place. Attribution software like Hyros depends on accurate underlying pixel data to work well, so the two aren't really substitutes for each other.",
      "This comparison lays out what each tool actually does so you can tell whether you need pixel installation, attribution modeling, or both.",
    ],
    quickComparison: [
      { feature: "Monthly price (lowest paid tier)", pixelTracker: "$7/mo", competitor: "~$230+/mo" },
      { feature: "Free plan available", pixelTracker: "Yes (1 pixel)", competitor: "No" },
      { feature: "Platforms supported", pixelTracker: "7 ad platform pixels", competitor: "Attribution across connected ad accounts" },
      { feature: "Server-side tracking", pixelTracker: "Meta and TikTok", competitor: "Yes, core to its tracking model" },
      { feature: "Theme code required", pixelTracker: "No", competitor: "Yes, tracking script and call tracking setup" },
      { feature: "Dashboard complexity", pixelTracker: "Low, single dashboard", competitor: "High, built for media buyers" },
    ],
    featureMatrix: [
      { feature: "Primary purpose", pixelTracker: "Install and manage ad platform pixels", competitor: "Multi-touch attribution and ad ROI reporting" },
      { feature: "Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, X pixel installation", pixelTracker: "✓", competitor: "✗", notes: "Hyros assumes pixels are already installed and layers attribution on top" },
      { feature: "Multi-touch attribution modeling", pixelTracker: "✗", competitor: "✓" },
      { feature: "Phone call tracking", pixelTracker: "✗", competitor: "✓" },
      { feature: "Server-side event delivery", pixelTracker: "Meta and TikTok", competitor: "✓, broader" },
      { feature: "Built for solo merchants", pixelTracker: "✓", competitor: "✗", notes: "Hyros targets larger ad-spend brands and media buying teams" },
      { feature: "Free plan", pixelTracker: "✓", competitor: "✗" },
      { feature: "Setup time", pixelTracker: "Minutes", competitor: "Longer, involves tracking script and call setup" },
    ],
    pricingBreakdown: [
      { plan: "Free / entry", pixelTracker: "$0, 1 pixel", competitor: "No free tier" },
      { plan: "Starter", pixelTracker: "$7/mo, 3 pixels", competitor: "~$230+/mo" },
      { plan: "Growth", pixelTracker: "$15/mo, 10 pixels", competitor: "Scales with ad spend and features" },
      { plan: "Pro", pixelTracker: "$29/mo, unlimited pixels", competitor: "Enterprise, custom pricing" },
    ],
    whoShouldChoose: {
      choosePT: [
        "You need your Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, or X pixels installed and firing correctly, which is the foundation attribution tools rely on.",
        "You're not yet spending at a scale where multi-touch attribution and call tracking software make sense.",
        "You want a low-cost, low-complexity setup rather than a full attribution platform.",
      ],
      chooseCompetitor: [
        "You're spending significant budget across multiple ad platforms and need attribution beyond last-click.",
        "Phone-based sales are a meaningful part of your conversion path.",
        "You already have solid pixel coverage and need better ROI reporting on top of it.",
      ],
    },
    faqs: [
      {
        q: "Do I need Hyros if I already use Pixel Tracker?",
        a: "They solve different layers of the same problem. [Pixel Tracker](/pixel-tracker) makes sure your pixels are installed and sending accurate events. Hyros builds attribution models on top of that data. Whether you need Hyros depends on your ad spend and whether last-click or platform-reported attribution is good enough for your decisions.",
      },
      {
        q: "Is Hyros worth it for a smaller Shopify store?",
        a: "Given its pricing starts around $230+/mo, it tends to make more sense once you're spending enough on ads that better attribution meaningfully changes your budget decisions. For most smaller stores, fixing basic pixel accuracy first is the higher-leverage move.",
      },
      {
        q: "Does Pixel Tracker offer multi-touch attribution?",
        a: "No. Pixel Tracker focuses on getting standard ad platform pixels installed and firing, including server-side support for Meta and TikTok. It does not build attribution models across touchpoints the way Hyros does.",
      },
      {
        q: "What's the actual cost of bad pixel data before I even think about attribution?",
        a: "It depends on your ad spend and platform mix. The [tracking cost and coverage calculator](/tools/pixel-tracking-calculator) gives a rough estimate of what undercounted conversions could be costing you, which is often worth checking before investing in attribution software.",
      },
      {
        q: "Can I check whether my current pixels are firing correctly before deciding on either tool?",
        a: "Yes, the [free pixel health check tool](/tools/pixel-health-check) audits your current setup and flags obvious gaps, which is a useful first step regardless of which tracking tool you end up choosing.",
      },
    ],
    relatedLinks: PT_RELATED_LINKS,
  },

  {
    slug: "northbeam-alternative",
    competitor: "Northbeam",
    competitorPrice: "~$100 to $200+/mo (custom pricing above entry tier)",
    competitorCategory: "Marketing attribution platform for scaling brands",
    title: "Pixel Tracker vs Northbeam: Attribution Platform vs Pixel Installation",
    description:
      "Northbeam is an attribution platform built for brands scaling paid ads. Pixel Tracker installs the underlying ad platform pixels. Here is how they fit together, not against each other.",
    h1: "Pixel Tracker vs Northbeam: Attribution Platform vs Pixel Installation",
    intro: [
      "Northbeam is a marketing attribution platform designed for brands running significant ad spend across multiple channels who need a clearer picture than last-click or platform-reported ROAS provides. Pricing typically starts around $100-200+/mo and scales with ad spend and data volume.",
      "Pixel Tracker sits earlier in the stack. It installs and manages the actual ad platform pixels, Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, and X, that feed data into tools like Northbeam in the first place. If the underlying pixel data is incomplete, an attribution platform built on top of it inherits that gap.",
      "This page compares the two directly so it's clear which problem each one is actually solving.",
    ],
    quickComparison: [
      { feature: "Monthly price (lowest paid tier)", pixelTracker: "$7/mo", competitor: "~$100+/mo" },
      { feature: "Free plan available", pixelTracker: "Yes (1 pixel)", competitor: "No" },
      { feature: "Platforms supported", pixelTracker: "7 ad platform pixels", competitor: "Attribution across connected ad platforms" },
      { feature: "Server-side tracking", pixelTracker: "Meta and TikTok", competitor: "Relies on data pipeline integrations" },
      { feature: "Theme code required", pixelTracker: "No", competitor: "Yes, requires data integration setup" },
      { feature: "Dashboard complexity", pixelTracker: "Low, single dashboard", competitor: "High, built for scaling brands" },
    ],
    featureMatrix: [
      { feature: "Primary purpose", pixelTracker: "Install and manage ad platform pixels", competitor: "Cross-channel attribution modeling" },
      { feature: "Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, X pixel installation", pixelTracker: "✓", competitor: "✗", notes: "Northbeam consumes pixel and platform data rather than installing it" },
      { feature: "Attribution modeling across channels", pixelTracker: "✗", competitor: "✓" },
      { feature: "Server-side event delivery", pixelTracker: "Meta and TikTok", competitor: "Depends on connected data sources" },
      { feature: "Built for solo merchants", pixelTracker: "✓", competitor: "✗", notes: "Northbeam is priced for brands with meaningful ad spend" },
      { feature: "Free plan", pixelTracker: "✓", competitor: "✗" },
      { feature: "Setup time", pixelTracker: "Minutes", competitor: "Longer, involves data source integration" },
      { feature: "Reporting depth beyond platform dashboards", pixelTracker: "✗", competitor: "✓" },
    ],
    pricingBreakdown: [
      { plan: "Free / entry", pixelTracker: "$0, 1 pixel", competitor: "No free tier" },
      { plan: "Starter", pixelTracker: "$7/mo, 3 pixels", competitor: "~$100+/mo" },
      { plan: "Growth", pixelTracker: "$15/mo, 10 pixels", competitor: "~$200+/mo, scales with ad spend" },
      { plan: "Pro", pixelTracker: "$29/mo, unlimited pixels", competitor: "Custom, enterprise pricing" },
    ],
    whoShouldChoose: {
      choosePT: [
        "You need accurate pixel installation across your ad platforms before attribution reporting is even worth building on top of.",
        "You're not yet spending enough across channels for a dedicated attribution platform to pay for itself.",
        "You want a simple, low-cost setup rather than a full reporting platform.",
      ],
      chooseCompetitor: [
        "You run paid ads across several channels and need a clearer view of what's actually driving revenue than platform-reported numbers give you.",
        "Your ad spend justifies a $100-200+/mo reporting tool.",
        "You already have solid pixel and platform data feeding in, and the gap is in how you're interpreting it.",
      ],
    },
    faqs: [
      {
        q: "Does Northbeam replace the need for pixel installation tools like Pixel Tracker?",
        a: "No. Northbeam builds attribution reporting on top of data from your ad platforms and pixels. [Pixel Tracker](/pixel-tracker) is what actually gets those pixels installed and firing correctly in the first place. They address different layers of the same tracking stack.",
      },
      {
        q: "Is Northbeam worth it if my pixel data is unreliable?",
        a: "Attribution modeling is only as good as the underlying data feeding it. If your pixels are misfiring or missing events, it's worth fixing that first, the [free pixel health check tool](/tools/pixel-health-check) is a fast way to check, before investing in a reporting platform built on top of that data.",
      },
      {
        q: "How much does Northbeam cost?",
        a: "Pricing typically starts around $100-200+/mo and scales with ad spend and connected data sources. Check current pricing directly, since attribution platforms often adjust tiers as they add features.",
      },
      {
        q: "Can a small Shopify store benefit from Northbeam?",
        a: "It depends on ad spend and channel complexity. Stores running significant budget across three or more paid channels tend to get the most value. For smaller or single-channel stores, the platform's own ad reporting combined with accurate pixels is often enough.",
      },
      {
        q: "Is Pixel Tracker live yet?",
        a: "Pixel Tracker is in development and not yet available on the Shopify App Store. [Join the waitlist](/#waitlist) for early access.",
      },
    ],
    relatedLinks: PT_RELATED_LINKS,
  },

  {
    slug: "lifetimely-alternative",
    competitor: "Lifetimely",
    competitorPrice: "$24 to $120+/mo",
    competitorCategory: "LTV and profit analytics app for Shopify",
    title: "Pixel Tracker vs Lifetimely: Profit Analytics vs Ad Pixel Installation",
    description:
      "Lifetimely tracks customer lifetime value and true profit. Pixel Tracker installs your ad platform pixels. Here is how the two apps actually complement each other.",
    h1: "Pixel Tracker vs Lifetimely: Profit Analytics vs Ad Pixel Installation",
    intro: [
      "Lifetimely is a Shopify app focused on customer lifetime value, cohort analysis, and true profit reporting, pulling in costs like COGS, shipping, and ad spend to show what you're actually making, not just what you're selling. Pricing runs from around $24/mo up to $120+/mo depending on order volume and features.",
      "Pixel Tracker is a different layer entirely: it installs and manages your ad platform pixels, Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, and X, so the ad spend and conversion data feeding into profit tools like Lifetimely is more accurate to begin with.",
      "These two apps aren't really competitors so much as adjacent tools that solve different parts of the same reporting picture. This page breaks down what each one actually does.",
    ],
    quickComparison: [
      { feature: "Monthly price (lowest paid tier)", pixelTracker: "$7/mo", competitor: "$24/mo" },
      { feature: "Free plan available", pixelTracker: "Yes (1 pixel)", competitor: "Trial only" },
      { feature: "Platforms supported", pixelTracker: "7 ad platform pixels", competitor: "N/A, analytics app not ad platform pixels" },
      { feature: "Server-side tracking", pixelTracker: "Meta and TikTok", competitor: "No, not an ad pixel tool" },
      { feature: "Theme code required", pixelTracker: "No", competitor: "No, app-based" },
      { feature: "Dashboard complexity", pixelTracker: "Low, single dashboard", competitor: "Medium, profit and LTV dashboards" },
    ],
    featureMatrix: [
      { feature: "Primary purpose", pixelTracker: "Install and manage ad platform pixels", competitor: "Customer LTV and true profit analytics" },
      { feature: "Meta, TikTok, Google Ads, Pinterest, Snapchat, LinkedIn, X pixel installation", pixelTracker: "✓", competitor: "✗", notes: "Not what Lifetimely is built to do" },
      { feature: "Cohort and LTV analysis", pixelTracker: "✗", competitor: "✓" },
      { feature: "True profit reporting (COGS, shipping, ad spend)", pixelTracker: "✗", competitor: "✓" },
      { feature: "Server-side ad event delivery", pixelTracker: "Meta and TikTok", competitor: "✗" },
      { feature: "Free plan", pixelTracker: "✓, 1 pixel", competitor: "Trial only, no ongoing free tier" },
      { feature: "Setup time", pixelTracker: "Minutes", competitor: "Minutes to hours, depending on cost data setup" },
      { feature: "Works well alongside the other tool", pixelTracker: "✓", competitor: "✓", notes: "Most stores using one benefit from the other too" },
    ],
    pricingBreakdown: [
      { plan: "Free / entry", pixelTracker: "$0, 1 pixel", competitor: "Trial only" },
      { plan: "Starter", pixelTracker: "$7/mo, 3 pixels", competitor: "$24/mo, entry tier" },
      { plan: "Growth", pixelTracker: "$15/mo, 10 pixels", competitor: "Mid tier, scales with orders" },
      { plan: "Pro", pixelTracker: "$29/mo, unlimited pixels", competitor: "$120+/mo, higher order volume" },
    ],
    whoShouldChoose: {
      choosePT: [
        "Your ad platform pixels aren't confirmed to be firing correctly, which affects the accuracy of any downstream profit or LTV reporting.",
        "You advertise on multiple platforms and want them managed from one dashboard.",
        "You want a lightweight, low-cost fix specifically for pixel installation.",
      ],
      chooseCompetitor: [
        "You want to understand true profit per order and customer lifetime value, not just top-line revenue.",
        "You run a repeat-purchase or subscription-adjacent business where LTV matters more than single-order ROAS.",
        "You already have solid ad tracking and need better downstream profit reporting.",
      ],
    },
    faqs: [
      {
        q: "Do Pixel Tracker and Lifetimely do the same thing?",
        a: "No. [Pixel Tracker](/pixel-tracker) installs and manages ad platform pixels so conversion events fire correctly. Lifetimely analyzes profit and customer lifetime value using data that includes your ad spend and order history. They sit at different layers of the same reporting stack.",
      },
      {
        q: "Does inaccurate pixel data affect Lifetimely's profit numbers?",
        a: "It can, particularly around ad spend efficiency and attributed revenue if Lifetimely pulls in ad platform data. Confirming your pixels are firing correctly with a tool like the [pixel health check](/tools/pixel-health-check) is a reasonable first step before trusting downstream profit calculations.",
      },
      {
        q: "How much does Lifetimely cost?",
        a: "Pricing typically starts around $24/mo and scales up to $120+/mo based on order volume and feature tier. Check current pricing directly since it can change.",
      },
      {
        q: "Can I use both apps on the same store?",
        a: "Yes. They don't overlap in function, Pixel Tracker handles ad pixel installation and Lifetimely handles profit and LTV analytics, so running both is common rather than redundant.",
      },
      {
        q: "Is Pixel Tracker available on the Shopify App Store yet?",
        a: "Not yet, it's currently in development. [Join the waitlist](/#waitlist) for early access.",
      },
    ],
    relatedLinks: PT_RELATED_LINKS,
  },

  {
    slug: "diy-vs-app",
    competitor: "DIY Theme Code",
    competitorPrice: "Free (developer time required)",
    competitorCategory: "Manually added pixel code in theme.liquid",
    title: "DIY Theme Code vs a Managed Pixel App: What Actually Costs More?",
    description:
      "Pasting pixel code into theme.liquid looks free. Here is what it actually costs in setup time, maintenance, and risk compared to a managed pixel app.",
    h1: "DIY Theme Code vs a Managed Pixel App: What Actually Costs More?",
    intro: [
      "Every Shopify merchant hits this decision eventually: paste the ad platform's tracking code directly into theme.liquid yourself, or use an app that manages pixel installation for you. DIY looks free on the surface, since there's no monthly fee, but it isn't actually free. It costs setup time, ongoing maintenance every time your theme updates, and the risk of a broken or duplicated pixel going unnoticed for weeks.",
      "A managed app like Pixel Tracker charges a small monthly fee, starting free for a single pixel, in exchange for handling installation, updates, and multi-platform management from one dashboard.",
      "This page isn't arguing that DIY is wrong. For a developer comfortable in Liquid who only needs one pixel and rarely changes themes, it can work fine. For most merchants, the real costs of DIY are easy to underestimate.",
    ],
    quickComparison: [
      { feature: "Monthly price (lowest paid tier)", pixelTracker: "$7/mo", competitor: "Free (developer time not included)" },
      { feature: "Free plan available", pixelTracker: "Yes (1 pixel)", competitor: "Yes, but requires dev time to build" },
      { feature: "Platforms supported", pixelTracker: "7, from one dashboard", competitor: "As many as you manually code" },
      { feature: "Server-side tracking", pixelTracker: "Meta and TikTok, managed", competitor: "Only if you build and maintain it yourself" },
      { feature: "Theme code required", pixelTracker: "No", competitor: "Yes, required" },
      { feature: "Dashboard complexity", pixelTracker: "Low, single dashboard", competitor: "None, no central dashboard" },
    ],
    featureMatrix: [
      { feature: "Upfront cost", pixelTracker: "Free to start", competitor: "Free, but requires developer time or your own time" },
      { feature: "Breaks when theme updates", pixelTracker: "No, managed independently of theme", competitor: "Often, code can be lost or duplicated on theme changes" },
      { feature: "Multi-platform management", pixelTracker: "✓, one dashboard for 7 platforms", competitor: "✗, each platform coded and tracked separately" },
      { feature: "Server-side tracking setup", pixelTracker: "Built in for Meta and TikTok", competitor: "Requires separate CAPI/API implementation" },
      { feature: "Risk of duplicate or broken pixels going unnoticed", pixelTracker: "Lower, monitored centrally", competitor: "Higher, no built-in monitoring" },
      { feature: "Requires ongoing developer involvement", pixelTracker: "No", competitor: "Yes, for updates and fixes" },
      { feature: "Full custom control", pixelTracker: "Standard pixel events", competitor: "✓, full control over exact code" },
      { feature: "Setup time", pixelTracker: "Minutes", competitor: "Hours per platform, plus ongoing fixes" },
    ],
    pricingBreakdown: [
      { plan: "Free / entry", pixelTracker: "$0, 1 pixel", competitor: "$0 in fees, developer time varies" },
      { plan: "Starter", pixelTracker: "$7/mo, 3 pixels", competitor: "N/A" },
      { plan: "Growth", pixelTracker: "$15/mo, 10 pixels", competitor: "N/A" },
      { plan: "Pro", pixelTracker: "$29/mo, unlimited pixels", competitor: "N/A" },
    ],
    whoShouldChoose: {
      choosePT: [
        "You don't have a developer on hand to maintain theme code every time you update your store.",
        "You run ads on more than one platform and want them managed from a single dashboard.",
        "You'd rather pay a small fee than risk a silently broken pixel costing you attributed conversions.",
      ],
      chooseCompetitor: [
        "You or your developer are comfortable in Liquid and want full, granular control over the exact tracking code.",
        "You only need a single, simple pixel and rarely change themes.",
        "You have a specific custom event or tracking requirement an app-based tool doesn't support.",
      ],
    },
    faqs: [
      {
        q: "Is DIY theme code really free?",
        a: "The code itself costs nothing to paste in, but the time to write, test, and maintain it isn't free, especially across multiple ad platforms and every time your theme changes. That time cost is the real price of the DIY route.",
      },
      {
        q: "What happens to DIY pixel code when I change my Shopify theme?",
        a: "It often breaks or gets lost, since theme code isn't preserved automatically across theme switches. This is one of the most common ways merchants end up with a silently broken pixel for weeks without noticing.",
      },
      {
        q: "How do I know if my current DIY pixel setup is actually working?",
        a: "Run the [free pixel health check tool](/tools/pixel-health-check) to see what's actually firing right now. It's a fast way to catch a broken or duplicated pixel before it costs you more attributed conversions.",
      },
      {
        q: "Is a managed app worth it if I only run one pixel?",
        a: "For a single, simple pixel, [Pixel Tracker's free plan](/pixel-tracker) covers exactly that at no cost, which removes most of the argument for DIY unless you specifically want custom code control.",
      },
      {
        q: "What does undercounted or broken tracking actually cost in ad spend?",
        a: "It depends on your spend and platform mix. The [tracking cost and coverage calculator](/tools/pixel-tracking-calculator) estimates the impact based on your numbers, which can help decide whether fixing DIY tracking is worth prioritizing right now.",
      },
    ],
    relatedLinks: PT_RELATED_LINKS,
  },

  {
    slug: "server-side-setup-options",
    competitor: "DIY Server-Side Setup (CAPI / server-side GTM)",
    competitorPrice: "Free to low infrastructure cost (developer time required)",
    competitorCategory: "Self-managed server-side tracking infrastructure",
    title: "Server-Side Tracking Setup Options: CAPI, GTM, Native Apps, and Pixel Tracker Compared",
    description:
      "Server-side tracking can be built with Conversions API directly, server-side GTM, a platform's native channel, or a managed app. Here is how the setup options actually compare.",
    h1: "Server-Side Tracking Setup Options: CAPI, GTM, Native Apps, and Pixel Tracker Compared",
    intro: [
      "Once ad blockers and browser privacy restrictions started eating into browser-only pixel data, server-side tracking became less of a nice-to-have and more of a real fix. But 'set up server-side tracking' isn't one option, it's several, and they differ a lot in cost, complexity, and what they actually cover.",
      "You can build Meta's Conversions API directly yourself, set up server-side Google Tag Manager, rely on a platform's native sales channel where available, or use a managed app that handles server-side delivery for you. Each has a real tradeoff between control, cost, and setup time.",
      "This page compares those options side by side, using Pixel Tracker's managed approach as one point of reference, so you can pick the setup that actually matches your technical resources.",
    ],
    quickComparison: [
      { feature: "Monthly price (lowest paid tier)", pixelTracker: "$7/mo", competitor: "Free to low cost (developer time required)" },
      { feature: "Free plan available", pixelTracker: "Yes (1 pixel)", competitor: "Yes, but requires dev/infra time" },
      { feature: "Platforms supported", pixelTracker: "Meta and TikTok, managed", competitor: "As many as you build and maintain" },
      { feature: "Server-side tracking", pixelTracker: "Built in, managed", competitor: "Yes, if built and maintained correctly" },
      { feature: "Theme code required", pixelTracker: "No", competitor: "Sometimes, depends on method" },
      { feature: "Dashboard complexity", pixelTracker: "Low, single dashboard", competitor: "None, self-managed across tools" },
    ],
    featureMatrix: [
      { feature: "Direct Meta Conversions API implementation", pixelTracker: "Managed for you", competitor: "Requires server, API credentials, and event matching setup" },
      { feature: "Server-side Google Tag Manager", pixelTracker: "Not used, different approach", competitor: "Requires a separate server container and hosting cost" },
      { feature: "TikTok Events API", pixelTracker: "Managed for you", competitor: "Requires separate implementation and testing" },
      { feature: "Ongoing maintenance as APIs change", pixelTracker: "Handled by Pixel Tracker", competitor: "Your responsibility to monitor and update" },
      { feature: "Event deduplication with browser pixel", pixelTracker: "Built in", competitor: "Must be configured manually to avoid double-counting" },
      { feature: "Setup time", pixelTracker: "Minutes", competitor: "Days, and ongoing maintenance after that" },
      { feature: "Requires developer resources", pixelTracker: "No", competitor: "Yes, for most methods" },
      { feature: "Platform coverage today", pixelTracker: "Meta and TikTok", competitor: "Depends entirely on what you choose to build" },
    ],
    pricingBreakdown: [
      { plan: "Free / entry", pixelTracker: "$0, 1 pixel (browser-side)", competitor: "$0 in fees, developer time required" },
      { plan: "Starter", pixelTracker: "$7/mo, 3 pixels", competitor: "N/A, ongoing dev/infra cost varies" },
      { plan: "Growth", pixelTracker: "$15/mo, 10 pixels, Meta + TikTok server-side", competitor: "N/A" },
      { plan: "Pro", pixelTracker: "$29/mo, unlimited pixels, Meta + TikTok server-side", competitor: "N/A" },
    ],
    whoShouldChoose: {
      choosePT: [
        "You want Meta and TikTok server-side tracking without building or maintaining the API integration yourself.",
        "You don't have a developer available to set up and monitor a server-side GTM container or direct CAPI implementation.",
        "You want event deduplication between browser and server events handled automatically.",
      ],
      chooseCompetitor: [
        "You need server-side coverage for a platform beyond Meta and TikTok, which requires a custom build regardless of which app you use.",
        "You have developer resources and want full control over event payloads and matching logic.",
        "You're already running server-side GTM for other purposes and want to add ad platform tags to the same container.",
      ],
    },
    faqs: [
      {
        q: "What is server-side tracking, in plain terms?",
        a: "It's sending conversion events to an ad platform from a server rather than relying only on the customer's browser. This recovers events that ad blockers, Safari and Firefox privacy protections, and iOS restrictions would otherwise hide from browser-only pixels.",
      },
      {
        q: "Which platforms does Pixel Tracker support for server-side tracking?",
        a: "Currently Meta, through Conversions API, and TikTok, through Events API. Those are the two platforms where undercounted conversions tend to have the biggest financial impact for most Shopify stores.",
      },
      {
        q: "Can I build server-side tracking myself for free?",
        a: "Technically yes, both direct Conversions API implementation and server-side GTM are free tools. The real cost is developer time to build, test, and maintain them, plus any server hosting costs for a GTM server container.",
      },
      {
        q: "Do I need server-side tracking for every ad platform I use?",
        a: "Not necessarily. It matters most for platforms where you're spending the most and where browser-side data loss is significant, typically Meta and TikTok for most Shopify merchants, based on current ad blocking and privacy trends.",
      },
      {
        q: "How do I know if my browser-only pixel is actually missing conversions?",
        a: "Run the [free pixel health check tool](/tools/pixel-health-check) to see what's currently firing, and check the [tracking cost and coverage calculator](/tools/pixel-tracking-calculator) to estimate what browser-only tracking might be costing you in missed attribution.",
      },
    ],
    relatedLinks: PT_RELATED_LINKS,
  },
];

export function getAllVsComparisons(): VsComparisonPage[] {
  return vsComparisonPages;
}

export function getVsComparison(slug: string): VsComparisonPage | undefined {
  if (!VS_COMPARISON_SLUGS.includes(slug as VsComparisonSlug)) return undefined;
  return vsComparisonPages.find((page) => page.slug === slug);
}
