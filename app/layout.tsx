import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viaje Disney AGE · Septiembre 2026",
  description:
    "Tablón colaborativo del road trip familiar a Disneyland Paris (28 agosto – 8 septiembre 2026). Ainhoa, Germán, David, Aura, Gal·la y Èlia.",
};

const navItems: { href: string; label: string }[] = [
  { href: "/", label: "Inicio" },
  { href: "/ruta-ida", label: "Ruta de ida" },
  { href: "/disney", label: "Disney" },
  { href: "/paris", label: "París" },
  { href: "/ruta-vuelta", label: "Ruta de vuelta" },
  { href: "/presupuesto", label: "Presupuesto" },
  { href: "/packing", label: "Packing list" },
  { href: "/info-util", label: "Info útil" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-ink">
        <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/85 backdrop-blur supports-[backdrop-filter]:bg-cream/70">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 font-display text-lg sm:text-xl tracking-tight text-ink"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-gold" />
              <span>Viaje AGE · Disney 2026</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1 text-sm">
              {navItems.slice(1).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 rounded-full text-ink/70 hover:text-ink hover:bg-ink/5 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <nav className="md:hidden border-t border-ink/5 overflow-x-auto">
            <ul className="flex gap-1 px-4 py-2 text-xs whitespace-nowrap">
              {navItems.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block px-3 py-1.5 rounded-full text-ink/70 hover:text-ink hover:bg-ink/5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-ink/10 bg-cream-soft">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm text-ink/60 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p>
              Tablón familiar — David, Ainhoa, Germán, Aura, Gal·la y Èlia
            </p>
            <p className="font-display tracking-wide text-gold-deep">
              28 agosto – 8 septiembre 2026
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
