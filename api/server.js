import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import flashcardRoutes from "./routes/flashcardRoutes.js";
import connectDB from "./lib/connectToDb.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend requests
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Explicitly allow these
    allowedHeaders: ["Content-Type", "Authorization"], // Allow custom headers
    credentials: true, // Allow cookies & auth headers
  })
);

app.options("*", cors());

app.use(express.json()); // To parse JSON request body

// ✅ Example route
app.post("/api/auth/register", (req, res) => {
  console.log("Received registration request:", req.body);
  res.json({ message: "Registration successful!" });
});

// Routes
// app.use("/api/auth", authRoutes);
app.use("/api/flashcards", flashcardRoutes);

// Connect to MongoDB
connectDB();
