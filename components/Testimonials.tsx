"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

const quotes = [
  {
    text:
      "Second week in. The nausea hit hard at 11pm and I was about to flush my pen. I messaged the coach not really expecting anything. Got a reply in four minutes - what was happening, what to eat, when it'd pass. I stayed on. Down 14 pounds now.",
    name: "Genevieve",
    meta: "Week 6 · Wegovy",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=160&h=160&fit=crop&crop=faces&q=80",
    rotate: -3.5,
    width: "300px",
    color: "#FFFFFF",
  },
  {
    text:
      "Week 8 the scale stopped moving. I was ready to call it. The meal plan shifted on its own - different macros, different timing around my dose. Two weeks later the weight came off again. That's the part no one else does.",
    name: "Tricia",
    meta: "Week 22 · Ozempic",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=faces&q=80",
    rotate: 2.5,
    width: "310px",
    color: "#CFE3FF",
  },
  {
    text:
      "Day 1 of my dose I can't even look at food. Day 5 I'm starving. Every other app gave me the same meal plan every day and it never matched what my body wanted. The cycle view here finally made my weeks make sense.",
    name: "Meagan",
    meta: "Week 14 · Mounjaro",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&h=160&fit=crop&crop=faces&q=80",
    rotate: -1.8,
    width: "320px",
    color: "#FFF5B0",
  },
  {
    text:
      "I've downloaded probably 12 fitness apps in my life. Quit every one. This is the first app I open before checking my phone in the morning. I can't fully explain why it stuck. It just did.",
    name: "Daniel",
    meta: "Month 4 · Mounjaro",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&h=160&fit=crop&crop=faces&q=80",
    rotate: 3.2,
    width: "300px",
    color: "#FFD4D4",
  },
];

function PushPin({ color = "#E74C3C" }: { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <circle cx="12" cy="10" r="7" fill={color} />
      <circle cx="10" cy="8" r="2.2" fill="rgba(255,255,255,0.5)" />
      <path d="M12 16 L12 22" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="wall" className="relative bg-bg-2 py-[110px]">
      <div className="container-x">
        <div className="mx-auto max-w-[640px] text-center">
          <span className="hand text-[1.4rem] text-accent">reviews section</span>
          <h2 className="mt-3">
            Why our users <span className="marker-hl">love us</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-muted">
            Messages, emails, App Store notes. Lightly trimmed for length, never for tone.
          </p>
        </div>
      </div>

      {/* Scroll container — full-width so cards aren't clipped by container-x padding */}
      <div className="relative mx-auto mt-16 max-w-[1200px]">
      <div
        className="flex items-start gap-5 overflow-x-auto pb-12 pt-4 pl-6 snap-x snap-mandatory scrollbar-hide md:flex-nowrap md:gap-8"
        style={{ overscrollBehaviorX: "contain" }}
      >
        {/* Right padding spacer on mobile — ensures last card isn't flush against edge */}
        {quotes.map((q, i) => (
          <motion.div
            key={q.name}
            initial={{ opacity: 0, y: 30, rotate: q.rotate - 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: q.rotate }}
            viewport={viewportOnce}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ rotate: 0, y: -6, zIndex: 20 }}
            className="relative flex-shrink-0 snap-start"
            style={{
              width: "75vw",
              maxWidth: 300,
              background: q.color,
              padding: "16px 18px 20px",
              boxShadow:
                "0 18px 36px -12px rgba(10,11,26,0.22), 0 4px 8px rgba(10,11,26,0.06)",
              borderRadius: "2px",
            }}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2">
              <PushPin color={i % 2 === 0 ? "#E74C3C" : "var(--primary-default)"} />
            </div>
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={q.photo}
                alt={q.name}
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover ring-2 ring-white"
              />
              <div>
                <div className="font-display text-[0.98rem] font-bold text-ink">
                  {q.name}
                </div>
                <div className="text-[0.78rem] text-muted-2">{q.meta}</div>
              </div>
            </div>
            <p
              className="mt-3 text-[0.98rem] leading-[1.5] text-ink/85"
              dangerouslySetInnerHTML={{ __html: q.text }}
            />
            <div className="mt-3 flex items-center gap-1.5 text-[0.78rem] text-muted-2">
              <span>★★★★★</span>
              <span>·</span>
              <span>verified</span>
            </div>
          </motion.div>
        ))}
        {/* End spacer so last card can scroll fully into view */}
        <div className="flex-shrink-0 w-6" aria-hidden />
      </div>
      </div>

      <div className="container-x">
        <p className="mt-14 text-center hand text-[1.2rem] text-muted">
          + 3,847 more on the App Store, 4.9 average. we read every single one.
        </p>
      </div>
    </section>
  );
}
