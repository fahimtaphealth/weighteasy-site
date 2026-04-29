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

function angleToPosition(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

const springConfig = { type: "spring" as const, stiffness: 120, damping: 22 };

export default function Zones() {
  const [active, setActive] = useState(0);
  /* Track cumulative rotation so wrapping (5→0, 0→5) takes the short path */
  const [rotation, setRotation] = useState(0);

  const next = () => {
    setActive((a) => (a + 1) % 6);
    setRotation((r) => r + 60);
  };
  const prev = () => {
    setActive((a) => (a + 5) % 6);
    setRotation((r) => r - 60);
  };
  const goTo = (target: number) => {
    const diff = ((target - active) % 6 + 6) % 6;
    const shortest = diff <= 3 ? diff : diff - 6;
    setActive(target);
    setRotation((r) => r + shortest * 60);
  };

  const current = stages[active];

  const R = 420;
  const CONTAINER_H = 560;
  /* Circle center sits near the bottom of the container — overflow-hidden clips the lower arc */
  const CY = CONTAINER_H - 40;

  const PHONE_TOP = 80;
  const PILL_TOP = PHONE_TOP + 60;

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
        style={{ maxWidth: 1200, height: CONTAINER_H }}
      >
        {/* Dashed circle — centered at CY, clipped by overflow */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2"
          style={{
            top: CY - R - 20,
            width: (R + 20) * 2,
            height: (R + 20) * 2,
            border: "2px dashed #dce1e8",
            borderRadius: "50%",
          }}
        />

        {/* ── Rotating stage dots ── */}
        {/* Outer wrapper: fixed at circle center. Inner motion.div rotates the whole ring. */}
        <div
          className="absolute left-1/2"
          style={{ top: CY, transform: "translateX(-50%)" }}
        >
          <motion.div
            animate={{ rotate: -rotation }}
            transition={springConfig}
            style={{ willChange: "transform" }}
          >
            {stages.map((stage, i) => {
              const angle = i * 60;
              const pos = angleToPosition(angle, R);

              /* Which visual slot does this stage currently occupy? */
              const visualSlot = ((i - active) % 6 + 6) % 6;
              /* Hide the active dot (behind phone) */
              if (visualSlot === 0) return null;

              const opacity =
                visualSlot === 1 || visualSlot === 5
                  ? 1
                  : visualSlot === 2 || visualSlot === 4
                  ? 0.7
                  : 0.4;

              return (
                <button
                  key={`dot-${stage.num}`}
                  onClick={() => goTo(i)}
                  className="absolute z-20 flex items-center justify-center"
                  style={{
                    left: pos.x - 36,
                    top: pos.y - 36,
                    opacity,
                    transition: "opacity 0.4s ease",
                  }}
                  aria-label={`Stage ${stage.num}: ${stage.name}`}
                >
                  {/* Counter-rotate so numbers stay upright */}
                  <motion.div
                    className="flex h-[72px] w-[72px] items-center justify-center rounded-full font-display text-[1.3rem] font-bold text-white transition-transform hover:scale-110"
                    style={{
                      background: "#1a1d2e",
                      boxShadow:
                        "inset 0 8px 30px rgba(255,255,255,0.15), 0 4px 16px rgba(0,0,0,0.2)",
                    }}
                    animate={{ rotate: rotation }}
                    transition={springConfig}
                  >
                    {stage.num}
                  </motion.div>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ── Chevron buttons — fixed at far left/right ── */}
        <button
          onClick={prev}
          className="absolute z-20 flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-line bg-white text-muted transition-colors hover:bg-bg hover:text-ink"
          style={{ left: 60, top: CONTAINER_H * 0.48 - 26 }}
          aria-label="Previous stage"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute z-20 flex h-[52px] w-[52px] items-center justify-center rounded-full border-2 border-line bg-white text-muted transition-colors hover:bg-bg hover:text-ink"
          style={{ right: 60, top: CONTAINER_H * 0.48 - 26 }}
          aria-label="Next stage"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* ── Phone frame — centered ── */}
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
                  <div className="text-[2.8rem] opacity-20">{current.icon}</div>
                  <h3 className="mt-4 font-display text-[1.5rem] font-bold text-ink">
                    {current.name}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                    {current.note}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Pagination dots */}
              <div className="mt-auto flex gap-2.5">
                {stages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`h-2 w-2 rounded-full transition-all ${
                      i === active ? "bg-accent" : "bg-line"
                    }`}
                    aria-label={`Stage ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Active stage pill — on top of phone ── */}
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
                boxShadow:
                  "inset 0 8px 30px rgba(255,255,255,0.5), 0 12px 40px rgba(59,130,246,0.35)",
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
