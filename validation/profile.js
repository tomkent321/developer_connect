const Validator = require("validator");
const isEmpty = require("./is-empty");
//
module.exports = function validateProfileInput(data) {
  let errors = {};
  //this makes sure that null or undefined or an empty object gets turned into a string so
  //that the Validator.isEmpty test will work (it only works on strings)
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile Handle is required";
  } else if (!Validator.isLength(data.handle, { min: 2, max: 10 })) {
    errors.handle = "Handle must be between 2 and 10 characters";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }
  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills field is required";
  }

  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }

  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Youtube not a valid URL";
    }
  }
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Facebook not a valid URL";
    }
  }
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Twitter not a valid URL";
    }
  }
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Linked In not a valid URL";
    }
  }
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Instagram not a valid URL";
    }
  }

  return {
    //which is es6 condensed from errors: errors
    errors,
    isValid: isEmpty(errors)
  };
};
