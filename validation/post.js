const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};
  //this makes sure that null or undefined or an empty object gets turned into a string so
  //that the Validator.isEmpty test will work (it only works on strings)
  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, {min: 10, max: 300})) {
    errors.text = "Post length must be between 10 and 300 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    //which is es6 condensed from errors: errors
    errors,
    isValid: isEmpty(errors)
  };
};
