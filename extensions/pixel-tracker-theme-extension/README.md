# Pixel Tracker — Shopify Theme App Extension

A Shopify Theme App Extension that auto-injects tracking pixels into your storefront based on the merchant's configured tracking keys. Supports Google Ads (gtag.js), Facebook/Meta Pixel, TikTok Pixel, Pinterest Tag, LinkedIn Insight Tag, Snapchat Pixel, and Twitter/X Pixel.

## Features

- **Dynamic injection** — Only loads pixels you've configured keys for
- **Async & lazy** — All pixel scripts load asynchronously; non-critical ones load via `requestIdleCallback`
- **Consent management** — Built-in support for Cookiebot, OneTrust, and generic CMPs
- **Web Pixels API** — Subscribes to Shopify's analytics events for purchase, view content, search, and add-to-cart
- **CSP-friendly** — No inline script execution; config passed via JSON script tag
- **Error isolation** — One pixel failure doesn't block others

## Structure

```
extensions/pixel-tracker-theme-extension/
├── shopify.extension.toml        # Extension configuration
├── blocks/
│   └── pixel_tracker.liquid      # App block (add via theme editor)
├── snippets/
│   ├── pixel_tracker_head.liquid  # Head snippet (manual placement)
│   └── pixel_tracker_body.liquid  # Body snippet (manual placement)
├── assets/
│   ├── consent.js                 # Consent management adapter
│   └── tracker.js                 # Main pixel injection engine
└── README.md
```

## Installation

### Via Shopify CLI

```bash
# From your app directory
shopify extension register
# Select "Theme App Extension" and name it "pixel-tracker-theme-extension"
# Copy the files from this directory into the extension directory
```

### Manual Upload

1. Build the extension:
   ```bash
   cd extensions/pixel-tracker-theme-extension
   # Zip the contents
   zip -r pixel-tracker-theme-extension.zip .
   ```
2. Upload to your app in [Shopify Partners](https://partners.shopify.com)
3. Install the app on a development store
4. Add the "Pixel Tracker" block in Theme Editor → Customize → App blocks

## Configuration

### Metafields

Tracking keys are stored as shop-level metafields in the `pixel_tracker` namespace. The embedded app settings page writes these automatically.

| Metafield Key       | Platform           | Example Value                        |
|---------------------|--------------------|--------------------------------------|
| `google_ads`        | Google Ads (gtag)  | `G-XXXXXXXXXX`                       |
| `facebook`          | Facebook Pixel     | `123456789012345`                    |
| `tiktok`            | TikTok Pixel       | `XXXXXXX1234567890abcdef`            |
| `pinterest`         | Pinterest Tag      | `2611234567890`                      |
| `linkedin`          | LinkedIn Insight   | `1234567`                            |
| `snapchat`          | Snapchat Pixel     | `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx` |
| `twitter`           | Twitter/X Pixel    | `o9x...`                             |
| `consent_mode`      | Consent mode       | `auto` (default), `cookiebot`, `onetrust`, `none` |
| `debug`             | Debug mode         | `true` or `false`                    |

### Setting Metafields Manually (via API)

```graphql
mutation {
  metafieldsSet(metafields: [
    {
      namespace: "pixel_tracker",
      key: "google_ads",
      value: "G-XXXXXXXXXX",
      type: "single_line_text_field",
      ownerId: "gid://shopify/Shop/123456"
    },
    {
      namespace: "pixel_tracker",
      key: "facebook",
      value: "123456789012345",
      type: "single_line_text_field",
      ownerId: "gid://shopify/Shop/123456"
    }
  ]) {
    metafields { id key value }
    userErrors { field message }
  }
}
```

## Usage

### Theme Editor (Recommended)

1. In your Shopify admin, go to **Online Store → Themes**
2. Click **Customize** on your active theme
3. Click **Add block** → **Apps** → **Pixel Tracker**
4. The block loads automatically — no additional settings needed in the editor
5. Publish the theme

### Manual Snippet Placement

If you prefer not to use the app block, add the snippet directly to `theme.liquid`:

In `<head>`:
```liquid
{% render 'pixel_tracker_head' %}
```

## Consent Management

The extension detects and respects visitor consent preferences:

### Cookiebot
- Auto-detected via `window.Cookiebot`
- Waits for `CookiebotOnConsentReady` event
- Only fires pixels when `Cookiebot.consent.marketing === true`

### OneTrust
- Auto-detected via `window.OneTrust`
- Watches `OnetrustActiveGroups` for marketing group (C0004)
- Listens for `OneTrustGroupsUpdated` event

### None
- Set `consent_mode: "none"` to disable consent checking
- Pixels fire immediately on page load

### Custom / Generic CMP
- Checks for `data-consent` attribute on `<html>` element
- Falls through to immediate load if no CMP detected

## Web Pixels API Events

The extension subscribes to these Shopify analytics events:

| Web Pixels Event     | Pixel Events Fired     |
|----------------------|------------------------|
| `checkout_completed` | Purchase / Checkout    |
| `product_viewed`     | ViewContent / PageVisit|
| `search_submitted`   | Search                 |
| `cart_line_add`      | AddToCart / AddCart    |

## Platform-Specific Notes

- **Google Ads**: Uses gtag.js. The key must be a Google Ads measurement ID (G-XXXXXXXXXX)
- **Facebook**: Uses fbq. Pixel ID format: 15-16 digit number
- **TikTok**: Uses ttq SDK. Requires the full SDK key from TikTok Events Manager
- **Pinterest**: Uses pintrk. Tag ID from Pinterest Tag Manager
- **LinkedIn**: Insight Tag only supports page views client-side. Conversions must be set up server-side via LinkedIn API
- **Snapchat**: Uses scevent.min.js. Pixel ID is a UUID format
- **Twitter**: Uses twq. Client-side events fire standard tags; conversion IDs may need specific event IDs for accurate tracking

## Development

### Testing Locally

1. Create a Shopify development store
2. Install your app
3. Add the Pixel Tracker block to the theme
4. Set metafields via Shopify Admin → Settings → Custom data or via API
5. Open browser DevTools → Console and look for `[Pixel Tracker]` logs (enable debug mode)

### Debug Mode

Set `pixel_tracker.debug` metafield to `"true"` to see detailed logs in the browser console:
```
[Pixel Tracker] Active platforms: google_ads, facebook, tiktok
[Pixel Tracker] gtag.js loaded for G-XXXXXXXXXX
[Pixel Tracker] Facebook Pixel loaded for 123456789012345
[Pixel Tracker] Subscribing to Web Pixels API
```

## License

Proprietary — Appnary
