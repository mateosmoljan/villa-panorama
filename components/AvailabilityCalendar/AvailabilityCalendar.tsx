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
    to: new Date("08-30-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("09-01-2024"),
    to: new Date("09-22-2024"),
    middayCheckout: true,
  },
  {
    from: new Date("05-01-2025"),
    to: new Date("05-04-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("05-16-2025"),
    to: new Date("05-21-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("06-03-2025"),
    to: new Date("06-29-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("09-04-2025"),
    to: new Date("09-08-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("09-14-2025"),
    to: new Date("09-21-2025"),
    middayCheckout: true,
  },
  {
    from: new Date("10-19-2025"),
    to: new Date("10-24-2025"),
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
