const express = require("express");
const cors = require("cors");
const { newsRoute } = require("./routes/news.route");
const logErrors = require("./ErrorHandlers/logErrors");
const clientErrorHandler = require("./ErrorHandlers/clientErrorHandler");
const errorHandler = require("./ErrorHandlers/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

// Define middleware to parse incoming requests as JSON
app.use(express.json());

// cor issue addressed
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

// News route for scrapping
app.use("/", newsRoute);
// app.get("/user", userRoute);

// default response from the api
app.get("/", (req, res) => {
  res.send("app is running smooth.");
});

// Error handlers
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
