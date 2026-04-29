"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CoachOrb from "./CoachOrb";

/**
 * Right phone — Dose tracking screen.
 * Dark teal header with graph, white body with recent logs.
 * Animations:
 *  1. Dose graph line draws from left → current position (trim path)
 *  2. "Levels are tapering off" card pops in smoothly after graph completes
 */
export default function DosePhoneMockup({ active }: { active?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const selfInView = useInView(ref, { once: true, margin: "-80px" });
  // If parent passes `active`, use it to gate animations (mobile viewport control)
  const inView = active !== undefined ? active : selfInView;

  return (
    <div ref={ref} className="relative flex items-center justify-center" style={{ height: 680 }}>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
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
          style={{ borderRadius: 40, background: "var(--surface-default, #f2f5f9)" }}
        >
          {/* Dynamic island notch */}
          <div
            className="absolute left-1/2 z-20 -translate-x-1/2"
            style={{ top: 10, width: 96, height: 22, background: "#0A0B1A", borderRadius: 14 }}
          />
          {/* Status bar */}
          <div className="absolute inset-x-0 top-0 z-[15] flex items-end justify-between px-[22px] pt-[10px] font-display text-[0.66rem] font-semibold text-white">
            <span>9:20</span>
            <span className="flex gap-1 opacity-90 text-[0.6rem]">●●● ▮</span>
          </div>

          <div className="h-full overflow-hidden pb-[58px]">
            {/* Header with teal gradient — dark section */}
            <section
              className="relative px-[18px] pb-5 pt-[42px] text-white"
              style={{
                background: "linear-gradient(160deg,#0E3B3D 0%,#0A2E35 60%,#081E2A 100%)",
              }}
            >
              {/* Top bar: Dose + Manage */}
              <div className="flex items-center justify-between">
                <span className="font-display text-[0.92rem] font-bold text-white">Dose</span>
                <span
                  className="rounded-full px-3 py-1 text-[0.66rem] font-semibold text-white/80"
                  style={{ background: "rgba(255,255,255,0.1)" }}
                >
                  Manage
                </span>
              </div>

              {/* Next dose in */}
              <div className="mt-5">
                <h2 className="font-display text-[1.7rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-white">
                  Next dose in<br />
                  <span className="text-[2rem] text-white">12 days</span>
                </h2>
                <p className="mt-1 text-[0.72rem] text-white/60">on Monday, 12 Dec</p>
              </div>

              {/* "Levels are tapering off" card — above graph */}
              <motion.div
                className="mt-5 rounded-[12px] px-[14px] py-3"
                style={{
                  background: "rgba(14,59,61,0.7)",
                  border: "1px solid rgba(94,234,212,0.15)",
                  backdropFilter: "blur(8px)",
                }}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-display text-[0.78rem] font-bold text-emerald-300">
                  Levels are tapering off
                </div>
                <p className="mt-1 text-[0.62rem] leading-[1.45] text-white/50">
                  Drug concentration is gradually declining. Appetite may return slightly before your next dose.
                </p>
              </motion.div>

              {/* Dose concentration graph */}
              <div className="mt-4 relative">
                <div className="flex">
                  {/* Graph area */}
                  <div className="flex-1">
                    <svg viewBox="0 0 220 100" className="w-full" preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <linearGradient id="doseGradFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.35" />
                          <stop offset="70%" stopColor="#5EEAD4" stopOpacity="0.08" />
                          <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="dotFade" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.5" />
                          <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="projFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#5EEAD4" stopOpacity="0.08" />
                          <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0" />
                        </linearGradient>
                        <clipPath id="graphClip">
                          <motion.rect
                            x="0" y="0" height="100"
                            initial={{ width: 0 }}
                            animate={inView ? { width: 220 } : {}}
                            transition={{ duration: 2.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                          />
                        </clipPath>
                      </defs>

                      {/* Grid lines */}
                      <line x1="0" y1="10" x2="220" y2="10" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                      <line x1="0" y1="35" x2="220" y2="35" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                      <line x1="0" y1="60" x2="220" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
                      <line x1="0" y1="85" x2="220" y2="85" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />

                      {/* Filled area under solid curve */}
                      <path
                        d="M0,85 C10,84 20,80 30,20 C35,5 42,8 48,18 C60,38 75,58 100,68 L100,100 L0,100Z"
                        fill="url(#doseGradFill)"
                        clipPath="url(#graphClip)"
                      />

                      {/* Main solid teal curve */}
                      <motion.path
                        d="M0,85 C10,84 20,80 30,20 C35,5 42,8 48,18 C60,38 75,58 100,68"
                        fill="none"
                        stroke="#5EEAD4"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                        transition={{ duration: 2.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      />

                      {/* Light fill under projected dotted line */}
                      <motion.path
                        d="M100,68 C130,76 170,82 220,85 L220,100 L100,100Z"
                        fill="url(#projFill)"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 2.4 }}
                      />

                      {/* Dotted projection line — fading gradient */}
                      <motion.path
                        d="M100,68 C130,76 170,82 220,85"
                        fill="none"
                        stroke="url(#dotFade)"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={inView ? { pathLength: 1, opacity: 1 } : {}}
                        transition={{ duration: 1.2, delay: 2.4, ease: "easeOut" }}
                      />

                      {/* Current position dot */}
                      <motion.circle
                        cx="100" cy="68" r="5"
                        fill="#5EEAD4"
                        stroke="#0A2E35"
                        strokeWidth="2.5"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.4, delay: 2.0 }}
                      />
                    </svg>
                  </div>

                  {/* Y-axis labels */}
                  <div className="flex flex-col justify-between pl-1 py-[2px]" style={{ minWidth: 20 }}>
                    <span className="text-[0.48rem] text-white/30 text-right">5</span>
                    <span className="text-[0.48rem] text-white/30 text-right">2.5</span>
                    <span className="text-[0.48rem] text-white/30 text-right">0</span>
                  </div>
                </div>

                {/* Y-axis vertical label */}
                <div
                  className="absolute -right-[2px] top-1/2 text-[0.38rem] text-white/20 font-medium tracking-wider"
                  style={{ transform: "translateY(-50%) rotate(90deg)", transformOrigin: "center", whiteSpace: "nowrap" }}
                >
                  GLP-1 Concentration (mg)
                </div>

                {/* X-axis date boxes with sub-labels */}
                <div className="mt-2 flex justify-between items-start px-0">
                  <div className="flex flex-col items-center">
                    <span
                      className="rounded-[6px] px-2 py-[3px] text-[0.56rem] font-semibold text-white/60"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      2 Dec
                    </span>
                    <span className="mt-[2px] text-[0.42rem] font-bold tracking-[0.05em] text-white/25 uppercase">Last Dose</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span
                      className="rounded-[6px] px-2 py-[3px] text-[0.56rem] font-bold text-white"
                      style={{ background: "#16A34A" }}
                    >
                      4 Dec · TODAY
                    </span>
                    <span className="mt-[2px] text-[0.42rem] font-bold tracking-[0.05em] text-white/25 uppercase">Today</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span
                      className="rounded-[6px] px-2 py-[3px] text-[0.56rem] font-semibold text-white/60"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      12 Dec
                    </span>
                    <span className="mt-[2px] text-[0.42rem] font-bold tracking-[0.05em] text-white/25 uppercase">Next Dose</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent logs — white/light background body */}
            <div className="px-[18px] pt-[18px]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 3.2 }}
              >
                <h3 className="font-display text-[0.92rem] font-extrabold text-ink tracking-[-0.02em]">
                  Recent logs
                </h3>
                <div className="mt-3 rounded-[14px] overflow-hidden bg-white">
                  {[
                    { date: "21 Mar · 5mg", drug: "Mounjaro" },
                    { date: "7 Mar · 2.5mg", drug: "Zepbound" },
                  ].map((log, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-[14px] py-[11px]"
                      style={{ borderBottom: i === 0 ? "1px solid #F0F1F6" : "none" }}
                    >
                      <div>
                        <div className="text-[0.72rem] font-medium text-ink">{log.date}</div>
                        <div className="text-[0.6rem] text-muted">{log.drug}</div>
                      </div>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--content-tertiary, #9CA3AF)" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom tab bar — white, matching left phone */}
          <nav
            className="absolute inset-x-0 bottom-0 flex justify-around border-t bg-white px-[6px] pb-[10px] pt-2"
            style={{ borderColor: "#EAEBF0" }}
          >
            {[
              { label: "Home", icon: "⌂" },
              { label: "Dose", icon: "◈", active: true },
              { label: "Coach", isOrb: true },
              { label: "Track", icon: "⚑" },
              { label: "Learn", icon: "▤" },
            ].map((tab) => (
              <div
                key={tab.label}
                className="flex flex-col items-center gap-0.5 text-[0.56rem] font-semibold"
                style={{ color: tab.active ? "var(--content-primary, #18203a)" : "var(--content-tertiary, #9CA3AF)" }}
              >
                {tab.isOrb ? (
                  <CoachOrb size={28} />
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
