# appnary.com — MVP Landing Page Plan

> **Project:** Build and launch the Appnary company site — listings for all Appnary Shopify apps, each with its own detail page. First app: Pixel Tracker.
>
> **Scope:** MVP only. Pricing shown on app pages for info only — no plan selection on site. Purchase happens in Shopify app directory.

---

## 1. Brand Identity

Colors, typography, and design language **distinct from Shopify** (they use green #5E8E3E).

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Ink | `#111827` | Text, primary elements |
| Aqua | `#37D7C6` | Accent, CTAs, links |
| Lime | `#B7F34B` | Secondary accent, highlights |
| Mist | `#F6FBF9` | Background, cards |

### Typography

- **Headings & Body:** Inter
- **Monospace:** JetBrains Mono (pixel IDs, code)

### Design Vibe

Clean, modern, trustworthy. Whitespace-heavy, minimal, professional.

---

## 2. Logo & Visual Assets

- **Logo:** Wordmark "appnary" with optional icon mark. Generated via AI.
- **Favicon:** Derived from logo — 16×16, 32×32
- **Apple Touch Icon:** 180×180
- **OG Image:** 1200×630

---

## 3. Page Structure

### 3.1 Navbar
```
[Logo]  Apps  [Get Early Access]
```
- Sticky top
- Mobile hamburger menu
- CTA button: "Get Early Access" (waitlist signup)

### 3.2 Homepage — App Listing

The homepage lists all Appnary apps. Each app is a card/tile.

**MVP: Just one app — Pixel Tracker**

Hero section:
- **Headline:** "Shopify Apps That Work the Way You Do"
- **Subheadline:** "Simple, affordable tools for Shopify merchants."
- **CTA:** "Get Early Access"

App listing section (below hero):
- Card for each app with: icon, name, short description, "Learn More" link
- Pixel Tracker card shown as "In Development" with status badge

### 3.3 App Page — `/pixel-tracker`

Individual page for each Shopify app. Content:

**Hero:**
- App name + icon
- Short tagline
- "Install from Shopify" button (links to Shopify app store listing)
- Status badge (In Development / Live)

**Features:**
- What the app does
- Key features list
- Screenshots / preview images

**Pricing (display only):**
- Shows the price for information
- "Available in the Shopify App Store" — no selection on site
- Example: "Pixel Tracker — $4.99/month"

**FAQ:**
- App-specific questions (6-8 accordion items)
- These vary per app

### 3.4 Waitlist / Early Access

Combined into the "Get Early Access" flow:
- Email input field
- "Notify Me" button
- Stored via Formspree or similar (no backend for MVP)
- Privacy note: no spam, unsubscribe anytime

### 3.5 Footer
```
[Logo]  Apps  Privacy  Terms  © 2026 Appnary
```

---

## 4. Additional Pages (MVP)

- `/privacy` — Privacy policy
- `/terms` — Terms of service

No dedicated pricing page. No blog.

---

## 5. Content to Write

**Homepage:**
- [ ] Hero headline + subheadline
- [ ] Pixel Tracker card: name, short description, "In Development" badge

**Pixel Tracker page:**
- [ ] Tagline
- [ ] Feature descriptions
- [ ] Pricing display: "$4.99/month — available in Shopify App Store"
- [ ] FAQ (6-8 questions)

**Legal:**
- [x] Privacy policy — `public/privacy.html`
- [x] Terms of service — `public/terms.html`

**Global:**
- [ ] Meta descriptions per page

---

## 6. Assets to Create

- [ ] Logo (wordmark + icon)
- [ ] Favicon (ICO + PNG)
- [ ] Apple touch icon
- [ ] OG image
- [ ] App icons / thumbnails for each app listing
- [ ] Pixel Tracker preview images (for app page)

---

## 7. SEO & Metadata

- Unique `<title>` and `<description>` per page
- Open Graph tags
- JSON-LD (Organization + SoftwareApplication schema on app pages)
- `sitemap.xml`
- `robots.txt`
- Lighthouse 90+

---

## 8. Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS |
| Fonts | Inter via next/font |
| Icons | lucide-react |
| Waitlist | Formspree (or similar, no backend) |
| Hosting | Railway (Node.js) |
| CDN / DNS | Cloudflare (proxied) |
| Domain | appnary.com |
| Repo | Private (Appnary org) |

---

## 9. Deployment

**Repo:** Private repo under github.com/Appnary (name TBD)

**Railway:**
1. Create Railway project: `appnary-landing`
2. Connect private GitHub repo
3. Build command: `npm run build`
4. Start command: `npx next start --port=$PORT`
5. Set environment variable: `NODE_ENV=production`

**Cloudflare:**
1. Add `appnary.com` DNS record (CNAME → Railway generated URL)
2. Enable proxied (orange cloud) for CDN caching + SSL
3. Auto-deploy on push to `main`

---

## Execution Order

```
Phase 0: Brand + Design
  ├── Pick colors
  ├── Generate logo + favicon
  └── Finalize layout

Phase 1: Build
  ├── Scaffold Next.js
  ├── Configure Tailwind with brand
  ├── Homepage (app listing)
  ├── /pixel-tracker page (features, pricing display, FAQ)
  ├── Legal pages
  └── SEO + performance

Phase 2: Deploy
  ├── Cloudflare Pages
  ├── DNS
  └── Launch
```

---

## Success Criteria

- `appnary.com` loads in < 1.5s mobile
- SEO 90+
- App listing displays Pixel Tracker
- `/pixel-tracker` shows features, FAQ, and pricing display
- Waitlist signup works
- Fully responsive
- Same brand ready for cp.appnary.com
