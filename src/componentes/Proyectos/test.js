import React, { useState, useEffect } from "react";
import "./App.css"; // Asegúrate de tener un archivo CSS para los estilos básicos.
import aquaWeb from "./assets/aquaWeb_home.png";
import magicGourmet from "./assets/magicGourmet_home.png";
import youtubeModule from "./assets/modulo_youtube.png";
import sendLove from "./assets/sendLove.png";

function App() {
  const slides = [aquaWeb, magicGourmet, youtubeModule, sendLove];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar la imagen activa automáticamente cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [slides.length]);

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>¡Hola, soy CromxDev!</h1>
      </header>

      {/* Body */}
      <main className="body">
        <div className="parent">

          <div className="child-left">
            <div className="description">
              <h2>Descripción</h2>
              <p>Soy comprometido y entusiasta. Apasionado de la tecnología y el desarrollo de programas. Disfruto resolviendo desafíos técnicos y creando soluciones innovadoras. Siempre en busca de nuevas formas de mejorar mis habilidades y contribuir al mundo de la tecnología.</p>
            </div>
            <div className="habilidades">
              <h2>Habilidades</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>

          <div className="child-rigth">
            <div className="slider">
              <h2>PROYECTOS</h2>
              <div className="slider-container">
                {slides.map((slide, index) => (
                  <div key={index} className="image-wrapper">
                    <img src={slide} alt={`Proyecto ${index + 1}`} className="image-proyect" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="parent-contactos">
          <h2>Social Media</h2>
          <div className="social-container">
            <a href="https://www.instagram.com/_cris.ogc" className="social-icon instagram" aria-label="Instagram"></a>
            <a href="https://www.linkedin.com/in/cristobal-gallardo-cromxdev/" className="social-icon linkedin" aria-label="LinkedIn"></a>
            <a href="https://github.com/cromx123" className="social-icon github" aria-label="GitHub"></a>
            <a href="https://www.facebook.com/cristobal.o.gallardo" className="social-icon facebook" aria-label="Facebook"></a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 CromxDev - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
