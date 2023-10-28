// const Category = require("../models/Category");

// // Tüm kategorileri listeleme
// exports.getAllCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // Belirli bir kategoriyi getirme
// exports.getCategoryById = async (req, res) => {
//   const categoryId = req.params.id;
//   try {
//     const category = await Category.findById(categoryId);
//     if (!category) {
//       return res.status(404).json({ message: "Category not found" });
//     }
//     res.json(category);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // Yeni kategori oluşturma
// exports.createCategory = async (req, res) => {
//   const { name } = req.body;
//   try {
//     const category = await Category.create({ name });
//     res.status(201).json(category);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // Bir kategoriyi güncelleme
// exports.updateCategory = async (req, res) => {
//   const categoryId = req.params.id;
//   const { name } = req.body;
//   try {
//     const updatedCategory = await Category.findByIdAndUpdate(
//       categoryId,
//       { name },
//       { new: true }
//     );
//     if (!updatedCategory) {
//       return res.status(404).json({ message: "Category not found" });
//     }
//     res.json(updatedCategory);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };

// // Bir kategoriyi silme
// exports.deleteCategory = async (req, res) => {
//   const categoryId = req.params.id;
//   try {
//     const deletedCategory = await Category.findByIdAndDelete(categoryId);
//     if (!deletedCategory) {
//       return res.status(404).json({ message: "Category not found" });
//     }
//     res.json({ message: "Category deleted" });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };
