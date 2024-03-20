const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    serviceCode: { type: String, unique: true },
    name: { type: String },
    imagePath: { type: String },
    type: { type: String },
    evaluate: { type: Number },
    price: { type: Number },
    description: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
