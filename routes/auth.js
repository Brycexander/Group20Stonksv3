const express = require('express');
const {check} = require('express-validator');

const Auth = require('../controllers/auth');
const Password = require('../controllers/password');
const validate = require('../validation/validate');

const router = express.Router();

router.post('/register', [
    check('Email').isEmail().withMessage('Enter a valid email address'),
    check('Password').not().isEmpty().isLength({min: 6}).withMessage('Must be at least 6 chars long'),
    check('Password2').not().equals('Password').withMessage('Passwords do not match'),
    check('FirstName').not().isEmpty().withMessage('Your first name is required'),
    check('LastName').not().isEmpty().withMessage('Your last name is required'),
    check('Login').not().isEmpty().withMessage('Login is required')
], validate, Auth.register);

router.post("/login", [
    check('Login').not().isEmpty().withMessage('Enter a valid login'),
    check('Password').not().isEmpty(),
], validate, Auth.login);


//EMAIL Verification
router.get('/verify/:token', Auth.verify);
router.post('/resend', Auth.resendToken);

//Password RESET
router.post('/recover', [
    check('Email').isEmail().withMessage('Enter a valid email address'),
], validate, Password.recover);

router.get('/reset/:token', Password.reset);

router.post('/reset/:token', [
    check('Password').not().isEmpty().isLength({min: 6}).withMessage('Must be at least 6 chars long'),
    check('ConfirmPassword', 'Passwords do not match').custom((value, {req}) => (value === req.body.Password)),
], validate, Password.resetPassword);


module.exports = router;