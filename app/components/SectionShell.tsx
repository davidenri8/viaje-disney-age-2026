import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export default function SectionShell({ eyebrow, title, intro, children }: Props) {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-deep hover:text-ink transition-colors"
      >
        <span aria-hidden>←</span> Volver al inicio
      </Link>
      <p className="mt-8 text-xs uppercase tracking-[0.3em] text-gold-deep">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-6xl text-ink">
        {title}
      </h1>
      {intro ? (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-ink/70 leading-relaxed">
          {intro}
        </p>
      ) : null}
      <div className="gold-divider mt-8 mb-10" />
      {children}
    </div>
  );
}
