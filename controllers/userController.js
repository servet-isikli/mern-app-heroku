// userController.js
const User = require("../models/userModel");

// Yeni bir kullanıcı kaydı oluşturur
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Kullanıcı adı ve e-posta benzersiz olmalıdır
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Bu kullanıcı adı veya e-posta zaten kullanılıyor." });
    }

    // Yeni kullanıcı oluştur
    const newUser = new User({ username, email, password });

    // Kullanıcıyı veritabanına kaydet
    await newUser.save();

    res.status(201).json({ message: "Kullanıcı başarıyla kaydedildi." });
  } catch (error) {
    console.error("Kayıt hatası:", error);
    res.status(500).json({ message: "Kayıt sırasında bir hata oluştu." });
  }
};

// Kullanıcının giriş yapmasını sağlar
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Kullanıcıyı veritabanında bul
    const user = await User.findOne({ username });

    // Kullanıcı bulunamazsa
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı." });
    }

    // Şifre doğrulama
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Geçersiz şifre." });
    }

    // Kullanıcının oturumunu başlat
    // Bu aşamada JWT (JSON Web Token) gibi bir yöntem kullanabilirsiniz

    res.status(200).json({ message: "Giriş başarılı.", user });
  } catch (error) {
    console.error("Giriş hatası:", error);
    res.status(500).json({ message: "Giriş sırasında bir hata oluştu." });
  }
};

// Kullanıcının oturumunu sonlandırır
exports.logout = (req, res) => {
  // Oturum sonlandırma işlemleri burada yapılır
  // Örneğin, JWT'nin geçerliliğini sonlandırabilirsiniz

  res.status(200).json({ message: "Çıkış başarılı." });
};
