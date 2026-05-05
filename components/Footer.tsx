import Logo from "./Logo";

export default function Footer() {
  return (
    <footer
      className="border-t text-[0.88rem] text-white/60"
      style={{
        background: "var(--surface-inverse)",
        borderColor: "rgba(255,255,255,0.06)",
        paddingTop: 60,
        paddingBottom: 30,
      }}
    >
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-5">
              <Logo inverted />
            </div>
            <p className="max-w-[320px] leading-[1.6] text-white/60">
              Your GLP-1 Companion. An AI coach, cycle-aware nutrition, and everything else your journey needs - in one app.
            </p>
          </div>
          <FooterCol title="Product" links={[
            { label: "How it works", href: "#story" },
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
          ]} />
          <FooterCol title="Company" links={[
            { label: "About", href: "#" },
          ]} />
          <FooterCol title="Support" links={[
            { label: "FAQ", href: "#faq" },
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Contact", href: "mailto:help@weighteasy.app" },
          ]} />
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[0.8rem] text-white/55">
          <span>© 2026 WeightEasy, Inc. All rights reserved.</span>
          <span>Made for the GLP-1 journey. Backed by science, shaped by the people living it.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 font-display text-[0.74rem] font-bold uppercase tracking-[0.14em] text-white">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a className="transition hover:text-white" href={l.href}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
