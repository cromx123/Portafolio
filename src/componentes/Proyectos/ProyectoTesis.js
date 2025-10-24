import React from "react";
import ProyectoLayout from "../LayoutProyect";
import tesisImage from "../../assets/medical_dashboard.png"; 

const ProyectoTesis = () => {
  return (
    <ProyectoLayout
      title="Medical Data Analysis Platform (SSMN)"
      image={tesisImage}
      descripcion="Web platform developed for the Metropolitan North Health Service to manage and analyze medical data using predictive and clustering models for research and decision-making."
      detalle="The system integrates predictive, optimization, clustering, and classification algorithms to support healthcare research. Includes model versioning, interactive dashboards, and tools for training and evaluating models directly from the web interface."
      habilidades={[
        ["Python", "https://img.icons8.com/?size=100&id=lXPUSRCongH1&format=png&color=ffffff"],
        ["FastAPI", "https://icon.icepanel.io/Technology/svg/FastAPI.svg"],
        ["MongoDB", "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000"],
        ["React", "https://img.icons8.com/?size=100&id=Y8UPqrI8Yp7V&format=png&color=02DBF9"],
        ["Docker", "https://img.icons8.com/?size=100&id=qGZRK3KTK57F&format=png&color=ffffff"],
        ["GitHub", "https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff"],
      ]}
      detallep={{
        cliente: "Servicio de Salud Metropolitano Norte (SSMN)",
        rol: "Fullstack Developer & Researcher",
        duration: "9 meses",
        completado: "Working in progress",
      }}
      glowColor="rgba(255, 255, 255, 0.3)"
      rutaAnterior="/ProyectoHumanidades"
      rutaSiguiente="/ProyectoAqua"
    />
  );
};

export default ProyectoTesis;
