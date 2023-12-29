/*eslint-disable*/
import { useState } from "react";
const ThirdStepForm = ({ updateFormData, nextStep, previousStep }) => {
  const [selected, setSelected] = useState([]);
  const updateSelected = (term) =>
    !selected.includes(term)
      ? setSelected((selected) => [...selected, term])
      : setSelected((selected) => selected.filter((ele) => ele != term));
  const handleUpdate = () => {
    updateFormData({
      addOns: selected,
    });
    nextStep();
  };
  return (
    <section className="w-full px-4 py-10 bg-White">
      <div className="max-w-md px-2 mx-auto font-ubuntu">
        <h4 className="text-2xl font-bold text-Marineblue">Pick add-ons</h4>
        <p className="text-base text-Coolgray">
          Add-ons help enhance your gaming experience
        </p>
        <form className="flex flex-col items-start justify-center gap-3 my-6">
          <div
            className={`flex items-center justify-between w-full p-3 border rounded-lg cursor-pointer border-slate-300 hover:border-Purplishblue hover:bg-Magnolia ${
              selected.includes("online service") &&
              "border-Purplishblue bg-Magnolia"
            }`}
            onClick={() => updateSelected("online service")}
          >
            <div className="flex items-center justify-center gap-5">
              <div className="relative w-5 h-5">
                <input
                  type="checkbox"
                  className="absolute w-full h-full mt-1 bg-white border rounded-sm appearance-none border-slate-300 peer shrink-0 checked:bg-Purplishblue checked:border-0"
                  checked={selected.includes("online service")}
                  onChange={() => updateSelected("online service")}
                />

                <svg
                  className="absolute hidden w-4 h-4 mt-1 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 peer-checked:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-Marineblue">
                  Online service
                </h4>
                <p className="text-sm text-Coolgray">
                  Access to multiplayer games
                </p>
              </div>
            </div>
            <p className="text-Purplishblue">+$1/mo</p>
          </div>

          <div
            className={`flex items-center justify-between w-full p-3 border rounded-lg cursor-pointer border-slate-300 hover:border-Purplishblue hover:bg-Magnolia ${
              selected.includes("larger storage") &&
              "border-Purplishblue bg-Magnolia"
            }`}
            onClick={() => updateSelected("larger storage")}
          >
            <div className="flex items-center justify-center gap-5">
              <div className="relative w-5 h-5">
                <input
                  type="checkbox"
                  className="absolute w-full h-full mt-1 bg-white border rounded-sm appearance-none border-slate-300 peer shrink-0 checked:bg-Purplishblue checked:border-0"
                  checked={selected.includes("larger storage")}
                  onChange={() => updateSelected("larger storage")}
                />

                <svg
                  className="absolute hidden w-4 h-4 mt-1 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 peer-checked:block group-aria-checked:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-Marineblue">
                  Larger Storage
                </h4>
                <p className="text-sm text-Coolgray">Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="text-Purplishblue">+$2/mo</p>
          </div>

          <div
            className={`flex items-center justify-between w-full p-3 border rounded-lg cursor-pointer border-slate-300 hover:border-Purplishblue hover:bg-Magnolia ${
              selected.includes("customizable profile") &&
              "border-Purplishblue bg-Magnolia"
            }`}
            onClick={() => updateSelected("customizable profile")}
          >
            <div className="flex items-center justify-center gap-5">
              <div className="relative w-5 h-5">
                <input
                  type="checkbox"
                  className="absolute w-full h-full mt-1 bg-white border rounded-sm appearance-none border-slate-300 peer shrink-0 checked:bg-Purplishblue checked:border-0"
                  checked={selected.includes("customizable profile")}
                  onChange={() => updateSelected("customizable profile")}
                />

                <svg
                  className="absolute hidden w-4 h-4 mt-1 -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2 peer-checked:block group-aria-checked:block"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="text-lg font-bold text-Marineblue">
                  Customizable profile
                </h4>
                <p className="text-sm text-Coolgray">
                  custom theme on your profile
                </p>
              </div>
            </div>
            <p className="text-Purplishblue">+$2/mo</p>
          </div>

          <div className="flex items-center justify-between w-full px-1 mt-20">
            <button className="text-md text-Coolgray" onClick={previousStep}>
              Go Back
            </button>
            <button
              className="px-4 py-2 text-white text-md bg-Marineblue rounded-xl"
              onClick={() => handleUpdate()}
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ThirdStepForm;
