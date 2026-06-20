"use client";

import { getPriceTableData } from "@/lib/priceTable";
import { useLocale } from "next-intl";
import { useMemo, useState } from "react";

type PriceRange = {
  startMonth: number;
  startDay: number;
  endMonth: number;
  endDay: number;
  price: number;
  persons: number;
  stay: number;
};

type CalendarDay = {
  date: Date;
  price: number;
  persons: number;
  stay: number;
};

const priceRanges: PriceRange[] = [
  { startMonth: 1, startDay: 2, endMonth: 1, endDay: 12, price: 300, persons: 16, stay: 3 },
  { startMonth: 1, startDay: 13, endMonth: 1, endDay: 31, price: 200, persons: 16, stay: 3 },
  { startMonth: 2, startDay: 1, endMonth: 3, endDay: 31, price: 250, persons: 16, stay: 3 },
  { startMonth: 4, startDay: 1, endMonth: 4, endDay: 30, price: 350, persons: 16, stay: 3 },
  { startMonth: 5, startDay: 1, endMonth: 5, endDay: 31, price: 400, persons: 16, stay: 3 },
  { startMonth: 6, startDay: 1, endMonth: 6, endDay: 30, price: 600, persons: 16, stay: 3 },
  { startMonth: 7, startDay: 1, endMonth: 8, endDay: 31, price: 950, persons: 16, stay: 3 },
  { startMonth: 9, startDay: 1, endMonth: 9, endDay: 12, price: 500, persons: 16, stay: 3 },
  { startMonth: 9, startDay: 13, endMonth: 9, endDay: 22, price: 400, persons: 16, stay: 3 },
  { startMonth: 9, startDay: 23, endMonth: 9, endDay: 30, price: 350, persons: 16, stay: 3 },
  { startMonth: 10, startDay: 1, endMonth: 10, endDay: 30, price: 250, persons: 16, stay: 3 },
  { startMonth: 11, startDay: 1, endMonth: 11, endDay: 30, price: 200, persons: 16, stay: 3 },
  { startMonth: 12, startDay: 1, endMonth: 12, endDay: 22, price: 300, persons: 16, stay: 3 },
  { startMonth: 12, startDay: 23, endMonth: 12, endDay: 27, price: 500, persons: 16, stay: 3 },
  { startMonth: 12, startDay: 28, endMonth: 1, endDay: 1, price: 1100, persons: 16, stay: 3 },
];

const calendarCopy = {
  en: {
    title: "Daily price calendar",
    description: "Choose a month and year to see the price for every day.",
    previous: "Previous",
    next: "Next",
    selectMonth: "Select month",
    selectYear: "Select year",
    perNight: "/ night",
    availabilityNote: "{copy.availabilityNote}",
  },
  de: {
    title: "Tagespreis-Kalender",
    description: "Wählen Sie Monat und Jahr, um den Preis für jeden Tag zu sehen.",
    previous: "Zurück",
    next: "Weiter",
    selectMonth: "Monat auswählen",
    selectYear: "Jahr auswählen",
    perNight: "/ Nacht",
    availabilityNote: "Verfügbarkeiten werden in der nächsten Phase ergänzt. Der Kalender zeigt vorerst nur Preise.",
  },
  hr: {
    title: "Kalendar dnevnih cijena",
    description: "Odaberite mjesec i godinu kako biste vidjeli cijenu za svaki dan.",
    previous: "Prethodno",
    next: "Sljedeće",
    selectMonth: "Odaberite mjesec",
    selectYear: "Odaberite godinu",
    perNight: "/ noć",
    availabilityNote: "Dostupnost ćemo dodati u sljedećoj fazi. Za sada kalendar prikazuje samo cijene.",
  },
  it: {
    title: "Calendario prezzi giornalieri",
    description: "Scegli mese e anno per vedere il prezzo di ogni giorno.",
    previous: "Precedente",
    next: "Successivo",
    selectMonth: "Seleziona mese",
    selectYear: "Seleziona anno",
    perNight: "/ notte",
    availabilityNote: "La disponibilità verrà aggiunta nella prossima fase. Per ora il calendario mostra solo i prezzi.",
  },
};

function getCalendarCopy(locale: string) {
  return calendarCopy[locale as keyof typeof calendarCopy] ?? calendarCopy.en;
}

function getMonthLabels(locale: string) {
  return Array.from({ length: 12 }, (_, index) =>
    new Intl.DateTimeFormat(locale, { month: "long" }).format(new Date(2024, index, 1))
  );
}

function getWeekdayLabels(locale: string) {
  return Array.from({ length: 7 }, (_, index) =>
    new Intl.DateTimeFormat(locale, { weekday: "short" }).format(new Date(2024, 0, index + 1))
  );
}

function formatDate(day: number, month: number) {
  return `${String(day).padStart(2, "0")}.${String(month).padStart(2, "0")}.`;
}

function getRangeLabel(range: PriceRange) {
  return `${formatDate(range.startDay, range.startMonth)} - ${formatDate(range.endDay, range.endMonth)}`;
}

function dayOfYear(month: number, day: number) {
  return month * 100 + day;
}

function isDayInRange(month: number, day: number, range: PriceRange) {
  const current = dayOfYear(month, day);
  const start = dayOfYear(range.startMonth, range.startDay);
  const end = dayOfYear(range.endMonth, range.endDay);

  if (start <= end) {
    return current >= start && current <= end;
  }

  return current >= start || current <= end;
}

