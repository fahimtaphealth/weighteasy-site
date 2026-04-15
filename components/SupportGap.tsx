"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const items = [
  {
    q: "\u201cThey prescribed it without explaining why I was on such a low dose.\u201d",
    a: "A short virtual appointment, then radio silence. No clear point of contact when questions came up later that week.",
    label: "Theme 1 · Prescriber hand-off",
  },
  {
    q: "\u201cI had no idea if what I was feeling was normal.\u201d",
    a: "Nausea, fatigue, the flat week before a dose — without context, every normal side effect feels like a problem.",
    label: "Theme 2 · Missing context",
  },
  {
    q: "\u201cNothing I was eating made sense for how my body felt.\u201d",
    a: "Generic meal plans don't understand that dose day is different from day five — so most people stop following them.",
    label: "Theme 3 · Nutrition that ignores the cycle",
  },
];

export default function SupportGap() {
  return (
    <section className="bg-bg py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="From our user research"
          title={
            <>
              Your prescriber saw you for 15 minutes.{" "}
              <span className="text-accent">Then what?</span>
            </>
          }
          body="Across four in-depth conversations with people currently on GLP-1s — Meagan, Brian, Genevieve, and Tricia — three themes came up again and again."
        />
        <motion.div
          variants={stagger(0.1, 0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-[18px] md:grid-cols-3"
        >
          {items.map((item) => (
            <motion.article
              key={item.label}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-[20px] border border-line bg-white p-8"
            >
              <div className="font-display text-[1.1rem] font-bold tracking-[-0.01em] text-ink">
                {item.q}
              </div>
              <p className="mt-3 text-[0.95rem]">{item.a}</p>
              <div className="mt-5 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-accent">
                {item.label}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
