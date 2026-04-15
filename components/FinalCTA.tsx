"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-[120px] text-center text-white">
      <div className="container-x relative">
        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="eyebrow dark">
            Ready when you are
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-5 !text-white"
            style={{ fontSize: "clamp(2.4rem,4.8vw,4rem)" }}
          >
            Your complete GLP-1 app <span className="shimmer-text animate-shimmer">is ready.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-[560px] text-[1.1rem] text-white/80"
          >
            Start your 7-day free trial. Cancel anytime. Backed by a 90-day money-back guarantee.
          </motion.p>
          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#"
            className="btn mt-9 bg-white px-8 py-4 text-base text-ink hover:bg-bg"
          >
            Start 7-day free trial
          </motion.a>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-10 max-w-[520px] text-[0.82rem] text-white/55"
          >
            WeightEasy is a wellness companion app. It is not a substitute for medical advice, diagnosis, or treatment. Always talk to your prescriber about serious side effects.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
