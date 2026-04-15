"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { stagger } from "@/lib/motion";

/**
 * Mirrors the WeightEasy Home screen (Figma node 9104:146094).
 * Animations: phone entrance, staggered cards, dose-progress fill,
 * chart line draw, and a breathing Coach orb.
 */
export default function PhoneMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ height: 680 }}>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
        style={{
          width: 316,
          height: 650,
          borderRadius: 48,
          padding: 9,
          background: "#0A0B1A",
          boxShadow:
            "0 40px 80px -24px rgba(10,11,26,.28), 0 10px 20px rgba(10,11,26,.08), inset 0 0 0 1px rgba(255,255,255,.04)",
        }}
      >
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ borderRadius: 40, background: "#F3F4F8" }}
        >
          {/* Dynamic island notch */}
          <div
            className="absolute left-1/2 z-20 -translate-x-1/2"
            style={{ top: 10, width: 96, height: 22, background: "#0A0B1A", borderRadius: 14 }}
          />
          {/* Status bar */}
          <div className="absolute inset-x-0 top-0 z-[15] flex items-end justify-between px-[22px] pt-[10px] font-display text-[0.66rem] font-semibold text-white">
            <span>9:30</span>
            <span className="flex gap-1 opacity-90 text-[0.6rem]">●●● ▮</span>
          </div>

          <div className="h-full overflow-hidden pb-[58px]">
            {/* Cycle header (the one legitimate dark area) */}
            <section
              className="relative px-[18px] pb-5 pt-[42px] text-white"
              style={{
                background: "linear-gradient(160deg,#0E3B3D 0%,#0A2E35 60%,#081E2A 100%)",
              }}
            >
              {/* Avatar */}
              <div
                className="absolute right-[18px] top-[46px] flex h-8 w-8 items-center justify-center rounded-full font-display text-[0.68rem] font-bold"
                style={{ background: "#F4C9B6", color: "#0F1B3F" }}
              >
                MK
              </div>
              <div className="text-[0.78rem] font-medium opacity-90">Good Morning Manit!</div>
              <div className="mt-0.5 font-display text-[1.5rem] font-extrabold leading-[1.1] tracking-[-0.02em]">
                Day 1 of Cycle
              </div>
              <p className="mt-2 text-[0.75rem] leading-[1.4] opacity-80">
                Your appetite suppression is stable, and energy will be returning.
              </p>

              {/* Dose card */}
              <div
                className="mt-4 rounded-[14px] bg-white px-[14px] py-3"
                style={{ boxShadow: "0 8px 18px -12px rgba(0,0,0,.3)" }}
              >
                <div className="text-[0.65rem] font-medium text-muted">
                  Next Dose — Ozempic • 0.5mg
                </div>
                <div className="mt-px font-display text-[1.15rem] font-extrabold text-ink tracking-[-0.02em]">
                  Due today
                </div>
                {/* Animated progress bar — the signature gradient */}
                <div className="mt-2.5 h-[3px] overflow-hidden rounded-full" style={{ background: "#EEF0F6" }}>
                  <motion.span
                    className="block h-full rounded-full bg-coach-grad"
                    initial={{ width: "0%" }}
                    animate={inView ? { width: "35%" } : {}}
                    transition={{ duration: 1.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full py-[9px] text-[0.78rem] font-bold text-white font-display"
                  style={{ background: "#0E1123" }}
                >
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21l3-3m5-5l3-3m-1-1l6 6m-9 2l1 1m2-8l4 4M14 4l6 6" />
                  </svg>
                  Log dose
                </motion.button>
              </div>
            </section>

            {/* Body */}
            <motion.div
              variants={stagger(0.4, 0.12)}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="flex flex-col gap-[18px] p-[14px] pt-[18px]"
            >
              {/* Trackers */}
              <motion.div variants={cardVariant}>
                <h3 className="mb-[10px] font-display text-[1.05rem] font-extrabold text-ink tracking-[-0.02em]">
                  Your trackers
                </h3>
                <div className="rounded-[14px] bg-white px-3 py-1">
                  <Tracker icon="⚖️" name="Weight" overdue value="134 lb • 2 Apr" />
                  <Tracker icon="🍽️" name="Food" value="1 of 4 meals logged" />
                  <Tracker icon="💧" name="Water" value="1.2L of 2L" last />
                </div>
              </motion.div>

              {/* Coach pill */}
              <motion.div variants={cardVariant} className="relative rounded-full bg-white px-3 py-[10px]">
                <div
                  className="pointer-events-none absolute inset-0 rounded-full"
                  style={{
                    padding: 1.5,
                    background:
                      "linear-gradient(135deg,#22C1C3 0%,#4F46E5 55%,#A855F7 100%)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                  }}
                />
                <div className="flex items-center gap-[10px]">
                  <motion.span
                    className="h-[22px] w-[22px] flex-shrink-0 rounded-full bg-coach-orb"
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  <div className="flex-1 text-[0.72rem] text-muted">
                    Don&apos;t like your meals?
                    <b className="block font-display text-[0.78rem] font-bold text-ink">Talk to your Coach</b>
                  </div>
                  <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-line text-[0.7rem] text-ink">
                    →
                  </span>
                </div>
              </motion.div>

              {/* Progress card */}
              <motion.div variants={cardVariant}>
                <h3 className="mb-[10px] font-display text-[1.05rem] font-extrabold text-ink tracking-[-0.02em]">
                  Your progress
                </h3>
                <div className="rounded-[14px] bg-white p-[14px]">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-[0.66rem] font-semibold text-muted">▾ Weight</div>
                      <div className="font-display text-[1.5rem] font-extrabold tracking-[-0.02em]" style={{ color: "#16A34A" }}>
                        1.2
                        <span className="ml-0.5 text-[0.7rem] font-semibold text-muted">lbs</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[0.66rem] font-semibold text-muted">Current</div>
                      <div className="font-display text-[0.82rem] font-extrabold text-ink">
                        187.2<span className="ml-0.5 text-[0.58rem] font-medium text-muted">lbs</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[0.66rem] font-semibold text-muted">BMI</div>
                      <div className="font-display text-[0.82rem] font-extrabold" style={{ color: "#E58E0B" }}>
                        21.7
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-2 h-[52px]">
                    <svg viewBox="0 0 280 52" preserveAspectRatio="none" className="h-full w-full">
                      <motion.polyline
                        points="0,8 80,16 130,14 200,36 280,44"
                        fill="none"
                        stroke="#2563EB"
                        strokeWidth={2}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                        transition={{ duration: 1.4, delay: 1.1, ease: "easeInOut" }}
                      />
                      <motion.polyline
                        points="130,14 200,36 280,44"
                        fill="none"
                        stroke="#BFC6DA"
                        strokeWidth={1.5}
                        strokeDasharray="2 3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                        transition={{ duration: 1, delay: 2.3, ease: "easeInOut" }}
                      />
                      <motion.circle
                        cx={130}
                        cy={14}
                        r={3.5}
                        fill="#2563EB"
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 2.4 }}
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom tab bar */}
          <nav
            className="absolute inset-x-0 bottom-0 flex justify-around border-t bg-white px-[6px] pb-[10px] pt-2"
            style={{ borderColor: "#EAEBF0" }}
          >
            {[
              { label: "Home", icon: "⌂", active: true },
              { label: "Dose", icon: "◈" },
              { label: "Coach", isOrb: true },
              { label: "Track", icon: "⚑" },
              { label: "Learn", icon: "▤" },
            ].map((tab) => (
              <div
                key={tab.label}
                className="flex flex-col items-center gap-0.5 text-[0.56rem] font-semibold"
                style={{ color: tab.active ? "#172554" : "#5E6378" }}
              >
                {tab.isOrb ? (
                  <motion.span
                    className="h-7 w-7 rounded-full bg-coach-orb"
                    style={{ boxShadow: "0 6px 12px -4px rgba(79,70,229,.45)" }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                ) : (
                  <span className="flex h-[18px] w-[18px] items-center justify-center text-base">
                    {tab.icon}
                  </span>
                )}
                {tab.label}
              </div>
            ))}
          </nav>
        </div>
      </motion.div>
    </div>
  );
}

const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function Tracker({
  icon,
  name,
  value,
  overdue,
  last,
}: {
  icon: string;
  name: string;
  value: string;
  overdue?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-[10px] py-[11px]"
      style={{ borderBottom: last ? "none" : "1px solid #F0F1F6" }}
    >
      <span
        className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full text-[0.72rem]"
        style={{ background: "#F3F4F8" }}
      >
        {icon}
      </span>
      <div className="flex-1">
        <b className="block font-display text-[0.82rem] font-bold text-ink">
          {name}
          {overdue && (
            <span
              className="ml-1 inline-block rounded-full px-1.5 py-0.5 text-[0.55rem] font-bold"
              style={{ background: "#FFF3D9", color: "#C98C1B" }}
            >
              Overdue
            </span>
          )}
        </b>
        <span className="mt-px block text-[0.66rem] text-muted">{value}</span>
      </div>
      <span
        className="flex h-7 w-7 items-center justify-center rounded-full text-[0.9rem] leading-none text-white"
        style={{ background: "#0A0B1A" }}
      >
        +
      </span>
    </div>
  );
}
