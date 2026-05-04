"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li";
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style: CSSProperties = delay ? { transitionDelay: `${delay}ms` } : {};
  const cls = `reveal ${visible ? "is-visible" : ""} ${className}`;

  if (as === "section") {
    return (
      <section ref={ref as React.RefObject<HTMLElement>} className={cls} style={style}>
        {children}
      </section>
    );
  }
  if (as === "li") {
    return (
      <li ref={ref as React.RefObject<HTMLLIElement>} className={cls} style={style}>
        {children}
      </li>
    );
  }
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={cls} style={style}>
      {children}
    </div>
  );
}
