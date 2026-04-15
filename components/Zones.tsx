"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { popIn, stagger, viewportOnce } from "@/lib/motion";

const zones = [
  { letter: "A", name: "Dose Day", note: "Take it easy. Liquid & soft foods. Bone broth dinner.", bg: "#FFE2DA", fg: "#C73C20" },
  { letter: "B", name: "Recovery", note: "Soft textures. Simple carbs. Cooked veg only.", bg: "#FFEAC8", fg: "#B07013" },
  { letter: "C", name: "Getting There", note: "Normal textures returning. Lentil soup enters here.", bg: "#FFF2BF", fg: "#8B7006" },
  { letter: "D", name: "Back on Track", note: "Full variety. Healthy fats. Beans re-enter.", bg: "#D9F2E1", fg: "#18794E" },
  { letter: "E", name: "Your Best Day", note: "Peak protein window. Best day to try a new recipe.", bg: "#D4EAFD", fg: "#1956B0" },
  { letter: "F", name: "Almost Time", note: "Ease back. Light dinner. Calming tea for evening.", bg: "#E7E0FF", fg: "#5B3BD8" },
];

export default function Zones() {
  return (
    <section id="how" className="border-y border-line bg-white py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="How WeightEasy works"
          title={
            <>
              We meet you where you are — <span className="text-accent">every day of the cycle.</span>
            </>
          }
          body="The engine underneath WeightEasy understands the pharmacokinetics of your medication and maps each day of your cycle to one of six zones. Your coach, meals, and reminders shift automatically."
        />
        <motion.div
          variants={stagger(0.1, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid gap-[10px] rounded-[22px] border border-line bg-bg p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
        >
          {zones.map((z) => (
            <motion.div
              key={z.letter}
              variants={popIn}
              className="rounded-[14px] bg-white p-4"
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-full font-display text-[0.9rem] font-bold"
                style={{ background: z.bg, color: z.fg }}
              >
                {z.letter}
              </div>
              <div className="mt-3 font-display text-[0.98rem] font-bold tracking-[-0.01em] text-ink">
                {z.name}
              </div>
              <div className="mt-1 text-[0.78rem] leading-[1.45] text-muted">{z.note}</div>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-6 text-center text-[0.88rem] text-muted">
          Works for weekly, daily (like Rybelsus), biweekly, and custom compounded dosing.
        </p>
      </div>
    </section>
  );
}
