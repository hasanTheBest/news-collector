const mongoose = require("mongoose");

const connectionString = "YOUR_MONGODB_CONNECTION_STRING";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const newsCollectorSchema = new mongoose.Schema({
  title: String,
  link: String,
  excerpt: String,
  imgSrc: String,
  time: String,
});

module.exports = mongoose.model("newsCollectorModel", newsCollectorSchema);
