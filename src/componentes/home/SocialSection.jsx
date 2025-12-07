import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Facebook, Instagram, ExternalLink, Wifi } from "lucide-react";

export default function SocialSection() {
  const { t } = useTranslation();

  // Configuración de redes con colores específicos para el hover
  const socialLinks = [
    { 
      name: "Instagram", 
      url: "https://www.instagram.com/_cris.ogc", 
      icon: Instagram, 
      color: "hover:border-pink-500 hover:text-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]",
      status: "FEED_ACTIVE"
    },
    { 
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/cristobal-gallardo-cromxdev/", 
      icon: Linkedin, 
      color: "hover:border-blue-500 hover:text-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
      status: "PRO_NETWORK"
    },
    { 
      name: "GitHub", 
      url: "https://github.com/cromx123", 
      icon: Github, 
      color: "hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]",
      status: "REPO_ACCESS"
    },
    { 
      name: "Facebook", 
      url: "https://www.facebook.com/cristobal.o.gallardo", 
      icon: Facebook, 
      color: "hover:border-blue-600 hover:text-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]",
      status: "SOCIAL_LINK"
    },
  ];

  // SVG de Rejilla
  const gridSvg = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='rgba(255, 255, 255, 0.03)' stroke-width='1'/%3E%3C/svg%3E`;

  return (
    <section className="relative py-20 bg-[#0a0a12] overflow-hidden border-t border-white/5">
      {/* Fondo Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: `url("${gridSvg}")` }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Header con decoración técnica */}
        <div className="mb-12 flex flex-col items-center justify-center">
             <div className="flex items-center gap-2 text-xs font-mono text-cyan-500/50 mb-2 tracking-[0.3em]">
                <Wifi className="w-3 h-3 animate-pulse" /> EXTERNAL_UPLINKS
             </div>
             <h2 className="text-3xl font-bold text-white pixel-font tracking-wide">
                {t("home.socialmedia.title")}
             </h2>
             <div className="w-24 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent mt-4"></div>
        </div>

        {/* Grid de Enlaces */}
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`
                group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40
                bg-[#141420]/80 backdrop-blur-sm border border-white/10 rounded-xl
                transition-all duration-300 ${item.color}
              `}
            >
              {/* Esquinas decorativas */}
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20 group-hover:border-current transition-colors"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20 group-hover:border-current transition-colors"></div>

              {/* Icono */}
              <item.icon className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-current transition-colors mb-3" />
              
              {/* Nombre */}
              <span className="text-sm font-bold text-gray-300 group-hover:text-white tracking-wide">
                {item.name}
              </span>

              {/* Status "técnico" */}
              <div className="absolute bottom-4 text-[9px] font-mono text-gray-600 group-hover:text-current opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1">
                 <ExternalLink className="w-2 h-2" /> {item.status}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}