import mongoose from "mongoose";
export const connectDB = () => {
    mongoose.connect(process.env.MongoUrl)
    console.log("db connected...");
}