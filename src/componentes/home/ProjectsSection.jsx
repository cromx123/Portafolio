import { motion } from "framer-motion";

export default function ProjectsSection({ projects, onNavigate }) {
  return (
    <motion.section
      id="proyectos"
      className="min-h-[75vh] py-24 bg-slate-950 text-gray-300 font-mono relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Título */}
      <h2 className="text-5xl font-bold text-center mb-6 text-pink-400 tracking-widest neon-text">
        ProJects
      </h2>
      <p className="text-center text-sm text-gray-400 mb-16">
        Some of the projects he has worked on recently.
      </p>

      {/* Grid de proyectos */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {projects.map(({ img, title, tag, desc, path }, index) => (
          <motion.div
            key={title}
            onClick={() => {
                if (path.startsWith("http")) {
                    window.open(path, "_blank");
                } else {
                    onNavigate(path);
                }
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cursor-pointer bg-gradient-to-b from-slate-900/80 to-slate-800/60 border border-pink-500/30 rounded-xl p-5 hover:border-pink-400 shadow-[0_0_20px_rgba(255,0,150,0.2)] backdrop-blur-sm group"
          >
            {/* Tag superior */}
            <div className="flex justify-between items-center mb-4 text-xs text-gray-400">
              <span className="border border-pink-400/40 px-2 py-1 rounded-md uppercase tracking-wider text-pink-400">
                {tag || "dev"}
              </span>
              <span className="text-cyan-400">★ {index + 1}</span>
            </div>

            {/* Imagen */}
            <div className="h-32 w-full rounded-lg overflow-hidden mb-4 border border-pink-400/20">
              <img
                src={img}
                alt={title}
                className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition"
              />
            </div>

            {/* Texto */}
            <h3 className="text-lg font-semibold text-pink-400 mb-2 tracking-wide">
              {title}
            </h3>
            <p className="text-sm text-gray-400 leading-snug">
              {desc || "Explore los límites del diseño digital retrofuturista. Inspirado en interfaces sintéticas y pixeladas."}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
