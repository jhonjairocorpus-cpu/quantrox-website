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
const outDir = path.join(root, "social-videos");
const shotDir = path.join(outDir, "shots");
const ffmpeg = "C:/Users/jhonc/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-8.1.1-full_build/bin/ffmpeg.exe";

const palaciosConstructores = "C:/Users/jhonc/OneDrive/Escritorio/Escritorio LENOVO/PALACIOSSAS/public.html/index.html";
const palaciosRental = "C:/Users/jhonc/OneDrive/Escritorio/Escritorio LENOVO/palacios-rentals/index.html";

const videos = [
  {
    id: "01-desarrollamos-paginas-web",
    eyebrow: "Desarrollo web",
    title: "Asi creamos una pagina web profesional",
    subtitle: "Estrategia, diseno, codigo, responsive y publicacion.",
    accent: "#48d9ff",
    type: "code",
    steps: ["Analizamos tu negocio", "Disenamos la experiencia", "Programamos la web", "La dejamos lista para vender"],
  },
  {
    id: "02-creamos-base-de-datos",
    eyebrow: "Software a medida",
    title: "Asi organizamos tu negocio con una base de datos",
    subtitle: "Clientes, cotizaciones, inventario, reportes y paneles conectados.",
    accent: "#62f0b6",
    type: "database",
    steps: ["Clientes", "Servicios", "Cotizaciones", "Reportes"],
  },
  {
    id: "03-caso-palacios-constructores",
    eyebrow: "Caso real",
    title: "Creamos la web de Palacios Constructores SAS",
    subtitle: "Una presencia digital clara para servicios, confianza y contacto comercial.",
    accent: "#ffc72c",
    type: "case",
    screenshot: "palacios-constructores.png",
    steps: ["Servicios visibles", "Marca profesional", "Contacto rapido", "Web responsive"],
  },
  {
    id: "04-caso-palacios-rental",
    eyebrow: "Caso real",
    title: "Creamos la web de Palacios Rentals",
    subtitle: "Una pagina para mostrar equipos, proyectos y recibir cotizaciones.",
    accent: "#ff6584",
    type: "case",
    screenshot: "palacios-rental.png",
    steps: ["Equipos disponibles", "Proyectos", "Cotizador", "WhatsApp comercial"],
  },
];

await fs.mkdir(outDir, { recursive: true });
await fs.mkdir(shotDir, { recursive: true });

const browser = await chromium.launch({
  executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  headless: true,
});

async function captureSite(filePath, outputName) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(filePath).href, { waitUntil: "load" });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(shotDir, outputName), fullPage: false });
  await page.close();
}

