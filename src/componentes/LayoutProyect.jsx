import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import GlowBackground from "./Detalles/glow";

const ProyectoLayout = ({

  title,
  image,
  descripcion,
  detalle,
  habilidades,
  detallep,
  extraButton,
  rutaAnterior,
  rutaSiguiente,
  glowColor = "rgba(100,200,255,0.3)", 
}) => {
  const navigate = useNavigate();

  return (
    <GlowBackground glowColor={glowColor} className="min-h-screen bg-gradient-to-br from-stone-900 to-neutral-700 text-white font-sans">
      {/* Header */}
      <header className="flex flex-col items-center justify-center p-6 border-b border-white/10 bg-zinc-900 shadow-md gap-4">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="flex gap-6 items-center text-white">
          <Link to="/Portafolio" className="hover:text-blue-300 transition">
            Home
          </Link>
          <span className="text-white/500">•</span>
          <Link to="/Proyectos" className="hover:text-blue-300 transition">
            Proyectos
          </Link>
          <span className="text-white/500">•</span>
          <Link to="/ProyectoAqua" className="hover:text-blue-300 transition">
            {title}
          </Link>
        </div>

      </header>

      {/* Body */}
      <main className="p-6 md:p-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Texto */}
            <div className="md:col-span-2">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Descripción del proyecto</h2>
                <p className="text-white/80 mb-4">{descripcion}</p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Detalle del desarrollo</h2>
                <p className="text-white/80">{detalle}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Habilidades Utilizadas</h2>
                <div className="flex gap-4 flex-wrap">
                  {habilidades.map(([alt, src]) => (
                    <img key={alt} src={src} alt={alt} className="w-12 h-12" />
                  ))}
                </div>

                {extraButton && (
                  <a
                    href={extraButton.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-rose-900 transition"
                  >
                    {extraButton.text}
                  </a>
                )}
              </section>
            </div>
            
            {/* Detalles */}
            <aside className="bg-sky-950/30 border border-white/10 rounded-xl p-6 shadow-lg text-sm">
              <h3 className="text-lg font-semibold mb-4">Detalles del Proyecto</h3>
              <ul className="space-y-2 text-white/80">
                <li><strong className="text-white">Cliente:</strong> {detallep.cliente}</li>
                <li><strong className="text-white">Rol:</strong> {detallep.rol}</li>
                <li><strong className="text-white">Duración:</strong> {detallep.duration}</li>
                <li><strong className="text-white">Completado:</strong> {detallep.completado}</li>
              </ul>
            </aside>
          </div>
            {/* Imagen */}
            <div className="mt-16">
              <img
                src={image}
                alt={title}
                className="rounded-xl border border-white/10 shadow-lg w-full max-w-5xl mx-auto"
              />
            </div>
          
          {/* Navegación entre proyectos */}
          <div className="flex justify-between items-center mt-16 text-lg font-medium">
            <button onClick={() => navigate(rutaAnterior)} className="hover:underline">
              ← Anterior
            </button>
            <span>Proyecto</span>
            <button onClick={() => navigate(rutaSiguiente)} className="hover:underline">
              Próximo →
            </button>
          </div>

          {/* Redes sociales */}
          <div className="mt-20 text-center">
            <h2 className="text-xl font-semibold mb-4">Social Media</h2>
            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com/_cris.ogc" className="text-neutral-400 hover:text-white">Instagram</a>
              <a href="https://www.linkedin.com/in/cristobal-gallardo-cromxdev/" className="text-neutral-400 hover:text-white">LinkedIn</a>
              <a href="https://github.com/cromx123" className="text-neutral-400 hover:text-white">GitHub</a>
              <a href="https://www.facebook.com/cristobal.o.gallardo" className="text-neutral-400 hover:text-white">Facebook</a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center border-t border-white/10 mt-16 text-white/50">
        © 2025 CromxDev - Todos los derechos reservados.
      </footer>
    </GlowBackground>
  );
};

export default ProyectoLayout;
