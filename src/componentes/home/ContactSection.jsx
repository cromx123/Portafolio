import { motion } from "framer-motion"
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation();
  return (
    <motion.section
      id="contact"
      className="min-h-[75vh] flex flex-col justify-center items-center bg-[#0a0a12] text-pink-400 font-mono px-6 py-20"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center tracking-widest neon-text">
        {t("home.contact.title")}
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Panel Izquierdo */}
        <div className="bg-black/40 border-2 border-pink-500 rounded-xl p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(255,0,150,0.4)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pink-600 text-center leading-10 font-bold text-white">
                C
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Cristóbal Gallardo</h3>
                <p className="text-xs text-gray-400">Fullstack</p>
              </div>
            </div>
            <span className="flex items-center gap-2 px-3 py-1 text-xs border border-green-400 text-green-400 rounded">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Available
            </span>
          </div>

          <h4 className="text-xl font-semibold mb-2 text-white">
            {t("home.contact.subtitle_left")}
          </h4>

          <div className="text-sm leading-relaxed text-gray-300">
            <p>
              {t("home.contact.description")}
            </p>
          </div>

          <div className="mt-6 space-y-4 text-gray-300">
            <div>
              <span className="block text-pink-400 text-sm">Email</span>
              <p>cristobal.gallardo.c@usach.cl</p>
            </div>
            <div>
              <span className="block text-pink-400 text-sm">Phone</span>
              <p>+(56) 9 62015964</p>
            </div>
          </div>
        </div>

        {/* Panel Derecho */}
        <div className="bg-black/40 border-2 border-cyan-400 rounded-xl p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(0,255,255,0.4)]">
          <h4 className="text-xl font-semibold mb-4 text-white tracking-widest">
            {t("home.contact.subtitle_right")}
          </h4>

          <form className="space-y-4">
            <input
              type="text"
              placeholder={t("home.contact.name")}
              className="w-full bg-transparent border border-cyan-500 p-3 rounded text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="email"
              placeholder={t("home.contact.email")}
              className="w-full bg-transparent border border-cyan-500 p-3 rounded text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <input
              type="text"
              placeholder={t("home.contact.subject")}
              className="w-full bg-transparent border border-cyan-500 p-3 rounded text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <textarea
              placeholder={t("home.contact.message")}
              rows="4"
              className="w-full bg-transparent border border-cyan-500 p-3 rounded text-white placeholder-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-cyan-400 text-black font-bold py-3 rounded hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(0,255,255,0.5)]"
            >
              {t("home.contact.send")}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
