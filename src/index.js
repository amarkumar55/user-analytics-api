const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const errorMiddleware = require("./middleware/errorMiddleware");
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const API_BASE = "/api/v1";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.send("Analytics API Running");
});

const eventRoutes = require("./routes/eventRoutes");
const sessionRoutes = require("./routes/sessionRoutes");
const heatmapRoutes = require("./routes/heatmapRoutes");

app.use(`${API_BASE}/sessions`, sessionRoutes);
app.use(`${API_BASE}/heatmap`, heatmapRoutes);
app.use(`${API_BASE}/events`, eventRoutes);

app.use(errorMiddleware);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});
