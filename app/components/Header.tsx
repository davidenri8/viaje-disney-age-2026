"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV: { href: string; label: string }[] = [
  { href: "/ruta-ida", label: "Ruta de ida" },
  { href: "/disney", label: "Disney" },
  { href: "/paris", label: "París" },
  { href: "/ruta-vuelta", label: "Ruta de vuelta" },
  { href: "/presupuesto", label: "Presupuesto" },
  { href: "/packing", label: "Packing" },
  { href: "/info-util", label: "Info útil" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-display text-lg sm:text-xl tracking-tight text-ink"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            aria-hidden
            className="shrink-0"
          >
            <defs>
              <radialGradient id="logoGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f5dfa8" />
                <stop offset="100%" stopColor="#c9a25a" />
              </radialGradient>
            </defs>
            <circle cx="12" cy="12" r="11" fill="#0b1c3a" />
            <polygon
              points="12,4 13.4,8.5 18.2,8.7 14.4,11.6 15.6,16.4 12,13.6 8.4,16.4 9.6,11.6 5.8,8.7 10.6,8.5"
              fill="url(#logoGrad)"
            />
          </svg>
          <span>Viaje AGE · Disney 2026</span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5 text-sm">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active ? "true" : "false"}
                className="nav-link px-3 py-1.5 rounded-full text-ink/65 hover:text-ink"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="hamburger md:hidden"
          data-open={open ? "true" : "false"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className="mobile-menu md:hidden border-t border-ink/5"
        data-open={open ? "true" : "false"}
      >
        <div>
          <ul className="px-4 py-2 flex flex-col">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-active={active ? "true" : "false"}
                    className="nav-link block px-3 py-2.5 rounded-lg text-sm text-ink/75 hover:text-ink hover:bg-ink/5"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
