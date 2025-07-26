import React from "react";
import { cn } from "../../lib/utils";

const GlowBackground = ({ 
  children, 
  glowColor = "rgba(173,255,47,0.2)" 
}) => {
  return (
    <div className="relative min-h-screen bg-zinc-900 overflow-hidden text-white">
      {/* Glow izquierda */}
      <div 
        className="absolute left-[-150px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${glowColor}, transparent 80%)`
        }}
      />

      {/* Glow derecha */}
      <div 
        className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] blur-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${glowColor}, transparent 80%)`
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlowBackground;