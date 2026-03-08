import { ReactNode } from "react";

export type LocationToVisitData = {
  placeToVisit: ReactNode;
  des?: string;
};

type DataObject = {
  locations: LocationToVisitData[];
};

const createLink = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-yellow underline underline-offset-4">
    {label}
  </a>
);

const data: Record<string, DataObject> = {
  en: {
    locations: [
      { placeToVisit: createLink("https://www.istra.hr/en/destinations/fazana", "Fažana Tourist Board"), des: "Boat departures for Brijuni, waterfront events and practical visitor info." },
      { placeToVisit: createLink("https://www.np-brijuni.hr/en", "Brijuni National Park"), des: "Official tickets, excursions, opening times and island details." },
      { placeToVisit: createLink("https://tz-vodnjan.hr/en/", "Vodnjan Tourist Board"), des: "Useful for Dignano/Vodnjan heritage, olive oil routes and local events." },
      { placeToVisit: createLink("https://www.pulainfo.hr/en", "Pula Tourist Board"), des: "Roman landmarks, city events, beaches and practical city planning." },
      { placeToVisit: createLink("https://www.rovinj-tourism.com/en", "Rovinj Tourist Board"), des: "Old town highlights, harbour tips and inspiration for a full-day trip." },
    ],
  },
  de: {
    locations: [
      { placeToVisit: createLink("https://www.istra.hr/de/destinationen/fazana", "Tourismusverband Fažana"), des: "Offizielle Informationen zu Bootsfahrten nach Brijuni, Uferpromenade und Veranstaltungen." },
      { placeToVisit: createLink("https://www.np-brijuni.hr/de", "Nationalpark Brijuni"), des: "Tickets, Ausflüge, Öffnungszeiten und aktuelle Besucherinfos." },
      { placeToVisit: createLink("https://tz-vodnjan.hr/de/", "Tourismusverband Vodnjan"), des: "Hilfreich für Dignano/Vodnjan, Kulturstätten, Olivenölrouten und lokale Termine." },
      { placeToVisit: createLink("https://www.pulainfo.hr/de", "Tourismusverband Pula"), des: "Sehenswürdigkeiten, Stadtleben, Strände und praktische Tipps für den Besuch." },
      { placeToVisit: createLink("https://www.rovinj-tourism.com/de", "Tourismusverband Rovinj"), des: "Altstadt, Hafen und Ideen für einen gelungenen Tagesausflug." },
    ],
  },
  hr: {
    locations: [
      { placeToVisit: createLink("https://www.istra.hr/hr/destinacije/fazana", "TZ Fažana"), des: "Službene informacije za brodove prema Brijunima, rivu i događanja." },
      { placeToVisit: createLink("https://www.np-brijuni.hr/", "Nacionalni park Brijuni"), des: "Ulaznice, izleti, radno vrijeme i korisne informacije za posjet." },
      { placeToVisit: createLink("https://tz-vodnjan.hr/hr/", "TZ Vodnjan"), des: "Korisno za baštinu, manifestacije i lokalne gastro sadržaje." },
      { placeToVisit: createLink("https://www.pulainfo.hr/hr", "TZ Pula"), des: "Arena, događanja, gradske preporuke i informacije za jednodnevni izlet." },
      { placeToVisit: createLink("https://www.rovinj-tourism.com/hr", "TZ Rovinj"), des: "Inspiracija za stari grad, rivu i cjelodnevni obilazak." },
    ],
  },
  it: {
    locations: [
      { placeToVisit: createLink("https://www.istra.hr/it/destinazioni/fasana", "Ente turistico di Fasana"), des: "Informazioni ufficiali su partenze per Brioni, lungomare ed eventi." },
      { placeToVisit: createLink("https://www.np-brijuni.hr/it", "Parco Nazionale di Brioni"), des: "Biglietti, escursioni, orari e dettagli utili per la visita." },
      { placeToVisit: createLink("https://tz-vodnjan.hr/it/", "Ente turistico di Dignano"), des: "Utile per patrimonio locale, itinerari dell'olio e appuntamenti sul territorio." },
      { placeToVisit: createLink("https://www.pulainfo.hr/it", "Ente turistico di Pola"), des: "Monumenti romani, eventi, spiagge e consigli pratici per visitare la città." },
      { placeToVisit: createLink("https://www.rovinj-tourism.com/it", "Ente turistico di Rovigno"), des: "Centro storico, porto e idee per una perfetta gita di giornata." },
    ],
  },
};

export const getLocationsData = (language: string): DataObject => data[language] ?? data.en;
