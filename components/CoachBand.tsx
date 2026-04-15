"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const messages = [
  { who: "user", text: "Day 4 and still nauseous after dinner. Normal?" },
  {
    who: "bot",
    text:
      "You're in Zone B — your stomach is still recovering from Monday's dose. Try an earlier dinner (before 7pm) and keep portions small. This usually resolves by Day 5.",
  },
  { who: "user", text: "Can I have the grain bowl tomorrow?" },
  {
    who: "bot",
    text:
      "Yes — tomorrow's Day 5, your best protein day this cycle. The grain bowl with salmon is perfect. I'll save it to your plan.",
  },
];

export default function CoachBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-white py-[100px]">
      <div className="container-x relative">
        <SectionHead
          dark
          eyebrow="Meet your coach"
          title={
            <>
              A coach that <span style={{ color: "#9FE4E5" }}>actually knows your cycle.</span>
            </>
          }
          body="Not a generic chatbot. An AI trained on GLP-1 pharmacokinetics that knows what day of your cycle you're on — and tailors every answer accordingly."
        />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative flex items-center justify-center">
            <motion.div
              className="relative h-[220px] w-[220px] rounded-full bg-coach-orb"
              style={{
                boxShadow:
                  "0 30px 80px rgba(79,70,229,.45), inset 0 -10px 40px rgba(255,255,255,.2)",
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle at 40% 40%, rgba(255,255,255,.5), transparent 60%)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            {/* Orbital dots */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <span className="absolute left-1/2 top-4 h-2 w-2 -translate-x-1/2 rounded-full bg-teal" />
              <span
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-purple"
                style={{ transform: "translate(90px, 120px)" }}
              />
            </motion.div>
          </div>

          <motion.div
            variants={stagger(0.2, 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="flex flex-col gap-3"
          >
            {messages.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={
                  m.who === "bot"
                    ? "relative max-w-[500px] rounded-2xl bg-white/10 p-4 pl-[54px] text-white"
                    : "ml-auto max-w-[400px] rounded-2xl bg-white/14 p-4 text-white"
                }
                style={{
                  background:
                    m.who === "user"
                      ? "rgba(255,255,255,.14)"
                      : "rgba(255,255,255,.08)",
                }}
              >
                {m.who === "bot" && (
                  <motion.span
                    className="absolute left-[14px] top-[14px] h-7 w-7 rounded-full bg-coach-orb"
                    style={{ boxShadow: "0 3px 8px rgba(79,70,229,.5)" }}
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                )}
                {m.text}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
