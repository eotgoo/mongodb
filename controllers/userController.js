const User = require("../Model/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(200).json({ message: "Хэрэглэгчдийн мэдээлэл хоосон байна." });
    }

    res.status(201).json({ message: "Хэрэглэгчдийн мэдээлэл олдлоо.", users });
  } catch (error) {
    // res.status(400).json({ message: "alda garla", error: error.message });
    next(error);
  }
};

const createUser = async (req, res, next) => {
  const { name, email, password, profileImg } = req.body;

  try {
    if (!name || !email || !password) {
      res
        .status(400)
        .json({ message: "Нэр, имэйл эсвэл нууц үг байхгүй байна." });
    }

    const user = await User.create({
      name,
      email,
      password,
      profileImg,
    });
    res.status(201).json({ message: "Амжилттай бүртгэгдлээ", user });
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} iim user alga!!` });
  }
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({ message: `${id} tai hereglech obso!` });
    }
    res.status(200).json({ message: `iim ${id} tai user oldtson!`, user });
  } catch (error) {
    // res.status(400).json({ message: "error", error: error.message });
    next(error);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} iim user alga!!` });
  }
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      res.status(400).json({ message: `${id} -тэй хэрэглэгч олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} тэй хэрэглэгч шинэчлэгдлээ`, user });
  } catch (error) {
    // res.status(400).json({ message: "error", error: error.message });
    next(error);
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
    // res.status(400).json({ message: "error", error: error.message });
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.find({ email, password });

  try {
    if (!user.length) {
      res.status(400).json({ message: `email or password bru bna! `, user });
      return;
    }
    res.status(200).json({ message: `success`, user });
  } catch {
    // res.status(400).json({ message: "error", error: error.message });
    next(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  login,
};
