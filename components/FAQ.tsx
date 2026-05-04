"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const faqs = [
  {
    q: "Do I need a prescription to use WeightEasy?",
    a: "Yes - WeightEasy is a companion app designed to work alongside a GLP-1 medication you already have prescribed (Ozempic, Wegovy, Mounjaro, Zepbound, Rybelsus, Trulicity, compounded semaglutide/tirzepatide, and more). We don't prescribe or sell medication.",
  },
  {
    q: "How is this different from MyFitnessPal or Noom?",
    a: "Those apps assume a steady-state metabolism. GLP-1 creates a cycle - appetite, energy, and nausea shift day to day. WeightEasy is the only plan we know of that moves with you.",
  },
  {
    q: "What if my side effects are serious?",
    a: "Always talk to your prescriber about serious side effects. WeightEasy is not a replacement for medical care - we're the in-between companion that helps you understand what's normal and when to call.",
  },
  {
    q: "How does the free trial work?",
    a: "You get 7 days of full access to every feature. Cancel anytime, no charge. After that, it's $9.99/month or $49.99/year. If you try it for 90 days and it's not for you, we refund you - no questions.",
  },
  {
    q: "Do you share my data?",
    a: "No. We don't sell or share individual-level health data. Aggregated, anonymized research uses are opt-in only.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="border-b border-line py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-display text-[1.08rem] font-bold text-ink">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full"
        >
          <svg width="12" height="12" viewBox="0 0 20 20" fill="none" stroke="var(--primary-default)" strokeWidth="2.4" strokeLinecap="round">
            <path d="M10 4v12M4 10h12" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pt-3 text-[0.98rem]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-[100px]">
      <div className="container-x">
        <SectionHead eyebrow="FAQ" title="Every question we hear." />
        <motion.div
          variants={stagger(0.05, 0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-[820px]"
        >
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
