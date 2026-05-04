export type SectionSlug =
  | "ruta-ida"
  | "disney"
  | "paris"
  | "ruta-vuelta"
  | "presupuesto"
  | "packing"
  | "info-util";

const COMMON =
  "fill-none stroke-current [stroke-width:1.6] [stroke-linecap:round] [stroke-linejoin:round]";

type Props = {
  slug: SectionSlug;
  size?: number;
  className?: string;
  /** When true the inner SVG receives the per-icon hover animation class. */
  decorative?: boolean;
};

const animClass: Record<SectionSlug, string> = {
  "ruta-ida": "icon-bounce",
  disney: "icon-spin-soft",
  paris: "icon-wiggle",
  "ruta-vuelta": "icon-bounce",
  presupuesto: "icon-spin-soft",
  packing: "icon-wiggle",
  "info-util": "icon-spin-soft",
};

export default function SectionIcon({
  slug,
  size = 64,
  className = "",
  decorative = true,
}: Props) {
  const inner = decorative ? animClass[slug] : "";
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    role: "img",
    "aria-label": LABELS[slug],
    className: `${COMMON} ${inner} ${className}`,
  } as const;

  switch (slug) {
    case "ruta-ida":
      return (
        <svg {...props}>
          <path d="M 6 30 L 14 22 L 22 28 L 30 18 L 40 26 L 50 20 L 60 30" opacity="0.5" />
          <line x1="6" y1="50" x2="58" y2="50" strokeDasharray="3 3" opacity="0.6" />
          <path d="M 16 48 L 18 42 Q 20 40 22 40 L 40 40 Q 42 40 44 42 L 46 48" />
          <path d="M 22 40 L 26 34 L 40 34 L 44 40" />
          <line x1="29" y1="34" x2="29" y2="40" opacity="0.7" />
          <circle cx="24" cy="50" r="3.2" />
          <circle cx="42" cy="50" r="3.2" />
          <line x1="50" y1="42" x2="56" y2="42" />
          <polyline points="54,40 56,42 54,44" />
        </svg>
      );

    case "disney":
      return (
        <svg {...props}>
          <polygon
            points="32,4 33.6,9 38.6,9.4 34.6,12.6 36,17.4 32,14.4 28,17.4 29.4,12.6 25.4,9.4 30.4,9"
            fill="currentColor"
            stroke="none"
          />
          <line x1="32" y1="20" x2="32" y2="24" />
          <path d="M 28 24 Q 24 28 28 32 L 36 32 Q 40 28 36 24 Z" />
          <rect x="29" y="32" width="6" height="14" />
          <rect x="20" y="36" width="6" height="14" />
          <polygon points="20,36 26,36 23,30" />
          <rect x="38" y="36" width="6" height="14" />
          <polygon points="38,36 44,36 41,30" />
          <line x1="14" y1="56" x2="50" y2="56" />
          <rect x="14" y="46" width="36" height="10" />
          <path d="M 30 56 L 30 50 Q 32 48 34 50 L 34 56" fill="currentColor" stroke="none" opacity="0.85" />
        </svg>
      );

    case "paris":
      return (
        <svg {...props}>
          <path d="M 18 52 L 22 38 L 26 22 L 32 8 L 38 22 L 42 38 L 46 52" />
          <line x1="32" y1="8" x2="32" y2="4" />
          <line x1="22" y1="38" x2="42" y2="38" />
          <line x1="26" y1="22" x2="38" y2="22" />
          <path d="M 28 22 L 36 22" opacity="0.6" />
          <path d="M 18 52 Q 32 44 46 52" />
          <path d="M 4 58 C 12 56, 20 60, 28 58 C 36 56, 44 60, 60 58" opacity="0.55" />
          <circle cx="50" cy="12" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="14" cy="20" r="1" fill="currentColor" stroke="none" opacity="0.7" />
        </svg>
      );

    case "ruta-vuelta":
      return (
        <svg {...props}>
          <path d="M 16 30 A 12 12 0 0 1 40 30" fill="currentColor" stroke="none" opacity="0.85" />
          <line x1="14" y1="30" x2="9" y2="30" />
          <line x1="42" y1="30" x2="47" y2="30" />
          <line x1="20" y1="20" x2="16" y2="16" />
          <line x1="36" y1="20" x2="40" y2="16" />
          <line x1="28" y1="14" x2="28" y2="10" />
          <line x1="2" y1="30" x2="62" y2="30" opacity="0.4" />
          <line x1="6" y1="50" x2="58" y2="50" strokeDasharray="3 3" opacity="0.6" />
          <path d="M 16 48 L 18 42 Q 20 40 22 40 L 40 40 Q 42 40 44 42 L 46 48" />
          <path d="M 18 40 L 22 34 L 36 34 L 40 40" />
          <line x1="33" y1="34" x2="33" y2="40" opacity="0.7" />
          <circle cx="20" cy="50" r="3.2" />
          <circle cx="38" cy="50" r="3.2" />
          <line x1="14" y1="42" x2="8" y2="42" />
          <polyline points="10,40 8,42 10,44" />
        </svg>
      );

    case "presupuesto":
      return (
        <svg {...props}>
          <ellipse cx="40" cy="42" rx="13" ry="4" />
          <line x1="27" y1="42" x2="27" y2="48" />
          <line x1="53" y1="42" x2="53" y2="48" />
          <ellipse cx="40" cy="48" rx="13" ry="4" />
          <line x1="27" y1="22" x2="27" y2="48" opacity="0" />
          <circle cx="24" cy="32" r="14" />
          <path d="M 30 26 Q 22 26 22 32 Q 22 38 30 38" />
          <line x1="20" y1="30" x2="28" y2="30" />
          <line x1="20" y1="34" x2="28" y2="34" />
          <circle cx="54" cy="14" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="14" cy="14" r="1" fill="currentColor" stroke="none" opacity="0.6" />
        </svg>
      );

    case "packing":
      return (
        <svg {...props}>
          <path d="M 24 16 Q 24 10 32 10 Q 40 10 40 16" />
          <rect x="12" y="16" width="40" height="36" rx="3" />
          <line x1="32" y1="22" x2="32" y2="46" strokeDasharray="2 3" opacity="0.7" />
          <line x1="22" y1="16" x2="22" y2="20" />
          <line x1="42" y1="16" x2="42" y2="20" />
          <line x1="14" y1="44" x2="50" y2="44" opacity="0.5" />
          <line x1="46" y1="16" x2="52" y2="22" />
          <rect x="50" y="22" width="11" height="8" rx="1.2" />
          <line x1="52" y1="26" x2="59" y2="26" opacity="0.6" />
          <circle cx="14" cy="14" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );

    case "info-util":
      return (
        <svg {...props}>
          <circle cx="32" cy="32" r="22" />
          <line x1="32" y1="10" x2="32" y2="14" />
          <line x1="32" y1="50" x2="32" y2="54" />
          <line x1="10" y1="32" x2="14" y2="32" />
          <line x1="50" y1="32" x2="54" y2="32" />
          <line x1="17" y1="17" x2="19" y2="19" opacity="0.5" />
          <line x1="45" y1="19" x2="47" y2="17" opacity="0.5" />
          <line x1="17" y1="47" x2="19" y2="45" opacity="0.5" />
          <line x1="45" y1="45" x2="47" y2="47" opacity="0.5" />
          <polygon points="32,18 36,32 32,46 28,32" />
          <polygon points="32,18 36,32 28,32" fill="currentColor" stroke="none" />
          <circle cx="32" cy="32" r="1.8" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

const LABELS: Record<SectionSlug, string> = {
  "ruta-ida": "Coche en ruta",
  disney: "Castillo de Disney",
  paris: "Torre Eiffel",
  "ruta-vuelta": "Coche al atardecer",
  presupuesto: "Monedas",
  packing: "Maleta",
  "info-util": "Brújula",
};

export const sectionMeta: Record<
  SectionSlug,
  { title: string; eyebrow: string; subtitle: string }
> = {
  "ruta-ida": {
    title: "Ruta de ida",
    eyebrow: "Etapa 1",
    subtitle: "De Catalunya a Marne-la-Vallée en dos etapas tranquilas.",
  },
  disney: {
    title: "Días de Disney",
    eyebrow: "Etapa 2",
    subtitle: "Tres o cuatro días en los parques. La parte central del viaje.",
  },
  paris: {
    title: "Día en París",
    eyebrow: "Etapa 3",
    subtitle: "Torre Eiffel sí o sí, y lo que entre sin agobiar a las niñas.",
  },
  "ruta-vuelta": {
    title: "Ruta de vuelta",
    eyebrow: "Etapa 4",
    subtitle: "Volver a casa con tiempo y, si encaja, una parada bonita.",
  },
  presupuesto: {
    title: "Presupuesto",
    eyebrow: "Cuentas",
    subtitle: "Estimación inicial por partidas que iremos cerrando.",
  },
  packing: {
    title: "Packing list",
    eyebrow: "Equipaje",
    subtitle: "Lista compartida para que ninguno olvidemos lo importante.",
  },
  "info-util": {
    title: "Info útil",
    eyebrow: "Para tener a mano",
    subtitle: "Pensado especialmente en Aura, Gal·la y Èlia.",
  },
};
