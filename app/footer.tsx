import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <span className="text-lg font-bold text-ink">appnary</span>
            <p className="text-sm text-ink/50">Simple, affordable Shopify apps.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/pixel-tracker" className="text-ink/60 hover:text-ink">Pixel Tracker</Link>
            <Link href="/privacy" className="text-ink/60 hover:text-ink">Privacy</Link>
            <Link href="/terms" className="text-ink/60 hover:text-ink">Terms</Link>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-ink/5 text-center text-xs text-ink/40">
          &copy; {new Date().getFullYear()} Appnary.
        </div>
      </div>
    </footer>
  );
}
