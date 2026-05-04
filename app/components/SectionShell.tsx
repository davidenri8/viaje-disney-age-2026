import Image from "next/image";
import Link from "next/link";
import SectionIcon, { sectionMeta, type SectionSlug } from "./SectionIcon";
import PhotoCredit from "./PhotoCredit";
import { PHOTOS, unsplashImageUrl } from "../lib/photos";

type Props = {
  slug: SectionSlug;
  intro?: string;
  children: React.ReactNode;
};

export default function SectionShell({ slug, intro, children }: Props) {
  const meta = sectionMeta[slug];
  const photo = PHOTOS[slug];

  return (
    <>
      <section className="relative isolate overflow-hidden text-cream min-h-[52svh] sm:min-h-[56svh] flex items-center bg-[#060f24]">
        <Image
          src={unsplashImageUrl(photo.id, 2000, 75)}
          alt={photo.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,15,36,0.55) 0%, rgba(6,15,36,0.65) 50%, rgba(6,15,36,0.85) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 35%, rgba(3,8,20,0.45) 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24 text-center w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-gold-soft hover:text-cream transition-colors"
          >
            <span aria-hidden>←</span> Volver al inicio
          </Link>

          <div className="mt-10 inline-flex items-center justify-center rounded-2xl border border-cream/15 bg-night/35 backdrop-blur-md p-5 text-gold-soft shadow-[0_20px_60px_-30px_rgba(245,223,168,0.35)]">
            <SectionIcon slug={slug} size={72} decorative={false} />
          </div>

          <p className="mt-8 text-[11px] uppercase tracking-[0.45em] text-gold-soft">
            {meta.eyebrow}
          </p>
          <h1
            className="mt-4 font-display text-5xl sm:text-7xl leading-[1.05] tracking-tight"
            style={{ textShadow: "0 4px 28px rgba(3,8,20,0.55)" }}
          >
            {meta.title}
          </h1>
          <p
            className="mt-5 max-w-2xl mx-auto font-display italic text-xl sm:text-2xl text-cream/85 leading-snug"
            style={{ textShadow: "0 2px 16px rgba(3,8,20,0.7)" }}
          >
            {meta.subtitle}
          </p>
          {intro ? (
            <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-cream/75 leading-relaxed">
              {intro}
            </p>
          ) : null}
        </div>

        <PhotoCredit
          photo={slug}
          variant="light"
          className="absolute right-4 bottom-3 sm:right-6 sm:bottom-4 z-10"
        />
      </section>

      <div className="bg-cream">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">
          {children}
        </div>
      </div>
    </>
  );
}
