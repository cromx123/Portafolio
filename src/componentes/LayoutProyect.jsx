import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GlowBackground from "./Detalles/glow";
import FooterSection from "../componentes/home/FooterSection";


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
  glowColor = "rgba(255,0,150,0.3)", // tono neón por defecto
}) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const lang = i18n.language.slice(0, 2);
  const currentDesc = descripcion[lang];
  const currentDetalle = detalle[lang];
  console.log(lang);

  return (
    <GlowBackground
      glowColor={glowColor}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-fuchsia-900 text-gray-200 font-mono relative overflow-hidden"
    >
      {/* HEADER */}
      <motion.header
        className="flex flex-col items-center justify-center py-10 border-b border-fuchsia-700/30 shadow-[0_0_25px_rgba(255,0,150,0.3)]"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-pink-400 tracking-widest neon-text drop-shadow-[0_0_10px_#ff0095]">
          {title}
        </h1>
        <div className="flex gap-4 items-center mt-4 text-sm text-gray-400">
          <Link to="/" className="hover:text-pink-400 transition">Home</Link>
          <span>•</span>
          <Link to="/" className="hover:text-pink-400 transition">
            {t("common.nav.projects") || "Proyectos"}
          </Link>
          <span>•</span>
          <span className="text-pink-400">{title}</span>
        </div>

      </motion.header>

      {/* BODY */}
      <motion.main
        className="max-w-6xl mx-auto py-16 px-6 md:px-12 space-y-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* DESCRIPCIÓN */}
          <div className="md:col-span-2 space-y-10">
            <section>
              <h2 className="text-2xl font-bold text-pink-400 mb-3 border-l-4 border-pink-400 pl-3 uppercase tracking-wider">
                {t("projects.description") || "Descripción del proyecto"}
              </h2>
              <p className="text-gray-300 leading-relaxed">{currentDesc}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cyan-400 mb-3 border-l-4 border-cyan-400 pl-3 uppercase tracking-wider">
                {t("projects.details") || "Detalle del desarrollo"}
              </h2>
              <p className="text-gray-300 leading-relaxed">{currentDetalle}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-purple-400 mb-4 border-l-4 border-purple-400 pl-3 uppercase tracking-wider">
                {t("projects.skills") || "Habilidades Utilizadas"}
              </h2>
              <div className="flex flex-wrap gap-4">
                {habilidades.map(([alt, src]) => (
                  <div key={alt} className="group flex flex-col items-center">
                    <motion.img
                    key={alt}
                    src={src}
                    alt={alt}
                    className="w-12 h-12 grayscale hover:grayscale-0 hover:scale-110 transition-transform"
                    whileHover={{ scale: 1.2 }}
                  />
                    <span className="text-xs text-pink-400 mt-2 opacity-0 group-hover:opacity-100 transition-all">
                      {alt}
                    </span>
                  </div>
                ))}
              </div>

              {extraButton && (
                <a
                  href={extraButton.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-sm border border-pink-500 text-pink-400 px-6 py-2 rounded-md hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  {extraButton.text}
                </a>
              )}
            </section>
          </div>

          {/* ASIDE - DETALLES */}
          <motion.aside
            className="bg-slate-900/70 border border-pink-500/20 rounded-xl p-6 shadow-[0_0_25px_rgba(255,0,150,0.2)] backdrop-blur-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-pink-400 mb-4 tracking-widest">
              {t("projects.info.title") || "Detalles del Proyecto"}
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><strong className="text-cyan-400">{t("projects.info.client")}:</strong> {detallep.cliente}</li>
              <li><strong className="text-cyan-400">{t("projects.info.role")}:</strong> {detallep.rol}</li>
              <li><strong className="text-cyan-400">{t("projects.info.duration")}:</strong> {detallep.duration}</li>
              <li><strong className="text-cyan-400">{t("projects.info.completed")}:</strong> {detallep.completado}</li>
            </ul>
          </motion.aside>
        </div>

        {/* IMAGEN PRINCIPAL */}
        <motion.div
          className="mt-20 rounded-xl border border-fuchsia-600/40 overflow-hidden shadow-[0_0_40px_rgba(255,0,150,0.3)]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={image} alt={title} className="w-full object-cover opacity-90 hover:opacity-100 transition" />
        </motion.div>

        {/* NAVEGACIÓN ENTRE PROYECTOS */}
        <div className="flex justify-between items-center text-pink-400 font-semibold text-lg mt-16">
          <button
            onClick={() => navigate(rutaAnterior)}
            className="hover:underline hover:text-cyan-400 transition"
          >
            ← {t("projects.previous") || "Anterior"}
          </button>
          <span className="tracking-widest text-gray-400 uppercase">{t("projects.title")}</span>
          <button
            onClick={() => navigate(rutaSiguiente)}
            className="hover:underline hover:text-cyan-400 transition"
          >
            {t("projects.next") || "Próximo"} →
          </button>
        </div>

        {/* REDES SOCIALES */}
        <div className="mt-20 text-center">
          <h2 className="text-xl font-semibold text-white-400 mb-4 uppercase tracking-widest">
            Social Media
          </h2>
          <div className="flex justify-center gap-8 text-sm">
            {[
              ["Instagram", "https://www.instagram.com/_cris.ogc"],
              ["LinkedIn", "https://www.linkedin.com/in/cristobal-gallardo-cromxdev/"],
              ["GitHub", "https://github.com/cromx123"],
              ["Facebook", "https://www.facebook.com/cristobal.o.gallardo"],
            ].map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-all duration-300"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </motion.main>

      {/* FOOTER */}
      <FooterSection />
    </GlowBackground>
  );
}
