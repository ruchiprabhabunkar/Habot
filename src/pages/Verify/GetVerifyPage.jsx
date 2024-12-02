import React from "react";

const FAQPage = () => {
  return (
    <div className="flex items-center justify-around bg-[#E8FBFF]   px-6 py-20   ">
      {/* Left Section */}
      <div>
        <h2 className="text-3xl font-semibold text-black">
          Let Suppliers{" "}
          <span className=" border-b-2 border-[#EB7150]">Find You</span>
        </h2>
      </div>

      {/* Right Section */}
      <button className="bg-orange-500 text-white text-base w-52 font-semibold px-4 py-2 rounded-md hover:bg-orange-600 transition">
        Get Verified
      </button>
    </div>
  );
};

export default FAQPage;
