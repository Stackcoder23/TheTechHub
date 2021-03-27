const mongoose = require("mongoose");

const prebuildSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  processor: { type: String, required: true },
  motherboard: { type: String, required: true },
  graphicscard: { type: String, required: true },
  storage: { type: String, required: true },
  cabinet: { type: String, required: true },
  psu: { type: String, required: true },
  ram: { type: String, required: true },
  cooler: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});
const prebuild = mongoose.model("prebuild", prebuildSchema);

module.exports = prebuild;
