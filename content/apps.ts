export type AppSlug = "vigil" | "sync" | "backup";

export type AppStatus = "in-development" | "future";

export type AppListing = {
  slug: AppSlug;
  name: string;
  status: AppStatus;
  href: string;
  label: string;
  summary: string;
};

export const apps: AppListing[] = [
  {
    slug: "vigil",
    name: "Vigil",
    status: "in-development",
    href: "/vigil",
    label: "In development",
    summary:
      "Scans a Shopify store for risky theme scripts, app embeds, and leaked keys. You can run the same scan from an AI agent.",
  },
  {
    slug: "sync",
    name: "Sync",
    status: "future",
    href: "/sync",
    label: "Future",
    summary:
      "One sync app for moving catalog and order data between stores, then to your own cloud and ERP later.",
  },
  {
    slug: "backup",
    name: "Backup",
    status: "future",
    href: "/backup",
    label: "Future",
    summary:
      "Backup and restore for a Shopify store. We will build this last. The category already has large apps.",
  },
];

export function appBySlug(slug: AppSlug): AppListing {
  const app = apps.find((item) => item.slug === slug);
  if (!app) {
    throw new Error(`Unknown app: ${slug}`);
  }
  return app;
}
