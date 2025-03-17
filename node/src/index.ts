import dotenv from "dotenv";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/tasks";
import cors from "cors"; 

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); 
const PORT = process.env.PORT || 5174; // Default value if .env is missing

// Middlewares
app.use(express.json()); // Parse JSON requests
app.use("/api", taskRoutes); // Mount routes

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:5175/merntasks';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB ✔️'))
  .catch(error => console.error('Error:', error.message));

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at PORT: ${PORT}`);
});
