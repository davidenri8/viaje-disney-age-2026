export type Person =
  | "david"
  | "ainhoa"
  | "german"
  | "aura"
  | "galla"
  | "elia";

type Palette = {
  from: string;
  to: string;
  silhouette: string;
  hair: string;
  accent: string;
};

const PALETTE: Record<Person, Palette> = {
  david: {
    from: "#4870c4",
    to: "#0c1c4d",
    silhouette: "#0a1838",
    hair: "#1d1208",
    accent: "#e3c587",
  },
  ainhoa: {
    from: "#36b489",
    to: "#0a3a2c",
    silhouette: "#08362a",
    hair: "#2a160a",
    accent: "#e3c587",
  },
  german: {
    from: "#3056a3",
    to: "#060f2c",
    silhouette: "#070f2c",
    hair: "#160c06",
    accent: "#e3c587",
  },
  aura: {
    from: "#a07fde",
    to: "#36206a",
    silhouette: "#221350",
    hair: "#1a0d3a",
    accent: "#f5dfa8",
  },
  galla: {
    from: "#f1a3b3",
    to: "#a44a5b",
    silhouette: "#5a1d2a",
    hair: "#2a1008",
    accent: "#f5dfa8",
  },
  elia: {
    from: "#f6cd86",
    to: "#9a6b22",
    silhouette: "#4a2f0a",
    hair: "#2a1606",
    accent: "#fff5d6",
  },
};

const LABELS: Record<Person, string> = {
  david: "Avatar de David",
  ainhoa: "Avatar de Ainhoa",
  german: "Avatar de Germán",
  aura: "Avatar de Aura",
  galla: "Avatar de Gal·la",
  elia: "Avatar de Èlia",
};

type Props = {
  person: Person;
  size?: number;
  className?: string;
};

export default function Avatar({ person, size = 128, className = "" }: Props) {
  const p = PALETTE[person];
  const id = `av-${person}`;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 160 160",
    role: "img",
    "aria-label": LABELS[person],
    className,
  } as const;

  return (
    <svg {...common}>
      <defs>
        <radialGradient
          id={`${id}-bg`}
          cx="32%"
          cy="28%"
          r="85%"
        >
          <stop offset="0%" stopColor={p.from} />
          <stop offset="100%" stopColor={p.to} />
        </radialGradient>
        <clipPath id={`${id}-clip`}>
          <circle cx="80" cy="80" r="76" />
        </clipPath>
      </defs>

      {/* Background */}
      <circle cx="80" cy="80" r="76" fill={`url(#${id}-bg)`} />

      <g clipPath={`url(#${id}-clip)`}>
        {/* Decorative sparkles inside circle */}
        <g fill={p.accent} opacity="0.55">
          <circle cx="34" cy="44" r="1.4" />
          <circle cx="128" cy="40" r="1" />
          <circle cx="22" cy="92" r="1" />
          <circle cx="138" cy="100" r="1.2" />
        </g>

        {renderCharacter(person, p)}
      </g>

      {/* Gold ring */}
      <circle
        cx="80"
        cy="80"
        r="76"
        fill="none"
        stroke="rgba(227,197,135,0.55)"
        strokeWidth="1.4"
      />
      <circle
        cx="80"
        cy="80"
        r="72"
        fill="none"
        stroke="rgba(245,223,168,0.18)"
        strokeWidth="1"
      />
    </svg>
  );
}

