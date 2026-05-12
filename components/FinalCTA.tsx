"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import StickyNote from "./StickyNote";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-[130px] text-center text-white">
      {/* stuck-on notes */}
      <div className="pointer-events-none absolute left-[6%] top-[18%] hidden md:block">
        <StickyNote rotate={-8} color="yellow">
          p.s. we read every email.
          <br />
          care@weighteasy.app
        </StickyNote>
      </div>
      <div className="pointer-events-none absolute right-[7%] top-[22%] hidden md:block">
        <StickyNote rotate={6} color="pink">
          cancel anytime,
          <br />
          no dark patterns,
          <br />
          we promise.
        </StickyNote>
      </div>

      <div className="container-x relative">
        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.span variants={fadeUp} className="hand text-[1.5rem]" style={{ color: "var(--color-teal-300)" }}>
            okay last thing
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 !text-white"
            style={{ fontSize: "clamp(2.4rem,4.8vw,4rem)" }}
          >
            Try it for a week.
            <br />
            <span className="shimmer-text animate-shimmer">See if we&rsquo;re right.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[560px] text-[1.1rem] text-white/80"
          >
            If the coach doesn&rsquo;t feel like a real friend by day seven, cancel
            and we&rsquo;ll refund the trial. No clicking through three settings
            pages to find the button.
          </motion.p>
          <motion.a
            variants={fadeUp}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#yearly"
            className="btn mt-9 bg-white px-8 py-4 text-base text-ink hover:bg-bg"
          >
            Start the 7 days →
          </motion.a>
          <motion.div
            variants={fadeUp}
            className="mt-9 flex items-center justify-center gap-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="#"><img src="https://www.figma.com/api/mcp/asset/6ce4f983-24f2-4b70-86b0-582c8966de54" alt="Download on the App Store" className="h-[48px] w-auto" /></a>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <a href="#"><img src="https://www.figma.com/api/mcp/asset/564617aa-208a-4cd7-8a84-c316622c7641" alt="Get it on Google Play" className="h-[48px] w-auto" /></a>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-10 max-w-[520px] text-[0.82rem] text-white/45"
          >
            WeightEasy is a wellness companion app, not a substitute for medical
            advice. For anything serious, please call your prescriber or 911.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
