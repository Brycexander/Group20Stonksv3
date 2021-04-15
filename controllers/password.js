const User = require('../models/User');
const {sendEmail} = require('../utils/index');
const crypto = require('crypto');

// @route POST api/auth/recover
// @desc Recover Password - Generates token and Sends password reset email
// @access Public
exports.recover = async (req, res) => {
    try {
        const { Email } = req.body;

        const user = await User.findOne({ Email });

        if (!user) return res.status(401).json({ message: 'The email address ' + req.body.Email + ' is not associated with any account. Double-check your email address and try again.'});

        //Generate and set password reset token
        user.generatePasswordReset();

        // Save the updated user object
        await user.save();

        // send email
        let subject = "Password change request";
        let to = user.Email;
        let from = process.env.FROM_EMAIL;
        let link = "http://" + req.headers.host + "/api/auth/reset/" + user.ResetPasswordToken;
        let html = `<p>Hi ${user.Login}</p>
                    <p>Please click on the following <a href="${link}">link</a> to reset your password.</p> 
                    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`;

        await sendEmail({to, from, subject, html});

        res.status(200).json({message: 'A reset email has been sent to ' + user.Email + '.'});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

// @route GET api/auth/reset
// @desc Reset Password - Validate password reset token and shows the password reset view
// @access Public
exports.reset = async (req, res) => {
    try {
        const { Token } = req.params;

        const user = await User.findOne({ ResetPasswordToken: Token });

        if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});

        // Redirect user to form with the email address
        res.render('reset', {user});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

// @route POST api/auth/reset
// @desc Reset Password
// @access Public
exports.resetPassword = async (req, res) => {
    try {
        const { ResetPasswordToken } = req.params;

        const user = await User.findOne({ ResetPasswordToken });

        if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});

        // Set the new password
        user.Password = req.body.Password;
        user.ResetPasswordToken = undefined;
        user.ResetPasswordExpires = undefined;
        user.IsVerified = true;

        // Save the updated user object
        await user.save();

        let subject = "Your password has been changed";
        let to = user.Email;
        let from = process.env.FROM_EMAIL;
        let html = `<p>Hi ${user.Login}</p>
                    <p>This is a confirmation that the password for your account ${user.Login} has just been changed.</p>`

        await sendEmail({to, from, subject, html});

        res.status(200).json({message: 'Your password for ' + user.Login + ' has been updated.'});

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};