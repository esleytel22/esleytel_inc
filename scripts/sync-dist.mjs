import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const checkOnly = process.argv.includes("--check");

function assertLive(htmlPath, label) {
  const html = fs.readFileSync(htmlPath, "utf8");
  if (html.includes("/src/main.jsx")) {
    console.error(`${label} points at /src/main.jsx. Browsers can't run that, so first-time visitors would see a blank page.`);
    process.exit(1);
  }
  if (!/<script[^>]+src="\/assets\/[^"]+\.js"/.test(html)) {
    console.error(`${label} has no built /assets/*.js bundle, so the site would render blank.`);
    process.exit(1);
  }
}

if (checkOnly) {
  assertLive(path.join(root, "index.html"), "Root index.html");
  console.log("Root index.html references the built bundle. Safe to publish.");
  process.exit(0);
}

if (!fs.existsSync(path.join(dist, "index.html"))) {
  console.error("dist/index.html not found. Run `vite build` first.");
  process.exit(1);
}
assertLive(path.join(dist, "index.html"), "dist/index.html");

for (const entry of fs.readdirSync(root)) {
  if (/^workbox-.*\.js$/.test(entry)) fs.rmSync(path.join(root, entry));
}

for (const entry of fs.readdirSync(dist, { withFileTypes: true })) {
  const from = path.join(dist, entry.name);
  const to = path.join(root, entry.name);
  if (entry.isDirectory()) {
    fs.rmSync(to, { recursive: true, force: true });
    fs.cpSync(from, to, { recursive: true });
  } else {
    fs.copyFileSync(from, to);
  }
}

assertLive(path.join(root, "index.html"), "Root index.html");
console.log("Synced dist/ to the repo root. Root index.html is the built, live version.");
