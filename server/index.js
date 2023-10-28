require("dotenv").config(); // .env dosyasındaki çevresel değişkenleri yükle
const app = require("./server"); // Express uygulamasını içe aktar
const mongoose = require("mongoose"); // Mongoose paketini içe aktar

const port = process.env.PORT || 5000;

// Mongoose Bağlantısı
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
    // Sunucuyu Başlat
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
