const express = require("express");
const router = express.Router();

const { body } = require("express-validator");

const Event = require("../models/Event");
const asyncHandler = require("../middleware/asyncHandler");
const validateRequest = require("../middleware/validateRequest");
const { createEvent } = require("../controllers/eventController");

router.post(
  "/",
  [
    body("sessionId").notEmpty().withMessage("Session ID required"),

    body("type").isIn(["page_view", "click"]).withMessage("Invalid event type"),

    body("url").notEmpty().withMessage("URL required"),
  ],
  validateRequest,
  createEvent,
);

module.exports = router;
