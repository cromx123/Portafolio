import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  // --- OPTIMIZACIÓN: Patrón de rejilla SVG ---
  // Esto es mucho más ligero que generar líneas con gradientes CSS.
  // Define líneas finas moradas y cian.
  const gridSvg = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='rgba(255, 0, 255, 0.2)' stroke-width='1'/%3E%3Cpath d='M0 60h60V0' fill='none' stroke='rgba(0, 255, 255, 0.15)' stroke-width='1'/%3E%3C/svg%3E`;

  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center min-h-screen text-center overflow-hidden bg-[#0b0014] text-white"
    >
      {/* 1. FONDO BASE (Mantiene tu tono oscuro original) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a002b] via-[#0b0014] to-[#05000a]" />

      {/* 2. REJILLA OPTIMIZADA Y ATMÓSFERA MORADA */}
      <div className="absolute inset-0 overflow-hidden perspective-[1000px]">
        {/*
           - Plano de la rejilla rotado.
           - Usamos el SVG como background-image.
           - 'mask-image' crea el desvanecimiento hacia el horizonte, crucial para el efecto "flotante".
        */}
        <div
          className="absolute bottom-0 left-[-50%] right-[-50%] h-[130vh] bg-repeat origin-bottom rotate-x-[75deg]"
          style={{
            backgroundImage: `url("${gridSvg}")`,
            backgroundSize: "60px 60px",
            maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 60%)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* 3. HORIZONTE FLUOR (El toque mágico de tu diseño) */}
      {/* He intensificado un poco el morado aquí para que "conecte" la rejilla con el fondo */}
      <div className="absolute bottom-[25vh] left-0 right-0 h-[40vh] bg-gradient-to-t from-purple-600/30 via-pink-500/10 to-transparent blur-[80px] opacity-80 pointer-events-none" />


      {/* 4. EFECTOS DE TEXTURA (Scanlines - Mantenido) */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100%_4px]" />


      {/* 5. CONTENIDO PRINCIPAL (Sin cambios) */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center space-y-6 px-6 top-[-5vh]" // Subí un poco el contenido para mejor composición
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-pink-400 font-mono tracking-widest text-lg mb-2">
          {/* {t("home.hero.title")} */}
          Hola, soy
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold pixel-font text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-200 to-purple-200 drop-shadow-[0_0_30px_rgba(255,0,255,0.6)]">
          Cristóbal Gallardo
        </h1>

        <p className="max-w-2xl text-purple-200/80 text-md md:text-lg leading-relaxed font-mono mt-4">
          {/* {t("home.hero.subtitle")} */}
          Desarrollador Fullstack con pasión por construir aplicaciones web. Me especializo en React, Dockers, Nodejs y TypeScript.
        </p>

        <div className="mt-10 flex flex-wrap gap-5 justify-center">
          {/* Botones actualizados con un poco más de "glow" reactivo */}
          <a
            href="#proyectos"
            className="group relative px-8 py-3 bg-pink-600 text-white rounded-lg font-mono overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-80 group-hover:opacity-100 transition-opacity blur-md"></div>
            <span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Proyectos</span>
          </a>

          <a
            href="/CV_CristobalGallardoC.pdf"
            className="group relative px-8 py-3 bg-cyan-600 text-white rounded-lg font-mono overflow-hidden transition-all hover:scale-105 flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity blur-md"></div>
             <span className="relative z-10 flex items-center gap-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
                 <Download className="w-5 h-5" /> Descargar CV
             </span>
          </a>
        </div>
      </motion.div>

      {/* 6. GLOW SUPERIOR FINAL (Mantenido para cerrar la atmósfera) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,0,255,0.3)_0%,transparent_70%)] pointer-events-none" />
    </section>
  )
}