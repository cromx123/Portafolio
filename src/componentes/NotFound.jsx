import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AlertTriangle, Home, Terminal } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  // SVG de Rejilla (Consistente con el resto del sitio)
  const gridSvg = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='rgba(236, 72, 153, 0.05)' stroke-width='1'/%3E%3C/svg%3E`;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#05000a] text-gray-300 font-mono relative overflow-hidden selection:bg-pink-500/30">
      
      {/* 1. FONDO TÉCNICO */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: `url("${gridSvg}")` }} 
      />
      
      {/* Scanlines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,20,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>

      {/* Glow Ambiental (Rojo/Rosa para indicar error) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/10 blur-[120px] pointer-events-none" />


      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        
        {/* Icono de Alerta */}
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6 p-4 rounded-full bg-pink-500/10 border border-pink-500/20"
        >
            <AlertTriangle className="w-12 h-12 text-pink-500 animate-pulse" />
        </motion.div>

        {/* 404 CON EFECTO GLITCH */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <h1 className="text-[8rem] md:text-[12rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 tracking-tighter select-none">
            404
          </h1>
          {/* Sombras para simular aberración cromática / glitch */}
          <span className="absolute top-0 left-1 text-[8rem] md:text-[12rem] font-black leading-none text-cyan-500/30 -z-10 animate-pulse select-none">
            404
          </span>
          <span className="absolute top-0 -left-1 text-[8rem] md:text-[12rem] font-black leading-none text-pink-500/30 -z-10 animate-pulse select-none" style={{ animationDelay: "0.1s" }}>
            404
          </span>
        </motion.div>

        {/* Subtítulo Técnico */}
        <div className="mt-4 mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-pink-500 tracking-widest uppercase mb-2">
                SYSTEM_FAILURE: PAGE_NOT_FOUND
            </h2>
            <p className="text-sm text-gray-500 font-mono">
                The requested URL was rejected by the server module.
            </p>
        </div>

        {/* Caja de "Terminal" con logs de error */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full max-w-md bg-black/60 border border-white/10 rounded-sm p-4 text-left mb-10 backdrop-blur-sm"
        >
            <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-3">
                <Terminal className="w-4 h-4 text-cyan-500" />
                <span className="text-xs text-gray-400 uppercase tracking-wider">Error_Log.txt</span>
            </div>
            <div className="space-y-1 font-mono text-xs">
                <p className="text-gray-500"><span className="text-green-500">➜</span> Initiating request...</p>
                <p className="text-gray-500"><span className="text-green-500">➜</span> Searching database...</p>
                <p className="text-pink-500"><span className="text-red-500">✖</span> ERROR: 0x0000404</p>
                <p className="text-pink-500"><span className="text-red-500">✖</span> Target not found in sector.</p>
                <p className="text-cyan-500 animate-pulse mt-2">{">"} Waiting for user input_</p>
            </div>
        </motion.div>

        {/* Botón de Regreso (Estilo HUD) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="group relative px-8 py-4 bg-cyan-900/20 border border-cyan-500/50 text-cyan-400 font-mono uppercase tracking-widest hover:bg-cyan-500 hover:text-black transition-all duration-300"
        >
          {/* Decoración de esquinas */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500 group-hover:border-black transition-colors"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500 group-hover:border-black transition-colors"></div>
          
          <span className="flex items-center gap-2 font-bold">
             <Home className="w-4 h-4" /> RETURN_TO_ROOT
          </span>
        </motion.button>

      </div>

      {/* Footer Decorativo */}
      <div className="absolute bottom-6 text-[10px] text-gray-600 font-mono tracking-[0.5em] opacity-50">
        ERROR_CODE: 404 // DISCONNECTED
      </div>
    </div>
  );
}