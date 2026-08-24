"use client";

import React from "react";
import { motion } from "framer-motion";
import { FlipWords } from "../ui/FlipWords";
import { Mail, Sparkles, ArrowDown, Code2, Terminal, Cpu, Database } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Hero() {
  const words = [
    "A full-stack developer, always building",
    "Turning edge cases into clean logic",
    "An algorithmic thinker & builder",
    "Pixels on the front, precision underneath",
    "An ML enthusiast, chasing better models",
  ];

  return (
    <section className="relative font-sans pt-6 sm:pt-10 pb-6 flex flex-col items-center justify-center">
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-4">

        {/* Welcome Tag Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-950/50 border border-purple-500/20 text-[#7B61FF] dark:text-purple-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-[#7B61FF]" /> Welcome to my Portfolio
        </motion.div>

        {/* Profile Avatar Container with Floating Tech Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-8 group"
        >
          {/* Animated Glow Ring Behind Avatar */}
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#7B61FF] via-[#FF66A1] to-[#00B4D8] opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />

          {/* Profile Avatar Image */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-slate-900 overflow-hidden shadow-2xl">
            <img
              src="/images/profile/pic2.jpeg"
              alt="Devika Sharma"
              className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Waving Hand Emoji Indicator */}
          <div className="absolute bottom-1 -right-2 text-3xl sm:text-4xl animate-bounce">
            <span>👋</span>
          </div>

          {/* Floating Orbiting Tech Badges */}
          <div className="absolute -top-2 -left-4 p-2 rounded-xl bg-white dark:bg-[#12131C] border border-slate-200 dark:border-gray-800 shadow-lg hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-gray-200 animate-pulse">
            <Code2 className="w-4 h-4 text-[#7B61FF]" /> React & Next
          </div>
          <div className="absolute -bottom-2 -left-6 p-2 rounded-xl bg-white dark:bg-[#12131C] border border-slate-200 dark:border-gray-800 shadow-lg hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-gray-200">
            <Cpu className="w-4 h-4 text-[#FF66A1]" /> ML & AI
          </div>
          <div className="absolute -top-2 -right-6 p-2 rounded-xl bg-white dark:bg-[#12131C] border border-slate-200 dark:border-gray-800 shadow-lg hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-gray-200">
            <Database className="w-4 h-4 text-[#00B4D8]" /> MongoDB
          </div>
        </motion.div>

        {/* Heading Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-3"
        >
          Hi there! I&apos;m{" "}
          <span className="bg-gradient-to-r from-[#7B61FF] via-purple-500 to-[#FF66A1] bg-clip-text text-transparent">
            Devika Sharma
          </span>
        </motion.h1>

        {/* Animated FlipWords Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl sm:text-3xl font-bold py-2 h-16 sm:h-20 flex items-center justify-center"
        >
          <FlipWords
            words={words}
            duration={3000}
            className="text-orange-500 dark:text-orange-400 font-semibold"
          />
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-700 dark:text-gray-300 text-base sm:text-xl max-w-2xl leading-relaxed mt-2 mb-8 font-medium dark:font-normal"
        >
          From real-time collaborative tools to scalable web applications, I bring ideas to life with clean code and modern architecture.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <a
            href="mailto:devikasharma862@gmail.com"
            className="flex items-center gap-2 bg-gradient-to-r from-[#7B61FF] to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-3.5 px-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/devikasharma862/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3.5 rounded-full bg-slate-100 dark:bg-[#12131C] text-slate-800 dark:text-white border border-slate-200 dark:border-gray-800 hover:border-blue-500 hover:text-blue-500 hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <FaLinkedin className="w-5 h-5 text-blue-500" />
            </a>

            <a
              href="https://github.com/devikasharma1234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3.5 rounded-full bg-slate-100 dark:bg-[#12131C] text-slate-800 dark:text-white border border-slate-200 dark:border-gray-800 hover:border-purple-500 hover:text-purple-500 hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <FaGithub className="w-5 h-5 text-purple-500 dark:text-white" />
            </a>

            <a
              href="https://leetcode.com/devikasharma1234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-3.5 rounded-full bg-slate-100 dark:bg-[#12131C] text-slate-800 dark:text-white border border-slate-200 dark:border-gray-800 hover:border-amber-500 hover:text-amber-500 hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <SiLeetcode className="w-5 h-5 text-amber-500" />
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-slate-400 dark:text-gray-500 flex flex-col items-center text-xs gap-1 mt-4"
        >
          <span>Scroll down</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>

      </div>
    </section>
  );
}
