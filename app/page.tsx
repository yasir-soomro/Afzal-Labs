import React from "react";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function Page() {
  return (
    <main id="main-content" className="w-full flex-1 flex flex-col items-center" tabIndex={-1}>
      <Hero />
      <TechStack />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
