import { useState } from "react";

export function Select({ children, onValueChange, required }) {
  const [value, setValue] = useState("");

  return (
    <select
      required={required}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        onValueChange(e.target.value);
      }}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-500"
    >
      {children}
    </select>
  );
}

export const SelectTrigger = ({ children }) => <>{children}</>;
export const SelectValue = ({ placeholder }) => (
  <option value="" disabled hidden>
    {placeholder}
  </option>
);

export const SelectContent = ({ children }) => <>{children}</>;
export const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);
