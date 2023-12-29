/*eslint-disable*/
import { useState } from "react";
import ArcadeImage from "../assets/images/icon-arcade.svg";
import AdvancedImage from "../assets/images/icon-advanced.svg";
import ProImage from "../assets/images/icon-pro.svg";
import "../styles/switch.css";
const SecondStepForm = ({ updateFormData, nextStep, previousStep }) => {
  const [toggle, setToggle] = useState(false);
  const updateToggle = () => setToggle((visible) => !visible);
  const [plan, setPlan] = useState("arcade");
  const handleSubmit = () => {
    updateFormData({
      plan: plan,
      plantime: toggle ? "yearly" : "monthly",
    });
    nextStep();
  };

  return (
    <section className="w-full px-4 py-10 bg-White">
      <div className="max-w-md px-2 mx-auto font-ubuntu">
        <h4 className="text-2xl font-bold text-Marineblue">Select your plan</h4>
        <p className="text-base text-Coolgray">
          you have the option of monthly or yearly billing.
        </p>
        <div className="grid grid-cols-3 gap-3 my-10">
          <div
            className={`p-3 space-y-6 duration-500 border rounded-lg cursor-pointer hover:border-Purplishblue hover:bg-Magnolia ${
              plan == "arcade" && "border-Purplishblue bg-Magnolia"
            }`}
            onClick={() => setPlan("arcade")}
          >
            <img src={ArcadeImage} alt="arcade" />
            <div className="py-4">
              <h4 className="font-bold text-Marineblue">Arcade</h4>
              <p className="text-Coolgray">$9/year</p>
            </div>
          </div>

          <div
            className={`p-3 space-y-6 duration-500 border rounded-lg cursor-pointer hover:border-Purplishblue hover:bg-Magnolia
            ${plan == "advanced" && "border-Purplishblue bg-Magnolia"}`}
            onClick={() => setPlan("advanced")}
          >
            <img src={AdvancedImage} alt="advanced" />
            <div className="py-4">
              <h4 className="font-bold text-Marineblue">Advanced</h4>
              <p className="text-Coolgray">$12/year</p>
            </div>
          </div>

          <div
            className={`p-3 space-y-6 duration-500 border rounded-lg cursor-pointer hover:border-Purplishblue hover:bg-Magnolia  ${
              plan == "pro" && "border-Purplishblue bg-Magnolia"
            }`}
            onClick={() => setPlan("pro")}
          >
            <img src={ProImage} alt="pro" />
            <div className="py-4">
              <h4 className="font-bold text-Marineblue">Pro</h4>
              <p className="text-Coolgray">$15/year</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-4 py-6 rounded-lg bg-Magnolia">
          <p>Monthly</p>
          <label className="switch">
            <input type="checkbox" checked={toggle} onChange={updateToggle} />
            <span className="slider round"></span>
          </label>
          <p>Yearly</p>
        </div>
        <div className="flex items-center justify-between w-full px-1 mt-20">
          <button
            className="text-md text-Coolgray"
            onClick={(e) => previousStep(e)}
          >
            Go Back
          </button>
          <button
            className="px-4 py-2 text-white text-md bg-Marineblue rounded-xl"
            onClick={handleSubmit}
          >
            Next Step
          </button>
        </div>
      </div>
    </section>
  );
};

export default SecondStepForm;
