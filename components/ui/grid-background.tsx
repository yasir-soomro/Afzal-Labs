"use client";

import { motion } from "motion/react";

export function GridBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-20">
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent" />
    </div>
  );
}
