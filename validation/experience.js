const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};
  //this makes sure that null or undefined or an empty object gets turned into a string so
  //that the Validator.isEmpty test will work (it only works on strings)
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";


  if (Validator.isEmpty(data.title)) {
    errors.title = "Job Title field is required";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company Name is required";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date is required";
  }


  return {
    //which is es6 condensed from errors: errors
    errors,
    isValid: isEmpty(errors)
  };
};
