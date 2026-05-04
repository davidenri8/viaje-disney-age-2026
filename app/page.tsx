import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Recorrido from "./components/Recorrido";
import Reveal from "./components/Reveal";
import SectionIcon, {
  type SectionSlug,
  sectionMeta,
} from "./components/SectionIcon";
import Avatar, { PERSONS } from "./components/Avatar";
import { PHOTOS, unsplashImageUrl } from "./lib/photos";

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
      <Hero />

      <Recorrido />

      {/* Tablón de planificación */}
      <section className="bg-cream-soft border-t border-ink/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-gold-deep">
                  El viaje, sección a sección
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
                  Tablón de planificación
                </h2>
                <p className="mt-4 font-display italic text-lg sm:text-xl text-ink/70 max-w-xl">
                  Iremos rellenando cada sección poco a poco.
                </p>
              </div>
              <p className="max-w-md text-ink/60 text-sm">
                Ainhoa y Germán pueden entrar cuando quieran a ver propuestas y
                novedades.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {sections.map((s, i) => {
              const meta = sectionMeta[s.slug];
              const photo = PHOTOS[s.slug];
              return (
                <Reveal key={s.slug} delay={i * 60}>
                  <Link
                    href={`/${s.slug}`}
                    className="card-soft group relative block h-full overflow-hidden rounded-2xl border border-ink/8 bg-white"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={unsplashImageUrl(photo.id, 800, 70)}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                      />
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(11,28,58,0.05) 0%, rgba(11,28,58,0.45) 100%)",
                        }}
                        aria-hidden
                      />
                      <div className="absolute left-4 bottom-4 inline-flex items-center justify-center rounded-xl border border-cream/30 bg-night/55 backdrop-blur-md p-2.5 text-gold-soft">
                        <SectionIcon slug={s.slug} size={32} decorative={false} />
                      </div>
                      <span className="absolute right-4 top-4 font-display text-[11px] tracking-[0.3em] text-cream/85">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="p-6 sm:p-7">
                      <h3 className="font-display text-2xl text-ink">
                        {meta.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink/65 leading-relaxed">
                        {s.hint}
                      </p>
                      <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-deep">
                        <span>Entrar</span>
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quiénes vamos — light, editorial */}
      <section className="bg-cream border-t border-ink/5">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xs uppercase tracking-[0.4em] text-gold-deep">
                Quiénes vamos
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
                Tres adultos, tres aventureras
              </h2>
              <p className="mt-5 font-display italic text-lg sm:text-xl text-ink/70">
                David, Ainhoa y Germán al volante. Aura, Gal·la y Èlia votando
                paradas.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PERSONS.map((p, i) => (
              <Reveal key={p.person} delay={i * 80}>
                <article className="card-soft relative h-full rounded-3xl border border-ink/8 bg-white p-8 text-center">
                  <div className="mx-auto w-fit">
                    <Avatar person={p.person} size={140} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl sm:text-3xl text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-display italic text-sm text-ink/60">
                    {p.role}
                  </p>
                  <div className="mt-6 mx-auto h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
