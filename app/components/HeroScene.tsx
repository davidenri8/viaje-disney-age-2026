import HeroParallax from "./HeroParallax";

type Star = {
  cx: number;
  cy: number;
  r: number;
  op: number;
  twinkle?: boolean;
  dur?: number;
  delay?: number;
};

const stars: Star[] = [
  { cx: 60, cy: 70, r: 1.2, op: 0.85, twinkle: true, dur: 3.2, delay: 0 },
  { cx: 120, cy: 130, r: 0.8, op: 0.6 },
  { cx: 180, cy: 50, r: 1, op: 0.7, twinkle: true, dur: 2.6, delay: 0.6 },
  { cx: 240, cy: 200, r: 1.4, op: 0.9, twinkle: true, dur: 3.6, delay: 1.2 },
  { cx: 300, cy: 90, r: 0.7, op: 0.55 },
  { cx: 360, cy: 160, r: 1, op: 0.7, twinkle: true, dur: 2.8, delay: 0.4 },
  { cx: 420, cy: 60, r: 1.1, op: 0.8 },
  { cx: 480, cy: 220, r: 0.9, op: 0.6, twinkle: true, dur: 3.4, delay: 0.8 },
  { cx: 540, cy: 110, r: 1.3, op: 0.85, twinkle: true, dur: 4, delay: 0.2 },
  { cx: 620, cy: 50, r: 0.8, op: 0.65 },
  { cx: 680, cy: 180, r: 1, op: 0.7, twinkle: true, dur: 2.4, delay: 1 },
  { cx: 740, cy: 90, r: 1.2, op: 0.8 },
  { cx: 820, cy: 40, r: 0.9, op: 0.55, twinkle: true, dur: 3, delay: 0.5 },
  { cx: 880, cy: 150, r: 1.4, op: 0.95, twinkle: true, dur: 3.8, delay: 1.5 },
  { cx: 940, cy: 70, r: 0.7, op: 0.6 },
  { cx: 1000, cy: 200, r: 1.1, op: 0.8, twinkle: true, dur: 2.6, delay: 0.3 },
  { cx: 1060, cy: 110, r: 0.8, op: 0.55 },
  { cx: 1140, cy: 60, r: 1, op: 0.7, twinkle: true, dur: 3.4, delay: 0.9 },
  { cx: 1180, cy: 240, r: 0.9, op: 0.65 },
  { cx: 1260, cy: 100, r: 1.3, op: 0.85, twinkle: true, dur: 2.8, delay: 1.4 },
  { cx: 1340, cy: 170, r: 0.8, op: 0.6 },
  { cx: 1420, cy: 50, r: 1, op: 0.7, twinkle: true, dur: 3.6, delay: 0.7 },
  { cx: 1480, cy: 130, r: 1.2, op: 0.85, twinkle: true, dur: 3, delay: 0.1 },
  { cx: 1540, cy: 80, r: 0.7, op: 0.55 },
  { cx: 80, cy: 280, r: 0.9, op: 0.6, twinkle: true, dur: 3.2, delay: 1.1 },
  { cx: 200, cy: 320, r: 1.1, op: 0.7 },
  { cx: 320, cy: 280, r: 0.8, op: 0.55, twinkle: true, dur: 2.8, delay: 0.4 },
  { cx: 460, cy: 360, r: 1, op: 0.65 },
  { cx: 580, cy: 290, r: 0.9, op: 0.55, twinkle: true, dur: 3.4, delay: 0.8 },
  { cx: 700, cy: 340, r: 1.2, op: 0.8 },
  { cx: 1000, cy: 320, r: 0.7, op: 0.5, twinkle: true, dur: 2.6, delay: 1.2 },
  { cx: 1120, cy: 280, r: 1, op: 0.65 },
  { cx: 1240, cy: 360, r: 0.8, op: 0.55, twinkle: true, dur: 3.6, delay: 0.3 },
  { cx: 1380, cy: 290, r: 1.1, op: 0.7 },
  { cx: 1500, cy: 340, r: 0.9, op: 0.6, twinkle: true, dur: 3, delay: 1 },
  { cx: 40, cy: 420, r: 0.8, op: 0.5 },
  { cx: 160, cy: 460, r: 1, op: 0.65, twinkle: true, dur: 3.4, delay: 0.5 },
  { cx: 280, cy: 500, r: 0.7, op: 0.5 },
  { cx: 400, cy: 470, r: 0.9, op: 0.55, twinkle: true, dur: 2.8, delay: 1.3 },
  { cx: 1200, cy: 480, r: 0.8, op: 0.5 },
  { cx: 1340, cy: 440, r: 1, op: 0.6, twinkle: true, dur: 3, delay: 0.6 },
  { cx: 1460, cy: 500, r: 0.7, op: 0.5 },
  { cx: 1560, cy: 460, r: 0.9, op: 0.55, twinkle: true, dur: 3.6, delay: 1 },
];

