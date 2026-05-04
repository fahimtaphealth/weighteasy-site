"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
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
  const [userInteracted, setUserInteracted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const next = useCallback(() => {
    setActive((a) => (a + 1) % 6);
    setRotation((r) => r + 60);
  }, []);

  const handleNext = () => {
    setUserInteracted(true);
    next();
  };
  const handlePrev = () => {
    setUserInteracted(true);
    setActive((a) => (a + 5) % 6);
    setRotation((r) => r - 60);
  };
  const handleGoTo = (target: number) => {
    setUserInteracted(true);
    const diff = ((target - active) % 6 + 6) % 6;
    const shortest = diff <= 3 ? diff : diff - 6;
    setActive(target);
    setRotation((r) => r + shortest * 60);
  };

  // Auto-advance every 2s once in viewport, stop when user interacts
  useEffect(() => {
    if (!inView || userInteracted) return;
    timerRef.current = setTimeout(() => {
      next();
    }, 2000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [inView, active, userInteracted, next]);

  const current = stages[active];

  const R = 420;
  const CONTAINER_H = 560;
  const CY = CONTAINER_H - 40;
  const PHONE_TOP = 80;
  const PILL_TOP = PHONE_TOP + 60;

  return (
    <section ref={sectionRef} id="how" className="relative border-t border-line bg-white pb-0 pt-[100px] overflow-hidden">
      <div className="container-x">
        <SectionHead
          eyebrow="How WeightEasy works"
          title={
            <>
              WeightEasy helps you{" "}
              <span className="text-accent">every day of your GLP-1 dose cycle.</span>
            </>
          }
          body="Some days you're starving. Some days food is the enemy. WeightEasy knows the difference - and shifts your meals, coaching, and reminders to match."
        />
      </div>

      {/* Carousel + mobile controls wrapper - relative so mobile controls can sit outside overflow-hidden */}
      <div className="relative mt-10" style={{ height: CONTAINER_H }}>
        {/* Inner clipped area for circle/dots/phone */}
        <div className="absolute inset-0 overflow-hidden">
          {/* ── Dashed circle (CSS) ── */}
          <div
            className="pointer-events-none absolute z-[1]"
            style={{
              left: "50%",
              top: CY,
              width: (R + 20) * 2,
              height: (R + 20) * 2,
              marginLeft: -(R + 20),
              marginTop: -(R + 20),
              border: "2px dashed #dce1e8",
              borderRadius: "50%",
            }}
          />

          {/* ── Rotating dots container - centered at circle origin ── */}
          <div
            className="absolute z-[5]"
            style={{ left: "50%", top: CY, width: 0, height: 0 }}
          >
            <motion.div
              animate={{ rotate: -rotation }}
              transition={spring}
              style={{ transformOrigin: "0px 0px", position: "relative", width: 0, height: 0 }}
            >
              {stages.map((stage, i) => {
                const angle = i * 60;
                const pos = angleToXY(angle, R);

                const visualSlot = ((i - active) % 6 + 6) % 6;
                if (visualSlot === 0) return null;

                const opacity =
                  visualSlot === 1 || visualSlot === 5
                    ? 1
                    : visualSlot === 2 || visualSlot === 4
                    ? 0.7
                    : 0.4;

                return (
                  <motion.div
                    key={`dot-${stage.num}`}
                    className="absolute cursor-pointer"
                    style={{
                      left: pos.x - 36,
                      top: pos.y - 36,
                      width: 72,
                      height: 72,
                    }}
                    animate={{ opacity }}
                    transition={spring}
                    onClick={() => handleGoTo(i)}
                  >
                    {/* Counter-rotate to keep text upright */}
                    <motion.div
                      className="w-full h-full"
                      animate={{ rotate: rotation }}
                      transition={spring}
                      style={{ transformOrigin: "center center" }}
                    >
                      {/* Dark circle background */}
                      <div className="absolute inset-0 rounded-full bg-[#1a1d2e] border border-white/8" />
                      {/* Number text */}
                      <div className="absolute inset-0 flex items-center justify-center font-display text-[1.4rem] font-bold text-white">
                        {stage.num}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* ── Desktop chevron buttons - sized to match number dots (72px) ── */}
          <button
            onClick={handlePrev}
            className="absolute z-20 hidden md:flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-line bg-white text-muted transition-colors hover:bg-bg hover:text-ink"
            style={{ left: 120, top: CONTAINER_H * 0.35 - 36 }}
            aria-label="Previous stage"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute z-20 hidden md:flex h-[72px] w-[72px] items-center justify-center rounded-full border-2 border-line bg-white text-muted transition-colors hover:bg-bg hover:text-ink"
            style={{ right: 120, top: CONTAINER_H * 0.35 - 36 }}
            aria-label="Next stage"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* ── Phone frame - centered ── */}
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
                {/* Desktop-only simple dots inside phone */}
                <div className="mt-auto hidden md:flex gap-2.5 justify-center">
                  {stages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => handleGoTo(i)}
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

          {/* ── Active stage pill - centered on top of phone ── */}
          <div
            className="absolute z-30 flex justify-center"
            style={{ left: 0, right: 0, top: PILL_TOP }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={`pill-${current.num}`}
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
        </div>

        {/* ── Mobile chevron buttons - OUTSIDE overflow-hidden ── */}
        <button
          onClick={handlePrev}
          className="absolute z-20 flex md:hidden h-[44px] w-[44px] items-center justify-center rounded-full border-2 border-line bg-white text-muted shadow-md"
          style={{ left: 16, top: PHONE_TOP + 200 }}
          aria-label="Previous stage"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="absolute z-20 flex md:hidden h-[44px] w-[44px] items-center justify-center rounded-full border-2 border-line bg-white text-muted shadow-md"
          style={{ right: 16, top: PHONE_TOP + 200 }}
          aria-label="Next stage"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* ── Mobile pagination pill - OUTSIDE overflow-hidden ── */}
        <div
          className="absolute z-30 flex justify-center md:hidden"
          style={{ left: 0, right: 0, top: CONTAINER_H - 60 }}
        >
          <div className="flex items-center gap-[6px] rounded-full bg-[#1a1d2e] px-3 py-2 shadow-lg">
            {stages.map((_, i) => (
              <button
                key={i}
                onClick={() => handleGoTo(i)}
                aria-label={`Stage ${i + 1}`}
                className="transition-all duration-300"
                style={{
                  height: 6,
                  borderRadius: 3,
                  width: i === active ? 20 : 6,
                  background: i === active ? "#ffffff" : "rgba(255,255,255,0.25)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="h-[60px] bg-gradient-to-b from-white to-bg" />
    </section>
  );
}
