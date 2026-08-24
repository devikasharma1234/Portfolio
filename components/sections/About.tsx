"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Code2, Terminal, Database, Cpu, CheckCircle2, UserCheck } from "lucide-react";

export default function About() {
  const cards = [
    {
      id: 1,
      title: "Frontend Expertise",
      icon: Code2,
      accentColor: "#FF66A1",
      hoverBorder: "hover:border-pink-500/50 dark:hover:border-pink-500/40",
      bulletBg: "bg-[#FF66A1]",
      shadowColor: "shadow-[0_0_8px_#FF66A1]",
      items: [
        "Crafted responsive & dynamic UIs using React.js and Next.js App Router",
        "Ensuring consistent functionality and appearance across modern browsers.",
        "Prioritized accessibility (a11y), core web vitals, & modular component architecture",
      ],
    },
    {
      id: 2,
      title: "Algorithmic & Problem Solving",
      icon: Terminal,
      accentColor: "#00E676",
      hoverBorder: "hover:border-emerald-500/50 dark:hover:border-emerald-500/40",
      bulletBg: "bg-[#00E676]",
      shadowColor: "shadow-[0_0_8px_#00E676]",
      items: [
        "Solved 250+ algorithmic problems across LeetCode & competitive programming platforms",
        "Strong foundation in Data Structures, Graph Algorithms, OOPs & OS",
        "200+ GitHub commits building production-grade software solutions",
      ],
    },
    {
      id: 3,
      title: "Backend & Systems",
      icon: Database,
      accentColor: "#00B4D8",
      hoverBorder: "hover:border-cyan-500/50 dark:hover:border-cyan-500/40",
      bulletBg: "bg-[#00B4D8]",
      shadowColor: "shadow-[0_0_8px_#00B4D8]",
      items: [
        "Developed scalable RESTful APIs and microservices using Node.js & Express",
        "Implemented real-time ticket management using WebSockets & Redis Pub/Sub architecture",
        "Containerized applications using Docker with PostgreSQL & MongoDB databases",
      ],
    },
    {
      id: 4,
      title: "Engineering Philosophy",
      icon: Cpu,
      accentColor: "#FFD166",
      hoverBorder: "hover:border-amber-500/50 dark:hover:border-amber-500/40",
      bulletBg: "bg-[#FFD166]",
      shadowColor: "shadow-[0_0_8px_#FFD166]",
      items: [
        "Commitment to clean code, robust architecture, & user-first product design",
        "Agile collaboration, technical documentation, & continuous peer mentorship",
        "Chasing better models — integrating Machine Learning & edge AI solutions",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-white/80 dark:bg-[#070712] py-20 px-4 sm:px-6 lg:px-8 font-sans rounded-3xl border border-slate-200/80 dark:border-slate-800/60 shadow-xl dark:shadow-none transition-colors duration-300 overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#7B61FF]/10 dark:bg-[#7B61FF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-pink-500/10 dark:bg-pink-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#7B61FF] text-sm font-semibold mb-4">
            <UserCheck className="w-4 h-4" /> Get To Know Me
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-wide mb-4">
            About <span className="text-[#7B61FF]">Me</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer with expertise in modern web technologies,
            algorithmic problem solving, and an urge to create exceptional user experiences.
          </p>
        </motion.div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`bg-slate-50 dark:bg-[#12131C] border border-slate-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm dark:shadow-2xl ${card.hoverBorder} transition-all duration-300 group`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl bg-slate-200/80 dark:bg-black/50 border border-slate-300 dark:border-gray-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{ color: card.accentColor }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3
                    className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
                    style={{ color: card.accentColor }}
                  >
                    {card.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className={`w-2 h-2 rounded-full ${card.bulletBg} ${card.shadowColor} mt-2 flex-shrink-0`}
                      />
                      <span className="text-slate-700 dark:text-gray-300 text-[15px] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}