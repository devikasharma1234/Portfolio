"use client";
import React, { useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  navItems: string[];
}

const LogoIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 6H10V10H6V6Z" fill="#EC4899" />
    <path d="M14 6H18V10H14V6Z" fill="#EC4899" />
    <path d="M6 14H10V18H6V14Z" fill="#EC4899" />
    <path d="M14 14H18V18H14V14Z" fill="#EC4899" fillOpacity="0.5" />
  </svg>
);

const MenuIcon: React.FC = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon: React.FC = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  isActive = false,
}) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-pink-500"
        : "text-gray-600 dark:text-gray-300 hover:text-pink-500"
    }`}
  >
    {children}
  </a>
);

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const baseClasses =
    "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105";

  const variants = {
    primary:
      "bg-pink-600 text-white hover:bg-pink-700 focus:ring-pink-500 shadow-lg shadow-pink-500/30",
    secondary:
      "bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-pink-300 dark:focus:ring-pink-700 shadow-sm border border-gray-200 dark:border-gray-700",
    outline:
      "bg-white dark:bg-black text-gray-900 dark:text-white border border-pink-300 dark:border-pink-700 hover:bg-pink-50 dark:hover:bg-pink-950/40 focus:ring-pink-300 dark:focus:ring-pink-700",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, navItems }) => (
  <div
    className={`
      md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 shadow-lg
      transition-all duration-300 ease-in-out
      ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
  `}
  >
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-gray-700 dark:text-gray-300 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950/30 block px-3 py-2 rounded-md text-base font-medium"
        >
          {item}
        </a>
      ))}
    </div>
    <div className="pt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
      <div className="px-5">
        <Button variant="outline" className="w-full">
          Download Resume
        </Button>
      </div>
    </div>
  </div>
);

const HeaderSection: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink] = useState("Home");
  const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <header className="relative z-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <LogoIcon />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Devika<span className="text-pink-500">.</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-1 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-full">
            {navItems.map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                isActive={activeLink === item}
              >
                {item}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button variant="outline">Download Resume</Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} navItems={navItems} />
    </header>
  );
};

const Hero: React.FC = () => (
  <section className="relative z-10 text-center py-16 sm:py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-pink-600 dark:text-pink-400 uppercase bg-pink-100 dark:bg-pink-900/30 rounded-full">
        Available for SDE internships
      </span>
      <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
        Hi, I&apos;m Devika —{" "}
        <span className="text-pink-500">Full Stack Developer</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
        CSE (AI/ML) student building clean, performant web apps with Next.js,
        TypeScript, and Tailwind — currently exploring machine learning
        alongside full-stack development.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="primary" className="w-full sm:w-auto">
          View My Work
        </Button>
        <Button variant="secondary" className="w-full sm:w-auto">
          Get In Touch
        </Button>
      </div>
    </div>
  </section>
);

export default function Hero2() {
  return (
    <div className="relative w-full overflow-hidden bg-white dark:bg-black">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-gradient-to-tr from-pink-200 dark:from-pink-800/30 to-transparent opacity-20 dark:opacity-10 rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-gradient-to-bl from-fuchsia-200 dark:from-fuchsia-800/30 to-transparent opacity-20 dark:opacity-10 rounded-full blur-3xl" />
      </div>
      <HeaderSection />
      <main>
        <Hero />
      </main>
    </div>
  );
}