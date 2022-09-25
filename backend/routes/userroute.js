const express = require("express");
const isAuth = require("../middleware/auth");
const User = require("../controller/usercontroller");
let user = new User();
const validation = require("../middleware/validation.js");

const router = express.Router();

router.post("/checkauth", user.checkAuth.bind(user));

router.post("/login", validation.loginValidationRules(), user.login.bind(user));

router.post(
  "/signup",
  validation.signupValidationRules(),
  user.signup.bind(user)
);

router.post("/verifyemail", user.verifyEmail.bind(user));

router.post(
  "/forgetpassword",
  validation.forgetPasswordValidationRules(),
  user.forgetPassword.bind(user)
);

router.post(
  "/resetpassword",
  validation.resetPasswordValidationRules(),
  user.resetPassword.bind(user)
);

router.post(
  "/changepassword",
  isAuth,
  validation.changePasswordValidationRules(),
  user.changePassword.bind(user)
);

router.get("/profile", isAuth, user.getProfile.bind(user));

module.exports = router;
