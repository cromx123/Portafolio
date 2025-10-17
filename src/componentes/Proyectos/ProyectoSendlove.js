import React, { useEffect } from "react";
import ProyectoLayout from "../LayoutProyect";
import sendLove from "../../assets/sendLove.png";

const ProyectoSendLove = () => {
  useEffect(() => {
    document.title = "Send Love - Proyecto";
  }, []);

  return (
    <ProyectoLayout
      title="Send Love"
      image={sendLove}
      descripcion="Send Love es un juego casual para Android, creado con Flutter, donde el usuario lanza corazones evitando obstáculos. Cuenta con autenticación mediante Firebase, rankings en tiempo real y niveles de dificultad progresiva. Su diseño y jugabilidad buscan ofrecer una experiencia divertida y adictiva."
      detalle="El desarrollo se centró en la mecánica de juego tipo 'clicker', con física personalizada y control táctil. Además, integra Firebase Authentication para crear perfiles, y Firestore para almacenar puntuaciones y rankings dinámicos. Fue diseñado para ejecutarse fluidamente en dispositivos Android de gama media."
      habilidades={[
        ["Android Studio", "https://img.icons8.com/?size=100&id=04OFrkjznvcd&format=png&color=ffffff"],
        ["Firebase", "https://img.icons8.com/?size=100&id=87330&format=png&color=ffffff"],
        ["Play Store", "https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=ffffff"],
        ["GitHub", "https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff"],
      ]}
      detallep={{
        cliente: "Freelancer",
        rol: "Fullstack Developer",
        duration: "9 meses",
        completado: "Junio 2024",
      }}
      extraButton={{
        text: "Ver en Play Store",
        url: "https://play.google.com/store/apps/details?id=com.cromx.sendlove",
      }}
      glowColor = "rgba(255, 100, 100, 0.5)"
      rutaAnterior="/ProyectoCrawler"
      rutaSiguiente="/ProyectoHumanidades"
    />
  );
};

export default ProyectoSendLove;
