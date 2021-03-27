const mongoose = require("mongoose");

const coolerSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  fan_rpm: { type: Number, required: true },
  noise_level: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const cooler = mongoose.model("cooler", coolerSchema);

module.exports = cooler;
