import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import aquaWeb from "./assets/aquaWeb_home.png";
import magicGourmet from "./assets/magicGourmet_home.png";
import crawler from "./assets/modulo_youtube.png";
import sendLove from "./assets/sendLove.png";
import humanidades from "./assets/humanidades.png";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Portafolio CromxDev";
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 bg-gradient-to-b from-black to-neutral-800">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">¡Hola, soy CromxDev!</h1>
        <p className="text-xl md:text-2xl text-neutral-300 max-w-xl">
          Apasionado por la tecnología, desarrollo y soluciones innovadoras.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#proyectos"
            className="bg-white text-black font-semibold py-3 px-6 rounded-lg hover:bg-neutral-200 transition"
          >
            Ver Proyectos
          </a>
          <a
            href="/CV_CristobalGallardo.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow transition"
          >
            Descargar CV
          </a>
        </div>
      </section>

      {/* Habilidades */}
      <section className="py-24 px-6 max-w-6xl mx-auto" id="habilidades">
        <h2 className="text-4xl font-bold mb-8 text-center">Habilidades</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Lenguajes</h3>
            <div className="flex flex-wrap gap-4">
              <img src="https://img.icons8.com/?size=100&id=40670&format=png&color=000000" alt="C" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000" alt="C++" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JS" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=lXPUSRCongH1&format=png&color=000000" alt="Python" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS" className="h-10" />
              <img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-ar21.svg" alt="DART" className="h-10"/>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Herramientas</h3>
            <div className="flex flex-wrap gap-4">
              <img src="https://img.icons8.com/?size=100&id=qGZRK3KTK57F&format=png&color=000000" alt="Docker" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000" alt="MySQL" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=XNQU0Xcm2I9s&format=png&color=000000" alt="PHP" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=Y8UPqrI8Yp7V&format=png&color=02DBF9" alt="React" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=n3QRpDA7KZ7P&format=png&color=000000" alt="Tensorflow" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=04OFrkjznvcd&format=png&color=000000" alt="Android" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=87330&format=png&color=000000" alt="Firebase" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000" alt="Play Store" className="h-10" />
              <img src="https://img.icons8.com/?size=100&id=106562&format=png&color=053C5B" alt="GitHub" className="h-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="py-24 px-6 bg-neutral-950" id="proyectos">
        <h2 className="text-4xl font-bold mb-12 text-center">Proyectos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { img: aquaWeb, title: "AquaWeb", path: "/ProyectoAqua" },
            { img: magicGourmet, title: "Magic Gourmet", path: "/ProyectoMagic" },
            { img: crawler, title: "CRAWLER", path: "/ProyectoCrawler" },
            { img: sendLove, title: "SEND LOVE", path: "/ProyectoSendLove" },
            { img: humanidades, title: "Humanidades 360°", path: "/ProyectoHumanidades"},
          ].map(({ img, title, path }) => (
            <div
              key={title}
              onClick={() => handleNavigation(path)}
              className="cursor-pointer bg-neutral-800 rounded-xl overflow-hidden hover:scale-105 transition-transform"
            >
              <img src={img} alt={title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contacto */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Social Media</h2>
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/_cris.ogc" className="text-neutral-400 hover:text-white">Instagram</a>
          <a href="https://www.linkedin.com/in/cristobal-gallardo-cromxdev/" className="text-neutral-400 hover:text-white">LinkedIn</a>
          <a href="https://github.com/cromx123" className="text-neutral-400 hover:text-white">GitHub</a>
          <a href="https://www.facebook.com/cristobal.o.gallardo" className="text-neutral-400 hover:text-white">Facebook</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} CromxDev - Todos los derechos reservados.
      </footer>
    </div>
  );
};

export default HomePage;
