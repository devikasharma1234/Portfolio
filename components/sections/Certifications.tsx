"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, Sparkles, CheckCircle, Code2, Cloud, Brain, Database, Cpu } from "lucide-react";

interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl: string;
  icon: React.ComponentType<{ className?: string }>;
  iconGradient: string;
  skills: string[];
  featured?: boolean;
}

const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Second Runner up at Tech Jam 2.0",
    issuer: "Code Rangers | MLH",
    issueDate: "2025",
    credentialId: "META-FE-8921",
    credentialUrl: "https://drive.google.com/file/d/1neeoZFwqgvBL8Q1tfS2_dT0UPVMLnLjy/view?usp=sharing",
    icon: Code2,
    iconGradient: "from-blue-600 to-indigo-600",
    skills: ["React.js", "Advanced JavaScript", "Node.js", "UI/UX Principles", "Web Performance"],
    featured: true,
  },
  {
    id: "cert-2",
    title: "Finalist at HackGround India",
    issuer: "TechVerse Nexus ",
    issueDate: "2025",
    credentialId: "AWS-ACAD-7894",
    credentialUrl: "https://drive.google.com/file/d/1o34AiZjtPdaZrcW8ynVQKKQ65r11K7u1/view?usp=sharing",
    icon: Cloud,
    iconGradient: "from-amber-500 to-orange-600",
    skills: ["Cloud Architecture", "React.js", "Docker", "Serverless Architecture"],
    featured: true,
  },
  {
    id: "cert-3",
    title: "Semi Finalists at Hackamania at Microsoft Gurugram",
    issuer: "The Elites",
    issueDate: "2025",
    credentialId: "DL-ML-5520",
    credentialUrl: "https://drive.google.com/file/d/1uy-GyD4DGThkbrbmWjqiZIQ2nw2hk4sa/view?usp=sharing",
    icon: Brain,
    iconGradient: "from-purple-600 to-[#7B61FF]",
    skills: ["Microsoft Azure", "Python", "AI", "Machine Learning", "Model Deployment", "MLOps", "Data Science", "Model Tuning"],
    featured: true,
  },
  {
    id: "cert-4",
    title: "Gen AI",
    issuer: "Linked Learnings",
    issueDate: "2025 — Present",
    credentialUrl: "https://drive.google.com/file/d/1n4k9QfyZvutu_XJZ2GZREHNclxBoEmJ0/view?usp=sharing",
    icon: Cpu,
    iconGradient: "from-[#FF66A1] to-rose-600",
    skills: ["Generative AI", "Deep Learning", "AI-driven Development"],
    featured: false,
  },
  {
    id: "cert-5",
    title: "Design Thinking Workshop",
    issuer: "E Cell UIET Kurukshetra",
    issueDate: "2023",
    credentialId: "MDB-DEV-3312",
    credentialUrl: "https://drive.google.com/file/d/1l67NpFSYeR0WyWgLD6D2DASnUyMIgtLs/view?usp=sharing",
    icon: Database,
    iconGradient: "from-emerald-500 to-teal-600",
    skills: ["Empathize", "Define", "Ideate", "Prototype", "Testing"],
    featured: false,
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="relative bg-white/80 dark:bg-[#070712] py-20 px-4 sm:px-6 lg:px-8 font-sans rounded-3xl border border-slate-200/80 dark:border-slate-800/60 shadow-xl dark:shadow-none transition-colors duration-300 overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-pink-500/10 dark:bg-pink-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-[#FF66A1] text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" /> Verified Credentials
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-wide mb-4">
            Certifications & <span className="text-[#FF66A1]">Achievements</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Industry recognized certifications, specialization badges, and competitive achievements.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="relative bg-slate-50 dark:bg-[#12131C] border border-slate-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col justify-between shadow-sm dark:shadow-xl hover:border-pink-500/40 dark:hover:border-pink-500/30 transition-all duration-300 group"
              >
                <div>
                  {/* Card Header: Icon & Verified Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.iconGradient} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <CheckCircle className="w-3 h-3" /> Verified
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#FF66A1] transition-colors leading-snug mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-600 dark:text-[#7B61FF] mb-4">
                    {cert.issuer} • <span className="text-slate-500 dark:text-gray-400 font-normal">{cert.issueDate}</span>
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white dark:bg-black/50 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Credential Link */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-gray-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 dark:text-gray-400 truncate max-w-[150px]">
                    {cert.credentialId ? `ID: ${cert.credentialId}` : "Credential Link"}
                  </span>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-white hover:text-[#FF66A1] dark:hover:text-[#FF66A1] transition-colors"
                  >
                    View <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
