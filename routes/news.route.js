const express = require("express");
const router = express.Router();

// imports
const newsController = require("../controllers/newsController");

// get all tours
router.route("/news").get(newsController.getAllNews);

module.exports = router;
