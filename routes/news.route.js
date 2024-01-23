const newsController = require("../controllers/newsController");
const express = require("express");
const router = express.Router();

router.route("/news").get(newsController);
