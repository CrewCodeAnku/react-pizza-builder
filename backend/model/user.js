const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    usertype: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetExpires: {
      type: Date,
    },
    emailVerificationToken: {
      type: String,
    },
    emailVerified: {
      type: Boolean,
    },
    token: { type: String },
    otp: { type: String },
    otpExpires: { type: Date },
    documents: [
      {
        type: Schema.Types.ObjectId,
        ref: "Document",
      },
    ],
  },
  { timestamps: true }
);

const User = (module.exports = mongoose.model("User", userSchema));

module.exports.login = function (data, callback) {
  User.find({ email: data.email, platform: data.platform }, callback);
};

module.exports.isEmailVerified = function (email, callback) {
  return User.findOne({ email: email, emailVerified: true }, callback);
};

module.exports.updateUserToken = function (email, token, callback) {
  var query = { email: email };
  var update = {
    token: token,
  };
  User.findOneAndUpdate(
    query,
    update,
    { upsert: true, fields: { password: 0 }, new: true },
    callback
  );
};

module.exports.addUser = function (data, callback) {
  var query = { email: data.email };
  var update = {
    name: data.name,
    email: data.email,
    password: data.password,
    usertype: data.usertype,
    platform: data.platform,
    role: "USER",
  };
  User.findOneAndUpdate(
    query,
    update,
    { upsert: true, fields: { password: 0 }, new: true },
    callback
  );
};

module.exports.getUserByEmail = function (email, callback) {
  var query = { email: email };
  User.findOne(query, { password: 0 }, callback);
};

module.exports.getUserByEmailAndPlatform = function (
  email,
  platform,
  callback
) {
  var query = { email: email, platform: platform };
  User.findOne(query, { password: 0 }, callback);
};

module.exports.getUserByUserId = function (userid, callback) {
  var query = { _id: userid };
  return User.findOne(query, { password: 0 }, callback);
};

module.exports.bcryptPassword = function (password) {
  let BCRYPT_SALT_ROUNDS = 12;
  return bcrypt.hash(password.toString(), BCRYPT_SALT_ROUNDS);
};
