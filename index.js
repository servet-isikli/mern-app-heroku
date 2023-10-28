require("dotenv").config(); // .env dosyasındaki çevresel değişkenleri yükle
const app = require("./server"); // Express uygulamasını içe aktar
const mongoose = require("mongoose"); // Mongoose paketini içe aktar

const port = process.env.PORT || 5000;


// Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
app.listen(port, () => console.log(`Listening on port ${port}`));







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
