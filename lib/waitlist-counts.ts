import type { AppSlug } from "@/content/apps";

export type WaitlistCounts = Record<AppSlug, number>;

const EMPTY: WaitlistCounts = { vigil: 0, sync: 0, backup: 0 };

export async function getWaitlistCounts(): Promise<WaitlistCounts> {
  const endpoint =
    process.env.WAITLIST_COUNTS_API || "https://cp.appnary.com/api/waitlist/counts";

  try {
    const res = await fetch(endpoint, { next: { revalidate: 60 } });
    if (!res.ok) return EMPTY;
    const data = (await res.json()) as Partial<WaitlistCounts>;
    return {
      vigil: Number(data.vigil) || 0,
      sync: Number(data.sync) || 0,
      backup: Number(data.backup) || 0,
    };
  } catch {
    return EMPTY;
  }
}

export function formatCount(count: number): string {
  return new Intl.NumberFormat("en-US").format(count);
}
