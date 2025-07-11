import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async () => {
  try {
    // console.log(process.env.PORT);
    // console.log(process.env.MONGODB_URL);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/vidtube`
    );
    console.log(
      `Mongo DB connected  DB host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongo DB connection error");
    process.exit(1);
  }
};

export default connectDB;
