"use client"
import React from 'react';
import { FlipWords } from '../ui/FlipWords';

// Helper component for social media links for cleaner code
const SocialLink: React.FC<{ href: string; ariaLabel: string; children: React.ReactNode }> = ({ href, ariaLabel, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="bg-gray-200 dark:bg-gray-700 p-3 rounded-full text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
  >
    {children}
  </a>
);

// Main Hero Component
const HeroSection: React.FC = () => {
  return (
    <section className="relative font-sans overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center p-8 max-w-2xl mx-auto">
        {/* Avatar Section */}
        <div className="relative mb-8">
          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-700 p-1 shadow-lg dark:shadow-gray-800">
            <img
              src="/images/profile/pic2.jpeg" // Updated image URL
              alt="Rose's avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 -right-2 text-4xl animate-wave">
             <span>👋</span>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl md:text-4xl text-black dark:text-white leading-tight">
          Hi there! I&apos;m <span className="font-bold text-purple-500">Devika Sharma</span></h1>
          <div className="text-3xl font-bold p-3">
            <FlipWords
              words={["A full-stack developer, always building",
                 "Turning edge cases into clean logic",
                  "An algorithmic thinker, builder",
                  "Pixels on the front, precision underneath",
                  "An ML enthusiast, chasing better models"]}
              duration={3000}
              className="text-orange-500 dark:text-orange-400 font-semibold"
            />
            {" "}
          </div>
          <p className='text-yellow-100 text-xl p-4'>From real-time collaborative tools to scalable web applications,
             I try to bring ideas to life with code.</p>
        

        {/* Action Buttons */}
        <div className="flex items-center gap-4 mt-12">
          <a
            href="mailto:example@email.com"
            className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Get In Touch
          </a>
          <SocialLink href="https://linkedin.com" ariaLabel="LinkedIn Profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </SocialLink>
          <SocialLink href="https://github.com" ariaLabel="GitHub Profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/></svg>
          </SocialLink>
        </div>
      </div>
    </section>
  );
};

// To make this a runnable app, we export a default App component
export default function Hero() {
  // We need to add the animation keyframes to the document's head
  // as Tailwind doesn't support them directly in JIT mode for arbitrary values.
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes blob {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -50px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
      @keyframes wave {
        0%, 60%, 100% { transform: rotate(0deg); }
        10%, 30% { transform: rotate(14deg); }
        20% { transform: rotate(-8deg); }
        40% { transform: rotate(-4deg); }
        50% { transform: rotate(10deg); }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      .animate-wave {
        transform-origin: 70% 70%;
        display: inline-block;
        animation: wave 2.5s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <HeroSection />;
}
