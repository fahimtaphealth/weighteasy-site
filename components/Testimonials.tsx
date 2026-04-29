"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

const quotes = [
  {
    text:
      "The coach talked me off a ledge the night my dose made me nauseous. Honestly the reason I didn&rsquo;t quit.",
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
      "I&rsquo;m on the lowest dose and losing steadily. The meal plans adjusted when I plateaued. That&rsquo;s the part no one else does.",
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
      "It&rsquo;s the first thing that treats me like I&rsquo;m running a system, not just restricting calories. The cycle view finally made my weeks make sense.",
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
      "I&rsquo;ve never finished an app before. This one I open before I open my phone in the morning. That&rsquo;s wild to me.",
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
    <section id="wall" className="relative overflow-hidden bg-bg-2 py-[110px]">
      <div className="container-x">
        <div className="mx-auto max-w-[640px] text-center">
          <span className="hand text-[1.4rem] text-accent">what people say when we&rsquo;re not listening</span>
          <h2 className="mt-3">
            Reviews we <span className="marker-hl">didn&rsquo;t write.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-muted">
            Messages, emails, App Store notes. Lightly trimmed for length, never for tone.
          </p>
        </div>

        {/* asymmetric pinboard — single row */}
        <div className="relative mx-auto mt-16 flex max-w-[1280px] flex-nowrap items-start justify-center gap-8">
          {quotes.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 30, rotate: q.rotate - 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: q.rotate }}
              viewport={viewportOnce}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ rotate: 0, y: -6, zIndex: 20 }}
              className="relative"
              style={{
                flex: "1 1 0",
                minWidth: 240,
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
        </div>

        <p className="mt-14 text-center hand text-[1.2rem] text-muted">
          + 3,847 more on the App Store, 4.9 average. we read every single one.
        </p>
      </div>
    </section>
  );
}
