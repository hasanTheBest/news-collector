const express = require("express");
const cors = require("cors");
const app = express();

// imports
const newsRoute = require("./routes/news.route");

// port assigning
const PORT = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/", newsRoute);



// Server testing
app.listen(PORT, () => {
  console.log(`News Collector Server is running at the port ${PORT}`);
});