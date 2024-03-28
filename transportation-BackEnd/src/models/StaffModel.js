const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    staffCode: { type: String, unique: true},
    nameStaff: { type: String, required: true},
    gender: { type: String, required: true},
    dateStaff: { type: String, required: true},
    email: { type: String, required: true},
    phone: { type: String, required: true},
    address: { type: String, required: true },
    position: { type: String, required: true},
    area: {type: String, required: true},
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Staff = mongoose.model("Staff", staffSchema);

module.exports = Staff;
