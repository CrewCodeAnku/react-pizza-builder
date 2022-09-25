const { validationResult } = require("express-validator/check");
const User = require("../model/user");
const UserUtility = require("../utility/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserController {
  checkAuth = (req, res) => {
    const token = req.body.token;
    if (!token) {
      return res.json(helper.showValidationErrorResponse("Token is required!"));
    }
    jwt.verify(token, process.env.SECRET, (err, data) => {
      console.log(data);
      if (err) {
        return res.json(
          helper.showFailedResponse("Token is expired!", {
            isTokenExpired: true,
          })
        );
      } else {
        return res.json(
          helper.showSuccessResponse("Token is valid!", {
            isTokenExpired: false,
          })
        );
      }
    });
  };

  login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(200).send({
        success: false,
        message: "Validation Failed",
        data: errors.array(),
      });
    }
    try {
      const data = req.body;
      User.login(data, async (err, resdata) => {
        if (err) {
          return res.json(
            helper.showDatabaseErrorResponse("Internal db error!", err)
          );
        } else {
          if (resdata.length == 0) {
            return res.json(
              helper.showFailedResponse("Email or password is wrong!", resdata)
            );
          } else {
            var isEmailVerified = await User.isEmailVerified(req.body.email);
            if (!isEmailVerified) {
              return res.json(
                helper.showFailedResponse(
                  "Email address not verified!",
                  isEmailVerified
                )
              );
            } else {
              bcrypt.compare(
                req.body.password,
                resdata[0].password,
                function (err, isMatch) {
                  if (isMatch) {
                    let token = jwt.sign(
                      {
                        data: {
                          userid: resdata[0]._id,
                          email: resdata[0].email,
                        },
                      },
                      process.env.SECRET,
                      { expiresIn: 10800 }
                    );
                    User.updateUserToken(
                      req.body.email,
                      token,
                      (err, resdata1) => {
                        if (err) {
                          return res.json(
                            helper.showDatabaseErrorResponse(
                              "Internal db error!",
                              err
                            )
                          );
                        } else {
                          return res.json(
                            helper.showSuccessResponse(
                              "Login Successful!",
                              resdata1
                            )
                          );
                        }
                      }
                    );
                  } else {
                    return res.json(
                      helper.showFailedResponse(
                        "Email or password is wrong!",
                        resdata
                      )
                    );
                  }
                }
              );
            }
          }
        }
      });
    } catch (error) {
      res.json(
        helper.showInternalServerErrorResponse("Internal server error!")
      );
    }
  };

  signup = async (req, res) => {
    try {
      const data = req.body;
      User.getUserByEmailAndPlatform(
        req.body.email,
        req.body.platform,
        (err, resdata) => {
          if (resdata) {
            return res.json(
              helper.showFailedResponse(
                "User with this email address already registered!",
                resdata
              )
            );
          } else {
            bcrypt.hash(data.password.toString(), 12).then((hashedPassword) => {
              data.password = hashedPassword;
              User.addUser(data, (err, resdata) => {
                if (err) {
                  //console.log("Error", err);
                  return res.json(
                    helper.showDatabaseErrorResponse("Internal db error!", err)
                  );
                } else {
                  UserUtility.createRandomToken()
                    .then((token) =>
                      UserUtility.setRandomToken(token, req.body.email)
                    )
                    .then((token) =>
                      UserUtility.sendEmailVerification(
                        req,
                        res,
                        token,
                        resdata.name
                      )
                    )
                    .then(() => {
                      return res.json(
                        helper.showSuccessResponse(
                          "Registration successful please verify your email address",
                          resdata
                        )
                      );
                    })
                    .catch((err) => {
                      res.json(
                        helper.showInternalServerErrorResponse(
                          "Internal server error!"
                        )
                      );
                    });
                }
              });
            });
          }
        }
      );
    } catch (error) {
      console.log("Error", error);
      res.json(
        helper.showInternalServerErrorResponse("Internal server error!")
      );
    }
  };

  forgetPassword = (req, res) => {
    try {
      User.getUserByEmail(req.body.email, (err, resdata) => {
        if (err) {
          return res.json(
            helper.showDatabaseErrorResponse("Internal db error!", err)
          );
        } else {
          if (resdata) {
            UserUtility.createRandomToken()
              .then((token) =>
                UserUtility.setForgetPassToken(token, req.body.email)
              )
              .then((token) =>
                UserUtility.sendForgetEmail(req, res, token, resdata.name)
              )
              .then(() => {
                return res.json(
                  helper.showSuccessResponse(
                    "Email sent with further instruction",
                    resdata
                  )
                );
              })
              .catch((err) => {
                res.json(
                  helper.showInternalServerErrorResponse(
                    "Internal server error!"
                  )
                );
              });
          } else {
            return res.json(
              helper.showFailedResponse("Email address not found!", resdata)
            );
          }
        }
      });
    } catch (error) {
      return res.json(
        helper.showInternalServerErrorResponse("Internal server error!")
      );
    }
  };

  sendContactEmail = (req, res) => {
    try {
      UserUtility.sendContactEmail(req)
        .then(() => {
          return res.json(
            helper.showSuccessResponse(
              "Thanks for contacting me, i will be in touch with you soon!",
              {}
            )
          );
        })
        .catch((err) => {
          console.log("Error", err);
          console.log(err.response.body);
          res.json(
            helper.showInternalServerErrorResponse("Internal server error!")
          );
        });
    } catch (error) {
      console.log("Error1", error);
      console.log(error.Body.ReadAsStringAsync().Result);
      return res.json(
        helper.showInternalServerErrorResponse("Internal server error!")
      );
    }
  };

  sendOtp = (req, res) => {
    try {
      UserUtility.sendOTP(req, res)
        .then(() => {
          return res.json(
            helper.showSuccessResponse(
              "Otp sent to your email please verify your OTP",
              { email: req.body.email, otp: req.body.otp }
            )
          );
        })
        .catch((err) => {
          console.log("Error", err.response.body);
          res.json(
            helper.showInternalServerErrorResponse("Internal server error!")
          );
        });
    } catch (error) {
      console.log("Error1", error.response.data);
      return res.json(
        helper.showInternalServerErrorResponse("Internal server error!")
      );
    }
  };

  verifyOtp = (req, res) => {
    try {
      User.getUserByEmail(req.body.email, (err, resdata) => {
        if (err) {
          return res.json(
            helper.showDatabaseErrorResponse("Internal db error!", err)
          );
        } else {
          User.findOne({ otp: req.body.otp, email: req.body.email })
            .where("otpExpires")
            .gt(Date.now())
            .then((user) => {
              if (!user) {
                return res.json(
                  helper.showFailedResponse("Otp expires or invalid.", user)
                );
              } else {
                return res.json(
                  helper.showSuccessResponse("Otp successfully verified", user)
                );
              }
            });
        }
      });
    } catch (error) {
      return res.json(
        helper.showInternalServerErrorResponse("Internal server error!")
      );
    }
  };

  resetPasswordOtp = (req, res) => {
    User.findOne({ otp: req.body.otp, email: req.body.email })
      .where("otpExpires")
      .gt(Date.now())
      .then((user) => {
        if (!user) {
          return res.json(helper.showFailedResponse("Otp has expired.", user));
        }
        User.bcryptPassword(req.body.password).then((hashedPassword) => {
          user.password = hashedPassword;
          user.otp = undefined;
          user.otpExpires = undefined;
          user.save().then(() => {
            return res.json(
              helper.showSuccessResponse("Password successfully changed", user)
            );
          });
        });
      });
  };

  resetPassword = (req, res) => {
    User.findOne({ passwordResetToken: req.body.token })
      .where("passwordResetExpires")
      .gt(Date.now())
      .then((user) => {
        if (!user) {
          return res.json(
            helper.showFailedResponse(
              "Password reset token is invalid or has expired.",
              user
            )
          );
        }
        User.bcryptPassword(req.body.password).then((hashedPassword) => {
          user.password = hashedPassword;
          user.passwordResetToken = undefined;
          user.passwordResetExpires = undefined;
          user.save().then(() => {
            return res.json(
              helper.showSuccessResponse("Password successfully changed", user)
            );
          });
        });
      });
  };

  verifyEmail = async (req, res) => {
    User.findOne({ email: req.body.email })
      .then((userDoc) => {
        if (!userDoc) {
          return res.json(
            helper.showFailedResponse("Email address not found", userDoc)
          );
        }
        if (userDoc.emailVerified) {
          return res.json(
            helper.showFailedResponse("Email already verified", userDoc)
          );
        }
        if (req.body.token === userDoc.emailVerificationToken) {
          userDoc.emailVerificationToken = "";
          userDoc.emailVerified = true;
          userDoc.save();
          return res.json(
            helper.showSuccessResponse("Email successfully verified", userDoc)
          );
        }
      })
      .catch((error) => {
        return res.json(
          helper.showInternalServerErrorResponse("Internal server error!")
        );
      });
  };

  changePassword = async (req, res) => {
    User.findOne({ _id: req.userid }).then((userDoc) => {
      bcrypt.compare(
        req.body.oldpassword,
        userDoc.password,
        function (err, isMatch) {
          if (isMatch) {
            User.bcryptPassword(req.body.password).then((hashedPassword) => {
              User.updateMany(
                { email: userDoc.email },
                { $set: { password: hashedPassword } },
                (err, data) => {
                  return res.json(
                    helper.showSuccessResponse(
                      "Password successfully changed",
                      data
                    )
                  );
                }
              );
            });
          } else {
            return res.json(
              helper.showFailedResponse("Old password is wrong", userDoc)
            );
          }
        }
      );
    });
  };

  getProfile = async (req, res) => {
    User.findOne({ _id: req.userid }).then((userDoc) => {
      return res.json(helper.showSuccessResponse("Profile Data", userDoc));
    });
  };
}

module.exports = UserController;
