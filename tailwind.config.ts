import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Surface ── */
        bg: "var(--surface-default)",
        "bg-2": "var(--interaction-hover)",
        paper: "var(--surface-container)",

        /* ── Content ── */
        ink: "var(--content-primary)",
        "ink-2": "var(--content-on-surface)",
        text: "var(--content-on-surface)",
        muted: "var(--content-secondary)",
        "muted-2": "var(--content-tertiary)",

        /* ── Border ── */
        line: "var(--border-default)",
        "line-2": "var(--border-strong)",

        /* ── Primary (brand/blue) ── */
        accent: "var(--primary-default)",
        "accent-soft": "var(--interaction-selected-subtle)",
        "accent-line": "var(--interaction-selected)",

        /* ── Indigo → Tertiary (purple) ── */
        indigo: {
          DEFAULT: "var(--tertiary-default)",
          600: "var(--color-purple-600)",
          soft: "var(--tertiary-container)",
          line: "var(--color-purple-400)",
        },

        /* ── Secondary (teal) ── */
        teal: "var(--secondary-default)",

        /* ── Tertiary (purple) ── */
        purple: "var(--color-purple-500)",
      },
      fontFamily: {
        display: ['"Google Sans Display"', '"Google Sans"', "system-ui", "sans-serif"],
        sans: ['"Google Sans"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      backgroundImage: {
        "coach-grad":
          "linear-gradient(135deg, var(--color-teal-400) 0%, var(--tertiary-default) 55%, var(--color-purple-500) 100%)",
        "cycle-header":
          "linear-gradient(160deg, #0E3B3D 0%, #0A2E35 60%, #081E2A 100%)",
        "coach-orb":
          "radial-gradient(circle at 30% 30%, var(--color-teal-300) 0%, var(--tertiary-default) 55%, var(--color-purple-500) 100%)",
      },
      boxShadow: {
        "sm-soft": "0 1px 2px rgba(10,11,26,.04), 0 1px 3px rgba(10,11,26,.03)",
        "md-soft": "0 4px 16px -4px rgba(10,11,26,.10), 0 2px 6px rgba(10,11,26,.04)",
        "lg-soft": "0 24px 48px -16px rgba(10,11,26,.20), 0 6px 14px rgba(10,11,26,.06)",
        "xl-soft": "0 40px 80px -24px rgba(10,11,26,.28), 0 10px 20px rgba(10,11,26,.08)",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", filter: "brightness(1)" },
          "50%": { transform: "scale(1.04)", filter: "brightness(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "orbit-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        breathe: "breathe 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "orbit-slow": "orbit-slow 18s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
