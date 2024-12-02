import React from "react";

function Button({ heading }) {
  return (
    <button className="border border-orange-500 rounded px-6 py-4 hover:bg-orange-100">
      {heading}
    </button>
  );
}

export default Button;
