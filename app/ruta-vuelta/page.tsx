import SectionShell from "../components/SectionShell";
import Placeholder from "../components/Placeholder";
import Reveal from "../components/Reveal";

export const metadata = { title: "Ruta de vuelta · Viaje Disney AGE 2026" };

const cards = [
  {
    title: "Día de vuelta · etapa 1",
    items: [
      "Salida de París / Disney",
      "Posible parada turística (¿Lyon? ¿Aviñón? ¿Camargue?)",
      "Hotel intermedio",
    ],
  },
  {
    title: "Día de vuelta · etapa 2",
    items: [
      "Etapa final hasta casa",
      "Hora prevista de llegada",
      "Cena tranquila en casa",
    ],
  },
  {
    title: "Ideas de parada bonita",
    items: [
      "Carcassonne (ciudad medieval)",
      "Annecy (lago alpino)",
      "Lyon centro histórico",
      "Costa azul / Mediterráneo",
    ],
  },
  {
    title: "Pendientes",
    items: [
      "¿Volvemos por la misma ruta o cambiamos?",
      "Reservar hotel intermedio",
      "Margen para imprevistos",
    ],
  },
];

export default function RutaVuelta() {
  return (
    <SectionShell
      slug="ruta-vuelta"
      intro="Volver a casa con tiempo y, si encaja, alguna parada bonita por el camino para que el viaje no termine de golpe."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <Placeholder {...c} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
