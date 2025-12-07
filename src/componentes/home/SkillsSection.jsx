import { motion } from "framer-motion";
import { CodeSquare, Database, Monitor } from "lucide-react"; // Cambié iconos para variar
import { useTranslation } from 'react-i18next';

// Variantes de animación para efecto "System Boot"
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0 }
};

export default function ServicesSection() {
  const { t } = useTranslation();

  const skills = [
    {
      title: "FRONTEND_DEV",
      subtitle: "UI / UX Interface",
      icon: <Monitor className="w-5 h-5 text-cyan-400" />,
      color: "cyan",
      items: [
        ["HTML", "https://img.icons8.com/?size=100&id=20909&format=png&color=FFFFFF"],
        ["CSS", "https://img.icons8.com/?size=100&id=21278&format=png&color=FFFFFF"],
        ["JS", "https://img.icons8.com/?size=100&id=108784&format=png&color=FFFFFF"],
        ["React", "https://img.icons8.com/?size=100&id=Y8UPqrI8Yp7V&format=png&color=02DBF9"],
        ["Flutter", "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=FFFFFF"],
        ["Dart", "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"],
        ["TypeScript", "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"],
        ["Kotlin", "https://img.icons8.com/?size=100&id=ZoxjA0jZDdFZ&format=png&color=000000"],
      ],
    },
    {
      title: "BACKEND_SYS",
      subtitle: "Server & Logic",
      icon: <CodeSquare className="w-5 h-5 text-pink-500" />,
      color: "pink",
      items: [
        ["C", "https://img.icons8.com/?size=100&id=40670&format=png&color=FFFFFF"],
        ["C++", "https://img.icons8.com/?size=100&id=40669&format=png&color=FFFFFF"],
        ["Python", "https://img.icons8.com/?size=100&id=lXPUSRCongH1&format=png&color=FFFFFF"],
        ["PHP", "https://img.icons8.com/?size=100&id=XNQU0Xcm2I9s&format=png&color=FFFFFF"],
        ["MySQL", "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=FFFFFF"],
        ["Java", "https://img.icons8.com/?size=100&id=13679&format=png&color=000000"],
        ["R", "https://img.icons8.com/?size=100&id=CLvQeiwFpit4&format=png&color=000000"],
        ["NodeJS", "https://img.icons8.com/?size=100&id=54087&format=png&color=FFFFFF"],
      ],
    },
    {
      title: "DB & TOOLS",
      subtitle: "Infrastructure",
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      color: "emerald",
      items: [
        ["Docker", "https://img.icons8.com/?size=100&id=qGZRK3KTK57F&format=png&color=FFFFFF"],
        ["Firebase", "https://img.icons8.com/?size=100&id=87330&format=png&color=FFFFFF"],
        ["GitHub", "https://img.icons8.com/?size=100&id=106562&format=png&color=FFFFFF"],
        ["Android", "https://img.icons8.com/?size=100&id=04OFrkjznvcd&format=png&color=FFFFFF"],
        ["Tensorflow", "https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=FFFFFF"],
        ["Shell", "https://img.icons8.com/?size=100&id=boivBIyqEOus&format=png&color=000000"],
        ["MongoDB", "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000"],
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-[85vh] flex flex-col justify-center items-center bg-[#050505] text-gray-200 font-mono px-4 py-24 overflow-hidden"
    >
      {/* --- FONDO DE REJILLA (GRID) ESTILO TRON --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-cyan-500 opacity-20 blur-[100px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="z-10 text-center mb-16 relative"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 tracking-tight pixel-font uppercase drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]">
          {t("home.skills.title")}
        </h2>
        <p className="text-xs text-cyan-500/60 mt-2 tracking-[0.3em] uppercase">System Configuration & Stack</p>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl w-full z-10">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative flex flex-col h-full"
          >
             {/* --- TARJETA ESTILO HUD --- */}
            <div className={`relative h-full bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/5 p-6 transition-all duration-300 hover:border-${s.color}-500/50 hover:bg-[#0a0a0a]/90`}>
              
              {/* Esquinas decorativas "Bracket" */}
              <div className={`absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-${s.color}-500/50 group-hover:border-${s.color}-400 transition-colors`}></div>
              <div className={`absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-${s.color}-500/50 group-hover:border-${s.color}-400 transition-colors`}></div>

              {/* Header de la tarjeta */}
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded bg-${s.color}-500/10`}>
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold tracking-wider text-white">
                      {s.title}
                    </h3>
                    <p className={`text-[10px] uppercase tracking-widest text-${s.color}-400/70`}>
                      {s.subtitle}
                    </p>
                  </div>
                </div>
                {/* Decoración de terminal */}
                <div className="flex gap-1">
                   <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                   <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Grid de items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {s.items.map(([name, src]) => (
                  <motion.div
                    key={name}
                    variants={itemVariants}
                    className={`
                      relative flex items-center gap-3 p-2 rounded-sm border border-white/5 bg-black/40
                      hover:border-${s.color}-400/50 hover:bg-${s.color}-500/5 transition-all cursor-crosshair group/item
                    `}
                  >
                    {/* Icono pequeño */}
                    <div className="w-6 h-6 flex items-center justify-center">
                        <img
                        src={src}
                        alt={name}
                        className="max-w-full max-h-full opacity-70 group-hover/item:opacity-100 transition-opacity filter grayscale group-hover/item:grayscale-0"
                        />
                    </div>
                    
                    {/* Texto estilo código */}
                    <span className="text-xs text-gray-400 group-hover/item:text-white transition-colors font-mono tracking-wide">
                      {name}
                    </span>

                    {/* Efecto de luz lateral al hover */}
                    <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-${s.color}-500 opacity-0 group-hover/item:opacity-100 transition-opacity`}></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}