const particles = Array.from({ length: 18 }, (_, i) => ({
  left: [4, 12, 20, 28, 36, 44, 52, 60, 68, 76, 84, 92, 8, 24, 40, 56, 72, 88][i],
  bottom: [10, 28, 50, 18, 38, 12, 44, 30, 22, 48, 16, 32, 56, 24, 14, 42, 36, 52][i],
  size: [3, 4, 3, 5, 3, 4, 3, 4, 5, 3, 4, 3, 5, 4, 3, 4, 3, 5][i],
  dur: [9, 11, 8, 13, 10, 12, 9, 14, 11, 8, 12, 10, 13, 9, 11, 8, 14, 10][i],
  delay: [0, 1.2, 2.4, 0.6, 1.8, 0.3, 2.1, 1.5, 0.9, 2.7, 1, 1.7, 0.4, 2.5, 1.3, 0.7, 2, 0.2][i],
  dx: [4, -6, 8, -3, 5, -7, 9, -4, 6, -5, 7, -8, 3, -6, 5, -4, 8, -7][i],
  op: [0.6, 0.8, 0.5, 0.9, 0.6, 0.7, 0.5, 0.85, 0.65, 0.55, 0.75, 0.6, 0.8, 0.55, 0.7, 0.6, 0.85, 0.5][i],
}));

