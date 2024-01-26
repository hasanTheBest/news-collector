const express = require("express");
const router = express.Router();

// imports
const eventSourceController = require("./eventSourceController");

// get all tours
router.route("/sse").get(eventSourceController.getAllEvents);

module.exports = router;
