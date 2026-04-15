"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const types = [
  {
    icon: "🩺",
    title: "Just prescribed",
    body: "You got the script, left the office with questions. Start here: we'll walk you through week one.",
  },
  {
    icon: "📈",
    title: "Ramping up doses",
    body: "Every titration changes your appetite. We'll adjust your plan at every step.",
  },
  {
    icon: "🎯",
    title: "Hit a plateau",
    body: "Plateaus are expected. Our coach reads your data and suggests the smallest change that works.",
  },
  {
    icon: "🌱",
    title: "Coming off GLP-1",
    body: "The hardest part: protecting your progress after the medication. We have a 12-week plan for this.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-white py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="Who WeightEasy is for"
          title={
            <>
              Built for four kinds of <span className="text-accent">GLP-1 people.</span>
            </>
          }
        />
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {types.map((t) => (
            <motion.div
              key={t.title}
              variants={fadeUp}
              whileHover={{ y: -4, borderColor: "#4F46E5", transition: { duration: 0.2 } }}
              className="rounded-[20px] border border-line bg-bg p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-xl text-accent">
                {t.icon}
              </div>
              <h3 className="mt-4 text-[1.05rem]">{t.title}</h3>
              <p className="mt-2 text-[0.9rem]">{t.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
