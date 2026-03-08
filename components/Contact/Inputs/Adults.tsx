import React from "react";

function Adults() {
  const [adults, setAdults] = React.useState("2");

  return (
    <div className="w-full">
      <label className="mb-1 block font-Bold text-sm">Adults</label>
      <select
        required
        name="adults"
        value={adults}
        onChange={(e) => setAdults(e.target.value)}
        className="w-full h-10 rounded-md border border-gray-300 bg-white px-3"
      >
        {Array.from({ length: 16 }, (_, i) => i + 1).map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Adults;
