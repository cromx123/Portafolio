// utils/formatDate.jsx
const fmt = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function formatDateISO(iso, presentIfToday = false) {
  if (!iso) return null;
  if (typeof iso === "string" && iso.toLowerCase() === "present") return "Present";

  // Esperado: YYYY-MM-DD
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return null;

  const date = new Date(Date.UTC(y, m - 1, d));

  if (presentIfToday) {
    const todayISO = new Date().toISOString().slice(0, 10);
    if (iso === todayISO) return "Present";
  }

  return fmt.format(date);
}

export function formatRange(start, end) {
  const s = formatDateISO(start);
  const e = end ? formatDateISO(end, true) : null;

  if (s && e) return `${s} - ${e}`;
  if (s && !e) return `${s} - Present`;
  return "No data available";
}
