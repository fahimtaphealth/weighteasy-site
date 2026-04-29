"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

/* ── Figma asset URLs (valid for 7 days) ── */
const imgScreen = "https://www.figma.com/api/mcp/asset/95cd8321-3000-47d6-8400-801871450bc9";
const imgIphoneOverlay1 = "https://www.figma.com/api/mcp/asset/a6db565c-bb94-4f0b-9bae-c4354d425464";
const imgNutritionImageStacks = "https://www.figma.com/api/mcp/asset/d9ea55fb-957e-4707-ac1e-b3cce7dc7559";
const imgFoodPhoto1 = "https://www.figma.com/api/mcp/asset/8a468fb9-48e4-4597-bb5d-362819306a8b";
const imgFoodPhoto2 = "https://www.figma.com/api/mcp/asset/814fe641-1bd4-408a-b8d1-18dbea52e3e6";
const imgScreen1 = "https://www.figma.com/api/mcp/asset/69461f97-7abc-4c5d-b2d5-8116eab8f64f";
const imgScreen2 = "https://www.figma.com/api/mcp/asset/f813ad40-09a6-45c5-bf3d-ddffae051c5d";

/* ── Row 1, Left: Tracking doses (dark teal card, wide — 717px in Figma) ── */
function DoseTrackingCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-[24px] text-white"
      style={{
        background: "linear-gradient(135deg, #081525 0%, #0a5c55 40%, #081525 100%)",
        height: 416,
      }}
    >
      {/* Text content */}
      <div className="absolute left-[40px] top-[40px] w-[313px] z-10">
        <h3 className="font-display text-[1.35rem] font-bold !text-white tracking-[-0.4px]">
          Tracking doses made easy
        </h3>
        <p className="mt-2 text-[0.95rem] leading-[1.55] text-white/60">
          Track your injection, fullness window, nausea level and mood in 10 seconds.
        </p>
      </div>

      {/* Phone mockup — right side */}
      <div className="absolute right-[40px] top-[106px]">
        {/* Screen */}
        <div className="absolute left-[7px] top-[5px] w-[241px] h-[536px] rounded-[29px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgScreen}
            alt="Dose tracking screen"
            className="w-full h-full object-cover rounded-[29px]"
          />
        </div>
        {/* iPhone overlay frame */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgIphoneOverlay1}
          alt=""
          className="relative w-[254px] h-[524px]"
        />
      </div>

      {/* Floating dose log card */}
      <div
        className="absolute left-[228px] top-[181px] w-[205px] rounded-[14px] bg-[#f2f5f9] p-[9px] z-20"
        style={{ boxShadow: "0 0 50px rgba(0,0,0,0.25)" }}
      >
        <div className="rounded-[9px] overflow-hidden">
          {/* Dose entry row */}
          <div className="flex items-center justify-between bg-white p-[9px] border-b border-[#f2f5f9]">
            <div>
              <p className="text-[9px] font-medium text-ink">21 Mar · 5mg</p>
              <p className="text-[7px] text-muted">Mounjaro</p>
            </div>
            <div className="w-[11px] h-[11px] text-muted">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>

          {/* Missed dose indicator */}
          <div className="flex flex-col items-center py-[2px] px-[9px]">
            <div className="h-[9px] w-px border-l border-dashed border-line" />
            <div className="bg-[#dce1e8] rounded-[9px] w-full text-center py-[9px]">
              <p className="text-[7px] font-medium text-muted">Dose missed · 12 Dec</p>
            </div>
            <div className="h-[9px] w-px border-l border-dashed border-line" />
          </div>

          {/* More dose entries */}
          <div className="flex items-center justify-between bg-white p-[9px] border-b border-[#f2f5f9]">
            <div>
              <p className="text-[9px] font-medium text-ink">7 Mar · 2.5mg</p>
              <p className="text-[7px] text-muted">Zepbound</p>
            </div>
            <div className="w-[11px] h-[11px] text-muted">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white p-[9px]">
            <div>
              <p className="text-[9px] font-medium text-ink">1 Mar · 2.5mg</p>
              <p className="text-[7px] text-muted">Mounjaro</p>
            </div>
            <div className="w-[11px] h-[11px] text-muted">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Row 1, Right: Cycle-aware meal plans (purple card, narrow — 411px in Figma) ── */
function MealPlansCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-[24px]"
      style={{
        background: "radial-gradient(ellipse at bottom right, #ede9fe, #f5f3ff)",
        height: 416,
      }}
    >
      {/* Text content */}
      <div className="absolute left-[40px] top-[40px] w-[313px]">
        <h3 className="font-display text-[1.35rem] font-bold text-ink tracking-[-0.4px]">
          Cycle-aware meal plans
        </h3>
        <p className="mt-2 text-[0.95rem] leading-[1.55] text-muted">
          Recipes shift with your appetite. Bone broth on Day 1, grain bowls on Day 5.
        </p>
      </div>

      {/* Meal cards — centered at bottom */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[191px] flex items-center justify-center gap-4"
        style={{ filter: "drop-shadow(0 -27px 30px rgba(0,0,0,0.05))" }}
      >
        {/* Small breakfast card */}
        <div className="flex flex-col items-center gap-3 rounded-[24px] bg-white px-4 py-6 w-[184px]">
          <div className="w-[96px] h-[96px]" style={{ filter: "drop-shadow(-1.5px 4.5px 6px rgba(16,24,40,0.15))" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgNutritionImageStacks}
              alt="Breakfast bowl"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="text-center">
            <p className="text-[12px] font-medium text-amber-600">Breakfast</p>
            <p className="text-[12px] text-ink mt-1">Overnight oats with Yoghurt and Chia seeds</p>
          </div>
        </div>

        {/* Large lunch card */}
        <div className="relative flex flex-col items-center gap-3 rounded-[24px] bg-white px-4 py-6 w-[224px] overflow-hidden">
          {/* Blurred background image */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-[114px] w-[274px] h-[274px] opacity-50 blur-[25px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgFoodPhoto1}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="relative w-[136px] h-[136px]" style={{ filter: "drop-shadow(-1.5px 4.5px 6px rgba(16,24,40,0.15))" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgFoodPhoto1}
              alt="Lunch bowl"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="relative text-center">
            <p className="text-[14px] font-medium text-amber-600">Lunch</p>
            <p className="text-[14px] text-ink mt-1">Overnight oats with Yoghurt and Chia seeds</p>
          </div>
        </div>

        {/* Small dinner card */}
        <div className="flex flex-col items-center gap-3 rounded-[24px] bg-white px-4 py-6 w-[184px]">
          <div className="w-[96px] h-[96px]" style={{ filter: "drop-shadow(-1.5px 4.5px 6px rgba(16,24,40,0.15))" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgFoodPhoto2}
              alt="Dinner bowl"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-center">
            <p className="text-[12px] font-medium text-amber-600">Dinner</p>
            <p className="text-[12px] text-ink mt-1">Butternut squash and lentil soup</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ── Row 2, Left: Track your weight (yellow icon card — 564px, 220px in Figma) ── */
function TrackWeightIconCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col gap-3 overflow-hidden rounded-[24px] p-7"
      style={{
        background: "radial-gradient(ellipse at bottom right, #fef3c7, #fffbeb)",
        height: 220,
      }}
    >
      {/* Weight scale icon — matches Figma */}
      <div className="w-[44px] h-[44px]">
        <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
          <rect x="6" y="10" width="32" height="26" rx="4" stroke="#252e49" strokeWidth="2" />
          <path d="M14 24a8 8 0 0 1 16 0" stroke="#252e49" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="24" x2="27" y2="19" stroke="#252e49" strokeWidth="2" strokeLinecap="round" />
          <circle cx="22" cy="24" r="2" fill="#252e49" />
        </svg>
      </div>
      <h3 className="font-display text-[1.35rem] font-bold text-ink tracking-[-0.4px]">
        Track your weight
      </h3>
      <p className="text-[0.95rem] leading-[1.55] text-muted">
        Log your weight and discover trends, not noise — we smooth the daily swings. Watch your weight go down.
      </p>
    </motion.article>
  );
}

/* ── Row 2, Right: Fitness (red/pink icon card — 564px, 220px in Figma) ── */
function FitnessIconCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex flex-col gap-3 overflow-hidden rounded-[24px] p-7"
      style={{
        background: "radial-gradient(ellipse at bottom right, #fee2e2, #fef2f2)",
        height: 220,
      }}
    >
      {/* Dumbbell/fitness icon — matches Figma */}
      <div className="w-[44px] h-[44px]">
        <svg viewBox="0 0 44 44" fill="none" className="w-full h-full">
          <rect x="5" y="16" width="8" height="12" rx="2" stroke="#252e49" strokeWidth="2" />
          <rect x="31" y="16" width="8" height="12" rx="2" stroke="#252e49" strokeWidth="2" />
          <rect x="10" y="13" width="6" height="18" rx="2" stroke="#252e49" strokeWidth="2" />
          <rect x="28" y="13" width="6" height="18" rx="2" stroke="#252e49" strokeWidth="2" />
          <line x1="16" y1="22" x2="28" y2="22" stroke="#252e49" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <h3 className="font-display text-[1.35rem] font-bold text-ink tracking-[-0.4px]">
        Fitness that fits your cycle
      </h3>
      <p className="text-[0.95rem] leading-[1.55] text-muted">
        Strength on your best days, gentle walks after a dose. Protein targets that actually move.
      </p>
    </motion.article>
  );
}

/* ── Row 3, Left: Weight chart (green card, narrow — 411px in Figma) ── */
function WeightChartCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-[24px]"
      style={{
        background: "radial-gradient(ellipse at bottom right, #dcfce7, #f0fdf4)",
        height: 416,
      }}
    >
      {/* Phone mockup — centered, protruding from top */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[170px]">
        <div className="w-[197px] h-[438px] rounded-[29px] border-[5px] border-black/15 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgScreen1}
            alt="Weight tracking screen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Text at bottom */}
      <div className="absolute left-[40px] bottom-[40px] w-[313px]">
        <h3 className="font-display text-[1.35rem] font-bold text-ink tracking-[-0.4px]">
          Track your weight
        </h3>
        <p className="mt-2 text-[0.95rem] leading-[1.55] text-muted">
          Discover trends, not noise — we smooth the daily swings.
        </p>
      </div>
    </motion.article>
  );
}

