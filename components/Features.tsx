"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

/* ── Row 1, Left: Tracking doses (dark card with phone mockup) ── */
function DoseTrackingCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-[22px] p-7 text-white"
      style={{
        background: "linear-gradient(135deg, #0f4c3a, #1a3a4a, #1e2a5a)",
        minHeight: 380,
      }}
    >
      <h3 className="font-display text-[1.4rem] font-bold !text-white">
        Tracking doses made easy
      </h3>
      <p className="mt-2 max-w-[280px] text-[0.95rem] text-white/70">
        Track your injection, fullness window, nausea level and mood in 10 seconds.
      </p>

      {/* Phone mockup */}
      <div className="absolute bottom-0 right-4 top-16 w-[220px]">
        <div className="h-full rounded-t-[24px] border-2 border-white/10 bg-[#0a1628] p-4 pt-8">
          <div className="text-[0.65rem] text-white/40">Dose</div>
          <div className="mt-2 text-[1.1rem] font-bold text-white">
            Next dose in<br />
            <span className="text-[1.6rem]">12 days</span>
          </div>
          <div className="mt-1 text-[0.6rem] text-white/40">on Monday, 12 Dec</div>
          <div className="mt-3 rounded-lg bg-emerald-900/40 p-2">
            <div className="text-[0.6rem] font-semibold text-emerald-300">Levels are tapering off</div>
            <div className="mt-0.5 text-[0.5rem] text-emerald-200/60">
              Drug concentration is gradually declining. Appetite may return slightly before your next dose.
            </div>
          </div>
          {/* Mini chart */}
          <svg viewBox="0 0 180 60" className="mt-3 w-full" fill="none">
            <path
              d="M10 50 Q30 50 45 15 Q55 5 65 20 Q90 45 140 48 Q160 49 175 50"
              stroke="rgba(59,130,246,0.5)"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="65" cy="20" r="4" fill="#3B82F6" />
          </svg>
          <div className="mt-2 flex justify-between text-[0.5rem] text-white/30">
            <span>2 Dec</span>
            <span className="rounded bg-white/10 px-1.5 py-0.5 text-white/60">4 Dec</span>
            <span>12 Dec</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Row 1, Right: Cycle-aware meal plans ── */
function MealPlansCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-[22px] border border-line bg-white p-7"
      style={{ minHeight: 380 }}
    >
      <h3 className="font-display text-[1.4rem] font-bold">
        Cycle-aware meal plans
      </h3>
      <p className="mt-2 text-[0.95rem] text-muted">
        Recipes shift with your appetite. Bone broth on Day 1, grain bowls on Day 5.
      </p>

      {/* Meal cards mockup */}
      <div className="mt-6 flex gap-3 overflow-hidden">
        {[
          { img: "🥘", meal: "Lunch", dish: "Overnight oats with Yoghurt" },
          { img: "🍲", meal: "Dinner", dish: "Butternut squash and lentil soup" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex-shrink-0 overflow-hidden rounded-2xl border border-line bg-bg"
            style={{ width: 180 }}
          >
            <div className="flex h-28 items-center justify-center bg-line text-3xl">
              {item.img}
            </div>
            <div className="p-3">
              <div className="text-[0.7rem] font-semibold text-accent">{item.meal}</div>
              <div className="mt-0.5 text-[0.78rem] text-ink">{item.dish}</div>
            </div>
          </div>
        ))}
      </div>
    </motion.article>
  );
}

/* ── Row 3, Left: Track your weight (yellow chart card) ── */
function WeightChartCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-[22px] border border-line p-7"
      style={{ background: "#FEF9E7", minHeight: 340 }}
    >
      {/* Progress chart mockup */}
      <div className="rounded-xl bg-white p-4 shadow-sm">
        <div className="text-[0.75rem] font-semibold text-ink">Your progress</div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-[1.4rem] font-bold text-ink">-11.5</span>
          <span className="text-[0.7rem] text-muted">kg</span>
        </div>
        <svg viewBox="0 0 200 50" className="mt-2 w-full" fill="none">
          <path
            d="M5 10 Q30 12 60 20 Q90 28 120 25 Q150 22 180 35 Q190 38 195 40"
            stroke="#2563EB"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M5 10 Q30 12 60 20 Q90 28 120 25 Q150 22 180 35 Q190 38 195 40 L195 50 L5 50Z"
            fill="url(#weightGrad)"
            opacity="0.15"
          />
          <defs>
            <linearGradient id="weightGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <h3 className="mt-5 font-display text-[1.3rem] font-bold">Track your weight</h3>
      <p className="mt-1.5 text-[0.9rem] text-muted">
        Discover trends, not noise — we smooth the daily swings.
      </p>
    </motion.article>
  );
}

