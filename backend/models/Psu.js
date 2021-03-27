const mongoose = require("mongoose");

const psuSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  power: { type: Number, required: true },
  efficiency: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const psu = mongoose.model("psu", psuSchema);
module.exports = psu;
