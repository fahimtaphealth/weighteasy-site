import { cn } from "@/lib/cn";

type Props = {
  inverted?: boolean;
  className?: string;
};

/**
 * WeightEasy wordmark — reproduced from the Figma asset
 * (10342:342588 in the WeightEasy paid file).
 *
 * Structure: heavy "we", scale-icon "i" (navy tilted pill + blue downward needle),
 * heavy "ght", light-weight "easy".
 */
export default function Logo({ inverted = false, className = "" }: Props) {
  const color = inverted ? "#fff" : "#172554";
  return (
    <a
      href="#"
      aria-label="WeightEasy home"
      className={cn(
        "inline-flex items-center font-display leading-none",
        className,
      )}
      style={{
        color,
        fontSize: "1.5rem",
        letterSpacing: "-0.045em",
      }}
    >
      <span style={{ fontWeight: 900 }}>we</span>
      <svg
        viewBox="0 0 30 44"
        aria-hidden="true"
        style={{
          height: "1.05em",
          width: "auto",
          margin: "0 0.02em",
          transform: "translateY(-0.04em)",
        }}
      >
        <rect
          x="4"
          y="1"
          width="22"
          height="9"
          rx="4.5"
          fill="currentColor"
          transform="rotate(-14 15 5.5)"
        />
        <polygon points="7.5,13 22.5,13 15,43" fill="#2563EB" />
      </svg>
      <span style={{ fontWeight: 900 }}>ght</span>
      <span style={{ fontWeight: 500, letterSpacing: "-0.04em" }}>easy</span>
    </a>
  );
}
