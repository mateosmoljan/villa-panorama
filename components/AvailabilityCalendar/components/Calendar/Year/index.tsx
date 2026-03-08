import React from "react";
import { format } from "date-fns";
import { IYear } from "./../types";
import { daysOfTheWeekOffset, getMonthName } from "./../Utils";

const Year: React.FC<IYear> = ({ activeYear, showNumberOfMonths = 12, bookedDates = [], lateCheckouts = [], monthsFrom = 1 }) => {
  const year = activeYear || new Date().getFullYear();

  return (
    <div className="year" data-testid="year">
      {new Array(showNumberOfMonths).fill("").map((_, pos) => {
        const month = monthsFrom + pos;
        const monthName = getMonthName(month);
        const firstDate = new Date(year, month - 1, 1);
        const totalDays = new Date(year, month, 0).getDate();
        const firstDayOfWeek = firstDate.getDay();
        const offsetDays = firstDayOfWeek !== 0 ? new Array(firstDayOfWeek - 1).fill("") : new Array(Number(daysOfTheWeekOffset[firstDayOfWeek])).fill("");

        return (
          <div key={pos} className="month" data-testid="month">
            <h3 className="monthName">{monthName}</h3>
            <div className="content">
              {offsetDays.map((_, i) => <div key={i} className="day" />)}
              {new Array(totalDays).fill("").map((_, i) => {
                const day = i + 1;
                const d = new Date(year, month - 1, day);
                const key = format(d, "M-d-yyyy");
                const isBooked = bookedDates.includes(key);
                const isLateCheckout = lateCheckouts.includes(key);
                return (
                  <div key={i} className={`day ${isBooked ? "booked" : ""} ${isLateCheckout ? "isLateCheckout" : ""}`}>
                    <span>{day}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Year;
