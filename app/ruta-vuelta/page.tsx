import SectionShell from "../components/SectionShell";
import Placeholder from "../components/Placeholder";

export const metadata = { title: "Ruta de vuelta · Viaje Disney AGE 2026" };

export default function RutaVuelta() {
  return (
    <SectionShell
      eyebrow="Etapa 4"
      title="Ruta de vuelta"
      intro="Volver a casa con tiempo y, si encaja, alguna parada bonita por el camino para que el viaje no termine de golpe."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Placeholder
          title="Día de vuelta · etapa 1"
          items={[
            "Salida de París / Disney",
            "Posible parada turística (¿Lyon? ¿Aviñón? ¿playa de Camargue?)",
            "Hotel intermedio",
          ]}
        />
        <Placeholder
          title="Día de vuelta · etapa 2"
          items={[
            "Etapa final hasta casa",
            "Hora prevista de llegada",
            "Cena tranquila en casa",
          ]}
        />
        <Placeholder
          title="Ideas de parada bonita"
          items={[
            "Carcassonne (ciudad medieval)",
            "Annecy (lago alpino)",
            "Lyon centro histórico",
            "Costa azul / Mediterráneo",
          ]}
        />
        <Placeholder
          title="Pendientes"
          items={[
            "Decidir si volvemos por la misma ruta o cambiamos",
            "Reservar hotel intermedio",
            "Margen para imprevistos",
          ]}
        />
      </div>
    </SectionShell>
  );
}
