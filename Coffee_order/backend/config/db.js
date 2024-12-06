import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://hirushinirashmika:hirushinirashmika@cluster0.lzbs5.mongodb.net/Coffee_Website').then(()=>console.log("DB Connected"));
}