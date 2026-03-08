import { format, eachDayOfInterval, getYear, parse } from "date-fns";
import {
  BookingType,
  blockedDaysType,
  IHandleBookings,
  IFormatBookingsData,
  IGetAllBookedDays,
  IGetAllHalfDays,
  IGetDatesInRange,
  IGetMonthName,
  DaysOfWeekType,
  Days,
  DaysOfWeekOffsetType,
  DayOffset,
} from "./../types";

const dateFormat = "M-d-yyyy";

export const daysOfTheWeek: DaysOfWeekType = [
  Days.Monday,
  Days.Tusday,
  Days.Wednesday,
  Days.Thursday,
  Days.Friday,
  Days.Saturday,
  Days.Sunday,
];

export const daysOfTheWeekOffset: DaysOfWeekOffsetType = [
  DayOffset.Monday,
  DayOffset.Tusday,
  DayOffset.Wednesday,
  DayOffset.Thursday,
  DayOffset.Friday,
  DayOffset.Saturday,
  DayOffset.Sunday,
];

export const isValidMonthsOption = (numOfMonths: number): boolean => [12, 4, 2, 1].includes(numOfMonths);

export const getMonthName = (month: number): string | undefined => {
  const months: IGetMonthName = {
    1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June",
    7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December",
  };

  return months[month];
};

export const formatBookingsData = ({ bookings, year }: IFormatBookingsData): BookingType[] => {
  if (!Array.isArray(bookings) || bookings.length < 1) return [];

  return bookings
    .filter((booking) => {
      const from = new Date(booking.from);
      const to = new Date(booking.to);
      return getYear(from) === Number(year) || getYear(to) === Number(year);
    })
    .map((booking) => ({
      from: format(new Date(booking.from), dateFormat),
      to: format(new Date(booking.to), dateFormat),
      middayCheckout: booking.middayCheckout,
    }));
};

export const getDatesInRange = ({ startDate, endDate }: IGetDatesInRange): blockedDaysType => {
  const from = typeof startDate === "string" ? parse(startDate, dateFormat, new Date()) : startDate;
  const to = typeof endDate === "string" ? parse(endDate, dateFormat, new Date()) : endDate;
  return eachDayOfInterval({ start: from, end: to }).map((d) => format(d, dateFormat));
};

export const getAllBookedDays = ({ dates }: IGetAllBookedDays): blockedDaysType => {
  if (!Array.isArray(dates) || dates.length < 1) return [];
  return dates.flatMap(({ to, from }) => getDatesInRange({ startDate: from, endDate: to }));
};

export const getAllHalfDays = ({ dates }: IGetAllHalfDays): blockedDaysType => {
  if (!Array.isArray(dates) || dates.length < 1) return [];
  return dates.filter((d) => d.middayCheckout && typeof d.to === "string").map((d) => d.to as string);
};

export const handleBookings = ({ bookings, year }: IHandleBookings): { halfDays: blockedDaysType; bookedDays: blockedDaysType } => {
  const dates = formatBookingsData({ bookings, year });
  return { halfDays: getAllHalfDays({ dates }), bookedDays: getAllBookedDays({ dates }) };
};
