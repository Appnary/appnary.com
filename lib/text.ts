/**
 * Minimal inline-markdown tokenizer. Supports only `[label](href)` links —
 * enough for internal linking in prose without pulling in a markdown parser.
 */

export type InlineToken =
  | { type: "text"; value: string }
  | { type: "link"; label: string; href: string };

export function tokenizeInline(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text))) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }
    tokens.push({ type: "link", label: match[1], href: match[2] });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    tokens.push({ type: "text", value: text.slice(lastIndex) });
  }

  return tokens;
}

/** Strips `[label](href)` markup down to plain `label` text — for JSON-LD fields. */
export function stripInline(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
