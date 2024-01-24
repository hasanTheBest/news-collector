const express = require("express");
const router = express.Router();

// imports
const tourController = require("../controllers/newsController");

// get all tours
router.route("/news").get(tourController.getAllNews);

module.exports = router;