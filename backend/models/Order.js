const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    userid: { type: String, required: true},
    productname: { type: String, required: true},
    amount: { type: Number, required: true},
    address: { type: String, required: true},
    date: { type: Date, default: Date.now },
});

const order = mongoose.model("order", orderSchema);

module.exports = order;
