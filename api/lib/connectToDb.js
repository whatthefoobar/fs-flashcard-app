import express from "express";
import mongoose from "mongoose";
const app = express();

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected");
      app.listen(5000, () => {
        console.log("Server running on port 5000");
      });
    })
    .catch((err) => console.log(err));
};

export default connectDB;
