const { promisify } = require("util");
const crypto = require("crypto");
const randomBytesAsync = promisify(crypto.randomBytes);
const nodemailer = require("nodemailer");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const sgMail = require("@sendgrid/mail");

module.exports = {
  createRandomToken: () => {
    return new Promise(function (resolve, reject) {
      const token = randomBytesAsync(16).then((buf) => buf.toString("hex"));
      resolve(token);
    });
  },
  generateOTP: () => {
    return new Promise(function (resolve, reject) {
      const token = Math.floor(100000 + Math.random() * 900000);
      resolve(token);
    });
  },
  setOTP: (otp, email) => {
    return new Promise((resolve, reject) => {
      User.findOne({ email: email }).then((user) => {
        user.otp = otp;
        user.otpExpires = Date.now() + 3600000;
        user = user.save();
      });
      resolve(otp);
    });
  },
  setForgetPassToken: (token, email) => {
    return new Promise((resolve, reject) => {
      User.findOne({ email: email }).then((user) => {
        user.passwordResetToken = token;
        user.passwordResetExpires = Date.now() + 3600000;
        user = user.save();
      });
      resolve(token);
    });
  },
  setRandomToken: (token, email) => {
    return new Promise((resolve, reject) => {
      User.findOne({ email: email }).then((user) => {
        user.emailVerificationToken = token;
        user = user.save();
      });
      resolve(token);
    });
  },
  sendEmailVerification: (req, res, token, username) => {
    return new Promise((resolve, reject) => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: req.body.email,
        from: "noreply@crew-code.com",
        subject: "Please verify your email address",
        templateId: "d-099fc366915d4d7b9f9b7d6cd136aa75",
        dynamic_template_data: {
          sitetitle: req.body.websitename,
          preheader: req.body.websitename,
          username: username,
          emailcontent: `Thank you for registering.\n\nThis verify your email address please click on the following link, to complete the process`,
          buttonname: "Verify Email",
          buttonlink: `${req.body.frontendurl}/${req.body.email}/${token}\n\n`,
          endcontent:
            "If you did not request this, please ignore this email\n`",
          thankscontent: `Thanks, ${req.body.websitename}`,
        },
      };
      sgMail
        .send(msg)
        .then((res) => {
          //console.log("Response", res);
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  sendInviteEmail: (email, req) => {
    return new Promise((resolve, reject) => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: email,
        from: "noreply@crew-code.com",
        subject: "Invitation email",
        templateId: "d-099fc366915d4d7b9f9b7d6cd136aa75",
        dynamic_template_data: {
          sitetitle: req.body.websitename,
          preheader: req.body.websitename,
          username: "Welcome",
          sitetitle: "Exam Crew",
          preheader: "Exam Crew",
          emailcontent: `You are receiving this email because you have been invited for the exam ${req.body.title}.\n\n
          Please click on the following link, to complete the process:\n\n`,
          buttonname: "Sign Up",
          buttonlink: `${req.body.frontendurl}/${email}\n\n`,
          endcontent:
            "After completing the invite process you will be able to login and start the exam.\n`",
          thankscontent: `Thanks, ${req.body.websitename}`,
        },
      };
      sgMail
        .send(msg)
        .then((res) => {
          //console.log("Response", res);
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  sendForgetEmail: (req, res, token, username) => {
    return new Promise((resolve, reject) => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: req.body.email,

        from: "noreply@crew-code.com",
        subject: "Reset password",
        templateId: "d-099fc366915d4d7b9f9b7d6cd136aa75",
        dynamic_template_data: {
          sitetitle: req.body.websitename,
          preheader: req.body.websitename,
          username: username,
          sitetitle: "CrewCode Solution",
          preheader: "CrewCode Solution",
          emailcontent: `You are receiving this email because you (or someone else) have requested the reset of the password for your account.\n\n
          Please click on the following link, to complete the process:\n\n`,
          buttonname: "Reset password",
          buttonlink: `${req.body.frontendurl}/${req.body.email}/${token}\n\n`,
          endcontent:
            "If you did not request this, please ignore this email and your password will remain unchanged.\n`",
          thankscontent: `Thanks, ${req.body.websitename}`,
        },
      };
      sgMail
        .send(msg)
        .then((res) => {
          //console.log("Response", res);
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  sendContactEmail: (req, res) => {
    return new Promise((resolve, reject) => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: req.body.toEmail,
        from: "noreply@crew-code.com",
        subject: req.body.subject,
        templateId: "d-67e5413363764f51ba3c6b66fe4b9400",
        dynamic_template_data: {
          sitetitle: "CrewCode Solution",
          preheader: "CrewCode Solution",
          username: "Anku",
          emailcontent: `Your have recieved an email from Crew Code website with following content`,
          emailcontent1: `Email: ${req.body.fromemail}`,
          emailcontent2: `Name: ${req.body.name}`,
          emailcontent3: `Phone: ${req.body.phone}`,
          emailcontent4: `Message: ${req.body.comment}`,
          endcontent: "Please reply if you find it genuine",
          thankscontent: "Thanks, Crew Code",
        },
      };
      sgMail
        .send(msg)
        .then((res) => {
          //console.log("Response", res);
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  sendCancellationEmailToTeacher: (data, res) => {
    return new Promise((resolve, reject) => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: data.toEmail,
        from: "noreply@crew-code.com",
        subject: data.subject,
        templateId: "d-67e5413363764f51ba3c6b66fe4b9400",
        dynamic_template_data: {
          sitetitle: "Exam Crew",
          preheader: "Exam Crew",
          username: data.teachername,
          emailcontent: `Your have recieved an exam ${data.examname} cancellation request from ${data.studentname}`,
          endcontent:
            "You will find the cancellation request under Cancellation request tab",
          thankscontent: "Thanks, Exam Crew",
        },
      };
      sgMail
        .send(msg)
        .then((res) => {
          //console.log("Response", res);
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  sendapprovalStatusEmailToStudent: (req, res) => {
    //console.log("Request", req);
    return new Promise((resolve, reject) => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: req.body.studentemail,
        from: "noreply@crew-code.com",
        subject: "Cancellation Status",
        templateId: "d-67e5413363764f51ba3c6b66fe4b9400",
        dynamic_template_data: {
          sitetitle: "Exam Crew",
          preheader: "Exam Crew",
          username: req.body.studentname,
          emailcontent: `Your Exam ${req.body.examname} cancellation request has been ${req.body.approvalstatus} by ${req.body.teachername}`,
          endcontent: "You can check the exam after login to Exam Crew",
          thankscontent: "Thanks, Exam Crew",
        },
      };
      sgMail
        .send(msg)
        .then((res) => {
          //console.log("Response", res);
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  sendCancellationEmailToStudent: (req, res) => {
    return new Promise((resolve, reject) => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: req.body.toEmail,
        from: "noreply@crew-code.com",
        subject: req.body.subject,
        templateId: "d-67e5413363764f51ba3c6b66fe4b9400",
        dynamic_template_data: {
          sitetitle: "Exam Crew",
          preheader: "Exam Crew",
          username: req.body.studentname,
          emailcontent: `Your exam ${req.body.examname} scheduled on ${req.body.scheduledate} has been cancelled`,
          endcontent: "You can contact your examiner for further detail",
          thankscontent: "Thanks, Exam Crew",
        },
      };
      sgMail
        .send(msg)
        .then((res) => {
          //console.log("Response", res);
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  sendOTP: (req, res) => {
    return new Promise((resolve, reject) => {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: req.body.email,
        from: "noreply@crew-code.com",
        subject: "OTP to reset pin",
        templateId: "d-67e5413363764f51ba3c6b66fe4b9400",
        dynamic_template_data: {
          sitetitle: "Crew Note",
          preheader: "Crew Note",
          username: "User",
          emailcontent: `Your otp to reset password is ${req.body.otp}`,
          endcontent: "Please ignore this email if you not requested this",
          thankscontent: "Thanks, Crew Note",
        },
      };
      sgMail
        .send(msg)
        .then((res) => {
          //console.log("Response", res);
          resolve(true);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  verifyToken: (token, callback) => {
    jwt.verify(token, process.env.SECRET, callback);
  },
};
