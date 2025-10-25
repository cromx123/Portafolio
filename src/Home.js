import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Portafolio CromxDev";
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  const projects = [
        {  id: "aqua", img: aquaWeb, title: t("projects.aquaWeb.title"),desc: t("projects.aquaWeb.description")},
        {  id: "magic", img: magicGourmet, title: t("projects.magicGourmet.title"), desc: t("projects.magicGourmet.description")},
        {  id: "crawler",img: crawler, title: t("projects.crawlerApi.title"), desc: t("projects.crawlerApi.description")},
        {  id: "sendlove",img: sendLove, title: t("projects.sendLove.title"), desc: t("projects.sendLove.description")},
        {  id: "humanidades",img: humanidades, title: t("projects.humanidades.title"), desc: t("projects.humanidades.description")},
        { id: "tesis",img: tesis, title: t("projects.tesis.title"), desc: t("projects.tesis.description")},
        { id: "github",img: github, title: t("projects.githubFinder.title"), desc: " ", external: true, url: "https://github.com/cromx123" },
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
