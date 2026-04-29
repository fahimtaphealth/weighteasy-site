"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import PhoneMockup from "./PhoneMockup";
import DosePhoneMockup from "./DosePhoneMockup";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-bg pb-20 pt-[90px]">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="relative"
        >
          <motion.span variants={fadeUp} className="eyebrow">
            WeightEasy — Tracker and Coach
          </motion.span>

          <motion.h1 variants={fadeUp} className="mt-5">
            Get more from your{" "}
            <span className="text-accent">GLP-1</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-[540px] text-[1.13rem] text-muted">
            We know day 3 hits hardest. We know the nausea peaks at week 3.
            We built an app that predicts what happens next — so you&rsquo;re
            never guessing alone.{" "}
            <span className="marker-hl">That&rsquo;s the gap we fill.</span>
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="btn btn-primary">Try it for 7 days, free</a>
            <a href="#story" className="btn btn-ghost">Read Meagan&rsquo;s story →</a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex items-center gap-4 text-[0.88rem] text-muted">
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
        <div className="relative flex items-start justify-center" style={{ height: 580 }}>
          {/* Left phone — Home screen (behind, slightly left and down) */}
          <div
            className="relative z-[5] flex-shrink-0"
            style={{
              marginTop: 40,
              marginRight: -80,
              transform: "scale(0.82)",
              transformOrigin: "top center",
            }}
          >
            <PhoneMockup />
          </div>
          {/* Right phone — Dose screen (in front, overlapping left phone) */}
          <div
            className="relative z-10 flex-shrink-0"
            style={{
              marginLeft: -80,
              transform: "scale(0.82)",
              transformOrigin: "top center",
            }}
          >
            <DosePhoneMockup />
          </div>
        </div>
      </div>
    </header>
  );
}
