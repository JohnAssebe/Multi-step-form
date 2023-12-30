import { useState } from "react";
import SideBar from "../components/sideBar";
import FirstStepForm from "../components/step1Form";
import SecondStepForm from "../components/step2Form";
import ThirdStepForm from "../components/step3Form";
import FourthStepForm from "../components/step4Form";
const Form = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((value) => value + 1);
  const previousStep = (e) => {
    e.preventDefault();
    setStep((value) => value - 1);
  };

  const [formData, setFormData] = useState({});
  const updateFormData = (form) => {
    setFormData({ ...formData, ...form });
  };
  // console.log(formData);
  const backToStep2 = () => setStep(2);
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-Magnolia">
      <div className="flex flex-col md:flex-row md:items-start items-center justify-center w-full lg:w-2/3 md:overflow-hidden bg-white rounded-xl h-[550px]">
        <div className="w-full h-full md:basis-1/3">
          <SideBar step={step} />
        </div>
        <div className="z-20 w-full sm:w-2/3 -mt-14 md:mt-0 md:basis-2/3">
          {step == 1 && (
            <FirstStepForm
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
            />
          )}
          {step == 2 && (
            <SecondStepForm
              updateFormData={updateFormData}
              nextStep={nextStep}
              previousStep={previousStep}
            />
          )}
          {step == 3 && (
            <ThirdStepForm
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              previousStep={previousStep}
            />
          )}
          {step == 4 && (
            <FourthStepForm
              changeStep={backToStep2}
              formData={formData}
              previousStep={previousStep}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Form;
