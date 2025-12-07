import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  Activity,
  TrendingUp,
  Star,
  Users,
  GitPullRequest,
  GitCommit,
  Package,
  ArrowUpRight,
  Code2,
  Flame,
  Award,
  Target,
  Zap,
  AlertCircle,
  CalendarDays,
  Terminal
} from "lucide-react";
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
} from "recharts";

import { formatRange } from "../../utils/formatDate.jsx";

const ENDPOINT =
  process.env.REACT_APP_GITHUB_STATS_URL ||
  process.env.NEXT_PUBLIC_GITHUB_STATS_URL ||
  "http://localhost:3002/api/github";

const TABS = [
  { title: "SYSTEM_OVERVIEW", icon: BarChart3 },
  { title: "NET_ACTIVITY", icon: Activity },
  { title: "DATA_INSIGHTS", icon: TrendingUp },
];

// --- COMPONENTE DE TARJETA ESTILO HUD ---
function CyberCard({ children, className = "", noHover = false }) {
  return (
    <div
      className={
        "relative overflow-hidden border border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm p-5 transition-all duration-300 group " +
        (noHover ? "" : "hover:border-cyan-500/30 hover:bg-[#0f0f16] ") +
        className
      }
    >
      {/* Esquinas decorativas (Brackets) */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-cyan-400 transition-colors"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-cyan-400 transition-colors"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-cyan-400 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-cyan-400 transition-colors"></div>

      {/* Grid sutil interno */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] [background-size:10px_10px]" />
      
      {children}
    </div>
  );
}

function NumberTicker({ value }) {
  return <span className="font-mono tracking-tighter">{Intl.NumberFormat().format(value || 0)}</span>;
}

/* ----------------------- OVERVIEW ----------------------- */
function Overview({ data }) {
  const statsLeft = [
    { label: "REPOSITORIES", value: data?.repositories ?? 0, icon: Package, trend: data?.reposDelta ?? 0 },
    { label: "STARS_EARNED", value: data?.stars ?? 0, icon: Star, trend: data?.starsDelta ?? 0 },
  ];
  const statsRight = [
    { label: "CONTRIBUTIONS", value: data?.contributions ?? 0, icon: GitCommit, trend: data?.contribDelta ?? 0 },
    { label: "PULL_REQUESTS", value: data?.pullRequests ?? 0, icon: GitPullRequest, trend: data?.prsDelta ?? 0 },
  ];

  const languages = data?.languages || []; 
  // Mantenemos colores originales para legibilidad, pero el resto es cyberpunk
  const languageColors = {
    TypeScript: "#3178c6", JavaScript: "#f1e05a", Python: "#3572A5", HTML: "#e34c26", CSS: "#563d7c",
    C: "#555555", "C++": "#f34b7d", Java: "#b07219", Go: "#00ADD8", Rust: "#dea584", Shell: "#89e051",
    PHP: "#4F5D95", Ruby: "#701516", Swift: "#ffac45", Kotlin: "#A97BFF", Dart: "#00B4AB",
    Vue: "#41B883", React: "#61DAFB", Dockerfile: "#384d54", default: "#999999",
  };

  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Columnas Stats */}
        <div className="space-y-4">
          {statsLeft.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
              <CyberCard>
                <div className="mb-3 flex items-start justify-between">
                  <p className="text-[10px] font-mono tracking-widest text-cyan-500/70 uppercase">
                    {s.label}
                  </p>
                  <div className="p-1.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    <s.icon className="h-3 w-3 text-cyan-400" />
                  </div>
                </div>
                <div className="flex items-baseline gap-3">
                  <p className="text-3xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                    <NumberTicker value={s.value} />
                  </p>
                  <span className="flex items-center text-xs font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +{s.trend}
                  </span>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          {statsRight.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: (i + 2) * 0.1 }}>
              <CyberCard>
                <div className="mb-3 flex items-start justify-between">
                  <p className="text-[10px] font-mono tracking-widest text-pink-500/70 uppercase">
                    {s.label}
                  </p>
                  <div className="p-1.5 rounded bg-pink-500/10 border border-pink-500/20">
                    <s.icon className="h-3 w-3 text-pink-400" />
                  </div>
                </div>
                <div className="flex items-baseline gap-3">
                  <p className="text-3xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                    <NumberTicker value={s.value} />
                  </p>
                  <span className="flex items-center text-xs font-mono text-emerald-400 bg-emerald-500/10 px-1 rounded">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +{s.trend}
                  </span>
                </div>
              </CyberCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Followers + Languages */}
      <div className="grid gap-4 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <CyberCard>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-bold text-gray-200 text-sm tracking-wide">COMMUNITY_NODES</h3>
              <Users className="h-4 w-4 text-purple-400" />
            </div>
            <div className="text-4xl font-bold font-mono text-white">
              <NumberTicker value={data?.followers ?? 0} />
            </div>
            <p className="text-xs text-gray-500 font-mono mt-1">Total Followers</p>
          </CyberCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <CyberCard>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-bold text-gray-200 text-sm tracking-wide">LANGUAGE_DISTRIBUTION</h3>
              <Code2 className="h-4 w-4 text-gray-400" />
            </div>

            <div className="space-y-3">
              {languages.length ? (
                languages.map((lang, i) => {
                  const languageColor = languageColors[lang.name] || languageColors.default;
                  return (
                    <div key={lang.name} className="space-y-1">
                      <div className="mb-1 flex items-center justify-between text-xs font-mono">
                        <span className="flex items-center gap-2 text-gray-300">
                          <span className="h-1.5 w-1.5 rounded-sm" style={{ backgroundColor: languageColor }} />
                          {lang.name}
                        </span>
                        <span className="text-gray-500">{Math.round(lang.percent)}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/5 border border-white/5 rounded-sm overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.percent}%` }}
                          transition={{ delay: i * 0.05, duration: 0.5 }}
                          className="h-full"
                          style={{ backgroundColor: languageColor, boxShadow: `0 0 5px ${languageColor}` }}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-sm text-gray-500 font-mono">NO_DATA_AVAILABLE</p>
              )}
            </div>
          </CyberCard>
        </motion.div>
      </div>
    </div>
  );
}

/* ----------------------- ACTIVITY ----------------------- */
function ActivityTab({ data }) {
  const contributionData = useMemo(() => {
    const recent = Array.isArray(data?.recent) ? data.recent.slice(0, 30) : [];
    if (!recent.length) return [];
    return recent.map((_, idx) => ({
      day: idx + 1,
      commits: Math.max(1, Math.round(Math.random() * 5)),
    }));
  }, [data]);

  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <CyberCard className="overflow-x-auto">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="font-bold text-sm tracking-widest text-cyan-400 uppercase">
             // Network_Traffic
          </h3>
          <div className="flex items-center gap-2 px-2 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded text-[10px] font-mono text-cyan-400">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
            LIVE_FEED
          </div>
        </div>

        <div style={{ width: "100%", height: 220 }}>
          <ResponsiveContainer>
            <AreaChart data={contributionData}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" opacity={0.4} vertical={false} />
              <XAxis dataKey="day" stroke="#525252" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="#525252" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#050505",
                  border: "1px solid #333",
                  borderRadius: "4px",
                  color: "#fff",
                  fontSize: "12px",
                  fontFamily: "monospace"
                }}
                itemStyle={{ color: "#22d3ee" }}
                cursor={{ stroke: '#22d3ee', strokeWidth: 1, strokeDasharray: '4 4' }}
                labelFormatter={(value) => `CYCLE_${value}`}
              />
              <Area
                type="monotone"
                dataKey="commits"
                stroke="#22d3ee"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CyberCard>

      <CyberCard>
        <div className="mb-4 flex items-center gap-2 border-b border-white/5 pb-2">
          <Terminal className="h-4 w-4 text-pink-500" />
          <h3 className="font-mono text-sm font-bold text-gray-300">EVENT_LOG</h3>
        </div>
        <ul className="space-y-3 font-mono text-xs text-gray-400">
          {(data?.recent || []).slice(0, 10).map((line, i) => (
            <li key={i} className="flex items-start gap-3 group">
              <span className="mt-0.5 text-pink-500/50 group-hover:text-pink-400">{">"}</span>
              <span className="truncate group-hover:text-white transition-colors">{line}</span>
            </li>
          ))}
          {!data?.recent?.length && (
            <li className="text-gray-600 italic">// No recent events found in buffer</li>
          )}
        </ul>
      </CyberCard>
    </div>
  );
}

/* ----------------------- INSIGHTS ----------------------- */
function Insights({ data }) {
  const totalRepos = Math.max(1, data?.repositories || 0);
  const original = Math.round(((data?.reposConsidered || 0) / totalRepos) * 100);
  const forked = 100 - original;

  const streakCards = [
    { label: "CURRENT_STREAK", value: data?.currentStreak.length || 0, unit: "DAYS", icon: Flame , start: data?.currentStreak.start, end: data?.currentStreak.end},
    { label: "MAX_STREAK", value: data?.longestStreak.length || 0, unit: "DAYS", icon: Award , start: data?.longestStreak.start, end: data?.longestStreak.end},
    { label: "TOTAL_CONTRIBS", value: data?.totalContributions || 0, unit: "CMTS", icon: Target , start: data?.firstContribution, end: "NOW"},
  ];

  const activityMetrics = [
    {
      label: "Pull Requests", closed: data?.pullRequests ? Math.round(((data.mergedPullRequests || 0) + (data.closedPullRequests || 0)) / (data.pullRequests || 1) * 100) : 0,
      total: data?.pullRequests || 0, color: "#22c55e",
      breakdown: `${data?.mergedPullRequests || 0} merged / ${data?.closedPullRequests || 0} closed`,
    },
    {
      label: "Issues", closed: data?.issues ? Math.round((data.closedIssues || 0) / (data.issues || 1) * 100) : 0,
      total: data?.issues || 0, color: "#f43f5e",
      breakdown: `${data?.openIssues || 0} open / ${data?.closedIssues || 0} closed`,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {streakCards.map((c, i) => (
          <motion.div key={c.label} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}>
            <CyberCard>
              <div className="flex justify-between items-start mb-4">
                  <p className="text-[10px] text-gray-500 font-mono">{c.label}</p>
                  <c.icon className="h-4 w-4 text-pink-500" />
              </div>
              
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white"><NumberTicker value={c.value} /></span>
                <span className="text-[10px] text-gray-500">{c.unit}</span>
              </div>
              <p className="mt-2 text-[10px] text-gray-600 font-mono border-t border-white/5 pt-2">
                {formatRange(c.start, c.end)}
              </p>
            </CyberCard>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <CyberCard>
          <h3 className="mb-6 font-bold text-sm text-gray-200 tracking-wide">REPO_ALLOCATION</h3>
          {[
            { label: "Original Work", value: original, color: "#3b82f6" },
            { label: "Forked / Cloned", value: forked, color: "#22c55e" },
          ].map((r, i) => (
            <div key={r.label} className="mb-4">
              <div className="mb-1 flex items-center justify-between font-mono text-xs">
                <span className="text-gray-400">{r.label}</span>
                <span className="text-white"><NumberTicker value={r.value} />%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-sm overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${r.value}%` }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="h-full rounded-sm"
                  style={{ backgroundColor: r.color, boxShadow: `0 0 8px ${r.color}` }}
                />
              </div>
            </div>
          ))}
        </CyberCard>

        <CyberCard>
          <h3 className="mb-6 font-bold text-sm text-gray-200 tracking-wide">MAINTENANCE_METRICS</h3>
          {activityMetrics.map((m, i) => (
            <div key={m.label} className="mb-5">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">{m.label}</span>
                <span className="text-xs text-gray-500">
                  Total: <NumberTicker value={m.total} />
                </span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-sm overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${m.closed}%` }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="h-full rounded-sm"
                  style={{ backgroundColor: m.color }}
                />
              </div>
              <div className="mt-1 text-[10px] text-gray-600 font-mono text-right">{m.breakdown}</div>
            </div>
          ))}
        </CyberCard>
      </div>
    </div>
  );
}

/* ----------------------- CONTENEDOR ----------------------- */
function Loading() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center text-cyan-500/50 font-mono text-sm animate-pulse">
      <Zap className="w-8 h-8 mb-4 animate-bounce" />
      {t("home.github.loading")}
      <span className="text-xs mt-2 text-cyan-500/30">ESTABLISHING_UPLINK...</span>
    </div>
  );
}
function ErrorState({ message }) {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
      <AlertCircle className="mb-2 h-8 w-8 text-rose-500" />
      <p className="text-sm font-bold text-rose-400 font-mono">CONNECTION_FAILED</p>
      <p className="mt-1 text-xs text-rose-900/60 font-mono uppercase">{message}</p>
    </div>
  );
}

export default function StatsSection() {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  // SVG de Rejilla (Mismo que en los otros componentes)
  const gridSvg = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='rgba(34, 211, 238, 0.03)' stroke-width='1'/%3E%3C/svg%3E`;

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const r = await fetch(ENDPOINT);
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const json = await r.json();
        if (alive) setData(json);
      } catch (e) {
        setErr(e.message || "Unknown error");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => {
      alive = false;
    };
  }, []);

  const renderTab = () => {
    if (loading) return <Loading />;
    if (err) return <ErrorState message={err} />;
    if (!data) return <ErrorState message="NO_DATA_RECEIVED" />;

    switch (tab) {
      case 0: return <Overview data={data} />;
      case 1: return <ActivityTab data={data} />;
      case 2: return <Insights data={data} />;
      default: return null;
    }
  };
  
  const { t } = useTranslation();

  return (
    <section
      id="stats"
      className="relative mx-auto w-full min-h-[75vh] px-4 py-24 text-white overflow-hidden bg-[#0b0014]"
    >
      {/* Grid de fondo unificado */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: `url("${gridSvg}")` }} 
      />
      
      {/* Glow ambiental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] pointer-events-none" />

      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative z-10 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 tracking-widest pixel-font mb-4 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
           {t("home.github.title")}
        </h2>
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-500/60 uppercase tracking-[0.2em]">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e]"></span>
             System_Status: Monitoring
        </div>
      </motion.div>

      {/* Tabs Estilo Control Panel */}
      <div className="relative z-10 mx-auto mb-8 flex max-w-3xl items-center justify-center gap-2 p-1 text-xs sm:text-sm">
        {TABS.map((t, i) => (
          <button
            key={t.title}
            onClick={() => setTab(i)}
            className={`
              relative flex flex-1 items-center justify-center gap-2 px-4 py-3 transition-all duration-300 font-mono uppercase tracking-wide
              ${tab === i 
                ? "text-cyan-400 bg-cyan-950/30 border-b-2 border-cyan-400" 
                : "text-gray-500 hover:text-gray-300 hover:bg-white/5 border-b-2 border-transparent"
              }
            `}
          >
            <t.icon className={`h-4 w-4 ${tab === i ? "drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" : ""}`} />
            <span className="hidden sm:inline">{t.title}</span>
          </button>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
            transition={{ duration: 0.2 }}
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}