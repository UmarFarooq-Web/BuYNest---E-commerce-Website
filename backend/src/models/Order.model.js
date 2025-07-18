import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  Data: {
    FullName:String,
    Email:String,
    PhoneNumber:String,
    Address: String,
    City: String,
    State: String,
    Zip: String
  },
  OrderItems: [{
    ProductId: String,
    Quantity: Number
  }],
  Payment:{
    PaymentType:String,
    CardData:Object
  },
  Total: Number,
  OrderStatus: { type: String, enum: ['Pending', 'Confirmed','Cancelled'], default: 'Pending' },

});

const OrderModel = mongoose.model('Order', orderSchema);

export default OrderModel