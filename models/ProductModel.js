const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  // Diğer ürün özellikleri eklenebilir
});

const ProductModel = mongoose.model("ProductModel", productSchema);

module.exports = ProductModel;
