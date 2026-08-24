"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Calendar, MapPin, Award, Sparkles, CheckCircle2 } from "lucide-react";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade: string;
  gradeLabel: string;
  description: string;
  courses: string[];
  achievements: string[];
  iconBg: string;
  accentColor: string;
}

const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "UIET, Kurukshetra University",
    location: "Kurukshetra, Haryana, India",
    duration: "2022 — 2026",
    grade: "7.0 CGPA",
    gradeLabel: "JEE Main 2022: 93.2 %ile",
    description:
      "Specializing in Software Engineering, Full-Stack Architecture, and Machine Learning. Actively engaged in technical leadership, competitive programming, and building real-world projects.",
    courses: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "Compiler Design",
      "Machine Learning",
    ],
    achievements: [
      "Active organizer for departmental tech fests and coding workshops.",
      "Solved 650+ algorithmic problems across LeetCode & competitive platforms.",
      "Built multiple production-ready full-stack & AI applications.",
    ],
    iconBg: "from-purple-500 to-indigo-600",
    accentColor: "#7B61FF",
  },
  {
    id: "edu-2",
    degree: "Senior Secondary Education (Class XII - CBSE)",
    institution: "Central Board of Secondary Education",
    location: "Haryana, India",
    duration: "2020 — 2022",
    grade: "92.4%",
    gradeLabel: "Science Stream (PCM + CS)",
    description:
      "Core focus on Physics, Chemistry, Mathematics, and Computer Science. Developed strong foundational logic, problem-solving skills, and Python programming.",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science (Python)", "English"],
    achievements: [
      "School Topper in Computer Science with distinction.",
      "Participated in State Science & Technology Exhibitions.",
    ],
    iconBg: "from-pink-500 to-rose-600",
    accentColor: "#FF66A1",
  },
  {
    id: "edu-3",
    degree: "Secondary School Certificate (Class X - CBSE)",
    institution: "Central Board of Secondary Education",
    location: "Haryana, India",
    duration: "2019 — 2020",
    grade: "94.6%",
    gradeLabel: "Distinction in Science & Math",
    description:
      "Comprehensive secondary education with academic distinction across all core subjects, laying a solid analytical foundation.",
    courses: ["Mathematics", "Science", "Social Studies", "English", "Hindi"],
    achievements: [
      "Awarded Certificate of Merit for Outstanding Performance in Science.",
      "Captain of School Mathematics & Quiz Team.",
    ],
    iconBg: "from-cyan-500 to-blue-600",
    accentColor: "#00B4D8",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-white/80 dark:bg-[#070712] py-20 px-4 sm:px-6 lg:px-8 font-sans rounded-3xl border border-slate-200/80 dark:border-slate-800/60 shadow-xl dark:shadow-none transition-colors duration-300 overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

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
            <Sparkles className="w-4 h-4" /> Academic Journey
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-wide mb-4">
            Education & <span className="text-[#7B61FF]">Qualifications</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            My academic foundation, specialized computer science coursework, and academic milestones.
          </p>
        </motion.div>

        {/* Education Timeline Cards */}
        <div className="relative space-y-8">
          {/* Vertical Connecting Glow Line (Desktop) */}
          <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 opacity-30" />

          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="relative bg-slate-50 dark:bg-[#12131C] border border-slate-200 dark:border-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-sm dark:shadow-2xl hover:border-purple-500/40 dark:hover:border-purple-500/30 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row items-start gap-6">
                {/* Icon Badge */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.iconBg} flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <GraduationCap className="w-7 h-7" />
                </div>

                {/* Content Container */}
                <div className="flex-1 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#7B61FF] transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600 dark:text-gray-400 mt-1">
                        <span className="font-semibold text-slate-800 dark:text-gray-200">
                          {edu.institution}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-gray-400">
                          <MapPin className="w-3.5 h-3.5" /> {edu.location}
                        </span>
                      </div>
                    </div>

                    {/* Duration & Grade Badges */}
                    <div className="flex sm:flex-col items-end sm:items-end gap-2 shrink-0 mt-2 sm:mt-0">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/60 text-[#7B61FF] border border-purple-200 dark:border-purple-800/50">
                        <Calendar className="w-3.5 h-3.5" /> {edu.duration}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {edu.grade}
                        </span>
                        {edu.gradeLabel && (
                          <span className="hidden md:inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-gray-300">
                            {edu.gradeLabel}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  {/* Coursework Tags */}
                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                      <BookOpen className="w-3.5 h-3.5 text-[#7B61FF]" /> Key Modules & Coursework
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-black/50 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-800 group-hover:border-purple-500/20 transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                      <Award className="w-3.5 h-3.5 text-[#FF66A1]" /> Highlights & Achievements
                    </div>
                    <ul className="space-y-1.5">
                      {edu.achievements.map((ach, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-gray-400"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
