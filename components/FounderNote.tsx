"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function FounderNote() {
  return (
    <section className="bg-white py-[100px]">
      <div className="container-x">
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto grid max-w-[980px] items-center gap-10 rounded-[28px] border border-line bg-bg p-8 md:grid-cols-[220px_1fr] md:p-12"
        >
          <motion.div variants={fadeUp} className="mx-auto md:mx-0">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=440&h=440&fit=crop&crop=faces&q=80"
                alt="Meagan Ruiz, founder"
                width={220}
                height={220}
                className="h-[220px] w-[220px] rounded-full object-cover ring-4 ring-white shadow-md-soft"
              />
              <div className="absolute -bottom-2 -right-2 rounded-full bg-white px-3 py-1 text-[0.72rem] font-semibold text-ink shadow-sm-soft">
                Founder
              </div>
            </div>
          </motion.div>

          <div>
            <motion.span variants={fadeUp} className="hand text-[1.4rem] text-accent">
              hi, from the kitchen table
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 font-display text-[1.9rem] font-extrabold leading-[1.15] text-ink md:text-[2.2rem]"
            >
              We built this because <span className="marker-hl">we needed it first.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-[1.02rem] leading-[1.65] text-muted"
            >
              I started on Mounjaro in 2024. The shot was the easy part. The hard
              part was every Wednesday night lying on the bathroom floor googling
              &ldquo;is green bile normal&rdquo; at 11pm. My prescriber was 3 weeks
              out. My friends nodded politely. Google was a rabbit hole.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[1.02rem] leading-[1.65] text-muted"
            >
              So I started a spreadsheet. Then a group chat. Then I quit my job
              and convinced three brilliant friends to help me build the thing I
              wished I&rsquo;d had. Half the team is on GLP-1s. The other half is
              obsessed with making sure the coach actually knows what it&rsquo;s
              talking about.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[1.02rem] leading-[1.65] text-muted"
            >
              If you try it and it doesn&rsquo;t help — tell me. Seriously. My
              email&rsquo;s below and I still read every one.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="mt-6 flex items-center gap-4"
            >
              <svg
                viewBox="0 0 160 40"
                className="h-10 w-auto text-ink"
                aria-label="Signature"
              >
                <path
                  d="M6 28 C 14 10, 22 10, 26 28 C 30 38, 34 14, 40 24 C 44 32, 50 14, 56 26 M 64 20 C 70 10, 78 10, 80 22 C 82 32, 76 32, 72 26 M 90 12 L 90 32 M 86 22 L 96 22 M 104 22 C 108 16, 118 16, 118 24 C 118 32, 104 32, 104 24 M 126 18 L 126 32 M 126 22 C 130 16, 138 16, 138 24 L 138 32 M 146 14 L 146 36"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="text-[0.86rem] text-muted">
                <b className="font-display font-bold text-ink">Meagan Ruiz</b>,
                founder
                <div className="text-muted-2">meagan@weighteasy.app · Austin, TX</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
