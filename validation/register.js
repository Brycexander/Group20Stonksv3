const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.FirstName = !isEmpty(data.FirstName) ? data.FirstName : "";
    data.LastName = !isEmpty(data.LastName) ? data.LastName : "";
    data.Email = !isEmpty(data.Email) ? data.Email : "";
    data.Login = !isEmpty(data.Login) ? data.Login : "";
    data.Password = !isEmpty(data.Password) ? data.Password : "";
    data.Password2 = !isEmpty(data.Password2) ? data.Password2 : "";

    // Name checks
    if (Validator.isEmpty(data.FirstName)) {
    errors.FirstName = "First Name field is required";
    }
    if (Validator.isEmpty(data.LastName)) {
    errors.LastName = "Last Name field is required";
    }

    // Email checks
    if (Validator.isEmpty(data.Email)) {
    errors.Email = "Email field is required";
    } else if (!Validator.isEmail(data.Email)) {
    errors.Email = "Email is invalid";
    }

    // Login checks TODO: add if user is already taken
    if (Validator.isEmpty(data.Login)) {
    errors.Login = "Login field is required";
    }

    // Password checks
    if (Validator.isEmpty(data.Password)) {
    errors.Password = "Password field is required";
    }
    if (Validator.isEmpty(data.Password2)) {
    errors.Password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.Password, { min: 6, max: 30 })) {
    errors.Password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.Password, data.Password2)) {
    errors.Password2 = "Passwords must match";
    }
    return {
    errors,
    isValid: isEmpty(errors)
    };
    };