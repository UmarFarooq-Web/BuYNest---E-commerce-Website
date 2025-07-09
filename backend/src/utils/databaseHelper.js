import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const result = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error while connection to database : " , error)
    }
}

export default connectDB