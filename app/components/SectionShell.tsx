import Link from "next/link";
import SectionIcon, { sectionMeta, type SectionSlug } from "./SectionIcon";

type Props = {
  slug: SectionSlug;
  intro?: string;
  children: React.ReactNode;
};

const bannerParticles = [
  { left: 8, top: 28, size: 4, dur: 9, delay: 0, dx: 5, op: 0.7 },
  { left: 18, top: 60, size: 3, dur: 11, delay: 1.4, dx: -6, op: 0.6 },
  { left: 32, top: 18, size: 5, dur: 12, delay: 0.5, dx: 7, op: 0.8 },
  { left: 46, top: 70, size: 3, dur: 10, delay: 2, dx: -4, op: 0.55 },
  { left: 60, top: 22, size: 4, dur: 8, delay: 1.1, dx: 6, op: 0.7 },
  { left: 72, top: 64, size: 5, dur: 13, delay: 0.3, dx: -5, op: 0.85 },
  { left: 86, top: 32, size: 3, dur: 9, delay: 1.7, dx: 8, op: 0.6 },
  { left: 92, top: 76, size: 4, dur: 11, delay: 0.8, dx: -3, op: 0.65 },
];

export default function SectionShell({ slug, intro, children }: Props) {
  const meta = sectionMeta[slug];

  return (
    <>
      <section className="relative section-banner text-cream overflow-hidden">
        <div className="absolute inset-0 starfield opacity-25 pointer-events-none" aria-hidden />
        <div className="absolute -top-32 -right-24 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-ink-soft/40 blur-3xl pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          {bannerParticles.map((p, i) => (
            <span
              key={i}
              className="particle"
              style={
                {
                  left: `${p.left}%`,
                  top: `${p.top}%`,
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

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 pt-10 pb-20 sm:pt-14 sm:pb-28">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold-soft hover:text-cream transition-colors"
          >
            <span aria-hidden>←</span> Volver al inicio
          </Link>

          <div className="mt-12 grid md:grid-cols-[auto_1fr] items-start gap-8 sm:gap-12">
            <div className="text-gold-soft shrink-0 rounded-3xl border border-gold/25 bg-white/5 backdrop-blur-sm p-5 sm:p-7 shadow-[0_20px_60px_-30px_rgba(245,223,168,0.4)]">
              <SectionIcon slug={slug} size={120} decorative={false} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">
                {meta.eyebrow}
              </p>
              <h1 className="mt-3 font-display text-5xl sm:text-7xl leading-[1.05] tracking-tight">
                {meta.title}
              </h1>
              <p className="mt-4 font-display italic text-xl sm:text-2xl text-cream/80 leading-snug max-w-2xl">
                {meta.subtitle}
              </p>
              {intro ? (
                <p className="mt-5 max-w-2xl text-base sm:text-lg text-cream/70 leading-relaxed">
                  {intro}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="gold-divider mb-12" />
        {children}
      </div>
    </>
  );
}
