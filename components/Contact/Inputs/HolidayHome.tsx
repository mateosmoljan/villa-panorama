import React from "react";

function HolidayHome() {
  const [home, setHome] = React.useState("Villa Panorama");

  return (
    <div className="w-full">
      <label className="mb-1 block font-Bold text-sm">Holiday Home</label>
      <select
        required
        name="holidayHome"
        value={home}
        onChange={(e) => setHome(e.target.value)}
        className="w-full h-10 rounded-md border border-gray-300 bg-white px-3"
      >
        <option value="Villa Panorama">Villa Panorama</option>
      </select>
    </div>
  );
}

export default HolidayHome;
