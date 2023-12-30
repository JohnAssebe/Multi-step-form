/*eslint-disable*/
import { useFormik } from "formik";
import { validate } from "../utils/validate";
const FirstStepForm = ({ formData, updateFormData, nextStep }) => {
  const formik = useFormik({
    initialValues: {
      name: formData?.name || "",
      email: formData?.email || "",
      phoneNumber: formData?.phoneNumber || "",
    },
    validate,
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
            <div className="flex items-center justify-between w-full">
              <label htmlFor="name" className="block text-sm text-Marineblue">
                Name
              </label>
              {formik.touched.name && formik.errors.name && (
                <div className="pr-2">
                  <p className="text-sm text-red-500">{formik.errors.name}</p>
                </div>
              )}
            </div>
            <input
              id="name"
              type="text"
              className={`w-full px-3 py-2 border rounded-lg outline-none focus:border-Marineblue border-slate-300 placeholder:text-Coolgray placeholder:text-sm ${
                formik.errors.name && "border-red-600"
              }`}
              placeholder="e.g. Stephen King"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="w-full space-y-2">
            <div className="flex items-center justify-between w-full">
              <label htmlFor="name" className="block text-sm text-Marineblue">
                Email Address
              </label>
              {formik.touched.email && formik.errors.email && (
                <div className="pr-2">
                  <p className="text-sm text-red-500">{formik.errors.email}</p>
                </div>
              )}
            </div>
            <input
              id="name"
              type="email"
              className={`w-full px-3 py-2 border rounded-lg outline-none focus:border-Marineblue border-slate-300 placeholder:text-Coolgray placeholder:text-sm ${
                formik.errors.email && "border-red-600"
              }`}
              placeholder="e.g. StephenKing@lorem.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="w-full space-y-2">
            <div className="flex items-center justify-between w-full">
              <label htmlFor="name" className="block text-sm text-Marineblue">
                Phone Number
              </label>
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="pr-2">
                  <p className="text-sm text-red-500">
                    {formik.errors.phoneNumber}
                  </p>
                </div>
              )}
            </div>
            <input
              id="name"
              type="tel"
              className={`w-full px-3 py-2 border rounded-lg outline-none focus:border-Marineblue border-slate-300 placeholder:text-Coolgray placeholder:text-sm ${
                formik.errors.phoneNumber && "border-red-600"
              }`}
              placeholder="e.g. +12 345 678 90"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
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
