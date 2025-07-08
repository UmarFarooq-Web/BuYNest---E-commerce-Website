import mongoose from "mongoose"

const VariantSchema = new mongoose.Schema({
    Type:String,
    Value:String,
} , {_id:false})


const ProductSchema = new mongoose.Schema({
    ProductId:String,   
    Title:String,
    Status:Boolean,
    RegularPrice:Number,
    SalePrice:Number,
    Quantity:Number,
    Category:String,
    SubCategory:String,
    Brand:String,
    Description:String,
    Images:[ {type:String}],
    Variants:[VariantSchema]
})

const Product = mongoose.model("Product" , ProductSchema)
export default Product;