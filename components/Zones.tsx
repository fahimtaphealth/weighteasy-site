"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHead from "./SectionHead";
import { viewportOnce } from "@/lib/motion";

const stages = [
  { num: 1, name: "Dose Day", note: "Take it easy. Liquid & soft foods. Bone broth dinner." },
  { num: 2, name: "Recovery", note: "Soft textures. Simple carbs. Cooked veg only." },
  { num: 3, name: "Getting There", note: "Normal textures returning. Lentil soup enters here." },
  { num: 4, name: "Back on Track", note: "Full variety. Healthy fats. Beans re-enter." },
  { num: 5, name: "Your Best Day", note: "Peak protein window. Best day to try a new recipe." },
  { num: 6, name: "Almost Time", note: "Ease back. Light dinner. Calming tea for evening." },
];

/* Positions for 6 dots on an elliptical path (clock positions starting from 12) */
const dotPositions = [
  { top: "-4%", left: "50%", translate: "-50%", opacity: 1 },      // 12 o'clock — active
  { top: "15%", right: "-2%", translate: "0", opacity: 0.75 },     // 2 o'clock
  { top: "50%", right: "-8%", translate: "0", opacity: 0.5 },      // 4 o'clock
  { top: "50%", left: "-8%", translate: "0", opacity: 0.5 },       // 8 o'clock (skipping 6)
  { top: "15%", left: "-2%", translate: "0", opacity: 0.75 },      // 10 o'clock
];

function getRotatedPositions(active: number) {
  // Rotate positions so the active stage is always at top (index 0)
  const order: number[] = [];
  for (let i = 0; i < 6; i++) {
    order.push((active + i) % 6);
  }
  return order;
}

export default function Zones() {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % 6);
  const prev = () => setActive((a) => (a + 5) % 6);

  const rotated = getRotatedPositions(active);
  const current = stages[active];

  return (
    <section id="how" className="border-y border-line bg-white py-[100px] overflow-hidden">
      <div className="container-x">
        <SectionHead
          eyebrow="How WeightEasy works"
          title={
            <>
              WeightEasy helps you{" "}
              <span className="text-accent">every day of the cycle.</span>
            </>
          }
          body="The engine underneath WeightEasy understands the pharmacokinetics of your medication and maps each day of your cycle to one of six zones. Your coach, meals, and reminders shift automatically."
        />

        {/* Carousel area */}
        <div className="relative mx-auto mt-16 flex items-center justify-center gap-4 md:gap-8">
          {/* Left chevron */}
          <button
            onClick={prev}
            className="flex h-[72px] w-[72px] md:h-[96px] md:w-[96px] flex-shrink-0 items-center justify-center rounded-full border-2 border-line bg-bg transition-colors hover:bg-white"
            aria-label="Previous stage"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Center: phone + circular dots */}
          <div className="relative" style={{ width: "min(520px, 70vw)", height: "min(700px, 90vw)" }}>
            {/* Dashed ellipse path */}
            <div
              className="pointer-events-none absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "130%",
                height: "110%",
                border: "2px dashed var(--border-default, #dce1e8)",
                borderRadius: "50%",
              }}
            />

            {/* Numbered dots around the circle */}
            {rotated.map((stageIdx, posIdx) => {
              if (posIdx >= 5) return null; // Only show 5 visible positions
              const pos = dotPositions[posIdx];
              const isActive = posIdx === 0;
              const stage = stages[stageIdx];

              return (
                <button
                  key={stage.num}
                  onClick={() => setActive(stageIdx)}
                  className="absolute z-10 flex items-center justify-center transition-all duration-500"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    right: (pos as any).right,
                    transform: pos.left === "50%" ? "translateX(-50%)" : undefined,
                    opacity: pos.opacity,
                  }}
                >
                  {isActive ? (
                    <div
                      className="flex h-[80px] md:h-[96px] items-center justify-center rounded-full px-6 md:px-8 font-display text-[1.2rem] md:text-[1.6rem] font-bold text-white shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, #5EEAD4, #4DB6E5, #3B82F6, #A78BFA)",
                        boxShadow: "inset 0 8px 30px rgba(255,255,255,0.5), 0 8px 32px rgba(59,130,246,0.3)",
                      }}
                    >
                      Stage {stage.num}
                    </div>
                  ) : (
                    <div
                      className="flex h-[56px] w-[56px] md:h-[80px] md:w-[80px] items-center justify-center rounded-full font-display text-[1.1rem] md:text-[1.5rem] font-bold text-white"
                      style={{
                        background: "var(--surface-inverse, #050914)",
                        boxShadow: "inset 0 8px 30px rgba(255,255,255,0.5)",
                      }}
                    >
                      {stage.num}
                    </div>
                  )}
                </button>
              );
            })}

            {/* 6th dot (bottom, hidden behind phone) — skip rendering */}

            {/* Phone frame */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ width: "min(300px, 55vw)" }}
            >
              <div
                className="relative overflow-hidden rounded-[36px] border-[8px] border-ink bg-gradient-to-b from-white to-bg"
                style={{ aspectRatio: "390/844" }}
              >
                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-10 h-[28px] w-[120px] -translate-x-1/2 rounded-b-[14px] bg-ink" />

                {/* Stage content inside phone */}
                <div className="flex h-full flex-col items-center justify-center px-6 pt-12 pb-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={current.num}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center text-center"
                    >
                      {/* Stage badge */}
                      <div
                        className="rounded-full px-5 py-2 text-[0.85rem] font-bold text-white"
                        style={{
                          background: "linear-gradient(135deg, #5EEAD4, #4DB6E5, #3B82F6, #A78BFA)",
                        }}
                      >
                        Stage {current.num}
                      </div>

                      {/* Icon placeholder */}
                      <div className="mt-6 text-[3rem] opacity-20">
                        {["💉", "🛌", "🥣", "💪", "⭐", "🌙"][current.num - 1]}
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 font-display text-[1.6rem] font-bold text-ink">
                        {current.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
                        {current.note}
                      </p>
                    </motion.div>
                  </AnimatePresence>

                  {/* Pagination dots */}
                  <div className="mt-auto flex gap-2.5 pb-4">
                    {stages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`h-2.5 w-2.5 rounded-full transition-colors ${
                          i === active ? "bg-accent" : "bg-line"
                        }`}
                        aria-label={`Go to stage ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right chevron */}
          <button
            onClick={next}
            className="flex h-[72px] w-[72px] md:h-[96px] md:w-[96px] flex-shrink-0 items-center justify-center rounded-full border-2 border-line bg-bg transition-colors hover:bg-white"
            aria-label="Next stage"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
