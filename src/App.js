import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home"; // Página principal
import ProyectoPage from "./componentes/Proyectos/ProjectPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página principal */}
        <Route path="/proyecto/:id" element={<ProyectoPage />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} /> {/* Ruta por defecto */}
      </Routes>
    </Router>
  );
}

export default App;
