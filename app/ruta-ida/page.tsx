import SectionShell from "../components/SectionShell";
import Placeholder from "../components/Placeholder";

export const metadata = { title: "Ruta de ida · Viaje Disney AGE 2026" };

export default function RutaIda() {
  return (
    <SectionShell
      eyebrow="Etapa 1"
      title="Ruta de ida"
      intro="De Catalunya a Marne-la-Vallée. Repartiendo los kilómetros en etapas cómodas para hacer el viaje llevadero con las niñas."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Placeholder
          title="Día 1 · 28 agosto"
          description="Salida de casa. Primera etapa hasta zona del sur de Francia (por concretar)."
          items={[
            "Hora de salida (¿temprano? ¿después de comer?)",
            "Parada para comer / pic-nic",
            "Ciudad de fin de etapa y hotel",
          ]}
        />
        <Placeholder
          title="Día 2 · 29 agosto"
          description="Segunda etapa. Posible parada turística por el camino para romper la tirada."
          items={[
            "Ruta concreta y kilómetros",
            "Parada bonita para estirar piernas",
            "Hotel cerca de Disney o llegada directa",
          ]}
        />
        <Placeholder
          title="Logística del coche"
          items={[
            "Revisar coche antes de salir (aceite, ruedas, A/C)",
            "Vignettes / peajes franceses",
            "Cargadores, snacks, almohadas, tablets",
            "Lista de podcasts y playlists",
          ]}
        />
        <Placeholder
          title="Decisiones por tomar"
          items={[
            "¿Una sola etapa larga o dos cortas?",
            "¿Llegar el día anterior a Disney para descansar?",
            "Reservar hotel intermedio con piscina para las peques",
          ]}
        />
      </div>
    </SectionShell>
  );
}
