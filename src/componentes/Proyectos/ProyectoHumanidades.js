import React from "react";
import ProyectoLayout from "../LayoutProyect";
import humanidadesImage from "../../assets/humanidades.png";

const ProyectoHumanidades360 = () => {
  return (
    <ProyectoLayout
      title="Humanidades 360°"
      image={humanidadesImage}
      descripcion="Aplicación web para explorar y administrar los espacios del campus de Humanidades utilizando un mapa interactivo basado en OpenStreetMap. Los usuarios pueden agregar nodos, ver información de lugares, y utilizar filtros para facilitar la navegación."
      detalle="Desarrollada con Flutter Web, integra funcionalidades como detección por voz, selección de áreas, filtros de búsqueda y generación de formularios PDF para registrar nuevos espacios. Ideal para la gestión geográfica de entornos académicos."
      habilidades={[
        ["Flutter", "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000"],
        ["HTML", "https://img.icons8.com/?size=100&id=20909&format=png&color=ffffff"],
        ["OPENSTREET", "https://img.icons8.com/?size=100&id=mXvPisAuHf76&format=png&color=000000"],
        ["NODEJS", "https://img.icons8.com/?size=100&id=54087&format=png&color=000000"],
        ["GITHUB", "https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff"],
      ]}
      detallep={{
        cliente: "Dino Araya",
        rol: "Fullstack Developer",
        duration: "5 meses",
        completado: "Diciembre 2023",
      }}
      rutaAnterior="/ProyectoSendLove"
      rutaSiguiente="/ProyectoAqua"
    />
  );
};

export default ProyectoHumanidades360;
