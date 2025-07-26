import React, { useEffect } from "react";
import ProyectoLayout from "../LayoutProyect";
import magicGourmet from "../../assets/magicGourmet_home.png";

const ProyectoMagic = () => {
  useEffect(() => {
    document.title = "MagicGourmet - Proyecto";
  }, []);

  return (
    <ProyectoLayout
      title="Magic Gourmet"
      image={magicGourmet}
      descripcion="Magic Gourmet es una plataforma web gastronómica que permite explorar recetas, agendar reservas y descubrir eventos culinarios. Está orientada tanto a usuarios aficionados como a profesionales, y cuenta con una interfaz responsiva, visualmente atractiva y fácil de usar."
      detalle="El sistema fue diseñado con arquitectura modular y experiencia de usuario como prioridad. Incorpora autenticación básica, base de datos MySQL para almacenar recetas, reservas y eventos, así como un dashboard para gestión interna."
      habilidades={[
        ["Android", "https://img.icons8.com/?size=100&id=04OFrkjznvcd&format=png&color=ffffff"],
        ["MySQL", "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=ffffff"],
        ["GitHub", "https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff"],
      ]}
      detallep={{
        cliente: "Magic Team",
        rol: "Fullstack Developer",
        duration: "4 meses",
        completado: "Julio 2023",
      }}
      glowColor = "rgba(188, 100, 255, 0.3)"
      rutaAnterior="/ProyectoAqua"
      rutaSiguiente="/ProyectoCrawler"
    />
  );
};

export default ProyectoMagic;