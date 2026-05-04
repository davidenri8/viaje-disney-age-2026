import { PHOTOS, unsplashPhotoUrl, type PhotoKey } from "../lib/photos";

type Props = {
  photo: PhotoKey;
  variant?: "light" | "dark";
  className?: string;
};

export default function PhotoCredit({
  photo,
  variant = "dark",
  className = "",
}: Props) {
  const p = PHOTOS[photo];
  const text = variant === "light" ? "text-white/55" : "text-ink/45";
  const link = variant === "light" ? "hover:text-white/85" : "hover:text-ink/75";
  return (
    <a
      href={unsplashPhotoUrl(p.unsplashId)}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-[10px] uppercase tracking-[0.18em] underline-offset-2 hover:underline ${text} ${link} ${className}`}
    >
      Foto: {p.photographer} · Unsplash
    </a>
  );
}
