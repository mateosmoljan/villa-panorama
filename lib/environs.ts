export type EnvironsItem = {
  title: string;
  description: string;
};

export type EnvironsLink = {
  href: string;
  label: string;
  description: string;
};

export type EnvironsData = {
  data?: { button: string }[];
  heroTitle: string;
  heroIntro: string;
  sections: {
    nearby: { title: string; intro: string; items: EnvironsItem[] };
    beaches: { title: string; intro: string; items: EnvironsItem[] };
    dayTrips: { title: string; intro: string; items: EnvironsItem[] };
    whyStay: { title: string; intro: string; items: EnvironsItem[] };
  };
  cta: {
    title: string;
    text: string;
    button: string;
  };
};

const data: Record<string, EnvironsData> = {
  en: {
    heroTitle: "Environs & day trips from Villa Panorama",
    heroIntro:
      "Villa Panorama is a relaxed villa in Istria for guests who want sea views, quiet evenings and easy access to the west coast. Staying here in Gajana places you close to Fažana, Brijuni National Park, Vodnjan, Bale and Pula, while Rovinj remains an easy day trip. It is a strong base for travellers searching for a villa near Brijuni, a villa near Pula or a peaceful coastal escape among the best villas in Istria.",
    sections: {
      nearby: {
        title: "Nearby towns & villages",
        intro:
          "From small stone villages to lively waterfront towns, the western side of Istria is easy to explore from Villa Panorama.",
        items: [
          {
            title: "Gajana",
            description:
              "The villa's immediate setting offers a calm village atmosphere, panoramic countryside views and a slower rhythm that suits guests who want privacy without being isolated.",
          },
          {
            title: "Fažana",
            description:
              "A charming fishing town with a seafront promenade, restaurants, family beaches and the main boat departures for Brijuni National Park.",
          },
          {
            title: "Vodnjan",
            description:
              "Known for olive oil, local gastronomy, historic streets and a more authentic local feel just inland from the coast.",
          },
          {
            title: "Peroj",
            description:
              "A relaxed coastal village with sea access, beach bars and a pleasant alternative to the busier resort zones.",
          },
          {
            title: "Bale",
            description:
              "One of the prettiest small towns in west Istria, ideal for an evening walk, dinner and a taste of classic stone-built Istrian charm.",
          },
          {
            title: "Barbariga",
            description:
              "Good for laid-back beach time, sunset swims and quick coastal outings when you do not want a full-day excursion.",
          },
        ],
      },
      beaches: {
        title: "Beaches & coast",
        intro:
          "This side of Istria works especially well for guests who want a villa near the sea while keeping a peaceful base away from crowded promenades.",
        items: [
          {
            title: "Fažana beaches",
            description:
              "Easy family-friendly beaches, clear water and a convenient mix of swimming spots, cafés and evening strolls by the sea.",
          },
          {
            title: "Peroj coastline",
            description:
              "A quieter stretch for guests who prefer simple beach days, uncrowded swimming areas and a local atmosphere.",
          },
          {
            title: "Barbariga coast",
            description:
              "Popular for relaxed summer afternoons, rocky coves and west-facing sunsets over the Adriatic.",
          },
          {
            title: "Brijuni sea excursions",
            description:
              "Even when you do not spend the whole day on the islands, a boat trip from Fažana adds a special coastal experience to your stay.",
          },
        ],
      },
      dayTrips: {
        title: "Day trips & landmarks",
        intro:
          "Villa Panorama is well positioned for short scenic drives, cultural stops and classic west Istria highlights.",
        items: [
          {
            title: "Brijuni National Park",
            description:
              "One of the headline attractions in Istria, combining island landscapes, history, cycling routes and memorable boat access from Fažana.",
          },
          {
            title: "Pula",
            description:
              "Reach the Arena, Roman monuments, markets and city restaurants quickly, then return to a quieter villa setting in the evening.",
          },
          {
            title: "Rovinj",
            description:
              "A classic day trip for old-town walks, harbour views, galleries and some of the most photographed streets in Croatia.",
          },
          {
            title: "Bale & inland west Istria",
            description:
              "Excellent for a half-day drive focused on food, wine, stone villages and that slower Istrian countryside mood.",
          },
        ],
      },
      whyStay: {
        title: "Why stay here?",
        intro:
          "This location suits guests who want the coast, excursions and sunsets without sacrificing space, privacy and easy parking.",
        items: [
          {
            title: "A panoramic coastal base",
            description:
              "Ideal if you want a villa in Istria that feels calm and open, yet still keeps Fažana, Brijuni and Pula within easy reach.",
          },
          {
            title: "Great for couples, families and friends",
            description:
              "You can alternate beach mornings, sightseeing afternoons and slow dinners back at the villa.",
          },
          {
            title: "Strong west Istria positioning",
            description:
              "A practical choice for travellers comparing villas near Brijuni, villas near Fažana or a villa near Rovinj with more peace around it.",
          },
        ],
      },
    },
    cta: {
      title: "Book Villa Panorama and discover Brijuni, Fažana and west Istria",
      text: "Choose Villa Panorama for a scenic stay in Istria and enjoy the coast, island excursions and easy day trips across the western peninsula.",
      button: "Check availability",
    },
  },
  de: {
    heroTitle: "Umgebung & Ausflüge rund um Villa Panorama",
    heroIntro:
      "Die Villa Panorama ist eine entspannte Villa in Istrien für Gäste, die Meerblick, ruhige Abende und kurze Wege zur Westküste suchen. Der Aufenthalt in Gajana bringt Sie in die Nähe von Fažana, dem Nationalpark Brijuni, Vodnjan, Bale und Pula, während auch Rovinj bequem für einen Tagesausflug erreichbar bleibt. Damit ist das Haus eine starke Wahl für alle, die nach einer Villa nahe Brijuni, einer Villa nahe Pula oder nach einem ruhigen Küstenrefugium unter den schönsten Villen in Istrien suchen.",
    sections: {
      nearby: {
        title: "Orte & Dörfer in der Nähe",
        intro:
          "Von kleinen Steindörfern bis zu lebhaften Uferorten lässt sich die Westseite Istriens von Villa Panorama aus besonders angenehm erkunden.",
        items: [
          {
            title: "Gajana",
            description:
              "Die unmittelbare Umgebung der Villa bietet eine ruhige Dorfatmosphäre, weite Ausblicke und genau den entschleunigten Rhythmus, den viele Urlaubsgäste in Istrien suchen.",
          },
          {
            title: "Fažana",
            description:
              "Ein charmanter Fischerort mit Promenade, Restaurants, familienfreundlichen Stränden und den wichtigsten Bootsverbindungen nach Brijuni.",
          },
          {
            title: "Vodnjan",
            description:
              "Bekannt für exzellentes Olivenöl, authentische Gastronomie, historische Gassen und ein angenehm lokales Flair etwas abseits der Küste.",
          },
          {
            title: "Peroj",
            description:
              "Ein entspannter Küstenort mit Badezugang, Beach Bars und einer ruhigen Alternative zu stärker frequentierten Ferienorten.",
          },
          {
            title: "Bale",
            description:
              "Einer der schönsten kleinen Orte in Westistrien – ideal für einen Abendspaziergang, ein gutes Essen und klassisches istrisches Ambiente.",
          },
          {
            title: "Barbariga",
            description:
              "Perfekt für unkomplizierte Strandtage, Abendsonne am Meer und spontane Küstenausflüge ohne großen Planungsaufwand.",
          },
        ],
      },
      beaches: {
        title: "Strände & Küste",
        intro:
          "Diese Lage eignet sich besonders für Reisende, die eine Villa nahe am Meer möchten, aber dennoch Wert auf Ruhe und Abstand zu den belebtesten Promenaden legen.",
        items: [
          {
            title: "Strände von Fažana",
            description:
              "Leicht erreichbar, familienfreundlich und ideal für entspannte Badetage mit Cafés, Promenade und Abendstimmung am Wasser.",
          },
          {
            title: "Küste von Peroj",
            description:
              "Gut für Gäste, die lieber unkompliziert baden, mehr Platz am Wasser haben und eine angenehm lokale Atmosphäre schätzen.",
          },
          {
            title: "Küstenabschnitte bei Barbariga",
            description:
              "Beliebt für ruhige Sommernachmittage, felsige Buchten und schöne Sonnenuntergänge an der Westküste Istriens.",
          },
          {
            title: "Boots- und Meerausflüge nach Brijuni",
            description:
              "Schon die Überfahrt macht den Reiz aus und ergänzt den Aufenthalt perfekt um ein echtes Küstenerlebnis.",
          },
        ],
      },
      dayTrips: {
        title: "Tagesausflüge & Sehenswürdigkeiten",
        intro:
          "Villa Panorama liegt ideal für kurze Panoramastraßen, kulturelle Stopps und die klassischen Höhepunkte Westistriens.",
        items: [
          {
            title: "Nationalpark Brijuni",
            description:
              "Eines der großen Highlights Istriens – mit Inselnatur, Geschichte, Radwegen und der besonderen Anreise per Boot ab Fažana.",
          },
          {
            title: "Pula",
            description:
              "Arena, römische Monumente, Märkte und Restaurants sind schnell erreichbar, bevor Sie abends wieder in die Ruhe der Villa zurückkehren.",
          },
          {
            title: "Rovinj",
            description:
              "Ein klassisches Ausflugsziel für Altstadtgassen, Hafenblicke, Galerien und einige der schönsten Fotomotive Kroatiens.",
          },
          {
            title: "Bale & das ländliche Westistrien",
            description:
              "Ideal für halbtägige Fahrten mit Fokus auf Kulinarik, Wein, kleine Orte und entspanntes istrisches Lebensgefühl.",
          },
        ],
      },
      whyStay: {
        title: "Warum hier wohnen?",
        intro:
          "Diese Lage passt zu Urlaubern, die Küste, Ausflüge und Sonnenuntergänge möchten, ohne auf Privatsphäre, Platz und unkomplizierte Mobilität zu verzichten.",
        items: [
          {
            title: "Panoramalage an der Küste",
            description:
              "Ideal, wenn Sie eine Villa in Istrien mit Ruhe, Weite und gleichzeitig guter Anbindung an Fažana, Brijuni und Pula suchen.",
          },
          {
            title: "Perfekt für Paare, Familien und Freunde",
            description:
              "Strand am Vormittag, Sightseeing am Nachmittag und ein entspannter Abend zurück an der Villa – genau dafür eignet sich die Lage hervorragend.",
          },
          {
            title: "Starke Position in Westistrien",
            description:
              "Eine kluge Wahl für Reisende, die Villen nahe Brijuni, Villen nahe Fažana oder eine Villa nahe Rovinj vergleichen und zugleich mehr Ruhe möchten.",
          },
        ],
      },
    },
    cta: {
      title: "Villa Panorama buchen und Brijuni, Fažana und Westistrien entdecken",
      text: "Entscheiden Sie sich für Villa Panorama und genießen Sie einen stilvollen Aufenthalt in Istrien mit Küste, Inselausflügen und kurzen Wegen zu den schönsten Orten im Westen der Halbinsel.",
      button: "Verfügbarkeit prüfen",
    },
  },
  hr: {
    heroTitle: "Okolica i izleti iz Ville Panorama",
    heroIntro:
      "Villa Panorama je vila u Istri za goste koji žele pogled, mirne večeri i brz pristup zapadnoj obali. Boravak u Gajani stavlja vas blizu Fažane, Nacionalnog parka Brijuni, Vodnjana, Bala i Pule, dok je i Rovinj odličan izbor za jednodnevni izlet. Ovo je izvrsna opcija za sve koji traže vilu blizu Brijuna, vilu blizu Pule ili mirniji coastal stay među najpoželjnijim vilama u Istri.",
    sections: {
      nearby: {
        title: "Obližnji gradovi i mjesta",
        intro:
          "Od malih kamenih sela do življih mjesta uz more, zapadna Istra lako se istražuje iz Ville Panorama.",
        items: [
          { title: "Gajana", description: "Neposredno okruženje vile pruža mir, otvorene poglede i sporiji ritam odmora koji mnogi gosti traže u Istri." },
          { title: "Fažana", description: "Šarmantno ribarsko mjesto s rivom, restoranima, obiteljskim plažama i polascima brodova za Brijune." },
          { title: "Vodnjan", description: "Poznat po maslinovom ulju, lokalnoj gastronomiji, staroj jezgri i autentičnijem lokalnom ugođaju." },
          { title: "Peroj", description: "Opušteno primorsko mjesto s pristupom moru i ugodna alternativa prometnijim ljetnim zonama." },
          { title: "Bale", description: "Jedno od najljepših mjesta zapadne Istre, idealno za večernju šetnju, večeru i pravi istarski ugođaj." },
          { title: "Barbariga", description: "Dobra za opušten odlazak na more, kupanje u zalazak sunca i kraće obalne izlete." },
        ],
      },
      beaches: {
        title: "Plaže i obala",
        intro:
          "Ova lokacija posebno odgovara gostima koji žele vilu blizu mora, ali i mirniju bazu izvan najvećih gužvi.",
        items: [
          { title: "Plaže u Fažani", description: "Jednostavan pristup, obiteljski ugođaj i dobar spoj kupanja, kafića i večernjih šetnji uz more." },
          { title: "Perojska obala", description: "Dobra opcija za goste koji vole jednostavne dane na moru i nešto mirniji lokalni ambijent." },
          { title: "Barbariga", description: "Poznata po opuštenim ljetnim popodnevima, stjenovitim uvalama i lijepim zalascima na zapadnoj obali." },
          { title: "Izleti brodom prema Brijunima", description: "Čak i kratki odlazak brodom daje boravku poseban morski doživljaj." },
        ],
      },
      dayTrips: {
        title: "Izleti i znamenitosti",
        intro:
          "Villa Panorama odlično je pozicionirana za kratke vožnje, kulturne stanice i najpoznatije atrakcije zapadne Istre.",
        items: [
          { title: "Nacionalni park Brijuni", description: "Jedna od glavnih atrakcija Istre, spoj prirode, povijesti, biciklističkih ruta i posebnog dolaska brodom iz Fažane." },
          { title: "Pula", description: "Arena, rimski spomenici, gradska tržnica i restorani lako su dostupni, a navečer se vraćate u mir vile." },
          { title: "Rovinj", description: "Klasičan jednodnevni izlet za stare ulice, luku, galerije i jedan od najfotogeničnijih gradova na Jadranu." },
          { title: "Bale i unutrašnjost zapadne Istre", description: "Odlično za pola dana vožnje uz gastronomiju, vino, kamena mjesta i sporiji ritam." },
        ],
      },
      whyStay: {
        title: "Zašto odsjesti ovdje?",
        intro:
          "Lokacija odgovara gostima koji žele more, izlete i zalaske sunca, ali bez odricanja od privatnosti i komfora.",
        items: [
          { title: "Panoramska baza uz zapadnu obalu", description: "Odličan izbor ako tražite vilu u Istri s mirom, pogledom i dobrim pristupom Fažani, Brijunima i Puli." },
          { title: "Idealno za parove, obitelji i prijatelje", description: "Lako je kombinirati jutro na plaži, popodnevni izlet i večer u opuštenijem privatnom ambijentu." },
          { title: "Jaka pozicija za zapadnu Istru", description: "Pametan odabir za goste koji uspoređuju vile blizu Brijuna, vile blizu Fažane ili vilu blizu Rovinja." },
        ],
      },
    },
    cta: {
      title: "Rezervirajte Villa Panorama i otkrijte Brijune, Fažanu i zapadnu Istru",
      text: "Odaberite Villa Panorama za panoramski odmor u Istri i uživajte u obali, otočnim izletima i jednostavnom istraživanju zapadne strane poluotoka.",
      button: "Provjerite raspoloživost",
    },
  },
  it: {
    heroTitle: "Dintorni ed escursioni da Villa Panorama",
    heroIntro:
      "Villa Panorama è una villa in Istria ideale per chi desidera vista aperta, serate tranquille e accesso rapido alla costa occidentale. Soggiornare a Gallesano/Gajana significa essere vicini a Fasana, al Parco Nazionale di Brioni, a Dignano, Valle e Pola, con Rovigno perfetta anche per una gita di giornata. È una scelta molto valida per chi cerca una villa vicino a Brioni, una villa vicino a Pola oppure un rifugio più calmo tra le migliori ville in Istria.",
    sections: {
      nearby: {
        title: "Borghi e località vicine",
        intro:
          "Dai piccoli paesi in pietra ai centri sul mare più vivaci, la parte occidentale dell'Istria si esplora con facilità da Villa Panorama.",
        items: [
          { title: "Gajana / Gallesano", description: "L'area immediata della villa offre quiete, panorami aperti e un ritmo più lento, perfetto per una vacanza rilassata." },
          { title: "Fažana / Fasana", description: "Un grazioso borgo di pescatori con lungomare, ristoranti, spiagge per famiglie e partenze in barca per Brioni." },
          { title: "Vodnjan / Dignano", description: "Conosciuta per l'olio d'oliva, la gastronomia locale, il centro storico e un'atmosfera autentica appena nell'entroterra." },
          { title: "Peroj / Peroi", description: "Una località costiera rilassata con accesso al mare e un'alternativa piacevole alle zone più affollate." },
          { title: "Bale / Valle", description: "Uno dei paesi più belli dell'Istria occidentale, ideale per una passeggiata serale e una cena in atmosfera istriana." },
          { title: "Barbariga", description: "Perfetta per giornate semplici al mare, bagni al tramonto e brevi uscite lungo la costa." },
        ],
      },
      beaches: {
        title: "Spiagge e costa",
        intro:
          "Questa posizione è particolarmente adatta a chi desidera una villa vicino al mare ma preferisce una base più tranquilla rispetto alle zone più animate.",
        items: [
          { title: "Spiagge di Fasana", description: "Facili da raggiungere, adatte alle famiglie e perfette per alternare bagni, caffè e passeggiate sul lungomare." },
          { title: "Costa di Peroi", description: "Una buona scelta per chi ama giornate di mare semplici, spazi più tranquilli e un'atmosfera locale." },
          { title: "Litorale di Barbariga", description: "Apprezzato per pomeriggi estivi rilassati, calette rocciose e splendidi tramonti sulla costa occidentale." },
          { title: "Escursioni in barca verso Brioni", description: "Anche una sola traversata aggiunge al soggiorno un'esperienza marina davvero speciale." },
        ],
      },
      dayTrips: {
        title: "Gite di giornata e luoghi d'interesse",
        intro:
          "Villa Panorama è ben posizionata per strade panoramiche, soste culturali e i grandi classici dell'Istria occidentale.",
        items: [
          { title: "Parco Nazionale di Brioni", description: "Uno dei luoghi simbolo dell'Istria, tra isole, natura, storia, percorsi ciclabili e l'arrivo in barca da Fasana." },
          { title: "Pola", description: "Arena romana, monumenti, mercato cittadino e ristoranti sono facilmente raggiungibili, con il vantaggio di tornare poi alla calma della villa." },
          { title: "Rovinj / Rovigno", description: "Una gita classica per il centro storico, il porto, le gallerie e alcune delle vie più fotogeniche della Croazia." },
          { title: "Valle e l'entroterra dell'Istria occidentale", description: "Ottimo per mezza giornata dedicata a cucina locale, vino, paesi in pietra e ritmi lenti." },
        ],
      },
      whyStay: {
        title: "Perché soggiornare qui?",
        intro:
          "La posizione è perfetta per chi vuole mare, escursioni e tramonti senza rinunciare a privacy, spazio e comodità.",
        items: [
          { title: "Una base panoramica sulla costa", description: "Ideale se cerchi una villa in Istria tranquilla ma ben collegata a Fasana, Brioni e Pola." },
          { title: "Perfetta per coppie, famiglie e amici", description: "Si può alternare facilmente una mattina in spiaggia, un pomeriggio di visite e una serata rilassata in villa." },
          { title: "Ottima posizione nell'Istria occidentale", description: "Una scelta intelligente per chi confronta ville vicino a Brioni, ville vicino a Fasana o una villa vicino a Rovigno." },
        ],
      },
    },
    cta: {
      title: "Prenota Villa Panorama e scopri Brioni, Fasana e l'Istria occidentale",
      text: "Scegli Villa Panorama per un soggiorno panoramico in Istria e goditi costa, escursioni in barca e splendide gite lungo la parte occidentale della penisola.",
      button: "Verifica disponibilità",
    },
  },
};

const mapButtons: Record<string, string> = {
  en: "View map",
  de: "Karte ansehen",
  hr: "Prikaži kartu",
  it: "Apri mappa",
};

export const getEnvironsData = (language: string): EnvironsData => {
  const selected = data[language] ?? data.en;
  return {
    ...selected,
    data: [{ button: mapButtons[language] ?? mapButtons.en }],
  };
};
