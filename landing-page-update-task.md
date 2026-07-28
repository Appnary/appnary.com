# Task: Update appnary.com Landing Page Content

## Context
The appnary.com landing page exists and is deployed, but the content is outdated. The Pixel Tracker product description says it's a "privacy-friendly analytics tool" with "heatmaps" and "no cookies" — but the actual product is a **multi-platform tracking pixel connector** (Facebook, Google, TikTok, Snapchat, Pinterest, X, LinkedIn).

## What Needs Updating

### 1. Home Page (`app/page.tsx`)
- Hero tagline is OK: "Shopify apps that work the way you do"
- Pixel Tracker card description needs update:
  - Current: "Track ad performance and ROAS directly in your Shopify dashboard."
  - Should be: "Connect Facebook, Google, TikTok & more pixels from one simple dashboard."
- Status badge: Keep "In Development" for now (will change to "Live" after App Store approval)

### 2. Pixel Tracker Page (`app/pixel-tracker/page.tsx`)
Major content overhaul needed:

**Hero section:**
- Current: "Track every visitor, understand every click. Privacy-friendly analytics built for Shopify merchants."
- Should be: "Connect all your tracking pixels from one simple dashboard. Facebook, Google, TikTok, Snapchat, Pinterest, X, and LinkedIn — no coding required."

**Features section:**
Replace the current features (visitor tracking, heatmaps, conversion funnel, etc.) with actual features:
1. Multi-platform tracking — Facebook, Google, TikTok, Snapchat, Pinterest, X, LinkedIn
2. One-click setup — Just enter your Pixel ID, no code editing needed
3. Automatic injection — Pixels fire on every page via Shopify ScriptTags
4. Server-side events — Facebook CAPI and TikTok Events API support
5. Simple dashboard — See all your pixels and their status at a glance
6. Free plan available — Start with one pixel, upgrade anytime

**Pricing section:**
Replace the single $4.99/month with actual plans:
- Free: $0 (1 pixel)
- Starter: $7/mo (3 pixels)
- Growth: $15/mo (10 pixels)
- Pro: $29/mo (unlimited pixels)

**FAQ section:**
Update questions and answers to match the actual product:
1. Q: What platforms do you support? A: Facebook/Meta Pixel, Google Ads Tag, TikTok Pixel, Snapchat Pixel, Pinterest Tag, X (Twitter) Pixel, and LinkedIn Insight Tag.
2. Q: How do I install it? A: Install from the Shopify App Store, paste your Pixel ID, and your pixel fires automatically. No code editing needed.
3. Q: Does it work with server-side events? A: Yes. Facebook CAPI and TikTok Events API are supported for more accurate conversion tracking.
4. Q: Is there a free plan? A: Yes. The Free plan includes 1 pixel. Upgrade anytime for more pixels.
5. Q: Do I need to edit my theme? A: No. Pixels are injected automatically via Shopify ScriptTags.
6. Q: Can I track multiple stores? A: Each store needs its own Pixel Tracker installation.
7. Q: What about GDPR/CCPA? A: You're responsible for your own compliance. Pixel Tracker connects your existing platform pixels — it doesn't collect or store user data.
8. Q: How do I cancel? A: Cancel anytime from the Billing page in your Shopify admin.

**Preview image:**
- Current: `/pixel-tracker-preview.svg` (may not exist)
- Consider removing or replacing with a placeholder

**JSON-LD schema:**
Update the SoftwareApplication schema to match actual pricing and description.

### 3. General Updates
- Make sure all metadata/SEO descriptions match the actual product
- Update OpenGraph images if needed

## Files to Modify
- `app/page.tsx` — Home page card description
- `app/pixel-tracker/page.tsx` — Full content overhaul

## Constraints
- Keep the same design system (Tailwind, brand colors: aqua #37D7C6, lime #B7F34B, ink #111827)
- Keep the same component structure
- Don't change the layout or styling, just content
- Don't touch navbar, footer, or other pages
- Build must pass: `npm run build`

## After Making Changes
1. Run `npm run build` to verify no errors
2. Commit with message like "update: landing page content to match actual Pixel Tracker product"
3. Do NOT push — user will handle deploy
