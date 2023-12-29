/*eslint-disable*/
import { useFormik } from "formik";
const FirstStepForm = ({ formData, updateFormData, nextStep }) => {
  const formik = useFormik({
    initialValues: {
      name: formData?.name || "",
      email: formData?.email || "",
      phoneNumber: formData?.phoneNumber || "",
    },
    onSubmit: (values) => {
      updateFormData(values);
      nextStep();
    },
  });
  return (
    <form className="w-full px-4 py-10 bg-White" onSubmit={formik.handleSubmit}>
      <div className="max-w-md px-2 mx-auto font-ubuntu">
        <h4 className="text-2xl font-bold text-Marineblue">Personal info</h4>
        <p className="text-base text-Coolgray">
          please provide your name,email address,and phone number
        </p>
        <div className="flex flex-col items-start gap-6 py-10">
          <div className="w-full space-y-2">
            <label htmlFor="name" className="block text-sm text-Marineblue">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:border-Marineblue border-slate-300 placeholder:text-Coolgray placeholder:text-sm"
              placeholder="e.g. Stephen King"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="name" className="block text-sm text-Marineblue">
              Email Address
            </label>
            <input
              id="name"
              type="email"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:border-Marineblue border-slate-300 placeholder:text-Coolgray placeholder:text-sm"
              placeholder="e.g. StephenKing@lorem.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>

          <div className="w-full space-y-2">
            <label htmlFor="name" className="block text-sm text-Marineblue">
              Phone Number
            </label>
            <input
              id="name"
              type="tel"
              className="w-full px-3 py-2 border rounded-lg outline-none focus:border-Marineblue border-slate-300 placeholder:text-Coolgray placeholder:text-sm"
              placeholder="e.g. +12 345 678 90"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 ml-auto text-base font-semibold text-white rounded-md bg-Marineblue"
          >
            Next Step
          </button>
        </div>
      </div>
    </form>
  );
};

export default FirstStepForm;
