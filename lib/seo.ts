import type { Metadata } from "next";

export const SITE_URL = "https://www.villapanoramaistria.com";
export const SITE_NAME = "Villa Panorama";
export const OG_IMAGE = `${SITE_URL}/assets/images/outside/27.jpg`;
export const locales = ["en", "de", "hr", "it"] as const;
export type AppLocale = (typeof locales)[number];

const defaultTitles: Record<AppLocale, string> = {
  en: "Villa Panorama | Luxury Vacation Villa in Istria",
  de: "Villa Panorama | Luxuriöse Ferienvilla in Istrien",
  hr: "Villa Panorama | Luksuzna vila za odmor u Istri",
  it: "Villa Panorama | Villa vacanze di lusso in Istria",
};

const defaultDescriptions: Record<AppLocale, string> = {
  en: "Luxury villa accommodation in Istria with private pool, panoramic views, premium amenities, and easy access to local attractions.",
  de: "Luxuriöse Villa in Istrien mit privatem Pool, Panoramablick, hochwertigen Annehmlichkeiten und Nähe zu lokalen Sehenswürdigkeiten.",
  hr: "Luksuzni smještaj u Istri s privatnim bazenom, panoramskim pogledom, vrhunskim sadržajima i blizinom atrakcija.",
  it: "Alloggio di lusso in Istria con piscina privata, vista panoramica, comfort premium e facile accesso alle attrazioni locali.",
};

type PageKey = "home" | "contact" | "environs" | "photogallery" | "pricelist" | "villa-panorama";

const pageCopy: Record<PageKey, Record<AppLocale, { title: string; description: string }>> = {
  home: Object.fromEntries(locales.map((locale) => [locale, { title: defaultTitles[locale], description: defaultDescriptions[locale] }])) as Record<AppLocale, { title: string; description: string }>,
  contact: {
    en: { title: "Contact | Villa Panorama", description: "Contact Villa Panorama for availability, booking details, and personalized stay information in Istria." },
    de: { title: "Kontakt | Villa Panorama", description: "Kontaktieren Sie Villa Panorama für Verfügbarkeit, Buchungsdetails und persönliche Infos zu Ihrem Aufenthalt." },
    hr: { title: "Kontakt | Villa Panorama", description: "Kontaktirajte Villa Panorama za dostupnost, detalje rezervacije i personalizirane informacije o boravku." },
    it: { title: "Contatti | Villa Panorama", description: "Contatta Villa Panorama per disponibilità, dettagli prenotazione e informazioni personalizzate sul soggiorno." },
  },
  environs: {
    en: { title: "Environs | Villa Panorama", description: "Discover nearby beaches, cultural landmarks, restaurants, and must-visit places around Villa Panorama in Istria." },
    de: { title: "Umgebung | Villa Panorama", description: "Entdecken Sie Strände, Sehenswürdigkeiten, Restaurants und Ausflugsziele rund um Villa Panorama in Istrien." },
    hr: { title: "Okolica | Villa Panorama", description: "Otkrijte obližnje plaže, znamenitosti, restorane i mjesta koja vrijedi posjetiti oko Ville Panorama u Istri." },
    it: { title: "Dintorni | Villa Panorama", description: "Scopri spiagge, luoghi culturali, ristoranti e località da visitare nei dintorni di Villa Panorama in Istria." },
  },
  photogallery: {
    en: { title: "Photo Gallery | Villa Panorama", description: "Browse the Villa Panorama photo gallery and explore interiors, exteriors, and the surrounding Istrian landscape." },
    de: { title: "Fotogalerie | Villa Panorama", description: "Durchstöbern Sie die Fotogalerie von Villa Panorama mit Innen- und Außenbereichen sowie der istrischen Umgebung." },
    hr: { title: "Foto galerija | Villa Panorama", description: "Pregledajte foto galeriju Ville Panorama i istražite interijer, eksterijer i okoliš Istre." },
    it: { title: "Galleria fotografica | Villa Panorama", description: "Sfoglia la galleria fotografica di Villa Panorama con interni, esterni e paesaggi dell'Istria." },
  },
  pricelist: {
    en: { title: "Price List | Villa Panorama", description: "View Villa Panorama rates, payment conditions, and reservation details for your stay in Istria." },
    de: { title: "Preisliste | Villa Panorama", description: "Sehen Sie Preise, Zahlungsbedingungen und Reservierungsdetails für Ihren Aufenthalt in Istrien." },
    hr: { title: "Cjenik | Villa Panorama", description: "Pogledajte cijene, uvjete plaćanja i detalje rezervacije za boravak u Istri." },
    it: { title: "Listino prezzi | Villa Panorama", description: "Consulta tariffe, condizioni di pagamento e dettagli di prenotazione per il tuo soggiorno in Istria." },
  },
  "villa-panorama": {
    en: { title: "Villa Panorama Details | Villa Panorama", description: "Explore accommodation details, amenities, features, gallery, and location details of Villa Panorama." },
    de: { title: "Villa Panorama Details | Villa Panorama", description: "Entdecken Sie Unterkunftsdetails, Ausstattung, Galerie und Lageinformationen von Villa Panorama." },
    hr: { title: "Detalji vile | Villa Panorama", description: "Istražite detalje smještaja, sadržaje, galeriju i lokaciju Ville Panorama." },
    it: { title: "Dettagli villa | Villa Panorama", description: "Scopri dettagli alloggio, servizi, galleria e posizione di Villa Panorama." },
  },
};

export function createPageMetadata(locale: string, page: PageKey, path = ""): Metadata {
  const safeLocale = locales.includes(locale as AppLocale) ? (locale as AppLocale) : "en";
  const copy = pageCopy[page][safeLocale];
  const normalizedPath = path ? `/${safeLocale}/${path}` : `/${safeLocale}`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical: normalizedPath,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}${path ? `/${path}` : ""}`])),
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: `${SITE_URL}${normalizedPath}`,
      siteName: SITE_NAME,
      locale: safeLocale,
      type: "website",
      images: [{ url: OG_IMAGE, width: 1600, height: 1067, alt: "Villa Panorama hero image" }],
    },
    twitter: {
      card: "summary_large_image",
      title: copy.title,
      description: copy.description,
      images: [OG_IMAGE],
    },
  };
}
