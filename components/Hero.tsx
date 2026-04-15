"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";
import PhoneMockup from "./PhoneMockup";
import Squiggle from "./Squiggle";

export default function Hero() {
  return (
    <header className="relative overflow-hidden bg-bg pb-20 pt-[90px]">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          animate="show"
          className="relative"
        >
          {/* handwritten margin note */}
          <motion.div
            initial={{ opacity: 0, x: -10, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: -5 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute -left-2 -top-6 hidden text-[1.05rem] text-accent hand md:block"
            aria-hidden
          >
            <span className="inline-flex items-center gap-2">
              ← hi, we&rsquo;re real people
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="mt-2">
            GLP-1s are hard.
            <br />
            <span className="relative inline-block">
              We&rsquo;ve got you
              <Squiggle
                className="absolute -bottom-3 left-0 h-3 w-[110%]"
                color="#2563EB"
                strokeWidth={4}
              />
            </span>
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-[540px] text-[1.13rem] text-muted">
            It&rsquo;s 10:47pm. You&rsquo;re on the kitchen floor wondering if the
            nausea is normal or if something&rsquo;s wrong. Your prescriber is 3 weeks
            away. Google is useless. <span className="marker-hl">That&rsquo;s the gap we fill.</span>
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-[540px] text-[0.98rem] text-muted-2"
          >
            Built with people on Ozempic, Wegovy, Mounjaro, Zepbound &amp; Rybelsus
            — not just for them.
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
              <b className="font-semibold text-ink">12,400 people on GLP-1s</b>{" "}
              use WeightEasy. Only four of them were on a waiting list.
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="mt-4 inline-flex items-center gap-2 text-[0.82rem] text-muted-2 before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-teal"
          >
            7-day free trial · 90-day money-back · no &ldquo;just trust us&rdquo;
          </motion.div>
        </motion.div>

        <PhoneMockup />
      </div>
    </header>
  );
}
