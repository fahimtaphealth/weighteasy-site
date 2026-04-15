"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Feature = {
  title: string;
  body: string;
  chips?: string[];
  span?: number;
  dark?: boolean;
};

const features: Feature[] = [
  {
    title: "AI coach trained on GLP-1",
    body: "Ask about side effects, dose questions, meal swaps — answered in seconds, with your cycle day in mind.",
    chips: ["Nausea help", "Plateau reassurance", "Meal swaps"],
    span: 3,
    dark: true,
  },
  {
    title: "Cycle-aware meal plans",
    body: "Recipes shift with your appetite. Bone broth on Day 1, grain bowls on Day 5.",
    chips: ["Breakfast", "Lunch", "Dinner", "Snacks"],
    span: 3,
  },
  {
    title: "Symptom & dose journal",
    body: "Track your injection, fullness window, nausea level and mood in 10 seconds.",
    span: 2,
  },
  {
    title: "Weight & measurements",
    body: "Connected scales sync automatically. Trends, not noise — we smooth the daily swings.",
    span: 2,
  },
  {
    title: "Fitness that fits your cycle",
    body: "Strength on your best days, gentle walks after a dose. Protein targets that actually move.",
    span: 2,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-bg py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="Your personalized plan includes"
          title={
            <>
              Everything your GLP-1 journey needs.{" "}
              <span className="text-accent">Nothing it doesn&apos;t.</span>
            </>
          }
        />
        <motion.div
          variants={stagger(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-6 gap-[18px]"
        >
          {features.map((f, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={cn(
                "relative overflow-hidden rounded-[22px] border p-7 transition-all min-h-[220px] flex flex-col gap-3",
                "col-span-6",
                f.span === 3 && "md:col-span-3",
                f.span === 2 && "md:col-span-2",
                f.dark ? "bg-ink text-white border-transparent" : "bg-white border-line",
              )}
            >
              <h3 className={cn("font-display text-[1.35rem]", f.dark && "!text-white")}>
                {f.title}
              </h3>
              <p className={cn("text-[0.95rem]", f.dark && "text-white/80")}>{f.body}</p>
              {f.chips && (
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {f.chips.map((c) => (
                    <span
                      key={c}
                      className={cn(
                        "rounded-full border px-2.5 py-1 text-[0.74rem] font-semibold",
                        f.dark
                          ? "border-white/15 bg-white/10 text-white"
                          : "border-indigo-line bg-indigo-soft text-indigo",
                      )}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
