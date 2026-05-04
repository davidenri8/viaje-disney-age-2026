import SectionShell from "../components/SectionShell";
import Placeholder from "../components/Placeholder";

export const metadata = { title: "Días de Disney · Viaje Disney AGE 2026" };

export default function Disney() {
  return (
    <SectionShell
      eyebrow="Etapa 2"
      title="Días de Disney"
      intro="3-4 días en los parques. La parte central del viaje. Hay que decidir alojamiento (hotel Disney vs externo), número de días y si compramos PhotoPass o Premier Access."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Placeholder
          title="Alojamiento"
          items={[
            "Opción A: Hotel oficial Disney (más caro, magic hours)",
            "Opción B: Hotel partner (Algonquin, B&B, etc.)",
            "Opción C: Apartamento cerca con coche",
            "Decidir según presupuesto y comodidad para Èlia (4)",
          ]}
        />
        <Placeholder
          title="Entradas"
          items={[
            "¿3 o 4 días de parque?",
            "1 parque / 2 parques por día",
            "PhotoPass familiar (sí/no)",
            "Premier Access para atracciones top",
          ]}
        />
        <Placeholder
          title="Día 1 en Disney"
          description="Borrador de plan. Empezar suave y reconocer el parque."
          items={[
            "Desayuno y entrada al parque",
            "Atracciones imprescindibles para Èlia",
            "Espectáculo / desfile",
            "Cena y vuelta al hotel",
          ]}
        />
        <Placeholder
          title="Atracciones por edad"
          description="Repasar qué puede subir Èlia (4 años, altura) y planificar relevos entre adultos."
          items={[
            "Lista de imprescindibles para Aura (12)",
            "Imprescindibles para Gal·la (8)",
            "Restricciones de altura para Èlia (4)",
            "Atracciones aptas para todos en familia",
          ]}
        />
        <Placeholder
          title="Comidas en el parque"
          items={[
            "Reservar restaurante con personajes (un día)",
            "Identificar zonas con menú infantil",
            "Llevar snacks y agua",
          ]}
        />
        <Placeholder
          title="Espectáculos y fuegos"
          items={[
            "Horario de Disney Dreams! (cierre)",
            "Desfile diurno",
            "Encuentros con personajes (booking)",
          ]}
        />
      </div>
    </SectionShell>
  );
}
