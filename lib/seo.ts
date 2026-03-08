import type { Metadata } from "next";

export const SITE_URL = "https://www.villapanoramaistria.com";
export const SITE_NAME = "Villa Panorama";
export const OG_IMAGE = `${SITE_URL}/assets/images/outside/27.jpg`;
export const locales = ["en", "de", "hr", "it"] as const;
export type AppLocale = (typeof locales)[number];

const amenityFeature = [
  "68m² Private Pool",
  "Jacuzzi",
  "Sauna",
  "Fitness Room",
  "Summer Kitchen",
  "BBQ Area",
  "Billiards",
  "Panoramic Views",
  "Free Wi-Fi",
  "Free Parking",
];

const defaultTitles: Record<AppLocale, string> = {
  en: "Villa Panorama | Holiday Villa in Gajana, Istria",
  de: "Villa Panorama | Ferienvilla in Gajana, Istrien",
  hr: "Villa Panorama | Vila za odmor u Gajani, Istra",
  it: "Villa Panorama | Villa vacanze a Gajana, Istria",
};

const defaultDescriptions: Record<AppLocale, string> = {
  en: "Villa Panorama — luxury holiday villa in Gajana, Istria with 68m² pool, jacuzzi, panoramic views, BBQ and games. Sleeps 16. Perfect for groups and families.",
  de: "Villa Panorama — Luxus-Ferienvilla in Gajana, Istrien mit 68m²-Pool, Whirlpool, Panoramablick, Grill und Spielen. Für bis zu 16 Personen.",
  hr: "Villa Panorama — luksuzna vila za odmor u Gajani, Istra s bazenom od 68m², jacuzzijem, panoramskim pogledom, roštiljem i igrama. Do 16 osoba.",
  it: "Villa Panorama — villa vacanze di lusso a Gajana, Istria con piscina 68m², jacuzzi, vista panoramica, BBQ e giochi. Fino a 16 ospiti.",
};

type PageKey = "home" | "contact" | "environs" | "photogallery" | "pricelist" | "villa-panorama";

const pageCopy: Record<PageKey, Record<AppLocale, { title: string; description: string }>> = {
  home: Object.fromEntries(locales.map((locale) => [locale, { title: defaultTitles[locale], description: defaultDescriptions[locale] }])) as Record<AppLocale, { title: string; description: string }>,
  contact: {
    en: { title: "Book Villa Panorama — Holiday Villa in Gajana, Istria", description: "Send a booking inquiry for Villa Panorama in Gajana, Istria. Direct contact, no agency commission." },
    de: { title: "Villa Panorama buchen — Ferienvilla in Gajana, Istrien", description: "Senden Sie eine Buchungsanfrage für Villa Panorama in Gajana, Istrien. Direkter Kontakt, keine Agenturgebühren." },
    hr: { title: "Rezerviraj Villa Panorama — Vila za odmor u Gajani, Istra", description: "Pošaljite upit za rezervaciju Ville Panorama u Gajani. Direktan kontakt, bez provizije." },
    it: { title: "Prenota Villa Panorama — Villa vacanze a Gajana, Istria", description: "Invia una richiesta di prenotazione per Villa Panorama a Gajana. Contatto diretto, senza commissioni." },
  },
  environs: {
    en: { title: "Things to Do Near Gajana — Around Villa Panorama, Istria", description: "Discover beaches, Brijuni, Pula Arena, water parks and local experiences near Villa Panorama in Istria." },
    de: { title: "Ausflugsziele bei Gajana — Rund um Villa Panorama, Istrien", description: "Strände, Brijuni, Arena Pula, Aquaparks und Erlebnisse rund um Villa Panorama in Istrien entdecken." },
    hr: { title: "Što posjetiti kod Gajane — Oko Ville Panorama, Istra", description: "Plaže, Brijuni, Arena Pula, aquaparci i lokalna iskustva u blizini Ville Panorama." },
    it: { title: "Cosa fare vicino a Gajana — Dintorni di Villa Panorama, Istria", description: "Spiagge, Brioni, Arena di Pola, parchi acquatici e attrazioni vicino a Villa Panorama." },
  },
  photogallery: {
    en: { title: "Villa Panorama Photos — Luxury Villa in Gajana, Istria", description: "Browse photos of Villa Panorama: pool, panoramic terrace, bedrooms, BBQ area and Istrian surroundings." },
    de: { title: "Villa Panorama Fotos — Luxusvilla in Gajana, Istrien", description: "Fotos von Villa Panorama: Pool, Panoramaterrasse, Schlafzimmer, Grillbereich und Umgebung." },
    hr: { title: "Villa Panorama Fotogalerija — Luksuzna vila u Gajani, Istra", description: "Fotografije Ville Panorama: bazen, panoramska terasa, sobe, roštilj i istrijska okolica." },
    it: { title: "Villa Panorama Galleria — Villa di lusso a Gajana, Istria", description: "Foto di Villa Panorama: piscina, terrazza panoramica, camere, area BBQ e dintorni." },
  },
  pricelist: {
    en: { title: "Villa Panorama Prices — Villa Rental in Gajana, Istria", description: "View seasonal prices and booking conditions for Villa Panorama in Gajana. Book direct, save on fees." },
    de: { title: "Villa Panorama Preise — Ferienvilla in Gajana, Istrien", description: "Saisonpreise und Buchungsbedingungen für Villa Panorama in Gajana. Direkt buchen, Gebühren sparen." },
    hr: { title: "Villa Panorama Cjenik — Vila za iznajmljivanje u Gajani, Istra", description: "Sezonske cijene i uvjeti rezervacije za Villu Panorama u Gajani. Izravna rezervacija." },
    it: { title: "Villa Panorama Prezzi — Villa in affitto a Gajana, Istria", description: "Prezzi stagionali e condizioni di prenotazione per Villa Panorama a Gajana. Prenota diretto." },
  },
  "villa-panorama": {
    en: { title: "Villa Panorama — 7 Bedroom Villa in Gajana with Pool & Views", description: "Explore Villa Panorama: 7 bedrooms, large pool, jacuzzi, sauna, fitness, summer kitchen. Ideal for groups up to 16 in Istria." },
    de: { title: "Villa Panorama — 7-Schlafzimmer-Villa in Gajana mit Pool & Aussicht", description: "Villa Panorama: 7 Schlafzimmer, großer Pool, Whirlpool, Sauna, Fitness, Sommerküche. Ideal für Gruppen bis 16." },
    hr: { title: "Villa Panorama — Vila sa 7 soba u Gajani s bazenom i pogledom", description: "Villa Panorama: 7 soba, veliki bazen, jacuzzi, sauna, fitness, ljetna kuhinja. Idealna za grupe do 16 osoba." },
    it: { title: "Villa Panorama — Villa 7 camere a Gajana con piscina e vista", description: "Villa Panorama: 7 camere, grande piscina, jacuzzi, sauna, fitness, cucina estiva. Ideale per gruppi fino a 16." },
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

export function getVacationRentalJsonLd(locale: string) {
  const safeLocale = locales.includes(locale as AppLocale) ? (locale as AppLocale) : "en";

  return {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    name: SITE_NAME,
    url: `${SITE_URL}/${safeLocale}`,
    image: [OG_IMAGE],
    description: defaultDescriptions[safeLocale],
    numberOfRooms: 7,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gajana",
      addressRegion: "Istria",
      addressCountry: "HR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.8833,
      longitude: 13.85,
    },
    amenityFeature: amenityFeature.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    sameAs: [SITE_URL],
  };
}
