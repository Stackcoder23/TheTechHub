const mongoose = require("mongoose");

const graphicsCardSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },

  memory: { type: String, required: true },
  clock_speed: { type: String, required: true },
  interface: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const graphicsCard = mongoose.model("graphicscard", graphicsCardSchema);

module.exports = graphicsCard;
