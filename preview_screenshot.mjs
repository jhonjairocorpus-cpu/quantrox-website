import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/jhonc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");

const browser = await chromium.launch({
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
await page.goto("http://127.0.0.1:4173/#videos", { waitUntil: "networkidle" });
await page.locator("#videos").scrollIntoViewIfNeeded();
await page.waitForTimeout(1000);
await page.screenshot({ path: "preview-videos-section.png", fullPage: false });
await browser.close();
