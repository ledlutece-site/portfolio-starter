'use client';
import { motion } from "framer-motion";
import { splitToLetters } from "@/lib/utils";
import { hero } from "@/content/site";

const letterVariant = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { delay: 0.02 * i, type: "spring", stiffness: 300, damping: 24 }
  })
};

export default function Hero() {
  const lines = [hero.name, hero.role];

  return (
    <section className="section pt-36 md:pt-40">
      <div className="container-g grid md:grid-cols-2 gap-10 items-end">
        <div>
          {lines.map((line, idx) => (
            <div key={idx} className="overflow-hidden leading-[1.1]">
              <motion.h1
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-semibold tracking-tight"
              >
                {splitToLetters(line).map((l, i) => (
                  <motion.span key={i} variants={letterVariant} custom={i} className="inline-block">
                    {l.c}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          ))}
          <p className="mt-6 text-base md:text-lg opacity-80 max-w-xl">{hero.tagline}</p>
        </div>
        <div className="justify-self-end">
          <div className="card w-full md:w-[420px] aspect-[4/5] flex items-end p-6 bg-[linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.02))]">
            <div className="text-sm opacity-80">Available for projects • Based in Dubai</div>
          </div>
        </div>
      </div>
    </section>
  );
}
