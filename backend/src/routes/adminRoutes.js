import express from 'express'
// import multer from 'multer'
import multer from 'multer'
import uploadFromBuffer from "../utils/cloudinaryUpload.js"
import Product from '../models/Product.model.js';

const AdminRouter = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage })
const uploadImages = upload.array('images')


AdminRouter.post('/add-product', uploadImages, async (req, res) => {

    const {
        Title,
        RegularPrice,
        SalePrice,
        Quantity,
        Category,
        SubCategory,
        Brand,
        Variants,
        Description,
        Status
    } = req.body;

    let secureUrls = []

    try {
        const ImageUploadResults = await Promise.all(
            req.files.map(file => uploadFromBuffer(file.buffer))
        )

        ImageUploadResults.map(i => secureUrls.push(i.secure_url))

    } catch (error) {
        console.log("Error while uploading images in /add-product : ", error)
        return res.status(400).json({ message: "Error while upload images" });
    }
    console.log(JSON.parse(Variants))
    const product = new Product({
        Title,
        Status,
        RegularPrice,
        SalePrice,
        Quantity,
        Category,
        SubCategory,
        Brand,
        Description: JSON.parse(Description),
        Images: secureUrls,
        Variants: JSON.parse(Variants),
    })


    try {
        await product.save();
    } catch (error) {
        console.log("error while add to database in /add-product : ", error)
        return res.status(400).json({ message: "Error in Database" })
    }

    res.status(200).json({ message: "Product Added Successfully" })
})

AdminRouter.get('/get-products', async (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;
    const search = req.query.search || "";

    const searchQuery = {
        $or: [
            { Title: { $regex: search, $options: "i" } },
            { Description: { $regex: search, $options: 'i' } },
            { Category: { $regex: search, $options: "i" } },
            { SubCategory: { $regex: search, $options: "i" } },
            { Brand: { $regex: search, $options: "i" } },
        ]
    };

    const skip = (page - 1) * limit;

    try{

        const total = await Product.countDocuments(searchQuery);
        const products = await Product.find(searchQuery).skip(skip).limit(limit);
        
        
        res.status(200).json({
            products,
            totalProducts: total,
            pages: Math.ceil(total / limit),
            currentPage: page,
            
        })
    }catch(error){
        console.log("Error in /admin/get-product : " , error)
        res.status(500).json({message:"Error while fetching data"})
    }


})

export default AdminRouter