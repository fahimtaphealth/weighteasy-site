"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

/* Figma asset URLs (refreshed 2026-05-15) */
const imgMeagan =
  "https://www.figma.com/api/mcp/asset/e9fc7774-9fcc-47a1-9214-dd06838b33ac";

const chapters = [
  {
    when: "Day 1",
    title: "The first shot",
    body: "I was terrified. I’d watched YouTube tutorials for two weeks. The app walked me through the injection with a countdown and a calm “you’ve got this.” I cried a little. Then I had a sandwich.",
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
          className="mt-10 grid items-start gap-10 lg:grid-cols-2"
        >
          {/* Left: Photo / video card */}
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[24px]"
            style={{ aspectRatio: "4/5.5" }}
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
                  "radial-gradient(ellipse at top left, rgba(0,0,0,0.55) 0%, transparent 70%)",
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

            {/* Center play button */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="flex h-[112px] w-[112px] items-center justify-center rounded-full"
                style={{
                  background: "rgba(12,12,13,0.75)",
                }}
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path
                    d="M24 16v32l24-16-24-16z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            {/* Bottom quote bar */}
            <div className="absolute inset-x-0 bottom-8 flex justify-center px-6">
              <div
                className="rounded-md px-4 py-2 text-center text-[1rem] leading-[1.5] text-white"
                style={{ background: "rgba(12,12,13,0.75)" }}
              >
                I didn&rsquo;t need another app. I needed someone to
                tell me I wasn&rsquo;t crazy at 10pm on a Tuesday.
                That&rsquo;s what this is.
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline cards */}
          <div className="relative flex flex-col gap-6">
            {/* Vertical dotted line */}
            <div
              className="absolute left-[calc(50%-85px)] top-6 hidden h-[calc(100%-48px)] border-l-2 border-dashed border-line lg:block"
              aria-hidden
            />

            {chapters.map((c, i) => (
              <motion.div
                key={c.when}
                variants={fadeUp}
                className="relative z-10 flex flex-col gap-3 rounded-[22px] border border-line bg-white p-7"
                style={{
                  boxShadow: i === 0 ? "none" : undefined,
                }}
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
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-10 flex justify-center">
          <div className="flex h-2 w-[108px] overflow-hidden rounded-full bg-[#f2f5f9]">
            <div className="w-[63%] rounded-full bg-[#3d4966]" />
          </div>
        </div>
      </div>
    </section>
  );
}
