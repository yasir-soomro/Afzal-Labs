import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto px-4 md:px-10 py-8 mt-20 border-t border-zinc-200">
      <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] uppercase tracking-widest font-mono text-zinc-400">
        <div className="mb-4 sm:mb-0 text-zinc-500">© 2026 Afzal Labs. All rights reserved.</div>
        <div className="flex gap-2 sm:gap-4 flex-wrap justify-center mb-4 sm:mb-0">
          <span>Next.js 15</span>
          <span className="text-zinc-300">•</span>
          <span>TypeScript</span>
          <span className="text-zinc-300">•</span>
          <span>Motion</span>
        </div>
        <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
          <Link href="/privacy" className="hover:text-zinc-900 transition-colors hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">Privacy Policy</Link>
          <span className="text-zinc-300">•</span>
          <Link href="/terms" className="hover:text-zinc-900 transition-colors hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
