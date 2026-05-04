"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const items = [
  {
    q: "\u201cMy doctor prescribed it. Then disappeared.\u201d",
    a: "Day four, nausea hit. Her clinic portal took 72 hours to reply. With WeightEasy, she\u2019d have had an answer in minutes.",
    label: "the hand-off",
    who: "Meagan, Austin",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces&q=80",
  },
  {
    q: "\u201cI couldn\u2019t reach my doctor. So I asked Reddit.\u201d",
    a: "Two hours sorting strangers\u2019 opinions from facts at 1am. WeightEasy gives medically-grounded answers in seconds \u2014 any hour.",
    label: "the 1am google",
    who: "Brian, Cleveland",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces&q=80",
  },
  {
    q: "\u201cThe clinic\u2019s meal plan didn\u2019t match how I felt.\u201d",
    a: "Grilled chicken and rice on dose day \u2014 she couldn\u2019t eat for six hours. WeightEasy tunes meals to your dose cycle.",
    label: "the food problem",
    who: "Tricia, Portland",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=faces&q=80",
  },
];

export default function SupportGap() {
  return (
    <section className="bg-bg py-[100px]">
      <div className="container-x">
        <div className="mx-auto max-w-[760px]">
          <h2 className="mt-3">
            We fill the gap{" "}
            <span className="text-accent">between</span> your
            doctor visits
          </h2>
          <p className="mt-5 max-w-[600px] text-muted">
            The prescription is the easy part. The questions that come
            after - at 1am, on day four, or at the dinner
            table - are where people are alone. That&rsquo;s where we
            come in.
          </p>
        </div>

        <motion.div
          variants={stagger(0.1, 0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {items.map((item, i) => (
            <motion.article
              key={item.label}
              variants={fadeUp}
              whileHover={{ y: -4, rotate: i === 1 ? 1 : -1, transition: { duration: 0.3 } }}
              className="relative rounded-[4px] bg-white p-8"
              style={{
                transform: `rotate(${i === 1 ? "1deg" : i === 0 ? "-0.8deg" : "0.6deg"})`,
                boxShadow: "0 18px 36px -14px rgba(10,11,26,0.18), 0 3px 6px rgba(10,11,26,0.04)",
              }}
            >
              <span className="hand text-[1.1rem] text-accent">{item.label}</span>
              <div className="mt-3 font-display text-[1.15rem] font-bold tracking-[-0.01em] leading-[1.35] text-ink">
                {item.q}
              </div>
              <p
                className="mt-4 text-[0.96rem] leading-[1.55]"
                dangerouslySetInnerHTML={{ __html: item.a }}
              />
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.photo}
                  alt={item.who}
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm-soft"
                />
                <div className="hand text-[1.1rem] text-muted-2">{item.who}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
