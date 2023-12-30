/*eslint-disable*/
const SideBar = ({ step }) => {
  return (
    <div className="relative object-cover h-[300px] flex items-center justify-center md:items-start md:h-full bg-center bg-no-repeat bg-cover bg-mobilebg md:p-4 md:bg-desktopbg">
      <div className="flex items-center justify-center gap-8 py-2 md:py-10 md:items-start md:justify-start md:flex-col text-md text-White font-ubuntu">
        <div className="flex items-center justify-center gap-3">
          <div
            className={`flex duration-500 items-center justify-center w-12 h-12 bg-transparent border-2 rounded-full border-White ${
              step >= 1 && "bg-Pastelblue text-black"
            }`}
          >
            <span>1</span>
          </div>
          <div className="hidden pl-2 md:block">
            <p className="text-Lightgray">Step 1</p>
            <h3 className="font-bold uppercase">Your info</h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div
            className={`flex duration-500 items-center justify-center w-12 h-12 bg-transparent border-2 rounded-full border-White ${
              step >= 2 && "bg-Pastelblue text-black"
            }`}
          >
            <span>2</span>
          </div>
          <div className="hidden pl-2 md:block">
            <p className="text-Lightgray">Step 2</p>
            <h3 className="font-bold uppercase">Select Plan</h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div
            className={`flex duration-500 items-center justify-center w-12 h-12 bg-transparent border-2 rounded-full border-White ${
              step >= 3 && "bg-Pastelblue text-black"
            }`}
          >
            <span>3</span>
          </div>
          <div className="hidden pl-2 md:block">
            <p className="text-Lightgray">Step 3</p>
            <h3 className="font-bold uppercase">Add-Ons</h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div
            className={`flex duration-500 items-center justify-center w-12 h-12 bg-transparent border-2 rounded-full border-White ${
              step >= 4 && "bg-Pastelblue text-black"
            }`}
          >
            <span>4</span>
          </div>
          <div className="hidden pl-2 md:block">
            <p className="text-Lightgray">Step 4</p>
            <h3 className="font-bold uppercase">Summary</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
