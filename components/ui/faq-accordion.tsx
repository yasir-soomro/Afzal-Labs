"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div 
            key={index} 
            className={`border rounded-xl overflow-hidden transition-colors duration-300 shadow-sm ${isOpen ? 'bg-zinc-50 border-zinc-300' : 'bg-white border-zinc-200 hover:border-zinc-300'}`}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center text-left p-5 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-zinc-900 pr-4">{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ChevronDown className="w-5 h-5 text-zinc-400" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="p-5 pt-0 text-zinc-600 text-sm leading-relaxed border-t border-zinc-100 mt-2">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
