function decode(value: string): string {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'");
}

function inline(value: string): string {
  return decode(value.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

/** Turn a public HTML page into the article an agent should read. */
export function htmlToMarkdown(html: string): string {
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let fragment = mainMatch?.[1] ?? bodyMatch?.[1] ?? html;
  fragment = fragment
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "");
  fragment = fragment.replace(
    /<a\s+[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi,
    (_, href: string, label: string) => {
      const name = inline(label);
      return name ? `[${name}](${decode(href)})` : "";
    },
  );
  fragment = fragment.replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level: string, body: string) => {
    const name = inline(body);
    return name ? `\n\n${"#".repeat(Number(level))} ${name}\n\n` : "";
  });
  fragment = fragment.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, body: string) => {
    const name = inline(body);
    return name ? `\n- ${name}` : "";
  });
  fragment = fragment.replace(/<br\s*\/?>/gi, "\n");
  fragment = fragment.replace(/<\/(p|div|section|tr)>/gi, "\n\n");
  fragment = decode(fragment.replace(/<[^>]+>/g, ""));
  const lines = fragment
    .split("\n")
    .map((line) => line.replace(/[ \t]+/g, " ").trim())
    .filter((line, index, all) => line !== "" || (index > 0 && all[index - 1] !== ""));
  const body = lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
  const title = titleMatch ? inline(titleMatch[1]) : "";
  if (title && !body.startsWith(`# ${title}`)) return `# ${title}\n\n${body}\n`;
  return `${body}\n`;
}
