import React, { useState } from "react";
import "./App.css"; // Asegúrate de tener un archivo CSS para los estilos básicos.

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    "img1.png",
    "img2.png",
    "img3.png",
    "img4.png",
    "img5.png",
  ];

  const showNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const showPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

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
              <h3>Descripción</h3>
              <p>Soy un desarrollador apasionado por crear soluciones tecnológicas que impacten positivamente a las personas.</p>
            </div>
            <div className="habilidades">
              <h3>Habilidades</h3>
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
              <div
                className="slider-container"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div className="slide" key={index}>
                    <img src={slide} alt={`Proyecto ${index + 1}`} />
                  </div>
                ))}
              </div>
              <button onClick={showPrevSlide} className="prev-button">
                ←
              </button>
              <button onClick={showNextSlide} className="next-button">
                →
              </button>
            </div>
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
