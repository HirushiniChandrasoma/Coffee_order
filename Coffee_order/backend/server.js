import dotenv from 'dotenv'; 
import express, { json } from "express";
import { connectDB } from "./config/db.js"
import cors from "cors";
dotenv.config();
// Routes
import authRoutes from "./routes/authRoutes.js";

// express app
const app = express();
const port = 3000

// middleware
app.use(json());

// cors
app.use(cors());

// Routes
app.use("/api/users", authRoutes);


//db connection
connectDB();


app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

