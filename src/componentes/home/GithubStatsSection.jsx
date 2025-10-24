// StatsSection.jsx (JSX puro)
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
  { title: "Overview", icon: BarChart3 },
  { title: "Activity", icon: Activity },
  { title: "Insights", icon: TrendingUp },
];

function Card({ children, className = "" }) {
  return (
    <div
      className={
        "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur p-5 " +
        className
      }
    >
      {/* fondo con grid sutil */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-15 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:18px_18px]" />
      {children}
    </div>
  );
}

function NumberTicker({ value }) {
  // versión simple sin libs: formatea con separador de miles
  return <span>{Intl.NumberFormat().format(value || 0)}</span>;
}

/* ----------------------- OVERVIEW ----------------------- */
function Overview({ data }) {
  const statsLeft = [
    {
      label: "Repositories",
      value: data?.repositories ?? 0,
      icon: Package,
      trend: data?.reposDelta ?? 0,
    },
    {
      label: "Stars",
      value: data?.stars ?? 0,
      icon: Star,
      trend: data?.starsDelta ?? 0,
    },
  ];
  const statsRight = [
    {
      label: "Contributions",
      value: data?.contributions ?? 0,
      icon: GitCommit,
      trend: data?.contribDelta ?? 0,
    },
    {
      label: "Pull Requests",
      value: data?.pullRequests ?? 0,
      icon: GitPullRequest,
      trend: data?.prsDelta ?? 0,
    },
  ];

  const languages = data?.languages || []; 

  const languageColors = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    HTML: "#e34c26",
    CSS: "#563d7c",
    C: "#555555",
    "C++": "#f34b7d",
    Java: "#b07219",
    Go: "#00ADD8",
    Rust: "#dea584",
    Shell: "#89e051",
    PHP: "#4F5D95",
    Ruby: "#701516",
    Swift: "#ffac45",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",
    Vue: "#41B883",
    React: "#61DAFB",
    Dockerfile: "#384d54",
    default: "#999999",
  };
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* columnas de stats */}
        <div className="space-y-4">
          {statsLeft.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card>
                <div className="mb-3 flex items-start justify-between">
                  <p className="text-xs font-mono tracking-wider text-white/60 uppercase">
                    {s.label}
                  </p>
                  <div className="rounded-lg border border-white/10 bg-white/10 p-2">
                    <s.icon className="h-4 w-4 text-white/60" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold">
                    <NumberTicker value={s.value} />
                  </p>
                  <span className="flex items-center text-xs font-medium text-emerald-400">
                    <ArrowUpRight className="h-3 w-3" />
                    {s.trend}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* centro vacío en tu referencia era el robot -> lo eliminamos */}

        <div className="space-y-4">
          {statsRight.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (i + 2) * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card>
                <div className="mb-3 flex items-start justify-between">
                  <p className="text-xs font-mono tracking-wider text-white/60 uppercase">
                    {s.label}
                  </p>
                  <div className="rounded-lg border border-white/10 bg-white/10 p-2">
                    <s.icon className="h-4 w-4 text-white/60" />
                  </div>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-bold">
                    <NumberTicker value={s.value} />
                  </p>
                  <span className="flex items-center text-xs font-medium text-emerald-400">
                    <ArrowUpRight className="h-3 w-3" />
                    {s.trend}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* followers + languages */}
      <div className="grid gap-4 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold">Community</h3>
              <div className="rounded-lg border border-white/10 bg-white/10 p-2">
                <Users className="h-4 w-4 text-white/60" />
              </div>
            </div>
            <div className="text-3xl font-bold">
              <NumberTicker value={data?.followers ?? 0} />
            </div>
            <p className="text-xs text-white/60">{t("home.github.followers")}</p>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Card>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">{t("home.github.languages")}</h3>
              <div className="rounded-lg border border-white/10 bg-white/10 p-2">
                <Code2 className="h-4 w-4 text-white/60" />
              </div>
            </div>

            <div className="space-y-3">
              {languages.length ? (
                languages.map((lang, i) => {
                  const languageColor = languageColors[lang.name] || languageColors.default;
                  return (
                    <div key={lang.name} className="space-y-1">
                      <div className="mb-1 flex items-center justify-between">
                        <span className="flex items-center gap-2 text-sm">
                          <span
                            className="h-2 w-2 rounded-full"
                            style={{
                              backgroundColor: languageColor
                            }}
                          />
                          {lang.name}
                        </span>
                        <span className="text-xs text-white/60">
                          {Math.round(lang.percent)}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${lang.percent}%` }}
                          transition={{ delay: i * 0.05, duration: 0.5 }}
                          className="h-1.5 rounded-full"
                          style={{
                            backgroundColor: languageColor
                          }}
                        />
                      </div>
                    </div>
                  );
            })
              ) : (
                <p className="text-sm text-white/60">No language data available</p>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

/* ----------------------- ACTIVITY ----------------------- */
function ActivityTab({ data }) {
  // Si tu backend aún no trae “por día”, generamos un arreglo simple
  // a partir de 'recent' como placeholder para el gráfico.
  const contributionData = useMemo(() => {
    const recent = Array.isArray(data?.recent) ? data.recent.slice(0, 30) : [];
    if (!recent.length) return [];
    return recent.map((_, idx) => ({
      day: idx + 1,
      commits: Math.max(1, Math.round(Math.random() * 5)), // placeholder
    }));
  }, [data]);

  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <Card className="overflow-x-auto">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">Activity Trend (Last 30 Items)</h3>
          <div className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1">
            <Zap className="h-3 w-3 text-emerald-400" />
            <span className="text-xs font-medium text-emerald-400">
              {contributionData.length ? "Active" : "Inactive"}
            </span>
          </div>
        </div>

        <div style={{ width: "100%", height: 220 }}>
          <ResponsiveContainer>
            <AreaChart data={contributionData}>
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4ade80" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#4ade80" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#262626" opacity={0.2} />
              <XAxis dataKey="day" stroke="#525252" fontSize={10} />
              <YAxis stroke="#525252" fontSize={10} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0a0a",
                  border: "1px solid #262626",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
                labelFormatter={(value) => `Day ${value}`}
              />
              <Area
                type="monotone"
                dataKey="commits"
                stroke="#4ade80"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card>
        <div className="mb-3 flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-white/60" />
          <h3 className="font-semibold">{t("home.github.events")}</h3>
        </div>
        <ul className="space-y-2 text-sm text-white/80">
          {(data?.recent || []).slice(0, 10).map((line, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1 text-white/50">•</span>
              <span className="truncate">{line}</span>
            </li>
          ))}
          {!data?.recent?.length && (
            <li className="text-white/50">{t("home.github.events_no_data")}</li>
          )}
        </ul>
      </Card>
    </div>
  );
}

/* ----------------------- INSIGHTS ----------------------- */
function Insights({ data }) {
  const totalRepos = Math.max(1, data?.repositories || 0);
  const original = Math.round(
    ((data?.reposConsidered || 0) / totalRepos) * 100
  );
  const forked = 100 - original;

  
  const streakCards = [
    { label: "Current Streak", value: data?.currentStreak.length || 0, unit: "days", icon: Flame , start: data?.currentStreak.start, end: data?.currentStreak.end},
    { label: "Longest Streak", value: data?.longestStreak.length || 0, unit: "days", icon: Award , start: data?.longestStreak.start, end: data?.longestStreak.end},
    { label: "Total Contributions", value: data?.totalContributions || 0, unit: "commits", icon: Target , start: data?.firstContribution, end: "Present"},
  ];

  const activityMetrics = [
    {
      label: "Pull Requests",
      closed: data?.pullRequests ? Math.round(((data.mergedPullRequests || 0) + (data.closedPullRequests || 0)) / (data.pullRequests || 1) * 100) : 0,
      total: data?.pullRequests || 0,
      color: "#22c55e",
      breakdown: `${data?.mergedPullRequests || 0} merged, ${data?.closedPullRequests || 0} closed`,
    },
    {
      label: "Issues",
      closed: data?.issues ? Math.round((data.closedIssues || 0) / (data.issues || 1) * 100) : 0,
      total: data?.issues || 0,
      color: "#f43f5e",
      breakdown: `${data?.openIssues || 0} open, ${data?.closedIssues || 0} closed`,
    },
  ];
  const { t } = useTranslation();
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {streakCards.map((c, i) => (
          <motion.div key={c.label} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }}>
            <Card>
              <div className="absolute right-3 top-3 rounded-lg border border-white/10 bg-white/10 p-2">
                <c.icon className="h-4 w-4 text-white/60" />
              </div>
              <p className="mt-6 text-xs text-white/60">{c.label}</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-2xl font-bold"><NumberTicker value={c.value} /></span>
                <span className="text-sm text-white/60">{c.unit}</span>
              </div>
              <p className="mt-2 text-xs text-white/50">
                {formatRange(c.start, c.end)}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="mb-4 font-semibold">Repository Breakdown</h3>
          <div className="mb-3 text-xs text-white/60">
            Total: <NumberTicker value={data?.repositories || 0} /> repositories
          </div>
          {[
            { label: "Original", value: original, color: "#3b82f6" },
            { label: "Forked", value: forked, color: "#22c55e" },
          ].map((r, i) => (
            <div key={r.label} className="mb-3">
              <div className="mb-1 flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: r.color }} />
                  <span className="text-white/80">{r.label}</span>
                </span>
                <span className="text-xs text-white/60">
                  <NumberTicker value={r.value} />%
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${r.value}%` }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="h-2 rounded-full"
                  style={{ backgroundColor: r.color }}
                />
              </div>
            </div>
          ))}
        </Card>

        <Card>
          <h3 className="mb-4 font-semibold">Activity Metrics</h3>
          {activityMetrics.map((m, i) => (
            <div key={m.label} className="mb-4">
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm text-white/80">{m.label}</span>
                <span className="text-xs text-white/60">
                  Total: <NumberTicker value={m.total} />
                </span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${m.closed}%` }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="h-2 rounded-full"
                  style={{ backgroundColor: m.color }}
                />
              </div>
              <div className="mt-1 text-xs text-white/60">{m.breakdown}</div>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
}

/* ----------------------- CONTENEDOR ----------------------- */
function Loading() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[300px] items-center justify-center text-white/70">
      {t("home.github.loading")}
    </div>
  );
}
function ErrorState({ message }) {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
      <AlertCircle className="mb-2 h-8 w-8 text-rose-400" />
      <p className="text-sm font-medium">{t("home.github.error_loading")}</p>
      <p className="mt-1 text-xs text-white/60">{message}</p>
    </div>
  );
}

export default function StatsSection() {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

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
    if (!data) return <ErrorState message="Sin datos" />;

    switch (tab) {
      case 0:
        return <Overview data={data} />;
      case 1:
        return <ActivityTab data={data} />;
      case 2:
        return <Insights data={data} />;
      default:
        return null;
    }
  };
  const { t } = useTranslation();
  return (
    <section
      id="stats"
      className="relative mx-auto w-full min-h-[75vh] px-4 py-24 text-white"
      style={{
        background:
          "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.06), transparent 40%), #0b0d12",
      }}
    >
      {/* grid de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:24px_24px]" />

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl text-pink-400 font-semibold">{t("home.github.title")}</h2>
        <p className="mt-2 text-gray-200">{t("home.github.subtitle")}</p>
      </motion.div>

      {/* Tabs */}
      <div className="mx-auto mb-4 flex max-w-3xl items-center justify-center gap-1 rounded-xl border border-pink-400/20 bg-white/5 p-1 text-xs sm:text-sm">
        {TABS.map((t, i) => (
          <button
            key={t.title}
            onClick={() => setTab(i)}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2 transition ${
              tab === i ? "bg-white/10" : "hover:bg-white/5 text-white/80"
            }`}
          >
            <t.icon className="h-4 w-4" />
            {t.title}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-pink-400/20 bg-white/5 p-4 md:p-6">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
