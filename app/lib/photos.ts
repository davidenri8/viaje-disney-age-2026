import type { SectionSlug } from "../components/SectionIcon";

export type PhotoKey =
  | "hero"
  | "recorrido"
  | SectionSlug
  | "presupuesto"
  | "packing"
  | "info-util";

type Photo = {
  id: string;
  alt: string;
  photographer: string;
  unsplashId: string;
};

export const PHOTOS: Record<PhotoKey, Photo> = {
  hero: {
    id: "photo-1685134491306-4151f0a6e7f0",
    alt: "Castillo de Disneyland Paris iluminado de noche con fuegos artificiales",
    photographer: "Damian Kamp",
    unsplashId: "8NG9TbflG3A",
  },
  recorrido: {
    id: "photo-1631723626854-1455e9ee13f6",
    alt: "Vista aérea de las Gorges de Galamus en el sur de Francia, una carretera serpenteante a través del bosque",
    photographer: "Daniel Sofinet",
    unsplashId: "l45wA3iYK0Q",
  },
  "ruta-ida": {
    id: "photo-1526361474374-7feb72434ae5",
    alt: "Carretera vacía cruzando praderas bajo un cielo dramático",
    photographer: "Alex Forestier",
    unsplashId: "KLFdgHxOgPM",
  },
  disney: {
    id: "photo-1598628080678-88847056ebfe",
    alt: "Noria iluminada junto al agua durante la noche",
    photographer: "Umanoide",
    unsplashId: "OWifAzidf0g",
  },
  paris: {
    id: "photo-1637851058613-95f0d41c3c2f",
    alt: "Torre Eiffel dominando el skyline de París al atardecer con el Sena al fondo",
    photographer: "Bastien Nvs",
    unsplashId: "FIyk3oGs118",
  },
  "ruta-vuelta": {
    id: "photo-1762809675965-9c60ecb1d5d6",
    alt: "Coche en carretera al atardecer con luz dorada filtrándose entre árboles",
    photographer: "Donnie Rosie",
    unsplashId: "WbjtAqSZ4Eg",
  },
  presupuesto: {
    id: "photo-1503220954697-e02095e8e0d5",
    alt: "Cámara vintage descansando sobre un mapa abierto",
    photographer: "Chris Lawton",
    unsplashId: "yRf7ABVDddM",
  },
  packing: {
    id: "photo-1673505705715-8deb093d39e8",
    alt: "Maleta abierta con ropa cuidadosamente ordenada",
    photographer: "Cyberbackpack",
    unsplashId: "Fe-EicoR13s",
  },
  "info-util": {
    id: "photo-1575998256921-f3ef8ebdabef",
    alt: "Brújula dorada sobre un mapa vintage",
    photographer: "Denise Jans",
    unsplashId: "J7mkFHkahj8",
  },
};

const UTM = "utm_source=viaje-disney-age-2026&utm_medium=referral";

export function unsplashImageUrl(id: string, w: number, q = 80): string {
  return `https://images.unsplash.com/${id}?w=${w}&q=${q}&auto=format&fit=crop`;
}

export function unsplashPhotoUrl(unsplashId: string): string {
  return `https://unsplash.com/photos/${unsplashId}?${UTM}`;
}
