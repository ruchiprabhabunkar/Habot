import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import staticServices from "../../CommonServices/Static";
import Button from "../../DesignComponent/Button/Button";
const AboutPage = () => {
  const { ButtonHeading } = staticServices;
  return (
    <div className="bg-white p-8 md:p-16">
      {/* Left Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#000000]">
            Ready to dive into HABOT?
          </h1>
          <p className="mt-4 text-[#000000] font-light">
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant
            community of like-minded individuals, unlock valuable resources, and
            take the first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#00732F] text-white rounded  flex items-center space-x-2">
            <span className="font-bold ">Sign up Today !</span>
            <span className="p-2">
              <FaArrowRightLong />
            </span>
          </button>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4">
          {ButtonHeading.map((title) => (
            <Button heading={title.heading} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
