const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const Token = require('../models/token');

const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
  EmailToken: String,
  IsVerified: {
    type: Boolean,
    default: false
  },
  Login: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  ResetPasswordToken: {
    type: String, 
    required: false
  },
  ResetPasswordExpires: {
    type: Date,
    required: false
  }
}, {timestamps: true});

UserSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('Password')) return next();

  bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.Password, salt, function(err, hash) {
          if (err) return next(err);

          user.Password = hash;
          next();
      });
  });
});

UserSchema.methods.comparePassword = function(Password) {
  return bcrypt.compareSync(Password, this.Password);
};

UserSchema.methods.generateJWT = function() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  let payload = {
      id: this._id,
      FirstName: this.FirstName,
      LastName: this.LastName,
      Email: this.Email,
      Login: this.Login,
      IsVerified: this.IsVerified,
  };

  return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: parseInt(expirationDate.getTime() / 1000, 10)
  });
};

UserSchema.methods.generatePasswordReset = function() {
  this.ResetPasswordToken = crypto.randomBytes(20).toString('hex');
  this.ResetPasswordExpires = Date.now() + 3600000; //expires in an hour
};

UserSchema.methods.generateVerificationToken = function() {
  let payload = {
      Login: this.Login,
      token: crypto.randomBytes(20).toString('hex')
  };

  return new Token(payload);
};


module.exports = mongoose.model("Users", UserSchema);
