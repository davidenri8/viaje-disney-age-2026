import Link from "next/link";
import Countdown from "./components/Countdown";
import HeroScene from "./components/HeroScene";
import RouteMap from "./components/RouteMap";
import Reveal from "./components/Reveal";
import SectionIcon, { type SectionSlug, sectionMeta } from "./components/SectionIcon";
import Avatar, { PERSONS } from "./components/Avatar";

const sections: { slug: SectionSlug; hint: string }[] = [
  { slug: "ruta-ida", hint: "Etapas desde Catalunya hasta Marne-la-Vallée" },
  { slug: "disney", hint: "3-4 días en los parques" },
  { slug: "paris", hint: "Torre Eiffel y monumentos" },
  { slug: "ruta-vuelta", hint: "Vuelta a casa con calma" },
  { slug: "presupuesto", hint: "Coche, alojamiento, parque, comida" },
  { slug: "packing", hint: "Maletas para 6 personas" },
  { slug: "info-util", hint: "Pensado para Aura, Gal·la y Èlia" },
];

export default function Home() {
  return (
    <>
      <HeroScene>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.45em] text-gold-soft">
            Road trip familiar · Catalunya → París
          </p>
          <h1 className="mt-7 font-display text-5xl sm:text-7xl md:text-8xl leading-[1.02] tracking-tight">
            Viaje a{" "}
            <span className="bg-gradient-to-r from-gold-soft via-cream to-gold-soft bg-clip-text text-transparent">
              Disneyland
            </span>{" "}
            Paris
          </h1>
          <p className="mt-6 max-w-2xl mx-auto font-display italic text-xl sm:text-2xl text-cream/80 leading-snug">
            Doce días para crear recuerdos con Aura, Gal·la y Èlia.
          </p>
          <p className="mt-3 max-w-xl mx-auto text-cream/60 text-sm sm:text-base leading-relaxed">
            Carretera, castillos, torres y todo lo que se nos ocurra por el
            camino.
          </p>

          <div className="mt-12 sm:mt-14">
            <Countdown />
            <p className="mt-7 text-center text-xs uppercase tracking-[0.35em] text-cream/55">
              Salida prevista · 28 de agosto de 2026
            </p>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/disney"
              className="btn-magic inline-flex items-center gap-2 rounded-full bg-gold text-night px-6 py-3 text-sm font-medium tracking-wide hover:bg-gold-soft"
            >
              Ver plan de Disney
            </Link>
            <Link
              href="/ruta-ida"
              className="btn-magic inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-3 text-sm tracking-wide text-cream hover:bg-cream/10"
            >
              Empezar por la ruta
            </Link>
          </div>
        </div>
      </HeroScene>

      {/* El recorrido */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-deep">
              Visión general
            </p>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl text-ink leading-[1.05]">
              El recorrido
            </h2>
            <p className="mt-4 font-display italic text-lg sm:text-xl text-ink/70">
              Catalunya → París · 12 días · paradas por definir
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 sm:mt-14 rounded-3xl bg-white/60 border border-ink/10 p-4 sm:p-8 shadow-[0_30px_80px_-50px_rgba(11,28,58,0.4)] overflow-hidden">
            <RouteMap />
          </div>
        </Reveal>
      </section>

      {/* Tablón de planificación */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold-deep">
                El viaje, sección a sección
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-6xl text-ink leading-[1.05]">
                Tablón de planificación
              </h2>
              <p className="mt-4 font-display italic text-lg sm:text-xl text-ink/70 max-w-xl">
                Iremos rellenando cada sección poco a poco.
              </p>
            </div>
            <p className="max-w-md text-ink/60 text-sm">
              Ainhoa y Germán pueden entrar cuando quieran a ver propuestas y
              novedades. Pasad el cursor por las tarjetas y los iconos cobran
              vida.
            </p>
          </div>
        </Reveal>

        <div className="gold-divider my-12" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {sections.map((s, i) => {
            const meta = sectionMeta[s.slug];
            return (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`/${s.slug}`}
                  className="card-magic group relative block h-full overflow-hidden rounded-2xl border border-ink/10 bg-white/70 p-7 sm:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="text-gold-deep">
                      <SectionIcon slug={s.slug} size={56} />
                    </div>
                    <span
                      className="font-display text-xs text-gold-deep tracking-[0.3em] mt-2"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl sm:text-3xl text-ink">
                    {meta.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                    {s.hint}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-deep">
                    <span>Entrar</span>
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Quiénes vamos — avatars */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 starfield opacity-95 pointer-events-none" aria-hidden />
        <div className="absolute -top-20 -left-24 w-[28rem] h-[28rem] rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-24 w-[32rem] h-[32rem] rounded-full bg-ink-soft/40 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32 text-cream">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">
                Quiénes vamos
              </p>
              <h2 className="mt-3 font-display text-4xl sm:text-6xl leading-[1.05]">
                Tres adultos, tres aventureras
              </h2>
              <p className="mt-4 font-display italic text-lg sm:text-xl text-cream/75">
                David, Ainhoa y Germán al volante. Aura, Gal·la y Èlia votando
                paradas.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 sm:mt-20 grid grid-cols-2 sm:grid-cols-3 gap-5 sm:gap-8">
            {PERSONS.map((p, i) => (
              <Reveal key={p.person} delay={i * 90}>
                <article className="avatar-card group relative h-full rounded-3xl border border-cream/10 bg-white/[0.04] backdrop-blur-sm p-6 sm:p-8 text-center">
                  <div className="relative mx-auto w-fit">
                    <div className="avatar-svg">
                      <Avatar person={p.person} size={132} />
                    </div>
                    <span className="absolute -top-1 -right-1 inline-block h-2 w-2 rounded-full bg-gold-soft shadow-[0_0_12px_rgba(245,223,168,0.6)]" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-display italic text-sm text-cream/65">
                    {p.role}
                  </p>
                  <div className="mt-5 mx-auto h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
