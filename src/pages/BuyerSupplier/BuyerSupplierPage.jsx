import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import staticServices from "../../CommonServices/Static";
const ContactPage = () => {
  // State to toggle between Buyer and Supplier
  const [activeTab, setActiveTab] = useState("buyer");
  const { ContactPageBuyerList, ContactPageSupplier, ContactPageToggle } =
    staticServices;

  const [list, setList] = useState(ContactPageBuyerList);
  // Function to handle tab switching
  const toggleTab = (e) => {
    setActiveTab(e.target.id);
    if (e.target.id === "buyer") {
      setList(ContactPageBuyerList);
    } else {
      setList(ContactPageSupplier);
    }
  };

  return (
    <div className="bg-[#072F57] text-white py-16 px-4 sm:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section: Video or Image */}
        <div className="flex justify-center">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/i8tgRHXx4oQ?si=BSi_yTTokK4ntIvE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg shadow-lg max-w-xl w-full"
          ></iframe>
        </div>

        {/* Right Section: Tabs and Content */}
        <div className="h-auto">
          {/* Tab Headers */}
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            {ContactPageToggle.map((btn) => (
              <button
                id={btn.id}
                onClick={toggleTab}
                className={`text-lg md:text-2xl font-bold pb-1 mb-5 w-32 sm:w-52 ${
                  activeTab === btn.id
                    ? "text-[#EB7150] border-b-2 border-[#EB7150]"
                    : "text-[#FFFFFF]"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <ul className="space-y-4 mx-4 sm:mx-10 text-sm sm:text-lg h-36">
            {list.map((item) => (
              <li className="flex items-center">
                <span className="bg-[#0AA06E] w-6 h-6 rounded-full flex items-center justify-center mr-3">
                  <FaCheckCircle />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
