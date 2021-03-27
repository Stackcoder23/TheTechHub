const mongoose = require("mongoose");

const processorSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  cores: { type: Number, required: true },
  model: { type: String, required: true },
  speed: { type: String, required: true },
  socket_type: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const processor = mongoose.model("processor", processorSchema);

module.exports = processor;
