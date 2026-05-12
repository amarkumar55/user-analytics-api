const Event = require("../models/Event");
const asyncHandler = require("../middleware/asyncHandler");

exports.getSessions = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  // Get total count of unique sessions
  const totalSessionsResult = await Event.aggregate([
    {
      $group: {
        _id: "$sessionId",
      },
    },
    {
      $count: "total",
    },
  ]);

  const totalSessions =
    totalSessionsResult.length > 0 ? totalSessionsResult[0].total : 0;

  const sessions = await Event.aggregate([
    {
      $group: {
        _id: "$sessionId",
        eventCount: { $sum: 1 },
        lastActivity: {
          $max: "$timestamp",
        },
      },
    },
    {
      $sort: {
        lastActivity: -1,
      },
    },
    {
      $skip: skip,
    },
    {
      $limit: limit,
    },
  ]);

  res.json({
    success: true,
    data: sessions,
    total: totalSessions,
    page,
    limit,
  });
});

exports.getSessionEvents = asyncHandler(async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 20;
  const skip = (page - 1) * limit;

  const totalEvents = await Event.countDocuments({
    sessionId: req.params.sessionId,
  });

  const events = await Event.find({
    sessionId: req.params.sessionId,
  })
    .sort({
      timestamp: 1,
    })
    .skip(skip)
    .limit(limit);

  res.json({
    success: true,
    data: events,
    total: totalEvents,
    page,
    limit,
  });
});
