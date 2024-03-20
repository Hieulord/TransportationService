const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    serviceCode: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String },
    type: { type: String, required: true },
    evaluate: { type: Number, required: true },
    price: { type: Number, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
