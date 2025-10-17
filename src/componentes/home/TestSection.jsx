import { useState, useEffect, useRef } from "react";
import { Github, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "proyectos", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(navLinks[0].id);
  const { resolvedTheme, setTheme } = useTheme();
  const overlayRef = useRef(null);
  const activeRef = useRef(null);

  // Sincroniza la pestaña activa con el hash de la URL
  useEffect(() => {
    const updateFromHash = () => {
      const id = window.location.hash.replace("#", "") || navLinks[0].id;
      setActive(id); // <- JS puro (sin 'as' ni tipos)
    };
    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);
    return () => window.removeEventListener("hashchange", updateFromHash);
  }, []);

  // Calcula la clipPath para la pestaña activa (píldora)
  const updateClip = () => {
    const container = overlayRef.current;
    const target = activeRef.current;
    if (!container || !target) return;
    const cRect = container.getBoundingClientRect();
    const tRect = target.getBoundingClientRect();
    const pad = 6;
    const leftPct = ((tRect.left - cRect.left - pad) / cRect.width) * 100;
    const rightPct = ((cRect.right - tRect.right - pad) / cRect.width) * 100;
    container.style.clipPath = `inset(0 ${rightPct}% 0 ${leftPct}% round 9999px)`;
  };

  useEffect(() => {
    updateClip();
    window.addEventListener("resize", updateClip);
    return () => window.removeEventListener("resize", updateClip);
  }, [active]);

  const handleNavClick = (id) => {
    setActive(id);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0a0a12]/80 backdrop-blur border-b border-pink-500/20">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="#hero" onClick={() => handleNavClick("hero")} className="font-bold text-2xl text-pink-400">
          CG
        </a>

        {/* Enlaces de escritorio */}
        <div className="hidden md:flex relative items-center bg-white/5 rounded-full px-1 py-1 space-x-2">
          {/* overlay de resaltado */}
          <div ref={overlayRef} className="absolute inset-0 bg-pink-500/20 -z-10 rounded-full transition-all" />
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              ref={active === id ? activeRef : null}
              onClick={() => handleNavClick(id)}
              className={`relative z-10 rounded-full px-4 py-1.5 text-sm font-medium transition ${
                active === id ? "text-white" : "opacity-70 hover:opacity-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Iconos de escritorio */}
        <div className="hidden md:flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1">
          <a href="https://github.com/cromx123" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <Github className="w-5 h-5" />
          </a>
          <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="hover:text-pink-400">
            {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Botón móvil */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Panel móvil */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="md:hidden fixed inset-0 bg-neutral-950/95 backdrop-blur flex flex-col px-6 pt-24"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link, index) => {
                const activeItem = active === link.id;
                return (
                  <motion.button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`relative text-lg px-4 py-3 rounded-lg transition-colors ${
                      activeItem ? "bg-pink-500/10 font-semibold shadow" : "hover:bg-white/5 opacity-80 hover:opacity-100"
                    }`}
                  >
                    {activeItem && <span className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500" />}
                    {link.label}
                  </motion.button>
                );
              })}
            </div>
            <div className="mt-auto border-t border-white/10 pt-6 grid grid-cols-3 gap-2 text-center text-sm">
              <a
                href="https://github.com/cromx123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1 hover:text-pink-400"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex flex-col items-center gap-1 hover:text-pink-400"
              >
                {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                Theme
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
