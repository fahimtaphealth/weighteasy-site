"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const types = [
  {
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=480&fit=crop&crop=faces&q=80",
    name: "Laura, day 3",
    title: "Just prescribed",
    body:
      "You got the script. You left the office with questions. We’ll walk you through week one, hour by hour if you need it.",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=480&fit=crop&crop=faces&q=80",
    name: "Priya, 7 mo",
    title: "Ramping up doses",
    body:
      "Every titration changes your appetite, your energy, your sleep. We’ll adjust your plan at every step, not every quarter.",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=480&fit=crop&crop=faces&q=80",
    name: "Marcus, 11 mo",
    title: "Hit a plateau",
    body:
      "Plateaus are expected, not a failure. Our coach reads your data and suggests the smallest change that tends to work.",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=480&fit=crop&crop=faces&q=80",
    name: "James, 14 mo",
    title: "Coming off GLP-1",
    body:
      "The hardest part: protecting your progress after the medication. We have a 12-week transition plan for exactly this.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-bg py-[110px]">
      <div className="container-x">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="mt-3">
            <span className="marker-hl">Built for four kinds of GLP-1 people.</span>
          </h2>
          <p className="mt-4 text-muted">
            Week one looks nothing like month six. Your app shouldn&rsquo;t
            either.
          </p>
        </div>

        <motion.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {types.map((t) => (
            <motion.div
              key={t.title}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group overflow-hidden rounded-[20px] border border-line bg-white"
            >
              <div className="relative aspect-[5/6] overflow-hidden bg-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-full w-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 hand text-[1rem] text-ink">
                  {t.name}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[1.05rem]">{t.title}</h3>
                <p className="mt-2 text-[0.92rem] text-muted">{t.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
