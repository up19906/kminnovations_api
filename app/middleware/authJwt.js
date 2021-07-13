const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const User = require("../models/bb_user.model");

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.user_idcard = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findOne(req.user_idcard, next, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving.",
      });
    else res.send(data);
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
};

module.exports = authJwt;
