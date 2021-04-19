const express = require('express');
const {check} = require('express-validator');

const User = require('../controllers/user');
const validate = require('../validation/validate');

const router = express.Router();

//STORE
router.post('/', [
    check('Email').isEmail().withMessage('Enter a valid email address'),
    check('Login').not().isEmpty().withMessage('Your Login is required'),
    check('FirstName').not().isEmpty().withMessage('Your first name is required'),
    check('LastName').not().isEmpty().withMessage('Your last name is required')
], validate, User.store);

//SHOW
router.get('/:id',  User.show);

//DELETE
router.post('/delete', User.destroy);

module.exports = router;