/* ── Row 3, Right: Manage side effects (with phone mockup) ── */
function SideEffectsCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-[22px] border border-line bg-white p-7"
      style={{ minHeight: 340 }}
    >
      <div className="flex gap-6">
        {/* Phone mockup */}
        <div className="flex-shrink-0" style={{ width: 200 }}>
          <div className="rounded-[20px] border-2 border-ink bg-white p-3 pt-6">
            <div className="text-[0.65rem] font-semibold text-ink">Log side effects</div>
            <div className="mt-2 text-[0.85rem] font-bold text-ink">
              Are you experiencing any side effects?
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {["🤢 Nausea", "😮‍💨 Fatigue", "💔 Heartburn", "😣 Constipation"].map((s) => (
                <div
                  key={s}
                  className="rounded-lg bg-bg px-2 py-2 text-center text-[0.6rem]"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text + remedy cards */}
        <div className="flex flex-col justify-center">
          <h3 className="font-display text-[1.3rem] font-bold">Manage side effects</h3>
          <p className="mt-2 text-[0.9rem] text-muted">
            Track your injection, fullness window, nausea level and mood in 10 seconds.
          </p>

          <div className="mt-4 flex gap-2">
            {[
              { icon: "🍵", name: "Ginger Tea", tip: "Sip slowly to calm stomach." },
              { icon: "🍘", name: "Saltine Crackers", tip: "Dry carbs to absorb acidity." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-line bg-bg p-2.5" style={{ width: 120 }}>
                <span className="text-sm">{item.icon}</span>
                <div className="mt-1 text-[0.7rem] font-semibold text-ink">{item.name}</div>
                <div className="mt-0.5 text-[0.6rem] text-muted">{item.tip}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Icon components ── */
function IconWeight() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="7" width="14" height="12" rx="2" />
        <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      </svg>
    </div>
  );
}

function IconFitness() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg">
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6.5 12h11" />
        <path d="M3.5 9v6M7.5 7v10M16.5 7v10M20.5 9v6" />
      </svg>
    </div>
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

        {/* Row 1: Two tall cards with mockups */}
        <motion.div
          variants={stagger(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-[18px] md:grid-cols-2"
        >
          <DoseTrackingCard />
          <MealPlansCard />
        </motion.div>

        {/* Row 2: Two short icon cards */}
        <motion.div
          variants={stagger(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-[18px] grid grid-cols-1 gap-[18px] md:grid-cols-2"
        >
          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-[22px] border border-line bg-white p-7 flex flex-col gap-3"
          >
            <IconWeight />
            <h3 className="font-display text-[1.25rem] font-bold">Track your weight</h3>
            <p className="text-[0.95rem] text-muted">
              Log your weight and discover trends, not noise — we smooth the daily swings. Watch your weight go down.
            </p>
          </motion.article>

          <motion.article
            variants={fadeUp}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-[22px] border border-line bg-white p-7 flex flex-col gap-3"
          >
            <IconFitness />
            <h3 className="font-display text-[1.25rem] font-bold">Fitness that fits your cycle</h3>
            <p className="text-[0.95rem] text-muted">
              Strength on your best days, gentle walks after a dose. Protein targets that actually move.
            </p>
          </motion.article>
        </motion.div>

        {/* Row 3: Two tall cards with mockups */}
        <motion.div
          variants={stagger(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-[18px] grid grid-cols-1 gap-[18px] md:grid-cols-2"
        >
          <WeightChartCard />
          <SideEffectsCard />
        </motion.div>
      </div>
    </section>
  );
}
