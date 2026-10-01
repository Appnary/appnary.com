type Range = { type: string; quality: number };

function parseAccept(header: string): Range[] {
  return header.split(",").map((part) => {
    const [typePart, ...params] = part.trim().split(";");
    let quality = 1;
    for (const param of params) {
      const [key, value] = param.trim().split("=");
      if (key?.toLowerCase() === "q") quality = Number(value);
    }
    if (!Number.isFinite(quality)) quality = 0;
    return { type: typePart.trim().toLowerCase(), quality };
  });
}

function qualityFor(ranges: Range[], mediaType: string): number {
  const [wantedType, wantedSubtype] = mediaType.split("/");
  let best = 0;
  for (const range of ranges) {
    const [type, subtype] = range.type.split("/");
    const matches =
      range.type === mediaType ||
      (type === wantedType && subtype === "*") ||
      range.type === "*/*";
    if (matches) best = Math.max(best, range.quality);
  }
  return best;
}

/** True when the client asked for Markdown more strongly than HTML. Ties stay HTML. */
export function prefersMarkdown(accept: string | null): boolean {
  if (!accept || !accept.toLowerCase().includes("text/markdown")) return false;
  const ranges = parseAccept(accept);
  const markdown = qualityFor(ranges, "text/markdown");
  const html = Math.max(
    qualityFor(ranges, "text/html"),
    qualityFor(ranges, "application/xhtml+xml"),
  );
  return markdown > html;
}
