import express from "express";
import fetch from "node-fetch";
import GitHubStat from "../models/GithubStat.js";
import { graphql } from "@octokit/graphql";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const router = express.Router();
const username = process.env.GITHUB_USERNAME || "cromx123";
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

// Streaks y estadísticas de tiempo
const ghQL = graphql.defaults({
  headers: { authorization: `Bearer ${process.env.GITHUB_TOKEN}` },
});

const RANGE_Q = `
  query($login:String!, $from:DateTime!, $to:DateTime!) {
    user(login:$login) {
      createdAt
      contributionsCollection(from:$from, to:$to) {
        contributionYears
        contributionCalendar {
          weeks { contributionDays { date contributionCount } }
        }
      }
    }
  }
`;

/** Junta días contribuidos en un Map { 'YYYY-MM-DD' -> count } */
function mergeDays(into, weeks) {
  for (const w of weeks) for (const d of w.contributionDays) {
    into.set(d.date, d.contributionCount);
  }
}

/** Pide contribuciones desde que se creó la cuenta (año por año) */
async function fetchAllContributionDays(login) {
  const year = new Date().getUTCFullYear();
  const allDays = new Map();

  // 1) Pide año actual para conocer createdAt y contributionYears
  const fromCur = `${year}-01-01T00:00:00Z`;
  const toCur   = `${year}-12-31T23:59:59Z`;
  const cur = await ghQL(RANGE_Q, { login, from: fromCur, to: toCur });

  const createdAt = cur.user.createdAt;                 // p.ej. "2016-08-10T..."
  const createdYear = parseInt(createdAt.slice(0,4), 10);
  const contribYears = cur.user.contributionsCollection.contributionYears || [];
  const firstContribYear = Math.min(...contribYears, createdYear);

  // 2) Merge año actual
  mergeDays(allDays, cur.user.contributionsCollection.contributionCalendar.weeks);

  // 3) Pide años previos (del firstContribYear al año-1)
  for (let y = firstContribYear; y < year; y++) {
    const from = `${y}-01-01T00:00:00Z`;
    const to   = `${y}-12-31T23:59:59Z`;
    const r = await ghQL(RANGE_Q, { login, from, to });
    mergeDays(allDays, r.user.contributionsCollection.contributionCalendar.weeks);
  }

  return allDays; // Map<dateISO, count>
}

