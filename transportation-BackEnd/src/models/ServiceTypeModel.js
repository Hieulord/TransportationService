const mongoose = require("mongoose");

const serviceTypeSchema = new mongoose.Schema(
  {
    serviceTypeCode: { type: String, unique: true },
    nameType: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const ServiceType = mongoose.model("ServiceType", serviceTypeSchema);

module.exports = ServiceType;
