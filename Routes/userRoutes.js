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
const checkRole = require("../utils/checkRole");
const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.route("/").post(checkRole, createUser).get(checkRole, getAllUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
