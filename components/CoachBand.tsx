"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import CoachOrb from "./CoachOrb";

const messages = [
  { who: "user", text: "ok it\u2019s 11pm and i threw up twice. should i be worried" },
  {
    who: "bot",
    text:
      "That sounds rough. Day 4 nausea like this is within normal range for your 5mg dose \u2014 but twice in one night is the upper edge. Sip ginger tea, skip dinner, text me at 7am. If you vomit again tonight, call your prescriber.",
  },
  { who: "user", text: "okay. thank you. i really thought i was dying lol" },
  {
    who: "bot",
    text:
      "You\u2019re not. You\u2019re on Day 4. Also \u2014 72% of people on your dose feel exactly this at this point. You\u2019re not broken, you\u2019re just in Zone B.",
  },
];

export default function CoachBand() {
  return (
    <section className="relative overflow-hidden bg-ink text-white py-[100px]">
      <div className="container-x relative">
        <div className="mx-auto max-w-[760px] text-center">
          <span className="eyebrow !text-teal-300 !border-teal-300/30 !bg-teal-300/10">
            The 11 PM Friend
          </span>
          <h2 className="mt-3 !text-white">
            AI-powered Coach.
            <br />
            <span className="text-[#c4b5fd]">Trained on GLP-1.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-white/70">
            Knows what dose you&rsquo;re on. Knows what day of your cycle it is.
            Won&rsquo;t tell you to &ldquo;consult your physician&rdquo; when
            you&rsquo;re on the bathroom floor.
          </p>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative flex items-center justify-center">
            <motion.div
              className="relative"
              style={{
                width: 240,
                height: 240,
                boxShadow:
                  "0 30px 80px rgba(79,70,229,.45), inset 0 -10px 40px rgba(255,255,255,.2)",
                borderRadius: "50%",
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <CoachOrb size={240} />
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
                  <span className="absolute left-[14px] top-[14px]">
                    <CoachOrb size={28} />
                  </span>
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
