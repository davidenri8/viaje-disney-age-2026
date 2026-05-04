import SectionShell from "../components/SectionShell";
import Placeholder from "../components/Placeholder";
import Reveal from "../components/Reveal";

export const metadata = { title: "Días de Disney · Viaje Disney AGE 2026" };

const cards = [
  {
    title: "Alojamiento",
    items: [
      "Opción A: Hotel oficial Disney (más caro, magic hours)",
      "Opción B: Hotel partner (Algonquin, B&B, etc.)",
      "Opción C: Apartamento cerca con coche",
      "Decidir según presupuesto y comodidad para Èlia (4)",
    ],
  },
  {
    title: "Entradas",
    items: [
      "¿3 o 4 días de parque?",
      "1 parque / 2 parques por día",
      "PhotoPass familiar (sí/no)",
      "Premier Access para atracciones top",
    ],
  },
  {
    title: "Día 1 en Disney",
    description: "Borrador de plan. Empezar suave y reconocer el parque.",
    items: [
      "Desayuno y entrada al parque",
      "Atracciones imprescindibles para Èlia",
      "Espectáculo / desfile",
      "Cena y vuelta al hotel",
    ],
  },
  {
    title: "Atracciones por edad",
    description:
      "Repasar qué puede subir Èlia (4 años, altura) y planificar relevos entre adultos.",
    items: [
      "Lista de imprescindibles para Aura (12)",
      "Imprescindibles para Gal·la (8)",
      "Restricciones de altura para Èlia (4)",
      "Atracciones aptas para todos en familia",
    ],
  },
  {
    title: "Comidas en el parque",
    items: [
      "Reservar restaurante con personajes (un día)",
      "Identificar zonas con menú infantil",
      "Llevar snacks y agua",
    ],
  },
  {
    title: "Espectáculos y fuegos",
    items: [
      "Horario de Disney Dreams! (cierre)",
      "Desfile diurno",
      "Encuentros con personajes (booking)",
    ],
  },
];

export default function Disney() {
  return (
    <SectionShell
      slug="disney"
      intro="Tres o cuatro días en los parques: la parte central del viaje. Hay que decidir alojamiento (hotel Disney vs externo), número de días y si compramos PhotoPass o Premier Access."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 80}>
            <Placeholder {...c} />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
