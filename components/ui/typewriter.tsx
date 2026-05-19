"use client";

import { useState, useEffect } from "react";

const phrases = [
  { text: "Agentic", color: "from-blue-600 via-indigo-600 to-purple-600" },
  { text: "Scalable", color: "from-emerald-500 via-teal-500 to-cyan-600" },
  { text: "Resilient", color: "from-rose-500 via-red-500 to-orange-500" },
  { text: "Next-Gen", color: "from-violet-600 via-purple-600 to-fuchsia-600" }
];

export function Typewriter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex].text;
    const isComplete = !isDeleting && charIndex === currentPhrase.length;
    const isEmpty = isDeleting && charIndex === 0;

    let timeoutId: NodeJS.Timeout;

    if (isComplete) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
    } else if (isEmpty) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 300); // Small pause before next word
    } else {
      timeoutId = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, isDeleting ? 50 : 100); // Typing and deleting speeds
    }

    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting, phraseIndex]);

  const currentPhrase = phrases[phraseIndex].text;
  const currentText = currentPhrase.substring(0, charIndex);
  const currentColor = phrases[phraseIndex].color;

  return (
    <span className="inline-flex min-h-[1.1em] items-center text-[0.95em]">
      <span className={`text-transparent bg-gradient-to-r bg-clip-text pr-1 ${currentColor}`}>
        {currentText}
      </span>
      <span className="w-[0.08em] h-[0.9em] ml-1 bg-current opacity-80 animate-[pulse_1s_infinite]"></span>
    </span>
  );
}
