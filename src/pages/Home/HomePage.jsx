import React from "react";
import Homeimage from "../../assests/images/home.png";
import InputBox from "../../DesignComponent/InputBox/InputBox";
import staticServices from "../../CommonServices/Static";

const HomePage = () => {
  const { HomePageInput } = staticServices;
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(7, 47, 87, 0.75) 100%, rgba(7, 47, 87, 0) 0%, rgba(7, 47, 87, 0.45) 45%), url(${Homeimage})`,
        }}
      >
        <div className="text-center p-8">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-2 max-w-4xl">
            Are You a Supplier?
          </h1>
          <p className="text-white text-2xl md:text-5xl max-w-4xl">
            Explore Matching Opportunities.
          </p>
          <div className="flex flex-col md:flex-row items-center mt-6 space-y-4 md:space-y-0 md:space-x-4 w-full max-w-4xl">
            {/* Input 1: Service Search */}

            {HomePageInput.map((input) => (
              <InputBox
                alt={input.alt}
                icon={input.icon}
                placeholder={input.placholder}
              />
            ))}

            {/* Search Button */}
            <button className="px-8 py-3 bg-[#00732F] text-white font-bold rounded w-full md:w-auto">
              Search
            </button>
          </div>
          <div className="mt-4 text-white">
            <span className="font-bold">Are you a buyer?</span>
            <a href="/" className="text-white ml-2 underline">
              Click here if you are looking to post requirements
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
