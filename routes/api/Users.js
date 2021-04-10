const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/register", (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ Login: req.body.Login }).then(user => {
        if (user) {
        return res.status(400).json({ Login: "Login already exists" });
        } else {
        const newUser = new User({
            FirstName: req.body.FirstName,
            LastName : req.body.LastName,
            Email: req.body.Email,
            Login: req.body.Login,
            Password: req.body.Password
        });
    // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.Password, salt, (err, hash) => {
            if (err) throw err;
            newUser.Password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {

    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    // Find User by Login
    User.findOne({ Login: req.body.Login }).then(user => {
        // Check if user exists
        if (!user) {
        return res.status(404).json({ loginNotfound: "Login not found" });
    }

    // Check password
    bcrypt.compare(req.body.Password, user.Password).then(isMatch => {
        if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
            id: user.id,
            login: user.Login
        };

        // Sign token
        jwt.sign(
            payload,
            keys.secretOrKey,
            {
                expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
                res.json({
                success: true,
                token: "Bearer " + token
                });
            }
        );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

  module.exports = router;