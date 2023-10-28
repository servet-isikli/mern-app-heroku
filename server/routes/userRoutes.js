// userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Kaydolma işlemi
router.post("/register", userController.register);

// Giriş işlemi
router.post("/login", userController.login);

// Çıkış işlemi
router.post("/logout", userController.logout);

// Diğer kullanıcı işlemleri rotalarını burada ekleyebilirsiniz

module.exports = router;