function getPriceForDate(date: Date): CalendarDay {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const range = priceRanges.find((item) => isDayInRange(month, day, item)) ?? priceRanges[0];

  return {
    date,
    price: range.price,
    persons: range.persons,
    stay: range.stay,
  };
}

function buildCalendarDays(year: number, monthIndex: number) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const firstDay = new Date(year, monthIndex, 1).getDay();
  const mondayBasedOffset = firstDay === 0 ? 6 : firstDay - 1;
  const days: (CalendarDay | null)[] = Array.from({ length: mondayBasedOffset }, () => null);

  for (let day = 1; day <= daysInMonth; day += 1) {
    days.push(getPriceForDate(new Date(year, monthIndex, day)));
  }

  return days;
}

export default function PriceTable() {
  const localeActive = useLocale();
  const priceTableData = getPriceTableData(localeActive);
  const copy = getCalendarCopy(localeActive);
  const monthLabels = useMemo(() => getMonthLabels(localeActive), [localeActive]);
  const weekdayLabels = useMemo(() => getWeekdayLabels(localeActive), [localeActive]);
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear + 1];
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const calendarDays = useMemo(
    () => buildCalendarDays(selectedYear, selectedMonth),
    [selectedMonth, selectedYear]
  );

  const canGoPrevious = selectedYear > currentYear || selectedMonth > 0;
  const canGoNext = selectedYear < currentYear + 1 || selectedMonth < 11;

  function goToPreviousMonth() {
    if (!canGoPrevious) return;

    if (selectedMonth === 0) {
      setSelectedYear((year) => year - 1);
      setSelectedMonth(11);
      return;
    }

    setSelectedMonth((month) => month - 1);
  }

  function goToNextMonth() {
    if (!canGoNext) return;

    if (selectedMonth === 11) {
      setSelectedYear((year) => year + 1);
      setSelectedMonth(0);
      return;
    }

    setSelectedMonth((month) => month + 1);
  }

  return (
    <div className="space-y-8">
      <section className="rounded-md border border-gray-200 bg-white p-4 shadow-sm" aria-label="Daily price calendar">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-titleBold text-xl">{copy.title}</p>
            <p className="text-sm text-gray-600">{copy.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={goToPreviousMonth}
              disabled={!canGoPrevious}
              className="rounded border border-gray-300 px-3 py-2 text-sm font-Bold disabled:cursor-not-allowed disabled:opacity-40"
              aria-label={copy.previous}
            >
              {copy.previous}
            </button>
            <select
              value={selectedMonth}
              onChange={(event) => setSelectedMonth(Number(event.target.value))}
              className="rounded border border-gray-300 px-3 py-2 text-sm"
              aria-label={copy.selectMonth}
            >
              {monthLabels.map((month, index) => (
                <option key={month} value={index}>
                  {month}
                </option>
              ))}
            </select>
            <select
              value={selectedYear}
              onChange={(event) => setSelectedYear(Number(event.target.value))}
              className="rounded border border-gray-300 px-3 py-2 text-sm"
              aria-label={copy.selectYear}
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <button
              type="button"
              onClick={goToNextMonth}
              disabled={!canGoNext}
              className="rounded border border-gray-300 px-3 py-2 text-sm font-Bold disabled:cursor-not-allowed disabled:opacity-40"
              aria-label={copy.next}
            >
              {copy.next}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center text-xs font-Bold uppercase tracking-wide text-gray-500">
          {weekdayLabels.map((day) => (
            <div key={day} className="py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) =>
            day ? (
              <div
                key={day.date.toISOString()}
                className="min-h-[72px] rounded border border-gray-200 bg-gray-50 p-2 text-left"
              >
                <div className="font-Bold text-gray-800">{day.date.getDate()}</div>
                <div className="mt-2 font-ExtraBold text-base text-gray-950">{day.price} €</div>
                <div className="text-[11px] text-gray-600">{copy.perNight}</div>
              </div>
            ) : (
              <div key={`empty-${index}`} aria-hidden="true" />
            )
          )}
        </div>

        <p className="mt-4 text-xs text-gray-500">
          {copy.availabilityNote}
        </p>
      </section>

      <div className="overflow-x-auto rounded-md border border-gray-200 bg-white">
        <table className="w-full border-collapse" aria-label="Pricing Table">
          <thead>
            <tr className="bg-grey2 font-titleBold">
              <th className="py-2 w-[160px] text-center">{priceTableData.data[0].title}</th>
              <th className="py-2 w-[112px] text-center">{priceTableData.data[0].title2}</th>
              <th className="py-2 w-[112px] text-center">{priceTableData.data[0].title3}</th>
              <th className="py-2 w-[112px] text-center">{priceTableData.data[0].title4}</th>
            </tr>
          </thead>
          <tbody>
            {priceRanges.map((row) => (
              <tr key={getRangeLabel(row)} className="border-t border-gray-200">
                <td className="px-2 py-2 text-center font-Bold">{getRangeLabel(row)}</td>
                <td className="px-2 py-2 text-center font-ExtraBold">{row.price} €</td>
                <td className="px-2 py-2 text-center font-Bold">{row.persons}</td>
                <td className="px-2 py-2 text-center font-Bold">{row.stay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
