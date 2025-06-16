import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  ProductId: String,
  CustomerId: String,
  Rating: Number,
  Review: String,
  Status: { type: String, enum: ['Pending', 'Approved', 'Cancelled'], default: 'Pending' },
} , {timestamps:true});

module.exports = mongoose.model('Review', reviewSchema);