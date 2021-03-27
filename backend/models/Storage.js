const mongoose = require("mongoose");

const storageSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  rpm: { type: String, required: true },

  type: { type: String, required: true },
  interface: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
});

const storage = mongoose.model("storage", storageSchema);

module.exports = storage;
