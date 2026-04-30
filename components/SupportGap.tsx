"use client";

import { motion } from "framer-motion";
import { stagger, fadeUp, viewportOnce } from "@/lib/motion";

const items = [
  {
    q: "\u201cThey prescribed it without explaining why I was on such a low dose.\u201d",
    a: "A 15-minute telehealth call, a prescription, then silence. When the nausea hit on day four, the portal took 72 hours to reply. She figured it out alone.",
    label: "the hand-off",
    who: "Meagan, Austin",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces&q=80",
  },
  {
    q: "\u201cI had no idea if what I was feeling was normal.\u201d",
    a: "Is this the dose wearing off or am I getting sick? Should I skip tomorrow&rsquo;s shot? He spent two hours on Reddit at 1am. We&rsquo;ve all done this.",
    label: "the 1am google",
    who: "Brian, Cleveland",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces&q=80",
  },
  {
    q: "\u201cNothing I was eating made sense for how my body felt.\u201d",
    a: "The meal plan said &ldquo;grilled chicken and rice&rdquo; on dose day. She couldn&rsquo;t look at food for six hours. Generic plans ignore that your body runs on a cycle.",
    label: "the food problem",
    who: "Tricia, Portland",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=faces&q=80",
  },
];

export default function SupportGap() {
  return (
    <section className="bg-bg py-[100px]">
      <div className="container-x">
        <div className="mx-auto max-w-[760px]">
          <span className="eyebrow">The Problem</span>
          <h2 className="mt-3">
            Filling the gap{" "}
            <span className="text-accent">between</span> your
            doctor visits
          </h2>
          <p className="mt-5 max-w-[600px] text-muted">
            We sat down with many people on GLP-1s. No scripts, no leading
            questions, no &ldquo;what features would you want.&rdquo; Just:
            &ldquo;how&rsquo;s it going?&rdquo; Three things came up in every
            conversation.
          </p>
        </div>

        <motion.div
          variants={stagger(0.1, 0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {items.map((item, i) => (
            <motion.article
              key={item.label}
              variants={fadeUp}
              whileHover={{ y: -4, rotate: i === 1 ? 1 : -1, transition: { duration: 0.3 } }}
              className="relative rounded-[4px] bg-white p-8"
              style={{
                transform: `rotate(${i === 1 ? "1deg" : i === 0 ? "-0.8deg" : "0.6deg"})`,
                boxShadow: "0 18px 36px -14px rgba(10,11,26,0.18), 0 3px 6px rgba(10,11,26,0.04)",
              }}
            >
              <span className="hand text-[1.1rem] text-accent">{item.label}</span>
              <div className="mt-3 font-display text-[1.15rem] font-bold tracking-[-0.01em] leading-[1.35] text-ink">
                {item.q}
              </div>
              <p
                className="mt-4 text-[0.96rem] leading-[1.55]"
                dangerouslySetInnerHTML={{ __html: item.a }}
              />
              <div className="mt-6 flex items-center gap-3 border-t border-line pt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.photo}
                  alt={item.who}
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow-sm-soft"
                />
                <div className="hand text-[1.1rem] text-muted-2">{item.who}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
