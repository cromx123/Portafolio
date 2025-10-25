import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Home"; // Página principal
import ProyectoPage from "./componentes/Proyectos/ProjectPage";
import NotFound from "./componentes/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página principal */}
        <Route path="/proyecto/:id" element={<ProyectoPage />} />
        <Route path="*" element={<NotFound/>} /> {/* Ruta por defecto */}
      </Routes>
    </Router>
  );
}

export default App;
