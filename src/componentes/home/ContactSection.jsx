import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send, Terminal, Loader2, ShieldCheck } from "lucide-react";

export default function ContactSection() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // SVG de Rejilla (Consistente con el resto del sitio)
  const gridSvg = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='rgba(236, 72, 153, 0.03)' stroke-width='1'/%3E%3C/svg%3E`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulación de envío
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-[80vh] flex flex-col justify-center items-center bg-[#0b0014] text-gray-300 font-mono px-6 py-24 overflow-hidden"
    >
      {/* Fondo de rejilla */}
      <div 
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: `url("${gridSvg}")` }} 
      />

      {/* Glow ambiental inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-pink-900/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl w-full">
        
        {/* Header de Sección */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 tracking-widest pixel-font mb-4 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            {t("home.contact.title")}
          </h2>
          <div className="flex items-center justify-center gap-3 text-xs text-pink-500/60 uppercase tracking-[0.3em]">
             <span className="animate-pulse">●</span> ESTABLISHING_UPLINK
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* --- PANEL IZQUIERDO: INFORMACIÓN (2 columnas) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Tarjeta de Perfil / Estado */}
            <div className="relative p-6 bg-[#0f0518]/90 border border-pink-500/20 backdrop-blur-sm group overflow-hidden">
                {/* Decoración Esquinas */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-pink-500/40"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-pink-500/40"></div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-600 to-purple-800 rounded-sm flex items-center justify-center text-2xl font-bold text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                            CG
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#0f0518] rounded-full animate-pulse"></div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white tracking-wide">Cristóbal Gallardo</h3>
                        <p className="text-xs text-pink-400 font-mono flex items-center gap-2">
                             <ShieldCheck className="w-3 h-3" /> VERIFIED_DEV
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                     <div className="p-4 bg-black/40 border border-white/5 hover:border-pink-500/30 transition-colors group/item">
                        <div className="flex items-center gap-3 mb-1">
                            <Mail className="w-4 h-4 text-pink-500" />
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Communication_Channel_01</span>
                        </div>
                        <p className="text-sm text-gray-200 font-mono pl-7 group-hover/item:text-pink-300 transition-colors">cristobal.gallardo.c@usach.cl</p>
                     </div>

                     <div className="p-4 bg-black/40 border border-white/5 hover:border-pink-500/30 transition-colors group/item">
                        <div className="flex items-center gap-3 mb-1">
                            <Phone className="w-4 h-4 text-pink-500" />
                            <span className="text-xs text-gray-500 uppercase tracking-wider">Communication_Channel_02</span>
                        </div>
                        <p className="text-sm text-gray-200 font-mono pl-7 group-hover/item:text-pink-300 transition-colors">+(56) 9 62015964</p>
                     </div>
                </div>

                {/* Decoración de terminal */}
                <div className="mt-6 pt-4 border-t border-dashed border-white/10 text-[10px] text-gray-600 font-mono">
                    <p>{">"} ENCRYPTION: AES-256</p>
                    <p>{">"} LATENCY: 24ms</p>
                </div>
            </div>
          </motion.div>

          {/* --- PANEL DERECHO: FORMULARIO (3 columnas) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative h-full bg-[#0a0a0a]/80 border border-cyan-500/20 backdrop-blur-md p-8 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                {/* Barras decorativas superiores */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/40"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/40"></div>

                <div className="flex items-center gap-2 mb-8 text-cyan-400 border-b border-cyan-900/30 pb-4">
                    <Terminal className="w-5 h-5" />
                    <h3 className="font-bold tracking-widest text-sm">TRANSMISSION_FORM.EXE</h3>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2 group">
                            <label className="text-xs text-cyan-500/70 uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">
                                {t("home.contact.name")}
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full bg-[#050505] border border-white/10 p-3 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-950/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all placeholder-gray-700"
                                placeholder="ENTER_ID..."
                            />
                        </div>
                        <div className="space-y-2 group">
                            <label className="text-xs text-cyan-500/70 uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">
                                {t("home.contact.email")}
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full bg-[#050505] border border-white/10 p-3 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-950/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all placeholder-gray-700"
                                placeholder="ENTER_EMAIL..."
                            />
                        </div>
                    </div>

                    <div className="space-y-2 group">
                        <label className="text-xs text-cyan-500/70 uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">
                            {t("home.contact.subject")}
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full bg-[#050505] border border-white/10 p-3 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-950/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all placeholder-gray-700"
                            placeholder="SUBJECT_HEADER..."
                        />
                    </div>

                    <div className="space-y-2 group">
                        <label className="text-xs text-cyan-500/70 uppercase tracking-wider group-focus-within:text-cyan-400 transition-colors">
                            {t("home.contact.message")}
                        </label>
                        <textarea
                            rows="4"
                            required
                            className="w-full bg-[#050505] border border-white/10 p-3 text-white font-mono text-sm focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-950/10 focus:shadow-[0_0_15px_rgba(34,211,238,0.1)] transition-all placeholder-gray-700 resize-none"
                            placeholder="INPUT_DATA_STREAM..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full group overflow-hidden bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite] opacity-0 group-hover:opacity-100"></div>
                        <span className="relative flex items-center justify-center gap-2 tracking-widest">
                            {isSubmitting ? (
                                <> <Loader2 className="w-4 h-4 animate-spin" /> SENDING_PACKETS... </>
                            ) : (
                                <> {t("home.contact.send")} <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> </>
                            )}
                        </span>
                    </button>
                </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}