# Landing-page Lighthouse audit, 25 September 2026

The all-100 target isn't complete. The updated production build has a median
Performance score of 98 on mobile and 100 on desktop across three runs.
Accessibility, Best Practices, and SEO score 100 in every final run.

## Measurements

Lighthouse 13.5.0, headless Chrome, default simulated throttling. Scores below
are ordered Performance / Accessibility / Best Practices / SEO.

- Live baseline, `https://appnary.com/`: mobile **89 / 96 / 100 / 100**;
  desktop **99 / 96 / 100 / 100**.
- Updated local production build, `http://localhost:3107/`:
  - Mobile runs: **98 / 100 / 100 / 100**, **98 / 100 / 100 / 100**,
    **82 / 100 / 100 / 100**.
  - Desktop runs: **99 / 100 / 100 / 100**, **100 / 100 / 100 / 100**,
    **100 / 100 / 100 / 100**.

Mobile LCP ranges from 2.34 to 2.44 seconds. Total blocking time ranges from
11.5 to 635 milliseconds; the third run accounts for the low Performance score.
Layout shift is zero in all six runs. Host CPU benchmark results also vary
between runs, so these measurements don't establish stable mobile performance.

A separate mobile run using applied DevTools throttling scored
**99 / 100 / 100 / 100**, with 1.13-second LCP and 104-millisecond blocking time.
That result uses a different measurement method and isn't included in the median.

The baseline and updated build use different hosts. Local results don't verify
production scores. The live site also injects Cloudflare analytics and email
decoding scripts, which aren't present locally. Changes haven't been deployed.

## Changes

- Render hero content immediately. Replace animated, blurred layers with static
  radial gradients and honor reduced-motion preferences.
- Use the existing system-font appearance without downloading unused Inter files.
  Inline CSS to remove the render-blocking stylesheet request.
- Use native links in the landing page and shared navigation/footer, reducing
  client-side link hydration and automatic route prefetching.
- Fix light-theme accent and secondary-text contrast. Give the email input an
  accessible name and announce submission results. Remove the footer email's
  mismatched accessible label.
- Serve lazy-loaded directory badges locally with explicit dimensions and cache
  headers. Convert the Super Launch PNG from 25,445 bytes to a 9,320-byte WebP.

Badge sources: `neeed.directory/badges/neeed-badge-light.svg`,
`earlyhunt.com/badges/earlyhunt-badge-light.svg`,
`indiehunt.io/badges/indiehunt-badge-light.svg`, and `www.superlaun.ch/badge.png`.
Outbound directory links remain intact.

## Verification

`npm run build` passes, including TypeScript and prerendering all 93 pages.
Browser checks pass for the mobile menu, persisted theme choice, and mocked
waitlist success/error responses. No horizontal overflow at 320, 390, 768, or
1440 pixels. No uncaught JavaScript errors during those checks.
Dark-mode axe-core 4.10.3 checks report no WCAG 2 A/AA or WCAG 2.1 A/AA violations.

## Repeat the audit

Build and start the production server in separate terminals:

```sh
npm run build
npm run start -- --port 3107
```

Run audits sequentially to avoid CPU contention:

```sh
npx --yes lighthouse@13.5.0 http://localhost:3107/ --chrome-flags='--headless' --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=/tmp/appnary-mobile.json
npx --yes lighthouse@13.5.0 http://localhost:3107/ --preset=desktop --chrome-flags='--headless' --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=/tmp/appnary-desktop.json
```

After deployment, repeat against `https://appnary.com/` and verify both PageSpeed
Insights device profiles. Mobile rendering/hydration cost and production-only
scripts remain to be measured before claiming 100 in every category.
