export type VsQuickRow = { feature: string; pixelTracker: string; competitor: string };
export type VsFeatureRow = { feature: string; pixelTracker: string; competitor: string; notes?: string };
export type VsPricingRow = { plan: string; pixelTracker: string; competitor: string };
export type VsFaq = { q: string; a: string };
export type VsRelatedLink = { label: string; href: string };

export type VsComparisonPage = {
  slug: string;
  competitor: string;
  competitorPrice: string;
  competitorCategory: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  quickComparison: VsQuickRow[];
  featureMatrix: VsFeatureRow[];
  pricingBreakdown: VsPricingRow[];
  whoShouldChoose: { choosePT: string[]; chooseCompetitor: string[] };
  faqs: VsFaq[];
  relatedLinks: VsRelatedLink[];
};

export const VS_COMPARISON_SLUGS = [
  "elevar-alternative",
  "facebook-instagram-alternative",
  "google-tag-manager-alternative",
  "littledata-alternative",
  "trackbee-alternative",
  "hyros-alternative",
  "northbeam-alternative",
  "lifetimely-alternative",
  "diy-vs-app",
  "server-side-setup-options",
] as const;

export type VsComparisonSlug = (typeof VS_COMPARISON_SLUGS)[number];
