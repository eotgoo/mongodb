const jwt = require("jsonwebtoken");

const checkLogin = (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(400).json({ message: "Token явуулаагүй байна." });
  }
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log(user);
  if (!user) {
    res.status(400).json({ message: "ene token huchingui bna!" });
  }
  next();
};

const authorization = (...roles) => {
  console.log("AUTH", roles);
  return (req, res, next) => {
    if (!req.headers.authorization) {
      res.status(400).json({ message: "Token явуулаагүй байна." });
    }
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(user);
    if (!user) {
      res.status(400).json({ message: "ene token huchingui bna!" });
    }

    if (!roles.includes(user.role)) {
      res.status(400).json({
        message: `uurin tani  ${user.role} ene uildelig hiij blohguie!`,
      });
    }

    next();
  };
};

module.exports = { checkLogin, authorization };
