const express = require("express");
const router = express.Router();

const asyncHandler = require("../middleware/asyncHandler");
const Event = require("../models/Event");
const {
  getSessions,
  getSessionEvents,
} = require("../controllers/sessionController");

// GET all sessions with event counts
router.get("/", getSessions);
router.get("/:sessionId/events", getSessionEvents);

module.exports = router;
