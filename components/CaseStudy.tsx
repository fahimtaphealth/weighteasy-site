"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHead from "./SectionHead";

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
    <section id="story" className="bg-bg py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="A real story"
          title={
            <>
              14 weeks with WeightEasy &ndash;{" "}
              <span className="text-accent">Story of Meagan</span>
            </>
          }
          body="Not a curated before/after. The actual arc - the good, the bad and the scary."
        />

        {/* Video-style hero card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mt-10 max-w-[800px] overflow-hidden rounded-[22px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=500&fit=crop&crop=faces&q=80"
            alt="Meagan"
            className="h-[400px] w-full object-cover"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Name + info overlay top-left */}
          <div className="absolute left-6 top-6">
            <div className="font-display text-[1.1rem] font-bold text-white">
              Meagan, 34 &middot; Austin, TX
            </div>
            <div className="mt-0.5 text-[0.85rem] text-white/70">
              Mounjaro &middot; 2.5mg &rarr; 7.5mg &middot; Started Jan 2026
            </div>
          </div>

          {/* Play button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M6 4l12 6-12 6V4z" fill="var(--content-primary, #18203a)" />
                </svg>
              </div>
            </div>
          </div>

          {/* Quote overlay at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="max-w-[500px] text-[0.95rem] italic leading-[1.55] text-white/90">
              &ldquo;I didn&rsquo;t need another app. I needed someone to tell
              me I wasn&rsquo;t crazy at 10pm on a Tuesday. That&rsquo;s what
              this is.&rdquo;
            </p>
          </div>
        </motion.div>

      </div>

      {/* Horizontal scrolling timeline - outside container-x to prevent edge clipping */}
      <div className="relative mt-10 max-w-[1280px] mx-auto">
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 pl-6 snap-x snap-mandatory scrollbar-hide"
          style={{ overscrollBehaviorX: "contain" }}
        >
          {chapters.map((c, i) => (
            <motion.div
              key={c.when}
              variants={fadeUp}
              className="relative flex-shrink-0 snap-start flex flex-col gap-3 rounded-[22px] border border-line bg-white p-7"
              style={{ width: "min(320px, 75vw)" }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-accent">
                  {c.when}
                </span>
                <span className="text-[1.4rem]" aria-hidden>
                  {c.mood}
                </span>
              </div>
              <h3 className="font-display text-[1.2rem] font-extrabold leading-[1.2] text-ink">
                {c.title}
              </h3>
              <p className="text-[0.9rem] leading-[1.6] text-muted">
                {c.body}
              </p>
              {/* Dashed connector */}
              {i < chapters.length - 1 && (
                <div
                  className="absolute -right-3.5 top-1/2 hidden w-5 border-t-2 border-dashed border-line"
                  aria-hidden
                />
              )}
            </motion.div>
          ))}
          {/* End spacer so last card can scroll fully into view */}
          <div className="flex-shrink-0 w-6" aria-hidden />
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-2 flex justify-center gap-1.5">
          <div className="h-1 w-8 rounded-full bg-ink" />
          <div className="h-1 w-2 rounded-full bg-line" />
        </div>
      </div>
    </section>
  );
}
