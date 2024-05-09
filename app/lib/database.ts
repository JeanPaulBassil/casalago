import mongoose from "mongoose";

const connectDB = async () => {
    if (mongoose.connections[0].readyState)
        return true;

    try {
        console.log("Connecting to MongoDB", process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("MongoDB Connected");
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}

export default connectDB;