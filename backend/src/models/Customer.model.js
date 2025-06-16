import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  FullName: String,
  Email: { type: String, unique: true },
  PhoneNumber: String,
  Password: String,
  ProfilePic: String,
  IsVerified: Boolean,
  Addresses: [{
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  }],
});

module.exports = mongoose.model('Customer', customerSchema);