await captureSite(palaciosConstructores, "palacios-constructores.png");
await captureSite(palaciosRental, "palacios-rental.png");

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function makeHtml(video) {
  const screenshotUrl = video.screenshot
    ? pathToFileURL(path.join(shotDir, video.screenshot)).href
    : "";
  const steps = video.steps.map((step, index) => `<span style="--i:${index}">${escapeHtml(step)}</span>`).join("");
  const codeLines = [
    "const proyecto = crearSolucionDigital();",
    "disenar({ marca, servicios, conversion });",
    "desarrollar({ responsive: true, seo: true });",
    "conectarWhatsApp();",
    "publicar(proyecto);",
  ];
  const dbTables = ["clientes", "servicios", "cotizaciones", "reportes", "usuarios", "inventario"];

  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<style>
*{box-sizing:border-box}
body{margin:0;background:#07090d;color:#f8fafc;font-family:Inter,Segoe UI,Arial,sans-serif}
.stage{position:relative;width:1080px;height:1920px;overflow:hidden;background:radial-gradient(circle at 18% 14%,${video.accent}33,transparent 360px),radial-gradient(circle at 84% 86%,#ffc72c22,transparent 420px),linear-gradient(160deg,#07090d,#10151f 52%,#07090d)}
.stage:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:58px 58px;opacity:.55}
.brand{position:absolute;left:64px;right:64px;top:58px;z-index:5;display:flex;align-items:center;justify-content:space-between}
.brand-left{display:flex;align-items:center;gap:22px;font-size:36px;font-weight:900}.q{width:72px;height:72px;display:grid;place-items:center;border:2px solid ${video.accent};border-radius:18px;box-shadow:0 0 34px ${video.accent}55}.tag{font-weight:900;color:#cbd5e1;letter-spacing:.16em;text-transform:uppercase}
.copy{position:absolute;left:64px;right:64px;top:180px;z-index:5}.eyebrow{display:inline-flex;margin-bottom:28px;padding:14px 20px;border:1px solid ${video.accent}77;border-radius:999px;background:${video.accent}16;color:${video.accent};font-size:24px;font-weight:900;letter-spacing:.12em;text-transform:uppercase}
h1{margin:0;width:940px;font-size:88px;line-height:.98;letter-spacing:0}p{margin:28px 0 0;width:830px;color:#cbd5e1;font-size:36px;line-height:1.32}
.visual{position:absolute;left:64px;right:64px;top:650px;height:820px;z-index:3;border:1px solid rgba(255,255,255,.16);border-radius:26px;overflow:hidden;background:rgba(5,7,13,.72);box-shadow:0 36px 110px rgba(0,0,0,.45)}
.bar{height:84px;display:flex;align-items:center;gap:14px;padding:0 28px;border-bottom:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04)}.dot{width:18px;height:18px;border-radius:50%;background:${video.accent}}
.code{display:grid;gap:28px;padding:70px 48px}.line{height:32px;border-radius:99px;background:rgba(255,255,255,.16);transform-origin:left;animation:type 11s ease-in-out infinite}.line:nth-child(1){width:86%;background:${video.accent}88}.line:nth-child(2){width:68%;animation-delay:.35s}.line:nth-child(3){width:78%;animation-delay:.7s}.line:nth-child(4){width:56%;animation-delay:1.05s}.line:nth-child(5){width:92%;background:#ffc72c66;animation-delay:1.4s}
.person{position:absolute;right:88px;bottom:90px;width:270px;height:320px;animation:float 4.8s ease-in-out infinite}.head{position:absolute;left:100px;top:0;width:82px;height:82px;border-radius:50%;background:linear-gradient(145deg,#f8fafc,#8b97a8);box-shadow:0 0 40px ${video.accent}55}.body{position:absolute;left:62px;top:104px;width:166px;height:160px;border-radius:70px 70px 24px 24px;background:linear-gradient(145deg,${video.accent}88,rgba(255,255,255,.12));border:1px solid rgba(255,255,255,.14)}.laptop{position:absolute;left:10px;bottom:35px;width:250px;height:128px;border-radius:14px;background:#05070d;border:1px solid ${video.accent}88;box-shadow:0 0 38px ${video.accent}33}.desk{position:absolute;left:0;right:0;bottom:22px;height:24px;border-radius:999px;background:rgba(255,255,255,.2)}
.db{position:absolute;inset:120px 60px 80px}.table{position:absolute;width:250px;min-height:130px;border:1px solid rgba(255,255,255,.16);border-radius:18px;background:linear-gradient(145deg,${video.accent}33,rgba(255,255,255,.06));padding:24px;font-size:28px;font-weight:900;animation:pulse 4.4s ease-in-out infinite}.table small{display:block;margin-top:16px;color:#cbd5e1;font-size:18px}.table:nth-child(1){left:0;top:0}.table:nth-child(2){right:0;top:50px;animation-delay:.3s}.table:nth-child(3){left:90px;top:270px;animation-delay:.6s}.table:nth-child(4){right:40px;top:360px;animation-delay:.9s}.table:nth-child(5){left:10px;bottom:0;animation-delay:1.2s}.table:nth-child(6){right:140px;bottom:18px;animation-delay:1.5s}.beam{position:absolute;height:6px;border-radius:99px;background:linear-gradient(90deg,${video.accent},#ffc72c);opacity:.85;transform-origin:left;animation:scan 3.2s ease-in-out infinite}.b1{left:250px;top:95px;width:420px;rotate:8deg}.b2{left:300px;top:360px;width:360px;rotate:12deg}.b3{left:250px;top:625px;width:430px;rotate:-8deg}
.site-shot{position:absolute;inset:0;background-image:linear-gradient(180deg,rgba(7,9,13,.04),rgba(7,9,13,.86)),url('${screenshotUrl}');background-size:cover;background-position:top center;animation:pan 11.8s ease-in-out infinite}
.device{position:absolute;left:70px;right:70px;bottom:90px;height:330px;border:1px solid rgba(255,255,255,.18);border-radius:28px;background:rgba(7,9,13,.82);box-shadow:0 28px 80px rgba(0,0,0,.44);padding:34px}.device h2{margin:0 0 24px;color:${video.accent};font-size:36px}.metrics{display:grid;grid-template-columns:1fr 1fr;gap:18px}.metric{padding:22px;border:1px solid rgba(255,255,255,.12);border-radius:16px;background:rgba(255,255,255,.08);font-size:26px;font-weight:900}
.steps{position:absolute;left:64px;right:64px;bottom:145px;z-index:6;display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.steps span{min-height:92px;display:flex;align-items:center;padding:18px;border:1px solid rgba(255,255,255,.14);border-radius:18px;background:rgba(255,255,255,.08);font-size:23px;font-weight:900;opacity:0;animation:step 11.8s ease-in-out infinite;animation-delay:calc(var(--i) * .55s)}
.cta{position:absolute;left:64px;right:64px;bottom:54px;z-index:6;display:flex;align-items:center;justify-content:space-between;color:#cbd5e1;font-size:25px;font-weight:800}.meter{width:360px;height:8px;border-radius:99px;background:rgba(255,255,255,.16);overflow:hidden}.meter span{display:block;width:100%;height:100%;background:linear-gradient(90deg,${video.accent},#ffc72c);transform-origin:left;animation:progress 11.8s linear infinite}
@keyframes type{0%,100%{transform:scaleX(.22);opacity:.55}38%,78%{transform:scaleX(1);opacity:1}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}@keyframes pulse{0%,100%{transform:translateY(0);box-shadow:none}50%{transform:translateY(-12px);box-shadow:0 0 40px ${video.accent}40}}@keyframes scan{0%,100%{transform:scaleX(.05);opacity:.3}50%{transform:scaleX(1);opacity:1}}@keyframes pan{0%,100%{background-position:top center}50%{background-position:center center}}@keyframes step{0%{opacity:0;transform:translateY(18px)}12%,86%{opacity:1;transform:translateY(0)}100%{opacity:0;transform:translateY(-8px)}}@keyframes progress{from{transform:scaleX(0)}to{transform:scaleX(1)}}
</style>
</head>
<body>
<main class="stage">
  <header class="brand"><div class="brand-left"><div class="q">Q</div><div>Quantrox Systems</div></div><div class="tag">Premium Tech</div></header>
  <section class="copy"><div class="eyebrow">${escapeHtml(video.eyebrow)}</div><h1>${escapeHtml(video.title)}</h1><p>${escapeHtml(video.subtitle)}</p></section>
  <section class="visual">
    <div class="bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
    ${
      video.type === "code"
        ? `<div class="code">${codeLines.map(() => `<div class="line"></div>`).join("")}</div><div class="person"><div class="head"></div><div class="body"></div><div class="laptop"></div><div class="desk"></div></div>`
        : ""
    }
    ${
      video.type === "database"
        ? `<div class="db"><div class="beam b1"></div><div class="beam b2"></div><div class="beam b3"></div>${dbTables.map((table) => `<div class="table">${table}<small>datos conectados</small></div>`).join("")}</div>`
        : ""
    }
    ${
      video.type === "case"
        ? `<div class="site-shot"></div><div class="device"><h2>Proyecto entregado</h2><div class="metrics"><div class="metric">Responsive</div><div class="metric">Contacto</div><div class="metric">Servicios</div><div class="metric">Marca</div></div></div>`
        : ""
    }
  </section>
  <section class="steps">${steps}</section>
  <footer class="cta"><span>quantroxsystems.cloud</span><div class="meter"><span></span></div></footer>
</main>
</body>
</html>`;
}

async function renderVideo(video) {
  const htmlPath = path.join(outDir, `${video.id}.html`);
  const webmPath = path.join(outDir, `${video.id}.webm`);
  const mp4Path = path.join(outDir, `${video.id}.mp4`);
  const posterPath = path.join(outDir, `${video.id}.jpg`);

  await fs.writeFile(htmlPath, makeHtml(video), "utf8");
  await fs.rm(webmPath, { force: true });
  await fs.rm(mp4Path, { force: true });

  const context = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 1,
    recordVideo: { dir: outDir, size: { width: 1080, height: 1920 } },
  });
  const page = await context.newPage();
  await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load" });
  await page.waitForTimeout(12200);
  const videoHandle = page.video();
  await page.close();
  await context.close();
  await fs.rename(await videoHandle.path(), webmPath);
  await execFileAsync(ffmpeg, ["-y", "-i", webmPath, "-c:v", "libx264", "-preset", "medium", "-crf", "20", "-pix_fmt", "yuv420p", "-an", "-movflags", "+faststart", mp4Path]);
  await execFileAsync(ffmpeg, ["-y", "-ss", "00:00:02", "-i", mp4Path, "-frames:v", "1", "-q:v", "2", "-update", "1", posterPath]);
  await fs.rm(htmlPath, { force: true });
  await fs.rm(webmPath, { force: true });
  console.log(mp4Path);
}

for (const video of videos) {
  await renderVideo(video);
}

await browser.close();
