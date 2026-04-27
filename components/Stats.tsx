"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const stats = [
  { display: "2-3x", label: "better outcomes", sub: "with consistent habit tracking alongside GLP-1 medication" },
  { display: "87%", label: "improvement", sub: "of common side effects manageable with gradual dose support" },
  { display: "Peer", label: "reviewed", sub: "principles from leading institutions including Harvard Medical School" },
];

export default function Stats() {
  return (
    <section className="bg-bg py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="What people feel in the first month"
          title={
            <>
              Here&apos;s what GLP-1 with a companion{" "}
              <span className="text-accent">could look like for you.</span>
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
      </div>
    </section>
  );
}
