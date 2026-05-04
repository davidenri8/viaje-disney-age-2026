import Link from "next/link";
import Countdown from "./components/Countdown";

const sections: {
  href: string;
  title: string;
  hint: string;
}[] = [
  {
    href: "/ruta-ida",
    title: "Ruta de ida",
    hint: "Etapas desde Catalunya hasta Marne-la-Vallée",
  },
  {
    href: "/disney",
    title: "Días de Disney",
    hint: "3-4 días en los parques",
  },
  {
    href: "/paris",
    title: "Día en París",
    hint: "Torre Eiffel y monumentos",
  },
  {
    href: "/ruta-vuelta",
    title: "Ruta de vuelta",
    hint: "Vuelta a casa con calma",
  },
  {
    href: "/presupuesto",
    title: "Presupuesto",
    hint: "Coche, alojamiento, parque, comida",
  },
  {
    href: "/packing",
    title: "Packing list",
    hint: "Maletas para 6 personas",
  },
  {
    href: "/info-util",
    title: "Info útil",
    hint: "Pensado para Aura, Gal·la y Èlia",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate hero-gradient text-cream overflow-hidden">
        <div className="absolute inset-0 starfield opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-32 w-[32rem] h-[32rem] rounded-full bg-ink-soft/40 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-32">
          <p className="text-xs uppercase tracking-[0.4em] text-gold-soft text-center">
            Road trip familiar · Catalunya → París
          </p>
          <h1 className="mt-6 font-display text-5xl sm:text-7xl md:text-8xl text-center leading-[1.05] tracking-tight">
            Viaje a{" "}
            <span className="bg-gradient-to-r from-gold-soft via-cream to-gold-soft bg-clip-text text-transparent">
              Disneyland
            </span>{" "}
            Paris
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-center text-cream/80 text-base sm:text-lg leading-relaxed">
            Doce días para crear recuerdos con Aura, Gal·la y Èlia. Carretera,
            castillos, torres y todo lo que se nos ocurra por el camino.
          </p>

          <div className="mt-12">
            <Countdown />
            <p className="mt-6 text-center text-xs uppercase tracking-[0.3em] text-cream/50">
              Salida prevista · 28 de agosto de 2026
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/disney"
              className="inline-flex items-center gap-2 rounded-full bg-gold text-night px-6 py-3 text-sm font-medium tracking-wide hover:bg-gold-soft transition-colors"
            >
              Ver plan de Disney
            </Link>
            <Link
              href="/ruta-ida"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm tracking-wide text-cream hover:bg-cream/10 transition-colors"
            >
              Empezar por la ruta
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
              El viaje, sección a sección
            </p>
            <h2 className="mt-2 font-display text-3xl sm:text-5xl text-ink">
              Tablón de planificación
            </h2>
          </div>
          <p className="max-w-md text-ink/60 text-sm">
            Iremos rellenando cada sección poco a poco. Ainhoa y Germán pueden
            entrar cuando quieran a ver propuestas y novedades.
          </p>
        </div>

        <div className="gold-divider my-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sections.map((section, i) => (
            <Link
              key={section.href}
              href={section.href}
              className="group relative overflow-hidden rounded-2xl border border-ink/10 bg-white/70 hover:bg-white p-6 sm:p-7 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-20px_rgba(11,28,58,0.4)]"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-xs text-gold-deep tracking-[0.2em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  aria-hidden
                  className="text-ink/30 group-hover:text-gold transition-colors"
                >
                  →
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl text-ink">
                {section.title}
              </h3>
              <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                {section.hint}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-20">
        <div className="rounded-3xl bg-ink text-cream p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 starfield opacity-30 pointer-events-none" />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-soft">
                Quiénes vamos
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Tres adultos, tres aventureras
              </h2>
              <p className="mt-4 text-cream/70 leading-relaxed">
                David, Ainhoa y Germán al volante (por turnos). Aura (12),
                Gal·la (8) y Èlia (4) en el asiento de atrás, votando paradas y
                eligiendo atracciones.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {[
                { name: "David", note: "Conductor" },
                { name: "Ainhoa", note: "Logística" },
                { name: "Germán", note: "Conductor" },
                { name: "Aura", note: "12 años" },
                { name: "Gal·la", note: "8 años" },
                { name: "Èlia", note: "4 años" },
              ].map((p) => (
                <li
                  key={p.name}
                  className="rounded-xl border border-cream/15 px-4 py-3"
                >
                  <div className="font-display text-lg">{p.name}</div>
                  <div className="text-cream/60 text-xs uppercase tracking-wider">
                    {p.note}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
