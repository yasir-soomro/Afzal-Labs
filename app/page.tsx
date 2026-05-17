import React from "react";

export default function Page() {
  return (
    <div className="w-full h-full min-h-screen bg-[#0A0A0A] text-[#E0E0E0] font-sans flex flex-col overflow-x-hidden overflow-y-auto relative p-4 md:p-10">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-end border-b border-white/10 pb-6 mb-8 relative z-10 shrink-0">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none text-white">
            Afzal <span className="text-blue-500">Labs</span>
          </h1>
          <p className="mt-2 text-xs md:text-sm font-mono text-zinc-500 uppercase tracking-widest">
            Building Intelligent Web Systems
          </p>
        </div>
        <div className="text-left md:text-right mt-4 md:mt-0 font-mono text-[10px] text-zinc-600">
          NEXT.JS 15 / TYPESCRIPT / TAILWIND / MOTION
        </div>
      </header>

      {/* Main Content: Three-Column Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-0 relative z-10">
        
        {/* Left Column: The File Tree (Visual) */}
        <div className="lg:col-span-4 flex flex-col bg-zinc-900/40 rounded-2xl border border-white/5 p-6 overflow-hidden backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-6 shrink-0">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
            <span className="ml-2 text-xs font-mono text-zinc-500">root_directory/</span>
          </div>
          
          <div className="space-y-2 font-mono text-sm overflow-y-auto pr-2 scrollbar-hide flex-1">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-white">
                <span className="text-blue-400">📂</span> app/
              </div>
              <div className="flex items-center gap-2 pl-6 text-zinc-400 py-1">
                <span>📄</span> layout.tsx, page.tsx
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-white">
                <span className="text-blue-400">📂</span> components/
              </div>
              <div className="flex items-center gap-2 pl-6 text-zinc-400 py-1">
                <span className="text-zinc-500 italic">ui/, layout/, sections/</span>
              </div>
            </div>

             <div className="flex flex-col">
              <div className="flex items-center gap-2 text-white">
                <span className="text-blue-400">📂</span> hooks/
              </div>
              <div className="flex items-center gap-2 pl-6 text-zinc-500 italic py-1">
                use-mobile.ts
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-white">
                <span className="text-blue-400">📂</span> lib/
              </div>
              <div className="flex items-center gap-2 pl-6 text-zinc-500 italic py-1">
                utils.ts
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-white">
                <span className="text-blue-400">📂</span> config/
              </div>
              <div className="flex items-center gap-2 pl-6 text-zinc-500 italic py-1">
                site.ts
              </div>
            </div>

             <div className="flex flex-col">
              <div className="flex items-center gap-2 text-white">
                <span className="text-blue-400">📂</span> providers/
              </div>
              <div className="flex items-center gap-2 pl-6 text-zinc-500 italic py-1">
                theme-provider.tsx
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-white">
                <span className="text-blue-400">📂</span> types/
              </div>
              <div className="flex items-center gap-2 pl-6 text-zinc-500 italic py-1">
                index.ts
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2 text-white">
                <span className="text-blue-400">📂</span> animations/
              </div>
              <div className="flex items-center gap-2 pl-6 text-zinc-500 italic py-1">
                variants.ts
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-zinc-400 mt-4">
              <span>📄</span> eslint.config.mjs
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span>📄</span> next.config.ts
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span>📄</span> postcss.config.mjs
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span>📄</span> tsconfig.json
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span>📄</span> package.json
            </div>
          </div>
        </div>

        {/* Right Side: Documentation & Explanations */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Top: Key Folders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
              <h3 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">01. Components Sectionalized</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dividing into <span className="text-white">ui/</span> (atoms), <span className="text-white">layout/</span> (structural), and <span className="text-white">sections/</span> (page chunks). Prevents folder bloating in large-scale builds.
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
              <h3 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">02. Animations System</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dedicated <span className="text-white">animations/</span> folder for Motion variants and reusable transition wrappers to maintain motion consistency.
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
              <h3 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">03. Lib & Utilities</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Centralized <span className="text-white">types/</span> and <span className="text-white">lib/</span> for shared interfaces, strict TypeScript enforcement across components, and utility logic.
              </p>
            </div>
            <div className="p-5 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
              <h3 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-widest">04. App Router & SEO</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dynamic routing for projects and blog, leveraging Next.js 15 capabilities for deep SEO optimization and server side rendering.
              </p>
            </div>
          </div>

          {/* Bottom: Design Principles & Metrics */}
          <div className="bg-blue-600/90 p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden flex-1 border border-blue-500/50 shadow-2xl shadow-blue-500/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-xl md:text-3xl font-bold tracking-tight text-white mb-6">
                Architectural Principles
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)] shrink-0"></div>
                  <span className="text-sm font-medium text-blue-50">Strict TypeScript Enforcement: Zero 'any' policy.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)] shrink-0"></div>
                  <span className="text-sm font-medium text-blue-50">Colocation: Keep assets close to where they are used.</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.8)] shrink-0"></div>
                  <span className="text-sm font-medium text-blue-50">Atomic Design: Clear separation between UI primitives and biz logic.</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end border-t border-white/20 pt-6 mt-8 relative z-10 gap-6 sm:gap-0">
              <div className="flex gap-8">
                <div>
                  <p className="text-[10px] uppercase font-bold text-blue-200 mb-1">Lighthouse</p>
                  <p className="text-xl font-bold font-mono text-white">100/100</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-blue-200 mb-1">Bundle Size</p>
                  <p className="text-xl font-bold font-mono text-white">~120KB</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="px-4 py-2 bg-black/80 backdrop-blur-sm text-white rounded-full text-xs font-bold uppercase tracking-wider inline-block border border-white/10">
                  Ready for Production
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bar */}
      <footer className="py-6 mt-4 flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-widest font-mono text-zinc-500 relative z-10 shrink-0">
        <div className="mb-4 sm:mb-0">Generated for Premium Personal Branding</div>
        <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
          <span>Clean Code</span>
          <span className="text-zinc-700">•</span>
          <span>Modular Assets</span>
          <span className="text-zinc-700">•</span>
          <span>AI Optimized</span>
        </div>
      </footer>
    </div>
  );
}