/* ── Row 3, Right: Side effects (blue card, wide — 717px in Figma) ── */
function SideEffectsCard() {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative overflow-hidden rounded-[24px]"
      style={{
        background: "radial-gradient(ellipse at bottom right, #dbeafe, #eff6ff)",
        height: 416,
      }}
    >
      {/* Text content — right side, with bottom margin for mobile spacing */}
      <div className="absolute right-[24px] left-[24px] top-[32px] md:left-auto md:right-[40px] md:top-[42px] md:w-[313px]">
        <h3 className="font-display text-[1.35rem] font-bold text-ink tracking-[-0.4px]">
          Manage side effects
        </h3>
        <p className="mt-2 text-[0.95rem] leading-[1.55] text-muted">
          Track your injection, fullness window, nausea level and mood in 10 seconds.
        </p>
      </div>

      {/* Phone mockup — left side */}
      <div className="absolute left-[32px] top-[130px] md:top-[106px]">
        {/* Screen */}
        <div className="absolute left-[7px] top-[5px] w-[241px] h-[536px] rounded-[29px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgScreen2}
            alt="Side effects screen"
            className="w-full h-full object-cover rounded-[29px]"
          />
        </div>
        {/* iPhone overlay frame */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgIphoneOverlay1}
          alt=""
          className="relative w-[254px] h-[524px]"
        />
      </div>

      {/* Remedy cards — peek row, shows ~1.5 cards on mobile */}
      <div className="absolute bottom-[40px] left-[260px] right-0 z-10 overflow-hidden md:left-[300px] md:right-[24px]">
        <div className="flex gap-3 pr-4">
          {[
            { emoji: "🍵", name: "Ginger Tea", tip: "Sip slowly to calm stomach lining." },
            { emoji: "🧂", name: "Saltine Crackers", tip: "Dry carbs to absorb acidity." },
            { emoji: "🧂", name: "Saltine Crackers", tip: "Dry carbs to absorb acidity." },
          ].map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[140px] rounded-[16px] bg-white border border-[#dce1e8] p-4"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
            >
              <div className="flex h-[36px] w-[36px] items-center justify-center rounded-[10px] bg-[#f2f5f9] text-[18px] mb-3">
                {item.emoji}
              </div>
              <p className="text-[13px] font-semibold text-ink leading-tight">{item.name}</p>
              <p className="mt-1.5 text-[12px] leading-[16px] text-muted">{item.tip}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
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

        {/* All cards in a flex-wrap layout matching Figma's 1152px grid with 24px gaps */}
        <motion.div
          variants={stagger(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 flex flex-wrap gap-6"
        >
          {/* Row 1: Wide (63.5%) + Narrow (36.5%) */}
          <div className="w-full grid grid-cols-1 md:grid-cols-[1.74fr_1fr] gap-6">
            <DoseTrackingCard />
            <MealPlansCard />
          </div>

          {/* Row 2: Two equal short cards */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <TrackWeightIconCard />
            <FitnessIconCard />
          </div>

          {/* Row 3: Narrow (36.5%) + Wide (63.5%) — reversed */}
          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1.74fr] gap-6">
            <WeightChartCard />
            <SideEffectsCard />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
