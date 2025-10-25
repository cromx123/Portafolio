// src/data/projectsData.js
import aquaWeb from "../../assets/aquaWeb_home.png";
import crawlerImg from "../../assets/modulo_youtube.png";
import humanidadesImage from "../../assets/humanidades.png";
import magicGourmet from "../../assets/magicGourmet_home.png";
import sendLove from "../../assets/sendLove.png";
import tesisImage from "../../assets/medical_dashboard.png";

export const projects = [
  {
    id: "tesis",
    title: "Medical Data Analysis Platform (SSMN)",
    image: tesisImage,
    descripcion:
      "Web platform developed for the Metropolitan North Health Service to manage and analyze medical data using predictive and clustering models for research and decision-making.",
    detalle:
      "The system integrates predictive, optimization, clustering, and classification algorithms to support healthcare research. Includes model versioning, interactive dashboards, and tools for training and evaluating models directly from the web interface.",
    habilidades: [
      ["Python", "https://img.icons8.com/?size=100&id=lXPUSRCongH1&format=png&color=ffffff"],
      ["FastAPI", "https://icon.icepanel.io/Technology/svg/FastAPI.svg"],
      ["MongoDB", "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000"],
      ["React", "https://img.icons8.com/?size=100&id=Y8UPqrI8Yp7V&format=png&color=02DBF9"],
      ["Docker", "https://img.icons8.com/?size=100&id=qGZRK3KTK57F&format=png&color=ffffff"],
      ["GitHub", "https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff"],
    ],
    detallep: {
      cliente: "Servicio de Salud Metropolitano Norte (SSMN)",
      rol: "Fullstack Developer & Researcher",
      duration: "9 meses",
      completado: "Working in progress",
    },
    glowColor: "rgba(255, 255, 255, 0.3)",
    rutaAnterior: "/proyecto/humanidades",
    rutaSiguiente: "/proyecto/aqua",
  },
  {
    id: "aqua",
    title: "AquaWeb",
    image: aquaWeb,
    descripcion:
      "AquaWeb es una plataforma web creada para la administración y venta de agua purificada. Su interfaz amigable permite a los clientes realizar pedidos, programar entregas y consultar su historial de compras.",
    detalle:
      "El sistema cuenta con autenticación por roles (cliente, operador, admin), conexión a base de datos MySQL, un panel de control para la gestión de pedidos, reportes y usuarios. Se implementaron buenas prácticas de seguridad, estructura modular y diseño responsive.",
    habilidades: [
      ["HTML", "https://img.icons8.com/?size=100&id=20909&format=png&color=ffffff"],
      ["CSS", "https://img.icons8.com/?size=100&id=21278&format=png&color=ffffff"],
      ["PHP", "https://img.icons8.com/?size=100&id=XNQU0Xcm2I9s&format=png&color=ffffff"],
      ["MySQL", "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=ffffff"],
      ["GitHub", "https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff"],
    ],
    detallep: {
      cliente: "Dino Araya",
      rol: "Fullstack Developer",
      duration: "6 meses",
      completado: "Diciembre 2023",
    },
    glowColor: "rgba(100,200,255,0.3)",
    rutaAnterior: "/proyecto/tesis",
    rutaSiguiente: "/proyecto/magic",
  },
  {
    id: "magic",
    title: "Magic Gourmet",
    image: magicGourmet,
    descripcion:
      "Magic Gourmet es una plataforma web gastronómica que permite explorar recetas, agendar reservas y descubrir eventos culinarios. Está orientada a usuarios aficionados y profesionales.",
    detalle:
      "El sistema fue diseñado con arquitectura modular y experiencia de usuario como prioridad. Incorpora autenticación básica, base de datos MySQL para recetas, reservas y eventos, además de un dashboard de gestión.",
    habilidades: [
      ["Android", "https://img.icons8.com/?size=100&id=04OFrkjznvcd&format=png&color=ffffff"],
      ["MySQL", "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=ffffff"],
      ["GitHub", "https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff"],
    ],
    detallep: {
      cliente: "Magic Team",
      rol: "Fullstack Developer",
      duration: "4 meses",
      completado: "Julio 2023",
    },
    glowColor: "rgba(188, 100, 255, 0.3)",
    rutaAnterior: "/proyecto/aqua",
    rutaSiguiente: "/proyecto/crawler",
  },
  {
    id: "crawler",
    title: "YouTube Crawler",
    image: crawlerImg,
    descripcion:
      "Proyecto desarrollado para recolectar y analizar datos de videos en YouTube mediante API oficial y técnicas de scraping con Python. Permite explorar canales, filtrar contenido y visualizar métricas clave.",
    detalle:
      "Se diseñó un crawler que combina API de YouTube con BeautifulSoup para obtener información extendida de videos. Los datos se procesan y envían a un frontend en React con filtros, estadísticas y exportación.",
    habilidades: [
      ["Python", "https://img.icons8.com/?size=100&id=13441&format=png&color=ffffff"],
      ["React", "https://img.icons8.com/?size=100&id=123603&format=png&color=ffffff"],
      ["YouTube API", "https://img.icons8.com/?size=100&id=19318&format=png&color=ffffff"],
      ["GitHub", "https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff"],
      ["Docker", "https://img.icons8.com/?size=100&id=qGZRK3KTK57F&format=png&color=000000"],
    ],
    detallep: {
      cliente: "NeuroVision",
      rol: "Python Developer",
      duration: "1 mes",
      completado: "Julio 2024",
    },
    glowColor: "rgba(255, 100, 100, 0.3)",
    rutaAnterior: "/proyecto/magic",
    rutaSiguiente: "/proyecto/sendlove",
  },
  {
    id: "sendlove",
    title: "Send Love",
    image: sendLove,
    descripcion:
      "Send Love es un juego casual para Android creado con Flutter. El jugador lanza corazones evitando obstáculos. Incluye autenticación con Firebase, rankings en tiempo real y niveles progresivos.",
    detalle:
      "El desarrollo se centró en la mecánica tipo 'clicker', con física personalizada y control táctil. Integra Firebase Authentication y Firestore para perfiles y puntuaciones dinámicas.",
    habilidades: [
      ["Android Studio", "https://img.icons8.com/?size=100&id=04OFrkjznvcd&format=png&color=ffffff"],
      ["Firebase", "https://img.icons8.com/?size=100&id=87330&format=png&color=ffffff"],
      ["Play Store", "https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=ffffff"],
      ["GitHub", "https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff"],
    ],
    detallep: {
      cliente: "Freelancer",
      rol: "Fullstack Developer",
      duration: "9 meses",
      completado: "Junio 2024",
    },
    extraButton: {
      text: "Ver en Play Store",
      url: "https://play.google.com/store/apps/details?id=com.cromx.sendlove",
    },
    glowColor: "rgba(255, 100, 100, 0.5)",
    rutaAnterior: "/proyecto/crawler",
    rutaSiguiente: "/proyecto/humanidades",
  },
  {
    id: "humanidades",
    title: "Humanidades 360°",
    image: humanidadesImage,
    descripcion:
      "Aplicación web para explorar y administrar los espacios del campus de Humanidades mediante un mapa interactivo con OpenStreetMap.",
    detalle:
      "Desarrollada con Flutter Web, integra detección por voz, selección de áreas, filtros de búsqueda y generación de formularios PDF para registrar nuevos espacios. Ideal para gestión geográfica académica.",
    habilidades: [
      ["Flutter", "https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000"],
      ["HTML", "https://img.icons8.com/?size=100&id=20909&format=png&color=ffffff"],
      ["OpenStreetMap", "https://img.icons8.com/?size=100&id=mXvPisAuHf76&format=png&color=000000"],
      ["Node.js", "https://img.icons8.com/?size=100&id=54087&format=png&color=000000"],
      ["GitHub", "https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff"],
    ],
    detallep: {
      cliente: "Dino Araya",
      rol: "Fullstack Developer",
      duration: "5 meses",
      completado: "Diciembre 2023",
    },
    glowColor: "rgba(121, 255, 100, 0.3)",
    rutaAnterior: "/proyecto/sendlove",
    rutaSiguiente: "/proyecto/tesis",
  },
];
