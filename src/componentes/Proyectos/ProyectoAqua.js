import React, { useEffect } from "react";
import ProyectoLayout from "../LayoutProyect";
import aquaWeb from "../../assets/aquaWeb_home.png";

const ProyectoAqua = () => {
  useEffect(() => {
    document.title = "AquaWeb - Proyecto";
  }, []);

  return (
    <ProyectoLayout
      title="AquaWeb"
      image={aquaWeb}
      descripcion="AquaWeb es una plataforma web creada para la administración y venta de agua purificada. Su interfaz amigable permite a los clientes realizar pedidos de bidones, programar entregas a domicilio y consultar su historial de compras. Se diseñó con un enfoque en eficiencia, claridad visual y facilidad de uso tanto para clientes como administradores."
      detalle="El sistema cuenta con autenticación por roles (cliente, operador, admin), conexión a base de datos MySQL, un panel de control para la gestión de pedidos, reportes y usuarios. Además, se implementaron buenas prácticas de seguridad, estructura modular y diseño responsive para todo tipo de dispositivos."
      habilidades={[
        ["HTML", "https://img.icons8.com/?size=100&id=20909&format=png&color=ffffff"],
        ["CSS", "https://img.icons8.com/?size=100&id=21278&format=png&color=ffffff"],
        ["PHP", "https://img.icons8.com/?size=100&id=XNQU0Xcm2I9s&format=png&color=ffffff"],
        ["MYSQL", "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=ffffff"],
        ["GITHUB", "https://img.icons8.com/?size=100&id=106562&format=png&color=ffffff"],
      ]}
      detallep={{
        cliente: "Dino Araya",
        rol: "Fullstack Developer",
        duration: "6 meses",
        completado: "Diciembre 2023",
      }}
      glowColor="rgba(100,200,255,0.3)"
      rutaAnterior="/ProyectoHumanidades"
      rutaSiguiente="/ProyectoMagic"
    />
  );
};

export default ProyectoAqua;
