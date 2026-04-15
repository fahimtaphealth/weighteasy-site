"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const meds = [
  "Ozempic",
  "Wegovy",
  "Mounjaro",
  "Zepbound",
  "Trulicity",
  "Victoza",
  "Saxenda",
  "Rybelsus",
  "Bydureon BCise",
  "Compounded",
];

export default function MedsStrip() {
  return (
    <section id="medications" className="bg-ink py-11 text-white/70">
      <motion.div
        variants={stagger(0.1, 0.04)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-x flex flex-wrap items-center justify-center gap-x-9 gap-y-6"
      >
        <motion.div variants={fadeUp} className="text-[0.74rem] font-bold uppercase tracking-[0.18em] text-white/55">
          Works with every major GLP-1
        </motion.div>
        <div className="flex flex-wrap justify-center gap-x-9 gap-y-4">
          {meds.map((m) => (
            <motion.span
              key={m}
              variants={fadeUp}
              className="font-display text-[1.05rem] font-semibold tracking-[-0.01em] text-white/80"
            >
              {m}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
