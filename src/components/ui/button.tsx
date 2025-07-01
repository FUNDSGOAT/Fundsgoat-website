import * as React from "react";

export function Button({ className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-dark-green-600 text-white rounded-md hover:bg-dark-green-700 transition ${className}`}
      {...props}
    />
  );
}
