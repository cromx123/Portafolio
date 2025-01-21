import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Proyectos.css";
import aquaWeb from "../../assets/aquaWeb_home.png";

const ProyectoAqua = () => {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleClick = () => {
    navigate("/Portafolio"); // Redirige a la ruta deseada
  };

  useEffect(() => {
    document.title = "AquaWeb - Proyecto";
  }, []);
  return (
    <div className="App-proyect">
      {/* Header */}
      <header className="header-proyect">
        <h1>AquaWeb</h1>
        <h3 onClick={handleClick}>Home</h3>
      </header>
      {/* Body */}
      <main className="body-proyect">
        <div className="parent-proyect">
          <div className="child-left-proyect">
            <div className="description-proyect">
              <h2>Descripción del proyecto</h2>
              <p>Es una página web del tipo E-commerce para venta de bidones de agua purificada. .</p>
            </div>
            <div className="habilidades-proyect">
              <h2>Habilidades Utilizadas</h2>
              <ul className="list-habilidades">
                <li><img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JAVASCRIPT"></img></li>
                <li><img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML"></img></li>
                <li><img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS"></img></li>
                <li><img src="https://img.icons8.com/?size=100&id=XNQU0Xcm2I9s&format=png&color=000000" alt="PHP"></img></li>
                <li><img src="https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000" alt="MYSQL"></img></li>
              </ul>
            </div>
          </div>
          <div className="child-rigth-proyect">
            <div className="slider">
              <div className="slider-container">
                <div className="image-slider">
                  <div className="image-proyecto">
                    <img src={aquaWeb} alt="AquaWeb" />
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
};

export default ProyectoAqua;