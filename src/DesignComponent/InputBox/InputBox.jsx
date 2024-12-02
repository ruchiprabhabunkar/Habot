import React from "react";

function InputBox({ icon, alt, placeholder }) {
  return (
    <div className="relative w-full max-w-xs md:max-w-md">
      {/* Icon */}
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
        <img src={icon} alt={alt} />
      </span>

      {/* Input Field */}
      <input
        type="text"
        placeholder={placeholder}
        className="pl-10 py-3 sm:w-[400px] md:w-[330px] w-[320px] bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
}

export default InputBox;
