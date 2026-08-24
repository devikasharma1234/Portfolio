import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import GridBackgroundView from "@/components/ui/GridBackgroundView";
import GlowLine from "@/components/ui/GlowLine";
import About from "@/components/sections/About";
import Experiance from "@/components/sections/Experiance";
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="relative bg-slate-50 dark:bg-black text-slate-900 dark:text-white flex flex-col items-center justify-center overflow-x-hidden w-full min-h-screen transition-colors duration-300">
      <Navbar />

      <div className="w-full max-w-7xl px-5 sm:px-10 flex flex-col gap-16 pb-4">
        <GridBackgroundView />
        <About />
        <GlowLine orientation="horizontal" position="top" color="purple" />
        <Skills />
        <GlowLine orientation="horizontal" position="top" color="blue" />
        <Projects />
        <Experiance />
        <GlowLine orientation="horizontal" position="top" color="purple" />
        <Education />
        <Certifications />
        <GlowLine orientation="horizontal" position="top" color="blue" />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}