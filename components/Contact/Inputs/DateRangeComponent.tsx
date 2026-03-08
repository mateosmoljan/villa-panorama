"use client";
import { useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { format, isAfter, parseISO } from "date-fns";

type BookingRange = { startDate: string; endDate: string };

const disabledRanges: BookingRange[] = [
  { startDate: "2024-05-02", endDate: "2024-11-09" },
  { startDate: "2024-11-17", endDate: "2024-11-22" },
  { startDate: "2025-01-05", endDate: "2025-01-06" },
  { startDate: "2025-02-08", endDate: "2025-02-08" },
  { startDate: "2025-03-08", endDate: "2025-03-09" },
  { startDate: "2025-04-10", endDate: "2025-04-14" },
  { startDate: "2025-04-24", endDate: "2025-04-29" },
  { startDate: "2025-05-02", endDate: "2025-05-03" },
  { startDate: "2025-05-17", endDate: "2025-06-28" },
  { startDate: "2025-07-11", endDate: "2025-07-22" },
  { startDate: "2025-08-05", endDate: "2025-08-08" },
  { startDate: "2025-09-05", endDate: "2025-09-07" },
  { startDate: "2025-09-11", endDate: "2025-09-13" },
  { startDate: "2025-09-15", endDate: "2025-09-20" },
  { startDate: "2025-10-20", endDate: "2025-10-25" },
];

const isDisabled = (dateISO: string) => {
  const date = parseISO(dateISO);
  return disabledRanges.some((range) => {
    const from = parseISO(range.startDate);
    const to = parseISO(range.endDate);
    return date >= from && date <= to;
  });
};

function DataRangeComponent() {
  const todayISO = format(new Date(), "yyyy-MM-dd");
  const [arrivalRaw, setArrivalRaw] = useState(todayISO);
  const [departureRaw, setDepartureRaw] = useState(todayISO);

  useEffect(() => {
    if (isAfter(parseISO(arrivalRaw), parseISO(departureRaw))) {
      setDepartureRaw(arrivalRaw);
    }
  }, [arrivalRaw, departureRaw]);

  const arrivalDate = format(parseISO(arrivalRaw), "d.M.yyyy");
  const departureDate = format(parseISO(departureRaw), "d.M.yyyy");

  return (
    <div className="w-full px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <label className="text-grey3 border-2 bg-white font-Bold font-poppins rounded-md flex items-center justify-between py-[8.5px] px-[14px]">
          <span>{arrivalDate}</span>
          <FaCalendarAlt />
          <input
            type="date"
            value={arrivalRaw}
            min={todayISO}
            onChange={(e) => setArrivalRaw(e.target.value)}
            className="absolute opacity-0 pointer-events-none"
          />
        </label>

        <label className="text-grey3 border-2 bg-white font-Bold font-poppins rounded-md flex items-center justify-between py-[8.5px] px-[14px]">
          <span>{departureDate}</span>
          <FaCalendarAlt />
          <input
            type="date"
            value={departureRaw}
            min={arrivalRaw}
            onChange={(e) => setDepartureRaw(e.target.value)}
            className="absolute opacity-0 pointer-events-none"
          />
        </label>
      </div>

      <p className="text-xs text-grey3 mb-2">Unavailable dates are validated on submit.</p>

      <input type="hidden" required name="arrivalDate" value={arrivalDate} />
      <input type="hidden" required name="departureDate" value={departureDate} />
      <input type="hidden" name="invalidRange" value={String(isDisabled(arrivalRaw) || isDisabled(departureRaw))} />
    </div>
  );
}

export default DataRangeComponent;
