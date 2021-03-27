const mongoose = require("mongoose");

const ramSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  speed: { type: Number, required: true },
  memory: { type: Number, required: true },
  qty: { type: Number, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const ram = mongoose.model("ram", ramSchema);

module.exports = ram;
