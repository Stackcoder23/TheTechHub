const mongoose = require("mongoose");

const cabinetSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  side_panel: { type: String, required: true },
  model: { type: String, required: true },
  type: { type: String, required: true },
  color: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const cabinet = mongoose.model("cabinet", cabinetSchema);

module.exports = cabinet;
