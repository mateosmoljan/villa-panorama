type TitleData = {
  des: string;
  the_space_title: string;
  the_space_des: string;
  the_space_des2: string;
  guest_access_title: string;
  guest_access_des: string;
};

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

// Define the data object
export const TitleDataEn: TitleData = {
  des: enData.About.des,
  the_space_title: enData.About.the_space.title,
  the_space_des: enData.About.the_space.des,
  the_space_des2: enData.About.the_space.des2,
  guest_access_title: enData.About.guest_access.title,
  guest_access_des: enData.About.guest_access.des,
};

// You can also define a separate object for German translations if needed
export const TitleDataDE: TitleData = {
  des: deData.About.des,
  the_space_title: deData.About.the_space.title,
  the_space_des: deData.About.the_space.des,
  the_space_des2: deData.About.the_space.des2,
  guest_access_title: deData.About.guest_access.title,
  guest_access_des: deData.About.guest_access.des,
};

export const TitleDataHR: TitleData = {
  des: hrData.About.des,
  the_space_title: hrData.About.the_space.title,
  the_space_des: hrData.About.the_space.des,
  the_space_des2: hrData.About.the_space.des2,
  guest_access_title: hrData.About.guest_access.title,
  guest_access_des: hrData.About.guest_access.des,
};

export const TitleDataIT: TitleData = {
  des: itData.About.des,
  the_space_title: itData.About.the_space.title,
  the_space_des: itData.About.the_space.des,
  the_space_des2: itData.About.the_space.des2,
  guest_access_title: itData.About.guest_access.title,
  guest_access_des: itData.About.guest_access.des,
};

export const getAboutData = (language: string): TitleData => {
  switch (language) {
    case "en":
      return TitleDataEn;
    case "de":
      return TitleDataDE;
    case "hr":
      return TitleDataHR;
    case "it":
      return TitleDataIT;
    default:
      // Return default language if specified language is not found
      return TitleDataEn;
  }
};
