import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  CustomerId:String,
  ShippingAddress: {
    addressLine1: String,
    addressLine2: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  OrderItems: [{
    ProductId: String,
    Quantity: Number
  }],
  Total: Number,
  PaymentStatus: { type: String, enum: ['Paid', 'COD'], default: 'COD' },
  OrderStatus: { type: String, enum: ['Pending', 'Confirmed','Cancelled'], default: 'Pending' },

});

module.exports = mongoose.model('Order', orderSchema);