type Props = {
  title: string;
  description?: string;
  items?: string[];
};

export default function Placeholder({ title, description, items }: Props) {
  return (
    <div className="card-magic h-full rounded-2xl border border-ink/10 bg-white/70 backdrop-blur-sm p-6 sm:p-8 shadow-[0_1px_0_rgba(11,28,58,0.04)]">
      <h3 className="font-display text-2xl text-ink">{title}</h3>
      {description ? (
        <p className="mt-2 text-ink/70 leading-relaxed">{description}</p>
      ) : null}
      {items && items.length > 0 ? (
        <ul className="mt-4 space-y-2 text-ink/80">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gold-deep/80">
        Pendiente de concretar
      </p>
    </div>
  );
}
