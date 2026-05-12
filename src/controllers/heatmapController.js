const Event = require("../models/Event");
const asyncHandler = require("../middleware/asyncHandler");

exports.getHeatmapData = asyncHandler(async (req, res) => {
  const { url } = req.query;

  const clicks = await Event.find({
    type: "click",
    url,
  })
    .select("x y timestamp")
    .lean();

  res.json({
    success: true,
    data: clicks,
  });
});
