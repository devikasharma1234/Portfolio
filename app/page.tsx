import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Hero2 from "@/components/sections/Hero2";
import Skills from "@/components/sections/Skills";
import GridBackgroundView from "@/components/ui/GridBackgroundView";
import GlowLine from "@/components/ui/GlowLine";
import About from "@/components/sections/About";
import Experiance from "@/components/sections/Experiance";
import Skills2 from "@/components/ui/Marquee";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col
     overflow-hidden mx-auto sm:px-10 px-5" >
      <div className="w-full">
        <Navbar/>
        <GridBackgroundView/>
        <About/>
        <GlowLine orientation="horizontal" position="top" color="blue" />
        <Skills/>
        <Skills2>{null}</Skills2>
        <Projects/>
        <Experiance/>
      </div>
    </main>
  );
}
