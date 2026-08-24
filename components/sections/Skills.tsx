"use client";

import React from "react";
import { motion } from "framer-motion";
import Skills2 from "../ui/Marquee";
import { FaCss3Alt, FaJava } from "react-icons/fa6";
import { Cpu, Code2, Wrench, Terminal } from "lucide-react";
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
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiPostman,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiCplusplus,
  SiPython,
} from "react-icons/si";

export const languagesStack = [
  { name: "Java", icon: FaJava, color: "text-[#ED8B00]" },
  { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
  { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
];

export const development = [
  { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-slate-900 dark:text-white" },
];

export const toolsStack = [
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "text-slate-900 dark:text-white" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "text-[#2088FF]" },
  { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: "Express.js", icon: SiExpress, color: "text-slate-700 dark:text-gray-300" },
  { name: "Socket.io", icon: SiSocketdotio, color: "text-slate-900 dark:text-white" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-white/80 dark:bg-[#070712] py-20 px-4 sm:px-6 lg:px-8 font-sans min-h-screen flex items-center justify-center rounded-3xl border border-slate-200/80 dark:border-slate-800/60 shadow-xl dark:shadow-none transition-colors duration-300 overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#FF66A1]/10 dark:bg-[#FF66A1]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#7B61FF]/10 dark:bg-[#7B61FF]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-[#FF66A1] text-sm font-semibold mb-4">
            <Cpu className="w-4 h-4" /> Technical Arsenal
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-wide mb-4">
            Skills & <span className="text-[#FF66A1]">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of programming languages, web frameworks, databases, and development tools I work with daily.
          </p>
        </motion.div>

        {/* Category 1: Programming Languages */}
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-6">
            <Terminal className="w-6 h-6 text-[#7B61FF]" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Programming Languages
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {languagesStack.map((lang, idx) => {
              const Icon = lang.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="flex flex-col items-center justify-center gap-3 p-5 bg-slate-50 dark:bg-[#12131C] text-slate-800 dark:text-gray-100 rounded-2xl font-semibold border border-slate-200 dark:border-gray-800 hover:border-[#7B61FF]/50 dark:hover:border-[#7B61FF]/40 transition-all duration-300 shadow-sm dark:shadow-xl group"
                >
                  <Icon
                    className={`w-10 h-10 drop-shadow-md transition-transform group-hover:scale-110 ${lang.color}`}
                  />
                  <span className="text-sm font-bold tracking-wide">{lang.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Category 2: Development */}
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-6">
            <Code2 className="w-6 h-6 text-[#FF66A1]" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Frontend & Core Development
            </h3>
          </div>

          <Skills2 speed={35} pauseOnHover>
            {development.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center gap-3 w-36 h-36 bg-slate-50 dark:bg-[#12131C] text-slate-800 dark:text-gray-100 rounded-2xl font-semibold shrink-0 border border-slate-200 dark:border-gray-800 hover:border-pink-500/50 dark:hover:border-pink-500/40 transition-all duration-300 shadow-sm dark:shadow-xl group"
                >
                  <Icon
                    className={`w-12 h-12 drop-shadow-md transition-transform group-hover:scale-110 ${tech.color}`}
                  />
                  <span className="text-xs sm:text-sm tracking-wide text-center px-1">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </Skills2>
        </div>

        {/* Category 3: Tools and Databases */}
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-6">
            <Code2 className="w-6 h-6 text-[#FF66A1]" />
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Backend, DataBase & Devops
            </h3>
          </div>

          <Skills2 speed={35} pauseOnHover>
            {toolsStack.map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center gap-3 w-36 h-36 bg-slate-50 dark:bg-[#12131C] text-slate-800 dark:text-gray-100 rounded-2xl font-semibold shrink-0 border border-slate-200 dark:border-gray-800 hover:border-pink-500/50 dark:hover:border-pink-500/40 transition-all duration-300 shadow-sm dark:shadow-xl group"
                >
                  <Icon
                    className={`w-12 h-12 drop-shadow-md transition-transform group-hover:scale-110 ${tech.color}`}
                  />
                  <span className="text-xs sm:text-sm tracking-wide text-center px-1">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </Skills2>
        </div>

      </div>
    </section>
  );
}