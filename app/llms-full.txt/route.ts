import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderLlmsFull } from "@/lib/llms-full";

export async function GET() {
  const index = await readFile(path.join(process.cwd(), "public", "llms.txt"), "utf-8");
  return new Response(renderLlmsFull(index), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
