import { StaticImageData } from "next/image";
import hairdryer from "@/public/assets/icons/hairdryer.png";
import hot_water from "@/public/assets/icons/hot-water.png";
import washer from "@/public/assets/icons/washer.png";
import dryer from "@/public/assets/icons/dryer.png";
import essentials from "@/public/assets/icons/essentials.png";
import hangers from "@/public/assets/icons/hangers.png";
import bed_linens from "@/public/assets/icons/bed_linens.png";
import pillows_blankets from "@/public/assets/icons/pillows_blankets.png";
import darkening_shades from "@/public/assets/icons/darkening_shades.png";
import iron from "@/public/assets/icons/iron.png";
import television from "@/public/assets/icons/television.png";
import crib from "@/public/assets/icons/crib.png";
import books_toys from "@/public/assets/icons/books_toys.png";
import high_chair from "@/public/assets/icons/high-chair.png";
import fireplace_guard from "@/public/assets/icons/fireplace_guard.png";
import window_guards from "@/public/assets/icons/window_guards.png";
import outlet_covers from "@/public/assets/icons/outlet_cover.png";
import baby_safety_gates from "@/public/assets/icons/baby_safety_gates.png";
import table_corner_guards from "@/public/assets/icons/table_corner_guards.png";
import air_conditioner from "@/public/assets/icons/air_conditioner.png";
import indoor_fireplace from "@/public/assets/icons/indoor_fireplace.png";
import heating from "@/public/assets/icons/heating.png";
import fire_extinguisher from "@/public/assets/icons/fire-extinguisher.png";
import aid_kit from "@/public/assets/icons/aid_kit.png";
import wifi from "@/public/assets/icons/wifi.png";
import dishes from "@/public/assets/icons/dishes.png";
import kitchen from "@/public/assets/icons/kitchen.png";
import microwave from "@/public/assets/icons/microwave.png";
import refrigerator from "@/public/assets/icons/refrigerator.png";
import cooking_basics from "@/public/assets/icons/cooking_basics.png";
import dishwasher from "@/public/assets/icons/dishwasher.png";
import stove from "@/public/assets/icons/stove.png";
import oven from "@/public/assets/icons/oven.png";
import coffee_maker from "@/public/assets/icons/coffee_maker.png";
import sheet from "@/public/assets/icons/sheet.png";
import grill from "@/public/assets/icons/grill.png";
import backyard from "@/public/assets/icons/backyard.png";
import parking from "@/public/assets/icons/parking.png";
import pool from "@/public/assets/icons/pool.png";
import luggage from "@/public/assets/icons/luggage.png";
import smoking from "@/public/assets/icons/smoking.png";
import long_term_stays from "@/public/assets/icons/long_term_stays.png";
import key from "@/public/assets/icons/key.png";
import smoke_detektor from "@/public/assets/icons/smoke-detector.png";
import carbon from "@/public/assets/icons/carbon.png";

type features = {
  icon: StaticImageData;
  icon_alt: string;
  titles?: string;
  des?: string;
};

type DataObject = {
  data: features[];
};

