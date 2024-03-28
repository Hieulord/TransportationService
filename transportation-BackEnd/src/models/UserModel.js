const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false, require: true }, // Dùng để phân quyền
    phone: { type: String, require: true },
    access_token: { type: String, require: true },
    refresh_token: { type: String, require: true },
  },
  {
    timestamps: true, 
    versionKey: false// Thời gian tạo và usset
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
