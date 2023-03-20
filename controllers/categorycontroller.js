const Category = require("../Model/Category");

const getAllCategories = async (req, res) => {
  try {
    const users = await Category.find({});
    res.status(201).json({ message: "oldlo", users });
  } catch (error) {
    res.status(400).json({ message: "alda garla", error: error.message });
  }
};

const createCategory = async (req, res) => {
  const { title, description, categoryRating } = req.body;

  if (!title || !description || !categoryRating) {
    res.status(400).json({ message: "!!!" });
  }
  try {
    const user = await Category.create({
      title: req.body.title,
      description: req.body.description,
      categoryRating: req.body.categoryRating,
    });
    res.status(201).json({ message: "success", user });
  } catch (error) {
    res.status(400).json({ message: "unsuccessful!", error: error.message });
  }
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `${id} iim category alga!!` });
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
      .status(201)
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
