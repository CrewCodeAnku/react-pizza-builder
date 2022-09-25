require("dotenv").config();
const AWS = require("aws-sdk");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3Config = new AWS.S3({
  accessKeyId: "Access key id",
  secretAccessKey: "Secret access key",
  Bucket: "bucket name",
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// this is just to test locally if multer is working fine.
const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const multerS3Config = multerS3({
  s3: s3Config,
  bucket: "myflipbook",
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    console.log(file);
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

const upload = multer({
  storage: multerS3Config,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // we are allowing only 5 MB files
  },
});

exports.profileImage = upload;
