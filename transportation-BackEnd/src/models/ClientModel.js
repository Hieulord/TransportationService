const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    clientCode: { type: String, unique: true },
    nameClient: { type: String, required: true },
    genderClient: { type: String, required: true },
    dateClient: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
