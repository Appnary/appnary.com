import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";

function load(relativePath) {
  const source = readFileSync(new URL(relativePath, import.meta.url), "utf8");
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
  return module.exports;
}

const robots = load("../app/robots.ts").default;
const { INDEXNOW_KEY, indexNowKeyLocation } = load("../lib/indexnow.ts");
const rules = robots().rules;
assert.ok(Array.isArray(rules), "robots() must return a list of rules");

const byAgent = new Map();
for (const rule of rules) {
  const agents = Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent];
  for (const agent of agents) {
    assert.equal(byAgent.has(agent), false, `duplicate robots group for ${agent}`);
    byAgent.set(agent, rule);
  }
}

function assertAllowed(agent, crawlDelay) {
  const rule = byAgent.get(agent);
  assert.ok(rule, `missing robots rule for ${agent}`);
  const allow = Array.isArray(rule.allow) ? rule.allow : [rule.allow];
  assert.ok(allow.includes("/"), `${agent} must allow /`);
  assert.ok(allow.includes("/api/llms.txt"), `${agent} must allow /api/llms.txt`);
  assert.ok(allow.includes("/api/llms-full.txt"), `${agent} must allow /api/llms-full.txt`);
  assert.equal(rule.disallow, "/api/", `${agent} must disallow /api/`);
  assert.equal(rule.crawlDelay, crawlDelay, `${agent} crawl delay`);
}

for (const agent of [
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Bingbot",
  "Googlebot",
  "Applebot",
  "Meta-ExternalFetcher",
]) {
  assertAllowed(agent, undefined);
}

for (const agent of [
  "GPTBot",
  "ClaudeBot",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Amazonbot",
  "Meta-ExternalAgent",
]) {
  assertAllowed(agent, 10);
}

assert.equal(byAgent.has("Applebot-Extension"), false, "Applebot-Extension is not a real crawler token");
assert.equal(byAgent.get("Bytespider")?.disallow, "/", "Bytespider must be disallowed");
assert.equal(byAgent.get("PetalBot")?.disallow, "/", "PetalBot must be disallowed");
assert.equal(byAgent.get("*")?.disallow, "/api/", "the default rule must keep /api/ closed");

const robotsTxt = load("../app/robots.ts").renderRobotsTxt();
assert.match(robotsTxt, /User-Agent: \*\nContent-Signal: search=yes, ai-train=yes, ai-input=yes\nAllow: \//);
assert.match(
  robotsTxt,
  /User-Agent: Bytespider\nUser-Agent: PetalBot\nContent-Signal: search=no, ai-train=no, ai-input=no\nDisallow: \//,
);
assert.match(robotsTxt, /Crawl-delay: 10/);

const { prefersMarkdown } = load("../lib/prefers-markdown.ts");
assert.equal(prefersMarkdown("text/markdown, text/html;q=0.8, */*;q=0.5"), true);
assert.equal(prefersMarkdown("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"), false);
assert.equal(prefersMarkdown("text/markdown, text/html"), false);
assert.equal(prefersMarkdown(null), false);

const { htmlToMarkdown } = load("../lib/html-to-markdown.ts");
const markdown = htmlToMarkdown(
  "<!doctype html><html><head><title>Pixel Tracker</title></head><body><nav>Skip</nav><main><h1>Pixel Tracker</h1><p>Connects ad pixels.</p><ul><li><a href=\"/docs\">Docs</a></li></ul></main><footer>Footer</footer></body></html>",
);
assert.equal(markdown.startsWith("# Pixel Tracker"), true);
assert.match(markdown, /Connects ad pixels/);
assert.match(markdown, /\[Docs\]\(\/docs\)/);
assert.equal(markdown.includes("Skip"), false);
assert.equal(markdown.includes("Footer"), false);
assert.equal(markdown.trimStart().startsWith("<"), false);

const keyFile = readFileSync(new URL(`../public/${INDEXNOW_KEY}.txt`, import.meta.url), "utf8").trim();
assert.equal(keyFile, INDEXNOW_KEY);
assert.ok(indexNowKeyLocation().endsWith(`/${INDEXNOW_KEY}.txt`));
console.log("ai crawler policy ok");
