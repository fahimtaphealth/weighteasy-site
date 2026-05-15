"use client";

import { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

/* Figma asset URLs (refreshed 2026-05-15) */
const imgMeagan =
  "https://www.figma.com/api/mcp/asset/d58dfee8-961b-4c18-8af4-4eed6b7a95de";

const chapters = [
  {
    when: "Day 1",
    title: "The first shot",
    body: "“I was terrified. I’d watched YouTube tutorials for two weeks. The app walked me through the injection with a countdown and a calm “you’ve got this.” I cried a little. Then I had a sandwich.”",
    mood: "🫣",
  },
  {
    when: "Week 3",
    title: "The nausea week",
    body: "Zone C hit hard. Ginger, bland protein, small meals. The coach flagged I wasn’t drinking enough and shifted my meal plan overnight. I didn’t throw up once. My husband was shocked.",
    mood: "🤢",
  },
  {
    when: "Week 7",
    title: "The plateau",
    body: "Scale didn’t budge for 9 days. I almost quit. Coach showed me I’d dropped 2 inches off my waist and my resting HR was down 8bpm. Reframed the whole thing. I kept going.",
    mood: "📉",
  },
  {
    when: "Week 14",
    title: "Today",
    body: "Down 31 pounds. Off blood pressure meds. My clothes fit. But what I actually text my friends about is that I sleep now. That’s the part I didn’t see coming.",
    mood: "✨",
  },
];

export default function CaseStudy() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atBottom, setAtBottom] = useState(false);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const isBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 20;
    setAtBottom(isBottom);
  }, []);

  const scrollDown = () => {
    scrollRef.current?.scrollBy({ top: 200, behavior: "smooth" });
  };

  return (
    <section id="story" className="bg-white py-[100px]">
      <div className="container-x">
        {/* ── Heading ── */}
        <div className="mx-auto max-w-[780px] text-center">
          <h2 className="mt-3">
            <span className="text-accent">14 weeks</span> with
            WeightEasy &ndash;
            <br />
            Meagan&rsquo;s story
          </h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted">
            Not a curated before/after. The actual arc &mdash; the
            good, the bad and the scary.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <motion.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-24"
        >
          {/* Left: Photo / video card — fixed size */}
          <motion.div
            variants={fadeUp}
            className="relative w-full max-w-[445px] shrink-0 overflow-hidden rounded-[24px] lg:w-[445px]"
            style={{ height: "638px" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imgMeagan}
              alt="Meagan, 34, Austin TX"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Top-left gradient + name */}
            <div
              className="absolute inset-x-0 top-0 p-7"
              style={{
                background:
                  "radial-gradient(ellipse at top left, rgba(0,0,0,0.75) 0%, transparent 70%)",
              }}
            >
              <div className="font-display text-[1.5rem] font-bold leading-tight text-white">
                Meagan, 34 &middot; Austin, TX
              </div>
              <div className="mt-1 text-[0.875rem] tracking-[0.15px] text-white/75">
                Mounjaro &middot; 2.5mg &rarr; 7.5mg &middot; Started
                Jan 2026
              </div>
            </div>

            {/* Center play/pause button */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="flex h-[112px] w-[112px] items-center justify-center rounded-full"
                style={{ background: "rgba(12,12,13,0.75)" }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <rect x="20" y="16" width="8" height="32" rx="2" fill="white" />
                  <rect x="36" y="16" width="8" height="32" rx="2" fill="white" />
                </svg>
              </div>
            </div>

            {/* Bottom quote bar */}
            <div className="absolute inset-x-0 bottom-8 flex justify-center px-4">
              <div
                className="rounded-md px-3 py-2 text-center text-[1rem] leading-[1.5] text-white"
                style={{ background: "rgba(12,12,13,0.75)" }}
              >
                I didn&rsquo;t need another app. I needed someone to
                tell me I wasn&rsquo;t crazy at 10pm on a Tuesday.
                That&rsquo;s what this is.
              </div>
            </div>
          </motion.div>

          {/* Right: Scrollable timeline cards */}
          <div className="relative w-full max-w-[560px] lg:flex-1" style={{ height: "638px" }}>
            {/* Scrollable card container */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex h-full flex-col gap-6 overflow-y-auto pr-2 scrollbar-hide"
            >
              {chapters.map((c) => (
                <motion.div
                  key={c.when}
                  variants={fadeUp}
                  className="relative flex shrink-0 flex-col gap-1 rounded-[22px] border border-line bg-white p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[1rem] font-semibold uppercase tracking-[1.5px] text-accent">
                      {c.when}
                    </span>
                    <span className="text-[1.4rem]" aria-hidden>
                      {c.mood}
                    </span>
                  </div>
                  <h3 className="font-display text-[1.3rem] font-extrabold leading-[1.2] tracking-[-0.4px] text-ink">
                    {c.title}
                  </h3>
                  <p className="text-[1rem] leading-[1.6] text-muted">
                    {c.body}
                  </p>
                </motion.div>
              ))}
              {/* Bottom spacer so last card can scroll fully into view */}
              <div className="shrink-0 h-16" aria-hidden />
            </div>

            {/* White gradient fade at top */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[200px]"
              style={{
                background: "linear-gradient(to top, rgba(255,255,255,0) 0%, white 80%)",
              }}
            />

            {/* White gradient fade at bottom */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[200px] transition-opacity duration-300"
              style={{
                background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, white 80%)",
                opacity: atBottom ? 0 : 1,
              }}
            />

            {/* Down arrow scroll button */}
            <button
              onClick={scrollDown}
              className="absolute bottom-4 left-1/2 z-20 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-[#bec5d2] bg-[#f2f5f9] transition-opacity duration-300"
              style={{ opacity: atBottom ? 0 : 1, pointerEvents: atBottom ? "none" : "auto" }}
              style={{
                boxShadow: "0 2px 3px rgba(0,0,0,0.08), 0 1px 1px rgba(0,0,0,0.05)",
              }}
              aria-label="Scroll to next story"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14m0 0l-5-5m5 5l5-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
