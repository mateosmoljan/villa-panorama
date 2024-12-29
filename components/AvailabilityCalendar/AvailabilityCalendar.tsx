"use client";

import Calendar from "./index";
import "./style.css";

export const bookings = [
  {
    from: new Date("05-01-2024"),
    to: new Date("07-02-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("07-04-2024"),
    to: new Date("08-03-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("08-05-2024"),
    to: new Date("11-10-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("11-16-2024"),
    to: new Date("11-23-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("01-04-2025"),
    to: new Date("01-07-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("02-07-2025"),
    to: new Date("02-09-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("03-07-2025"),
    to: new Date("03-10-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("04-11-2025"),
    to: new Date("04-13-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("04-23-2025"),
    to: new Date("04-30-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("05-01-2025"),
    to: new Date("05-04-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("05-16-2025"),
    to: new Date("06-29-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("07-10-2025"),
    to: new Date("07-23-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("08-04-2025"),
    to: new Date("08-09-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("09-10-2025"),
    to: new Date("09-14-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("09-14-2025"),
    to: new Date("09-21-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("10-19-2025"),
    to: new Date("10-26-2025"),
    middayCheckout: true,
  },
];

function AvailabilityCalendar() {
  return (
    <>
      <Calendar bookings={bookings} />
    </>
  );
}

export default AvailabilityCalendar;
