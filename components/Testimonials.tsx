"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const quotes = [
  {
    text:
      "It's the first thing that treats me like I'm running a system, not just restricting calories. The cycle view finally made my weeks make sense.",
    name: "Meagan",
    meta: "Week 14 · Mounjaro",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces&q=80",
  },
  {
    text:
      "The coach talked me off a ledge the night my dose made me nauseous. Honestly the reason I didn't quit.",
    name: "Genevieve",
    meta: "Week 6 · Wegovy",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=faces&q=80",
  },
  {
    text:
      "I'm on the lowest dose and losing steadily. The meal plans adjusted when I plateaued. That's the part no one else does.",
    name: "Tricia",
    meta: "Week 22 · Ozempic",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=faces&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-white py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="In their words"
          title={
            <>
              From the people we built this <span className="text-accent">alongside.</span>
            </>
          }
        />
        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {quotes.map((q) => (
            <motion.div
              key={q.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col gap-4 rounded-[22px] border border-line bg-bg p-8"
            >
              <p className="font-display text-[1.08rem] font-medium leading-[1.5] text-ink">
                {q.text}
              </p>
              <div className="mt-auto flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={q.photo}
                  alt={q.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-white shadow-sm-soft"
                />
                <div className="text-[0.85rem] text-muted">
                  <b className="font-display font-bold text-ink">{q.name}</b>
                  <div>{q.meta}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
