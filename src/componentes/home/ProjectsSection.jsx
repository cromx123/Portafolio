import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { ExternalLink, FolderOpen, ArrowUpRight } from "lucide-react";

export default function ProjectsSection({ projects, onNavigate }) {
  const { t } = useTranslation();

  // Reutilizamos el patrón de rejilla sutil para el fondo
  const gridSvg = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='rgba(236, 72, 153, 0.05)' stroke-width='1'/%3E%3C/svg%3E`;

  return (
    <section
      id="proyectos"
      className="relative min-h-screen py-24 bg-[#0b0014] text-gray-300 font-mono overflow-hidden"
    >
      {/* Fondo de rejilla estática */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: `url("${gridSvg}")` }} 
      />

      {/* Glow ambiental */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-pink-600/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header de Sección */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 tracking-widest pixel-font mb-4 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]">
            {t("home.projects.title")}
          </h2>
          <div className="flex items-center justify-center gap-2 text-xs text-cyan-500/60 tracking-[0.5em] uppercase">
             <span className="w-10 h-[1px] bg-cyan-500/30"></span>
             Directory_Root / Portfolio
             <span className="w-10 h-[1px] bg-cyan-500/30"></span>
          </div>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ id, img, title, tag, desc, external, url }, index) => (
            <motion.div
              key={id}
              onClick={() => external ? window.open(url, "_blank") : onNavigate(`/proyecto/${id}`)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              {/* --- TARJETA ESTILO HUD --- */}
              <div className="h-full bg-[#12051c]/80 backdrop-blur-sm border border-white/5 p-4 transition-all duration-300 group-hover:border-pink-500/30 group-hover:bg-[#1a0b25]">
                
                {/* Esquinas decorativas Cyberpunk */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500/50 group-hover:border-cyan-400 group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-pink-500/50 group-hover:border-pink-400 group-hover:w-6 group-hover:h-6 transition-all duration-300"></div>

                {/* Header de la tarjeta (Número y Tag) */}
                <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-2xl font-bold text-white/10 group-hover:text-pink-500/20 transition-colors select-none">
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="px-2 py-1 text-[10px] uppercase tracking-wider border border-cyan-500/20 text-cyan-400 bg-cyan-500/5 rounded-sm">
                        {tag || "DEV_MODULE"}
                    </span>
                </div>

                {/* Contenedor de Imagen (Screen Effect) */}
                <div className="relative h-48 w-full mb-5 overflow-hidden border border-white/5 bg-black group-hover:border-pink-500/30 transition-colors">
                    {/* Imagen con filtro inicial */}
                    <img
                        src={img}
                        alt={title}
                        className="object-cover w-full h-full opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                    />
                    
                    {/* Scanlines Overlay (Efecto monitor CRT) */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,20,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-40"></div>
                    
                    {/* Overlay de color al hover (Flash) */}
                    <div className="absolute inset-0 bg-pink-500/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Contenido de texto */}
                <div className="space-y-2 relative z-20">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2 group-hover:text-pink-400 transition-colors">
                        {title}
                        {external ? <ArrowUpRight className="w-4 h-4 opacity-50" /> : null}
                    </h3>
                    
                    <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-white/10 pl-3 group-hover:border-cyan-500/50 transition-colors">
                        {desc || "System data corrupted. Description not found. Click to retrieve manually."}
                    </p>
                </div>

                {/* Botón simulado en la parte inferior */}
                <div className="mt-4 pt-4 border-t border-dashed border-white/10 flex justify-end">
                    <span className="text-[10px] flex items-center gap-1 text-gray-500 group-hover:text-white transition-colors">
                        {external ? "ACCESS_URL" : "EXECUTE_VIEW"} 
                        <span className="animate-pulse bg-green-500 w-1.5 h-1.5 rounded-full inline-block ml-1"></span>
                    </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}