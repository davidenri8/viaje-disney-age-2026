import Image from "next/image";
import Link from "next/link";
import Countdown from "./Countdown";
import PhotoCredit from "./PhotoCredit";
import { PHOTOS, unsplashImageUrl } from "../lib/photos";

const subtleParticles = [
  { left: 12, top: 20, size: 3, dur: 14, delay: 0, dx: 5, op: 0.45 },
  { left: 28, top: 70, size: 2, dur: 16, delay: 2.6, dx: -4, op: 0.35 },
  { left: 50, top: 30, size: 3, dur: 18, delay: 1.2, dx: 6, op: 0.5 },
  { left: 68, top: 60, size: 2, dur: 15, delay: 3.4, dx: -5, op: 0.4 },
  { left: 82, top: 22, size: 3, dur: 17, delay: 0.8, dx: 4, op: 0.45 },
  { left: 90, top: 78, size: 2, dur: 14, delay: 2.2, dx: -3, op: 0.35 },
];

export default function Hero() {
  const p = PHOTOS.hero;
  return (
    <section className="relative isolate overflow-hidden text-cream min-h-[92svh] flex items-center bg-[#060f24]">
      <Image
        src={unsplashImageUrl(p.id, 2400, 75)}
        alt={p.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Top→bottom dark gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,15,36,0.50) 0%, rgba(6,15,36,0.65) 45%, rgba(6,15,36,0.88) 100%)",
        }}
        aria-hidden
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, transparent 35%, rgba(3,8,20,0.55) 100%)",
        }}
        aria-hidden
      />

      {/* Subtle gold particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {subtleParticles.map((p, i) => (
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

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 py-20 sm:py-28 text-center w-full">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.5em] text-gold-soft drop-shadow-[0_1px_8px_rgba(6,15,36,0.6)]">
          Road trip familiar · Catalunya → París
        </p>

        <h1
          className="mt-7 font-display text-5xl sm:text-7xl md:text-[clamp(4rem,8vw,7.5rem)] leading-[1.02] tracking-tight"
          style={{ textShadow: "0 4px 28px rgba(3,8,20,0.55)" }}
        >
          Viaje a{" "}
          <span className="bg-gradient-to-r from-gold-soft via-cream to-gold-soft bg-clip-text text-transparent">
            Disneyland
          </span>{" "}
          Paris
        </h1>

        <p
          className="mt-6 max-w-2xl mx-auto font-display italic text-xl sm:text-2xl text-cream/90 leading-snug"
          style={{ textShadow: "0 2px 16px rgba(3,8,20,0.7)" }}
        >
          Doce días para crear recuerdos con Aura, Gal·la y Èlia.
        </p>
        <p className="mt-3 max-w-xl mx-auto text-cream/70 text-sm sm:text-base leading-relaxed">
          Carretera, castillos, torres y todo lo que se nos ocurra por el
          camino.
        </p>

        <div className="mt-12 sm:mt-14">
          <div className="rounded-3xl bg-night/35 backdrop-blur-md border border-cream/10 px-3 sm:px-6 py-6 sm:py-8 max-w-2xl mx-auto">
            <Countdown />
          </div>
          <p className="mt-6 text-center text-[11px] uppercase tracking-[0.4em] text-cream/55">
            Salida prevista · 28 de agosto de 2026
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/disney"
            className="btn-magic inline-flex items-center gap-2 rounded-full bg-gold text-night px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-gold-soft"
          >
            Ver plan de Disney
          </Link>
          <Link
            href="/ruta-ida"
            className="btn-magic inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-sm tracking-wide text-cream hover:bg-cream/10"
          >
            Empezar por la ruta
          </Link>
        </div>
      </div>

      <PhotoCredit
        photo="hero"
        variant="light"
        className="absolute right-4 bottom-3 sm:right-6 sm:bottom-4 z-10"
      />
    </section>
  );
}
