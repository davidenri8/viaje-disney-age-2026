"use client";

import { useEffect, useRef } from "react";

export default function HeroParallax({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        const max = window.innerHeight;
        if (y > max) return;
        el.style.setProperty("--stars-y", `${y * 0.45}px`);
        el.style.setProperty("--castle-y", `${y * 0.25}px`);
        el.style.setProperty("--road-y", `${y * 0.08}px`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={ref} className="absolute inset-0">
      {children}
    </div>
  );
}
