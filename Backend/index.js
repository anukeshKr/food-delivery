import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { foodRouter } from "./routes/foodroute.js";
import path from "path";
import { fileURLToPath } from "url";
import userRouter from "./routes/useroute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartroute.js";
import orderRouter from "./routes/orderroute.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// app config
const app = express();
const Port = 4000;


//middleware
app.use(express.json());
app.use(cors())

//connection DB
connectDB()

//API endpoint
app.use("/api/food",foodRouter);
app.use("/images",express.static(path.join(__dirname, "uploads")))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("Welcome")
})

app.listen(Port,()=>console.log(`Server Started At http://localhost:${Port}`))
