export function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 md:px-10 py-8 mt-20 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-widest font-mono text-zinc-500">
        <div className="mb-4 sm:mb-0 text-zinc-400">© 2026 Afzal Labs. All rights reserved.</div>
        <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
          <span>Next.js 15</span>
          <span className="text-zinc-700">•</span>
          <span>TypeScript</span>
          <span className="text-zinc-700">•</span>
          <span>Motion</span>
        </div>
      </div>
    </footer>
  );
}
