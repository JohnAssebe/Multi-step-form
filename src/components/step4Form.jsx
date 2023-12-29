/*eslint-disable */
const FourthStepForm = ({ changeStep, formData, previousStep }) => {
  return (
    <section className="w-full px-4 py-10 bg-White">
      <div className="max-w-md px-2 mx-auto font-ubuntu">
        <h4 className="text-2xl font-bold text-Marineblue">Finishing up</h4>
        <p className="text-base text-Coolgray">
          Double-check everything looks OK before confirming.
        </p>
        <div className="w-full py-4 mt-10 mb-2 bg-Alabaster">
          <div className="flex items-center justify-between w-full px-3 py-4 border-b">
            <div>
              <h4 className="text-lg font-bold text-Marineblue">
                {formData.plan} ({formData.plantime})
              </h4>
              <p
                className="underline cursor-pointer underline-offset-8 text-Coolgray"
                onClick={changeStep}
              >
                change
              </p>
            </div>
            <p className="font-bold text-Marineblue">$9/mo</p>
          </div>
          {formData.addOns.map((addon, _) => (
            <div
              className="flex items-center justify-between w-full px-3 py-2"
              key={_}
            >
              <p className="text-Coolgray">{addon}</p>
              <p className="text-Marineblue">
                {addon == "online service" ? "+$1/mo" : "+$2/mo"}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between w-full px-3 py-2">
          <p className="text-Coolgray">total(per month)</p>
          <p className="text-lg font-bold text-Marineblue">+$12/mo</p>
        </div>
        <div className="flex items-center justify-between w-full px-1 mt-20">
          <button className="text-md text-Coolgray" onClick={previousStep}>
            Go Back
          </button>
          <button className="px-4 py-2 text-white text-md bg-Marineblue rounded-xl">
            Next Step
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourthStepForm;
