const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderCode: { type: String, unique: true },
    wayCode: { type: String, unique: true },
    receivingParty: { type: String, required: true },
    sendingParty: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    price: { type: Number, required: true },
    moneyCollected: { type: Number },
    area: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
