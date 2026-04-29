"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

/**
 * Shared AI Coach orb component — renders the Lottie ai-avatar animation.
 * Falls back to the purple gradient circle if Lottie data fails to load.
 */
export default function CoachOrb({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch("/ai-avatar-sentient.json")
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => {});
  }, []);

  if (!animationData) {
    // Fallback purple orb
    return (
      <span
        className={`block flex-shrink-0 rounded-full bg-coach-orb ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <span
      className={`block flex-shrink-0 overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      <Lottie
        animationData={animationData}
        loop
        autoplay
        style={{ width: size, height: size }}
      />
    </span>
  );
}
