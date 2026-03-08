import React, { useEffect, useState, useCallback } from "react";
import { handleBookings, isValidMonthsOption } from "./Utils";
import Controls from "./Controls";
import Year from "./Year";
import Key from "./Key";
import { ICalendarPropTypes, IControls, blockedDaysType, IYear } from "./types";

const Calendar = ({ bookings = [], showNumberOfMonths = 12, showKey = true, showCurrentYear = true, showControls = true }: ICalendarPropTypes): JSX.Element => {
  const initialMonth = 1;
  const initialPage = 1;
  const totalCalendarMonths = 12;
  const _showNumberOfMonths = isValidMonthsOption(showNumberOfMonths) ? showNumberOfMonths : totalCalendarMonths;
  const currentYear = new Date().getFullYear();
  const [activeYear, setActiveYear] = useState(currentYear);
  const [bookedDates, setBookedDates] = useState<blockedDaysType>([]);
  const [lateCheckouts, setLateCheckouts] = useState<blockedDaysType>([]);
  const [monthsFrom, setMonthsFrom] = useState(initialMonth);
  const [page, setPage] = useState(initialPage);

  const totalPages = totalCalendarMonths / _showNumberOfMonths;
  const resetCalendarYear = () => { setMonthsFrom(initialMonth); setPage(initialPage); };

  const goToPage = useCallback((_page: number): void => {
    setMonthsFrom(_page * _showNumberOfMonths - _showNumberOfMonths + 1);
    setPage(_page);
  }, [_showNumberOfMonths]);

  const initCal = useCallback(() => {
    setActiveYear(new Date().getFullYear());
    if (_showNumberOfMonths === totalCalendarMonths) resetCalendarYear();
    else goToPage(1);
  }, [goToPage, _showNumberOfMonths]);

  const prev = useCallback(() => {
    if (page === 1) {
      setActiveYear((y) => y - 1);
      if (_showNumberOfMonths === totalCalendarMonths) return resetCalendarYear();
      setMonthsFrom(totalCalendarMonths - _showNumberOfMonths + 1);
      return setPage(totalPages);
    }
    setMonthsFrom((m) => m - _showNumberOfMonths);
    setPage((p) => p - 1);
  }, [page, _showNumberOfMonths, totalPages]);

  const next = useCallback(() => {
    if (page === totalPages) {
      setActiveYear((y) => y + 1);
      return resetCalendarYear();
    }
    setMonthsFrom(page * _showNumberOfMonths + 1);
    setPage((p) => p + 1);
  }, [page, totalPages, _showNumberOfMonths]);

  useEffect(() => {
    const { halfDays, bookedDays } = handleBookings({ bookings, year: activeYear });
    setBookedDates(bookedDays);
    setLateCheckouts(halfDays);
  }, [bookings, activeYear]);

  const configControls: IControls = { prev, next, initCal };
  const configYear: IYear = { showNumberOfMonths: _showNumberOfMonths, bookedDates, lateCheckouts, activeYear, monthsFrom };

  const layoutClassName = _showNumberOfMonths !== totalCalendarMonths ? (_showNumberOfMonths > 1 ? "twoCol" : "singleCol") : "";

  return (
    <section className={`calendar ${layoutClassName}`} data-testid="calendar">
      <h2 className="text-4xl text-dark_blue_black mb-4">Villa Panorama</h2>
      <div className="wrap overflow-hidden">
        {(showControls || showCurrentYear) && (
          <div className="controlWrap">
            {showCurrentYear && <h1 className="currentYear" data-testid="currentYear">{activeYear}</h1>}
            {showControls && <Controls {...configControls} />}
          </div>
        )}

        <div className="overflow-x-hidden overflow-y-scroll my-2 p-4 pt-6 h-[260px] sm:h-[510px]">
          <Year {...configYear} />
        </div>

        {showKey && <Key />}
      </div>
    </section>
  );
};

export default Calendar;
