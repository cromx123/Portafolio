import { useState, useEffect } from "react";
import { Menu, X, Github, Sun, Moon, Globe, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para aumentar el blur/opacidad
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "common.nav.home", href: "#hero" },
    { name: "common.nav.projects", href: "#proyectos" },
    { name: "common.nav.skills", href: "#skills" },
    { name: "common.nav.contact", href: "#contact" },
  ];

  // SVG de Rejilla para el fondo del menú móvil (mismo estilo que el Hero)
  const gridSvg = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='rgba(255, 0, 255, 0.1)' stroke-width='1'/%3E%3Cpath d='M0 40h40V0' fill='none' stroke='rgba(0, 255, 255, 0.05)' stroke-width='1'/%3E%3C/svg%3E`;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-[#0b0014]/90 backdrop-blur-md border-pink-500/20 shadow-[0_4px_30px_rgba(255,0,255,0.1)]" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:px-8">
        
        {/* --- LOGO TIPO TERMINAL --- */}
        <motion.a
          href="#hero"
          whileHover={{ scale: 1.05 }}
          className="group flex items-center gap-2"
        >
           {/* Icono decorativo */}
          <div className="p-1 rounded bg-gradient-to-br from-pink-600 to-purple-700 text-white shadow-[0_0_15px_rgba(255,0,255,0.5)]">
             <Terminal size={18} />
          </div>
          
          <div className="flex flex-col">
            <span className="text-xl font-bold text-white tracking-widest pixel-font group-hover:text-cyan-400 transition-colors">
              <span className="text-pink-500">[</span> C_G <span className="text-pink-500">]</span>
            </span>
          </div>
        </motion.a>

        {/* --- LINKS DESKTOP (HUD STYLE) --- */}
        <div className="hidden md:flex items-center space-x-1">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative px-4 py-2 text-sm font-mono text-gray-300 hover:text-white transition-all group overflow-hidden"
            >
              {/* Efecto de fondo al hover */}
              <span className="absolute inset-0 bg-pink-500/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left skew-x-12"></span>
              
              {/* Texto */}
              <span className="relative z-10 flex items-center gap-2">
                <span className="text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity text-[10px]">{">"}</span>
                {t(link.name)}
              </span>
              
              {/* Línea inferior estilo tech */}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </a>
          ))}
        </div>

        {/* --- PANEL DE CONTROL DERECHO --- */}
        <div className="hidden md:flex items-center gap-3">
            {/* Indicador de sistema online */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-green-400 shadow-[inset_0_0_10px_rgba(0,255,0,0.1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                SYS: ONLINE
            </div>

            {/* Separador vertical */}
            <div className="h-6 w-[1px] bg-white/20"></div>

            {/* Iconos de acción */}
            <div className="flex items-center gap-2">
                <a href="https://github.com/cromx123" target="_blank" rel="noopener noreferrer" 
                   className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-md transition-all">
                    <Github className="w-5 h-5" />
                </a>
                
                <button 
                    onClick={() => i18n.changeLanguage(i18n.language.slice(0, 2) === 'en' ? 'es' : 'en')} 
                    className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-950/30 rounded-md transition-all font-mono text-xs border border-transparent hover:border-cyan-500/30"
                >
                    {i18n.language.slice(0, 2) === 'en' ? 'ES' : 'EN'}
                </button>

                <button 
                    onClick={() => setDarkMode(darkMode === "dark" ? "light" : "dark")} 
                    className="p-2 text-gray-400 hover:text-yellow-300 hover:bg-yellow-900/20 rounded-md transition-all"
                >
                    {darkMode === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>
        </div>

        {/* --- BOTÓN MENÚ MÓVIL --- */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 text-pink-500 hover:bg-pink-500/10 rounded-lg transition-colors border border-pink-500/20"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* --- MENÚ MÓVIL (FULL SCREEN SYSTEM OVERLAY) --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-[#05000a] text-white flex flex-col"
          >
            {/* Fondo de rejilla en el menú móvil */}
            <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: `url("${gridSvg}")` }} 
            />
            
            {/* Header del menú móvil */}
            <div className="flex justify-between items-center p-6 border-b border-white/10 bg-black/20 backdrop-blur-sm relative z-10">
                <span className="font-mono text-xs text-cyan-500"> // NAVIGATION_SYSTEM</span>
                <button
                    className="p-2 rounded-lg bg-pink-500/10 text-pink-500 border border-pink-500/20 hover:bg-pink-500 hover:text-white transition-all"
                    onClick={() => setOpen(false)}
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Links del menú móvil */}
            <div className="flex-1 flex flex-col justify-center items-center gap-8 relative z-10 p-4">
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-3xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 hover:from-pink-400 hover:to-cyan-400 transition-all tracking-tighter"
                >
                  {t(link.name)}
                </motion.a>
              ))}
            </div>

            {/* Footer del menú móvil (Redes y controles) */}
            <div className="p-8 border-t border-white/10 bg-black/40 backdrop-blur-sm relative z-10">
                <div className="flex justify-center gap-6">
                     <a href="https://github.com/cromx123" className="flex flex-col items-center gap-2 text-gray-400 hover:text-white">
                        <div className="p-3 rounded-full bg-white/5 border border-white/10">
                             <Github className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono">Github</span>
                     </a>
                     <button onClick={() => setDarkMode(!darkMode)} className="flex flex-col items-center gap-2 text-gray-400 hover:text-white">
                        <div className="p-3 rounded-full bg-white/5 border border-white/10">
                             {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </div>
                        <span className="text-xs font-mono">Theme</span>
                     </button>
                     <button onClick={() => i18n.changeLanguage(i18n.language.slice(0, 2) === 'en' ? 'es' : 'en')} className="flex flex-col items-center gap-2 text-gray-400 hover:text-white">
                        <div className="p-3 rounded-full bg-white/5 border border-white/10">
                             <Globe className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono">Lang</span>
                     </button>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}