import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./Proyectos.css";
import sendLove from "../../assets/sendLove.png";

const ProyectoSendLove = () => {
  const navigate = useNavigate(); // Hook para navegar entre páginas

  const handleNavigation = (path) => {
    navigate(path); // Redirige a la ruta proporcionada
  };

  useEffect(() => {
    document.title = "MagicGourmet - Proyecto";
  }, []);
  return (
    <div className="App-proyect">
      {/* Header */}
      <header className="header-proyect">
        <h1>Send Love Game App</h1>
        <h3 onClick={() => handleNavigation("/Portafolio")}>Home</h3>
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
                <li><img src="https://img.icons8.com/?size=100&id=04OFrkjznvcd&format=png&color=000000" alt="ANDROID_STUDIO"></img></li>
                <li><img src="https://img.icons8.com/?size=100&id=87330&format=png&color=000000" alt="FIREBASE"></img></li>
                <li><img src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000" alt="PLAYSTORE"></img></li>
                <li><img src="https://img.icons8.com/?size=100&id=106562&format=png&color=000000" alt="GITHUB"></img></li>
              </ul>
            </div>
          </div>
          <div className="child-rigth-proyect">
            <div className="slider">
              <div className="slider-container">
                <div className="image-slider">
                  <div className="image-proyecto">
                    <img src={sendLove} alt="SendLove" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-proyectos">
          <h2 className="button-nav" onClick={() => handleNavigation("/ProyectoCrawler")}>Anterior</h2>
          <h2>Proyecto</h2>
          <h2 className="button-nav" onClick={() => handleNavigation("/ProyectoAqua")}>Proximo</h2>
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

export default ProyectoSendLove;