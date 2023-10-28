const ProductModel = require("../models/ProductModel"); // Ürün modelini içe aktarıyoruz

// Ürünleri listeleme
exports.getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Ürün detayı
exports.getProductById = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Yeni ürün ekleme
exports.createProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Ürün güncelleme
exports.updateProduct = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Ürün silme
exports.deleteProduct = async (req, res) => {
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    if (product) {
      res.json({ message: "Product deleted" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// Kategoriye göre ürünleri listeleme
exports.getProductsByCategory = async (req, res) => {
  const category = req.params.category; // URL'den kategori adını alın

  try {
    const products = await ProductModel.find({ category: category });
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
