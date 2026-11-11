import Link from "next/link";
import { tokenizeInline } from "@/lib/text";

/** Renders text containing `[label](href)` links as a mix of plain text and <Link>s. */
export function InlineText({ text }: { text: string }) {
  const tokens = tokenizeInline(text);
  return (
    <>
      {tokens.map((token, i) =>
        token.type === "link" ? (
          <Link
            key={i}
            href={token.href}
            className="text-accent-foreground underline decoration-accent-foreground/40 underline-offset-2 hover:decoration-accent-foreground"
          >
            {token.label}
          </Link>
        ) : (
          <span key={i}>{token.value}</span>
        ),
      )}
    </>
  );
}
