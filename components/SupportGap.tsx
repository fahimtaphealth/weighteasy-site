"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const items = [
  {
    title: "Answers in minutes, not 72 hours.",
    body: "When the nausea hits on day four, our coach replies with what's normal, what to eat, and when to actually call your prescriber. Trained on the patterns of every major GLP-1.",
    quote:
      "“They prescribed it without explaining why I was on such a low dose.”",
    who: "Meagan, Austin",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces&q=80",
  },
  {
    title: "A coach that’s awake at 1am.",
    body: "Symptoms feel scarier in the dark. Tell us what’s happening — we’ll tell you what to do tonight, when it’ll pass, and what’s actually worth a call.",
    quote:
      "“1am, doctor’s office closed. Two hours on Reddit and I still had no idea if I should be worried.”",
    who: "Tricia, Portland",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=faces&q=80",
  },
  {
    title: "Meals that shift with your dose.",
    body: "Liquids and broths on dose day. Real food when your appetite’s back. Your meal plan rebuilds itself around your cycle — not someone else’s grocery list.",
    quote:
      "“The clinic handed me grilled chicken and rice for dose day. I couldn’t look at food for six hours.”",
    who: "Brian, Cleveland",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces&q=80",
  },
];

export default function SupportGap() {
  return (
    <section className="bg-bg py-[100px]">
      <div className="container-x">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="mt-3">
            We fill the gap{" "}
            <span className="text-accent">between</span>
            <br />
            your doctor visits
          </h2>
          <p className="mx-auto mt-3 max-w-[600px] text-muted">
            We sat down with many people on GLP-1s. No scripts, no
            leading questions, no &ldquo;what features would you
            want.&rdquo; Just: &ldquo;how&rsquo;s it going?&rdquo;
            Three things came up in every conversation.
          </p>
        </div>

        <motion.div
          variants={stagger(0.1, 0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 md:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="flex flex-col overflow-hidden rounded-[24px] border border-line"
              style={{
                boxShadow:
                  "0 2px 6px 2px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)",
              }}
            >
              {/* ── Top: Solution (white) ── */}
              <div className="flex flex-1 flex-col gap-3 bg-white p-8">
                <p className="text-[0.875rem] font-medium tracking-[-0.5px] text-accent">
                  WHAT WE DO
                </p>
                <h3 className="text-[1.375rem] font-bold leading-[1.18] text-ink">
                  {item.title}
                </h3>
                <p className="text-[1rem] leading-[1.5] text-muted">
                  {item.body}
                </p>
              </div>

              {/* ── Bottom: Quote (gray) ── */}
              <div className="flex flex-col gap-2 bg-[#f2f5f9] p-8">
                <p className="text-[0.875rem] leading-[1.43] tracking-[0.15px] text-muted">
                  {item.quote}
                </p>
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.photo}
                    alt={item.who}
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full object-cover"
                  />
                  <span className="text-[0.875rem] font-medium tracking-[-0.5px] text-muted-2">
                    {item.who}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
