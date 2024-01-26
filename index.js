/*

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

*/

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3001;

const eventSourceRoute = require("./eventSource/eventSourceRoute");

app.use(cors());

// app.use(express.static("public")); // Serve static files (e.g., your React app)

app.use("/", eventSourceRoute);

/*
app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  let count = 0;

  const intervalId = setInterval(() => {
    res.write(`data: ${JSON.stringify({ message: `Update ${count++}` })}\n\n`);

    // Simulate periodic updates
    if (count === 5) {
      clearInterval(intervalId);
      res.end();
    }
  }, 1000);

  // Send an initial message
  res.write(`data: ${JSON.stringify({ message: "Connected to SSE" })}\n\n`);

  // Close the SSE connection when the client disconnects
  req.on("close", () => {
    clearInterval(intervalId);
    res.end();
  });
});

*/
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
