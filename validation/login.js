const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.Login = !isEmpty(data.Login) ? data.Login : "";
    data.Password = !isEmpty(data.Password) ? data.Password : "";

    // Login checks
    if (Validator.isEmpty(data.Login)) {
    errors.login = "Login field is required";
    }
     
    
    //else if (!Validator.isEmail(data.Email)) {
    //errors.email = "Email is invalid";
    //}


    // Password checks
    if (Validator.isEmpty(data.Password)) {
    errors.password = "Password field is required";
    }
    return {
    errors,
    isValid: isEmpty(errors)
    };
};