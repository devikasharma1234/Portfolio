"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Layers, Sparkles, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Unity Rent",
    category: "P2P Campus Marketplace",
    description:
      "UnityRent is a hyper-local, peer-to-peer (P2P) marketplace designed exclusively for university campuses and societies. It bridges the gap between students who have underutilized resources and those who need them for a short duration, turning hostel clutter into a passive income stream.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2560&auto=format&fit=crop",
    tags: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://my-demo.com",
    githubUrl: "https://github.com/devikasharma1234/UnityRent.",
  },
  {
    id: 2,
    title: "Jal Drishti 2.0",
    category: "AI & Sustainability Platform",
    description:
      "AI-powered platform for Rooftop Rainwater Harvesting feasibility analysis — combining satellite rainfall data, geospatial mapping, and cost estimation to help households, farmers, and governments make smarter water conservation decisions.",
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2560&auto=format&fit=crop",
    tags: ["Next.js", "Python AI", "GeoJSON", "Recharts", "Tailwind CSS"],
    liveUrl: "https://my-demo.com",
    githubUrl: "https://github.com/devikasharma1234/Jal-Drishti-2.0",
  },
  {
    id: 3,
    title: "WanderLust 2.0",
    category: "Full-Stack Rental System",
    description:
      "Scalable MERN-stack rental platform with seamless booking workflows, JWT authentication, and RBAC for guests and hosts. With integrated Razorpay for payments and Cloudinary for media storage, developing advanced search filters for real-time system monitoring.",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2560&auto=format&fit=crop",
    tags: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "Cloudinary"],
    liveUrl: "https://my-demo.com",
    githubUrl: "https://github.com/devikasharma1234/Wanderlust_2.0",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-white/80 dark:bg-[#070712] py-20 px-4 sm:px-6 lg:px-8 font-sans rounded-3xl border border-slate-200/80 dark:border-slate-800/60 shadow-xl dark:shadow-none transition-colors duration-300 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            <Layers className="w-4 h-4" /> Portfolio Showcase
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-wide mb-4">
            Featured <span className="text-[#7B61FF]">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Here are some of my favorite production-ready web applications, P2P marketplaces, and AI platforms I&apos;ve engineered.
          </p>
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              whileHover={{ y: -8 }}
              className="bg-slate-50 dark:bg-[#12131C] border border-slate-200 dark:border-gray-800 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm dark:shadow-2xl hover:border-[#7B61FF]/50 dark:hover:border-[#7B61FF]/40 transition-all duration-300 group"
            >
              <div>
                {/* Project Image Header with Overlay */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md text-white border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Project Content Body */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#7B61FF] transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white dark:bg-black/50 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between gap-3 border-t border-slate-200/80 dark:border-gray-800/80 mt-auto">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#7B61FF] to-indigo-600 text-white shadow-md hover:brightness-110 transition-all"
                  >
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div />
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-black/60 text-slate-900 dark:text-white border border-slate-200 dark:border-gray-800 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <FaGithub className="w-4 h-4 text-purple-500 dark:text-white" /> Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}