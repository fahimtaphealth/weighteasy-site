"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const items = [
  {
    num: "01",
    label: "THE HAND-OFF",
    quote:
      "“My telehealth call was 15 minutes. Day four the nausea hit hard and my clinic portal took 72 hours to reply.”",
    who: "Meagan, Austin",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces&q=80",
    title: "Answers in minutes, not 72 hours.",
    body:
      "When the nausea hits on day four, our coach replies with what’s normal, what to eat, and when to actually call your prescriber. Trained on the patterns of every major GLP-1.",
    stat: "Median first reply: under 2 minutes.",
  },
  {
    num: "02",
    label: "THE 1AM GOOGLE",
    quote:
      "“1am, doctor’s office closed. Two hours on Reddit and I still had no idea if I should be worried.”",
    who: "Brian, Cleveland",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces&q=80",
    title: "A coach that’s awake at 1am.",
    body:
      "Symptoms feel scarier in the dark. Tell us what’s happening — we’ll tell you what to do tonight, when it’ll pass, and what’s actually worth a call.",
    stat: "Available 24/7. No portal queues, no Reddit threads.",
  },
  {
    num: "03",
    label: "THE FOOD PROBLEM",
    quote:
      "“The clinic handed me grilled chicken and rice for dose day. I couldn’t look at food for six hours.”",
    who: "Tricia, Portland",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=faces&q=80",
    title: "Meals that shift with your dose.",
    body:
      "Liquids and broths on dose day. Real food when your appetite’s back. Your meal plan rebuilds itself around your cycle — not someone else’s grocery list.",
    stat: "Plans rebuild every day, based on where you are in the cycle.",
  },
];

function ArrowDown() {
  return (
    <div className="flex justify-center py-3">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="text-muted-2"
      >
        <path
          d="M10 4v12m0 0l-4-4m4 4l4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function SupportGap() {
  return (
    <section className="bg-bg py-[100px]">
      <div className="container-x">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="mt-3">
            We fill the gap{" "}
            <span className="text-accent">between</span> your doctor
            visits
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-muted">
            The prescription is the easy part. The questions that come
            after &mdash; at 1am, on day four, or at the dinner
            table &mdash; are where people are alone. That&rsquo;s
            where we come in.
          </p>
        </div>

        <motion.div
          variants={stagger(0.1, 0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div key={item.num} variants={fadeUp} className="flex flex-col">
              {/* ── Problem card ── */}
              <div className="rounded-[16px] border border-line bg-white p-7">
                <div className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-muted-2">
                  &mdash; Problem {item.num} &middot; {item.label}
                </div>
                <p className="mt-4 font-display text-[1.05rem] font-bold leading-[1.4] text-ink">
                  {item.quote}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.photo}
                    alt={item.who}
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <span className="text-[0.88rem] text-muted-2">
                    {item.who}
                  </span>
                </div>
              </div>

              {/* ── Arrow ── */}
              <ArrowDown />

              {/* ── Solution card ── */}
              <div className="flex flex-1 flex-col rounded-[16px] border border-line bg-white p-7">
                <div className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-accent">
                  &mdash; What we do
                </div>
                <h3 className="mt-3 font-display text-[1.35rem] font-extrabold leading-[1.2] tracking-[-0.01em] text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-[1.6] text-muted">
                  {item.body}
                </p>
                <div className="mt-5 flex items-start gap-2 text-[0.88rem] text-muted-2">
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item.stat}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
