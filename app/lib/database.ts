import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState)
        return true;

    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("MongoDB Connected");
    } catch (err) {
        console.error(err);
    }
}