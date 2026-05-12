const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    sessionId: {
      type: String,
      required: true,
      index: true,
    },

    type: {
      type: String,
      enum: ["page_view", "click"],
      required: true,
      index: true,
    },

    url: {
      type: String,
      required: true,
      index: true,
    },

    timestamp: {
      type: Date,
      default: Date.now,
      index: true,
    },

    x: Number,

    y: Number,

    userAgent: String,

    screenWidth: Number,

    screenHeight: Number,
  },
  {
    timestamps: true,
  },
);

// Compound indexes
eventSchema.index({ sessionId: 1, timestamp: 1 });

eventSchema.index({ url: 1, type: 1 });

module.exports = mongoose.model("Event", eventSchema);
