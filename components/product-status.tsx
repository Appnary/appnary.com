import Link from "next/link";

export function ProductStatus() {
  return (
    <aside aria-label="Pixel Tracker availability" className="mx-auto max-w-4xl px-6 py-6 text-sm text-muted-foreground-strong">
      <p>
        Pixel Tracker is in development and is not available to install.
        A saved Google measurement ID can send a GA4 purchase on paid orders.
        Meta CAPI, TikTok Events API, and other server delivery are not confirmed.{' '}
        <Link href="/#waitlist" className="underline">Join the waitlist for launch updates.</Link>
      </p>
    </aside>
  );
}
