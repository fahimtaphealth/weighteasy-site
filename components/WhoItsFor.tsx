"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

/* Figma asset URLs (refreshed 2026-05-12) */
const imgLaura = "https://www.figma.com/api/mcp/asset/79238123-b69b-4f8e-936f-18ffaa30393c";
const imgJames = "https://www.figma.com/api/mcp/asset/755fd6ed-adcd-44ea-85db-9a9bafb172be";
const imgMarcus = "https://www.figma.com/api/mcp/asset/9ec09c16-a55f-4ebb-85d7-7d874113261b";
const imgMerke = "https://www.figma.com/api/mcp/asset/8c49e1f9-776b-4763-831c-2bf53b6cd118";

const types = [
  {
    photo: imgLaura,
    name: "Laura, 3 days",
    title: "Just prescribed",
    body:
      "You got the script. You left the office with questions. We’ll walk you through week one, hour by hour if you need it.",
  },
  {
    photo: imgJames,
    name: "James, 3 wk",
    title: "Ramping up doses",
    body:
      "Every titration changes your appetite, your energy, your sleep. We'll adjust your plan at every step, not every quarter.",
  },
  {
    photo: imgMarcus,
    name: "Marcus, 11 mo",
    title: "Hit a plateau",
    body:
      "Plateaus are expected, not a failure. Our coach reads your data and suggests the smallest change that tends to work.",
  },
  {
    photo: imgMerke,
    name: "Merke, 14 mo",
    title: "Coming off GLP-1",
    body:
      "The hardest part: protecting your progress after the medication. We have a 12-week transition plan for exactly this.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-bg py-[110px]">
      <div className="container-x">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="mt-3">
            <span className="marker-hl">Built for everyone</span><br />
            <span className="marker-hl">on GLP-1.</span>
          </h2>
          <p className="mt-4 text-muted">
            Week one looks nothing like month six. Your app shouldn&rsquo;t
            either.
          </p>
        </div>

        <motion.div
          variants={stagger(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {types.map((t) => (
            <motion.div
              key={t.title}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group overflow-hidden rounded-[20px] border border-line bg-white"
            >
              <div className="relative aspect-[5/6] overflow-hidden bg-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-full w-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 hand text-[1rem] text-ink">
                  {t.name}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[1.05rem]">{t.title}</h3>
                <p className="mt-2 text-[0.92rem] text-muted">{t.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
