const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const customerSchema = mongoose.model("customer", CustomerSchema);

module.exports = customerSchema;
