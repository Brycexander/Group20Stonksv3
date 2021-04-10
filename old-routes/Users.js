const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

const sgMail = require('@sendgrid/mail');

// Load User model
const User = require("../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public

router.get("/register", function(req, res){
    res.render("register");
});

router.post("/register", async function(req, res){
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    
    var newUser = new User();

    User.findOne({ Login: req.body.Login }, function(err, user) {
        if (user)
        {
            return res.status(400).json({ Login: "Login already exists" });
        }
        else
        {
            newUser.FirstName = req.body.FirstName,
            newUser.LastName = req.body.LastName,
            newUser.Email = req.body.Email,
            newUser.EmailToken = crypto.randomBytes(64).toString('hex'),
            newUser.Login = req.body.Login,
            newUser.Password = req.body.Password
        }
    });

    User.register(newUser, req.body.password, async function(err, user){
        if (err) {
            req.flash("error", err.message);
            return res.redirect("/register");
        }
        const msg = {
            from: 'stockhub.app@gmail.com',
            to: newUser.Email,
            subject: 'StockHub - Verify your Email!',
            text: `
                Just one more step before you can get trading. 
                Please copy and paste the following link into your browser
                to verify your account.
                http://${req.headers.host}/verify-email?token=${newUser.EmailToken}
            `,
            html: `
            <h1>Just one more step before you can get trading.</h1>
            <p>Please copy and paste the following link into your browser
            to verify your account.</p>
            <a href="http://${req.headers.host}/verify-email?token=${newUser.EmailToken}">Verify your account</a>
            ` 
        };
        
        try {
            await sgMail.send(msg);
            req.flash('success', 'Thanks for registering, please verify your email so you can get trading!');
            res.redirect('/');
        }
        catch(error) {
            console.log(error);
            req.flash('error', 'Something went wrong. Please try again.');
            res.redirect('/');
        }
    }
    );
});

// Email Verification Route
router.get('/verify-email', async(req, res, next) => {
    try {
        const user = await User.findOne({ EmailToken: req.query.token });
        if (!user) {
            req.flash('error', 'Something went wrong. Please try again.');
            return res.redirect('/');
        }
        user.EmailToken = null;
        user.IsVerified = true;
        await user.save();
        res.flash('success', 'Awesome! Your email is now verified, you can now go ahead and login.');
        res.redirect('/');
    }
    catch(error) {
        console.log(error);
        req.flash('error', 'Something went wrong. Please try again.');
        res.redirect('/');
    }
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