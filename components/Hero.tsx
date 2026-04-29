"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp, stagger } from "@/lib/motion";
import PhoneMockup from "./PhoneMockup";
import DosePhoneMockup from "./DosePhoneMockup";

export default function Hero() {
  const phonePairRef = useRef<HTMLDivElement>(null);
  const phonePairInView = useInView(phonePairRef, { once: false, margin: "0px 0px -150px 0px" });

  return (
    <header className="relative overflow-hidden bg-bg pb-12 pt-[72px] sm:pb-20 sm:pt-[90px]">
      <div className="container-x grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="relative text-center lg:text-left"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            WeightEasy — Tracker and Coach
          </motion.span>

          <motion.h1 variants={fadeUp} className="mt-5">
            Get more from your{" "}
            <span className="text-accent">GLP-1</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-[540px] text-[1rem] text-muted sm:mt-7 sm:text-[1.13rem] lg:mx-0">
            We know day 3 hits hardest. We know the nausea peaks at week 3.
            We built an app that predicts what happens next — so you&rsquo;re
            never guessing alone.{" "}
            <span className="marker-hl">That&rsquo;s the gap we fill.</span>
          </motion.p>

          <motion.div variants={fadeUp} className="mt-7 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:flex-wrap lg:justify-start">
            <a href="#pricing" className="btn btn-primary w-full sm:w-auto">Try it for 7 days, free</a>
            <a href="#story" className="btn btn-ghost w-full sm:w-auto">Read Meagan&rsquo;s story →</a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7 flex items-center justify-center gap-4 text-[0.84rem] text-muted sm:mt-9 sm:text-[0.88rem] lg:justify-start">
            <div className="flex">
              {[
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=faces&q=80",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces&q=80",
                "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=faces&q=80",
                "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=80&h=80&fit=crop&crop=faces&q=80",
              ].map((src, i) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={i}
                  src={src}
                  alt=""
                  width={34}
                  height={34}
                  className="-ml-2 h-[34px] w-[34px] rounded-full border-2 border-bg object-cover shadow-sm-soft"
                />
              ))}
            </div>
            <div>
              Based on research with{" "}
              <b className="font-semibold text-ink">500+ people on GLP-1</b>
            </div>
          </motion.div>
        </motion.div>

        {/* Two phone mockups — overlapping, dose phone in front staggered top-right */}
        {/*
          transform: scale() doesn't shrink layout box, so we use a fixed-height
          container with overflow-hidden to prevent phones from pushing the grid wider.
          Phone scale: 0.52 mobile → 0.65 sm → 0.72 md → 0.82 lg (via CSS var)
        */}
        <div
          ref={phonePairRef}
          className="phone-pair relative mx-auto w-full"
          style={{ height: "clamp(440px, 55vw, 580px)" }}
        >
          <div className="absolute inset-0 flex items-start justify-center">
            {/* Left phone — Home screen (behind, slightly left and down) */}
            <div
              className="relative z-[5]"
              style={{
                marginTop: "var(--phone-offset-top)",
                marginRight: "var(--phone-overlap)",
                transform: "scale(var(--phone-scale))",
                transformOrigin: "top center",
              }}
            >
              <PhoneMockup active={phonePairInView} />
            </div>
            {/* Right phone — Dose screen (in front, overlapping left phone) */}
            <div
              className="relative z-10"
              style={{
                marginLeft: "var(--phone-overlap)",
                transform: "scale(var(--phone-scale))",
                transformOrigin: "top center",
              }}
            >
              <DosePhoneMockup active={phonePairInView} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
