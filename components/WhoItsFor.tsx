"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

/* Figma asset URLs (valid for 7 days) */
const imgLaura = "https://www.figma.com/api/mcp/asset/b0098088-ae25-4692-9e28-42e953df7ade";
const imgJames = "https://www.figma.com/api/mcp/asset/6d5acd97-caa4-4fc5-a5f9-e05d8f5f88ab";
const imgMarcus = "https://www.figma.com/api/mcp/asset/4317774c-08ae-4718-88dd-2000429184bc";
const imgMerke = "https://www.figma.com/api/mcp/asset/22849128-7573-47e2-8030-1386f8e9e42c";

const types = [
  {
    photo: imgLaura,
    name: "Laura, 3 days",
    title: "Just prescribed",
    body:
      "I got the script and left with a hundred questions. WeightEasy walked me through week one hour by hour. I didn’t feel alone once.",
  },
  {
    photo: imgJames,
    name: "James, 3 wk",
    title: "Ramping up doses",
    body:
      "Every time my dose went up, my appetite and energy shifted completely. The app adjusted my plan each time before I even had to ask.",
  },
  {
    photo: imgMarcus,
    name: "Marcus, 11 mo",
    title: "Hit a plateau",
    body:
      "My weight didn’t move for 9 days and I almost quit. The coach showed me one small change and the scale started moving again within a week.",
  },
  {
    photo: imgMerke,
    name: "Merke, 14 mo",
    title: "Coming off GLP-1",
    body:
      "Coming off the medication was the scariest part. The 12-week transition plan kept me on track. I’ve kept the weight off for 3 months now.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="bg-bg py-[110px]">
      <div className="container-x">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="mt-3">
            WeightEasy is <span className="marker-hl">built for everybody on GLP-1.</span>
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
