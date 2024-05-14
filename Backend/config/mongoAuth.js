import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/user-management')
    console.log("db connected...");
}