import express from 'express'
// import multer from 'multer'
import multer from 'multer'
import uploadFromBuffer from "../utils/cloudinaryUpload.js"
import Product from '../models/Product.model.js';
import OrderModel from '../models/Order.model.js';
import ReviewModel from '../models/Review.model.js';

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

    try {

        const total = await Product.countDocuments(searchQuery);
        const products = await Product.find(searchQuery).skip(skip).limit(limit);


        res.status(200).json({
            products,
            totalProducts: total,
            pages: Math.ceil(total / limit),
            currentPage: page,

        })
    } catch (error) {
        console.log("Error in /admin/get-product : ", error)
        res.status(500).json({ message: "Error while fetching data" })
    }


})


AdminRouter.get('/orders', async (req, res) => {
    try {
        const orders = await OrderModel.find().sort({ createdAt: -1 });

        const formattedOrders = orders.map((order, index) => ({
            OrderId: `ORD${1000 + index + 1}`,
            Customer: order.Data.FullName,
            Email: order.Data.Email,
            Phone: order.Data.PhoneNumber,
            Total: order.Total,
            OrderStatus: order.OrderStatus,
            PaymentType: order.Payment.PaymentType,
            Date: order._id.getTimestamp().toISOString().split('T')[0],
        }));

        res.status(200).json(formattedOrders);
    } catch (err) {
        console.error("Error fetching formatted orders:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

AdminRouter.get("/dashboard", async (req, res) => {
    const TotalOrders = await OrderModel.countDocuments();
    const PendingOrders = await OrderModel.countDocuments({ OrderStatus: "Pending" })
    const OutOfStockProducts = await Product.countDocuments({ Quantity: 0 })
    const TotalSalesArray = await OrderModel.find().select({ Total: 1 })

    let TotalSales = 0

    TotalSalesArray.forEach(element => {
        TotalSales += element.Total
    });


    const TotalProfit = (TotalSales * 0.40).toFixed(2)

    const RawReviews = await ReviewModel.find()
    console.log(RawReviews);

    const Reviews = await Promise.all(
        RawReviews.map(async (e) => {
            const product = await Product.findById(e.ProductId).select({_id:1 , Title:1 , Images:1}); // Only fetch Title if needed
            return {
                Product: {_id:product._id , Title:product.Title , Image:product.Images[0]},
                Customer: e.Name,
                Rating: e.Rating,
                Review: e.Review,
                Status: e.Status,
                Time: e.createdAt,
            };
        })
    );

    // {
    //     Product: "Wireless Headphones",
    //     Customer: "Alice Johnson",
    //     Rating: 4.5,
    //     Review: "Great sound quality and battery life.",
    //     Status: "APPROVED",
    //     Time: 1720017000000
    // },


    const finalFile = {
        TotalOrders,
        PendingOrders,
        OutOfStockProducts,
        TotalSales,
        TotalProfit,
        Reviews
    }
    res.status(200).json(finalFile)
})

export default AdminRouter