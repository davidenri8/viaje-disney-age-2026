import Image from "next/image";
import PhotoCredit from "./PhotoCredit";
import Reveal from "./Reveal";
import { PHOTOS, unsplashImageUrl } from "../lib/photos";

const milestones: { range: string; label: string }[] = [
  { range: "Día 1–2", label: "Salida y carretera" },
  { range: "Día 3", label: "Llegada a Disney" },
  { range: "Día 4–7", label: "Disneyland Paris" },
  { range: "Día 8", label: "Día en París" },
  { range: "Día 9–12", label: "Vuelta a casa" },
];

export default function Recorrido() {
  const p = PHOTOS.recorrido;
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] rounded-3xl overflow-hidden shadow-[0_30px_80px_-40px_rgba(11,28,58,0.35)]">
              <Image
                src={unsplashImageUrl(p.id, 1600, 80)}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,28,58,0) 60%, rgba(11,28,58,0.18) 100%)",
                }}
                aria-hidden
              />
              <PhotoCredit
                photo="recorrido"
                variant="light"
                className="absolute right-3 bottom-2"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <p className="text-xs uppercase tracking-[0.35em] text-gold-deep">
              Visión general
            </p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
              El recorrido
            </h2>
            <p className="mt-5 font-display italic text-xl sm:text-2xl text-ink/75 leading-snug">
              Catalunya → París · 12 días · paradas por definir.
            </p>
            <p className="mt-5 text-base sm:text-lg text-ink/70 leading-relaxed">
              Subimos por la costa francesa hacia el norte, hacemos base en
              Disney, escapada a la torre Eiffel y volvemos por el camino largo.
              Sin prisa, parando donde apetezca.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-16 sm:mt-24" delay={240}>
          <div className="relative">
            <div className="hidden sm:block absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
            <ol className="grid grid-cols-2 sm:grid-cols-5 gap-y-10 gap-x-6 relative">
              {milestones.map((m, i) => (
                <li
                  key={m.label}
                  className="relative flex flex-col items-center text-center"
                >
                  <span
                    aria-hidden
                    className="relative inline-flex items-center justify-center h-4 w-4 rounded-full bg-cream ring-1 ring-gold-deep/40 z-10 mb-4"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  <span className="font-display text-xs uppercase tracking-[0.3em] text-gold-deep">
                    {m.range}
                  </span>
                  <span className="mt-2 font-display italic text-base sm:text-lg text-ink/85">
                    {m.label}
                  </span>
                  {i < milestones.length - 1 ? (
                    <span className="sm:hidden absolute left-1/2 -translate-x-1/2 top-full h-6 w-px bg-gold/40" />
                  ) : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
