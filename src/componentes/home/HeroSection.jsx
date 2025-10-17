import { motion } from "framer-motion"
import { Download } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center min-h-screen text-center overflow-hidden bg-[#0b0014] text-white"
    >
      {/* 🟣 Fondo gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a002b] via-[#0b0014] to-[#080011]" />

      {/* 🟣 Rejilla retrofuturista mejorada */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 h-[55vh]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 0, 255, 0.2) 2px, transparent 2px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.2) 2px, transparent 2px)
            `,
            backgroundSize: "50px 50px",
            transform: "perspective(600px) rotateX(65deg)",
            transformOrigin: "bottom",
            boxShadow: "0 0 40px 10px rgba(255,0,255,0.3)",
            filter: "drop-shadow(0 0 6px rgba(255,0,255,0.6)) drop-shadow(0 0 12px rgba(0,255,255,0.4))",
          }}
        />
      </div>

      {/* 🟣 Glow del horizonte */}
      <div className="absolute bottom-[40vh] left-0 right-0 h-32 bg-gradient-to-b from-pink-500/40 via-transparent to-transparent blur-3xl opacity-70" />

      {/* 🟣 Efecto CRT scanlines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:100%_3px]" />

      {/* 🟣 Contenido principal */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center space-y-6 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-pink-400 font-mono tracking-widest text-lg">
          Hi, I’m
        </p>

        <h1 className="text-5xl md:text-7xl font-extrabold pixel-font text-white drop-shadow-[0_0_25px_#ff00ff]">
          Cristóbal Gallardo
        </h1>

        <p className="max-w-2xl text-gray-400 text-md md:text-lg leading-relaxed">
          Fullstack developer with a passion for building web applications. I specialize in React, Dockers, Node.js, and TypeScript.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-mono shadow-[0_0_15px_#ff00ff] hover:shadow-[0_0_25px_#ff00ff] transition-all"
          >
            Projects
          </a>

          <a
            href="/CV_CristobalGallardoC.pdf"
            className="mt-6 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-mono shadow-[0_0_15px_#00ffff] hover:shadow-[0_0_25px_#00ffff] transition-all flex items-center gap-2"
          >
            <Download className="w-5 h-5 text-white" />
            Download resume
          </a>
        </div>
      </motion.div>

      {/* 🟣 Glow radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.15)_0%,transparent_70%)]" />
    </section>
  )
}
