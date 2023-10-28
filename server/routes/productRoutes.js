const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Ürünleri listeleme
router.get("/", productController.getProducts);

// Ürün detayı
router.get("/:id", productController.getProductById);

// Yeni ürün ekleme
router.post("/", productController.createProduct);

// Ürün güncelleme
router.put("/:id", productController.updateProduct);

// Ürün silme
router.delete("/:id", productController.deleteProduct);

// // Kategoriye göre ürünleri listeleme
// router.get("/category/:category", productController.getProductsByCategory);

module.exports = router;
