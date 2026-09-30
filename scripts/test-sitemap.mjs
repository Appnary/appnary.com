import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import ts from 'typescript';
const source = readFileSync(new URL('../app/sitemap.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const posts = [{ slug: 'edited', publishedAt: '2026-06-18', updatedAt: '2026-09-22' }, { slug: 'original', publishedAt: '2026-07-17' }];
const imports = {
  '@/lib/blog': { getAllPosts: () => posts },
  '@/content/platform-actions': { getAllPlatformActionPages: () => [{ platformSlug: 'meta-pixel', actionSlug: 'events' }] },
  '@/content/vs-comparisons': { getAllVsComparisons: () => [{ slug: 'existing-comparison' }] },
};
const module = { exports: {} };
new Function('require', 'module', 'exports', compiled)(name => {assert.ok(imports[name], `Unexpected import ${name}`);return imports[name];}, module, module.exports);
const sitemap = module.exports.default;
const NativeDate = Date;
function at(time) {
  globalThis.Date = class extends NativeDate { constructor(...args) { super(...(args.length ? args : [time])); } };
  try { return sitemap(); } finally { globalThis.Date = NativeDate; }
}
const first = at('2026-09-30T00:00:00Z');
const later = at('2026-10-03T00:00:00Z');
assert.equal(JSON.stringify(first), JSON.stringify(later), 'An unrelated build must not change sitemap modification dates');
assert.equal(first.find(r => r.url.endsWith('/blog/edited')).lastModified.toISOString(), '2026-09-22T00:00:00.000Z');
assert.equal(first.find(r => r.url.endsWith('/blog/original')).lastModified.toISOString(), '2026-07-17T00:00:00.000Z');
for (const row of first.filter(r => !r.url.includes('/blog/'))) assert.equal(row.lastModified, undefined, `Untracked date on ${row.url}`);
assert.equal(first.length, 47, 'Preserve 43 static URLs, two blogs, and two generated fixtures');
assert.equal(new Set(first.map(r => r.url)).size, first.length);
console.log('Sitemap regression checks passed: stable build dates, edited/published blog dates, and unchanged inventory.');
