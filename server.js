import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoutes from "./Routes/productRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";
import authRoutes from "./Routes/authRoutes.js";

dotenv.config();

// Set up Express app
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// Set up routes
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on("open", () => {
  console.log("Database Connection is Successfull");
});

db.on("error", () => {
  console.log("Connection is not Established");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
