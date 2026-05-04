import SectionShell from "../components/SectionShell";
import Placeholder from "../components/Placeholder";

export const metadata = { title: "Día en París · Viaje Disney AGE 2026" };

export default function Paris() {
  return (
    <SectionShell
      eyebrow="Etapa 3"
      title="Día en París"
      intro="Un día completo en la ciudad después de Disney. Torre Eiffel sí o sí, y ver qué más entra sin agobiar a las niñas."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Placeholder
          title="Imprescindibles"
          items={[
            "Torre Eiffel (decidir si subir o solo verla desde Trocadero)",
            "Foto familiar bonita",
            "Crepe / chocolate caliente parisino",
          ]}
        />
        <Placeholder
          title="Otros monumentos"
          items={[
            "Arco del Triunfo",
            "Champs-Élysées (paseo corto)",
            "Notre Dame por fuera",
            "Louvre por fuera + pirámide",
          ]}
        />
        <Placeholder
          title="Cómo movernos"
          items={[
            "¿Coche aparcado en hotel + metro/RER?",
            "Pase familiar de transporte",
            "Itinerario a pie compatible con Èlia",
          ]}
        />
        <Placeholder
          title="Comer en París"
          items={[
            "Bistro tradicional para mediodía",
            "Plan B kid-friendly (pizza/burger)",
            "Picnic en los jardines del Trocadero o Champs de Mars",
          ]}
        />
      </div>
    </SectionShell>
  );
}
