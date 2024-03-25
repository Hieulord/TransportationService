const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    orderCode: { type: String},
    wayCode: { type: String},
    receivingParty: { type: String},
    sendingParty: { type: String},
    deliveryAddress: { type: String},
    price: { type: Number},
    moneyCollected: { type: Number },
    area: { type: String},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
