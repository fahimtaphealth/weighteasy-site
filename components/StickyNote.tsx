"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  rotate?: number;
  color?: "yellow" | "pink" | "blue";
  className?: string;
}

const palettes = {
  yellow: { bg: "#FFF5B0", edge: "#F3E087" },
  pink: { bg: "#FFD4D4", edge: "#F3B5B5" },
  blue: { bg: "#CFE3FF", edge: "#A8C5F0" },
};

export default function StickyNote({
  children,
  rotate = -3,
  color = "yellow",
  className,
}: Props) {
  const p = palettes[color];
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: rotate + 1, y: -2 }}
      className={className}
      style={{
        background: p.bg,
        boxShadow: `inset 0 -6px 0 ${p.edge}, 0 18px 30px -10px rgba(10,11,26,0.20), 0 4px 8px rgba(10,11,26,0.06)`,
        padding: "18px 20px",
        borderRadius: "2px",
        color: "#2B1810",
        fontFamily: '"Caveat", "Bradley Hand", cursive',
        fontSize: "1.25rem",
        lineHeight: 1.25,
        maxWidth: "240px",
        transformOrigin: "center",
      }}
    >
      {children}
    </motion.div>
  );
}
