"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

export default function SectionHead({
  eyebrow,
  title,
  body,
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  dark?: boolean;
}) {
  return (
    <motion.div
      variants={stagger(0.05, 0.08)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="mx-auto mb-14 max-w-[780px] text-center"
    >
      <motion.span variants={fadeUp} className={cn("eyebrow", dark && "dark")}>
        {eyebrow}
      </motion.span>
      <motion.h2 variants={fadeUp} className={cn("mt-[18px]", dark && "!text-white")}>
        {title}
      </motion.h2>
      {body && (
        <motion.p
          variants={fadeUp}
          className={cn("mt-4 text-[1.08rem]", dark && "text-white/70")}
        >
          {body}
        </motion.p>
      )}
    </motion.div>
  );
}