/** Streaks diarios (como tu PHP) */
function computeDailyStreak(contribMap, { excludeDays = [] } = {}) {
  if (!contribMap.size) return {
    totalContributions: 0,
    firstContribution: "",
    currentStreak: { start:"", end:"", length:0 },
    longestStreak: { start:"", end:"", length:0 },
  };

  // Normaliza exclusiones: ["Mon","Tue",...]
  const validDays = new Set(["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]);
  const excl = new Set(
    excludeDays.map(d => (d||"").trim().slice(0,3))
               .filter(d => validDays.has(d))
  );

  const sorted = Array.from(contribMap.entries())
    .map(([date, count]) => ({ date, count }))
    .sort((a,b) => a.date.localeCompare(b.date));

  const dayOf = iso => ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(iso+"T00:00:00Z").getUTCDay()];

  const today = sorted[sorted.length - 1].date;
  const first = sorted[0].date;

  let total = 0;
  let longest = { start:first, end:first, length:0 };
  let current = { start:today, end:today, length:0 };

  for (const { date, count } of sorted) {
    total += count;
    const isExcluded = excl.has(dayOf(date));
    if (count > 0 || (current.length > 0 && isExcluded)) {
      // seguimos la racha
      current.length += 1;
      current.end = date;
      if (current.length === 1) current.start = date;
      if (current.length > longest.length) {
        longest = { ...current };
      }
    } else if (date !== today) {
      // cortamos racha (exceptuando 'today' como en tu PHP)
      current = { start:today, end:today, length:0 };
    }
  }

  return {
    totalContributions: total,
    firstContribution: sorted.find(d => d.count > 0)?.date || first,
    currentStreak: current,
    longestStreak: longest,
  };
}

/** API de alto nivel para tu router */
export async function getStreakStats(login, opts = {}) {
  const days = await fetchAllContributionDays(login); // Map<date, count>
  const daily = computeDailyStreak(days, opts);
  return { daily };
}


router.get("/", async (req, res) => {
  try {
    // cache
    const force = req.query.forceRefresh === "1";
    const cached = !force ? readCache() : null;
    if (cached) {
      logToFile("Serving GitHub stats from cache");
      return res.json(cached);
    }

    // Usa el endpoint autenticado para contar correctamente
    const repos = await ghPaginated(`https://api.github.com/user/repos?per_page=100&type=owner`);

    // Cuenta solo los repos públicos
    const publicRepos = repos.filter(r => !r.private);

    // Crea un objeto "user" coherente
    const user = {
      repositories_total: repos.length,               // todos (públicos + privados)
      public_repos: publicRepos.length,               // solo públicos
      followers: (await gh(`https://api.github.com/users/${username}`)).followers,
    };

    // Stars totales y repo top por stars
    let stars = 0;
    let topRepoStars = 0;
    for (const r of repos) {
      stars += r.stargazers_count || 0;
      topRepoStars = Math.max(topRepoStars, r.stargazers_count || 0);
    }
    const avgStarsPerRepo = repos.length ? Math.round(stars / repos.length) : 0;

    // Pool de concurrencia simple
    async function withConcurrency(items, limit, worker) {
      const ret = [];
      let i = 0;
      const run = async () => {
        while (i < items.length) {
          const idx = i++;
          ret[idx] = await worker(items[idx], idx);
        }
      };
      const runners = Array.from({ length: Math.min(limit, items.length) }, run);
      await Promise.all(runners);
      return ret;
    }

    function mergeLangCounters(into, obj) {
      for (const [k, v] of Object.entries(obj)) {
        into[k] = (into[k] || 0) + v;
      }
    }

    // Normaliza lenguajes POR REPO (cada repo suma 1.0 en total)
    // y luego promedia entre repos.
    function normalizeRepoLanguages(langs) {
      const sum = Object.values(langs).reduce((a, b) => a + b, 0) || 1;
      const normalized = {};
      for (const [k, v] of Object.entries(langs)) {
        normalized[k] = v / sum; // proporción del repo
      }
      return normalized;
    }

    // --- Lenguajes (Top N) ---
    const topN = Number(req.query.top) || 5;          
    const normalize = req.query.normalize === "true";

    const filteredRepos = repos.filter(r => !r.fork && !r.archived);

    // Llama /languages con concurrencia limitada (p.ej. 8)
    const langTotals = {};
    const repoLangs = await withConcurrency(filteredRepos, 8, async (r) => {
      try {
        const langs = await gh(r.languages_url); // {lang: bytes}
        return { name: r.name, langs };
      } catch (e) {
        logToFile(`languages failed for ${r.full_name || r.name}: ${e.message}`);
        return { name: r.name, langs: {} };
      }
    });

    if (normalize) {
      // Cada repo aporta 1.0 en total (repartido entre sus lenguajes)
      for (const { langs } of repoLangs) {
        const norm = normalizeRepoLanguages(langs);
        for (const [k, v] of Object.entries(norm)) {
          // escalamos por 1 (cada repo = 1.0)
          langTotals[k] = (langTotals[k] || 0) + v;
        }
      }
      // total "bytes" aquí es número de repos considerados
      var totalWeight = filteredRepos.length || 1;
    } else {
      // Agrega por bytes reales (GitHub language bytes)
      for (const { langs } of repoLangs) {
        mergeLangCounters(langTotals, langs);
      }
      var totalWeight = Object.values(langTotals).reduce((a, b) => a + b, 0) || 1;
    }

    const languages = Object.entries(langTotals)
      .sort((a, b) => b[1] - a[1])
      .map(([name, weight]) => ({
        name,
        percent: (weight / totalWeight) * 100,
        raw: weight,
      }))
      .slice(0, topN);


    // PRs (search API)
    const prs = await gh(
      `https://api.github.com/search/issues?q=is:pr+author:${username}&per_page=1`
    );
    const mergedPRs = await gh(
      `https://api.github.com/search/issues?q=is:pr+author:${username}+is:merged&per_page=1`
    );
    const issues = await gh(
      `https://api.github.com/search/issues?q=is:issue+author:${username}&per_page=1`
    );
    const pullRequests = prs.total_count || 0;
    const closedPullRequests = pullRequests - mergedPRs.total_count || 0;

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

    const excludeDays = (req.query.exclude || "")
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    const { daily } = await getStreakStats(username, { excludeDays });

    const stats = {
      repositories_total: user.repositories_total || 0,
      public_repos: user.public_repos || 0,
      repositories: user.public_repos || 0,
      followers: user.followers || 0,
      stars,
      pullRequests,
      mergedPullRequests: mergedPRs.total_count || 0,
      closedPullRequests,
      contributions,
      languages,                    // [{name, percent, raw}]
      languageMethod: normalize ? "per-repo-average" : "bytes-total",
      reposConsidered: filteredRepos.length,
      recent,                 // [string]
      topRepoStars,
      avgStarsPerRepo,
      openPRs: 0, // placeholder
      totalContributions: daily.totalContributions,
      firstContribution: daily.firstContribution,
      currentStreak: daily.currentStreak,     
      longestStreak: daily.longestStreak,
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
