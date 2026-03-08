import React from "react";

function Children() {
  const [children, setChildren] = React.useState("0");

  return (
    <div className="w-full">
      <label className="mb-1 block font-Bold text-sm">Children</label>
      <select
        required
        name="children"
        value={children}
        onChange={(e) => setChildren(e.target.value)}
        className="w-full h-10 rounded-md border border-gray-300 bg-white px-3"
      >
        {Array.from({ length: 15 }, (_, i) => i).map((v) => (
          <option key={v} value={v}>
            {v}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Children;
