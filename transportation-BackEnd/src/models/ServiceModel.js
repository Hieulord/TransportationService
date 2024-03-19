const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    serviceCode: { type: String, require: true, unique: true },
    name: { type: String, require: true },
    image: { type: String, require: true },
    type: { type: String, require: true },
    evaluate: { type: Number, require: true },
    price: { type: Number, require: true },
    description: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
