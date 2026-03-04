import express from "express";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";

// Import Routes
import movieRoutes from "./routes/movieRoutes.js";

config();
connectDB();

const app = express();

// API Routes
app.use("/movies", movieRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

// Handel unhandled promise rejections (e.g., database connection errors)
process.on("unhandledRejection", (err) => {
  console.erroe("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.erroe("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.erroe("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});

// GET, POST, PUT, DELETE
// http://localhost:5001/movies

// AUTH -signin, signup
// MOVIE -GETING ALL MOVIES
// USER - Profile
// WATCHLIST -
