type TitleData = {
  one?: string;
  two?: string;
  three?: string;
  four?: string;
  five?: string;
  six?: string;
  seven?: string;
  eight?: string;
  nine?: string;
  ten?: string;
  eleven?: string;
  twelve?: string;
  booked?: string;
  checkIn?: string;
  checkOut?: string;
  reset?: string;
  back?: string;
  next?: string;
};

type DataObject = {
  data: TitleData[];
};

import enData from "@/messages/en.json";
import deData from "@/messages/de.json";
import hrData from "@/messages/hr.json";
import itData from "@/messages/it.json";

const createTitle = (
  one?: string,
  two?: string,
  three?: string,
  four?: string,
  five?: string,
  six?: string,
  seven?: string,
  eight?: string,
  nine?: string,
  ten?: string,
  eleven?: string,
  twelve?: string,
  booked?: string,
  checkIn?: string,
  checkOut?: string,
  reset?: string,
  back?: string,
  next?: string
): TitleData => {
  return {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    booked,
    checkIn,
    checkOut,
    reset,
    back,
    next,
  };
};

// Define the data object
export const TitleDataEn: DataObject = {
  data: [
    createTitle(
      enData.Calendar.one,
      enData.Calendar.two,
      enData.Calendar.three,
      enData.Calendar.four,
      enData.Calendar.five,
      enData.Calendar.six,
      enData.Calendar.seven,
      enData.Calendar.eight,
      enData.Calendar.nine,
      enData.Calendar.ten,
      enData.Calendar.eleven,
      enData.Calendar.twelve,
      enData.Calendar.booked,
      enData.Calendar.checkIn,
      enData.Calendar.checkOut,
      enData.Calendar.reset,
      enData.Calendar.back,
      enData.Calendar.next
    ),
  ],
};

// You can also define a separate object for German translations if needed
export const TitleDataDE: DataObject = {
  data: [
    createTitle(
      deData.Calendar.one,
      deData.Calendar.two,
      deData.Calendar.three,
      deData.Calendar.four,
      deData.Calendar.five,
      deData.Calendar.six,
      deData.Calendar.seven,
      deData.Calendar.eight,
      deData.Calendar.nine,
      deData.Calendar.ten,
      deData.Calendar.eleven,
      deData.Calendar.twelve,
      deData.Calendar.booked,
      deData.Calendar.checkIn,
      deData.Calendar.checkOut,
      deData.Calendar.reset,
      deData.Calendar.back,
      deData.Calendar.next
    ),
  ],
};

export const TitleDataHR: DataObject = {
  data: [
    createTitle(
      hrData.Calendar.one,
      hrData.Calendar.two,
      hrData.Calendar.three,
      hrData.Calendar.four,
      hrData.Calendar.five,
      hrData.Calendar.six,
      hrData.Calendar.seven,
      hrData.Calendar.eight,
      hrData.Calendar.nine,
      hrData.Calendar.ten,
      hrData.Calendar.eleven,
      hrData.Calendar.twelve,
      hrData.Calendar.booked,
      hrData.Calendar.checkIn,
      hrData.Calendar.checkOut,
      hrData.Calendar.reset,
      hrData.Calendar.back,
      hrData.Calendar.next
    ),
  ],
};

export const TitleDataIT: DataObject = {
  data: [
    createTitle(
      itData.Calendar.one,
      itData.Calendar.two,
      itData.Calendar.three,
      itData.Calendar.four,
      itData.Calendar.five,
      itData.Calendar.six,
      itData.Calendar.seven,
      itData.Calendar.eight,
      itData.Calendar.nine,
      itData.Calendar.ten,
      itData.Calendar.eleven,
      itData.Calendar.twelve,
      itData.Calendar.booked,
      itData.Calendar.checkIn,
      itData.Calendar.checkOut,
      itData.Calendar.reset,
      itData.Calendar.back,
      itData.Calendar.next
    ),
  ],
};

export const getCalendarData = (language: string): DataObject => {
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
