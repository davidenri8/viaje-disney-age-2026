import SectionShell from "../components/SectionShell";
import Placeholder from "../components/Placeholder";

export const metadata = { title: "Presupuesto · Viaje Disney AGE 2026" };

export default function Presupuesto() {
  return (
    <SectionShell
      eyebrow="Cuentas"
      title="Presupuesto"
      intro="Estimación inicial por partidas. Cuando vayamos cerrando reservas, sustituiremos las cifras por reales."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Placeholder
          title="Coche y combustible"
          items={[
            "Diésel/gasolina ida y vuelta (~2.500-2.800 km)",
            "Peajes Francia",
            "Aparcamiento hotel/parque",
            "Revisión previa del coche",
          ]}
        />
        <Placeholder
          title="Alojamiento"
          items={[
            "Hoteles intermedios (ida y vuelta)",
            "Hotel principal en Disney (3-4 noches)",
            "Hotel en París (1 noche)",
          ]}
        />
        <Placeholder
          title="Parque Disney"
          items={[
            "Entradas 6 personas × días",
            "PhotoPass (opcional)",
            "Premier Access (opcional)",
            "Cena con personajes (opcional)",
          ]}
        />
        <Placeholder
          title="Comida"
          items={[
            "Desayunos (incluidos en hotel?)",
            "Comidas en parque (caras)",
            "Cenas externas",
            "Snacks y bebidas en coche",
          ]}
        />
        <Placeholder
          title="París"
          items={[
            "Transporte público familiar",
            "Subida Torre Eiffel (opcional)",
            "Comidas",
          ]}
        />
        <Placeholder
          title="Imprevistos"
          items={[
            "Souvenirs / regalos",
            "Farmacia / pequeñas compras",
            "Fondo de imprevistos (~10%)",
          ]}
        />
      </div>
    </SectionShell>
  );
}
