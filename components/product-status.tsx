import Link from "next/link";

export function ProductStatus() {
  return (
    <aside aria-label="Vigil availability" className="mx-auto max-w-4xl px-6 py-6 text-sm text-muted-foreground-strong">
      <p>
        Vigil is in development and is not on the Shopify App Store yet.
        The waitlist stays open until Shopify approves the listing. We invite people from that list.{' '}
        <Link href="/vigil#waitlist" className="underline">Join the Vigil waitlist.</Link>
      </p>
    </aside>
  );
}
