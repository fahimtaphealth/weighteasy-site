"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

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
          <span className="hand text-[1.4rem]" style={{ color: "#9FE4E5" }}>
            the 11pm friend
          </span>
          <h2 className="mt-3 !text-white">
            Trained on GLP-1 pharmacokinetics.
            <br />
            <span style={{ color: "#9FE4E5" }}>Answers like a person.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-white/70">
            Knows what dose you&rsquo;re on. Knows what day of your cycle it is.
            Won&rsquo;t tell you to &ldquo;consult your physician&rdquo; when
            you&rsquo;re on the bathroom floor.
          </p>
        </div>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative flex flex-col items-center gap-8">
            {/* candid photo — someone on their phone at night */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={viewportOnce}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[18px]"
              style={{
                width: "320px",
                height: "380px",
                boxShadow: "0 30px 60px -20px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.2)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=640&h=760&fit=crop&q=80"
                alt="Meagan texting the coach at 11pm"
                className="h-full w-full object-cover"
                style={{ filter: "brightness(0.85) contrast(1.05)" }}
              />
              {/* glow overlay to tie to the orb aesthetic */}
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 70% 60%, rgba(159,228,229,0.22) 0%, transparent 55%)",
                }}
              />
              {/* timestamp caption */}
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1.5 hand text-[1rem] text-ink">
                Meagan &middot; 11:47pm, Wednesday
              </div>
              {/* glowing orb dot in corner */}
              <motion.div
                className="absolute right-4 top-4 h-3 w-3 rounded-full bg-coach-orb"
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* small orb + status line */}
            <div className="flex items-center gap-3 text-white/70">
              <motion.span
                className="h-7 w-7 rounded-full bg-coach-orb"
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ boxShadow: "0 6px 16px rgba(79,70,229,0.5)" }}
              />
              <span className="hand text-[1.15rem]">online. always.</span>
            </div>
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
