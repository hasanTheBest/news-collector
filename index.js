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

/* const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

const eventSourceRoute = require("./eventSource/eventSourceRoute");

app.use(cors());

// app.use(express.static("public")); // Serve static files (e.g., your React app)

app.use("/", eventSourceRoute); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}); */
