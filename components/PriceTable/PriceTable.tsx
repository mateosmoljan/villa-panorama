"use client";

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
    previous: "Previous month",
    next: "Next month",
    previousYear: "Previous year",
    nextYear: "Next year",
    thisMonth: "This month",
    selectMonth: "Select month",
    selectYear: "Select year",
    availabilityNote: "Availability will be added in the next phase. For now, the calendar shows prices only.",
  },
  de: {
    title: "Tagespreis-Kalender",
    description: "Wählen Sie Monat und Jahr, um den Preis für jeden Tag zu sehen.",
    previous: "Vorheriger Monat",
    next: "Nächster Monat",
    previousYear: "Vorheriges Jahr",
    nextYear: "Nächstes Jahr",
    thisMonth: "Dieser Monat",
    selectMonth: "Monat auswählen",
    selectYear: "Jahr auswählen",
    availabilityNote: "Verfügbarkeiten werden in der nächsten Phase ergänzt. Der Kalender zeigt vorerst nur Preise.",
  },
  hr: {
    title: "Kalendar dnevnih cijena",
    description: "Odaberite mjesec i godinu kako biste vidjeli cijenu za svaki dan.",
    previous: "Prethodni mjesec",
    next: "Sljedeći mjesec",
    previousYear: "Prethodna godina",
    nextYear: "Sljedeća godina",
    thisMonth: "Ovaj mjesec",
    selectMonth: "Odaberite mjesec",
    selectYear: "Odaberite godinu",
    availabilityNote: "Dostupnost ćemo dodati u sljedećoj fazi. Za sada kalendar prikazuje samo cijene.",
  },
  it: {
    title: "Calendario prezzi giornalieri",
    description: "Scegli mese e anno per vedere il prezzo di ogni giorno.",
    previous: "Mese precedente",
    next: "Mese successivo",
    previousYear: "Anno precedente",
    nextYear: "Anno successivo",
    thisMonth: "Questo mese",
    selectMonth: "Seleziona mese",
    selectYear: "Seleziona anno",
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
  const selectedMonthLabel = monthLabels[selectedMonth];

  const canGoPrevious = selectedYear > currentYear || selectedMonth > 0;
  const canGoNext = selectedYear < currentYear + 1 || selectedMonth < 11;
  const canGoPreviousYear = selectedYear > currentYear;
  const canGoNextYear = selectedYear < currentYear + 1;

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

  function goToPreviousYear() {
    if (!canGoPreviousYear) return;
    setSelectedYear((year) => year - 1);
  }

  function goToNextYear() {
    if (!canGoNextYear) return;
    setSelectedYear((year) => year + 1);
  }

  function goToThisMonth() {
    setSelectedYear(currentYear);
    setSelectedMonth(new Date().getMonth());
  }

  return (
    <div className="space-y-8">
      <section className="rounded-md border border-gray-200 bg-white p-4 shadow-sm" aria-label="Daily price calendar">
        <div className="mb-5 space-y-4">
          <div className="text-center">
            <p className="font-titleBold text-xl">{copy.title}</p>
            <p className="text-sm text-gray-600">{copy.description}</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-3 shadow-sm">
            <div className="flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={goToPreviousMonth}
                disabled={!canGoPrevious}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-2xl font-ExtraBold shadow-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-35"
                aria-label={copy.previous}
              >
                ‹
              </button>

              <div className="min-w-0 flex-1 text-center">
                <div className="font-titleBold text-2xl capitalize text-gray-950">
                  {selectedMonthLabel} {selectedYear}
                </div>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  <button
                    type="button"
                    onClick={goToPreviousYear}
                    disabled={!canGoPreviousYear}
                    className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-Bold shadow-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-35"
                    aria-label={copy.previousYear}
                  >
                    « {selectedYear - 1}
                  </button>
                  <button
                    type="button"
                    onClick={goToThisMonth}
                    className="rounded-full bg-gray-900 px-3 py-1 text-xs font-Bold text-white shadow-sm transition hover:bg-gray-700"
                  >
                    {copy.thisMonth}
                  </button>
                  <button
                    type="button"
                    onClick={goToNextYear}
                    disabled={!canGoNextYear}
                    className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-Bold shadow-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-35"
                    aria-label={copy.nextYear}
                  >
                    {selectedYear + 1} »
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={goToNextMonth}
                disabled={!canGoNext}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-2xl font-ExtraBold shadow-sm transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-35"
                aria-label={copy.next}
              >
                ›
              </button>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-[1fr_110px]">
              <select
                value={selectedMonth}
                onChange={(event) => setSelectedMonth(Number(event.target.value))}
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm capitalize shadow-sm"
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
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm"
                aria-label={copy.selectYear}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
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
    </div>
  );
}
