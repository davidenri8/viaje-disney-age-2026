"use client";

import { useEffect } from "react";

export default function MagicCursor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - last < 90) return;
      last = now;

      const star = document.createElement("span");
      star.className = "magic-spark";
      star.style.left = `${e.clientX}px`;
      star.style.top = `${e.clientY}px`;
      const dx = (Math.random() * 28 - 14).toFixed(1);
      const dy = (Math.random() * -28 - 4).toFixed(1);
      star.style.setProperty("--dx", `${dx}px`);
      star.style.setProperty("--dy", `${dy}px`);
      const size = 4 + Math.random() * 4;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.marginLeft = `${-size / 2}px`;
      star.style.marginTop = `${-size / 2}px`;
      document.body.appendChild(star);

      window.setTimeout(() => star.remove(), 900);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return null;
}
