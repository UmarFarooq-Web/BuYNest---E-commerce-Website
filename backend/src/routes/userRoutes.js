import express from 'express';
import Product from '../models/Product.model.js';
import ReviewModel from "../models/Review.model.js"
import multer from 'multer';
import OrderModel from '../models/Order.model.js';


const upload = multer()


const userRoutes = express.Router();

userRoutes.get('/get-home-products', async (req, res) => {

    try {

        const products = await Product.find({}, { _id: 1, Title: 1, RegularPrice: 1, SalePrice: 1, Images: 1 });

        if (!products) return res.status(500).json({ message: "No product found" });



        const finalProducts = products.map((e) => {
            return {
                _id: e._id,
                Title: e.Title,
                RegularPrice: e.RegularPrice,
                SalePrice: e.SalePrice,
                Image: e.Images[0] || "",
                Rating: 4.5,
                Reviews: 356
            }
        })



        res.status(200).json({ products: finalProducts })
    } catch (error) {
        console.log("error in /get-home-products : ", error);
        res.status(400).json({ message: "Error while fetching Products" })
    }

})


userRoutes.get('/get-product/:productId', async (req, res) => {
    const { productId } = req.params;

    const ProductData = await Product.findOne({ _id: productId })
    const ProductResponse = ProductData.toObject()

    const Ratings = await ReviewModel.find({ ProductId: productId }, { _id: 0, ProductId: 0 });

    let Rating = 0;
    if (Ratings.length > 0) {

        Ratings.forEach((e) => {
            Rating += e.Rating
        })

        Rating = (Rating / Ratings.length)?.toFixed(1)

        ProductResponse.NumberOfRatings = Ratings.length

        ProductResponse.AverageRating = parseFloat(Rating);

        ProductResponse.Ratings = Ratings;

    } else {


        ProductResponse.NumberOfRatings = 0

        ProductResponse.AverageRating = 0;

        ProductResponse.Ratings = Ratings;
    }

    res.status(200).json({ ProductData: ProductResponse })
})


userRoutes.post("/set-rating", upload.none(), async (req, res) => {
    const { ProductId, Name, Review, Rating } = req.body
    try {
        const review = new ReviewModel({
            ProductId,
            Name,
            Review,
            Rating,
            Status: "Pending"
        })

        await review.save();

        res.status(200).json({ message: "Review Add Successfully" })

    } catch (error) {
        res.status(400).json({ message: "Server Error" })
        console.log(error)
    }

})

userRoutes.post("/get-cart-products", async (req, res) => {
    try {

        let { Products } = req.body

        Products = JSON.parse(Products) || []

        console.log(Products)

        if (Products.length <= 0) return res.status(2000).json({ data: null })

        const Result = await Promise.all(
            Products.map((e) => Product.find({ _id: e.ProductId }))
        )

        console.log(Result);
        const p = Result.map((e) => {
            return {
                _id: e[0]._id,
                Image: e[0].Images[0],
                Title: e[0].Title,
                Variant: Products.find(v => v.ProductId == e[0]._id).Variants,
                Quantity: Products.find(v => v.ProductId == e[0]._id).Quantity,
                Total: Products.find(v => v.ProductId == e[0]._id).Quantity * e[0].SalePrice,
                Price: e[0].SalePrice
            }
        })
        res.status(200).json({ data: p })
    } catch (error) {
        res.status(400).json({ message: "failed to get data" })
        console.log("error in /get-cart-products : ", error)
    }


})

userRoutes.post("/place-order", async (req, res) => {
    const Data = req.body


    try {


        const order = new OrderModel({
            Data: Data.Data.Data,
            OrderItems: Data.OrderItems,
            Payment: {
                PaymentType: Data.Data.PaymentType,
                CardData: Data.Data.CardData ? Data.Data.CardData : null
            },
            Total: Data.Data.Total,
            OrderStatus: "Pending"
        })

        await order.save();
        res.status(200).json({ message: "Ordered successfull" })
    } catch (error) {
        console.log("Error in /place order endpoint : ", error)
        res.status(400).json({ message: "Interal Server Error" })
    }
})


userRoutes.get('/getFilteredProducts', async (req, res) => {
    try {
        const searchText = req.query.search || "";
        const availability = req.query.availability || "all"
        const minPrice = parseFloat(req.query.min) || 0;
        const maxPrice = parseFloat(req.query.max) || Number.MAX_SAFE_INTEGER;

        console.log("Search:", searchText);
        console.log("Availability:", availability);
        console.log("Price Range:", minPrice, "-", maxPrice);

        // Start building filter
        const filter = {
            $and: [
                {
                    $or: [
                        { Title: { $regex: searchText, $options: 'i' } },
                        { Brand: { $regex: searchText, $options: 'i' } },
                        { Category: { $regex: searchText, $options: 'i' } },
                        { SubCategory: { $regex: searchText, $options: 'i' } },
                        { 'Description.text': { $regex: searchText, $options: 'i' } },
                    ]
                },
                {
                    $or: [
                        { SalePrice: { $gte: minPrice, $lte: maxPrice } }
                    ]
                }
            ]
        };

        // Handle availability
        if (availability === "in") {
            filter.$and.push({ Quantity: { $gt: 0 } });
        } else if (availability === "out") {
            filter.$and.push({ Quantity: { $lte: 0 } });
        }

        const results = await Product.find(filter, {
            _id: 1,
            Title: 1,
            RegularPrice: 1,
            SalePrice: 1,
            Images: 1,
        });

        const finalProducts = results.map((e) => ({
            _id: e._id,
            Title: e.Title,
            RegularPrice: e.RegularPrice,
            SalePrice: e.SalePrice,
            Image: e.Images?.[0] || "",
            Rating: 4.5,
            Reviews: 356
        }));

        res.status(200).json(finalProducts);
    } catch (error) {
        console.error("Error in /getFilteredProducts:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});



export default userRoutes;