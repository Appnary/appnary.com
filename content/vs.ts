// Competitor facts come from each Shopify App Store listing, checked on CHECKED. Re-check before editing.
export const VS_CHECKED = "26 Nov 2026";

export type VsRow = { label: string; vigil: string; other: string };

export type VsPage = {
  slug: string;
  name: string;
  listing: string;
  title: string;
  description: string;
  intro: string;
  otherSummary: string;
  rows: VsRow[];
  pickOther: string;
  pickVigil: string;
};

const VIGIL_ROWS: Pick<VsRow, "label" | "vigil">[] = [
  { label: "Status", vigil: "In development. Waitlist open, no install link until Shopify approves the listing." },
  { label: "Lists external scripts and names the theme file or app behind each", vigil: "Yes" },
  { label: "Flags leaked keys and tokens, naming the file", vigil: "Yes" },
  { label: "Turns a flagged script off on the storefront, and undoes it", vigil: "Yes, the merchant approves each change" },
  { label: "Runs from an AI agent over MCP", vigil: "Yes" },
  { label: "Malware and card-skimmer detection", vigil: "Not the focus of version 1" },
  { label: "Price", vigil: "Not published yet" },
];

const row = (i: number, other: string): VsRow => ({ ...VIGIL_ROWS[i], other });

export const VS_PAGES: VsPage[] = [
  {
    slug: "shieldscan",
    name: "ShieldScan",
    listing: "https://apps.shopify.com/shieldscan",
    title: "Vigil vs ShieldScan for Shopify security | Appnary",
    description:
      "Vigil and ShieldScan both look at the scripts on a Shopify storefront. A fact-checked comparison of what each covers, plus where each one is the better pick.",
    intro:
      "ShieldScan is a broad security audit with a score. Vigil is narrower: it shows which theme file or app added each external script and lets you switch a bad one off.",
    otherSummary:
      "Per its Shopify listing, ShieldScan scans six areas: theme malware and card skimmers, app permissions, third-party scripts, and HTTP security headers. It gives a score out of 100 with fixes. Plans: Free, Pro $19/month, Business $49/month. The listing shows 0 reviews.",
    rows: [
      row(0, "Live on the Shopify App Store"),
      row(1, "Inspects third-party scripts. The listing does not say it names the theme file or app behind each one"),
      row(2, "Not listed"),
      row(3, "Not listed. Reports issues with fixes"),
      row(4, "Not listed"),
      row(5, "Yes, a core feature"),
      row(6, "Free, Pro $19/month, Business $49/month"),
    ],
    pickOther:
      "You want one broad audit with a security score, app-permission review and header checks, and you want to install it today.",
    pickVigil:
      "Your main question is which app or theme file added a script, and you want to disable it, or ask an AI agent to run the scan.",
  },
  {
    slug: "store-auditor",
    name: "Store Auditor",
    listing: "https://apps.shopify.com/store-auditor",
    title: "Vigil vs Store Auditor for Shopify scripts | Appnary",
    description:
      "Store Auditor ranks apps by the revenue their scripts cost you. Vigil names the file or app behind each script and flags leaked keys. How they differ.",
    intro:
      "Store Auditor is about speed and lost revenue. Vigil is about visibility and security. Both can tell you which app a script belongs to, for different reasons.",
    otherSummary:
      "Per its Shopify listing, Store Auditor runs Google Lighthouse on your storefront, classifies which third-party app is behind each blocking script, and estimates the revenue lost to that slowdown. The scan is read-only. Plans: Free (1 scan a month), Pro $29/month, Plus $99/month, with a 14-day trial. The listing shows 0 reviews.",
    rows: [
      row(0, "Live on the Shopify App Store"),
      row(1, "Attributes blocking scripts to the app behind them, framed as speed cost"),
      row(2, "Not listed"),
      row(3, "No. The scan is read-only and ranks fixes"),
      row(4, "Not listed"),
      row(5, "Not a security tool. It focuses on page speed"),
      row(6, "Free, Pro $29/month, Plus $99/month"),
    ],
    pickOther:
      "Your problem is a slow store and you want apps ranked by estimated revenue impact.",
    pickVigil:
      "Your problem is trust: unknown scripts, leaked keys, or a script you want to switch off rather than only read about.",
  },
  {
    slug: "sketchaudit",
    name: "SketchAudit",
    listing: "https://apps.shopify.com/sketchaudit",
    title: "Vigil vs SketchAudit for Shopify theme security | Appnary",
    description:
      "SketchAudit scans your theme nightly for malware and skimmers. Vigil lists every external script and the app behind it. A fact-checked comparison.",
    intro:
      "SketchAudit watches the theme for malicious code. Vigil shows what is loading on the storefront and who added it. They answer different questions, and some stores will want both.",
    otherSummary:
      "Per its Shopify listing, SketchAudit scans the theme nightly and on demand for malware, hidden checkout overlays and card skimming, compares against a baseline, names the affected file and gives fix steps. Plans: Basic $7.99/month, Pro $21.99/month (more manual scans and SMS alerts), with a 7-day trial. The listing shows 0 reviews.",
    rows: [
      row(0, "Live on the Shopify App Store"),
      row(1, "Names the affected file when it finds something suspicious. The listing does not describe a full script inventory"),
      row(2, "Not listed"),
      row(3, "Not listed. Alerts by email, and by SMS on Pro"),
      row(4, "Not listed"),
      row(5, "Yes, a core feature, with nightly scans"),
      row(6, "Basic $7.99/month, Pro $21.99/month"),
    ],
    pickOther:
      "You want automatic nightly monitoring of the theme for malware and skimmers, with email or SMS alerts.",
    pickVigil:
      "You want a map of every external script and its source, key-leak checks, the option to switch a script off, or an agent-driven scan.",
  },
];

export const VS_SLUGS = VS_PAGES.map((p) => p.slug);
export const getVsPage = (slug: string) => VS_PAGES.find((p) => p.slug === slug);
