"use client";

import Calendar from "./index";
import "./style.css";

export const bookings = [
  {
    from: new Date("01-04-2025"),
    to: new Date("01-07-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("01-20-2025"),
    to: new Date("01-27-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("02-07-2025"),
    to: new Date("02-09-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("02-14-2025"),
    to: new Date("02-18-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("02-21-2025"),
    to: new Date("03-10-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("03-28-2025"),
    to: new Date("03-31-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("04-03-2025"),
    to: new Date("04-08-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("04-11-2025"),
    to: new Date("04-13-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("04-17-2025"),
    to: new Date("04-21-2025"),
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
    from: new Date("05-08-2025"),
    to: new Date("05-11-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("05-16-2025"),
    to: new Date("06-01-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("06-03-2025"),
    to: new Date("06-29-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("06-30-2025"),
    to: new Date("07-04-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("07-10-2025"),
    to: new Date("07-22-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("08-04-2025"),
    to: new Date("08-16-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("08-22-2025"),
    to: new Date("08-26-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("09-01-2025"),
    to: new Date("10-06-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("10-11-2025"),
    to: new Date("10-17-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("10-19-2025"),
    to: new Date("10-26-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("05-24-2026"),
    to: new Date("06-04-2026"),
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
