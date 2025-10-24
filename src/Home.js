import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Importa las imágenes de los proyectos
import aquaWeb from "./assets/aquaWeb_home.png";
import magicGourmet from "./assets/magicGourmet_home.png";
import crawler from "./assets/modulo_youtube.png";
import sendLove from "./assets/sendLove.png";
import humanidades from "./assets/humanidades.png";
import tesis from "./assets/medical_dashboard.png";
import github from "./assets/github_icon.png";


// Sections
import TestSection from "./componentes/home/TestSection";
import Navbar from "./componentes/home/NavBar";
import HeroSection from "./componentes/home/HeroSection";
import SkillsSection from "./componentes/home/SkillsSection";
import ProjectsSection from "./componentes/home/ProjectsSection";
import ContactSection from "./componentes/home/ContactSection";
import GithubSection from "./componentes/home/GithubStatsSection";
import SocialSection from "./componentes/home/SocialSection";
import FooterSection from "./componentes/home/FooterSection";
import '@fortawesome/fontawesome-free/css/all.min.css';


const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Portafolio CromxDev";
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const projects = [
        { img: aquaWeb, title: "AquaWeb",desc: "Ecommerce platform for selling and managing water jugs.", path: "/ProyectoAqua" },
        { img: magicGourmet, title: "Magic Gourmet", desc:"Culinary web platform for recipes, reservations, and event discovery.", path: "/ProyectoMagic" },
        { img: crawler, title: "CRAWLER", desc: "YouTube data analysis platform using API, scraping, visualization, and export tools.", path: "/ProyectoCrawler" },
        { img: sendLove, title: "SEND LOVE", desc:"Casual Android game with Firebase, real-time rankings, and fun gameplay.", path: "/ProyectoSendLove" },
        { img: humanidades, title: "Humanidades 360°", desc: "Web app for exploring and managing campus spaces via interactive map.", path: "/ProyectoHumanidades" },
        { img: tesis, title: "Medical Data Analysis Platform (SSMN)", desc: "Platform for the Metropolitan North Health Service with predictive and clustering models supporting medical research.", path: "/ProyectoTesis"},
        { img: github, title: "View all projects on GitHub", desc: " ", path: "https://github.com/cromx123"},
    ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans">
      
      <HeroSection />

      <Navbar/>
      {/* <TestSection/> */}

      <SkillsSection/>
      <ProjectsSection projects={projects} onNavigate={handleNavigation} />
      
      <GithubSection />
      <ContactSection />
      
            
      {/* <TestSection /> */}
      <SocialSection />

      <FooterSection />
    </div>
  );
};

export default HomePage;
