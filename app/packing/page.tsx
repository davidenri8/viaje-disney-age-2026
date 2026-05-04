import SectionShell from "../components/SectionShell";
import Placeholder from "../components/Placeholder";

export const metadata = { title: "Packing list · Viaje Disney AGE 2026" };

export default function Packing() {
  return (
    <SectionShell
      eyebrow="Equipaje"
      title="Packing list"
      intro="Lista compartida para que ninguno nos olvidemos lo importante. Septiembre en París suele ser templado pero puede llover."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Placeholder
          title="Ropa adultos"
          items={[
            "Capas (mañanas frescas, mediodías cálidos)",
            "Chaqueta ligera impermeable",
            "Calzado cómodo para caminar mucho",
            "Algo más arreglado para la noche en París",
          ]}
        />
        <Placeholder
          title="Ropa niñas"
          items={[
            "Mudas extra para Èlia (4)",
            "Disfraz Disney si quieren llevar",
            "Sudadera para las noches",
            "Chubasquero / poncho",
          ]}
        />
        <Placeholder
          title="Documentación"
          items={[
            "DNI/pasaportes de los 6",
            "Tarjeta sanitaria europea",
            "Reservas impresas (hoteles, entradas)",
            "Permiso de conducir + papeles del coche",
          ]}
        />
        <Placeholder
          title="Botiquín"
          items={[
            "Paracetamol/ibuprofeno adultos y niñas",
            "Tiritas, antiséptico, suero fisiológico",
            "Medicación habitual de cada uno",
            "Crema solar y after-sun",
          ]}
        />
        <Placeholder
          title="Coche"
          items={[
            "Cargadores USB para todos los asientos",
            "Almohadas de viaje, mantas",
            "Bolsa para basura del coche",
            "Snacks, agua, fruta",
            "Tablets cargadas + auriculares",
          ]}
        />
        <Placeholder
          title="Parque Disney"
          items={[
            "Mochila ligera diaria",
            "Botellas de agua reutilizables",
            "Powerbank",
            "Poncho lluvia plegable",
            "Crema solar",
          ]}
        />
      </div>
    </SectionShell>
  );
}
