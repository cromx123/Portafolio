import React, { useEffect } from "react";
import ProyectoLayout from "../LayoutProyect";
import crawlerImg from "../../assets/modulo_youtube.png";

const ProyectoCrawler = () => {
  useEffect(() => {
    document.title = "YouTube Crawler - Proyecto";
  }, []);

  return (
    <ProyectoLayout
      title="YouTube Crawler"
      image={crawlerImg}
      descripcion="Proyecto desarrollado para recolectar y analizar datos de videos en YouTube mediante API oficial y técnicas de scraping con Python. La plataforma permite explorar canales, filtrar contenido, visualizar métricas clave y exportar resultados."
      detalle="Se diseñó un crawler personalizado que combina peticiones a la API de YouTube con BeautifulSoup para obtener información extendida de cada video. La data es procesada y enviada a un frontend en React, donde se muestran estadísticas como duración, vistas, engagement, y frecuencia de publicación. Se implementaron filtros dinámicos, visualización paginada y funcionalidades de exportación."
      habilidades={[
        ["Python", "https://img.icons8.com/?size=100&id=13441&format=png&color=ffffff"],
        ["React", "https://img.icons8.com/?size=100&id=123603&format=png&color=ffffff"],
        ["YouTube API", "https://img.icons8.com/?size=100&id=19318&format=png&color=ffffff"],
        ["GitHub", "https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff"],
        ["Docker","https://img.icons8.com/?size=100&id=qGZRK3KTK57F&format=png&color=000000"],
      ]}
      detallep={{
        cliente: "NeuroVision",
        rol: "Python Developer",
        duration: "1 meses",
        completado: "Julio 2024",
      }}
      glowColor = "rgba(255, 100, 100, 0.3)"
      rutaAnterior="/ProyectoMagic"
      rutaSiguiente="/ProyectoSendLove"
    />
  );
};

export default ProyectoCrawler;
