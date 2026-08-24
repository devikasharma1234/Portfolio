"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Calendar, ChevronDown, Code, Palette, Rocket, CheckCircle2, MapPin } from "lucide-react";

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBg: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Frontend Developer Intern",
    company: "Tech Innovation Labs",
    location: "Remote / Hybrid",
    type: "Internship",
    duration: "07.2024 — Present",
    icon: Code,
    iconBg: "from-[#7B61FF] to-indigo-600",
    description:
      "Leading frontend feature development for high-traffic web applications using Next.js 14+, TypeScript, and Tailwind CSS. Focus on performance optimization and modular component design.",
    responsibilities: [
      "Architected scalable, reusable UI component libraries with TypeScript and Tailwind CSS.",
      "Optimized Core Web Vitals, reducing initial load time by 35% through lazy loading & dynamic imports.",
      "Collaborated with UX designers and backend engineers to integrate RESTful APIs & WebSocket streams.",
      "Participated in code reviews and agile sprints to deliver production features on schedule.",
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "REST APIs", "Git"],
  },
  {
    id: "exp-2",
    title: "Tech & Media Lead",
    company: "University Student Organization",
    location: "Kurukshetra, India",
    type: "Leadership / Core Lead",
    duration: "02.2023 — 04.2024",
    icon: Palette,
    iconBg: "from-pink-500 to-rose-600",
    description:
      "Spearheaded digital presence, web development projects, and visual branding across major technical events and hackathons.",
    responsibilities: [
      "Directed UI/UX design standards and branding guidelines across departmental web portals.",
      "Designed and launched responsive event landing pages for 1,000+ registered attendees.",
      "Mentored junior developers in Git workflows, responsive layout math, and frontend fundamentals.",
      "Organized coding competitions, tech talks, and web development workshops.",
    ],
    skills: ["UI/UX Design", "Figma", "Web Architecture", "Leadership", "Event Management"],
  },
  {
    id: "exp-3",
    title: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    type: "Freelance",
    duration: "03.2023 — Present",
    icon: Rocket,
    iconBg: "from-cyan-500 to-blue-600",
    description:
      "Building tailored full-stack solutions, custom marketplaces, and interactive platforms for clients.",
    responsibilities: [
      "Delivered production-ready MERN & Next.js applications from wireframes to cloud deployment.",
      "Implemented secure JWT authentication, Role-Based Access Control (RBAC), and Razorpay payment gateways.",
      "Built MongoDB & PostgreSQL database schemas with optimized query performance.",
      "Integrated Cloudinary for automated media storage and processing.",
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "Razorpay API", "Cloudinary", "Docker"],
  },
];

export default function Experiance() {
  const [expandedId, setExpandedId] = useState<string | null>("exp-1");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className="relative bg-white/80 dark:bg-[#070712] py-20 px-4 sm:px-6 lg:px-8 font-sans rounded-3xl border border-slate-200/80 dark:border-slate-800/60 shadow-xl dark:shadow-none transition-colors duration-300 overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#7B61FF]/10 dark:bg-[#7B61FF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-pink-500/10 dark:bg-pink-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-[#7B61FF] text-sm font-semibold mb-4">
            <Briefcase className="w-4 h-4" /> Career Journey
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-wide mb-4">
            Professional <span className="text-[#7B61FF]">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            My journey through software engineering internships, technical leadership, and freelance development.
          </p>
        </motion.div>

        {/* Experience Accordion / Cards List */}
        <div className="space-y-6">
          {experienceData.map((exp, index) => {
            const Icon = exp.icon;
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.12 }}
                className="bg-slate-50 dark:bg-[#12131C] border border-slate-200 dark:border-gray-800 rounded-2xl shadow-sm dark:shadow-2xl overflow-hidden hover:border-[#7B61FF]/40 dark:hover:border-[#7B61FF]/30 transition-all duration-300"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-slate-100/50 dark:hover:bg-gray-800/30 transition-colors"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${exp.iconBg} flex items-center justify-center text-white shadow-md shrink-0`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white hover:text-[#7B61FF] transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-gray-400 mt-1">
                        <span className="font-semibold text-slate-800 dark:text-gray-200">
                          {exp.company}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#7B61FF]" /> {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-[#7B61FF] border border-purple-200 dark:border-purple-800/50">
                      <Calendar className="w-3.5 h-3.5" /> {exp.duration}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full bg-slate-200/70 dark:bg-gray-800 flex items-center justify-center text-slate-600 dark:text-gray-300 transition-transform duration-300 ${
                        isExpanded ? "rotate-180 bg-[#7B61FF] text-white" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Collapsible Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 pt-2 border-t border-slate-200/80 dark:border-gray-800/80"
                    >
                      <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Key Responsibilities */}
                      <div className="mb-5">
                        <h4 className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-400 font-semibold mb-3">
                          Key Contributions & Impact
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-gray-300">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200/60 dark:border-gray-800/60">
                        {exp.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-black/60 text-[#7B61FF] border border-purple-200 dark:border-purple-900/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
