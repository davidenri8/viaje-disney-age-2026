import SectionShell from "../components/SectionShell";
import Placeholder from "../components/Placeholder";
import Reveal from "../components/Reveal";

export const metadata = { title: "Presupuesto · Viaje Disney AGE 2026" };

const cards = [
  {
    title: "Coche y combustible",
    items: [
      "Diésel/gasolina ida y vuelta (~2.500-2.800 km)",
      "Peajes Francia",
      "Aparcamiento hotel/parque",
      "Revisión previa del coche",
    ],
  },
  {
    title: "Alojamiento",
    items: [
      "Hoteles intermedios (ida y vuelta)",
      "Hotel principal en Disney (3-4 noches)",
      "Hotel en París (1 noche)",
    ],
  },
  {
    title: "Parque Disney",
    items: [
      "Entradas 6 personas × días",
      "PhotoPass (opcional)",
      "Premier Access (opcional)",
      "Cena con personajes (opcional)",
    ],
  },
  {
    title: "Comida",
    items: [
      "Desayunos (¿incluidos en hotel?)",
      "Comidas en parque (caras)",
      "Cenas externas",
      "Snacks y bebidas en coche",
    ],
  },
  {
    title: "París",
    items: [
      "Transporte público familiar",
      "Subida Torre Eiffel (opcional)",
      "Comidas",
    ],
  },
  {
    title: "Imprevistos",
    items: [
      "Souvenirs / regalos",
      "Farmacia / pequeñas compras",
      "Fondo de imprevistos (~10%)",
    ],
  },
];

export default function Presupuesto() {
  return (
    <SectionShell
      slug="presupuesto"
      intro="Estimación inicial por partidas. Cuando vayamos cerrando reservas, sustituiremos los rangos por cifras reales."
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
