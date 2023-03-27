const express = require("express");
const {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  login,
  register,
} = require("../controllers/userController");
const { checkLogin, authorization } = require("../logger/auth");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router
  .route("/")
  .post(createUser)
  .get(checkLogin, authorization("User"), getAllUsers);
router
  .route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(authorization, deleteUser);

module.exports = router;
