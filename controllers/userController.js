const User = require("../Model/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json({ message: "oldlo", users });
  } catch (error) {
    res.status(400).json({ message: "alda garla", error: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: "invalid name, email or password!!" });
  }
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(400).json({ message: "unsuccessful!", error: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} iim user alga!!` });
  }
  try {
    const user = await User.findById(id);
    res.status(201).json({ message: `iim ${id} tai user oldtson!`, user });
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} iim user alga!!` });
  }
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    res
      .status(201)
      .json({ message: `iim ${id} tai user update hiigdle!`, user });
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} iim user alga!!` });
  }
  try {
    const user = await User.findByIdAndDelete(id);
    res.status(201).json({ message: `iim ${id} tai user delete!`, user });
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message });
  }
};

module.exports = { createUser, getAllUsers, getUser, updateUser, deleteUser };
