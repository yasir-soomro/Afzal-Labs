import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

export const metadata = {
  title: 'Project Archive - Afzal Labs',
  description: 'Complete archive of intelligent web systems built by Afzal Labs',
};

const allProjects = [
  {
    title: "Zentrix",
    category: "E-commerce Website",
    image: "https://picsum.photos/seed/zentrix/800/600",
    stats: { performance: "98", size: "~120KB" },
    year: "2026",
    link: "https://zentrix-store-r3dk.vercel.app/"
  },
  {
    title: "Neural Synthesis",
    category: "AI SaaS Platform",
    image: "https://picsum.photos/seed/neural/800/600",
    stats: { performance: "100", size: "~80KB" },
    year: "2026"
  },
  {
    title: "Data Vault UI",
    category: "Enterprise Dashboard",
    image: "https://picsum.photos/seed/vault/800/600",
    stats: { performance: "98", size: "~140KB" },
    year: "2025"
  },
  {
    title: "Quantum E-Commerce",
    category: "High-Traffic Storefront",
    image: "https://picsum.photos/seed/quantum/800/600",
    stats: { performance: "99", size: "~110KB" },
    year: "2025"
  },
  {
    title: "Vision Pipeline API",
    category: "Machine Learning Microservice",
    image: "https://picsum.photos/seed/vision/800/600",
    stats: { performance: "100", size: "~40KB" },
    year: "2024"
  }
];

export default function ProjectArchivePage() {
  return (
    <div className="w-full min-h-screen bg-zinc-50 text-zinc-900 font-sans flex flex-col overflow-x-hidden relative selection:bg-blue-200 selection:text-blue-900">
      <Navbar />
      <main id="main-content" className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-10 pt-32 pb-20" tabIndex={-1}>
        <div className="mb-16 border-b border-zinc-200 pb-8">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-zinc-900">Project Archive</h1>
          <p className="mt-4 text-sm font-mono text-zinc-500 uppercase tracking-widest max-w-2xl">A comprehensive historical record of shipped production code, spanning complex AI integrations to resilient enterprise frontends.</p>
        </div>
        
        <div className="flex flex-col gap-12">
          {allProjects.map((project, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="w-full md:w-1/2 lg:w-2/5 relative aspect-video rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100">
                <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply group-hover:bg-transparent transition-all z-10" />
                <Image 
                  src={project.image} 
                  alt={`Screenshot of ${project.title}`} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" 
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded border border-blue-100 uppercase tracking-widest">{project.year}</span>
                  <span className="text-xs font-mono text-zinc-500 tracking-widest uppercase">{project.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mb-4">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-2 group/link focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                      {project.title}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-6 h-6 text-zinc-400 group-hover/link:text-blue-600 transition-all transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </a>
                  ) : (
                    project.title
                  )}
                </h2>
                
                <div className="grid grid-cols-2 gap-4 mt-4 max-w-sm">
                  <div className="bg-white p-3 rounded-lg border border-zinc-200 shadow-sm">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Lighthouse</p>
                    <p className="font-bold text-emerald-600">{project.stats.performance}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-zinc-200 shadow-sm">
                    <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Bundle Size</p>
                    <p className="font-bold text-blue-600">{project.stats.size}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
