import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

import "./App.css"; // Asegúrate de tener un archivo CSS para los estilos básicos.
import aquaWeb from "./assets/aquaWeb_home.png";
import magicGourmet from "./assets/magicGourmet_home.png";
import crawler from "./assets/modulo_youtube.png";
import sendLove from "./assets/sendLove.png";

function App() {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleClick = () => {
    navigate("/ProyectoAqua"); // Redirige a la ruta deseada
  };
  useEffect(() => {
      document.title = "Portafolio CromxDev";
    }, []);
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
                <div className="vertical-text" onClick={handleClick}>
                  <span>A</span>
                  <span>Q</span>
                  <span>U</span>
                  <span>A</span>
                  <span>W</span>
                  <span>E</span>
                  <span>B</span>
                  <div className="image">
                    <h2>AQUAWEB</h2>
                    <img src={aquaWeb} alt="AQUAWEB" />
                  </div>
                </div>
                <div className="vertical-text">
                  <span>M</span>
                  <span>A</span>
                  <span>G</span>
                  <span>I</span>
                  <span>C</span>
                  <span>G</span>
                  <span>O</span>
                  <span>U</span>
                  <span>R</span>
                  <span>M</span>
                  <span>E</span>
                  <span>T</span>
                  <div className="image">
                    <h2>Magic Gourtmet</h2>
                    <img src={magicGourmet} alt="MagicGourtmet" />
                  </div>
                </div>

                <div className="vertical-text">
                  <span>C</span>
                  <span>R</span>
                  <span>A</span>
                  <span>W</span>
                  <span>L</span>
                  <span>E</span>
                  <span>R</span>
                  <div className="image">
                    <h2>CRAWLER</h2>
                    <img src={crawler} alt="CRAWLER" />
                  </div>
                </div>

                <div className="vertical-text">
                  <span>S</span>
                  <span>E</span>
                  <span>N</span>
                  <span>D</span>
                  <span>L</span>
                  <span>O</span>
                  <span>V</span>
                  <span>E</span>
                  <div className="image">
                    <h2>SEND LOVE</h2>
                    <img src={sendLove} alt="SENDLOVE" />
                  </div>
                </div>
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
