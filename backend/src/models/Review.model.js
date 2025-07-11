import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  ProductId: String,
  Name: String,
  Review: String,
  Rating: Number,
  Status: { type: String, enum: ['Pending', 'Approved', 'Cancelled'], default: 'Pending' },
} , {timestamps:true});

const ReviewModel = mongoose.model('Review', reviewSchema);
export default ReviewModel