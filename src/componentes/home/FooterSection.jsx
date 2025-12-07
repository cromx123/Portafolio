import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { ArrowUp, Cpu, Zap, Activity } from "lucide-react";

export default function FooterSection() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG de Rejilla (Versión más oscura para el footer)
  const gridSvg = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='rgba(255, 255, 255, 0.02)' stroke-width='1'/%3E%3C/svg%3E`;

  return (
    <footer className="relative bg-[#05000a] border-t border-white/10 text-gray-400 font-mono text-sm overflow-hidden pt-12 pb-6">
      
      {/* Fondo Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: `url("${gridSvg}")` }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Botón Scroll Top */}
        <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="mb-8 p-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-900/20 group transition-all"
        >
            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
        </motion.button>

        {/* Logo / Copyright */}
        <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white pixel-font tracking-wider mb-2">
                <span className="text-pink-500">[</span> C_G <span className="text-pink-500">]</span>
            </h3>
            <p className="text-xs text-gray-500">
             © {new Date().getFullYear()} {t("home.footer.description")}
            </p>
        </div>

        {/* Quote con estilo Neon */}
        <div className="relative mb-12 px-6 py-2 border-l-2 border-r-2 border-pink-500/30 bg-pink-500/5">
            <p className="text-pink-400 italic tracking-wide text-center">
                "Stay retro. Build the future."
            </p>
        </div>

        {/* Barra de Estado del Sistema (Simulación Técnica) */}
        <div className="w-full border-t border-white/5 pt-6 mt-6 flex flex-wrap justify-center md:justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-wider">
            
            {/* Izquierda: Info básica */}
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                    SYSTEM: ONLINE
                </span>
                <span className="hidden md:inline">VERSION: 2.4.0-BETA</span>
            </div>

            {/* Centro: Decoración */}
            <div className="hidden md:flex items-center gap-1 opacity-30">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-8 h-1 bg-white/20 skew-x-12"></div>
                ))}
            </div>

            {/* Derecha: Métricas Simuladas */}
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1" title="Tech Stack">
                    <Cpu className="w-3 h-3" /> REACT_ENGINE
                </span>
                <span className="flex items-center gap-1 text-cyan-500/70" title="Render Speed">
                    <Zap className="w-3 h-3" /> LATENCY: LOW
                </span>
                <span className="flex items-center gap-1 text-pink-500/70" title="Heartbeat">
                    <Activity className="w-3 h-3" /> HRT_BT: OK
                </span>
            </div>
        </div>

      </div>
    </footer>
  );
}