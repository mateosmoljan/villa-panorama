import { getCalendarData } from "@/lib/Calendar";
import { useLocale } from "next-intl";

const Key = (): JSX.Element => {
  const localeActive = useLocale();
  const CalendarData = getCalendarData(localeActive);
  return (
    <div className="key" data-testid="key">
      <div className="type bookedType" data-testid="bookedType">
        <span>{CalendarData.data[0].booked}</span>
      </div>

      {/* <div className="type CheckInType" data-testid="lateCheckoutType">
        <span>{CalendarData.data[0].checkIn}</span>
      </div>
      <div className="type lateCheckoutType" data-testid="lateCheckoutType">
        <span>{CalendarData.data[0].checkOut}</span>
      </div> */}
    </div>
  );
};

export default Key;
