"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, Sparkles, ExternalLink, Globe, Briefcase } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "devikasharma862@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "devikasharma862",
      url: "https://www.linkedin.com/in/devikasharma862/",
      icon: FaLinkedin,
      color: "text-blue-500",
      borderColor: "hover:border-blue-500/50",
      bgColor: "bg-blue-500/10",
    },
    {
      name: "GitHub",
      handle: "devikasharma1234",
      url: "https://github.com/devikasharma1234",
      icon: FaGithub,
      color: "text-purple-500 dark:text-white",
      borderColor: "hover:border-purple-500/50",
      bgColor: "bg-purple-500/10",
    },
    {
      name: "LeetCode",
      handle: "devikasharma1234",
      url: "https://leetcode.com/devikasharma1234",
      icon: SiLeetcode,
      color: "text-amber-500",
      borderColor: "hover:border-amber-500/50",
      bgColor: "bg-amber-500/10",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-white/80 dark:bg-[#070712] py-20 px-4 sm:px-6 lg:px-8 font-sans rounded-3xl border border-slate-200/80 dark:border-slate-800/60 shadow-xl dark:shadow-none transition-colors duration-300 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" /> Let&apos;s Connect
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white tracking-wide mb-4">
            Get In <span className="text-[#7B61FF]">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Interested in working together, discussing opportunities, or technical inquiries? Reach out directly!
          </p>
        </motion.div>

        {/* Top Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 p-4 sm:p-5 bg-gradient-to-r from-emerald-500/10 via-purple-500/10 to-blue-500/10 border border-emerald-500/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-3.5 w-3.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
            </span>
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-white block">
                Currently Available for Engineering Roles & Collaborations
              </span>
              <span className="text-xs text-slate-600 dark:text-gray-400">
                Open for Full-Time, Remote, Onsite & Freelance Projects
              </span>
            </div>
          </div>

          <a
            href={`mailto:${emailAddress}`}
            className="px-5 py-2 rounded-xl bg-[#7B61FF] hover:bg-purple-600 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all shrink-0 flex items-center gap-2"
          >
            <Mail className="w-4 h-4" /> Email Me Directly
          </a>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Direct Email & Copy Action */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-slate-50 dark:bg-[#12131C] border border-slate-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm dark:shadow-xl flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-[#7B61FF] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-400 font-semibold">
                    Direct Email Address
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                    {emailAddress}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                Feel free to email me directly for hiring inquiries, project proposals, or technical discussions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200 dark:border-gray-800">
              <button
                onClick={handleCopyEmail}
                className="flex-1 py-2.5 px-4 rounded-xl bg-white dark:bg-black/60 border border-slate-200 dark:border-gray-800 text-slate-800 dark:text-gray-200 text-xs font-semibold flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" /> Copied to Clipboard!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#7B61FF]" /> Copy Email
                  </>
                )}
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="py-2.5 px-4 rounded-xl bg-[#7B61FF] text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-purple-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Open Client
              </a>
            </div>
          </motion.div>

          {/* Card 2: Location & Mobility */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-slate-50 dark:bg-[#12131C] border border-slate-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm dark:shadow-xl flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-400 font-semibold">
                    Location & Mobility
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    Kurukshetra / Haryana, India
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                Based in India with reliable high-speed infrastructure for global remote collaboration and onsite flexibility.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-gray-800">
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <Globe className="w-3.5 h-3.5" /> Remote Work Ready
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5" /> Onsite / Hybrid Open
              </span>
            </div>
          </motion.div>

          {/* Card 3: Social & Coding Platforms (Spans 2 cols on md+) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="md:col-span-2 bg-slate-50 dark:bg-[#12131C] border border-slate-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm dark:shadow-xl"
          >
            <h3 className="text-xs uppercase tracking-wider text-slate-500 dark:text-gray-400 font-semibold mb-4">
              Connect Across Professional & Coding Platforms
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3.5 p-4 rounded-xl bg-white dark:bg-black/60 border border-slate-200 dark:border-gray-800 ${social.borderColor} transition-all duration-300 group shadow-sm hover:shadow-md`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg ${social.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-5 h-5 ${social.color}`} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="flex items-center gap-1 text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#7B61FF] transition-colors">
                        {social.name} <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-xs text-slate-500 dark:text-gray-400 truncate block">
                        @{social.handle}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
