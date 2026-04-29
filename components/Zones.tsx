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

function angleToXY(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: Math.cos(rad) * radius,
    y: Math.sin(rad) * radius,
  };
}

const spring = { type: "spring" as const, stiffness: 120, damping: 22 };

export default function Zones() {
  const [active, setActive] = useState(0);
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

      {/* Carousel — clipped at bottom */}
      <div className="relative mt-10 overflow-hidden" style={{ height: CONTAINER_H }}>
        {/* ── SVG layer: dashed circle + animated dots ── */}
        {/* Using SVG guarantees pixel-perfect centering and correct arc rotation */}
        <svg
          className="absolute inset-0 w-full"
          style={{ height: CONTAINER_H }}
          viewBox={`0 0 1200 ${CONTAINER_H}`}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Dashed circle */}
          <circle
            cx={600}
            cy={CY}
            r={R + 20}
            fill="none"
            stroke="#dce1e8"
            strokeWidth={2}
            strokeDasharray="8 6"
          />

          {/* Rotating group for dots — rotation around circle center */}
          <motion.g
            animate={{ rotate: -rotation }}
            transition={spring}
            style={{ transformOrigin: `600px ${CY}px` }}
          >
            {stages.map((stage, i) => {
              const angle = i * 60;
              const pos = angleToXY(angle, R);
              const cx = 600 + pos.x;
              const cy = CY + pos.y;

              const visualSlot = ((i - active) % 6 + 6) % 6;
              if (visualSlot === 0) return null;

              const opacity =
                visualSlot === 1 || visualSlot === 5
                  ? 1
                  : visualSlot === 2 || visualSlot === 4
                  ? 0.7
                  : 0.4;

              return (
                <g
                  key={`dot-${stage.num}`}
                  onClick={() => goTo(i)}
                  style={{ cursor: "pointer", opacity, transition: "opacity 0.4s" }}
                >
                  {/* Dark circle */}
                  <circle cx={cx} cy={cy} r={36} fill="#1a1d2e" />
                  {/* Inner glow */}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={36}
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth={1}
                  />
                  {/* Counter-rotate text so it stays upright */}
                  <motion.g
                    animate={{ rotate: rotation }}
                    transition={spring}
                    style={{ transformOrigin: `${cx}px ${cy}px` }}
                  >
                    <text
                      x={cx}
                      y={cy}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="white"
                      fontFamily="var(--font-display), system-ui, sans-serif"
                      fontSize="22"
                      fontWeight="700"
                    >
                      {stage.num}
                    </text>
                  </motion.g>
                </g>
              );
            })}
          </motion.g>
        </svg>

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
            <div className="absolute left-1/2 top-0 z-10 h-[30px] w-[110px] -translate-x-1/2 rounded-b-[16px] bg-ink" />
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

      <div className="h-[60px] bg-gradient-to-b from-white to-bg" />
    </section>
  );
}
