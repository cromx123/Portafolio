import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"; // Página principal
import ProyectoAqua from "./componentes/Proyectos/ProyectoAqua"; // Página de AquaWeb

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Portafolio" element={<Home />} /> {/* Página principal */}
        <Route path="/ProyectoAqua" element={<ProyectoAqua />} /> {/* Página de AquaWeb */}
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} /> {/* Ruta por defecto */}
      </Routes>
    </Router>
  );
}

export default App;
