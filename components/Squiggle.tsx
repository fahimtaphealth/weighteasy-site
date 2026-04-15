"use client";

import { motion } from "framer-motion";

type Variant = "squiggle" | "straight" | "circle";

interface Props {
  variant?: Variant;
  color?: string;
  className?: string;
  strokeWidth?: number;
}

const paths: Record<Variant, string> = {
  // wobbly underline
  squiggle: "M2 8 C 20 2, 40 14, 60 6 S 100 14, 140 4 S 200 14, 240 6 S 290 14, 318 6",
  // imperfect straight line
  straight: "M2 6 C 40 4, 80 8, 160 5 S 280 8, 318 4",
  // lasso circle
  circle: "M20 40 C 20 10, 300 10, 300 40 C 300 70, 20 70, 20 40 Z",
};

export default function Squiggle({
  variant = "squiggle",
  color = "#2563EB",
  className,
  strokeWidth = 3,
}: Props) {
  const viewBox = variant === "circle" ? "0 0 320 80" : "0 0 320 16";
  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
    >
      <motion.path
        d={paths[variant]}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
      />
    </svg>
  );
}
