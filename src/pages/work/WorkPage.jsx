import React from "react";
import staticServices from "../../CommonServices/Static";
function WorkPage() {
  const steps = staticServices.WorkPageSteps;
  return (
    <section className=" py-12 flex items-center">
      <div className="container mx-auto  justify-center items-center text-center p-16">
        <h2 className="text-4xl font-bold text-center mb-4">How it Works?</h2>
        <p className="text-center text-base font-normal  text-gray-600 mb-8 p-10">
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with potential buyers, and build successful
          business relationships, sharing valuable feedback.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${
                step.id % 2 !== 0 ? "bg-[#E8FBFF]" : ""
              }  px-8 py-6 flex flex-col items-center text-center`}
            >
              <div className="text-4xl text-blue-500 mb-4">
                <img src={step.icon} alt="" />
              </div>
              <h3 className="text-xl  font-medium">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkPage;
