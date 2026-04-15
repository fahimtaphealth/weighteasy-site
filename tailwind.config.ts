import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F3F4F8",
        "bg-2": "#EEF0F6",
        paper: "#FFFFFF",
        ink: "#172554",
        "ink-2": "#0F1B3F",
        text: "#2B3150",
        muted: "#5E6378",
        "muted-2": "#8A8FA3",
        line: "#E5E7EE",
        "line-2": "#D8DBE6",
        accent: "#2563EB",
        "accent-soft": "#E6EEFF",
        "accent-line": "#C9D7FF",
        indigo: {
          DEFAULT: "#4F46E5",
          600: "#4338CA",
          soft: "#EEF0FF",
          line: "#C7CDFF",
        },
        teal: "#22C1C3",
        purple: "#A855F7",
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', '"Inter"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      backgroundImage: {
        "coach-grad":
          "linear-gradient(135deg,#22C1C3 0%,#4F46E5 55%,#A855F7 100%)",
        "cycle-header":
          "linear-gradient(160deg,#0E3B3D 0%,#0A2E35 60%,#081E2A 100%)",
        "coach-orb":
          "radial-gradient(circle at 30% 30%, #9FE4E5 0%, #4F46E5 55%, #A855F7 100%)",
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
