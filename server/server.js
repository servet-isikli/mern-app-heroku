const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes - // Urun rotalarini kullanma
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Routes - // Kullanici rotalarını kullanma
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

module.exports = app;
