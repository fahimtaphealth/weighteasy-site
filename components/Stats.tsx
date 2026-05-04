"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const stats = [
  { display: "1.5x", label: "more weight loss", sub: "when GLP-1 users take a guided journey", source: "" },
  { display: "30%", label: "less nausea", sub: "when your dose is timed to your body, not a generic schedule", source: "2025" },
  { display: "9 in 10", label: "stay on their dose", sub: "with gradual support vs. only 6 in 10 without support", source: "2025" },
];

export default function Stats() {
  return (
    <section className="bg-bg py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="Based on research study"
          title={
            <>
              Support that can actually<br />
              <span className="text-accent">improve your results</span>
            </>
          }
        />
        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-[18px] md:grid-cols-3"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-[22px] border border-line bg-white p-8"
            >
              <div className="font-display text-[3.4rem] font-extrabold leading-none tracking-[-0.04em] text-ink">
                {s.display}
              </div>
              <div className="mt-3.5 font-display font-bold text-ink">{s.label}</div>
              <div className="mt-2 text-[0.9rem] text-muted">{s.sub}</div>
              <div className="mt-3 text-[0.75rem] italic text-muted-2">{s.source}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
