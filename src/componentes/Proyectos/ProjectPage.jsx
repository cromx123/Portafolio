import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "./projectsData";
import ProyectoLayout from "../LayoutProyect";

export default function ProyectoPage() {
  const { id } = useParams();
  const proyecto = projects.find((p) => p.id === id);

  useEffect(() => {
    if (proyecto) document.title = `${proyecto.title} - Proyecto`;
  }, [proyecto]);

  if (!proyecto) return <div>Proyecto no encontrado</div>;
  return <ProyectoLayout {...proyecto} />;
}
