import React from "react";

const GlowBackground = ({ 
  children, 
  glowColor = "rgba(236, 72, 153, 0.15)" // Pink por defecto, más sutil
}) => {
  // SVG de Rejilla (Mismo que en el resto del sitio)
  const gridSvg = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='rgba(255, 255, 255, 0.03)' stroke-width='1'/%3E%3C/svg%3E`;

  return (
    <div className="relative min-h-screen bg-[#05000a] overflow-hidden text-gray-300 selection:bg-pink-500/30">
      
      {/* 1. Fondo de Rejilla */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: `url("${gridSvg}")` }} 
      />

      {/* 2. Glow Izquierda (Ambiental) */}
      <div 
        className="absolute left-[-20%] top-[20%] w-[600px] h-[600px] blur-[120px] pointer-events-none opacity-40"
        style={{ background: `radial-gradient(circle, ${glowColor}, transparent 70%)` }}
      />

      {/* 3. Glow Derecha (Ambiental) */}
      <div 
        className="absolute right-[-20%] bottom-[10%] w-[500px] h-[500px] blur-[100px] pointer-events-none opacity-30"
        style={{ background: `radial-gradient(circle, rgba(34, 211, 238, 0.15), transparent 70%)` }} // Cyan sutil
      />

      {/* 4. Contenido */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowBackground;