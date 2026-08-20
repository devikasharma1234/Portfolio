import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Hero2 from "@/components/sections/Hero2";
import Skills from "@/components/sections/Skills";
import GridBackgroundView from "@/components/ui/GridBackgroundView";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col
     overflow-hidden mx-auto sm:px-10 px-5" >
      <div className="w-full">
        <Navbar/>
        {/* <Hero2/> */}
        <GridBackgroundView/>
        <Skills/>
      </div>
    </main>
  );
}