export default function HeroScene({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative isolate hero-gradient text-cream overflow-hidden min-h-[88svh] flex items-center">
      <HeroParallax>
        {/* Layer 1: stars + moon — far, slowest */}
        <div className="layer-stars" aria-hidden>
          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <defs>
              <radialGradient id="moonGrad" cx="40%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#fbeec5" />
                <stop offset="55%" stopColor="#e3c587" />
                <stop offset="100%" stopColor="#a07c2c" />
              </radialGradient>
              <radialGradient id="moonHalo" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgba(245,223,168,0.45)" />
                <stop offset="55%" stopColor="rgba(227,197,135,0.18)" />
                <stop offset="100%" stopColor="rgba(227,197,135,0)" />
              </radialGradient>
              <radialGradient id="horizonGlow" cx="50%" cy="100%" r="65%">
                <stop offset="0%" stopColor="rgba(227,197,135,0.32)" />
                <stop offset="55%" stopColor="rgba(201,162,90,0.08)" />
                <stop offset="100%" stopColor="rgba(11,28,58,0)" />
              </radialGradient>
            </defs>

            {/* Moon halo + moon */}
            <circle cx="1300" cy="190" r="160" fill="url(#moonHalo)" />
            <circle cx="1300" cy="190" r="62" fill="url(#moonGrad)" />
            <circle cx="1280" cy="174" r="9" fill="rgba(11,28,58,0.18)" />
            <circle cx="1314" cy="208" r="6" fill="rgba(11,28,58,0.14)" />
            <circle cx="1296" cy="216" r="4" fill="rgba(11,28,58,0.12)" />

            {/* Stars */}
            {stars.map((s, i) => (
              <circle
                key={i}
                cx={s.cx}
                cy={s.cy}
                r={s.r}
                fill="#f5dfa8"
                className={s.twinkle ? "twinkle" : ""}
                style={
                  s.twinkle
                    ? ({
                        ["--star-min" as never]: `${s.op * 0.35}`,
                        ["--star-max" as never]: `${s.op}`,
                        ["--star-dur" as never]: `${s.dur}s`,
                        ["--star-delay" as never]: `${s.delay}s`,
                      } as React.CSSProperties)
                    : { opacity: s.op }
                }
              />
            ))}

            {/* Firework over the castle area */}
            <g
              className="firework"
              transform="translate(440 200)"
              opacity="0.9"
            >
              <circle cx="0" cy="0" r="3" fill="#f5dfa8" />
              <line x1="0" y1="0" x2="0" y2="-32" stroke="#f5dfa8" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="0" y1="0" x2="0" y2="32" stroke="#f5dfa8" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="0" y1="0" x2="-32" y2="0" stroke="#f5dfa8" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="0" y1="0" x2="32" y2="0" stroke="#f5dfa8" strokeWidth="1.4" strokeLinecap="round" />
              <line x1="0" y1="0" x2="-22" y2="-22" stroke="#e3c587" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="0" y1="0" x2="22" y2="-22" stroke="#e3c587" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="0" y1="0" x2="-22" y2="22" stroke="#e3c587" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="0" y1="0" x2="22" y2="22" stroke="#e3c587" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="0" cy="-34" r="1.6" fill="#f5dfa8" />
              <circle cx="34" cy="0" r="1.6" fill="#f5dfa8" />
              <circle cx="0" cy="34" r="1.6" fill="#f5dfa8" />
              <circle cx="-34" cy="0" r="1.6" fill="#f5dfa8" />
              <circle cx="-24" cy="-24" r="1.4" fill="#e3c587" />
              <circle cx="24" cy="-24" r="1.4" fill="#e3c587" />
              <circle cx="-24" cy="24" r="1.4" fill="#e3c587" />
              <circle cx="24" cy="24" r="1.4" fill="#e3c587" />
            </g>

            {/* Subtle horizon glow */}
            <rect x="0" y="640" width="1600" height="260" fill="url(#horizonGlow)" />
          </svg>
        </div>

        {/* Layer 2: mountains + castle — mid */}
        <div className="layer-castle" aria-hidden>
          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="mountainFar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0e1f44" />
                <stop offset="100%" stopColor="#091633" />
              </linearGradient>
              <linearGradient id="mountainNear" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#091633" />
                <stop offset="100%" stopColor="#050d1f" />
              </linearGradient>
              <linearGradient id="castleGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d1c3d" />
                <stop offset="100%" stopColor="#050b1d" />
              </linearGradient>
            </defs>

            {/* Far mountains */}
            <path
              d="M 0 660 L 80 600 L 160 640 L 260 580 L 360 620 L 460 560 L 560 610 L 660 580 L 760 620 L 860 590 L 960 640 L 1080 580 L 1180 620 L 1300 570 L 1420 620 L 1520 590 L 1600 620 L 1600 900 L 0 900 Z"
              fill="url(#mountainFar)"
            />

            {/* Near mountains */}
            <path
              d="M 0 720 L 100 670 L 220 720 L 340 660 L 460 720 L 580 680 L 700 720 L 820 680 L 940 720 L 1060 680 L 1180 720 L 1300 670 L 1420 720 L 1540 690 L 1600 720 L 1600 900 L 0 900 Z"
              fill="url(#mountainNear)"
              opacity="0.95"
            />

            {/* Castle silhouette — stylized fairy-tale */}
            <g fill="url(#castleGrad)">
              {/* Front wall */}
              <rect x="640" y="600" width="320" height="120" />
              {/* Wall crenellations */}
              <rect x="640" y="588" width="20" height="14" />
              <rect x="680" y="588" width="20" height="14" />
              <rect x="720" y="588" width="20" height="14" />
              <rect x="760" y="588" width="20" height="14" />
              <rect x="820" y="588" width="20" height="14" />
              <rect x="860" y="588" width="20" height="14" />
              <rect x="900" y="588" width="20" height="14" />
              <rect x="940" y="588" width="20" height="14" />
              {/* Side towers (squat with conical roofs) */}
              <rect x="610" y="540" width="54" height="180" />
              <polygon points="610,540 664,540 637,470" />
              <rect x="936" y="540" width="54" height="180" />
              <polygon points="936,540 990,540 963,470" />
              {/* Inner mid towers */}
              <rect x="690" y="460" width="56" height="220" />
              <polygon points="690,460 746,460 718,380" />
              <rect x="854" y="460" width="56" height="220" />
              <polygon points="854,460 910,460 882,380" />
              {/* Central tower — tallest */}
              <rect x="770" y="320" width="60" height="380" />
              {/* Onion bulb */}
              <path d="M 770 320 C 758 280, 770 246, 800 240 C 830 246, 842 280, 830 320 Z" />
              {/* Spire */}
              <polygon points="794,240 806,240 800,180" />
              {/* Front gate (subtractive look — leave as darker arch on wall) */}
            </g>

            {/* Front gate arch (cutout-look using darker colour) */}
            <path
              d="M 778 720 L 778 660 C 778 638, 786 624, 800 624 C 814 624, 822 638, 822 660 L 822 720 Z"
              fill="#020611"
            />

            {/* Tiny window glows on castle */}
            <g fill="#f5dfa8" opacity="0.65">
              <rect x="794" y="380" width="6" height="14" rx="1" />
              <rect x="800" y="380" width="6" height="14" rx="1" />
              <rect x="715" y="540" width="5" height="12" rx="1" />
              <rect x="722" y="540" width="5" height="12" rx="1" />
              <rect x="876" y="540" width="5" height="12" rx="1" />
              <rect x="883" y="540" width="5" height="12" rx="1" />
              <rect x="630" y="630" width="4" height="10" rx="1" />
              <rect x="660" y="630" width="4" height="10" rx="1" />
              <rect x="950" y="630" width="4" height="10" rx="1" />
              <rect x="980" y="630" width="4" height="10" rx="1" />
            </g>

            {/* Tiny flag pennants */}
            <g stroke="#e3c587" strokeWidth="1.2" fill="none">
              <line x1="800" y1="180" x2="800" y2="156" />
              <line x1="718" y1="380" x2="718" y2="364" />
              <line x1="882" y1="380" x2="882" y2="364" />
              <line x1="637" y1="470" x2="637" y2="456" />
              <line x1="963" y1="470" x2="963" y2="456" />
            </g>
            <g fill="#e3c587">
              <polygon points="800,156 814,162 800,168" />
              <polygon points="718,364 728,368 718,372" />
              <polygon points="882,364 892,368 882,372" />
              <polygon points="637,456 645,460 637,464" />
              <polygon points="963,456 971,460 963,464" />
            </g>

            {/* Star above the central spire */}
            <g transform="translate(800 152)">
              <polygon
                points="0,-10 2.5,-3 10,-3 4,1.5 6.5,9 0,4.5 -6.5,9 -4,1.5 -10,-3 -2.5,-3"
                fill="#f5dfa8"
              />
            </g>
          </svg>
        </div>

        {/* Layer 3: winding road + foreground — near, fastest */}
        <div className="layer-road" aria-hidden>
          <svg
            viewBox="0 0 1600 900"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full"
          >
            <defs>
              <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0e1730" />
                <stop offset="60%" stopColor="#162a4f" />
                <stop offset="100%" stopColor="#1a3460" />
              </linearGradient>
              <linearGradient id="roadHaze" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(227,197,135,0)" />
                <stop offset="100%" stopColor="rgba(227,197,135,0.18)" />
              </linearGradient>
            </defs>

            {/* Road shape — winding from horizon to viewer */}
            <path
              d="M 800 720
                 C 760 760, 700 800, 540 850
                 L 60 900
                 L 1540 900
                 L 1100 840
                 C 940 800, 870 760, 800 720 Z"
              fill="url(#roadGrad)"
            />

            {/* Subtle haze on road for depth */}
            <path
              d="M 800 720
                 C 760 760, 700 800, 540 850
                 L 60 900
                 L 1540 900
                 L 1100 840
                 C 940 800, 870 760, 800 720 Z"
              fill="url(#roadHaze)"
              opacity="0.6"
            />

            {/* Center dashed line, curves with the road */}
            <path
              d="M 800 720 Q 800 780, 820 840 T 800 900"
              fill="none"
              stroke="#e3c587"
              strokeWidth="3"
              strokeDasharray="22 18"
              strokeLinecap="round"
              opacity="0.7"
            />

            {/* Roadside silhouettes — pine trees */}
            <g fill="#050b1d">
              <polygon points="120,820 150,740 180,820" />
              <polygon points="135,800 160,740 185,800" />
              <rect x="146" y="820" width="8" height="18" />

              <polygon points="240,810 260,760 280,810" />
              <rect x="252" y="810" width="6" height="14" />

              <polygon points="1320,810 1350,750 1380,810" />
              <polygon points="1335,800 1360,750 1385,800" />
              <rect x="1346" y="810" width="8" height="16" />

              <polygon points="1440,820 1465,755 1490,820" />
              <rect x="1455" y="820" width="6" height="16" />
            </g>
          </svg>
        </div>

        {/* Floating particles overlay */}
        <div className="layer-particles" aria-hidden>
          {particles.map((p, i) => (
            <span
              key={i}
              className="particle"
              style={
                {
                  left: `${p.left}%`,
                  bottom: `${p.bottom}%`,
                  ["--p-size" as never]: `${p.size}px`,
                  ["--p-dur" as never]: `${p.dur}s`,
                  ["--p-delay" as never]: `${p.delay}s`,
                  ["--p-dx" as never]: `${p.dx}px`,
                  ["--p-op" as never]: `${p.op}`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </HeroParallax>

      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
