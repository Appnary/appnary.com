# Production Lighthouse verification, 29 September 2026

Lighthouse 13.5.0 audited https://appnary.com/ with default mobile emulation and the desktop preset. Each device ran three times sequentially. Scores are Performance / Accessibility / Best Practices / SEO.

Mobile run 1: 95 / 100 / 100 / 100; LCP 2.48 s; TBT 18 ms; CLS 0.000.

Mobile run 2: 94 / 100 / 100 / 100; LCP 2.37 s; TBT 208 ms; CLS 0.000.

Mobile run 3: 96 / 100 / 100 / 100; LCP 2.17 s; TBT 166 ms; CLS 0.000.

Mobile median Performance: 95 (green; target is 90+).

Desktop run 1: 100 / 100 / 100 / 100; LCP 0.52 s; TBT 0 ms; CLS 0.000.

Desktop run 2: 100 / 100 / 100 / 100; LCP 0.40 s; TBT 0 ms; CLS 0.000.

Desktop run 3: 100 / 100 / 100 / 100; LCP 0.55 s; TBT 0 ms; CLS 0.000.

Desktop median Performance: 100 (green; target is 90+).

Production verification: local main was 4ff964c, which includes the merged homepage performance work in PRs #47 and #48. The live homepage's four sampled JavaScript/CSS assets matched the local production build byte for byte by SHA-256. This confirms the measured optimization build is serving on appnary.com. The rules, runbook, and CLI added for this closeout do not change the rendered site, so they require no Railway deployment.

Scores are Lighthouse lab measurements and vary between runs. No raw JSON reports are kept in the repository; the run command removes temporary reports after printing readable results.

Repeat with npm run lighthouse:production. To audit a local production server, pass its URL after --. See .cursor/skills/lighthouse-performance/SKILL.md for the workflow.

Manual PageSpeed Insights: https://pagespeed.web.dev/report?url=https%3A%2F%2Fappnary.com%2F.
