import { useState } from "react";
import { Menu, X, Github, Sun, Moon} from "lucide-react";
import { motion} from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { t, i18n } = useTranslation();

  const links = [
    { name: "common.nav.home", href: "#hero" },
    { name: "common.nav.projects", href: "#proyectos" },
    { name: "common.nav.skills", href: "#skills" },
    { name: "common.nav.contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a12]/80 backdrop-blur-md border-b border-pink-500/20">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-pink-400 tracking-widest pixel-font"
        >
          CG
        </motion.a>

        {/* Links desktop */}
        <div className="hidden md:flex space-x-8 text-sm font-mono">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-pink-400 transition-all"
            >
              {t(link.name)}
            </a>
          ))}
        </div>

        {/* Iconos desktop */}
        <div className="hidden md:flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1">
          <a href="https://github.com/cromx123" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <Github className="w-5 h-5" />
          </a>
          <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')} className="hover:text-pink-400">
            {i18n.language === 'en' ? 'ES' : 'EN'}
          </button>
          <button onClick={() => setDarkMode(darkMode === "dark" ? "light" : "dark")} className="hover:text-pink-400">
            {darkMode === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Menú móvil (overlay) */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-neutral-950/95 backdrop-blur-sm flex flex-col items-center justify-center text-center py-4 space-y-8 z-50 animate-fadeIn"
          >
            <button
              className="absolute top-6 right-6 p-2 rounded-lg hover:bg-neutral-800 transition"
              onClick={() => setOpen(false)}
            >
              <X className="w-6 h-6 text-gray-300" />
            </button>

            {/* Navegación móvil */}
            <ul className="space-y-6 text-lg font-mono">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="hover:text-pink-400 transition-all cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Barra inferior de iconos */}
            {/* <div className="mt-10 border-t border-neutral-800 w-3/4 pt-6 flex justify-around text-gray-400 text-sm">
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
                onClick={() => setDarkMode(!darkMode)}
                className="flex flex-col items-center gap-1 hover:text-pink-400"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
                Theme
              </button>
            </div> */}
          </motion.div>
        )}
    </nav>
  );
}
