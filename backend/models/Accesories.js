const mongoose = require("mongoose");

const accesoriesSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  features: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const accesories = mongoose.model("accesories", accesoriesSchema);

module.exports = accesories;
