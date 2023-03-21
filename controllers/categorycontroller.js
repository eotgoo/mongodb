const Category = require("../Model/Category");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(201).json({ message: "oldlo", categories });
  } catch (error) {
    res.status(400).json({
      message: "Категорийн мэдээллиг авахад алдаа гарлаа.",
      error: error.message,
    });
  }
};

const createCategory = async (req, res) => {
  const { title, description, categoryImg, categoryRating } = req.body;

  if (!title || !description || !categoryRating) {
    res
      .status(400)
      .json({ message: "Нэр, имэйл эсвэл нууц үг байхгүй байна." });
  }
  try {
    const category = await Category.create({
      title,
      description,
      categoryImg,
      categoryRating,
    });
    res.status(201).json({ message: "Амжилттай бүртгэгдлээ", category });
  } catch (error) {
    // res.status(400).json({ message: "unsuccessful!", error: error.message });

    next(err);
  }
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} -тэй категори олдсонгүй.` });
  }
  try {
    const user = await Category.findById(id);
    res.status(201).json({ message: `iim ${id} tai category oldtson!`, user });
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message });
  }
};

const updateCategory = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} iim category alga!!` });
  }
  try {
    const user = await Category.findByIdAndUpdate(id, req.body, { new: true });
    res
      .status(200)
      .json({ message: `iim ${id} tai category update hiigdle!`, user });
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} iim category alga!!` });
  }
  try {
    const user = await Category.findByIdAndDelete(id);
    res.status(201).json({ message: `iim ${id} tai category delete!`, user });
  } catch (error) {
    res.status(400).json({ message: "error", error: error.message });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
