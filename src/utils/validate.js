export const validate = (values) => {
  const errors = {};
  const phoneExp = /^(^\+251|^251|^0)?(9|7)\d{8}$/;
  if (!values.name) {
    errors.name = "Name field is required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "phone field is required";
  } else if (!phoneExp.test(values.phoneNumber)) {
    errors.phoneNumber = "Invalid phone number ethiopian";
  }
  return errors;
};
