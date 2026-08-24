"use client";
import React, { useState, useEffect } from "react";
import Hero from "../sections/Hero";

// Grid Background Component
const GridBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Get mouse position relative to the viewport
      const { clientX, clientY } = event;
      // Calculate position from the center of the screen
      const x = clientX - window.innerWidth / 2;
      const y = clientY - window.innerHeight / 2;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(120, 119, 198, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(120, 119, 198, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
        animation: "moveGrid 20s linear infinite",
        // Apply a subtle transform based on mouse position for a parallax effect
        transform: `translate(${mousePosition.x / 30}px, ${mousePosition.y / 30}px)`,
      }}
    >
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 w-[60vmin] h-[60vmin] bg-blue-400/20 dark:bg-cyan-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
      {/* Keyframes for the animation */}
      <style>
        {`
          @keyframes moveGrid {
            0% { background-position: 0 0; }
            100% { background-position: 80px 80px; }
          }
        `}
      </style>
    </div>
  );
};

// Main App Component
export default function GridBackgroundView() {
  return (
    <div className="relative w-full min-h-[calc(100vh-6rem)] bg-white/80 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/60 shadow-xl dark:shadow-none overflow-hidden rounded-3xl transition-colors duration-300">
      <GridBackground />
      <div className="relative z-10 flex items-center justify-center h-full py-12 sm:py-16">
        <div className="text-center px-4">
          <Hero/>
        </div>
      </div>
    </div>
  );
}
