import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/jhonc/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const execFileAsync = promisify(execFile);

const root = process.cwd();
const outDir = path.join(root, "src", "assets", "videos");
const ffmpeg = "C:/Users/jhonc/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-8.1.1-full_build/bin/ffmpeg.exe";

const scenes = [
  {
    id: "coding-lab",
    label: "Desarrollo web",
    title: "Codigo limpio",
    accent: "#48d9ff",
    lines: ["const app = createSolution();", "deploy({ web, seo, analytics });", "client.growth += automation;"],
  },
  {
    id: "app-builder",
    label: "Aplicaciones",
    title: "Apps y paneles",
    accent: "#ffc72c",
    lines: ["Dashboard", "CRM", "Inventario", "Cotizador"],
  },
  {
    id: "web-design",
    label: "Diseno UI/UX",
    title: "Paginas que venden",
    accent: "#62f0b6",
    lines: ["Hero", "Servicios", "Formulario", "WhatsApp"],
  },
  {
    id: "ai-automation",
    label: "Automatizacion IA",
    title: "Flujos inteligentes",
    accent: "#ff6584",
    lines: ["Lead", "IA", "Reporte", "Equipo"],
  },
];

function html(scene) {
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
*{box-sizing:border-box} body{margin:0;width:720px;height:1080px;overflow:hidden;background:#07090d;color:#f7f9fc;font-family:Inter,Segoe UI,Arial,sans-serif}
.stage{position:relative;width:720px;height:1080px;overflow:hidden;background:radial-gradient(circle at 16% 18%, ${scene.accent}33, transparent 260px),radial-gradient(circle at 86% 88%, #ffc72c22, transparent 280px),linear-gradient(160deg,#07090d,#10151f 52%,#07090d)}
.stage:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:44px 44px;opacity:.55}
.stage:after{content:"";position:absolute;inset:-10%;background:conic-gradient(from 90deg,transparent,${scene.accent}26,transparent,#ffc72c22,transparent);animation:spin 12s linear infinite}
.brand{position:absolute;left:44px;top:42px;z-index:3;display:flex;align-items:center;gap:18px;font-weight:900;font-size:28px}.mark{width:62px;height:62px;display:grid;place-items:center;border:2px solid ${scene.accent};border-radius:14px;box-shadow:0 0 28px ${scene.accent}55}
.workspace{position:absolute;left:44px;right:44px;top:180px;height:650px;z-index:3;border:1px solid rgba(255,255,255,.14);border-radius:16px;background:rgba(7,9,13,.7);box-shadow:0 28px 88px rgba(0,0,0,.42);overflow:hidden;backdrop-filter:blur(10px)}
.top{height:56px;display:flex;align-items:center;gap:10px;padding:0 18px;border-bottom:1px solid rgba(255,255,255,.12)}.dot{width:12px;height:12px;border-radius:50%;background:${scene.accent}}
.screen{position:absolute;left:28px;right:28px;top:86px;bottom:34px}
.code{display:grid;gap:20px}.line{height:24px;border-radius:99px;background:rgba(255,255,255,.16);transform-origin:left;animation:type 5.8s ease-in-out infinite}.line:nth-child(1){width:86%;background:${scene.accent}66}.line:nth-child(2){width:68%;animation-delay:.35s}.line:nth-child(3){width:78%;animation-delay:.7s}.line:nth-child(4){width:52%;animation-delay:1.05s}.line:nth-child(5){width:92%;background:#ffc72c55;animation-delay:1.4s}
.tiles{display:grid;grid-template-columns:1fr 1fr;gap:18px}.tile{height:180px;border:1px solid rgba(255,255,255,.12);border-radius:14px;background:linear-gradient(145deg,${scene.accent}33,rgba(255,255,255,.06));animation:float 4.2s ease-in-out infinite}.tile:nth-child(2){animation-delay:.4s}.tile:nth-child(3){animation-delay:.8s}.tile:nth-child(4){animation-delay:1.2s}
.flow{position:absolute;inset:0}.node{position:absolute;width:150px;height:84px;border-radius:14px;border:1px solid rgba(255,255,255,.16);display:grid;place-items:center;background:rgba(255,255,255,.08);font-weight:900;animation:glow 3s ease-in-out infinite}.node:nth-child(1){left:20px;top:40px}.node:nth-child(2){right:28px;top:130px;animation-delay:.35s}.node:nth-child(3){left:56px;bottom:160px;animation-delay:.7s}.node:nth-child(4){right:36px;bottom:52px;animation-delay:1.05s}.connector{position:absolute;height:4px;border-radius:99px;background:linear-gradient(90deg,${scene.accent},#ffc72c);transform-origin:left;animation:scan 3s ease-in-out infinite}.c1{left:172px;top:84px;width:300px;rotate:15deg}.c2{left:170px;top:320px;width:300px;rotate:-18deg}.c3{left:212px;top:468px;width:270px;rotate:18deg}
.coder{position:absolute;right:30px;bottom:38px;width:170px;height:210px;opacity:.92;animation:float 4.8s ease-in-out infinite}.head{position:absolute;left:62px;top:0;width:58px;height:58px;border-radius:50%;background:linear-gradient(145deg,#f7f9fc,#8794a6);box-shadow:0 0 28px ${scene.accent}44}.body{position:absolute;left:38px;top:70px;width:106px;height:112px;border-radius:42px 42px 16px 16px;background:linear-gradient(145deg,${scene.accent}77,rgba(255,255,255,.12));border:1px solid rgba(255,255,255,.16)}.desk{position:absolute;left:0;right:0;bottom:0;height:24px;border-radius:99px;background:rgba(255,255,255,.18)}.laptop{position:absolute;left:2px;bottom:22px;width:150px;height:92px;border-radius:8px;background:#05070d;border:1px solid ${scene.accent}66;box-shadow:0 0 30px ${scene.accent}33}
@keyframes spin{to{transform:rotate(360deg)}}@keyframes type{0%,100%{transform:scaleX(.24);opacity:.55}40%,75%{transform:scaleX(1);opacity:1}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-16px)}}@keyframes glow{0%,100%{box-shadow:0 0 0 ${scene.accent}00}50%{box-shadow:0 0 34px ${scene.accent}55}}@keyframes scan{0%{transform:scaleX(.05);opacity:.35}50%{transform:scaleX(1);opacity:1}100%{transform:scaleX(.05);opacity:.35}}
</style>
</head>
<body>
<main class="stage">
  <div class="brand"><div class="mark">Q</div><div>Quantrox Systems</div></div>
  <section class="workspace">
    <div class="top"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    <div class="screen">
      ${scene.id === "coding-lab" ? `<div class="code"><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div></div><div class="coder"><div class="head"></div><div class="body"></div><div class="laptop"></div><div class="desk"></div></div>` : ""}
      ${scene.id === "app-builder" || scene.id === "web-design" ? `<div class="tiles"><div class="tile"></div><div class="tile"></div><div class="tile"></div><div class="tile"></div></div>` : ""}
      ${scene.id === "ai-automation" ? `<div class="flow"><div class="connector c1"></div><div class="connector c2"></div><div class="connector c3"></div>${scene.lines.map((item) => `<div class="node">${item}</div>`).join("")}</div>` : ""}
    </div>
  </section>
</main>
</body>
</html>`;
}

await fs.mkdir(outDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  headless: true,
});

for (const scene of scenes) {
  const htmlPath = path.join(outDir, `${scene.id}.html`);
  await fs.writeFile(htmlPath, html(scene), "utf8");
  const context = await browser.newContext({
    viewport: { width: 720, height: 1080 },
    deviceScaleFactor: 1,
    recordVideo: { dir: outDir, size: { width: 720, height: 1080 } },
  });
  const page = await context.newPage();
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load" });
  await page.waitForTimeout(6200);
  const video = page.video();
  await page.close();
  await context.close();
  const recorded = await video.path();
  const webm = path.join(outDir, `${scene.id}.webm`);
  const mp4 = path.join(outDir, `${scene.id}.mp4`);
  const poster = path.join(outDir, `${scene.id}.jpg`);
  await fs.rename(recorded, webm);
  await execFileAsync(ffmpeg, ["-y", "-i", webm, "-c:v", "libx264", "-preset", "medium", "-crf", "22", "-pix_fmt", "yuv420p", "-an", "-movflags", "+faststart", mp4]);
  await execFileAsync(ffmpeg, ["-y", "-ss", "00:00:02", "-i", mp4, "-frames:v", "1", "-q:v", "2", "-update", "1", poster]);
  await fs.rm(htmlPath, { force: true });
  await fs.rm(webm, { force: true });
  console.log(`created ${mp4}`);
}

await browser.close();
