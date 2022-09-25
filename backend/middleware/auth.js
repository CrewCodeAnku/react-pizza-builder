const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res
      .status(401)
      .send({ success: false, message: "Authorization token is required" });
  }
  const token = authHeader;
  try {
    let decodedToken = jwt.verify(token, process.env.SECRET);
    req.userid = decodedToken.data.userid;
    next();
  } catch (err) {
    return res
      .status(200)
      .send({ success: false, isAuth: false, message: "Not Authorized" });
  }
};
