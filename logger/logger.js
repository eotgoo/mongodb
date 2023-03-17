const logger = (req, res, next) => {
  console.log("Middleware!?");
  req.myName = "Hi Azure";
  next();
};

module.exports = logger;
