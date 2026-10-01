import { readFileSync } from "node:fs";
import ts from "typescript";

const source = readFileSync(new URL("../lib/indexnow.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const module = { exports: {} };
new Function("require", "module", "exports", compiled)(
  (name) => {
    throw new Error(`Unexpected import ${name}`);
  },
  module,
  module.exports,
);
const { INDEXNOW_HOST, INDEXNOW_KEY, indexNowKeyLocation } = module.exports;

const keyLocation = indexNowKeyLocation();
const keyResponse = await fetch(keyLocation);
const keyBody = (await keyResponse.text()).trim();
if (!keyResponse.ok || keyBody !== INDEXNOW_KEY) {
  console.error(
    `IndexNow key is not live at ${keyLocation} (HTTP ${keyResponse.status}). Deploy first.`,
  );
  process.exit(1);
}

const sitemapResponse = await fetch(`https://${INDEXNOW_HOST}/sitemap.xml`);
if (!sitemapResponse.ok) {
  console.error(`sitemap.xml returned HTTP ${sitemapResponse.status}`);
  process.exit(1);
}
const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const urls = urlList.filter((url) => {
  const parsed = new URL(url);
  return parsed.hostname === INDEXNOW_HOST && parsed.protocol === "https:";
});
if (urls.length === 0) {
  console.error("sitemap has no https://appnary.com URLs");
  process.exit(1);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation,
    urlList: urls,
  }),
});
const body = await response.text();
if (response.status !== 200 && response.status !== 202) {
  console.error(`IndexNow rejected the submission (HTTP ${response.status}): ${body}`);
  process.exit(1);
}
console.log(`submitted ${urls.length} URLs to IndexNow (HTTP ${response.status})`);
