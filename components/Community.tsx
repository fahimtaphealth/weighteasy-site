"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

const faces = [
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Aisha",
    meta: "Zepbound, 9 mo",
    rotate: -3,
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Daniel",
    meta: "Mounjaro, 4 mo",
    rotate: 2.5,
  },
  {
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Tricia",
    meta: "Ozempic, wk 22",
    rotate: -1.5,
  },
  {
    src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Priya",
    meta: "Wegovy, 7 mo",
    rotate: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Marcus",
    meta: "Zepbound, 11 mo",
    rotate: -2.8,
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Genevieve",
    meta: "Wegovy, wk 6",
    rotate: 1.8,
  },
  {
    src: "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "Rachel",
    meta: "Rybelsus, 3 mo",
    rotate: -2.2,
  },
  {
    src: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=400&h=500&fit=crop&crop=faces&q=80",
    name: "James",
    meta: "Ozempic, 14 mo",
    rotate: 2.2,
  },
];

export default function Community() {
  return (
    <section className="relative bg-white py-[110px]">
      <div className="container-x">
        <div className="mx-auto max-w-[720px]">
          <span className="hand text-[1.4rem] text-accent">snapshots from the group chat</span>
          <h2 className="mt-3">
            12,400 people on GLP-1s.
            <br />
            <span className="text-accent">Not alone anymore.</span>
          </h2>
          <p className="mt-4 max-w-[520px] text-muted">
            Not models. Not stock photos tagged &ldquo;happy_woman_42.&rdquo; Actual
            users who said yes when we asked.
          </p>
        </div>

        <div className="relative mx-auto mt-16 flex max-w-[1100px] flex-wrap items-start justify-center gap-6 md:gap-8">
          {faces.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40, rotate: f.rotate - 8 }}
              whileInView={{ opacity: 1, y: 0, rotate: f.rotate }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, y: -8, scale: 1.02, zIndex: 10 }}
              className="relative"
              style={{
                background: "#FFFFFF",
                padding: "14px 14px 48px",
                boxShadow:
                  "0 22px 44px -14px rgba(10,11,26,0.22), 0 4px 8px rgba(10,11,26,0.06)",
                width: "200px",
              }}
            >
              {/* tape */}
              <div
                className="absolute -top-2 left-1/2 h-5 w-14 -translate-x-1/2"
                style={{
                  background: "rgba(255, 234, 130, 0.7)",
                  transform: `translateX(-50%) rotate(${(i % 2 === 0 ? -2 : 2)}deg)`,
                  boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                }}
                aria-hidden
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.src}
                alt={f.name}
                className="h-[220px] w-full object-cover grayscale-[15%]"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-0 right-0 text-center">
                <div className="hand text-[1.3rem] leading-[1.1] text-ink">
                  {f.name}
                </div>
                <div className="hand text-[1rem] leading-[1.1] text-muted">
                  {f.meta}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
