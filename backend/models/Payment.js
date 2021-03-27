const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    userid: { type: String, required: true},
    amount: { type: Number, required: true},
    name: { type: String, required: true},
    cardno: { type: Number, required: true},
    date: { type: Date, default: Date.now },
});

const payment = mongoose.model("payment", paymentSchema);

module.exports = payment;
