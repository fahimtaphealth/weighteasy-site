"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const integrations = [
  { name: "Apple Health", sub: "steps · heart · sleep", icon: "❤", soon: false },
  { name: "Google Fit", sub: "steps · activity", icon: "◆", soon: false },
  { name: "Fitbit", sub: "HR · sleep · steps", icon: "✦", soon: false },
  { name: "Oura Ring", sub: "sleep · recovery", icon: "○", soon: true },
  { name: "Withings Scale", sub: "weight · composition", icon: "⊕", soon: true },
  { name: "Garmin", sub: "workouts · HRV", icon: "▲", soon: true },
];

export default function Integrations() {
  return (
    <section className="bg-bg py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="Connects with you at every step"
          title={
            <>
              Your watch tracks. Your scale weighs.{" "}
              <span className="text-accent">WeightEasy listens.</span>
            </>
          }
          body="Connect once. We read your sleep, steps, weight, and heart rate - and tune your plan around how your body's actually responding."
        />
        <motion.div
          variants={stagger(0.05, 0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {integrations.map((i) => (
            <motion.div
              key={i.name}
              variants={fadeUp}
              whileHover={{ y: -2 }}
              className="flex items-center gap-3 rounded-2xl border border-line bg-white px-6 py-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-indigo-soft text-indigo">
                {i.icon}
              </div>
              <div>
                <b className="font-display text-[0.95rem] text-ink">{i.name}</b>
                <span className="block text-[0.8rem] text-muted">{i.sub}</span>
              </div>
              {i.soon && (
                <span className="ml-auto rounded-full bg-amber-50 px-2.5 py-0.5 text-[0.7rem] font-semibold text-amber-600">
                  Coming soon
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
