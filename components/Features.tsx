"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

/* ── Inline mockup for "Side effects" card ── */
function SideEffectsMockup() {
  return (
    <div className="mt-4 flex gap-2 overflow-hidden">
      {[
        { icon: "🍵", name: "Ginger Tea", tip: "Sip slowly to calm stomach lining." },
        { icon: "🍘", name: "Saltine Crackers", tip: "Dry carbs to absorb acidity." },
        { icon: "🍘", name: "Saltine Crackers", tip: "Dry carbs to absorb acidity." },
      ].map((item, i) => (
        <div
          key={i}
          className="flex-shrink-0 rounded-xl border border-line bg-bg p-3 text-left"
          style={{ width: 140 }}
        >
          <span className="text-lg">{item.icon}</span>
          <div className="mt-1 text-[0.78rem] font-semibold text-ink">{item.name}</div>
          <div className="mt-0.5 text-[0.7rem] text-muted">{item.tip}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Inline mockup for "Track doses" card ── */
function DoseChartMockup() {
  return (
    <div className="relative mt-4 flex flex-col items-center">
      {/* Mini chart */}
      <svg viewBox="0 0 260 120" className="w-full max-w-[260px]" fill="none">
        <path
          d="M20 100 Q40 100 60 30 Q80 8 100 40 Q140 90 200 95 Q230 96 250 98"
          stroke="rgba(79,70,229,0.6)"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M20 100 Q40 100 60 30 Q80 8 100 40 Q140 90 200 95 Q230 96 250 98 L250 120 L20 120Z"
          fill="url(#chartGrad)"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(79,70,229,0.5)" />
            <stop offset="100%" stopColor="rgba(79,70,229,0)" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="40" r="5" fill="white" stroke="rgba(79,70,229,0.8)" strokeWidth="2" />
      </svg>
      {/* Date labels */}
      <div className="mt-3 flex w-full max-w-[260px] items-center justify-between text-[0.7rem]">
        <div className="text-center">
          <div className="text-white/60">2 Dec</div>
          <div className="mt-0.5 text-[0.6rem] uppercase tracking-wider text-white/40">Last Dose</div>
        </div>
        <div className="rounded-lg bg-white/20 px-3 py-1 text-center">
          <div className="font-semibold text-white">4 Dec</div>
          <div className="mt-0.5 text-[0.6rem] uppercase tracking-wider text-white/60">Today</div>
        </div>
        <div className="text-center">
          <div className="text-white/60">12 Dec</div>
          <div className="mt-0.5 text-[0.6rem] uppercase tracking-wider text-white/40">Next Dose</div>
        </div>
      </div>
    </div>
  );
}

/* ── Inline mockup for "Meal plans" card ── */
function MealPlanMockup() {
  return (
    <div className="mt-4 flex flex-col gap-2">
      {[
        { meal: "Lunch", dish: "Overnight oats with Yoghurt and Chia seeds" },
        { meal: "Dinner", dish: "Butternut squash and lentil soup" },
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 rounded-xl border border-line bg-bg p-2.5"
        >
          <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-line" />
          <div className="min-w-0 flex-1">
            <div className="text-[0.72rem] font-semibold text-accent">{item.meal}</div>
            <div className="truncate text-[0.78rem] text-ink">{item.dish}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Icons for bottom row ── */
function IconWeight() {
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="20" height="16" rx="3" />
      <path d="M9 6V4a1 1 0 011-1h8a1 1 0 011 1v2" />
      <circle cx="14" cy="14" r="4" />
    </svg>
  );
}

function IconCoach() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <circle cx="9" cy="10" r="1" fill="white" stroke="none" />
        <circle cx="15" cy="10" r="1" fill="white" stroke="none" />
      </svg>
    </div>
  );
}

function IconFitness() {
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 14h15" />
      <path d="M4 10.5v7M8 8.5v11M20 8.5v11M24 10.5v7" />
    </svg>
  );
}

export default function Features() {
  return (
    <section id="features" className="bg-bg py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="Your personalized plan includes"
          title={
            <>
              Everything your GLP-1 journey needs.{" "}
              <span className="text-accent">Nothing it doesn&apos;t.</span>
            </>
          }
        />

        {/* ── Top row: tall cards with mockups ── */}
        <motion.div
          variants={stagger(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-[18px] md:grid-cols-3"
        >
          {/* Card 1 — Side effects */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-[22px] border border-line bg-white p-7 flex flex-col"
          >
            <h3 className="font-display text-[1.35rem]">
              All the support you need to manage side effects
            </h3>
            <p className="mt-2 text-[0.95rem] text-muted">
              Track your injection, fullness window, nausea level and mood in 10 seconds.
            </p>
            <SideEffectsMockup />
          </motion.article>

          {/* Card 2 — Track doses (dark) */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-[22px] border border-transparent bg-ink p-7 flex flex-col text-white"
          >
            <h3 className="font-display text-[1.35rem] !text-white">
              Track your doses easier than ever
            </h3>
            <DoseChartMockup />
          </motion.article>

          {/* Card 3 — Meal plans */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative overflow-hidden rounded-[22px] border border-line bg-white p-7 flex flex-col"
          >
            <h3 className="font-display text-[1.35rem]">
              Cycle-aware meal plans
            </h3>
            <p className="mt-2 text-[0.95rem] text-muted">
              Recipes shift with your appetite. Bone broth on Day 1, grain bowls on Day 5.
            </p>
            <MealPlanMockup />
          </motion.article>
        </motion.div>

        {/* ── Bottom row: icon cards ── */}
        <motion.div
          variants={stagger(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-[18px] grid grid-cols-1 gap-[18px] md:grid-cols-3"
        >
          {/* Weight & measurements */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-[22px] border border-line bg-white p-7 flex flex-col gap-3"
          >
            <IconWeight />
            <h3 className="font-display text-[1.35rem]">Weight &amp; measurements</h3>
            <p className="text-[0.95rem] text-muted">
              Log your weight and discover trends, not noise — we smooth the daily swings. Watch your weight go down.
            </p>
          </motion.article>

          {/* AI coach (dark) */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-[22px] border border-transparent bg-ink p-7 flex flex-col gap-3 text-white"
          >
            <IconCoach />
            <h3 className="font-display text-[1.35rem] !text-white">AI coach trained on GLP-1</h3>
            <p className="text-[0.95rem] text-white/80">
              Ask about side effects, dose questions, meal swaps — answered in seconds, with your cycle day in mind.
            </p>
          </motion.article>

          {/* Fitness */}
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-[22px] border border-line bg-white p-7 flex flex-col gap-3"
          >
            <IconFitness />
            <h3 className="font-display text-[1.35rem]">Fitness that fits your cycle</h3>
            <p className="text-[0.95rem] text-muted">
              Strength on your best days, gentle walks after a dose. Protein targets that actually move.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
