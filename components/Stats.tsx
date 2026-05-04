"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const stats = [
  { display: "1.5x", label: "more weight loss", sub: "When GLP-1 users take a guided journey, they experience more weight loss than others.*" },
  { display: "30%", label: "less nausea", sub: "When the meal is custom to user's body, not a generic plan, users see 30% relief in symptoms.*" },
  { display: "9 in 10", label: "stay on their dose", sub: "9 in 10 users stay on GLP-1 with support, vs. only 6 in 10 stay on GLP-1 without support.*" },
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
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-6 text-center text-[0.78rem] italic text-muted-2">
          * Stats based on published research, including Wilding et al., STEP 1 trial NEJM 2021; Jastreboff et al., Gasoyan et al., GLP-1 discontinuation - JAMA Network Open 2025.
        </p>
      </div>
    </section>
  );
}
