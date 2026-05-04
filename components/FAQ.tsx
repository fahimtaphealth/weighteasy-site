"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

const faqs = [
  {
    q: "What is a GLP-1 medication?",
    a: "GLP-1 medications (like Ozempic, Wegovy, Mounjaro, and Zepbound) are prescription drugs that help regulate appetite and blood sugar. They work by mimicking a hormone your body naturally produces, helping you feel full longer and reducing cravings.",
  },
  {
    q: "What does WeightEasy do?",
    a: "WeightEasy is a companion app for people on GLP-1 medications. It tracks your dose cycle, adjusts your meals and fitness to match how your body feels each day, manages side effects with real remedies, and gives you an AI coach available any time.",
  },
  {
    q: "Do I need a prescription to use WeightEasy?",
    a: "Yes. WeightEasy is designed to work alongside a GLP-1 medication you already have prescribed. We don't prescribe or sell medication.",
  },
  {
    q: "What side effects can I expect on GLP-1?",
    a: "Common side effects include nausea, fatigue, constipation, and reduced appetite - especially in the first few weeks or after a dose increase. Most people find these manageable over time. WeightEasy helps you track and manage them day by day.",
  },
  {
    q: "How does the meal plan work?",
    a: "Your meal plan shifts based on where you are in your dose cycle. On dose days when appetite is low, we suggest lighter meals. On your best days, we push protein and variety. The plan adapts automatically as your body changes.",
  },
  {
    q: "How does the free trial work?",
    a: "You get 7 days of full access to every feature. Cancel anytime, no charge. After that, it's $9.99/month or $49.99/year. If you try it for 90 days and it's not for you, we refund you - no questions.",
  },
  {
    q: "Is my health data private?",
    a: "Yes. We don't sell or share individual-level health data. All data is encrypted, and any aggregated research uses are opt-in only.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeUp} className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-5 text-left"
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
