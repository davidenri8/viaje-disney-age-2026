export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-cream-soft via-cream to-cream-soft border-t border-ink/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl">
        <div className="gold-divider" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 flex flex-col items-center gap-5 text-center">
        <div className="flex items-center gap-5 text-gold-deep" aria-hidden>
          <FooterIcon kind="wheel" />
          <span className="h-1 w-1 rounded-full bg-gold/50" />
          <FooterIcon kind="castle" />
          <span className="h-1 w-1 rounded-full bg-gold/50" />
          <FooterIcon kind="eiffel" />
          <span className="h-1 w-1 rounded-full bg-gold/50" />
          <FooterIcon kind="suitcase" />
          <span className="h-1 w-1 rounded-full bg-gold/50" />
          <FooterIcon kind="star" />
        </div>
        <p className="font-display text-base sm:text-lg text-ink">
          Tablón familiar
        </p>
        <p className="text-sm text-ink/65 max-w-md">
          David, Ainhoa, Germán, Aura, Gal·la y Èlia
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
          28 ago — 8 sep 2026
        </p>
      </div>
    </footer>
  );
}

function FooterIcon({ kind }: { kind: "wheel" | "castle" | "eiffel" | "suitcase" | "star" }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (kind) {
    case "wheel":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
      );
    case "castle":
      return (
        <svg {...common}>
          <path d="M 4 20 L 4 12 L 7 12 L 7 9 L 12 5 L 17 9 L 17 12 L 20 12 L 20 20 Z" />
          <path d="M 11 20 L 11 16 Q 12 15 13 16 L 13 20" />
          <line x1="12" y1="5" x2="12" y2="2" />
        </svg>
      );
    case "eiffel":
      return (
        <svg {...common}>
          <path d="M 7 21 L 9 15 L 11 9 L 12 4 L 13 9 L 15 15 L 17 21" />
          <line x1="12" y1="4" x2="12" y2="2" />
          <line x1="9" y1="15" x2="15" y2="15" />
          <line x1="11" y1="9" x2="13" y2="9" />
          <path d="M 7 21 Q 12 18 17 21" />
        </svg>
      );
    case "suitcase":
      return (
        <svg {...common}>
          <path d="M 9 6 Q 9 4 12 4 Q 15 4 15 6" />
          <rect x="4" y="6" width="16" height="14" rx="1.6" />
          <line x1="12" y1="9" x2="12" y2="17" strokeDasharray="1.5 1.5" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <polygon
            points="12,3 13.4,9 19.5,9.4 14.7,12.8 16,18.6 12,15.4 8,18.6 9.3,12.8 4.5,9.4 10.6,9"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
  }
}
