"use client";

import { useEffect, useRef, useState } from "react";

export default function RouteMap() {
  const ref = useRef<SVGSVGElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 360"
      preserveAspectRatio="xMidYMid meet"
      className={`w-full h-auto ${inView ? "in-view" : ""}`}
      role="img"
      aria-label="Mapa ilustrado del trayecto de Catalunya a París"
    >
      <defs>
        <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8a6a2c" />
          <stop offset="50%" stopColor="#f5dfa8" />
          <stop offset="100%" stopColor="#c9a25a" />
        </linearGradient>
        <radialGradient id="routeBg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="rgba(11,28,58,0.04)" />
          <stop offset="100%" stopColor="rgba(11,28,58,0)" />
        </radialGradient>
      </defs>

      {/* Soft background tint */}
      <rect
        x="0"
        y="0"
        width="1200"
        height="360"
        fill="url(#routeBg)"
      />

      {/* Decorative scattered dots */}
      <g fill="#c9a25a" opacity="0.35">
        <circle cx="180" cy="40" r="1.4" />
        <circle cx="320" cy="110" r="1" />
        <circle cx="540" cy="60" r="1.2" />
        <circle cx="780" cy="50" r="1" />
        <circle cx="960" cy="40" r="1.4" />
        <circle cx="1100" cy="180" r="1" />
        <circle cx="60" cy="200" r="1.2" />
      </g>

      {/* Origin: Catalunya — mountains + sun */}
      <g transform="translate(60 240)">
        <circle cx="50" cy="-22" r="14" fill="#e3c587" opacity="0.85" />
        <line x1="50" y1="-46" x2="50" y2="-52" stroke="#c9a25a" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="74" y1="-22" x2="80" y2="-22" stroke="#c9a25a" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="26" y1="-22" x2="20" y2="-22" stroke="#c9a25a" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="34" y1="-40" x2="30" y2="-44" stroke="#c9a25a" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="66" y1="-40" x2="70" y2="-44" stroke="#c9a25a" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M 0 50 L 30 10 L 56 40 L 80 0 L 110 36 L 140 16 L 160 50 Z" fill="#0b1c3a" opacity="0.85" />
        <path d="M 22 18 L 30 10 L 38 18 Z" fill="#fff" opacity="0.6" />
        <path d="M 72 8 L 80 0 L 88 8 Z" fill="#fff" opacity="0.6" />
        <text
          x="80"
          y="80"
          textAnchor="middle"
          fontSize="14"
          fontFamily="var(--font-playfair, Georgia), serif"
          fontStyle="italic"
          fill="#0b1c3a"
        >
          Catalunya
        </text>
      </g>

      {/* Pyrenees label icon along route */}
      <g transform="translate(280 196)" opacity="0.85">
        <path
          d="M 0 32 L 20 8 L 36 24 L 52 0 L 68 22 L 88 32 Z"
          fill="#0b1c3a"
        />
        <path d="M 14 14 L 20 8 L 26 14 Z" fill="#fff" opacity="0.6" />
        <path d="M 44 8 L 52 0 L 60 8 Z" fill="#fff" opacity="0.6" />
        <text
          x="44"
          y="50"
          textAnchor="middle"
          fontSize="11"
          fontFamily="var(--font-inter, system-ui), sans-serif"
          fill="#16315e"
          opacity="0.7"
        >
          Pirineos
        </text>
      </g>

      {/* Mid-route castle */}
      <g transform="translate(820 92)" opacity="0.95">
        <polygon points="20,-2 21,2 25,2.4 22,5 23,9 20,7 17,9 18,5 15,2.4 19,2" fill="#c9a25a" />
        <rect x="14" y="14" width="12" height="22" fill="#0b1c3a" />
        <polygon points="14,14 26,14 20,4" fill="#0b1c3a" />
        <rect x="4" y="22" width="10" height="14" fill="#0b1c3a" />
        <polygon points="4,22 14,22 9,14" fill="#0b1c3a" />
        <rect x="26" y="22" width="10" height="14" fill="#0b1c3a" />
        <polygon points="26,22 36,22 31,14" fill="#0b1c3a" />
        <rect x="0" y="34" width="40" height="8" fill="#0b1c3a" />
        <text
          x="20"
          y="58"
          textAnchor="middle"
          fontSize="11"
          fontFamily="var(--font-inter, system-ui), sans-serif"
          fill="#16315e"
          opacity="0.7"
        >
          Disney
        </text>
      </g>

      {/* Destination: Paris — Eiffel */}
      <g transform="translate(1010 60)">
        <path
          d="M 18 78 L 22 56 L 26 32 L 36 8 L 46 32 L 50 56 L 54 78"
          fill="none"
          stroke="#0b1c3a"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line x1="36" y1="8" x2="36" y2="2" stroke="#0b1c3a" strokeWidth="2" strokeLinecap="round" />
        <line x1="22" y1="56" x2="50" y2="56" stroke="#0b1c3a" strokeWidth="1.6" />
        <line x1="26" y1="32" x2="46" y2="32" stroke="#0b1c3a" strokeWidth="1.6" />
        <path d="M 18 78 Q 36 70 54 78" stroke="#0b1c3a" strokeWidth="1.6" fill="none" strokeLinecap="round" />
        <circle cx="62" cy="14" r="2" fill="#e3c587" />
        <text
          x="36"
          y="100"
          textAnchor="middle"
          fontSize="14"
          fontFamily="var(--font-playfair, Georgia), serif"
          fontStyle="italic"
          fill="#0b1c3a"
        >
          París
        </text>
      </g>

      {/* The route line — animated */}
      <path
        d="M 130 260 C 220 240, 280 210, 360 220 C 460 232, 540 200, 640 188 C 740 176, 820 140, 900 124 C 980 108, 1010 96, 1060 80"
        fill="none"
        stroke="url(#routeGrad)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeDasharray="10 8"
        className="route-line"
      />

      {/* Car icon halfway along the path */}
      <g transform="translate(580 184)">
        <path
          d="M -16 6 L -14 0 Q -12 -2 -10 -2 L 10 -2 Q 12 -2 14 0 L 16 6"
          fill="none"
          stroke="#0b1c3a"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M -8 -2 L -6 -8 L 8 -8 L 12 -2"
          fill="none"
          stroke="#0b1c3a"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="-8" cy="6" r="2.6" fill="none" stroke="#0b1c3a" strokeWidth="1.4" />
        <circle cx="10" cy="6" r="2.6" fill="none" stroke="#0b1c3a" strokeWidth="1.4" />
        <circle cx="0" cy="-14" r="1.4" fill="#c9a25a" />
      </g>

      {/* Stops along the route — appear after line draws */}
      <circle className="route-stop" cx="220" cy="244" r="4" fill="#f5dfa8" stroke="#8a6a2c" strokeWidth="1.4" />
      <circle className="route-stop" cx="420" cy="226" r="4" fill="#f5dfa8" stroke="#8a6a2c" strokeWidth="1.4" />
      <circle className="route-stop" cx="700" cy="178" r="4" fill="#f5dfa8" stroke="#8a6a2c" strokeWidth="1.4" />
      <circle className="route-stop" cx="880" cy="130" r="4" fill="#f5dfa8" stroke="#8a6a2c" strokeWidth="1.4" />
      <circle className="route-stop" cx="980" cy="104" r="4" fill="#f5dfa8" stroke="#8a6a2c" strokeWidth="1.4" />
    </svg>
  );
}