function renderCharacter(person: Person, p: Palette) {
  switch (person) {
    case "david":
      return (
        <g>
          {/* Shoulders */}
          <path
            d="M 14 168 Q 14 112 80 112 Q 146 112 146 168 Z"
            fill={p.silhouette}
          />
          {/* Collar hint */}
          <path
            d="M 60 122 Q 80 130 100 122"
            fill="none"
            stroke={p.accent}
            strokeWidth="1.2"
            opacity="0.5"
          />
          {/* Head */}
          <ellipse cx="80" cy="68" rx="26" ry="30" fill={p.silhouette} />
          {/* Hair (short, swept) */}
          <path
            d="M 54 64 Q 52 38 80 36 Q 108 38 106 64 Q 100 50 80 50 Q 60 50 54 64 Z"
            fill={p.hair}
          />
          {/* Sunglasses */}
          <rect
            x="56"
            y="64"
            width="48"
            height="11"
            rx="4"
            fill={p.accent}
            opacity="0.95"
          />
          <line
            x1="80"
            y1="68"
            x2="80"
            y2="74"
            stroke={p.silhouette}
            strokeWidth="1.5"
          />
          <ellipse cx="68" cy="69" rx="6" ry="3.5" fill="rgba(0,0,0,0.6)" />
          <ellipse cx="92" cy="69" rx="6" ry="3.5" fill="rgba(0,0,0,0.6)" />
          {/* Subtle smile */}
          <path
            d="M 72 88 Q 80 92 88 88"
            fill="none"
            stroke={p.hair}
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.7"
          />
          {/* Steering wheel ring in front */}
          <circle
            cx="80"
            cy="160"
            r="22"
            fill="none"
            stroke={p.accent}
            strokeWidth="2.4"
            opacity="0.85"
          />
          <line
            x1="60"
            y1="158"
            x2="100"
            y2="158"
            stroke={p.accent}
            strokeWidth="1.6"
            opacity="0.7"
          />
        </g>
      );

    case "ainhoa":
      return (
        <g>
          <path
            d="M 14 168 Q 14 112 80 112 Q 146 112 146 168 Z"
            fill={p.silhouette}
          />
          {/* Head */}
          <ellipse cx="80" cy="70" rx="24" ry="28" fill={p.silhouette} />
          {/* Hair (parted with high bun on top) */}
          <path
            d="M 56 68 Q 54 42 80 40 Q 106 42 104 68 Q 102 56 80 54 Q 58 56 56 68 Z"
            fill={p.hair}
          />
          {/* Bun on top */}
          <ellipse cx="80" cy="32" rx="11" ry="9" fill={p.hair} />
          <ellipse cx="80" cy="30" rx="6" ry="4" fill="rgba(255,255,255,0.07)" />
          {/* Smile */}
          <path
            d="M 74 88 Q 80 92 86 88"
            fill="none"
            stroke={p.hair}
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.7"
          />
          {/* Eyes */}
          <circle cx="71" cy="74" r="1.6" fill={p.hair} />
          <circle cx="89" cy="74" r="1.6" fill={p.hair} />
          {/* Clipboard in front */}
          <rect
            x="56"
            y="124"
            width="48"
            height="38"
            rx="3"
            fill={p.accent}
            opacity="0.95"
          />
          <rect
            x="70"
            y="120"
            width="20"
            height="6"
            rx="1.5"
            fill={p.silhouette}
          />
          <line
            x1="62"
            y1="138"
            x2="98"
            y2="138"
            stroke={p.silhouette}
            strokeWidth="1.4"
            opacity="0.7"
          />
          <line
            x1="62"
            y1="146"
            x2="92"
            y2="146"
            stroke={p.silhouette}
            strokeWidth="1.4"
            opacity="0.7"
          />
          <line
            x1="62"
            y1="154"
            x2="86"
            y2="154"
            stroke={p.silhouette}
            strokeWidth="1.4"
            opacity="0.7"
          />
          {/* Tick mark */}
          <polyline
            points="58,138 60,140 64,136"
            fill="none"
            stroke={p.silhouette}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <polyline
            points="58,146 60,148 64,144"
            fill="none"
            stroke={p.silhouette}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </g>
      );

    case "german":
      return (
        <g>
          <path
            d="M 14 168 Q 14 112 80 112 Q 146 112 146 168 Z"
            fill={p.silhouette}
          />
          <path
            d="M 60 122 Q 80 130 100 122"
            fill="none"
            stroke={p.accent}
            strokeWidth="1.2"
            opacity="0.5"
          />
          {/* Head */}
          <ellipse cx="80" cy="68" rx="26" ry="30" fill={p.silhouette} />
          {/* Hair (different shape — fuller, swept back) */}
          <path
            d="M 54 64 Q 50 32 80 32 Q 110 32 106 64 L 106 56 Q 90 42 80 50 Q 70 42 54 56 Z"
            fill={p.hair}
          />
          {/* Beard */}
          <path
            d="M 58 80 Q 62 100 80 102 Q 98 100 102 80 Q 98 92 80 92 Q 62 92 58 80 Z"
            fill={p.hair}
          />
          {/* Eyes */}
          <circle cx="71" cy="72" r="1.8" fill={p.hair} />
          <circle cx="89" cy="72" r="1.8" fill={p.hair} />
          {/* Subtle eyebrow */}
          <line
            x1="66"
            y1="64"
            x2="76"
            y2="63"
            stroke={p.hair}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <line
            x1="84"
            y1="63"
            x2="94"
            y2="64"
            stroke={p.hair}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Steering wheel hint */}
          <circle
            cx="80"
            cy="160"
            r="22"
            fill="none"
            stroke={p.accent}
            strokeWidth="2.4"
            opacity="0.85"
          />
          <line
            x1="60"
            y1="158"
            x2="100"
            y2="158"
            stroke={p.accent}
            strokeWidth="1.6"
            opacity="0.7"
          />
          {/* Map/compass dot */}
          <circle cx="80" cy="160" r="3" fill={p.accent} />
        </g>
      );

    case "aura":
      return (
        <g>
          {/* Slimmer, taller silhouette */}
          <path
            d="M 24 168 Q 24 110 80 110 Q 136 110 136 168 Z"
            fill={p.silhouette}
          />
          {/* Long ponytail trailing back-right */}
          <path
            d="M 100 60 Q 130 80 122 130 Q 116 152 110 158"
            fill={p.hair}
            opacity="0.9"
          />
          <path
            d="M 100 60 Q 130 80 122 130 Q 116 152 110 158"
            fill="none"
            stroke={p.silhouette}
            strokeWidth="0.6"
          />
          {/* Head */}
          <ellipse cx="80" cy="68" rx="22" ry="26" fill={p.silhouette} />
          {/* Hair around head */}
          <path
            d="M 58 64 Q 56 38 80 36 Q 102 38 102 64 Q 100 52 80 52 Q 60 52 58 64 Z"
            fill={p.hair}
          />
          {/* Hair tie (gold dot) */}
          <circle cx="100" cy="60" r="3" fill={p.accent} />
          {/* Headphones — band over hair */}
          <path
            d="M 62 50 Q 80 30 98 50"
            fill="none"
            stroke={p.accent}
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Earcups */}
          <ellipse cx="60" cy="68" rx="6" ry="8" fill={p.accent} />
          <ellipse cx="100" cy="68" rx="6" ry="8" fill={p.accent} />
          {/* Eyes */}
          <circle cx="72" cy="72" r="1.6" fill={p.hair} />
          <circle cx="88" cy="72" r="1.6" fill={p.hair} />
          {/* Smile */}
          <path
            d="M 73 86 Q 80 90 87 86"
            fill="none"
            stroke={p.hair}
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity="0.7"
          />
        </g>
      );

    case "galla":
      return (
        <g>
          <path
            d="M 24 168 Q 24 112 80 112 Q 136 112 136 168 Z"
            fill={p.silhouette}
          />
          {/* Head */}
          <ellipse cx="80" cy="70" rx="22" ry="25" fill={p.silhouette} />
          {/* Hair cap */}
          <path
            d="M 58 68 Q 56 42 80 40 Q 104 42 102 68 Q 100 56 80 56 Q 60 56 58 68 Z"
            fill={p.hair}
          />
          {/* Two pigtails */}
          <ellipse cx="56" cy="68" rx="7" ry="14" fill={p.hair} />
          <ellipse cx="104" cy="68" rx="7" ry="14" fill={p.hair} />
          {/* Tie ribbons */}
          <circle cx="56" cy="56" r="3" fill={p.accent} />
          <circle cx="104" cy="56" r="3" fill={p.accent} />
          {/* Eyes */}
          <circle cx="72" cy="74" r="1.8" fill={p.hair} />
          <circle cx="88" cy="74" r="1.8" fill={p.hair} />
          {/* Big smile */}
          <path
            d="M 71 88 Q 80 95 89 88"
            fill="none"
            stroke={p.hair}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Backpack strap diagonal across body */}
          <path
            d="M 60 116 L 92 162"
            stroke={p.accent}
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.95"
          />
          {/* Backpack edge peeking */}
          <rect
            x="100"
            y="120"
            width="22"
            height="46"
            rx="4"
            fill={p.accent}
            opacity="0.85"
          />
        </g>
      );

    case "elia":
      return (
        <g>
          {/* Smaller body */}
          <path
            d="M 36 168 Q 36 124 80 124 Q 124 124 124 168 Z"
            fill={p.silhouette}
          />
          {/* Round head */}
          <circle cx="80" cy="80" r="28" fill={p.silhouette} />
          {/* Hair (short fringe) */}
          <path
            d="M 56 76 Q 54 52 80 50 Q 106 52 104 76 Q 102 64 80 64 Q 58 64 56 76 Z"
            fill={p.hair}
          />
          {/* Crown — 3 points */}
          <polygon
            points="60,52 64,40 68,52"
            fill={p.accent}
            stroke={p.accent}
            strokeWidth="0.6"
          />
          <polygon
            points="74,48 80,32 86,48"
            fill={p.accent}
            stroke={p.accent}
            strokeWidth="0.6"
          />
          <polygon
            points="92,52 96,40 100,52"
            fill={p.accent}
            stroke={p.accent}
            strokeWidth="0.6"
          />
          <line
            x1="58"
            y1="52"
            x2="102"
            y2="52"
            stroke={p.accent}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="64" cy="40" r="1.6" fill="#fff" />
          <circle cx="80" cy="32" r="1.8" fill="#fff" />
          <circle cx="96" cy="40" r="1.6" fill="#fff" />
          {/* Big round eyes */}
          <circle cx="70" cy="84" r="2.4" fill={p.hair} />
          <circle cx="90" cy="84" r="2.4" fill={p.hair} />
          <circle cx="71" cy="83" r="0.9" fill="#fff" />
          <circle cx="91" cy="83" r="0.9" fill="#fff" />
          {/* Little smile */}
          <path
            d="M 74 96 Q 80 102 86 96"
            fill="none"
            stroke={p.hair}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Cheeks */}
          <circle cx="62" cy="92" r="3" fill="rgba(255,180,180,0.4)" />
          <circle cx="98" cy="92" r="3" fill="rgba(255,180,180,0.4)" />
        </g>
      );
  }
}

export const PERSONS: { person: Person; name: string; role: string }[] = [
  { person: "david", name: "David", role: "Conductor & papá" },
  { person: "ainhoa", name: "Ainhoa", role: "Logística & rumbo" },
  { person: "german", name: "Germán", role: "Conductor & relevos" },
  { person: "aura", name: "Aura", role: "12 años · la mayor" },
  { person: "galla", name: "Gal·la", role: "8 años · la mediana" },
  { person: "elia", name: "Èlia", role: "4 años · la pequeña" },
];
