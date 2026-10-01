import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { renderRobotsTxt } from "./app/robots";
import { htmlToMarkdown } from "./lib/html-to-markdown";
import { prefersMarkdown } from "./lib/prefers-markdown";

const CONTENT_SIGNAL = "search=yes, ai-train=yes, ai-input=yes";

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/robots.txt") {
    return new NextResponse(renderRobotsTxt(), {
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "public, max-age=3600",
        "content-signal": CONTENT_SIGNAL,
      },
    });
  }

  if (request.headers.get("x-markdown-skip") === "1") return NextResponse.next();
  if (request.method !== "GET" || !prefersMarkdown(request.headers.get("accept"))) {
    return NextResponse.next();
  }

  const host = request.headers.get("x-forwarded-host") ?? request.nextUrl.host;
  const proto = request.headers.get("x-forwarded-proto") ?? request.nextUrl.protocol.replace(":", "");
  const pageUrl = `${proto}://${host}${pathname}${search}`;

  let htmlResponse: Response;
  try {
    htmlResponse = await fetch(pageUrl, {
      headers: {
        accept: "text/html",
        "x-markdown-skip": "1",
      },
      redirect: "follow",
      signal: AbortSignal.timeout(8000),
    });
  } catch {
    return NextResponse.next();
  }

  const type = htmlResponse.headers.get("content-type") ?? "";
  if (!htmlResponse.ok || !type.includes("text/html")) return NextResponse.next();

  const markdown = htmlToMarkdown(await htmlResponse.text());
  return new NextResponse(markdown, {
    status: 200,
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      vary: "Accept",
      "content-signal": CONTENT_SIGNAL,
      "x-markdown-tokens": String(Math.max(1, Math.ceil(markdown.length / 4))),
      "cache-control": "public, max-age=300",
    },
  });
}

export const config = {
  matcher: ["/robots.txt", "/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
