import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col
     overflow-hidden mx-auto sm:px-10 px-5" >
      <div className="max-w-7xl w-full">
        <Navbar/>
        <Hero/>
        <Skills/>
      </div>
    </main>
  );
}
