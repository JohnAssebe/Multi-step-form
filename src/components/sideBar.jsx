const SideBar = () => {
  return (
    <div className="object-cover p-4 bg-center bg-no-repeat bg-cover rounded-xl bg-desktopbg">
      <div className="flex flex-col items-start justify-start gap-8 py-10 text-md text-White font-ubuntu">
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 rounded-full border-White">
            <span>1</span>
          </div>
          <div className="pl-2">
            <p className="text-Lightgray">Step 1</p>
            <h3 className="font-bold uppercase">Your info</h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 rounded-full border-White">
            <span>2</span>
          </div>
          <div className="pl-2">
            <p className="text-Lightgray">Step 2</p>
            <h3 className="font-bold uppercase">Select Plan</h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 rounded-full border-White">
            <span>3</span>
          </div>
          <div className="pl-2">
            <p className="text-Lightgray">Step 3</p>
            <h3 className="font-bold uppercase">Add-Ons</h3>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 bg-transparent border-2 rounded-full border-White">
            <span>4</span>
          </div>
          <div className="pl-2">
            <p className="text-Lightgray">Step 4</p>
            <h3 className="font-bold uppercase">Summary</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
