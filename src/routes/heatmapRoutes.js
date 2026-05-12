const express = require("express");
const router = express.Router();

const Event = require("../models/Event");
const { getHeatmapData } = require("../controllers/heatmapController");

// GET click data for a page

router.get("/", getHeatmapData);

module.exports = router;
