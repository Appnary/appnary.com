import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const url = process.argv[2] || "https://appnary.com/";
const runCount = 3;
const temporaryDirectory = mkdtempSync(join(tmpdir(), "appnary-lighthouse-"));
const results = { mobile: [], desktop: [] };

function score(report, category) {
  const value = report.categories[category]?.score;
  return typeof value === "number" ? Math.round(value * 100) : "n/a";
}

function metric(report, name) {
  const value = report.audits[name]?.numericValue;
  return typeof value === "number" ? value : null;
}

function runAudit(device, attempt) {
  const outputPath = join(temporaryDirectory, device + "-" + attempt + ".json");
  const args = [
    "--yes",
    "lighthouse@13.5.0",
    url,
    "--chrome-flags=--headless",
    "--only-categories=performance,accessibility,best-practices,seo",
    "--output=json",
    "--output-path=" + outputPath
  ];
  if (device === "desktop") args.push("--preset=desktop");

  const result = spawnSync("npx", args, { encoding: "utf8", maxBuffer: 16 * 1024 * 1024 });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error("Lighthouse failed for " + device + " run " + attempt + ": " + (result.stderr || result.stdout).trim());
  }

  const report = JSON.parse(readFileSync(outputPath, "utf8"));
  return {
    performance: score(report, "performance"),
    accessibility: score(report, "accessibility"),
    bestPractices: score(report, "best-practices"),
    seo: score(report, "seo"),
    lcp: metric(report, "largest-contentful-paint"),
    tbt: metric(report, "total-blocking-time"),
    cls: metric(report, "cumulative-layout-shift")
  };
}

function median(values) {
  const sorted = values.slice().sort((left, right) => left - right);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : Math.round((sorted[middle - 1] + sorted[middle]) / 2);
}

function showMetric(value, unit, digits = 0) {
  if (value === null) return "n/a";
  return (digits ? (value / 1000).toFixed(digits) : Math.round(value)) + unit;
}

try {
  console.log("Lighthouse 13.5.0 | " + url + " | three sequential runs per device");
  for (const device of ["mobile", "desktop"]) {
    for (let attempt = 1; attempt <= runCount; attempt += 1) {
      console.log("Running " + device + " run " + attempt + "/" + runCount + "...");
      results[device].push(runAudit(device, attempt));
    }
  }

  for (const device of ["mobile", "desktop"]) {
    console.log("\n" + device[0].toUpperCase() + device.slice(1) + " results:");
    results[device].forEach((run, index) => {
      console.log("  Run " + (index + 1) + ": Performance " + run.performance + ", Accessibility " + run.accessibility + ", Best Practices " + run.bestPractices + ", SEO " + run.seo + "; LCP " + showMetric(run.lcp, "s", 2) + ", TBT " + showMetric(run.tbt, "ms") + ", CLS " + (run.cls === null ? "n/a" : run.cls.toFixed(3)));
    });
    const value = median(results[device].map((run) => run.performance));
    console.log("  Median Performance: " + value + (value >= 90 ? " (GREEN: 90+)" : " (below 90)"));
  }
} finally {
  rmSync(temporaryDirectory, { recursive: true, force: true });
}
