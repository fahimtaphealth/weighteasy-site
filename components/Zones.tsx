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

  /* Phone top offset from container top */
  const PHONE_TOP = 100;
  /* Where the stage pill sits — just above the icon inside the phone */
  const PILL_TOP = PHONE_TOP + 60; // overlapping the phone top area

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

      {/* Carousel container — clipped at bottom */}
      <div
        className="relative mx-auto mt-10 overflow-hidden"
        style={{ maxWidth: 1200, height: RY + 140 }}
      >
        {/* Dashed circle — full circle, bottom clipped */}
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

        {/* Center point for circle positioning */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: 60 + RY + 20 }}
        >
          {/* Inactive numbered dots on the circle — skip active (slot 0) and bottom (slot 3) */}
          {slots.map((stageIdx, slotIdx) => {
            const angle = getAngle(slotIdx);
            const pos = angleToPosition(angle, RX, RY);
            const stage = stages[stageIdx];

            // Skip active (rendered separately on the phone) and bottom dot
            if (slotIdx === 0 || slotIdx === 3) return null;

            const opacity = slotIdx <= 1 || slotIdx === 5 ? 1 : 0.7;

            return (
              <motion.button
                key={`dot-${stage.num}`}
                onClick={() => setActive(stageIdx)}
                className="absolute z-20 flex items-center justify-center"
                animate={{
                  x: pos.x - 36,
                  y: pos.y - 36,
                  opacity,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                aria-label={`Stage ${stage.num}: ${stage.name}`}
              >
                <div
                  className="flex h-[72px] w-[72px] items-center justify-center rounded-full font-display text-[1.3rem] font-bold text-white transition-transform hover:scale-110"
                  style={{
                    background: "#1a1d2e",
                    boxShadow: "inset 0 8px 30px rgba(255,255,255,0.15), 0 4px 16px rgba(0,0,0,0.2)",
                  }}
                >
                  {stage.num}
                </div>
              </motion.button>
            );
          })}

          {/* Chevron buttons — at ~45° angles (upper-middle of visible area) */}
          {(() => {
            // Place chevrons at 315° (upper-left) and 45° (upper-right) on a slightly larger circle
            const chevronAngleL = 300; // ~10 o'clock
            const chevronAngleR = 60;  // ~2 o'clock
            const leftPos = angleToPosition(chevronAngleL, RX + 80, RY + 80);
            const rightPos = angleToPosition(chevronAngleR, RX + 80, RY + 80);
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

        {/* Phone frame — centered */}
        <div
          className="absolute left-1/2 -translate-x-1/2 z-10"
          style={{ top: PHONE_TOP, width: 300 }}
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

        {/* Active stage pill — ON TOP of the phone, just above the icon */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`pill-${current.num}`}
            className="absolute left-1/2 -translate-x-1/2 z-30 flex items-center justify-center"
            style={{ top: PILL_TOP }}
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="flex h-[56px] items-center justify-center rounded-full px-7 font-display text-[1.2rem] font-bold text-white shadow-xl"
              style={{
                background: "linear-gradient(135deg, #5EEAD4, #4DB6E5, #3B82F6, #A78BFA)",
                boxShadow: "inset 0 8px 30px rgba(255,255,255,0.5), 0 12px 40px rgba(59,130,246,0.35)",
                minWidth: 110,
              }}
            >
              Stage {current.num}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Gradient fade at bottom */}
      <div className="h-[60px] bg-gradient-to-b from-white to-bg" />
    </section>
  );
}
