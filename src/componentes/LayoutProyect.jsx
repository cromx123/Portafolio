import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight, ExternalLink, Terminal, Cpu, Database, Layers } from "lucide-react";
import GlowBackground from "./Detalles/glow";
import FooterSection from "../componentes/home/FooterSection";

// Componente interno para tarjetas estilo HUD (Reutilizable localmente)
const CyberPanel = ({ children, title, icon: Icon, className = "" }) => (
  <div className={`relative bg-[#0a0a0a]/80 border border-white/10 p-6 backdrop-blur-sm group ${className}`}>
    {/* Esquinas decorativas */}
    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-pink-500/50 group-hover:border-pink-400 transition-colors"></div>
    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-cyan-500/50 group-hover:border-cyan-400 transition-colors"></div>
    
    {/* Header del Panel */}
    {title && (
      <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-2">
        {Icon && <Icon className="w-4 h-4 text-pink-500" />}
        <h3 className="text-sm font-bold tracking-widest text-gray-200 uppercase font-mono">
          {title}
        </h3>
      </div>
    )}
    {children}
  </div>
);

export default function ProyectoLayout({
  title,
  image,
  descripcion,
  detalle,
  habilidades,
  detallep,
  extraButton,
  rutaAnterior,
  rutaSiguiente,
}) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language.slice(0, 2);
  const currentDesc = descripcion[lang];
  const currentDetalle = detalle[lang];

  return (
    <GlowBackground>
      {/* HEADER TIPO TERMINAL */}
      <motion.header
        className="relative border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md pt-24 pb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
           {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-500/60 mb-4 uppercase tracking-wider">
            <Link to="/" className="hover:text-cyan-400 transition">root</Link>
            <span>/</span>
            <Link to="/" className="hover:text-cyan-400 transition">projects</Link>
            <span>/</span>
            <span className="text-pink-500">{title.toLowerCase().replace(/\s+/g, '_')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white pixel-font uppercase tracking-tight">
            <span className="text-pink-500 mr-2 opacity-50">{">"}</span>
            {title}
            <span className="ml-2 inline-block w-3 h-3 bg-pink-500 animate-pulse"></span>
          </h1>
        </div>
      </motion.header>

      {/* BODY */}
      <motion.main
        className="max-w-6xl mx-auto py-12 px-6 md:px-12 space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* IMAGEN PRINCIPAL (MONITOR STYLE) */}
        <motion.div
          className="relative rounded-sm border border-white/10 bg-black overflow-hidden group"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
           {/* Imagen */}
          <img 
            src={image} 
            alt={title} 
            className="w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
          />
          
          {/* Scanlines Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,20,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-60"></div>
          
          {/* Marco decorativo */}
          <div className="absolute top-4 left-4 px-2 py-1 bg-black/80 border border-pink-500/30 text-[10px] text-pink-500 font-mono">
             IMG_SOURCE: LIVE_RENDER
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* COLUMNA IZQUIERDA: CONTENIDO */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Descripción */}
            <CyberPanel title={t("projects.description") || "SYSTEM_DESCRIPTION"} icon={Terminal}>
              <p className="text-gray-300 leading-relaxed font-mono text-sm">
                {currentDesc}
              </p>
            </CyberPanel>

            {/* Detalles Técnicos */}
            <CyberPanel title={t("projects.details") || "DEV_LOGS"} icon={Cpu}>
              <p className="text-gray-300 leading-relaxed font-mono text-sm">
                {currentDetalle}
              </p>
            </CyberPanel>

            {/* Habilidades (Grid de Items) */}
            <CyberPanel title={t("projects.skills") || "INSTALLED_MODULES"} icon={Layers}>
              <div className="flex flex-wrap gap-3">
                {habilidades.map(([alt, src]) => (
                  <div 
                    key={alt} 
                    className="group relative flex items-center justify-center p-3 bg-white/5 border border-white/10 rounded-sm hover:bg-pink-500/10 hover:border-pink-500/40 transition-all cursor-help"
                    title={alt}
                  >
                    <img
                      src={src}
                      alt={alt}
                      className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                    />
                    {/* Tooltip simple */}
                    <span className="absolute -bottom-8 bg-black border border-white/20 text-[10px] px-2 py-1 text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                        {alt}
                    </span>
                  </div>
                ))}
              </div>

              {extraButton && (
                <div className="mt-6 pt-4 border-t border-dashed border-white/10">
                    <a
                    href={extraButton.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm bg-pink-600/20 text-pink-400 border border-pink-500/50 px-6 py-3 hover:bg-pink-500 hover:text-white transition-all duration-300 group"
                    >
                    {extraButton.text}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
              )}
            </CyberPanel>
          </div>

          {/* COLUMNA DERECHA: METADATA (SIDEBAR) */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
             <CyberPanel title={t("projects.info.title") || "PROJECT_METADATA"} icon={Database} className="sticky top-24">
                <ul className="space-y-4 font-mono text-xs">
                    {[
                        { label: t("projects.info.client") || "CLIENT", value: detallep.cliente },
                        { label: t("projects.info.role") || "ROLE", value: detallep.rol },
                        { label: t("projects.info.duration") || "DURATION", value: detallep.duration },
                        { label: t("projects.info.completed") || "STATUS", value: detallep.completado, highlight: true },
                    ].map((item, i) => (
                        <li key={i} className="flex flex-col gap-1 border-b border-white/5 pb-2 last:border-0">
                            <span className="text-cyan-500/70">{item.label}</span>
                            <span className={`text-gray-200 ${item.highlight ? 'text-green-400' : ''}`}>
                                {item.value}
                            </span>
                        </li>
                    ))}
                </ul>
                
                <div className="mt-6 p-3 bg-cyan-900/10 border border-cyan-500/20 text-[10px] text-cyan-400 font-mono text-center animate-pulse">
                    /// DATA_ENCRYPTED ///
                </div>
             </CyberPanel>
          </motion.aside>
        </div>

        {/* NAVEGACIÓN INFERIOR */}
        <div className="flex justify-between items-center pt-12 border-t border-white/10 font-mono">
          <button
            onClick={() => navigate(rutaAnterior)}
            className="group flex items-center gap-3 text-gray-500 hover:text-cyan-400 transition-colors"
          >
            <div className="p-2 border border-white/10 group-hover:border-cyan-400 rounded-sm transition-colors">
                <ArrowLeft className="w-5 h-5" />
            </div>
            <div className="text-left hidden sm:block">
                <div className="text-[10px] uppercase opacity-50">Previous_Data</div>
                <div className="text-sm font-bold">{t("projects.previous") || "PREV"}</div>
            </div>
          </button>

          <span className="hidden sm:block text-xs tracking-[0.5em] text-gray-700 uppercase">
             // END_OF_FILE //
          </span>

          <button
            onClick={() => navigate(rutaSiguiente)}
            className="group flex items-center gap-3 text-gray-500 hover:text-pink-400 transition-colors text-right"
          >
             <div className="text-right hidden sm:block">
                <div className="text-[10px] uppercase opacity-50">Next_Data</div>
                <div className="text-sm font-bold">{t("projects.next") || "NEXT"}</div>
            </div>
            <div className="p-2 border border-white/10 group-hover:border-pink-400 rounded-sm transition-colors">
                <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </div>

        {/* REDES SOCIALES (SIMPLIFICADO PARA NO REPETIR TANTO CÓDIGO) */}
        {/* Nota: Idealmente deberías reutilizar el componente SocialSection aquí si quieres el bloque completo, 
            pero para mantener la estructura visual simple al final del proyecto: */}
        <div className="mt-20 flex justify-center gap-8 opacity-50 hover:opacity-100 transition-opacity">
            {[
                ["GH", "https://github.com/cromx123"],
                ["LI", "https://www.linkedin.com/in/cristobal-gallardo-cromxdev/"],
            ].map(([label, url]) => (
                <a key={label} href={url} target="_blank" className="text-xs font-mono border border-white/20 px-3 py-1 hover:bg-white/10 hover:text-white text-gray-400">
                    {label}
                </a>
            ))}
        </div>

      </motion.main>

      <FooterSection />
    </GlowBackground>
  );
}