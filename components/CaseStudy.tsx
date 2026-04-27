"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHead from "./SectionHead";

const chapters = [
  {
    when: "Day 1",
    title: "The first shot",
    body: "I was terrified. I\u2019d watched YouTube tutorials for two weeks. The app walked me through the injection with a countdown and a calm \u201cyou\u2019ve got this.\u201d I cried a little. Then I had a sandwich.",
    mood: "\uD83E\uDEE3",
  },
  {
    when: "Week 3",
    title: "The nausea week",
    body: "Zone C hit hard. Ginger, bland protein, small meals. The coach flagged I wasn\u2019t drinking enough and shifted my meal plan overnight. I didn\u2019t throw up once. My husband was shocked.",
    mood: "\uD83E\uDD22",
  },
  {
    when: "Week 7",
    title: "The plateau",
    body: "Scale didn\u2019t budge for 9 days. I almost quit. Coach showed me I\u2019d dropped 2 inches off my waist and my resting HR was down 8bpm. Reframed the whole thing. I kept going.",
    mood: "\uD83D\uDCC9",
  },
  {
    when: "Week 14",
    title: "Today",
    body: "Down 31 pounds. Off blood pressure meds. My clothes fit. But what I actually text my friends about is that I sleep now. That\u2019s the part I didn\u2019t see coming.",
    mood: "\u2728",
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
          body="Not a curated before/after. The actual arc &mdash; the good, the bad and the scary."
        />

        {/* Combined profile + quote card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 max-w-[640px] rounded-[22px] border border-line bg-white p-6"
        >
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&q=80"
              alt="Meagan"
              width={64}
              height={64}
              className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm-soft"
            />
            <div>
              <div className="font-display text-[1.05rem] font-bold text-ink">
                Meagan, 34 &middot; Austin, TX
              </div>
              <div className="mt-0.5 text-[0.88rem] text-muted">
                Mounjaro &middot; 2.5mg &rarr; 7.5mg &middot; Started Jan 2026
              </div>
            </div>
          </div>
          <p className="mt-4 text-[0.95rem] italic leading-[1.55] text-muted">
            &ldquo;I didn&rsquo;t need another app. I needed someone to tell me
            I wasn&rsquo;t crazy at 10pm on a Tuesday. That&rsquo;s what this
            is.&rdquo;
          </p>
        </motion.div>

        {/* Horizontal scrolling timeline */}
        <div className="relative mt-14">
          <motion.div
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          >
            {chapters.map((c, i) => (
              <motion.div
                key={c.when}
                variants={fadeUp}
                className="relative flex-shrink-0 snap-start flex flex-col gap-3 rounded-[22px] border border-line bg-white p-7"
                style={{ width: "min(360px, 80vw)" }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-accent">
                    {c.when}
                  </span>
                  <span className="text-[1.4rem]" aria-hidden>
                    {c.mood}
                  </span>
                </div>
                <h3 className="font-display text-[1.3rem] font-extrabold leading-[1.2] text-ink">
                  {c.title}
                </h3>
                <p className="text-[0.95rem] leading-[1.6] text-muted">
                  {c.body}
                </p>
                {/* Dashed connector */}
                {i < chapters.length - 1 && (
                  <div
                    className="absolute -right-4 top-1/2 hidden w-6 border-t-2 border-dashed border-line md:block"
                    aria-hidden
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <div className="mt-4 flex justify-center gap-1.5">
            <div className="h-1 w-8 rounded-full bg-ink" />
            <div className="h-1 w-2 rounded-full bg-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
