import express from "express";
import fetch from "node-fetch";
import GitHubStat from "../models/GithubStat.js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const router = express.Router();
const username = "cromx123";
const TOKEN = process.env.GITHUB_TOKEN;

// Utilidad simple de logs
function logToFile(message) {
  const logPath = path.join(process.cwd(), "github.log");
  const timestamp = new Date().toISOString();
  fs.appendFileSync(logPath, `[${timestamp}] ${message}\n`);
}

// Cache en archivo para evitar rate limit (6 horas)
const CACHE_FILE = path.join(process.cwd(), "github_cache.json");
const CACHE_TTL_MS = 6 * 60 * 60 * 1000;

function readCache() {
  try {
    const txt = fs.readFileSync(CACHE_FILE, "utf8");
    const json = JSON.parse(txt);
    if (Date.now() - json.timestamp < CACHE_TTL_MS) return json.data;
  } catch {}
  return null;
}
function writeCache(data) {
  fs.writeFileSync(
    CACHE_FILE,
    JSON.stringify({ timestamp: Date.now(), data }, null, 2)
  );
}

async function gh(url) {
  const r = await fetch(url, {
    headers: {
      Authorization: `token ${TOKEN}`,
      "User-Agent": "stats-dashboard",
      Accept: "application/vnd.github+json",
    },
  });
  if (!r.ok) {
    const text = await r.text();
    throw new Error(`GitHub ${r.status} ${r.statusText}: ${text}`);
  }
  return r.json();
}

// Paginación sencilla
async function ghPaginated(url) {
  let page = 1;
  const all = [];
  while (true) {
    const sep = url.includes("?") ? "&" : "?";
    const chunk = await gh(`${url}${sep}per_page=100&page=${page}`);
    if (!chunk.length) break;
    all.push(...chunk);
    page += 1;
    if (page > 10) break; // safety
  }
  return all;
}

router.get("/", async (req, res) => {
  try {
    // cache
    const cached = readCache();
    if (cached) {
      logToFile("Serving GitHub stats from cache");
      return res.json(cached);
    }

    // Perfil (repos, followers)
    const user = await gh(`https://api.github.com/users/${username}`);

    // Repos públicos (para stars y lenguajes)
    const repos = await ghPaginated(
      `https://api.github.com/users/${username}/repos?type=public&sort=updated`
    );

    // Stars totales y repo top por stars
    let stars = 0;
    let topRepoStars = 0;
    for (const r of repos) {
      stars += r.stargazers_count || 0;
      topRepoStars = Math.max(topRepoStars, r.stargazers_count || 0);
    }
    const avgStarsPerRepo = repos.length ? Math.round(stars / repos.length) : 0;

    // Lenguajes (top 3 por bytes)
    const langTotals = {};
    for (const r of repos.slice(0, 50)) { // límite para no golpear rate limit
      try {
        const langs = await gh(r.languages_url);
        for (const [k, v] of Object.entries(langs)) {
          langTotals[k] = (langTotals[k] || 0) + v;
        }
      } catch (e) {
        // si falla uno, seguimos
      }
    }
    const totalBytes = Object.values(langTotals).reduce((a, b) => a + b, 0);
    const languages = Object.entries(langTotals)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([name, bytes]) => ({
        name,
        percent: totalBytes ? (bytes / totalBytes) * 100 : 0,
      }));

    // PRs (search API)
    const prs = await gh(
      `https://api.github.com/search/issues?q=is:pr+author:${username}&per_page=1`
    );
    const issues = await gh(
      `https://api.github.com/search/issues?q=is:issue+author:${username}&per_page=1`
    );
    const pullRequests = prs.total_count || 0;
    const issuesCreated = issues.total_count || 0;
    const contributions = pullRequests + issuesCreated;

    // Eventos recientes (simple: últimos 30 eventos de la primera página)
    let recent = [];
    try {
      const events = await gh(
        `https://api.github.com/users/${username}/events/public`
      );
      recent = (events || []).slice(0, 10).map((e) => {
        const repo = e.repo?.name || "";
        const type = e.type || "Event";
        return `${type} @ ${repo}`;
      });
    } catch {}

    const stats = {
      repositories: user.public_repos || 0,
      followers: user.followers || 0,
      stars,
      pullRequests,
      contributions,
      languages,              // [{name, percent}]
      recent,                 // [string]
      topRepoStars,
      avgStarsPerRepo,
      openPRs: 0,             // opcional: podrías sumar abiertos con otra consulta
      techStack: [            // si quieres forzar un orden específico en el front
        "TypeScript","React","Next.js","Node.js","Express","Python","MongoDB","Docker","Vite","Tailwind"
      ]
    };

    // Guarda en DB y cache
    await GitHubStat.create({
      repositories: stats.repositories,
      stars: stats.stars,
      contributions: stats.contributions,
      pullRequests: stats.pullRequests,
      followers: stats.followers,
    });
    writeCache(stats);

    logToFile(`GitHub stats actualizadas: ${JSON.stringify(stats)}`);
    res.json(stats);
  } catch (err) {
    logToFile(`Error al obtener GitHub stats: ${err.message}`);
    res.status(500).json({ error: err.message });
  }
});

export default router;
