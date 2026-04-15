"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

function AnimatedNumber({
  value,
  suffix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals, mv]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 89, suffix: "%", label: "of connected users lost weight 2× faster.", sub: "Connected users log their dose at least weekly." },
  { value: 4.3, suffix: " lbs", label: "more weight lost per month on average.", sub: "Versus self-directed GLP-1 users without a coach.", decimals: 1 },
  { value: 14, suffix: " min", label: "average time to get a coach answer at 2am.", sub: "You're never alone with a question about dose day." },
];

export default function Stats() {
  return (
    <section className="bg-bg py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="What people feel in the first month"
          title={
            <>
              Here&apos;s what GLP-1 with a companion{" "}
              <span className="text-accent">could look like for you.</span>
            </>
          }
        />
        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-[18px] md:grid-cols-3"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-[22px] border border-line bg-white p-8"
            >
              <div className="font-display text-[3.4rem] font-extrabold leading-none tracking-[-0.04em] text-ink">
                <AnimatedNumber
                  value={s.value}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                />
              </div>
              <div className="mt-3.5 font-display font-bold text-ink">{s.label}</div>
              <div className="mt-2 text-[0.9rem] text-muted">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
