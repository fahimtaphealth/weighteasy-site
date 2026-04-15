"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import SectionHead from "./SectionHead";

const faces = [
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Aisha",
    meta: "Zepbound · 9 mo",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Daniel",
    meta: "Mounjaro · 4 mo",
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Tricia",
    meta: "Ozempic · 22 wk",
  },
  {
    src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Priya",
    meta: "Wegovy · 7 mo",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Marcus",
    meta: "Zepbound · 11 mo",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Genevieve",
    meta: "Wegovy · 6 wk",
  },
  {
    src: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Rachel",
    meta: "Rybelsus · 3 mo",
  },
  {
    src: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "James",
    meta: "Ozempic · 14 mo",
  },
];

export default function Community() {
  return (
    <section className="bg-white py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="The community"
          title={
            <>
              12,400 people on GLP-1s, <span className="text-accent">not alone anymore.</span>
            </>
          }
          body="Real users, real weeks on treatment. Every face here agreed to be shown."
        />

        <motion.div
          variants={stagger(0.04, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {faces.map((f) => (
            <motion.div
              key={f.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-[18px] bg-bg"
            >
              <div className="aspect-[4/5] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={f.src}
                  alt={f.name}
                  className="h-full w-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                <div className="font-display text-[1rem] font-bold text-white">
                  {f.name}
                </div>
                <div className="text-[0.78rem] text-white/80">{f.meta}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
