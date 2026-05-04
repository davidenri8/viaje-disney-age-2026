import SectionShell from "../components/SectionShell";
import Placeholder from "../components/Placeholder";
import Reveal from "../components/Reveal";

export const metadata = { title: "Día en París · Viaje Disney AGE 2026" };

const cards = [
  {
    title: "Imprescindibles",
    items: [
      "Torre Eiffel (decidir si subir o solo verla desde Trocadero)",
      "Foto familiar bonita",
      "Crepe / chocolate caliente parisino",
    ],
  },
  {
    title: "Otros monumentos",
    items: [
      "Arco del Triunfo",
      "Champs-Élysées (paseo corto)",
      "Notre Dame por fuera",
      "Louvre por fuera + pirámide",
    ],
  },
  {
    title: "Cómo movernos",
    items: [
      "¿Coche aparcado en hotel + metro/RER?",
      "Pase familiar de transporte",
      "Itinerario a pie compatible con Èlia",
    ],
  },
  {
    title: "Comer en París",
    items: [
      "Bistro tradicional para mediodía",
      "Plan B kid-friendly (pizza/burger)",
      "Picnic en Trocadero o Champs de Mars",
    ],
  },
];

export default function Paris() {
  return (
    <SectionShell
      slug="paris"
      intro="Un día completo en la ciudad después de Disney. La idea es no agobiarnos: ver lo importante con calma, compatible con caminar de Èlia."
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
