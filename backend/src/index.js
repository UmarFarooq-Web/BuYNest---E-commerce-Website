import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors"
import {Server} from "socket.io"
import http from "http"

const app = express();
const server = http.createServer(app);

const io = new Server(server , {
    cors:{
        origin:"http://localhost:5173",
        methods:["GET" , "POST"],
        credentials:true
    }
})

app.use(cors({
    origin:"http://localhost:5173",
    credential:true
}))
app.use(cookieParser())
app.use(express.json());



app.get("/" , (req , res)=>{
    res.send("hello world")
})




app.listen(3000 , ()=>{
    console.log("Server is Running : ")
})
