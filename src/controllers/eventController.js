const Event = require("../models/Event");
const asyncHandler = require("../middleware/asyncHandler");

exports.createEvent = asyncHandler(async (req, res) => {
  const event = await Event.create(req.body);

  res.status(201).json({
    success: true,
    data: event,
  });
});
