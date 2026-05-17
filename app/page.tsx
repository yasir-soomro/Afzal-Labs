import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-sans flex flex-col overflow-x-hidden relative selection:bg-blue-500/30">
      <Navbar />
      
      <main className="flex-1 w-full flex flex-col items-center">
        <Hero />
        <TechStack />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
