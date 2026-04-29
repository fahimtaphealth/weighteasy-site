"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHead from "./SectionHead";

const stages = [
  { num: 1, name: "Dose Day", note: "Take it easy. Liquid & soft foods. Bone broth dinner.", icon: "💉" },
  { num: 2, name: "Recovery", note: "Soft textures. Simple carbs. Cooked veg only.", icon: "🛌" },
  { num: 3, name: "Getting There", note: "Normal textures returning. Lentil soup enters here.", icon: "🥣" },
  { num: 4, name: "Back on Track", note: "Full variety. Healthy fats. Beans re-enter.", icon: "💪" },
  { num: 5, name: "Your Best Day", note: "Peak protein window. Best day to try a new recipe.", icon: "⭐" },
  { num: 6, name: "Almost Time", note: "Ease back. Light dinner. Calming tea for evening.", icon: "🌙" },
];

/*
 * Dot positions on a circle (angles in degrees, 0 = top/12 o'clock, clockwise)
 * Position 0: active stage at top (12 o'clock)
 * Position 1: 60° clockwise (~2 o'clock)
 * Position 2: 120° (~4 o'clock)
 * Position 3: 180° (6 o'clock — bottom, mostly hidden)
 * Position 4: 240° (~8 o'clock)
 * Position 5: 300° (~10 o'clock)
 */
function getAngle(slotIndex: number): number {
  return slotIndex * 60; // evenly spaced at 60° intervals
}

function angleToPosition(angleDeg: number, radiusX: number, radiusY: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180; // -90 so 0° = top
  return {
    x: Math.cos(rad) * radiusX,
    y: Math.sin(rad) * radiusY,
  };
}

export default function Zones() {
  const [active, setActive] = useState(0);

  const next = () => setActive((a) => (a + 1) % 6);
  const prev = () => setActive((a) => (a + 5) % 6);

  const current = stages[active];

  // Build slot assignments: active at slot 0, then next ones clockwise
  const slots: number[] = [];
  for (let i = 0; i < 6; i++) {
    slots.push((active + i) % 6);
  }

  // Circle dimensions (relative to center)
  const RX = 420; // horizontal radius
  const RY = 420; // vertical radius (circle)

  return (
    <section id="how" className="relative border-t border-line bg-white pb-0 pt-[100px] overflow-hidden">
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
      </div>

      {/* Carousel area — extends beyond section */}
      <div
        className="relative mx-auto mt-10"
        style={{ maxWidth: 1200, height: 780 }}
      >
        {/* Dashed circle — full circle, bottom half extends below */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2"
          style={{
            top: 60,
            width: RX * 2 + 40,
            height: RY * 2 + 40,
            border: "2px dashed #dce1e8",
            borderRadius: "50%",
          }}
        />

        {/* Center point for positioning dots */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: 60 + RY + 20 }}
        >
          {/* Numbered dots on the circle */}
          {slots.map((stageIdx, slotIdx) => {
            const angle = getAngle(slotIdx);
            const pos = angleToPosition(angle, RX, RY);
            const isActive = slotIdx === 0;
            const stage = stages[stageIdx];

            // Hide the bottom dot (slot 3, at 180°/6 o'clock)
            if (slotIdx === 3) return null;

            // Opacity based on distance from active
            const opacity = slotIdx <= 1 || slotIdx === 5 ? 1 : 0.6;

            return (
              <motion.button
                key={`dot-${stage.num}`}
                onClick={() => setActive(stageIdx)}
                className="absolute z-20 flex items-center justify-center"
                animate={{
                  x: pos.x - (isActive ? 60 : 36),
                  y: pos.y - (isActive ? 36 : 36),
                  opacity,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                aria-label={`Stage ${stage.num}: ${stage.name}`}
              >
                {isActive ? (
                  <div
                    className="flex h-[72px] items-center justify-center rounded-full px-7 font-display text-[1.4rem] font-bold text-white shadow-xl"
                    style={{
                      background: "linear-gradient(135deg, #5EEAD4, #4DB6E5, #3B82F6, #A78BFA)",
                      boxShadow: "inset 0 8px 30px rgba(255,255,255,0.5), 0 12px 40px rgba(59,130,246,0.35)",
                      minWidth: 120,
                    }}
                  >
                    Stage {stage.num}
                  </div>
                ) : (
                  <div
                    className="flex h-[72px] w-[72px] items-center justify-center rounded-full font-display text-[1.3rem] font-bold text-white transition-transform hover:scale-110"
                    style={{
                      background: "#1a1d2e",
                      boxShadow: "inset 0 8px 30px rgba(255,255,255,0.15), 0 4px 16px rgba(0,0,0,0.2)",
                    }}
                  >
                    {stage.num}
                  </div>
                )}
              </motion.button>
            );
          })}

          {/* Chevron buttons at 9 o'clock and 3 o'clock on the circle */}
          {(() => {
            const leftPos = angleToPosition(270, RX + 60, RY + 60);
            const rightPos = angleToPosition(90, RX + 60, RY + 60);
            return (
              <>
                <button
                  onClick={prev}
                  className="absolute z-20 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-line bg-bg/80 text-muted transition-colors hover:bg-white hover:text-ink"
                  style={{
                    transform: `translate(${leftPos.x - 36}px, ${leftPos.y - 36}px)`,
                  }}
                  aria-label="Previous stage"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute z-20 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-line bg-bg/80 text-muted transition-colors hover:bg-white hover:text-ink"
                  style={{
                    transform: `translate(${rightPos.x - 36}px, ${rightPos.y - 36}px)`,
                  }}
                  aria-label="Next stage"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            );
          })()}
        </div>

        {/* Phone frame — centered */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-10"
          style={{ top: 100, width: 300 }}
        >
          <div
            className="relative overflow-hidden rounded-[40px] border-[8px] border-ink bg-gradient-to-b from-white to-[#f2f5f9]"
            style={{ aspectRatio: "390/844" }}
          >
            {/* Notch */}
            <div className="absolute left-1/2 top-0 z-10 h-[30px] w-[110px] -translate-x-1/2 rounded-b-[16px] bg-ink" />

            {/* Stage content */}
            <div className="flex h-full flex-col items-center px-6 pt-20 pb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.num}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Stage pill inside phone */}
                  <div
                    className="rounded-full px-5 py-1.5 text-[0.8rem] font-bold text-white"
                    style={{
                      background: "linear-gradient(135deg, #5EEAD4, #4DB6E5, #3B82F6, #A78BFA)",
                    }}
                  >
                    Stage {current.num}
                  </div>

                  {/* Icon */}
                  <div className="mt-6 text-[2.8rem] opacity-20">
                    {current.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-display text-[1.5rem] font-bold text-ink">
                    {current.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                    {current.note}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Pagination dots at bottom */}
              <div className="mt-auto flex gap-2.5">
                {stages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === active ? "bg-accent w-2 h-2" : "bg-line"
                    }`}
                    aria-label={`Stage ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blue gradient at bottom where circle extends */}
      <div className="h-[120px] bg-gradient-to-b from-white to-bg" />
    </section>
  );
}
