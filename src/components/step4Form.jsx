const FourthStepForm = () => {
  return (
    <section className="w-full px-4 py-10 bg-White">
      <div className="max-w-md px-2 mx-auto font-ubuntu">
        <h4 className="text-2xl font-bold text-Marineblue">Finishing up</h4>
        <p className="text-base text-Coolgray">
          Double-check everything looks OK before confirming.
        </p>
        <div className="w-full py-4 my-10 bg-Alabaster">
          <div className="flex items-center justify-between w-full px-3 py-4 border-b">
            <div>
              <h4 className="text-lg font-bold text-Marineblue">
                Arcade (Monthly)
              </h4>
              <p className="underline cursor-pointer underline-offset-8 text-Coolgray">
                change
              </p>
            </div>
            <p className="font-bold text-Marineblue">$9/mo</p>
          </div>

          <div className="flex items-center justify-between w-full px-3 py-2">
            <p className="text-Coolgray">Online service</p>
            <p className="text-Marineblue">+$1/mo</p>
          </div>
          <div className="flex items-center justify-between w-full px-3 py-2">
            <p className="text-Coolgray">Larger storage</p>
            <p className="text-Marineblue">+$2/mo</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full px-1 mt-20">
          <button className="text-md text-Coolgray">Go Back</button>
          <button className="px-4 py-2 text-white text-md bg-Marineblue rounded-xl">
            Next Step
          </button>
        </div>
      </div>
    </section>
  );
};

export default FourthStepForm;
