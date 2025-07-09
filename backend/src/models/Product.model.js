import mongoose from "mongoose"



const ProductSchema = new mongoose.Schema({
    ProductId:String,   
    Title:String,
    Status:String,
    RegularPrice:Number,
    SalePrice:Number,
    Quantity:Number,
    Category:String,
    SubCategory:String,
    Brand:String,
    Description:Object,
    Images:[ {type:String}],
    Variants:[{
        Option:String,
        value:String
    }]
} , {timestamps:true})

const Product = mongoose.model("Product" , ProductSchema)
export default Product;