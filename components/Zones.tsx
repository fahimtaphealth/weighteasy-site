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

function getAngle(slotIndex: number): number {
  return slotIndex * 60;
}

function angleToPosition(angleDeg: number, radiusX: number, radiusY: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
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

  const slots: number[] = [];
  for (let i = 0; i < 6; i++) {
    slots.push((active + i) % 6);
  }

  const RX = 420;
  const RY = 420;

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

      {/*
        Carousel container — overflow-hidden clips the bottom of the circle.
        The circle center is at the vertical midpoint of the full circle,
        but we only show from the top down to just past the 3/9 o'clock line.
        Height = top padding + radius + some extra for the dots at 3/9 o'clock.
      */}
      <div
        className="relative mx-auto mt-10 overflow-hidden"
        style={{ maxWidth: 1200, height: RY + 140 }}
      >
        {/* Dashed circle — full circle, but bottom is clipped by overflow-hidden */}
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

        {/* Center point for circle — placed so top of circle is at top of container */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: 60 + RY + 20 }}
        >
          {/* Numbered dots on the circle — hide slot 3 (bottom, 180°) */}
          {slots.map((stageIdx, slotIdx) => {
            const angle = getAngle(slotIdx);
            const pos = angleToPosition(angle, RX, RY);
            const isActive = slotIdx === 0;
            const stage = stages[stageIdx];

            // Hide the bottom dot (slot 3 at 180°)
            if (slotIdx === 3) return null;

            // Opacity: closer to active = more opaque
            const opacity = slotIdx <= 1 || slotIdx === 5 ? 1 : 0.7;

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

          {/* Chevron buttons at 9 o'clock (left) and 3 o'clock (right) */}
          {(() => {
            const leftPos = angleToPosition(270, RX + 60, RY + 60);
            const rightPos = angleToPosition(90, RX + 60, RY + 60);
            return (
              <>
                <button
                  onClick={prev}
                  className="absolute z-20 flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-line bg-white text-muted transition-colors hover:bg-bg hover:text-ink"
                  style={{
                    transform: `translate(${leftPos.x - 28}px, ${leftPos.y - 28}px)`,
                  }}
                  aria-label="Previous stage"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="absolute z-20 flex h-[56px] w-[56px] items-center justify-center rounded-full border-2 border-line bg-white text-muted transition-colors hover:bg-bg hover:text-ink"
                  style={{
                    transform: `translate(${rightPos.x - 28}px, ${rightPos.y - 28}px)`,
                  }}
                  aria-label="Next stage"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </>
            );
          })()}
        </div>

        {/* Phone frame — centered, BEHIND the circle dots/pills */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-0"
          style={{ top: 100, width: 300 }}
        >
          <div
            className="relative overflow-hidden rounded-[40px] border-[8px] border-ink bg-gradient-to-b from-white to-[#f2f5f9]"
            style={{ aspectRatio: "390/844" }}
          >
            {/* Notch */}
            <div className="absolute left-1/2 top-0 z-10 h-[30px] w-[110px] -translate-x-1/2 rounded-b-[16px] bg-ink" />

            {/* Stage content inside phone */}
            <div className="flex h-full flex-col items-center px-6 pt-20 pb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.num}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-col items-center text-center mt-14"
                >
                  {/* Icon */}
                  <div className="text-[2.8rem] opacity-20">
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

      {/* Gradient fade at bottom */}
      <div className="h-[60px] bg-gradient-to-b from-white to-bg" />
    </section>
  );
}