export const Features: features[] = [
  // Bathroom
  {
    icon: hairdryer,
    icon_alt: "",
  },
  {
    icon: hot_water,
    icon_alt: "",
  },
  // Bedroom and laundry
  {
    icon: washer,
    icon_alt: "",
  },
  {
    icon: dryer,
    icon_alt: "",
  },
  {
    icon: essentials,
    icon_alt: "",
  },
  {
    icon: hangers,
    icon_alt: "",
  },
  {
    icon: bed_linens,
    icon_alt: "",
  },
  {
    icon: pillows_blankets,
    icon_alt: "",
  },
  {
    icon: darkening_shades,
    icon_alt: "",
  },
  {
    icon: iron,
    icon_alt: "",
  },
  // Entertainment
  {
    icon: television,
    icon_alt: "",
  },
  // Family
  {
    icon: crib,
    icon_alt: "",
  },
  {
    icon: books_toys,
    icon_alt: "",
  },
  {
    icon: high_chair,
    icon_alt: "",
  },
  {
    icon: fireplace_guard,
    icon_alt: "",
  },
  {
    icon: window_guards,
    icon_alt: "",
  },
  {
    icon: outlet_covers,
    icon_alt: "",
  },
  {
    icon: baby_safety_gates,
    icon_alt: "",
  },
  {
    icon: table_corner_guards,
    icon_alt: "",
  },
  // Heating and cooling
  {
    icon: air_conditioner,
    icon_alt: "",
  },
  {
    icon: indoor_fireplace,
    icon_alt: "",
  },
  {
    icon: heating,
    icon_alt: "",
  },
  // Home safety
  {
    icon: fire_extinguisher,
    icon_alt: "",
  },
  {
    icon: aid_kit,
    icon_alt: "",
  },
  // Internet and office
  {
    icon: wifi,
    icon_alt: "",
  },
  // Kitchen and dining
  {
    icon: kitchen,
    icon_alt: "",
  },
  {
    icon: refrigerator,
    icon_alt: "",
  },
  {
    icon: microwave,
    icon_alt: "",
  },
  {
    icon: cooking_basics,
    icon_alt: "",
  },
  {
    icon: dishes,
    icon_alt: "",
  },
  {
    icon: dishwasher,
    icon_alt: "",
  },
  {
    icon: stove,
    icon_alt: "",
  },
  {
    icon: oven,
    icon_alt: "",
  },
  {
    icon: coffee_maker,
    icon_alt: "",
  },
  {
    icon: sheet,
    icon_alt: "",
  },
  {
    icon: grill,
    icon_alt: "",
  },
  // Outdoor
  {
    icon: backyard,
    icon_alt: "",
  },
  // Parking and facilities
  {
    icon: parking,
    icon_alt: "",
  },
  {
    icon: pool,
    icon_alt: "",
  },
  // Services
  {
    icon: luggage,
    icon_alt: "",
  },
  {
    icon: smoking,
    icon_alt: "",
  },
  {
    icon: long_term_stays,
    icon_alt: "",
  },
  {
    icon: key,
    icon_alt: "",
  },
  // Not included
  {
    icon: smoke_detektor,
    icon_alt: "",
  },
  {
    icon: carbon,
    icon_alt: "",
  },
];

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

const replaceFeaturesData = (
  data: features[],
  icon_alt: string[],
  titles: string[],
  des: string[]
) => {
  return data.map((items, index) => ({
    ...items,
    icon_alt: titles[index],
    titles: titles[index],
    des: des[index],
  }));
};

// Define the data object
export const FeaturesDataEn: DataObject = {
  data: replaceFeaturesData(
    Features,
    enData.Villa_Features.card.title,
    enData.Villa_Features.card.title,
    enData.Villa_Features.card.des
  ),
};

// You can also define a separate object for German translations if needed
export const FeaturesDataDE: DataObject = {
  data: replaceFeaturesData(
    Features,
    deData.Villa_Features.card.title,
    deData.Villa_Features.card.title,
    deData.Villa_Features.card.des
  ),
};

export const FeaturesDataHR: DataObject = {
  data: replaceFeaturesData(
    Features,
    hrData.Villa_Features.card.title,
    hrData.Villa_Features.card.title,
    hrData.Villa_Features.card.des
  ),
};

export const FeaturesDataIT: DataObject = {
  data: replaceFeaturesData(
    Features,
    itData.Villa_Features.card.title,
    itData.Villa_Features.card.title,
    itData.Villa_Features.card.des
  ),
};

export const getFeaturesData = (language: string): DataObject => {
  switch (language) {
    case "en":
      return FeaturesDataEn;
    case "de":
      return FeaturesDataDE;
    case "hr":
      return FeaturesDataHR;
    case "it":
      return FeaturesDataIT;
    default:
      // Return default language if specified language is not found
      return FeaturesDataEn;
  }
};
