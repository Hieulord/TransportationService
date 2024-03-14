const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    serviceCode: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    image: { type: String, require: true },
    type: { type: String, require: true },
    price: { type: Number, require: true },
  },
  {
    timestamps: true,
  }
);
const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
