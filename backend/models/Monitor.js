const mongoose = require("mongoose");

const monitorSchema = mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  screen_size: { type: Number, required: true },
  resolution: { type: String, required: true },
  aspect_ratio: { type: String, required: true },
  response_time: { type: Number, required: true },
  refresh_rate: { type: Number, required: true },
  Panel: { type: String, required: true },
  price: { type: Number, required: true },
});

const monitor = mongoose.model("monitor", monitorSchema);

module.exports = monitor;
