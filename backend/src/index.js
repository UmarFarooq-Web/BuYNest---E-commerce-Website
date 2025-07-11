import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors"
import {Server} from "socket.io"
import http from "http"
import AdminRouter from "./routes/adminRoutes.js";
import dotenv from 'dotenv'
import connectDB from "./utils/databaseHelper.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();
const server = http.createServer(app);

dotenv.config();

const io = new Server(server , {
    cors:{
        origin:"http://localhost:5173",
        methods:["GET" , "POST"],
        credentials:true
    }
})

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(cookieParser())
app.use(express.json());



app.use("/admin" , AdminRouter )

app.use("/user" , userRoutes)




app.listen(process.env.PORT , ()=>{
    connectDB()
    console.log("Server is Running : ")
   
})
