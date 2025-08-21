'use client';
import { useState } from "react";
import { testimonials } from "@/content/site";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials(){
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((idx + 1) % testimonials.length);
  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="card p-6 md:p-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">Testimonials</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-xl bg-base-100/50 border border-white/10" onClick={prev}>Prev</button>
          <button className="px-3 py-1 rounded-xl bg-accent text-black" onClick={next}>Next</button>
        </div>
      </div>
      <div className="relative min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-base md:text-lg leading-relaxed"
          >
            “{testimonials[idx].quote}”
            <footer className="mt-4 text-sm opacity-70">— {testimonials[idx].name}, {testimonials[idx].role}</footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>
    </div>
  );
}
