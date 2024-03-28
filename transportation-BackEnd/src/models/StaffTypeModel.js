const mongoose = require("mongoose");

const staffTypeSchema = new mongoose.Schema(
  {
    staffTypeCode: { type: String, unique: true },
    nameStaff: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const StaffType = mongoose.model("StaffType", staffTypeSchema);

module.exports = StaffType;
