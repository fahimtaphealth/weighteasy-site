"use client";

import { motion } from "framer-motion";
import SectionHead from "./SectionHead";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/cn";

const features = [
  "AI coach trained on GLP-1",
  "Cycle-aware meal plans",
  "Dose, symptom, food & fitness tracking",
  "Weekly progress reviews",
  "7-day free trial",
  "90-day money-back guarantee",
];

const plans = [
  {
    name: "Monthly",
    price: "$9.99",
    period: "/ month",
    note: "Billed monthly. Cancel anytime.",
    badge: null,
    highlight: false,
    oldPrice: null,
    cta: "Start now",
  },
  {
    name: "Yearly",
    price: "$49.99",
    period: "/ year",
    note: "That\u2019s $4.17 / month. Best value.",
    badge: "59% off",
    highlight: true,
    oldPrice: "$120",
    cta: "Start 7-day free trial",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-bg py-[100px]">
      <div className="container-x">
        <SectionHead
          eyebrow="Simple pricing"
          title={
            <>
              Choose a plan. <span className="text-accent">Start your free trial.</span>
            </>
          }
          body="Both plans include everything. No upsells, no ads, no sharing your data."
        />

        <motion.div
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-12 grid max-w-[880px] gap-5 md:grid-cols-2"
        >
          {plans.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className={cn(
                "relative rounded-[24px] border bg-white p-9",
                p.highlight
                  ? "border-2 border-indigo shadow-[0_8px_32px_-12px_rgba(79,70,229,0.25)]"
                  : "border-line",
              )}
            >
              {p.badge && (
                <motion.span
                  initial={{ scale: 0, rotate: -8 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={viewportOnce}
                  transition={{ type: "spring", stiffness: 380, damping: 18, delay: 0.3 }}
                  className="absolute -top-3 right-6 rounded-full bg-indigo px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.05em] text-white"
                >
                  {p.badge}
                </motion.span>
              )}
              <h3 className="text-[1.1rem]">{p.name}</h3>
              <div className="mt-3.5 font-display text-[3rem] font-extrabold tracking-[-0.04em] text-ink">
                {p.oldPrice && (
                  <span className="mr-2 text-[1.4rem] font-medium text-muted line-through">{p.oldPrice}</span>
                )}
                {p.price}
                <small className="ml-0.5 text-[0.95rem] font-medium text-muted">{p.period}</small>
              </div>
              <p className="mt-2 text-[0.9rem]">{p.note}</p>
              <ul className="mt-5 mb-7 flex flex-col gap-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.95rem] text-text">
                    <span
                      className="mt-1.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full"
                      style={{ background: "#EEF0FF" }}
                    >
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M4 8.5l2.5 2.5L12 5.5"
                          stroke="var(--primary-default)"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={cn("btn w-full", p.highlight ? "btn-primary" : "btn-light")}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
