const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    userid: { type: String, required: true},
    price: { type: Number, required: true},
    image: { type: String, required: true},
    name: { type: String, required: true},
});

cartSchema.index({ userid : 1, name: 1 }, { unique: true });

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
