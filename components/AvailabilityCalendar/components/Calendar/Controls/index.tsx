import React from "react";
import { IControls } from "./../types";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { getCalendarData } from "@/lib/Calendar";
import { useLocale } from "next-intl";

const Controls = ({ prev, initCal, next }: IControls): JSX.Element => {
  const localeActive = useLocale();
  const CalendarData = getCalendarData(localeActive);
  return (
    <div className="controls" data-testid="controls">
      <button
        className="btn back flex gap-1"
        onClick={() => prev()}
        data-testid="back"
      >
        <MdKeyboardDoubleArrowLeft className="text-xl" />
        {CalendarData.data[0].back}
      </button>

      <button className="btn now" onClick={() => initCal()} data-testid="now">
        {CalendarData.data[0].reset}
      </button>

      <button
        className="btn next flex gap-1"
        onClick={() => next()}
        data-testid="next"
      >
        {CalendarData.data[0].next}
        <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
      </button>
    </div>
  );
};

export default Controls;
