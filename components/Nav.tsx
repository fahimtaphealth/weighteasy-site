"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-line backdrop-blur-md"
      style={{ background: "rgba(243,244,248,0.82)" }}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />
        <div className="hidden items-center gap-7 md:flex">
          <a className="text-[0.92rem] font-medium text-muted hover:text-ink transition" href="#story">The story</a>
          <a className="text-[0.92rem] font-medium text-muted hover:text-ink transition" href="#wall">Wall of love</a>
          <a className="text-[0.92rem] font-medium text-muted hover:text-ink transition" href="#features">What&rsquo;s inside</a>
          <a className="text-[0.92rem] font-medium text-muted hover:text-ink transition" href="#pricing">Pricing</a>
          <a className="text-[0.92rem] font-medium text-muted hover:text-ink transition" href="#faq">Questions</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="btn btn-primary">Try it free</a>
        </div>
      </div>
    </motion.nav>
  );
}
