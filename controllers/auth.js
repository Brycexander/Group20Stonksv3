const User = require('../models/User');
const Token = require('../models/token');
const {sendEmail} = require('../utils/index');

// @route POST api/auth/register
// @desc Register user
// @access Public
exports.register = async (req, res) => {
    try {
        const { Email, Login } = req.body;

        // Make sure this account doesn't already exist
        const user = await User.findOne({ Email: req.body.Email, Login: req.body.Login });

        if (user) return res.status(401).json({message: 'The email address/login you have entered is already associated with another account.'});

        const newUser = new User({ ...req.body, role: "basic" });

        const portfolio = await Portfolio.findOne({ Login: req.body.Login });
        
        if (portfolio) return res.status(401).json({message: "Portfolio already created"});
        
        const newPortfolio = new Portfolio({ Login: req.body.Login });

        const user_ = await newUser.save();
        const portfolio_ = await newPortfolio.save();

        await sendVerificationEmail(user_, req, res);

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
};

// @route POST api/auth/login
// @desc Login user and return JWT token
// @access Public
exports.login = async (req, res) => {
    try {
        const { Login, Password } = req.body;

        const user = await User.findOne({ Login });

        if (!user) return res.status(401).json({msg: 'The Login ' + Login + ' is not associated with any account. Double-check your credentials and try again.'});

        //validate password
        if (!user.comparePassword(Password)) return res.status(401).json({message: 'Invalid Login or password'});

        // Make sure the user has been verified
        if (!user.IsVerified) return res.status(401).json({ type: 'not-verified', message: 'Your account has not been verified.' });

        // Login successful, write token, and send back user
        res.status(200).json({token: user.generateJWT(), user: user});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};


// ===EMAIL VERIFICATION
// @route GET api/verify/:token
// @desc Verify token
// @access Public
exports.verify = async (req, res) => {
    if(!req.params.token) return res.status(400).json({message: "We were unable to find a user for this token."});

    try {
        // Find a matching token
        const token = await Token.findOne({ token: req.params.token });

        if (!token) return res.status(400).json({ message: 'We were unable to find a valid token. Your token may have expired.' });

        // If we found a token, find a matching user
        User.findOne({ Login: token.Login }, (err, user) => {
            if (!user) return res.status(400).json({ message: 'We were unable to find a user for this token.' });

            if (user.IsVerified) return res.status(400).json({ message: 'This user has already been verified.' });

            // Verify and save the user
            user.IsVerified = true;
            user.save(function (err) {
                if (err) return res.status(500).json({message:err.message});

                res.status(200).send("The account has been verified. Please log in.");
            });
        });
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

// @route POST api/resend
// @desc Resend Verification Token
// @access Public
exports.resendToken = async (req, res) => {
    try {
        const { Email } = req.body;

        const user = await User.findOne({ Email });

        if (!user) return res.status(401).json({ message: 'The email address ' + req.body.Email + ' is not associated with any account. Double-check your email address and try again.'});

        if (user.IsVerified) return res.status(400).json({ message: 'This account has already been verified. Please log in.'});

        await sendVerificationEmail(user, req, res);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

async function sendVerificationEmail(user, req, res){
    try{
        const token = user.generateVerificationToken();

        // Save the verification token
        await token.save();

        let subject = "Account Verification Token";
        let to = user.Email;
        let from = "stockhub.app@gmail.com";
        let link="http://"+req.headers.host+"/api/auth/verify/"+token.token;
        let html = `<h1>Just one more step before you can get trading.</h1>
                    <p>Hello, ${user.Login}! Please click on the following <a href="${link}">link</a> to verify your account.</p> 
                    <br><p>If you did not request this, please ignore this email.</p>`;

        await sendEmail({to, from, subject, html});

        res.status(200).json({message: 'A verification email has been sent to ' + user.Email + '.'});
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}