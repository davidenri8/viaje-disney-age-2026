"use client";

import { useEffect, useState } from "react";

const DEPARTURE_ISO = "2026-08-28T08:00:00+02:00";

type Parts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  past: boolean;
};

function diff(now: number, target: number): Parts {
  const ms = target - now;
  const past = ms < 0;
  const abs = Math.abs(ms);
  const days = Math.floor(abs / 86_400_000);
  const hours = Math.floor((abs % 86_400_000) / 3_600_000);
  const minutes = Math.floor((abs % 3_600_000) / 60_000);
  const seconds = Math.floor((abs % 60_000) / 1000);
  return { days, hours, minutes, seconds, past };
}

export default function Countdown() {
  const target = new Date(DEPARTURE_ISO).getTime();
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(diff(Date.now(), target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const items: { label: string; value: number | string }[] = parts
    ? [
        { label: "Días", value: parts.days },
        { label: "Horas", value: parts.hours.toString().padStart(2, "0") },
        { label: "Minutos", value: parts.minutes.toString().padStart(2, "0") },
        { label: "Segundos", value: parts.seconds.toString().padStart(2, "0") },
      ]
    : [
        { label: "Días", value: "—" },
        { label: "Horas", value: "—" },
        { label: "Minutos", value: "—" },
        { label: "Segundos", value: "—" },
      ];

  return (
    <div className="w-full">
      <p className="text-xs uppercase tracking-[0.3em] text-gold-soft/90 text-center mb-4">
        {parts?.past ? "Tiempo desde la salida" : "Faltan para la salida"}
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto">
        {items.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-gold/20 bg-white/5 backdrop-blur-sm px-2 py-4 sm:px-4 sm:py-6 text-center"
          >
            <div
              className="font-display text-3xl sm:text-5xl text-cream tabular-nums"
              suppressHydrationWarning
            >
              {item.value}
            </div>
            <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cream/60">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
