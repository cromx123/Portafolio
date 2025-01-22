import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // Página principal
import ProyectoAqua from "./componentes/Proyectos/ProyectoAqua"; // Página de AquaWeb
import ProyectoMagic from "./componentes/Proyectos/ProyectoMagic";
import ProyectoCrawler from "./componentes/Proyectos/ProyectoCrawler";
import ProyectoSendLove from "./componentes/Proyectos/ProyectoSendlove";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Portafolio" element={<Home />} /> {/* Página principal */}
        <Route path="/ProyectoAqua" element={<ProyectoAqua />} /> 
        <Route path="/ProyectoMagic" element={<ProyectoMagic />} /> 
        <Route path="/ProyectoCrawler" element={<ProyectoCrawler />} />
        <Route path="/ProyectoSendLove" element={<ProyectoSendLove />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} /> {/* Ruta por defecto */}
      </Routes>
    </Router>
  );
}

export default App;
