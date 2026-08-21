import React from 'react';
import Skills2 from '../ui/Marquee';
import { FaCss3Alt } from "react-icons/fa6";
import { 
  SiHtml5, 
  SiJavascript, 
  SiTailwindcss, 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiExpress, 
  SiSocketdotio, 
  SiDocker 
} from "react-icons/si";

import { 
  SiGit, 
  SiGithub, 
  SiGithubactions, 
  SiPostman, 
  SiPostgresql, 
  SiMongodb, 
  SiRedis 
} from "react-icons/si";

export const development = [
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: "Socket.io", icon: SiSocketdotio, color: "text-white" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
];

export const toolsStack = [
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-white" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "text-[#2088FF]" },
  { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
   // DevOps Infinity Loop
];

const About = () => {
  return (
    <section className="bg-[#070712] py-20 px-4 sm:px-6 lg:px-8 font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#7B61FF] mb-6 tracking-wide">
            Skills
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer with expertise in modern web technologies
            and an urge to create exceptional user experiences.
          </p>
        </div>

      {/* Development */}
      <h2 className="text-2xl font-semibold text-[#FF66A1] mb-6">Development</h2>
      <Skills2 speed={40} pauseOnHover>
        {development.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div 
              key={idx} 
              // Square dimensions, stacked flex-col, and gradient background 
              className="flex flex-col items-center justify-center gap-4 w-36 h-36 bg-gradient-to-b from-[#232533] to-[#12131C] text-gray-100 rounded-2xl font-medium shrink-0 border border-gray-700/50 hover:border-gray-500 transition-colors shadow-lg group"
            >
              {/* 2. Render the react-icon with its specific brand color and size */}
              <Icon 
                className={`w-14 h-14 drop-shadow-md transition-transform group-hover:scale-110 ${tech.color}`} 
              />
              <span className="text-[15px] tracking-wide">{tech.name}</span>
            </div>
          );
        })}
      </Skills2>

      {/* Tools and Databases */}
      <h2 className="text-2xl font-semibold text-[#FF66A1] mb-6">Tools and Databases</h2>
      <Skills2 speed={40} pauseOnHover>
        {toolsStack.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div 
              key={idx} 
              // Square dimensions, stacked flex-col, and gradient background 
              className="flex flex-col items-center justify-center gap-4 w-36 h-36 bg-gradient-to-b from-[#232533] to-[#12131C] text-gray-100 rounded-2xl font-medium shrink-0 border border-gray-700/50 hover:border-gray-500 transition-colors shadow-lg group"
            >
              {/* 2. Render the react-icon with its specific brand color and size */}
              <Icon 
                className={`w-14 h-14 drop-shadow-md transition-transform group-hover:scale-110 ${tech.color}`} 
              />
              <span className="text-[15px] tracking-wide">{tech.name}</span>
            </div>
          );
        })}
      </Skills2>
       

      </div>
    </section>
  );
};

export default About;