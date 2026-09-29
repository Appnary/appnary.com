---
name: lighthouse-performance
description: Use when changing the Appnary landing page's performance, measuring Lighthouse, or verifying a production release.
---

# Lighthouse performance workflow

Use this for Appnary landing page performance work, Lighthouse score checks, or production verification.

## Target

Lighthouse Performance must be at least 90 on both mobile and desktop. Use three sequential runs per device and report every run and the median. The green target applies to Performance; report accessibility, best practices, and SEO separately.

## Run

From the landing site repository, run:

    npm run lighthouse:production

The command pins Lighthouse 13.5.0, audits https://appnary.com/, runs mobile and desktop three times each without overlapping runs, prints the scores and key metrics inline, and removes its temporary JSON files.

For a locally running production build, pass its URL:

    npm run lighthouse:production -- http://localhost:3107/

Build and serve locally with npm run build and npm run start -- --port 3107 before the local audit.

## Evidence and release

- Label each measurement as local or production, and record Lighthouse version, device profile, run count, individual Performance scores, median, LCP, TBT, and CLS.
- Do not treat a local score as production evidence or say a change is deployed until the public site is checked after release.
- Prefer matching live asset hashes to the production build or an equivalent deployment record when confirming which code is live.
- Share readable score output. JSON is temporary machine output and should not be linked as the user-facing result.
- The manual PageSpeed Insights page for the homepage is https://pagespeed.web.dev/report?url=https%3A%2F%2Fappnary.com%2F.
