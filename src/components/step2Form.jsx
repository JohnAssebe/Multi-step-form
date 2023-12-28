import {useState} from "react";
import ArcadeImage from "../assets/images/icon-arcade.svg";
import AdvancedImage from "../assets/images/icon-advanced.svg";
import ProImage from "../assets/images/icon-pro.svg";
import "../styles/switch.css";
const SecondStepForm = () => {
  const [toggle,setToggle]=useState();
  const updateToggle=()=>setToggle(visible=>!visible)
  return (
    <section className="w-full px-4 py-10 bg-White">
      <div className="max-w-md px-2 mx-auto font-ubuntu">
        <h4 className="text-2xl font-bold text-Marineblue">Select your plan</h4>
        <p className="text-base text-Coolgray">
          you have the option of monthly or yearly billing.
        </p>
        <div className="grid grid-cols-3 gap-3 my-10">
          <div className="p-3 space-y-6 border rounded-lg cursor-pointer hover:border-Purplishblue hover:bg-Magnolia duration-500">
            <img src={ArcadeImage} alt="arcade" />
            <div className="py-4">
              <h4 className="font-bold text-Marineblue">Arcade</h4>
              <p className="text-Coolgray">$9/year</p>
            </div>
          </div>

           <div className="p-3 space-y-6 border rounded-lg cursor-pointer hover:border-Purplishblue hover:bg-Magnolia duration-500">
            <img src={AdvancedImage} alt="advanced" />
            <div className="py-4">
              <h4 className="font-bold text-Marineblue">Advanced</h4>
              <p className="text-Coolgray">$12/year</p>
            </div>
          </div>


           <div className="p-3 space-y-6 border rounded-lg cursor-pointer hover:border-Purplishblue hover:bg-Magnolia duration-500">
            <img src={ProImage} alt="pro" />
            <div className="py-4">
              <h4 className="font-bold text-Marineblue">Pro</h4>
              <p className="text-Coolgray">$15/year</p>
            </div>
          </div>
        </div>
        <div className="w-full bg-Magnolia rounded-lg flex items-center justify-center gap-2 py-6 gap-4">
           <p>Monthly</p>
           <label className="switch">
            <input type="checkbox" checked={toggle} onChange={()=>updateToggle}/>
            <span className="slider round"></span>
          </label>
          <p>Yearly</p>
        </div>
        <div className="w-full px-1 flex justify-between items-center mt-20">
          <button className="text-md text-Coolgray">Go Back</button>
          <button className="text-md text-white bg-Marineblue rounded-xl px-4 py-2">Next Step</button>
        </div>
      </div>
    </section>
  );
};

export default SecondStepForm;
