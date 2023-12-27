import ArcadeImage from "../assets/images/icon-arcade.svg";
// import AdvancedImage from "../assets/images/icon-advanced.svg";
// import ProImage from "../assets/images/icon-pro.svg";
const SecondStepForm = () => {
  return (
    <section className="w-full px-4 py-10 bg-White">
      <div className="max-w-md px-2 mx-auto font-ubuntu">
        <h4 className="text-2xl font-bold text-Marineblue">Select your plan</h4>
        <p className="text-base text-Coolgray">
          you have the option of monthly or yearly billing.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 space-y-6 border">
            <img src={ArcadeImage} alt="arcade" />
            <div className="py-4">
              <h4 className="font-bold text-Marineblue">Arcade</h4>
              <p className="text-Coolgray">$9/year</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondStepForm;
