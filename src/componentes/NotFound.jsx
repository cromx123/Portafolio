import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-950 text-gray-300 font-mono relative overflow-hidden">
      {/* Efecto de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/5 to-cyan-500/10 blur-3xl"></div>

      {/* Número 404 con animación */}
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[10rem] sm:text-[14rem] font-extrabold text-pink-500 drop-shadow-[0_0_20px_rgba(255,0,150,0.4)] select-none"
      >
        404
      </motion.h1>

      {/* Mensaje */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center text-gray-400 mb-10 max-w-md px-4"
      >
        Parece que te perdiste en el ciberespacio...  
        La página que buscas no existe o fue eliminada.
      </motion.p>

      {/* Botón de regreso */}
      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255,0,150,0.5)" }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="px-6 py-3 rounded-lg bg-pink-500/20 border border-pink-400/40 text-pink-300 hover:bg-pink-500/30 transition-all duration-300"
      >
        ← Volver al inicio
      </motion.button>

      {/* Detalles decorativos */}
      <div className="absolute bottom-4 text-xs text-gray-500 tracking-widest">
        CG PORTAFOLIO © {new Date().getFullYear()}
      </div>
    </div>
  );
}
