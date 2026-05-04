"use client";

import { useEffect, useRef, useState } from "react";

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

type CellProps = {
  label: string;
  value: number | string;
  trigger: number | string;
};

function Cell({ label, value, trigger }: CellProps) {
  const [pulse, setPulse] = useState(false);
  const lastRef = useRef(trigger);

  useEffect(() => {
    if (lastRef.current === trigger) return;
    lastRef.current = trigger;
    setPulse(true);
    const t = window.setTimeout(() => setPulse(false), 600);
    return () => window.clearTimeout(t);
  }, [trigger]);

  return (
    <div className="rounded-2xl border border-gold/25 bg-white/5 backdrop-blur-sm px-2 py-5 sm:px-4 sm:py-7 text-center">
      <div
        className={`count-cell font-display text-4xl sm:text-6xl text-cream tabular-nums ${pulse ? "pulse" : ""}`}
        suppressHydrationWarning
      >
        {value}
      </div>
      <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cream/65">
        {label}
      </div>
    </div>
  );
}

export default function Countdown() {
  const target = new Date(DEPARTURE_ISO).getTime();
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setParts(diff(Date.now(), target));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  const d = parts?.days ?? 0;
  const h = parts ? parts.hours.toString().padStart(2, "0") : "—";
  const m = parts ? parts.minutes.toString().padStart(2, "0") : "—";
  const s = parts ? parts.seconds.toString().padStart(2, "0") : "—";

  return (
    <div className="w-full">
      <p className="text-xs uppercase tracking-[0.4em] text-gold-soft text-center mb-5">
        {parts?.past ? "Tiempo desde la salida" : "Faltan para la salida"}
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-2xl mx-auto">
        <Cell label="Días" value={parts ? d : "—"} trigger={d} />
        <Cell label="Horas" value={h} trigger={h} />
        <Cell label="Minutos" value={m} trigger={m} />
        <Cell label="Segundos" value={s} trigger={s} />
      </div>
    </div>
  );
}
