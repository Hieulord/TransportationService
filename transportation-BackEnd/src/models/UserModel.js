const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    lastName: { type: String, require: true },
    firstName: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    isAdmin: { type: Boolean, default: false, require: true }, // Dùng để phân quyền
    phone: { type: Number, require: true },
    access_token: { type: String, require: true },
    refresh_token: { type: String, require: true },
  },
  {
    timestamps: true, // Thời gian tạo và usset
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
