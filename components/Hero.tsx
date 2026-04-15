"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-bg pb-20 pt-[90px]">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="show">
          <motion.span variants={fadeUp} className="eyebrow">Your GLP-1 Companion</motion.span>
          <motion.h1 variants={fadeUp} className="mt-5">
            GLP-1s are hard. <span className="text-accent">We&rsquo;ve got you.</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-[540px] text-[1.13rem] text-muted">
            A coach in your pocket for the nauseous mornings, the plateau weeks, and the 10pm &ldquo;is this normal?&rdquo; moments. Built with real people on Ozempic, Wegovy, Mounjaro, Zepbound and Rybelsus — not just for them.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a href="#pricing" className="btn btn-primary">Start 7-day free trial</a>
            <a href="#how" className="btn btn-ghost">See how it works →</a>
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
              <b className="font-semibold text-ink">89% of connected users</b> lost weight 2× faster with WeightEasy.
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-4 inline-flex items-center gap-2 text-[0.82rem] text-muted-2 before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-teal"
          >
            7-day free trial · 90-day money-back guarantee · Cancel anytime
          </motion.div>
        </motion.div>

        <PhoneMockup />
      </div>
    </header>
  );
}
