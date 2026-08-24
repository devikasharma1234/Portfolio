"use client";

import React from "react";
import { Sparkles, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 mt-10 border-t border-slate-200/80 dark:border-slate-800/80 font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs sm:text-sm text-slate-500 dark:text-gray-400">

        {/* Copyright Notice */}
        <div className="flex items-center gap-1.5 font-medium">
          <span>© {currentYear}</span>
          <span className="font-bold text-slate-800 dark:text-gray-200">Devika Sharma</span>
          <span>•</span>
          <span>All rights reserved.</span>
        </div>

        {/* Tagline / Built With */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-gray-400">
          <span>Designed & Built by</span>
          <Heart className="w-3.5 h-3.5 text-[#FF66A1] fill-[#FF66A1]" />
          <span>Devika Sharma</span>
        </div>

      </div>
    </footer>
  );
}
