import SectionShell from "../components/SectionShell";
import Placeholder from "../components/Placeholder";

export const metadata = { title: "Info útil · Viaje Disney AGE 2026" };

export default function InfoUtil() {
  return (
    <SectionShell
      eyebrow="Para tener a mano"
      title="Info útil"
      intro="Pensado sobre todo en las niñas: alturas en atracciones, números de emergencia, qué hacer si nos perdemos, y trucos para que el viaje sea más fácil."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Placeholder
          title="Alturas en atracciones (Disneyland Paris)"
          description="Resumen útil para saber a qué puede subir Èlia (4 años) y planificar relevos."
          items={[
            "Sin restricción de altura: muchas en Fantasyland",
            "1.02 m mínimo: algunas montañas familiares",
            "1.20 m mínimo: atracciones más intensas",
            "1.32 m+: las más fuertes (revisar antes de ir)",
          ]}
        />
        <Placeholder
          title="Si nos perdemos en el parque"
          items={[
            "Punto de encuentro fijo del día (acordarlo cada mañana)",
            "Cada niña con tarjeta con teléfono de los adultos",
            "Foto del día de cada niña con la ropa puesta",
            "Personal Disney = uniforme oficial, fiable",
          ]}
        />
        <Placeholder
          title="Emergencias"
          items={[
            "112 (Europa): emergencias generales",
            "15: emergencias médicas Francia (SAMU)",
            "17: policía Francia",
            "Tarjeta sanitaria europea para todos",
          ]}
        />
        <Placeholder
          title="Idioma básico francés"
          items={[
            "Bonjour / Merci / S'il vous plaît",
            "Où sont les toilettes? (¿dónde están los baños?)",
            "Je voudrais... (querría...)",
            "Aidez-moi (ayúdenme)",
          ]}
        />
        <Placeholder
          title="Trucos con niñas"
          items={[
            "Bolsa sorpresa para el coche (juguetes nuevos baratos)",
            "Hacer pausas cada 2h aunque no haga falta",
            "No saturar agendas: dejar tiempo de piscina/descanso",
            "Llevar algo conocido para la cena (galletas, etc.)",
          ]}
        />
        <Placeholder
          title="Apps recomendadas"
          items={[
            "Disneyland Paris (oficial): mapa, tiempos de espera",
            "Google Maps offline (descargar zona Francia)",
            "Waze para peajes",
            "Wallet con entradas y reservas",
          ]}
        />
      </div>
    </SectionShell>
  );
}
