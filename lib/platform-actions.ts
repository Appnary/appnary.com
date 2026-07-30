export type PlatformActionSection = {
  heading: string;
  paragraphs: string[];
};

export type PlatformActionStep = {
  title: string;
  body: string;
};

export type PlatformActionFaq = {
  q: string;
  a: string;
};

export type PlatformActionRelated = {
  label: string;
  href: string;
};

export type PlatformActionPage = {
  platformSlug: string;
  actionSlug: string;
  platformName: string;
  pixelName: string;
  badge: string;
  title: string;
  description: string;
  h1: string;
  intro: string[];
  sections: PlatformActionSection[];
  steps: PlatformActionStep[];
  symptoms: string[];
  faqs: PlatformActionFaq[];
  related: PlatformActionRelated[];
};

export const PLATFORM_ACTION_SLUGS = [
  "meta-pixel",
  "google-ads",
  "tiktok-pixel",
  "snapchat-pixel",
  "pinterest-pixel",
  "linkedin-pixel",
  "twitter-pixel",
] as const;

export const ACTION_SLUGS = [
  "troubleshooting",
  "events",
  "server-side",
] as const;
