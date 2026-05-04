import SectionShell from "../components/SectionShell";
import Placeholder from "../components/Placeholder";
import Reveal from "../components/Reveal";

export const metadata = { title: "Packing list · Viaje Disney AGE 2026" };

const cards = [
  {
    title: "Ropa adultos",
    items: [
      "Capas (mañanas frescas, mediodías cálidos)",
      "Chaqueta ligera impermeable",
      "Calzado cómodo para caminar mucho",
      "Algo más arreglado para la noche en París",
    ],
  },
  {
    title: "Ropa niñas",
    items: [
      "Mudas extra para Èlia (4)",
      "Disfraz Disney si quieren llevar",
      "Sudadera para las noches",
      "Chubasquero / poncho",
    ],
  },
  {
    title: "Documentación",
    items: [
      "DNI/pasaportes de los 6",
      "Tarjeta sanitaria europea",
      "Reservas impresas (hoteles, entradas)",
      "Permiso de conducir + papeles del coche",
    ],
  },
  {
    title: "Botiquín",
    items: [
      "Paracetamol/ibuprofeno adultos y niñas",
      "Tiritas, antiséptico, suero fisiológico",
      "Medicación habitual de cada uno",
      "Crema solar y after-sun",
    ],
  },
  {
    title: "Coche",
    items: [
      "Cargadores USB para todos los asientos",
      "Almohadas de viaje, mantas",
      "Bolsa para basura del coche",
      "Snacks, agua, fruta",
      "Tablets cargadas + auriculares",
    ],
  },
  {
    title: "Parque Disney",
    items: [
      "Mochila ligera diaria",
      "Botellas de agua reutilizables",
      "Powerbank",
      "Poncho lluvia plegable",
      "Crema solar",
    ],
  },
];

export default function Packing() {
  return (
    <SectionShell
      slug="packing"
      intro="Lista compartida para que ninguno olvidemos lo importante. Septiembre en París suele ser templado pero puede llover."
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
