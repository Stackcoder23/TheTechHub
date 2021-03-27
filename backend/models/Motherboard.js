const mongoose = require("mongoose");

const moboSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  form_factor: { type: String, required: true },
  chipset: { type: String, required: true },
  socket_type: { type: String, required: true },
  memory_slot: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const mobo = mongoose.model("motherboard", moboSchema);

module.exports = mobo;
