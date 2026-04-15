"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHead from "./SectionHead";

const chapters = [
  {
    when: "Day 1",
    title: "The first shot",
    body:
      "I was terrified. I&rsquo;d watched YouTube tutorials for two weeks. The app walked me through the injection with a countdown and a calm &ldquo;you&rsquo;ve got this.&rdquo; I cried a little. Then I had a sandwich.",
    mood: "🫣",
  },
  {
    when: "Week 3",
    title: "The nausea week",
    body:
      "Zone C hit hard. Ginger, bland protein, small meals. The coach flagged I wasn&rsquo;t drinking enough and shifted my meal plan overnight. I didn&rsquo;t throw up once. My husband was shocked.",
    mood: "🤢",
  },
  {
    when: "Week 7",
    title: "The plateau",
    body:
      "Scale didn&rsquo;t budge for 9 days. I almost quit. Coach showed me I&rsquo;d dropped 2 inches off my waist and my resting HR was down 8bpm. Reframed the whole thing. I kept going.",
    mood: "📉",
  },
  {
    when: "Week 14",
    title: "Today",
    body:
      "Down 31 pounds. Off blood pressure meds. My clothes fit. But what I actually text my friends about is that I sleep now. That&rsquo;s the part I didn&rsquo;t see coming.",
    mood: "✨",
  },
];

export default function CaseStudy() {
  return (
    <section className="bg-bg py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="A real story"
          title={
            <>
              Meagan&rsquo;s first <span className="text-accent">14 weeks.</span>
            </>
          }
          body="Not a curated before/after. The actual arc — scary parts, plateau, and the stuff that surprised her."
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 flex max-w-[720px] items-center gap-5 rounded-[22px] border border-line bg-white p-5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&q=80"
            alt="Meagan"
            width={72}
            height={72}
            className="h-[72px] w-[72px] shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm-soft"
          />
          <div>
            <div className="font-display text-[1.05rem] font-bold text-ink">
              Meagan, 34 · Austin, TX
            </div>
            <div className="mt-0.5 text-[0.88rem] text-muted">
              Mounjaro · 2.5mg → 7.5mg · Started Jan 2026
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {chapters.map((c, i) => (
            <motion.div
              key={c.when}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="relative flex flex-col gap-3 rounded-[22px] border border-line bg-white p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-muted-2">
                  {c.when}
                </span>
                <span className="text-[1.4rem]" aria-hidden>
                  {c.mood}
                </span>
              </div>
              <h3 className="font-display text-[1.3rem] font-extrabold leading-[1.2] text-ink">
                {c.title}
              </h3>
              <p
                className="text-[1rem] leading-[1.6] text-muted"
                dangerouslySetInnerHTML={{ __html: c.body }}
              />
              {i < chapters.length - 1 && (
                <div
                  className="absolute -bottom-3 right-6 hidden h-6 w-6 items-center justify-center rounded-full bg-accent text-white text-[0.8rem] md:flex"
                  aria-hidden
                >
                  ↓
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-10 flex max-w-[720px] items-center gap-4 rounded-[18px] border border-line bg-white p-5"
        >
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-display text-[1rem] font-extrabold text-white"
            style={{ background: "#172554" }}
          >
            M
          </div>
          <p className="text-[0.95rem] italic leading-[1.55] text-muted">
            &ldquo;I didn&rsquo;t need another app. I needed someone to tell me I
            wasn&rsquo;t crazy at 10pm on a Tuesday. That&rsquo;s what this is.&rdquo;
            <span className="not-italic text-muted-2"> — Meagan, Mounjaro</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
